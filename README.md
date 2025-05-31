# School Management System

A modern, responsive school management dashboard built with Next.js 14 and TypeScript. This application provides a comprehensive interface for managing school operations including students, teachers, parents, and administrative staff.

## 🚀 Features

- **Multi-Role Dashboard**: Separate interfaces for administrators, teachers, students, and parents
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **TypeScript Support**: Full TypeScript implementation for better code quality and developer experience
- **Component-Based Architecture**: Reusable React components for maintainable code

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
school-front/
├── public/                 # Static assets
│   ├── icons/             # UI icons (announcement, attendance, etc.)
│   └── logo.png           # Application logo
├── prisma/                # Database configuration
│   ├── schema.prisma      # Database schema
│   ├── seed.ts           # Database seeding
│   └── migrations/       # Database migrations
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── (dashboard)/   # Dashboard routes
│   │       ├── layout.tsx # Dashboard layout
│   │       ├── admin/     # Admin dashboard
│   │       ├── teacher/   # Teacher dashboard
│   │       ├── student/   # Student dashboard
│   │       ├── parents/   # Parent dashboard
│   │       └── sign-in/   # Authentication
│   ├── components/        # Reusable components
│   │   ├── Menu.tsx       # Navigation menu
│   │   ├── Navbar.tsx     # Top navigation bar
│   │   └── UserCard.tsx   # User statistics cards
│   └── lib/
│       ├── data.ts        # Data management utilities
│       └── prisma.ts      # Prisma client configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- PostgreSQL/MySQL database (or Docker for containerized setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd school-management-system/school-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Database Setup**
   
   **Option A: Using existing database**
   ```bash
   # Set up environment variables
   cp .env.example .env
   # Edit .env file with your database connection string
   ```
   
   **Option B: Using Docker (recommended)**
   ```bash
   # Start database with Docker Compose
   docker-compose up -d
   ```

4. **Initialize Prisma**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # Seed the database (optional)
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🗄️ Database Configuration

### Prisma Setup

This project uses Prisma as the ORM for database management. The database schema is defined in `prisma/schema.prisma`.

#### Key Prisma Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create and apply new migrations
npx prisma migrate dev --name your_migration_name

# Reset database (development only)
npx prisma migrate reset

# Open Prisma Studio (database GUI)
npx prisma studio

# Seed the database
npx prisma db seed
```

#### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/school_management"

# Next.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## 🐳 Docker Configuration

### Docker Compose Setup

Create a `docker-compose.yml` file for easy database setup:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    container_name: school_db
    restart: always
    environment:
      POSTGRES_USER: school_user
      POSTGRES_PASSWORD: school_password
      POSTGRES_DB: school_management
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Docker Commands

```bash
# Start database container
docker-compose up -d

# Stop database container
docker-compose down

# View container logs
docker-compose logs postgres

# Access database shell
docker exec -it school_db psql -U school_user -d school_management
```

### Full Application Dockerization

Create a `Dockerfile` for the Next.js application:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio
- `npx prisma migrate dev` - Run database migrations
- `npx prisma generate` - Generate Prisma client

## 🔧 Configuration

### Tailwind CSS
Custom colors and utilities are configured in `tailwind.config.ts`. The configuration includes:
- Custom color palette for the school theme
- Responsive breakpoints
- Component-specific styling

### TypeScript
TypeScript configuration is set up in `tsconfig.json` with strict mode enabled for better code quality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact [arponarpon007@gmail.com] or create an issue in the repository.

---

Built with ❤️ using Next.js and TypeScript