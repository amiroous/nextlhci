import React from "react";
import Head from 'next/head';
import styles from '../styles/home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>
                    Lighthouse CI & Next JS App
                </h1>
            </main>
        </div>
    )
}
