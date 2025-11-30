"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Auth.module.css";
import { API_ENDPOINTS, apiClient } from "@/utils/api";
import { saveToken } from "@/utils/auth";

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, formData);

            if (response.success && response.data?.accessToken) {
                // Save token
                saveToken(response.data.accessToken);

                // Redirect to dashboard
                router.push("/dashboard");
            } else {
                throw new Error("Login failed. Please check your credentials.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError(err.message || "Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={backgroundStyle}>
            <Navbar />
            <div className={styles["auth-container"]}>
                <motion.div
                    className={styles["auth-card"]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles["auth-header"]}>
                        <h1 className={styles["auth-title"]}>Welcome Back</h1>
                        <p className={styles["auth-subtitle"]}>Sign in to access your credit profile</p>
                    </div>

                    {error && (
                        <motion.div
                            className={styles["error-msg"]}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <form className={styles["auth-form"]} onSubmit={handleSubmit}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="email" className={styles["form-label"]}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles["form-input"]}
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="password" className={styles["form-label"]}>Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className={styles["form-input"]}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles["submit-btn"]}
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    <div className={styles["auth-footer"]}>
                        Don't have an account?
                        <Link href="/signup" className={styles["auth-link"]}>
                            Sign up
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const backgroundStyle = {
    minHeight: '100vh',
    backgroundColor: '#0a0a0f',
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
    backgroundSize: '18px 18px',
    animation: 'dots-move 14s linear infinite',
    position: 'relative'
};
