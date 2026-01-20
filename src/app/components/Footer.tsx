import Image from "next/image"
import { CometCard } from "@/components/ui/comet-card"

function Footer() {
    const links = [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/arhaan-keshwani/" },
        { name: "GitHub", href: "https://github.com/akeshwani2" },
        { name: "X", href: "https://x.com/akeshwan1" },
    ]

    return (
        <footer className="w-full mx-auto px-6 md:px-20 py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {/* image with frame */}
                <CometCard className="mx-auto md:mx-0" rotateDepth={12} translateDepth={15}>
                    <div className="bg-white p-1 rounded-xl">
                        <Image
                            src="/boy2.jpg"
                            alt="Arhaan"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                </CometCard>

                {/* name + links */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex flex-col items-center md:items-end text-black">
                        <span className="text-3xl font-medium leading-tight">Arhaan Keshwani</span>
                        
                    </div>
                    <div className="flex gap-2">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative text-gray-500 hover:bg-gray-200 bg-gray-100 rounded-full px-4 py-2 hover:text-black transition-all duration-300"
                            >
                                {link.name}
                                {/* <span
                                    className="absolute left-0 -bottom-1 h-[1.5px] bg-black transition-transform duration-300 ease-out origin-left w-full scale-x-0 group-hover:scale-x-100"
                                /> */}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer