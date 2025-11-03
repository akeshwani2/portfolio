import { Asterisk } from "lucide-react";

export default function Home() {
  return (
    <div
      className=" bg-[#ffffff] min-h-screen flex items-center justify-center"
      style={{ fontFamily: "Geist" }}
    >
      <main className="max-w-3xl mx-auto px-16">
        <h1 className="md:text-5xl text-3xl leading-tight tracking-tight">
          <div className="flex flex-col gap-2 md:pt-0">
            <span
              className="text-black fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Arhaan Keshwani
            </span>
          </div>
        </h1>

        <div className="pt-8  md:text-lg text-sm text-black leading-relaxed max-w-5xl">
          <div className="">
            <div className="fade-in mb-4" style={{ animationDelay: "0.5s" }}>
              previously i&apos;ve:
            </div>
            <div className="space-y-3">
              <div
                className="fade-in flex items-start gap-3"
                style={{ animationDelay: "0.7s" }}
              >
                <Asterisk className="w-4 h-4 mt-2.5 md:mt-1.5 flex-shrink-0" />
                <span>
                  built{" "}
                  <a
                    href="https://elevenmails.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
                  >
                    Eleven (acq. Pally, YC S25)
                  </a>{" "}
                  — unified communications.
                </span>
              </div>
              <div
                className="fade-in flex items-start gap-3"
                style={{ animationDelay: "0.8s" }}
              >
                <Asterisk className="w-4 h-4 mt-2.5 md:mt-1.5 flex-shrink-0" />
                <span>
                  built{" "}
                  <a
                    href="https://lyra.services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
                  >
                    Lyra (sold)
                  </a>{" "}
                  — NVIDIA Inception backed; 5,000+ users.
                </span>
              </div>
              <div
                className="fade-in flex items-start gap-3"
                style={{ animationDelay: "0.9s" }}
              >
                <Asterisk className="w-4 h-4 mt-2.5 md:mt-1.5 flex-shrink-0" />
                <span>
                  received a grant from{" "}
                  <a
                    href="https://www.1517fund.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
                  >
                    1517 Fund
                  </a>{" "}
                  — to build self-correcting glasses.
                </span>
              </div>
              <div
                className="fade-in flex items-start gap-3"
                style={{ animationDelay: "1.1s" }}
              >
                <Asterisk className="w-4 h-4 mt-2.5 md:mt-1.5 flex-shrink-0" />
                <span>
                  built{" "}
                  <a
                    href="https://trace-xi.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
                  >
                    Trace
                  </a>{" "}
                  — journaling app; 300 users; all proceeds donated to charity.
                </span>
              </div>
              <div
                className="fade-in flex items-start gap-3"
                style={{ animationDelay: "1.3s" }}
              >
                <Asterisk className="w-4 h-4 mt-2.5 md:mt-1.5 flex-shrink-0" />
                <span>
                  interned at{" "}
                  <span className="text-black font-bold"><a
                    href="https://headstarter.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
                  >
                    headstarter
                  </a>{" "}</span> — i was the first software engineering intern hire.
                </span>
              </div>
              <div
                className="fade-in flex items-start gap-3"
                style={{ animationDelay: "1.3s" }}
              >
                <Asterisk className="w-4 h-4 mt-2.5 md:mt-1.5 flex-shrink-0" />
                <span>
                  interned at{" "}
                  <span className="text-black font-bold">jpmorgan</span> as a
                  software engineer — mostly front end stuff.
                </span>
              </div>
            </div>
          </div>
          <div className="fade-in pt-8" style={{ animationDelay: "1.5s" }}>
            now i&apos;m working on{" "}
            <a
              href="https://axle-kappa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px]  transition-all duration-300"
            >
              axle
            </a>{" "}
            — instant stablecoin payments for logistics workers.
          </div>
          <div
            className="fade-in pt-8 flex justify-between"
            style={{ animationDelay: "1.7s" }}
          >
            <a
              href="https://www.linkedin.com/in/arhaan-keshwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px] transition-all duration-300 font-bold"
            >
              linkedin
            </a>
            <a
              href="https://x.com/akeshwan1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] hover:bg-[length:100%_1px] transition-all duration-300 font-bold"
            >
              x
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
