import coverimg from '../assets/cover-photo.jpg';
import profileimage from '../assets/profile-img.png';

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded shadow">
            <div className="relative">
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 ">
                    <img
                        src={coverimg}
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center p-0.5 shadow-md">
                            <img
                                src={profileimage}
                                alt="User"
                                className="w-full h-full rounded-full object-cover border-2 border-white"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
                    <h2 className="font-semibold text-lg sm:text-xl">Albert Flores</h2>
                    <p className="text-sm sm:text-base text-gray-500 mt-1">Senior Product Designer UI | UX</p>
                    <p className="text-sm sm:text-base text-gray-500">Designer | Graphic Designer | Web...</p>
                </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-gray-700">
                <div className="flex justify-between">
                    <span>Profile Visitors</span><span className="text-blue-600">140</span>
                </div>
                <div className="flex justify-between">
                    <span>Resume Viewers</span><span className="text-blue-600">20</span>
                </div>
                <div className="flex justify-between">
                    <span>My Jobs</span><span className="text-blue-600">88</span>
                </div>
            </div>
            <div className="mt-6">
                <p className="font-medium mb-2">My calendar</p>
                <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>Upcoming interviews</option>
                </select>
            </div>
        </aside>
    );
}