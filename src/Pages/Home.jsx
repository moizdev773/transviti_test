import Layout from '../Components/Layout';
import JobSection from '../Components/JobSection';

export default function Home() {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Find your Dream Job, <span className="text-blue-600">Albert!</span></h2>
        <p className="text-sm text-gray-500 mb-4">Explore the latest job openings and apply for the best opportunities available today!</p>
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 mb-2">
          <input
            type="text"
            placeholder="Job Title, Company or Keywords"
            className="w-full border-none px-3 py-2 rounded text-sm"
          />
          <select className="w-full md:w-auto border-none rounded text-sm px-2 py-2">
            <option>Select Location</option>
          </select>
          <select className="w-full md:w-auto border-none rounded text-sm px-2 py-2">
            <option>Job Type</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
        </div>
        <div className="flex flex-wrap gap-2 text-sm mt-2">
          <span className="px-3 py-1 bg-gray-100 rounded-full">Frontend</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">Backend</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">Graphic Designer</span>
        </div>
      </div>

      <JobSection title="Featured Jobs" linkText="See Featured Jobs" />
      <JobSection title="Recommended Jobs" linkText="See Recommended Jobs" />
      <JobSection title="Latest Jobs" linkText="See Latest Jobs" />
    </Layout>
  );
}