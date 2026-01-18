import Hero from "./components/Hero";
import Body from "./components/Body";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Body />
    </div>
  );
}
