import React from 'react';
import favicon from '../assets/fav-icon.png';
import cardicon from '../assets/card-icon.png';

export default function JobCard({ promoted, logo = cardicon, title, company, location, timePosted, applicants }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-sm">
      {promoted && <span className="text-xs px-2 py-0.5 rounded">Promoted</span>}
      <div className="flex items-center justify-between mb-2"></div>
      <div className='flex items-center gap-3'>
        <div>
          <img src={logo} className="h-6" alt="Company Logo" />
        </div>
        <div>
          <p className="font-medium mb-1">{title}</p>
          <p className="text-gray-500 text-xs mb-1">{company}</p>
        </div>
      </div>
      <p className="text-gray-500 text-xs mb-1">{location}</p>
      <p className="text-gray-400 text-xs mb-3">{timePosted} | <a href="" className='text-blue-500'>{applicants}</a> </p>
      <div className='flex gap-3 items-center'>
        <button className="bg-blue-600 text-white py-1 w-full rounded text-sm">Apply Now</button>
        <span><img src={favicon} alt="Favorite" /></span>
      </div>
    </div>
  );
}