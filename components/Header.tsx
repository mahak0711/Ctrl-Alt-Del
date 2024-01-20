"use client";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
interface Headerprops {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<Headerprops> = ({
    children,
    className
}) => {
    const router = useRouter();
    const handleLogout = () => {
        //handle logout in future
    }

    return (
        <div className={twMerge('h-fit bg-gradient-to-b from-emerald-800 p-6', className)}>
            <div className="w-full mb-4 flex items-center justify-between " >
                <div className="hidden md:flex gap-x-2 items-center">
                    <button onClick={() => router.forward()}
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"></button>
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition ">
                        <RxCaretLeft className="text-white" size={35} />
                    </button>

                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition ">
                        <HiHome className="text-black " size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition ">
                        <BiSearch className="text-black " size={20} />
                    </button>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <>
                        <div>
                            <Button onClick={()=>{}}
                                className="bg-transparent text-neutral-300
                        font-medium ">

                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={()=>{}}
                                className="bg-white px-6 py-2
                        font-medium ">

                                Sign Up
                            </Button>
                        </div>



                    </>

                </div>
            </div>
            {children}
        </div>
    );
}
export default Header;