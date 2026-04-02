"use client";

import { useAnswers } from "@/context/AnswersContext";
import { getMBTI } from "@/lib/calculations";
import { mbtiResults } from "@/lib/results";
import { type Result } from '@/lib/results';
import { useState, useEffect } from "react";

export default function Result() {
    const { answers } = useAnswers();
    const mbti = getMBTI(answers);
    const res = mbtiResults[mbti];

    const enlistItems = (arr : string[]): string => {
        let str = "";
        arr.forEach(item => {
            str += item + ", ";
        })
        return str.slice(0, str.length - 2);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-8 text-center">
            {res && (
                <div>
                    <div>
                        <p>{mbti}</p>
                        <p>{res.title}</p>
                        <p>{res.summary}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p>Strengths</p>
                            <p className="">{enlistItems(res.strengths)}</p>                        
                        </div>
                        <div>
                            <p>Weaknesses</p>
                            <p className="">{enlistItems(res.weaknesses)}</p>
                        </div>
                        <div>
                            <p>Traits</p>
                            <p className="">{enlistItems(res.traits)}</p>
                        </div>
                        <div>
                            <p>Your Line</p>
                            <p className="">{res.friendRole}</p>
                        </div>
                        <div>
                            <p>Fictional Characters</p>
                            <p className="">{enlistItems(res.fictionalCharacters)}</p>
                        </div>
                        <div>
                            <p>Your Vibe</p>
                            <p className="">{res.vibe}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}