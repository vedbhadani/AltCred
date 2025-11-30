'use client';

import "@/styles/globals.css";
import DottedBackground from '@/components/DottedBackground';
import CustomCursor from '@/components/CustomCursor';

export default function App({ Component, pageProps }) {
    return (
        // <div style={{ cursor: 'none' }}>
        <div>
            <DottedBackground />
            {/* <CustomCursor /> */}
            <Component {...pageProps} />
        </div>
    );
}
