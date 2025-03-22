import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">The Foundation for Smart Dorm Management</h2>
                    <p>StayMate is more than just a management tool. It’s an all-in-one solution that simplifies dorm life, making shared living more efficient and hassle-free.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            {/* <Zap className="size-4" /> */}
                            <h3 className="text-sm font-medium">🚀 Fast & Efficien</h3>
                        </div>
                        <p className="text-sm">Seamless task management, automated expense tracking, and quick maintenance requests to keep dorm life smooth.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            {/* <Cpu className="size-4" /> */}
                            <h3 className="text-sm font-medium">💪 Powerfu</h3>
                        </div>
                        <p className="text-sm">A comprehensive system that empowers students to manage their dorms effortlessly with real-time collaboration. </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            {/* <Fingerprint className="size-4" /> */}

                            <h3 className="text-sm font-medium">🔒 Secure & Reliable</h3>
                        </div>
                        <p className="text-sm">Data encryption and role-based access ensure student privacy and safety in shared spaces. </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            {/* <Pencil className="size-4" /> */}

                            <h3 className="text-sm font-medium">🎨 Customizable</h3>
                        </div>
                        <p className="text-sm">Personalized preferences for task allocation, notifications, and roommate matching for a tailored dorm experience.  </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            {/* <Settings2 className="size-4" /> */}

                            <h3 className="text-sm font-medium">🛠 Total Control</h3>
                        </div>
                        <p className="text-sm">Track expenses, assign responsibilities, and monitor maintenance requests—all in one centralized platform.  
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            {/* <Sparkles className="size-4" /> */}

                            <h3 className="text-sm font-medium">🤖 AI-Powered Insights</h3>
                        </div>
                        <p className="text-sm">Smart roommate matching, habit tracking, and automated reminders enhance dorm harmony and efficiency.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
