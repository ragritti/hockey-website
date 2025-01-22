import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-10 px-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description Column */}
          <div className="space-y-4">
            <img 
              src="./logo.png" 
              alt="Optimum Hockey Academy Logo" 
              className="h-12"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Calendar', 'Alumni', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-red-500 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors">
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors">
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors">
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>888 Ridge Valley</p>
              <p>Irvine, CA 92618</p>
              <p className="pt-2">Email: info@optimumhockeyacademy.com</p>
              <p>Phone: (888) 888-8888</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Optimum Hockey Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}