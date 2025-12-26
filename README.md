# NeoMotion

Frontend web application for Medical Care and Technology (MCT)

## Tech Stack

- React + Vite
- Three.js for 3D visualizations
- Modern UI/UX with premium design
- Framer Motion for animations
- TailwindCSS for styling

## Development

This project uses Vite for fast development and HMR (Hot Module Replacement).

### Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.development
# Edit .env.development with your backend API URL

# Run development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env.development` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3001
VITE_APP_NAME=NeoMotion
VITE_APP_ENV=development
```

For production, update `.env.production` with your production API URL.

## Features

- Interactive 3D models
- Modern galaxy-themed UI
- Responsive design
- Contact form with backend API integration
- Premium animations and effects

## API Integration

This frontend connects to a backend API for features like the contact form.

**For Backend Developers**: See [API_CONTRACT.md](./API_CONTRACT.md) for API specifications.

**For Integration**: See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) for setup and testing instructions.

## Project Structure

```
NeoMotion/
├── src/
│   ├── components/      # React components
│   ├── services/        # API service layer
│   ├── assets/          # Images, 3D models, etc.
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── .env.example         # Environment variables template
├── API_CONTRACT.md      # API specifications for backend
└── INTEGRATION_GUIDE.md # Team integration guide
```

## License

[Add your license here]