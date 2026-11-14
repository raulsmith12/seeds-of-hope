import Footer from "@/components/Footer"
import Header from "@/components/Header"
import styles from "./charities.module.css"

export const metadata = {
    title: "Charities | Seeds of Hope",
    description: "Discover active charity campaigns hosted by Seeds of Hope, including Rise of the Silver Guardian.",
}

export default function Charities() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className={styles.main}>
                <div className={styles.layout}>
                    <div className={styles.intro}>
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
                        <div className={styles.phoenix}>
                            <img src="/images/IconOnly_Transparent_NoBuffer.png" alt="Phoenix logo" />
                        </div>
                    </div>
                    <section id="donations" className={styles.campaigns} aria-labelledby="campaigns-heading">
                        <h2 id="campaigns-heading" className={styles.sectionHeading}>Active Charity Campaigns</h2>
                        <ul className={styles.campaignList}>
                            <li className={styles.campaign}>
                                <img className={styles.campaignLogo} src="/images/TSG%20Logo%203.png" alt="The Silver Guardian logo" />
                                <div>
                                    <h3 className={styles.campaignName}>Rise of the Silver Guardian</h3>
                                    <a
                                        href="https://donorbox.org/rise-of-the-silver-guardian-501c3-conversion-assistance"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.donateButton}
                                        aria-label="Donate Now to Rise of the Silver Guardian (opens in a new tab)"
                                    >
                                        Donate Now
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}
