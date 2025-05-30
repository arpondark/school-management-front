import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="h-screen flex">
            <div className="w-[14%] md:w-[8%] lg:w-[16%] ">
            <Link href="/"className="flex items-center justify-center lg:justify-start gap- text-gray-500 py-2">
            <Image src={"/logo.png"} alt="Logo" width={32} height={32}  />
            <span className="hidden lg:block">School Management</span>
            </Link>
            <Menu />
            </div>
            {/* right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                <Navbar />
                {children}
            </div>
            
        </div>


    );
}
