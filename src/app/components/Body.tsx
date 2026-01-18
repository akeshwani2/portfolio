import Image from "next/image"
const projects = [
  {
    date: "2025",
    title: "Polymarket",
    description: "Got flown out to New York City for a software engineering work trial.",
    link: "https://polymarket.com",
    media: "/polymarket1.png",
    type: "image",
  },
  {
    date: "2025",
    title: "Eleven",
    description: "Built at Founders, Inc. Acquired by Pally (YC S25).",
    link: "https://elevenmails.com",
    media: "/elevenmails.png",
    type: "image",
  },
  {
    date: "2025",
    title: "Cova",
    description: "Received the 1517 Fund Medici Grant to build self-correcting glasses.",
    link: "https://www.1517fund.com/",
    media: "/glasses1.png",
    type: "image",
    objectFit: "contain",
  },
  {
    date: "2025",
    title: "Lyra",
    description: "Backed by NVIDIA's Inception Program. Sold after scaling to 5,000+ users.",
    link: "https://lyraa.vercel.app",
    media: "/lyra.png",
    type: "image",
  },
  {
    date: "2025",
    title: "Axle",
    description: "Instant stablecoin payments for logistics workers.",
    link: "https://axle-kappa.vercel.app/research",
    media: "/axle.png",
    type: "image",
  },
  {
    date: "2025",
    title: "Trace",
    description: "Journaling app. $3,000+ donated to charity.",
    link: "https://trace-xi.vercel.app",
    media: "/trace.mov",
    type: "video",
  },
]

function Body() {
  return (
    <div className="w-full mx-auto md:px-20 px-6 py-8">

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-24 text-black items-center py-24 ${index !== projects.length ? 'border-b border-gray-200' : ''
              }`}
          >
            <div className="flex flex-col gap-6">
              <p className="text-gray-500 text-base">{project.date}</p>

              <div>
                <h3 className="text-3xl">{project.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed py-2">{project.description}</p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 text-lg text-black w-fit"
              >
                View
              </a>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl">
              {project.type === "video" ? (
                <video
                  src={project.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-fill rounded-xl"
                />
              ) : (
                <Image
                  src={project.media}
                  alt={project.title}
                  fill
                  className={`${project.objectFit === "contain" ? "object-contain bg-black" : "object-fill"} rounded-xl border border-gray-200`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Body