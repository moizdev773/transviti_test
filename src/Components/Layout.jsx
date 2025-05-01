import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar mobileNavOpen={mobileNavOpen} toggleMobileNav={toggleMobileNav} />
      
      <div className="flex flex-col lg:flex-row mt-6 px-4 space-y-6 lg:space-y-0 lg:space-x-6">
        <Sidebar />
        <main className="w-full lg:w-3/4">
          {children}
        </main>
      </div>
    </div>
  );
}