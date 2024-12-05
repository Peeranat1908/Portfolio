export default function About() {
    return (
        <div className="min-h-screen bg-base-300">
            <div className="flex flex-col items-center p-10">
                <h1 className="text-4xl font-bold font-sans mb-8">My Profile</h1>
                <div className="grid grid-cols-2 gap-6 max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
                    {/* Profile Picture Section */}
                    <div className="flex items-center justify-center bg-gray-200 rounded-lg">
                        <img
                            src="/img/IMG_2116.jpg"
                            alt="Profile"
                            className="w-40 h-40 rounded-full object-cover"
                        />
                    </div>

                    {/* Profile Details Section */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-4 text-black">Peeranat Phaophom (Frame)</h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Major:</strong> Computer Science
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>University:</strong> Kasetsart University
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Location:</strong> Bangkok, Thailand
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Interest:</strong> Software Engineer, Business Analysis
                        </p>
                        <p className="text-gray-700">
                            "Passionate about building scalable software and solving real-world problems with technology."
                        </p>
                        <button className="flex justify-center">
                            <a href="https://github.com/Peeranat1908"></a>
                            <img src="/img/Github Icon.png" alt=""  className="w-12 mt-5"/>
                        
                        </button>
                        <p className="text-gray-700 flex justify-center mt-1"> <a href="https://github.com/Peeranat1908">Peeranat1908</a></p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center p-10">
                <div>
                    <h1 className="text-4xl font-bold font-sans mb-8 flex justify-center">Exprerince</h1>
                    <div className="grid gired-cols-4 max-w-4xl">
                        <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
                            <h1 className="text-2xl font-bold text-black text-center">
                                <strong>Full Stack Developer</strong>
                            </h1>
                        </div>
                        <div className="flex flex-col bg-white shadow-md rounded-lg p-6 mt-4">
                            <h1 className="text-2xl font-bold text-black text-center">Software Engineer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
