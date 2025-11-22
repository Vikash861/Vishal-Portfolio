import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-400">MIS Professional</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Mail size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}