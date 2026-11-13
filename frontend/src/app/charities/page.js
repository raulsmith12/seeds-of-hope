import DonationForm from "@/components/DonationForm"
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
                    <div id="donations" className={styles.donations}>
                        <div className={styles.logo}>
                            <img src="/images/IconOnly_Transparent_NoBuffer.png" alt="Phoenix logo" />
                        </div>
                        <div className={styles.form}>
                            <DonationForm />
                        </div>
                        <div className={styles.logo}>
                            <img src="/images/TSG%20Logo%203.png" alt="The Silver Guardian logo" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
