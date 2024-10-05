import LoveLetterGenerator from "./_components/LoveLetterGenerator";
import Link from "next/link";
import { Github } from 'lucide-react';


export default function Home() {
  return (
    <div>
      <nav className="bg-neutral-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          
          <div className="text-white text-xl font-bold">
            <Link href="/">
              <span >Home</span>
            </Link>
          </div>

          {/* Links */}
          <ul className="flex space-x-6 text-white">
            
            <li>
              <Link href="https://github.com/xanmoy/love-letter-generator">
                <Github />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen">
        
        <LoveLetterGenerator/>
      </div>
      <footer className="bg-neutral-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Love Letter Generator. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
  );
}
