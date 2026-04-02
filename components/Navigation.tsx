"use client";

import Link from "next/link";
import { useAnswers } from '@/context/AnswersContext';

export default function Navigation() {
    const { setAnswers } = useAnswers();
    const clearAnswers = () => {
        setAnswers({});
    }
    return (
        <nav className="z-50 sticky mt-4 mx-auto h-8 w-32 md:w-64 flex flex-row justify-around items-center border border-gray-300 rounded-3xl text-sm">
            <button 
                className="h-full flex-grow-1 rounded-l-xl hover:bg-emerald-700 hover:text-white  ease-in-out transition-all duration-400"
            >
                <Link href="/">Home</Link>
            </button>
            <button 
                className="h-full flex-grow-1 hover:bg-emerald-700 hover:text-white ease-in-out transition-all duration-400"
            >
                Info
            </button>
            <button 
                className="h-full flex-grow-1  rounded-r-xl hover:bg-emerald-700 hover:text-white ease-in-out transition-all duration-400"
                onClick={ clearAnswers }
            >
                Clear
            </button>
        </nav>
    );
}