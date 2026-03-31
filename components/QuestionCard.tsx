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
        1: "h-8 w-8",
        2: "h-10 w-10",
    };

    return (
        <div className='w-full flex flex-col items-center justify-center gap-8'>
            <p className='text-lg font-semibold text-center'>{question.prompt}</p>
            <div className='px-24 w-full flex flex-row justify-between'>
                <p className='w-[20%] text-sm text-wrap text-left'>{question.options[0].text}</p>
                <div className='w-[40%] flex flex-row justify-around items-center'>
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
                <p className='w-[20%] text-sm text-wrap text-right'>{question.options[1].text}</p>
            </div>
        </div>
    );
}