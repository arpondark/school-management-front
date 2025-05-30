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
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
school-front/
├── public/                 # Static assets
│   ├── icons/             # UI icons (announcement, attendance, etc.)
│   └── logo.png           # Application logo
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
│       └── data.ts        # Data management utilities
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

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

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Dashboard Features

### Admin Dashboard
- Overview statistics for students, teachers, parents, and staff
- User management interface
- System-wide analytics and reporting

### Teacher Dashboard
- Class management
- Student attendance tracking
- Assignment and exam management
- Grade book functionality

### Student Dashboard
- Personal academic information
- Assignment submissions
- Grade viewing
- Schedule management

### Parent Dashboard
- Child's academic progress
- Communication with teachers
- Event and announcement viewing
- Fee payment tracking

## 🎨 Customization

### Themes and Colors
The application uses custom color schemes defined in `tailwind.config.ts`:
- **lamaSky**: Light blue theme
- **lamaPurple**: Purple theme  
- **lamaYellow**: Yellow theme

### Adding New Components
1. Create new component files in `src/components/`
2. Follow the existing TypeScript and styling patterns
3. Import and use in your pages as needed

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

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