"use client";

import { useAnswers } from "@/context/AnswersContext";
import { getMBTI } from "@/lib/calculations";
import { mbtiResults } from "@/lib/results";
import { type Result } from '@/lib/results';

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

    const colorCode: Record<string, string> = {
        Analysts: "text-purple-800", 
        Diplomats: "text-emerald-800",
        Sentinels: "text-sky-800", 
        Explorers: "text-yellow-800"
    }
    const colorCodeBG: Record<string, string> = {
        Analysts: "bg-purple-700", 
        Diplomats: "bg-emerald-700",
        Sentinels: "bg-sky-700", 
        Explorers: "bg-yellow-700"
    }
    const gradientMap: Record<string, { topLeft: string; bottomRight: string }> = {
        Analysts: {
            topLeft: "rgba(99,102,241,0.2)",   // purple
            bottomRight: "rgba(236,72,153,0.2)" // pink
        },
        Diplomats: {
            topLeft: "rgba(16,185,129,0.2)",   // emerald
            bottomRight: "rgba(59,130,246,0.2)" // blue
        },
        Sentinels: {
            topLeft: "rgba(56,189,248,0.2)",   // sky
            bottomRight: "rgba(34,211,238,0.2)" // cyan
        },
        Explorers: {
            topLeft: "rgba(250,204,21,0.2)",   // yellow
            bottomRight: "rgba(249,115,22,0.2)" // orange
        }
    };
    const colorCodeBorder: Record<string, string> = {
        Analysts: "border-purple-400", 
        Diplomats: "border-emerald-400",
        Sentinels: "border-sky-400", 
        Explorers: "border-yellow-400"
    }
    const fullFormMap: Record<string, string> = {
        I: "INTROVERTED", S: "OBSERVANT", F: "FEELING", P: "PROSPECTING", 
        E: "EXTROVERTED", N: "INTUITIVE", T: "THINKING", J: "JUDGING"
    }
    const g = gradientMap[res.category];

    return (
        <div style={{
            background: `
            radial-gradient(circle at top left, ${g.topLeft}, transparent 60%),
            radial-gradient(circle at bottom right, ${g.bottomRight}, transparent 60%)
            `,
            }}
            className="h-full w-full pb-24 px-32 flex flex-col"
        >
            {res && (
                <div className="w-full flex flex-col">
                    <div className="my-36 flex flex-row justify-between">
                        <div className="flex flex-col gap-4">
                            <div>
                                {[...mbti].map(x => (
                                    <span key={x} className={`mx-1 px-2 py-1 text-white text-[10px] font-semibold rounded-4xl ${colorCodeBG[res.category]}`}>
                                        {fullFormMap[x]}
                                    </span>
                                ))}
                            </div>
                            <p className="my-2 text-5xl font-bold">{res.title}</p>
                            <p className={`text-3xl font-bold ${colorCode[res.category]}`}>{mbti} &nbsp; Personality</p>
                            <p className="w-[80%] text-lg font-medium">{res.headline}</p>
                        </div>
                        <img className="h-64 pr-8" src={`/${res.category}/${mbti}.svg`}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="my-4 text-3xl font-medium">Introduction</p>
                        <p>{res.summary}</p>
                        <div className={`my-4`}>
                            <div>
                                <div className="my-16 flex flex-col md:flex-row justify-between">
                                    <div className={`py-8 px-12 border-l-1 border-t-1 ${colorCodeBorder[res.category]}`}>
                                        <p className="text-2xl font-medium">Your Strengths</p>
                                        <ul>
                                            {res.strengths.map(strength => (
                                                <li key={strength} className="">{strength}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="py-8 px-12">
                                        <p className="text-2xl font-medium">Your Weaknesses</p>
                                        <ul>
                                            {res.weaknesses.map(weakness => (
                                                <li key={weakness} className="">{weakness}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div className="py-8 px-12">
                                        <p className="text-2xl font-medium">Your Traits</p>
                                        <ul>
                                            {res.traits.map(traits => (
                                                <li key={traits} className="">{traits}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`py-8 px-12 border-b-1 border-r-1 ${colorCodeBorder[res.category]}`}>
                                        <p className="text-2xl font-medium">{mbti} &nbsp; Fictional Characters</p>
                                        <ul>
                                            {res.fictionalCharacters.map(character => (
                                                <li key={character} className="">{character}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}