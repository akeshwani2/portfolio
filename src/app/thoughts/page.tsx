import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

// dynamically read all thought folders and their metadata
async function getThoughts() {
  const thoughtsDir = path.join(process.cwd(), "src/app/thoughts");
  const entries = fs.readdirSync(thoughtsDir, { withFileTypes: true });

  // filter for directories only (excluding special files)
  const thoughtFolders = entries
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        !entry.name.startsWith("_")
    )
    .map((entry) => entry.name);

  // read metadata from each thought's mdx file
  const thoughts = await Promise.all(
    thoughtFolders.map(async (folder) => {
      try {
        // dynamically import the mdx file to get its metadata
        const mdxModule = await import(`./${folder}/page.mdx`);
        const metadata = mdxModule.metadata || {};

        // read the mdx file content to generate preview
        const mdxPath = path.join(thoughtsDir, folder, "page.mdx");
        const content = fs.readFileSync(mdxPath, "utf-8");

        // extract text content (skip imports and layout tags)
        const lines = content.split("\n");
        let textLines = [];
        let inLayout = false;
        let inOpeningTag = false;

        for (const line of lines) {
          if (line.includes("<ThoughtLayout")) {
            inOpeningTag = true;
          }
          if (inOpeningTag) {
            // wait for the closing bracket of the opening tag
            if (line.includes(">")) {
              inOpeningTag = false;
              inLayout = true;
            }
            continue;
          }
          if (line.includes("</ThoughtLayout>")) {
            break;
          }
          if (inLayout && line.trim() && !line.startsWith("import")) {
            textLines.push(line.trim());
          }
        }

        // use first line as preview, or from metadata
        const preview =
          metadata.preview ||
          textLines[0] ||
          "no preview available...";

        // extract image from the ThoughtLayout component props
        let image = null;
        for (const line of lines) {
          if (line.includes('image=')) {
            const match = line.match(/image=["']([^"']+)["']/);
            if (match) {
              image = match[1];
              break;
            }
          }
        }

        return {
          path: `/thoughts/${folder}`,
          title: metadata.title || folder,
          date: metadata.date || "no date",
          preview: preview.substring(0, 100) + (preview.length > 100 ? "..." : ""),
          image: image,
        };
      } catch (error) {
        console.error(`error reading thought ${folder}:`, error);
        return null;
      }
    })
  );

  // filter out any failed imports and sort by date (newest first)
  const validThoughts = thoughts.filter(
    (thought): thought is NonNullable<typeof thought> => thought !== null
  );
  
  return validThoughts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

async function page() {
  const thoughts = await getThoughts();
  return (
    <div
      className="bg-black min-h-screen text-white px-6 py-16 md:py-24"
      style={{ fontFamily: "Perfect" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* header */}
        {/* <div className="mb-16 md:mb-24 animate-[fadeIn_0.6s_ease-out]">
          <a
            href="/"
            className="text-white/40 hover:text-white/60 transition-colors text-sm italic tracking-tight"
          >
            ← back
          </a>
        </div> */}

        {/* title */}
        <h1 className="text-5xl md:text-7xl tracking-tighter italic mb-4 leading-[0.9] animate-[fadeIn_0.8s_ease-out]">
          thoughts
        </h1>

        <div className="text-white/40 text-sm mb-16 tracking-tight italic animate-[fadeIn_1s_ease-out]">
          {thoughts.length} {thoughts.length === 1 ? "entry" : "entries"}
        </div>

        {/* entries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thoughts.map((thought, index) => (
            <Link
              key={thought.path}
              href={thought.path}
              className="block group animate-[fadeIn_0.8s_ease-out] relative overflow-hidden rounded-sm h-[400px]"
              style={{
                animationDelay: `${0.2 + index * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              {/* background image */}
              {thought.image && (
                <Image
                  src={thought.image}
                  alt={thought.title}
                  fill
                  className="object-cover transition-all rounded-lg duration-500 group-hover:scale-105"
                />
              )}
              
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-white/50 text-xs mb-2 tracking-tight italic group-hover:text-white/70 transition-all duration-300">
                  {thought.date}
                </div>
                <h2 className="text-3xl tracking-tighter italic mb-2 leading-tight group-hover:text-white/90 transition-all duration-300">
                  {thought.title}
                </h2>
                <p className="text-white/60 italic tracking-tight text-sm line-clamp-2 group-hover:text-white/80 transition-all duration-300">
                  {thought.preview}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* footer spacer */}
        <div className="mt-24 md:mt-32"></div>
      </div>
    </div>
  );
}

export default page;
