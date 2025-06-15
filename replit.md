# replit.md

## Overview

This is a modern full-stack web application built with a React frontend, Express.js backend, and designed for deployment on Replit. The application serves as a dashboard for accessing various web tools and applications hosted on a VPS, with a clean and intuitive interface supporting both light and dark themes.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API with /api prefix

### Development Setup
- **Monorepo Structure**: Client and server code in separate directories with shared schema
- **Hot Reload**: Vite dev server with HMR for frontend, tsx for backend development
- **Type Safety**: Shared TypeScript types between frontend and backend

## Key Components

### Client Structure
```
client/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # shadcn/ui component library
│   ├── pages/            # Route components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   └── data/             # Static data and types
```

### Server Structure
```
server/
├── index.ts              # Main server entry point
├── routes.ts             # API route definitions
├── storage.ts            # Data access layer with memory storage
└── vite.ts              # Vite integration for development
```

### Shared Resources
```
shared/
└── schema.ts             # Database schema and validation
```

## Data Flow

### Frontend Data Management
1. **React Query**: Manages server state, caching, and synchronization
2. **Theme Provider**: Context-based theme management with localStorage persistence
3. **Component Communication**: Props and context for state sharing

### Backend Data Flow
1. **Express Middleware**: Request logging, JSON parsing, error handling
2. **Storage Interface**: Abstracted data access layer supporting both memory and database storage
3. **Route Handlers**: Process API requests and return JSON responses

### Database Schema
```typescript
// Users table structure
users: {
  id: serial (primary key)
  username: text (unique, not null)
  password: text (not null)
}
```

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **UI Components**: Comprehensive Radix UI ecosystem
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Database**: Drizzle ORM with Neon Database serverless PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Build Tools
- **Bundler**: Vite for frontend, esbuild for backend
- **CSS Processing**: PostCSS with Tailwind CSS
- **TypeScript**: Shared configuration across frontend and backend

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20, Web, PostgreSQL 16 modules
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: `npm run build` creates optimized bundles
- **Deployment**: Autoscale deployment target with proper build/run commands

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Assets**: Static files served from build output

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

## Changelog

```
Changelog:
- June 15, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```