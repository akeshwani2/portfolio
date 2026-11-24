import { Fragment } from "react";
import Image from "next/image";

const work = [
  {
    year: "2026",
    jobs: [
      { before: "Growth lead at ", name: "EcoGPT", after: "", href: "https://apps.apple.com/us/app/id6756059656", image: "/ecogpt-logo.png", imageClass: "object-contain bg-white p-8" },
      { before: "Founder of ", name: "Mach10", after: "", href: "https://remindmetrace.com", image: "/mach10.png", imageClass: "object-cover" },
      { before: "Building apps at ", name: "Cluely", after: "", href: "https://cluely.com/", image: "/cluely-logo-black.svg", imageClass: "object-contain bg-white p-12" },
      { before: "100k followers on ", name: "Instagram", after: "", href: "https://instagram.com/akeshwani3", image: "/instagram-100k-v3.png", imageClass: "object-cover" },
      { before: "Gen AI intern at ", name: "Norfolk Southern", after: "", href: "https://www.norfolksouthern.com/", image: "/norfolk-southern.png", imageClass: "object-cover" },
    ],
  },
  {
    year: "2025",
    jobs: [
      { before: "Product eng. at ", name: "Polymarket", after: "", href: "https://polymarket.com", image: "/logo-blue.svg", imageClass: "object-contain bg-[#2E5CFF] p-10" },
      { before: "Built ", name: "Eleven", after: ", acquired (YC S25)", href: null, image: "/elevenmails.png", imageClass: "object-cover" },
      { before: "Built ", name: "Cova", after: ", 1517 Fund grant", href: "https://www.1517fund.com/", image: "/glasses1.png", imageClass: "object-contain bg-black" },
      { before: "Built ", name: "Lyra", after: ", sold at 5k users", href: "https://lyraa.vercel.app", image: "/lyra.png", imageClass: "object-cover" },
      { before: "Built ", name: "Axle", after: ", stablecoin payments", href: "https://axle-kappa.vercel.app/research", image: "/axle.png", imageClass: "object-cover" },
      { before: "Built ", name: "Trace", after: ", $3k+ to charity", href: "https://trace-xi.vercel.app", image: "/trace-preview.mp4", imageClass: "object-cover" },
    ],
  },
  {
    year: "2024",
    jobs: [
      { before: "SWE intern at ", name: "J.P. Morgan", after: "", href: null, image: null },
    ],
  },
];

const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/arhaan-keshwani/" },
  { name: "GitHub", href: "https://github.com/akeshwani2" },
  { name: "X", href: "https://x.com/akeshwan1" },
  { name: "Instagram", href: "https://instagram.com/akeshwani3" },
];

const linkClass = "underline decoration-dotted decoration-gray-400 underline-offset-4 transition-colors hover:decoration-black";

export default function Home() {
  return (
    <main className="grid min-h-dvh grid-cols-[auto] justify-center content-center items-center gap-16 overflow-x-clip px-6 py-24 text-black md:grid-cols-2 md:px-20">
      <h1 className="text-4xl md:justify-self-center">Arhaan Keshwani</h1>

      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-8 text-base md:justify-self-center">
        {work.map(({ year, jobs }) => (
          <Fragment key={year}>
            <dt className="text-right text-gray-500">{year}</dt>
            <dd className="flex flex-col gap-2">
              {jobs.map((job) => (
                <p key={job.name}>
                  {job.before}
                  {job.image === null ? job.name : (
                    <a href={job.href ?? undefined} target="_blank" rel="noopener noreferrer" className={`group relative ${linkClass}`}>
                      {job.name}
                      <span className="pointer-events-none absolute left-0 top-full z-10 mt-2 block aspect-video w-80 translate-y-1 overflow-hidden rounded-lg border border-gray-200 opacity-0 shadow-xl transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                        {job.image.endsWith(".mp4") ? (
                          <video src={job.image} autoPlay muted loop playsInline className={`h-full w-full ${job.imageClass}`} />
                        ) : (
                          <Image src={job.image} alt={job.name} fill sizes="320px" className={job.imageClass} />
                        )}
                      </span>
                    </a>
                  )}
                  {job.after}
                </p>
              ))}
            </dd>
          </Fragment>
        ))}

        <dt />
        <dd className="flex gap-5">
          {links.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {link.name}
            </a>
          ))}
        </dd>
      </dl>
    </main>
  );
}
