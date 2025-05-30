import Image from 'next/image';
import Link from 'next/link';
// Updated react-icons import for new feature icons
import { 
  FaGithubSquare, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaSchool, 
  FaUserCheck, 
  FaFileSignature, 
  FaBullhorn 
} from "react-icons/fa";
import ThemeToggle from '@/components/ThemeToggle';

const Homepage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dark mode background grid and radial overlay (These apply when dark class is active) */}
      <div className="dark:absolute dark:inset-0 dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[size:14px_24px]"></div>
      <div className="dark:absolute dark:left-0 dark:right-0 dark:top-[-10%] dark:h-[1000px] dark:w-[1000px] dark:mx-auto dark:rounded-full dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="dark:bg-gray-900/80 dark:backdrop-blur-sm shadow-sm border-b dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/logo.png" 
                  alt="School Logo" 
                  width={40} 
                  height={40}
                  className="rounded-full"
                />
                <h1 className="text-2xl font-bold text-white">SchoolHub</h1>
              </div>
              <nav className="hidden md:flex space-x-8 items-center">
                <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
                <ThemeToggle />
              </nav>
              <div className="flex items-center gap-4">
                <div className="md:hidden">
                  <ThemeToggle />
                </div>
                <Link href="/sing-in" className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Modern School
                <span className="text-blue-600 dark:text-blue-400 block">Management System</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your educational institution with our comprehensive management platform. 
                Handle students, teachers, classes, and administrative tasks all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admin" className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg">
                  Admin Dashboard
                </Link>
                <Link href="/teacher" className="text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-400 hover:bg-gray-700 transition-colors dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700">
                  Teacher Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 dark:bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything You Need to Manage Your School
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform provides all the tools necessary for efficient school administration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Student Management */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl transition-shadow dark:border dark:border-blue-800/30">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <FaUserGraduate className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Student Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive student profiles, enrollment tracking, and academic progress monitoring.
                </p>
              </div>

              {/* Teacher Portal */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl transition-shadow dark:border dark:border-green-800/30">
                <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <FaChalkboardTeacher className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Teacher Portal</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Teacher profiles, class assignments, and professional development tracking.
                </p>
              </div>

              {/* Class Management */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl transition-shadow dark:border dark:border-purple-800/30">
                <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <FaSchool className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Class Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Organize classes, manage schedules, and track classroom activities efficiently.
                </p>
              </div>

              {/* Attendance Tracking */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl transition-shadow dark:border dark:border-yellow-800/30">
                <div className="w-12 h-12 bg-yellow-600 dark:bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <FaUserCheck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Attendance Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time attendance monitoring with automated reporting and analytics.
                </p>
              </div>

              {/* Exam Management */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl transition-shadow dark:border dark:border-red-800/30">
                <div className="w-12 h-12 bg-red-600 dark:bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <FaFileSignature className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Exam Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Schedule exams, manage results, and generate comprehensive grade reports.
                </p>
              </div>

              {/* Communication Hub */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl transition-shadow dark:border dark:border-indigo-800/30">
                <div className="w-12 h-12 bg-indigo-600 dark:bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <FaBullhorn className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Communication Hub</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Announcements, messaging, and parent-teacher communication tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Educational Institutions
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Schools Using</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                <div className="text-blue-100">Students Managed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">5K+</div>
                <div className="text-blue-100">Teachers Active</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-100">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 dark:bg-transparent">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your School Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of educational institutions already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admin" className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                Get Started Today
              </Link>
              <Link href="/student" className="text-white px-8 py-4 rounded-lg text-lg font-semibold border border-gray-600 hover:bg-gray-700 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                Student Portal
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-900 dark:via-black dark:to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Developer Spotlight Section - Redesigned */}
            <div className="mb-16"> {/* Spacing after spotlight */}
              <div className="max-w-3xl mx-auto bg-gray-800/60 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-gray-700/60">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Image
                      src="https://github.com/arpondark.png"
                      alt="MD Shazan Mahmud Arpon"
                      width={100}
                      height={100}
                      className="rounded-full object-cover ring-4 ring-offset-4 ring-offset-gray-800/60 dark:ring-offset-gray-900/40 ring-blue-500/80 shadow-lg"
                      priority
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    MD SHAZAN MAHMUD ARPON
                  </h2>
                  <p className="text-xl text-gray-300 mb-4">
                    Full Stack Developer & Software Engineer
                  </p>
                  <p className="text-gray-400 leading-relaxed max-w-xl">
                    Passionate about creating innovative digital solutions that transform educational experiences. 
                    Specializing in modern web technologies and scalable applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Footer Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
              {/* About Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Image 
                    src="/logo.png" 
                    alt="School Logo" 
                    width={40} 
                    height={40}
                    className="rounded-full"
                  />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    SchoolHub
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A comprehensive school management system designed to streamline educational operations. 
                  Built with modern technologies to provide seamless user experience for administrators, 
                  teachers, students, and parents.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                    <span className="text-sm font-semibold">Next.js 14</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg">
                    <span className="text-sm font-semibold">TypeScript</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                    <span className="text-sm font-semibold">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-blue-400">Quick Access</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/admin" className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Admin Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/teacher" className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Teacher Portal
                    </Link>
                  </li>
                  <li>
                    <Link href="/student" className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Student Portal
                    </Link>
                  </li>
                  <li>
                    <Link href="/parents" className="text-gray-300 hover:text-pink-400 transition-all duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Parent Portal
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-purple-400">Core Features</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    Student Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></span>
                    Attendance Tracking
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                    Exam Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mr-3"></span>
                    Communication Hub
                  </li>
                </ul>
              </div>

              {/* Contact & Social */}
              <div>
                <h4 className="text-lg font-bold mb-6 text-green-400">Connect With Developer</h4>
                <div className="space-y-4">
                  <Link 
                    href="https://arpon007.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold">🌐</span>
                    </div>
                    <div>
                      <div className="font-semibold">Portfolio</div>
                      <div className="text-xs text-gray-400">arpon007.me</div>
                    </div>
                  </Link>

                  <Link 
                    href="https://github.com/arpondark" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-gray-200 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold">⚡</span>
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-xs text-gray-400">arpondark</div>
                    </div>
                  </Link>

                  <Link 
                    href="https://linkedin.com/in/md-shazan-mahmud-arpon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold">💼</span>
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-xs text-gray-400">Professional Profile</div>
                    </div>
                  </Link>

                  <Link 
                    href="mailto:arponarpon007@gmail.com"
                    className="flex items-center text-gray-300 hover:text-red-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold">📧</span>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-xs text-gray-400">Get in touch</div>
                    </div>
                  </Link>

                  <Link 
                    href="tel:+21867813388"
                    className="flex items-center text-gray-300 hover:text-green-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold">📱</span>
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-xs text-gray-400">+218 678 13388</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Section (Copyright & Social Links) */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-gray-400">
                    © 2025 SchoolHub. Developed with ❤️ by 
                    <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold"> MD Shazan Mahmud Arpon</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    All rights reserved. Empowering education through technology.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Link 
                    href="https://fb.com/arpon11241" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <span className="text-white font-bold text-sm">f</span>
                  </Link>
                  <Link 
                    href="https://linkedin.com/in/md-shazan-mahmud-arpon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <span className="text-white font-bold text-sm">in</span>
                  </Link>
                  <Link 
                    href="https://github.com/arpondark" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FaGithubSquare className="text-white text-lg" />
                  </Link>
                </div>
              </div>
            </div>
          </div> {/* End of max-w-7xl container */}
        </footer>
      </div>
    </div>
  );
};

export default Homepage;