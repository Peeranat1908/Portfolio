'use client';

import { title } from 'process';
import { useState } from 'react';

// CompetitionItem component defined outside the main component

type CompetitionItemProps = {
    title: string;
    organizer: string;
    date: string;
    position: string;
    description: React.ReactNode
}
type ProjectItemsProps = {
    title: string;
    date: string;
    position: string;
    description: React.ReactNode
}
const CompetitionItem = ({ title, organizer, date, position, description }: CompetitionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-2"></div>
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                        <p className="text-indigo-600">{organizer}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500">{date}</p>
                        <p className="font-semibold text-emerald-600">{position}</p>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mt-4 flex items-center justify-center w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    <span>{isOpen ? 'Hide Details' : 'Show Details'}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

const ProjectItems = ({ title, date, position, description }: ProjectItemsProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-blue-200 p-2"></div>
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500">{date}</p>
                        <p className="font-semibold text-emerald-600">{position}</p>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mt-4 flex items-center justify-center w-full bg-indigo-300 hover:bg-indigo-200 text-indigo-800 py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    <span>{isOpen ? 'Hide Details' : 'Show Details'}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        {description}
                    </div>
                )}
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
            {/* Header Section */}
            <section id='about'>
                <div className="container mx-auto py-16">
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-bold text-indigo-800 mb-2">My Profile</h1>
                        <div className="w-20 h-1 bg-indigo-500 rounded mb-12"></div>

                        {/* Profile Card */}
                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Profile Picture Section */}
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex items-center justify-center">
                                    <div className="overflow-hidden rounded-xl border-4 border-white shadow-lg">
                                        <img
                                            src="/img/IMG_4698.JPG"
                                            alt="Profile"
                                            className="w-64 h-74 object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Profile Details Section */}
                                <div className="p-8 flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                        Peeranat Phaophom <span className="text-indigo-600">(Frame)</span>
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Major:</span> Computer Science
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">University:</span> Kasetsart University
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Location:</span> Bangkok, Thailand
                                            </p>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">Interest:</span> Software Engineer, Business Analysis
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
                                        <p className="text-gray-700 italic">
                                            "Passionate about building scalable software and solving real-world problems with technology."
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <a
                                            href="https://github.com/Peeranat1908"
                                            className="flex items-center justify-center bg-gray-800 hover:bg-gray-600 text-white py-2 px-6 rounded-lg transition-colors duration-300"
                                        >
                                            <img src="/img/Github Icon.png" alt="GitHub" className="w-6 h-6 mr-2" />
                                            <span>Peeranat1908</span>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/peeranat-phaophom-4a75a832a/"
                                            className='flex items-center justify-center bg-blue-500 hover:bg-blue-300 text-white py-2 px-6 rounded-lg transition-colors duration-300 mt-3'>
                                            <img src="https://digisaws.com/wp-content/uploads/2021/03/pasted-image-0-1536x417.png" alt="LinkedIn" className="w-20 h-6 mr-2" />
                                            <span className='text-black'>Peeranat Phaophom</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Experience Section */}
            <section id='work'>
                <div className="container mx-auto pb-16">
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl font-bold text-indigo-800 mb-2">Experience</h2>
                        <div className="w-32 h-1 bg-indigo-500 rounded mb-12"></div>

                        <div className="max-w-4xl w-full">
                            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-2"></div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Business Analyst</h3>
                                    <p className="text-indigo-600 mb-4">Business Analyst intern at Pi securities public company limited</p>

                                    <div className="flex items-center text-gray-500 mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>Internship Period</span>
                                        <span className="ml-2 font-light">(30 APR 2025 - 20 JUNE 2025)</span>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <div className="text-gray-600">
                                            <div className="flex flex-col">
                                                <li>Gathered and analyzed user requirements through interviews, meetings, and document reviews.</li>
                                                <li>Created Business Requirement Documents (BRD), user stories, and use case diagrams to clarify system functionalities.</li>
                                                <li>Collaborated closely with developers and designers to translate business needs into wireframes and user flows.</li>
                                                <li>Supported UI/UX design by providing logical flows and aligning technical feasibility with user expectations.</li>
                                                <li>Conducted user acceptance testing (UAT) and ensured the delivered features met business goals.</li>
                                                <li>Communicated with stakeholders, product owners, and cross-functional teams to update progress and align expectations.</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Competitions Section */}
                <div className="container mx-auto pb-16">
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl font-bold text-indigo-800 mb-2">Competitions</h2>
                        <div className="w-36 h-1 bg-indigo-500 rounded mb-12"></div>

                        <div className="max-w-4xl w-full space-y-6">
                            {/* Competition Item 1 */}
                            <CompetitionItem
                                title="Startup Thailand League 2024"
                                organizer="NIA Thailand"
                                date="June 2024"
                                position="University Representative"
                                description={
                                    <div>
                                        <p className="mb-2">Developed an AI-powered solution for healthcare resource optimization during a 48-hour hackathon.</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Used machine learning algorithms to predict patient admission patterns</li>
                                            <li>Designed a user-friendly dashboard for hospital staff</li>
                                            <li>Implemented real-time data visualization using React and D3.js</li>
                                            <li>Presented the solution to a panel of industry experts</li>
                                        </ul>
                                    </div>
                                }
                            />

                            {/* Competition Item 2 */}
                            <CompetitionItem
                                title="Amaze Hackathon 2024"
                                organizer="Amaze TH"
                                date="October 2024"
                                position="Won 3 Prizes"
                                description={
                                    <div>
                                        <p className="mb-2">Participated in a competitive programming contest solving complex algorithmic problems.</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Solved 7 out of 10 challenging algorithm problems</li>
                                            <li>Implemented efficient solutions using C++ and Python</li>
                                            <li>Applied knowledge of data structures, dynamic programming, and graph algorithms</li>
                                            <li>Collaborated with team members to optimize solution approaches</li>
                                        </ul>
                                    </div>
                                }
                            />

                            {/* Competition Item 3 */}
                            <CompetitionItem
                                title="Ku Hackathon 2023"
                                organizer="Kasetsart University"
                                date="October 2023"
                                position="Top 10 Finallist"
                                description={
                                    <div>
                                        <p className="mb-2">Created an innovative mobile application for community waste management.</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Developed a full-stack solution with React Native and Firebase</li>
                                            <li>Implemented geolocation services for optimal waste collection routes</li>
                                            <li>Created gamification elements to encourage community participation</li>
                                            <li>Designed with accessibility and user experience as top priorities</li>
                                        </ul>
                                    </div>
                                }
                            />

                            {/* Competition Item 4 */}
                            <CompetitionItem
                                title="CP Cup Business Idea to Action"
                                organizer="CP Thailand"
                                date="January 2024"
                                position="Finallist"
                                description={
                                    <div>
                                        <p className="mb-2">Won first place in an internal university coding competition.</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Competed against 50+ teams from various departments</li>
                                            <li>Solved complex algorithmic challenges under time pressure</li>
                                            <li>Applied knowledge of sorting algorithms, tree traversals, and dynamic programming</li>
                                            <li>Demonstrated effective problem-solving and coding efficiency</li>
                                        </ul>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id='projects'>
                <div className='bg-base-300 min-h-screen'>
                    <div>
                        {/* Projects Section */}
                        <div className="container mx-auto pb-16">
                            <div className="flex flex-col items-center">
                                <h2 className="text-5xl font-bold text-white mb-2 mt-10">Projects</h2>
                                <div className="w-36 h-1 bg-white rounded mb-12"></div>

                                <div className="max-w-4xl w-full space-y-6">
                                    {/* project 1 */}
                                    <ProjectItems
                                        title="Java Project"
                                        date="June 2024"
                                        position="Full Stack Developer / Software Engineer"
                                        description={
                                            <div>
                                                <p className="mb-2">Developed an AI-powered solution for healthcare resource optimization during a 48-hour hackathon.</p>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>Used machine learning algorithms to predict patient admission patterns</li>
                                                    <li>Designed a user-friendly dashboard for hospital staff</li>
                                                    <li>Implemented real-time data visualization using React and D3.js</li>
                                                    <li>Presented the solution to a panel of industry experts</li>
                                                </ul>
                                            </div>
                                        }
                                    />

                                    {/* Competition Item 2 */}
                                    <ProjectItems
                                        title="Web application (KU Hackathon 2023)"
                                        date="October 2024"
                                        position="Frontend Developer"
                                        description={
                                            <div>
                                                <p className="mb-2">Participated in a competitive programming contest solving complex algorithmic problems.</p>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>Solved 7 out of 10 challenging algorithm problems</li>
                                                    <li>Implemented efficient solutions using C++ and Python</li>
                                                    <li>Applied knowledge of data structures, dynamic programming, and graph algorithms</li>
                                                    <li>Collaborated with team members to optimize solution approaches</li>
                                                </ul>
                                            </div>
                                        }
                                    />

                                    {/* Competition Item 2 */}
                                    <ProjectItems
                                        title="Ku Startup Website"
                                        date="October 2024"
                                        position="Frontend Developer"
                                        description={
                                            <div>
                                                <p className="mb-2">Participated in a competitive programming contest solving complex algorithmic problems.</p>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>Solved 7 out of 10 challenging algorithm problems</li>
                                                    <li>Implemented efficient solutions using C++ and Python</li>
                                                    <li>Applied knowledge of data structures, dynamic programming, and graph algorithms</li>
                                                    <li>Collaborated with team members to optimize solution approaches</li>
                                                </ul>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}