export default function Footer() {
    return (
        <>
            <footer className="bg-white dark:bg-[#1d1d1d] text-gray-800 dark:text-gray-200 py-6 mt-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Reuel Rai. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Built with ❤️ using Next.js and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </>
    )
}
