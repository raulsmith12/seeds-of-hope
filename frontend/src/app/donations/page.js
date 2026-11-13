import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Donations | Seeds of Hope",
    description: "Support Seeds of Hope by making a donation through Donorbox.",
};

export default function Donations() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Donations
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Help us nourish hope, dignity, and resilience in our communities.
                        Thank you for supporting Seeds of Hope.
                    </p>
                </div>

                <section aria-label="Donation form" className="bg-white rounded-xl shadow-sm p-4 sm:p-8">
                    <Script
                        type="module"
                        src="https://donorbox.org/widgets.js"
                        async
                        strategy="afterInteractive"
                    />
                    <dbox-widget
                        campaign="rise-of-the-silver-guardian-501c3-conversion-assistance"
                        type="donation_form"
                        enable-auto-scroll="true"
                        show-content="true"
                        className="block w-full"
                    ></dbox-widget>
                    <p className="text-center text-sm text-gray-600 mt-6">
                        If the form does not appear, you can{" "}
                        <a
                            href="https://donorbox.org/rise-of-the-silver-guardian-501c3-conversion-assistance"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-700 underline hover:text-orange-800"
                        >
                            donate directly on Donorbox (opens in a new tab)
                        </a>.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
