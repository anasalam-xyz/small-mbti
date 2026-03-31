"use client";

import React, { createContext, useContext, useState } from "react";

type AnswersType = Record<number, number>;
type AnswersContextType = {
    answers: AnswersType,
    setAnswers: React.Dispatch<React.SetStateAction<AnswersType>>,
}

const AnswersContext = createContext<AnswersContextType | null>(null);

export function AnswersProvider( { children }: { children: React.ReactNode }) {
    const [answers, setAnswers] = useState<AnswersType>({ 
        
    });
    return (
        <AnswersContext.Provider value = {{ answers, setAnswers }}>
            { children }
        </AnswersContext.Provider>
    );
}

export function useAnswers() {
    const context = useContext(AnswersContext);
    if (!context) throw new Error("useAnswers must be used within provider");
    return context;
}