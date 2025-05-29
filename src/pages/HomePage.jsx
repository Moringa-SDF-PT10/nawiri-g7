import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 bg-[#e8ded4]">
            <div className="max-w-2xl text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Need help growing?</h1>
                <p className="text-lg text-gray-700 mb-10">Nawiri is your one-stop solution for online learning and personal growth.</p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/register"
                        className="bg-black text-white px-6 py-3 rounded-full shadow hover:bg-gray-800 transition"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/login"
                        className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
