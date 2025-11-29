"use client";

import { useState } from "react";
import styles from "@/styles/FinancialAssessment.module.css";
import Navbar from "@/components/Navbar";
import { QUESTIONS } from "@/utils/questions";
import { QuestionCard } from "@/components/QuestionCard";

export default function FinancialAssessment() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    function handleChange(id, val) {
        setData(prev => ({ ...prev, [id]: val }));
        if (err) setErr(null);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErr(null);

        // check for missing fields
        const missing = QUESTIONS.filter(q => !data[q.id]);

        if (missing.length > 0) {
            setErr(`Please complete all fields. Missing: ${missing.length}`);
            setLoading(false);
            return;
        }

        try {
            // TODO: Replace with actual endpoint when backend is ready
            // const res = await fetch('/api/assessment', { method: 'POST', body: JSON.stringify(data) });

            // temporary mock delay
            await new Promise(r => setTimeout(r, 1000));

            console.log("Submitting:", data);
            alert("Assessment saved.");

        } catch (e) {
            console.error(e);
            setErr("Submission failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles['fa-container']}>
                <header className={styles['fa-header']}>
                    <h1 className={styles['fa-title']}>Financial Health Assessment</h1>
                    <p className={styles['fa-subtitle']}>
                        Just a few questions to help us get a better picture of where you stand financially.
                    </p>
                </header>

                <form className={styles['fa-form']} onSubmit={onSubmit}>
                    {QUESTIONS.map((q) => (
                        <QuestionCard
                            key={q.id}
                            questionData={q}
                            currentAnswer={data[q.id] || ""}
                            onAnswerChange={handleChange}
                        />
                    ))}

                    {err && <div className={styles['fa-error-msg']}>{err}</div>}

                    <button
                        type="submit"
                        className={styles['fa-submit-btn']}
                        disabled={loading}
                    >
                        {loading ? "Saving..." : "Submit Assessment"}
                    </button>
                </form>
            </div>
        </>
    );
}
