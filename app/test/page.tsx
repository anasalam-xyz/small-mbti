"use client";

import QuestionCard from "@/components/QuestionCard";
import { useAnswers } from "@/context/AnswersContext";
import { questions } from "@/lib/questions";
import type { Question, Dimension } from "@/lib/questions";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function TestPage() {
    const questionPages: Record<Dimension, Question[]> = {
        EI: [],
        SN: [],
        TF: [],
        JP: [],
    };
    questions.forEach(q => {
        questionPages[q.dimension].push(q);
    });

    const [pageNo, setPageNo] = useState<number>(1);
    const pageKeys: Dimension[] = ["EI", "SN", "TF", "JP"];
    const currentPage = pageKeys[pageNo - 1];
    const currentQuestions = questionPages[currentPage] ?? [];

    const { answers, setAnswers } = useAnswers();

    const handleSubmit = () => {
        redirect("/result");
    }

    return (
        <div className="my-32 flex flex-col w-full px-64">
            <div className="flex flex-col justify-center items-center gap-24">      
                {currentQuestions.map(q => (
                    <QuestionCard
                        key = {q.id} 
                        question = {q}
                        selected={answers[q.id]}
                        onSelect={val => setAnswers(prev => ({...prev, [q.id]: val}))}
                    />
                ))}
            </div>
            <div className="my-24 flex flex-row justify-between">
                <button
                    onClick = {()=>setPageNo(pageNo - 1)}
                    disabled = {pageNo === 1}
                    className = {`${pageNo === 1 
                        ? "text-white"
                        : "border-b border-gray-400 py-1 hover:border-gray-800 hover:-translate-y-1 transition-translate duration-200"}`}
                >
                    Previous
                </button>
                <p className="text-sm">{pageNo} / 4</p>
                <button
                    onClick={() => {
                        let valid = true;
                        for (let i = (pageNo - 1) * 10 + 1; i <= pageNo * 10; i++) {
                            if (answers[i] === undefined) {
                                valid = false;
                                break;
                            }
                        }
                        if (valid) setPageNo(prev => prev + 1);
                        else alert("Please answer all questions.")
                    }}
                    disabled={pageNo === 4}
                    className={`${pageNo === 4 
                        ? "hidden"
                        : "border-b border-gray-400 py-1 hover:border-gray-800 hover:-translate-y-1 transition-translate duration-200"}`}
                >
                    Next
                </button>
                <button
                    onClick={() => {
                        let valid = true;
                        for (let i = (pageNo - 1) * 10 + 1; i <= pageNo * 10; i++) {
                            if (answers[i] === undefined) {
                                valid = false;
                                break;
                            }
                        }
                        if (valid) handleSubmit();
                        else alert("Please answer all questions.")
                    }}
                    disabled={pageNo !== 4}
                    className={`${pageNo === 4 
                        ? "text-emerald-900 hover:text-white border border-emerald-800 rounded-3xl px-2 py-1 hover:bg-emerald-900 hover:-translate-y-1 transition-all duration-200"
                        : "hidden"}`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}