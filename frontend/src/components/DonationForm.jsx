import Script from "next/script";

export default function DonationForm() {
    return (
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
    );
}
