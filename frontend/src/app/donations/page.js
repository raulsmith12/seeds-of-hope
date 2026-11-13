import { getLinkHref } from "@/utils/linkHelper";
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

                <p className="text-center">
                    <a href={`${getLinkHref("/charities")}#donations`} className="inline-block rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white hover:bg-orange-800">
                        Donate on our Charities page
                    </a>
                </p>
            </main>

            <Footer />
        </div>
    );
}
