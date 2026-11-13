import Footer from "@/components/Footer"
import Header from "@/components/Header"
import styles from "./charities.module.css"

export const metadata = {
    title: "Charities | Seeds of Hope",
    description: "Our charity partners will be announced soon. Discover the causes growing with Seeds of Hope.",
}

export default function Charities() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className={styles.main}>
                <div className={styles.layout}>
                    <div className={styles.message}>
                        <p className={styles.eyebrow}>Our charities</p>
                        <h1 className={styles.heading}>Coming<br />soon.</h1>
                        <div className={styles.accent} aria-hidden="true" />
                        <p className={styles.description}>
                            Seeds of change. A shared purpose.
                        </p>
                        <p className={styles.detail}>
                            We&apos;re growing our community of charity partners.
                            Check back soon to meet the causes we&apos;ll support together.
                        </p>
                    </div>
                    <div className={styles.partners}>
                        <div className={styles.circles} aria-hidden="true">
                            {Array.from({ length: 7 }, (_, index) => (
                                <div className={styles.circle} key={index}>?</div>
                            ))}
                        </div>
                        <p className={styles.caption}>Future partners. Shared hope.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
