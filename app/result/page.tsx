"use client";

import { useAnswers } from "@/context/AnswersContext";
import { getMBTI } from "@/lib/calculations";
import { useState, useEffect } from "react";

export default function Result() {
    const { answers } = useAnswers();
    const [mbti, setMbti] = useState<string>("");
    useEffect(() => {
        setMbti(getMBTI(answers));
    }, []);

    return (
        <div>
            <p className="text-lg text-black">{mbti}</p>
        </div>
    );
}