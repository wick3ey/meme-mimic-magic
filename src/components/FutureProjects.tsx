import { ExternalLink } from "lucide-react";

const FutureProjects = () => {
  return (
    <div className="fixed bottom-32 sm:bottom-40 right-4 sm:right-8 z-50">
      <a
        href="https://t.me/+EgHCzueGRw1mMzJk"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
      >
        <span className="text-lg sm:text-xl font-bold">
          🚀 Future Projects 🎯
        </span>
        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
};

export default FutureProjects;