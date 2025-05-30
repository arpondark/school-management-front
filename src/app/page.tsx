import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
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
              <h1 className="text-2xl font-bold text-gray-900">SchoolHub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Link href="/sing-in" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Modern School
              <span className="text-blue-600 block">Management System</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your educational institution with our comprehensive management platform. 
              Handle students, teachers, classes, and administrative tasks all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admin" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Admin Dashboard
              </Link>
              <Link href="/teacher" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Teacher Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your School
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools necessary for efficient school administration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Management */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Image src="/student.png" alt="Students" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Management</h3>
              <p className="text-gray-600">
                Comprehensive student profiles, enrollment tracking, and academic progress monitoring.
              </p>
            </div>

            {/* Teacher Management */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Image src="/teacher.png" alt="Teachers" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Teacher Portal</h3>
              <p className="text-gray-600">
                Teacher profiles, class assignments, and professional development tracking.
              </p>
            </div>

            {/* Class Management */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Image src="/class.png" alt="Classes" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Class Management</h3>
              <p className="text-gray-600">
                Organize classes, manage schedules, and track classroom activities efficiently.
              </p>
            </div>

            {/* Attendance Tracking */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <Image src="/attendance.png" alt="Attendance" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Attendance Tracking</h3>
              <p className="text-gray-600">
                Real-time attendance monitoring with automated reporting and analytics.
              </p>
            </div>

            {/* Exam Management */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Image src="/exam.png" alt="Exams" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exam Management</h3>
              <p className="text-gray-600">
                Schedule exams, manage results, and generate comprehensive grade reports.
              </p>
            </div>

            {/* Communication */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Image src="/announcement.png" alt="Communication" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication Hub</h3>
              <p className="text-gray-600">
                Announcements, messaging, and parent-teacher communication tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of educational institutions already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admin" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </Link>
            <Link href="/student" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Student Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="School Logo" 
                  width={32} 
                  height={32}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">SchoolHub</h3>
              </div>
              <p className="text-gray-400">
                Modern school management system for the digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/admin" className="hover:text-white transition-colors">Admin Dashboard</Link></li>
                <li><Link href="/teacher" className="hover:text-white transition-colors">Teacher Portal</Link></li>
                <li><Link href="/student" className="hover:text-white transition-colors">Student Portal</Link></li>
                <li><Link href="/parents" className="hover:text-white transition-colors">Parent Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Student Management</li>
                <li>Teacher Portal</li>
                <li>Attendance Tracking</li>
                <li>Exam Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@schoolhub.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Education St, Learning City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SchoolHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;