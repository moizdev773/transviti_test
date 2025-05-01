import React from 'react'
import JobCard from './JobCard';
import cardicon from '../assets/card-icon.png'

function JobSection({ title, linkText }) {
    const repeatCount = title === 'Latest Jobs' ? 5 : title === 'Recommended Jobs' ? 10 : title === "Featured Jobs" ? 5 : 1;

    return (
        <section className="mb-6">
            <div className="flex gap-3 items-center mb-3">
                <h3 className="font-semibold text-lg">{title}</h3>
                <a href="#" className="text-blue-600 text-sm">{linkText}</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {[...Array(repeatCount)].map((_, index) => (
                    <JobCard
                        key={index}
                        promoted={true}
                        logo={cardicon}
                        title="UI/UX Designer"
                        company="Teams"
                        location="Seattle, USA (Remote)"
                        timePosted="1 day ago"
                        applicants="22 applicants"
                    />
                ))}
            </div>
        </section>
    );
}

export default JobSection