import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex bg-gray-100 dark:bg-black relative">
            {/* Dark mode background grid and radial overlay for dashboard */}
            <div className="dark:absolute dark:inset-0 dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[size:14px_24px]"></div>
            <div className="dark:absolute dark:left-0 dark:right-0 dark:top-[-10%] dark:h-[1000px] dark:w-[1000px] dark:mx-auto dark:rounded-full dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
            
            {/* Content wrapper */}
            <div className="relative z-10 flex w-full">
                {/* Sidebar */}
                <div className="w-[14%] md:w-[8%] lg:w-[16%] bg-white dark:bg-gray-900/80 dark:backdrop-blur-sm border-r dark:border-gray-700">
                    <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 dark:text-gray-300 py-4 px-4">
                        <Image src={"/logo.png"} alt="Logo" width={32} height={32} />
                        <span className="hidden lg:block font-semibold">School Management</span>
                    </Link>
                    <Menu />
                </div>
                
                {/* Main content area */}
                <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] dark:bg-transparent overflow-scroll flex flex-col">
                    <Navbar />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
