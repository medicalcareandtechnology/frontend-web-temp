# Frontend-Backend Integration Guide

This guide helps both frontend and backend teams work together on the NeoMotion project.

## Overview

- **Frontend**: React + Vite application
- **Backend**: Node.js API (to be implemented by backend team)
- **Communication**: REST API with JSON payloads

---

## For Frontend Developers

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NeoMotion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env.development
   ```
   
   The `.env.development` file should contain:
   ```env
   VITE_API_BASE_URL=http://localhost:3001
   VITE_APP_NAME=NeoMotion
   VITE_APP_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The frontend will be available at `http://localhost:5173`

### Working with the Backend

#### Using the API Service

All API calls should go through the centralized API service located at `src/services/api.js`.

**Example: Submitting Contact Form**
```javascript
import { submitContactForm } from '../services/api';

const handleSubmit = async (formData) => {
  try {
    const response = await submitContactForm(formData);
    console.log('Success:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

#### Environment Variables

- `VITE_API_BASE_URL`: Backend API base URL
  - Development: `http://localhost:3001`
  - Production: Update in `.env.production`

All environment variables must be prefixed with `VITE_` to be accessible in the frontend.

#### Testing Without Backend

If the backend is not ready yet, you can:

1. **Use mock data**: Create a mock API service
2. **Use the old Google Apps Script**: Temporarily revert to the old implementation
3. **Wait for backend**: Coordinate with backend team on timeline

---

## For Backend Developers

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Database (optional, based on your implementation)

### API Contract

Please refer to [`API_CONTRACT.md`](file:///d:/Projects/NeoMotion/API_CONTRACT.md) for detailed API specifications.

### Quick Start

1. **Create backend directory**
   ```bash
   mkdir backend
   cd backend
   npm init -y
   ```

2. **Install dependencies**
   ```bash
   npm install express cors dotenv nodemailer
   npm install --save-dev nodemon
   ```

3. **Create basic server** (`backend/server.js`)
   ```javascript
   const express = require('express');
   const cors = require('cors');
   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 3001;

   // Middleware
   app.use(cors({
     origin: ['http://localhost:5173', 'https://neomotion.vercel.app'],
     credentials: true
   }));
   app.use(express.json());

   // Health check endpoint
   app.get('/api/health', (req, res) => {
     res.json({ status: 'ok', timestamp: new Date().toISOString() });
   });

   // Contact form endpoint
   app.post('/api/contact', async (req, res) => {
     try {
       const { name, email, phone, message } = req.body;
       
       // Validate input
       if (!name || !email || !message) {
         return res.status(400).json({
           success: false,
           message: 'Missing required fields',
           errors: []
         });
       }

       // TODO: Implement email sending logic
       // TODO: Store in database (optional)

       res.json({
         success: true,
         message: 'Thank you for contacting us! We\\'ll get back to you soon.',
         submissionId: Date.now().toString()
       });
     } catch (error) {
       console.error('Error:', error);
       res.status(500).json({
         success: false,
         message: 'Internal server error'
       });
     }
   });

   app.listen(PORT, () => {
     console.log(\`Backend server running on http://localhost:\${PORT}\`);
   });
   ```

4. **Create environment file** (`backend/.env`)
   ```env
   PORT=3001
   NODE_ENV=development
   
   # Email configuration (example with Gmail)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@neomotion.com
   ```

5. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     }
   }
   ```

6. **Start the backend server**
   ```bash
   npm run dev
   ```

### CORS Configuration

Make sure to allow requests from:
- Development: `http://localhost:5173`
- Production: `https://neomotion.vercel.app` (or your production URL)

---

## Running Both Together

### Terminal 1: Backend
```bash
cd backend
npm run dev
```

### Terminal 2: Frontend
```bash
npm run dev
```

Now you can test the full integration:
1. Open browser to `http://localhost:5173`
2. Navigate to the contact page (`/contact`)
3. Fill out and submit the form
4. Check both terminal outputs for logs

---

## Testing the Integration

### 1. Health Check

Test if the backend is running:
```bash
curl http://localhost:3001/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2025-12-25T18:24:46.000Z"
}
```

### 2. Contact Form Submission

Test the contact endpoint:
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for contacting us! We'll get back to you soon.",
  "submissionId": "unique-id"
}
```

### 3. Frontend Testing

1. Start both frontend and backend servers
2. Open `http://localhost:5173/contact`
3. Fill out the contact form
4. Submit and verify:
   - Success message appears
   - Form clears
   - Backend logs show the request
   - No CORS errors in browser console

---

## Common Issues & Troubleshooting

### Issue: CORS Error

**Symptom**: Browser console shows CORS error

**Solution**:
- Ensure backend CORS configuration includes frontend URL
- Check that backend is running on the correct port
- Verify `VITE_API_BASE_URL` matches backend URL

### Issue: Network Error / Failed to Fetch

**Symptom**: "Unable to connect to the server" error

**Solution**:
- Verify backend server is running (`curl http://localhost:3001/api/health`)
- Check `VITE_API_BASE_URL` in `.env.development`
- Ensure no firewall blocking the connection

### Issue: Environment Variables Not Loading

**Symptom**: API calls go to wrong URL or undefined

**Solution**:
- Restart Vite dev server after changing `.env` files
- Ensure variables are prefixed with `VITE_`
- Check `.env.development` exists and has correct values

### Issue: Form Submission Fails

**Symptom**: Error message appears after submission

**Solution**:
- Check browser console for detailed error
- Verify backend endpoint is `/api/contact` (not `/contact`)
- Check request payload matches API contract
- Verify backend validation logic

### Issue: Email Not Sending

**Symptom**: Form submits successfully but no email received

**Solution**:
- Check backend email configuration
- Verify email service credentials
- Check backend logs for email sending errors
- Test email service separately

---

## Production Deployment

### Frontend

1. **Update environment variables**
   
   Edit `.env.production`:
   ```env
   VITE_API_BASE_URL=https://api.neomotion.com
   VITE_APP_NAME=NeoMotion
   VITE_APP_ENV=production
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Deploy** (e.g., to Vercel)
   ```bash
   vercel deploy
   ```

### Backend

1. **Set production environment variables** on your hosting platform
2. **Deploy backend** to your chosen platform (e.g., Railway, Render, AWS)
3. **Update frontend** `.env.production` with production backend URL
4. **Rebuild and redeploy frontend**

---

## Communication

### Frontend Team
- **Lead**: [Your Name]
- **Email**: [Your Email]

### Backend Team
- **Lead**: [Backend Developer Name]
- **Email**: [Backend Developer Email]

### Questions?

- Check the [API Contract](file:///d:/Projects/NeoMotion/API_CONTRACT.md) first
- Create an issue in the repository
- Reach out on team communication channel

---

## Next Steps

### Frontend Team
- [ ] Test with mock data while backend is in development
- [ ] Implement additional API endpoints as needed
- [ ] Add loading states and error handling
- [ ] Write frontend tests

### Backend Team
- [ ] Implement contact form endpoint per API contract
- [ ] Set up email service
- [ ] Add request validation
- [ ] Implement rate limiting
- [ ] Set up database (optional)
- [ ] Write backend tests
- [ ] Deploy to staging environment

---

## Version History

- **v1.0** (2025-12-25): Initial integration guide
