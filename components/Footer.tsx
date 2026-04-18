export default function Footer() {
    return (
        <footer className="border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                <div className="text-center md:text-left">
                <p className="font-medium text-gray-800">
                    Made by Anas Alam
                </p>
                <p className="text-xs text-gray-500">
                    MBTI Personality Explorer
                </p>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                <a
                    href="mailto:stableshark999@gmail.com"
                    className="hover:text-emerald-600 transition"
                >
                    Feedback
                </a>
                <a
                    href="https://github.com/anasalam-xyz"
                    target="_blank"
                    className="hover:text-emerald-600 transition"
                >
                    GitHub
                </a>
                <a
                    href="https://anasalam.vercel.app"
                    target="_blank"
                    className="hover:text-emerald-600 transition"
                >
                    Portfolio
                </a>
                <a
                    href="https://linkedin.com/in/anasalam-xyz"
                    target="_blank"
                    className="hover:text-emerald-600 transition"
                >
                    LinkedIn
                </a>
                </div>
                <div className="text-xs text-gray-400 text-center md:text-right">
                Built using Next.js + Tailwind
                </div>
            </div>
        </footer>
    );
}