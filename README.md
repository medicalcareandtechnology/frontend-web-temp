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

## Codebase Analysis

The codebase has been reviewed to understand the current state of the application. Below are the key findings, including unused components and routing issues:

### Disconnected Pages
There are a few pages created in the `src/pages/` directory that are not actively connected to the application's routing (`App.jsx`):
1. **`Shop.jsx`**: It is imported in `App.jsx`, but it is completely unused. The `/shop` route currently redirects to `/coming-soon`.
2. **`ModelPage.jsx`**: This file is completely disconnected and not imported in the routing setup or any other file.
3. **`ProductDetail.jsx`**: This file is completely disconnected and not imported anywhere in the application.

### Disconnected Components
Some components in `src/components/` exist but are not used anywhere in the application flow:
1. **`ProductCard.jsx`**: Unused component.
2. **`Contact.jsx`**: Unused component. Note that there is a `ContactPage.jsx` which handles the contact functionality without using this component.
3. **`Features.jsx`**: Only imported inside `ProductDetail.jsx`, which itself is entirely disconnected from the app.

### Observations & Issues
- **Routing Dead Ends**: The `/shop` route redirects to the coming soon page, rendering the actual `Shop.jsx` page unreachable. If the `Shop` functionality is ready, the routing in `App.jsx` needs to be updated.
- **Unused Code**: Keeping disconnected pages and components (`ModelPage`, `ProductCard`, `Contact`) increases the repository size and can cause confusion. Consider removing them if they are no longer needed or wiring them up if they are part of an upcoming feature.
- **Vite Config**: The project correctly uses Vite. Ensure that when it's deployed, the disconnected components don't artificially increase the bundle size (Vite's tree-shaking usually handles this, but it's best practice to keep the source clean).

## License

[Add your license here]