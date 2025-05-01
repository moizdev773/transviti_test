import logo from '../assets/logo.png';
import navimg from '../assets/nav-img.jpg';
import SearchBar from './Searchbar';


export default function Navbar({ mobileNavOpen, toggleMobileNav }) {
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex items-center justify-between max-w-full mx-auto">
        <button
          id="toggleNav"
          className="text-gray-700 md:hidden focus:outline-none"
          onClick={toggleMobileNav}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <a href="#" className="text-blue-600 font-semibold">Find Jobs</a>
          <a href="#">Top Companies</a>
          <a href="#">Job Tracker</a>
          <a href="#">My Calendar</a>
          <a href="#">Documents</a>
          <a href="#">Messages</a>
          <a href="#">Notifications</a>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <SearchBar/>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm">Resume Builder</button>
          <img src={navimg} className="w-8 h-8 rounded-full" alt="Avatar" />
        </div>
      </div>

      <div
        id="mobileNav"
        className={`md:hidden ${mobileNavOpen ? 'flex' : 'hidden'} flex-col mt-3 space-y-2 text-sm px-4`}
      >
        
        <a href="#" className="block text-blue-600 font-semibold">Find Jobs</a>
        <a href="#">Top Companies</a>
        <a href="#">Job Tracker</a>
        <a href="#">My Calendar</a>
        <a href="#">Documents</a>
        <a href="#">Messages</a>
        <a href="#">Notifications</a>
        <button className="bg-blue-600 text-white w-full py-2 rounded text-sm mt-2">Resume Builder</button>
      </div>
    </nav>
  );
}