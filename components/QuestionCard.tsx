"use client";

import { type Question, type Option, type Dimension, type Value} from '@/lib/questions';
import { useState } from 'react';

type Props = {
    question: Question,
    selected?: number,
    onSelect: (val: number) => void
}

export default function QuestionCard({ question, selected, onSelect }: Props) {
    const sizeMap: Record<number, string> = {
        0.5: "h-6 w-6",
        1: "h-8 w-8",
        2: "h-10 w-10",
    };

    return (
        <div className='w-full flex flex-col items-center justify-center gap-8'>
            <p className='md:text-lg font-semibold text-center'>{question.prompt}</p>
            <div className='px-4 md:px-24 w-full flex flex-col md:flex-row justify-between'>
                <p className='mb-2 w-[50%] md:w-[20%] text-sm text-wrap text-left'>{question.options[0].text}</p>
                <div className='md:w-[40%] flex flex-row justify-around items-center'>
                    {[-2, -1, 1, 2].map(val => {
                        const isSelected = selected === val;
                        return (
                            <button
                                key={val} 
                                className={`${sizeMap[Math.abs(val)]} rounded-full border border-emerald-800
                                    transition-all duration-200
                                    ${isSelected 
                                        ? "bg-emerald-800 hover:bg-emerald-900"
                                        : "hover:border-2 hover:border-emerald-700 "
                                    }
                                    `}
                                onClick={() => onSelect(val)}
                            >
                                
                            </button>
                        )
                    })}
                </div>
                <p className='mt-2 self-end w-[50%] md:w-[20%] text-sm text-wrap text-right'>{question.options[1].text}</p>
            </div>
        </div>
    );
}
