import type { Route } from "./+types/home";
import { User, Github } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Template" },
    { name: "description", content: "Welcome to React Template!" },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FFF5F5]">
      <div className="max-w-md w-full px-6 py-12 flex flex-col items-center">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden p-8 mb-6 border border-[#FFE4E1]">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-[#FFDFD3] rounded-full opacity-50"></div>
              <div className="relative bg-[#FFF8F5] rounded-full p-4">
                <img src="https://s1.locimg.com/2025/03/04/28cfb15e65029.png" width="128" />
              </div>
            </div>
            
            <h1 className="text-3xl font-medium text-center text-[#D98880] mt-2">
              Welcome
            </h1>
            
            <p className="text-lg text-center text-[#B08B80] max-w-xs">
              A simple and elegant starting point for your project
            </p>
            
            <div className="w-full max-w-xs mt-2">
              <button 
                className="w-full px-5 py-3 text-base font-medium rounded-xl text-[#D98880] bg-[#FFF0EB] hover:bg-[#FFE4E1] transition-colors border border-[#FFDFD3]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-8 w-full text-center">
          <div className="flex items-center justify-center gap-2 py-2">
            <span className="text-[#D9A6A1]">Made with ❤️ by</span>
            <a 
              href="https://github.com/Bearisbug" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-[#C27C72] hover:text-[#D98880] inline-flex items-center gap-1 transition-colors"
            >
              Bearisbug
              <Github className="w-4 h-4" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
