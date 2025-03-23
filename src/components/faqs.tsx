export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>If you have any questions, feel free to explore the FAQs below or contact us directly.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">What is StayMate?</h3>
                            <p className="text-muted-foreground mt-4">StayMate is a smart dorm management system designed to help students coordinate tasks, track shared expenses, and manage maintenance requests efficiently.</p>

                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How does roommate matching work?</h3>
                            <p className="text-muted-foreground mt-4">StayMate uses AI-driven algorithms to match roommates based on preferences, habits, and compatibility scores to ensure a comfortable living environment. </p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How can I track shared expenses?</h3>
                            <p className="text-muted-foreground my-4">Our platform provides an easy-to-use expense tracker that allows roommates to split bills, record transactions, and settle payments hassle-free.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Can I submit maintenance requests through StayMate?</h3>
                            <p className="text-muted-foreground mt-4">Yes! You can raise and track maintenance requests directly from the platform, ensuring quick resolution of dorm-related issues.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Do you offer customer support?</h3>
                            <p className="text-muted-foreground mt-4">We provide 24/7 support via email and live chat. Currently, we do not offer phone support.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
