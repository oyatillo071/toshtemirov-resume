import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container max-w-screen-lg mx-auto px-5 flex items-center justify-between">
        <h1 className="font-medium text-2xl">
          O<span className="hidden md:inline sm:mr-2">yatillo</span>
          <span className="hidden md:inline">Toshtemirov</span>
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
