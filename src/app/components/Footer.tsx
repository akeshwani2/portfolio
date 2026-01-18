import Image from "next/image"
function Footer() {
    const links = [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/arhaan-keshwani/" },
        { name: "GitHub", href: "https://github.com/akeshwani2" },
        { name: "X", href: "https://x.com/akeshwan1" },
    ]

    return (
        <footer className="w-full mx-auto md:px-20 px-6 md:py-16 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="w-fit flex items-center justify-center">
                    <div className="relative group">
                        <Image
                            src="/boy2.jpg"
                            alt="Arhaan"
                            width={200}
                            height={200}
                            className="rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.15)] hover:ring-1 hover:ring-gray-200 transition-all duration-300 group-hover:scale-[1.02] group-hover:-rotate-1"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:pt-0 py-8 md:items-end">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative text-gray-600 hover:text-black transition-colors text-lg"
                        >
                            {link.name}
                            <span
                                className="absolute left-0 -bottom-1 h-[1.5px] bg-black transition-transform duration-300 ease-out origin-left w-full scale-x-0 group-hover:scale-x-100"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer