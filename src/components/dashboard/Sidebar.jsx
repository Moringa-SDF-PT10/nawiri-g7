// src/components/dashboard/Sidebar.js
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onClose, user }) => { // user prop is still essential for showing student name
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path
            ? "bg-blue-100 text-blue-600"
            : "text-gray-700";
    };

    return (
        <div className="w-64 bg-white shadow-md h-screen lg:h-auto lg:min-h-screen">
            <div className="p-4 border-b flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold">Student Panel</h2> {/* Changed title */}
                    <p className="text-sm text-gray-500">{user?.name}</p>
                </div>
                <button
                    onClick={onClose}
                    className="lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                    aria-label="Close sidebar"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/dashboard"
                            className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive('/dashboard')}`}
                            onClick={onClose}
                        >
                            Overview
                        </Link>
                    </li>
                    {/* Removed admin-specific links */}
                    {/* {user?.role === 'admin' && (
                        <>
                            <li>
                                <Link
                                    to="/courses"
                                    className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive('/courses')}`}
                                    onClick={onClose}
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/lessons"
                                    className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive('/lessons')}`}
                                    onClick={onClose}
                                >
                                    Lessons
                                </Link>
                            </li>
                        </>
                    )} */}
                    {/* Add a "My Courses" link for students if desired */}
                    <li>
                        <Link
                            to="/courses"
                            className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive('/my-courses')}`}
                            onClick={onClose}
                        >
                            My Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className={`block px-4 py-2 rounded-md hover:bg-blue-50 ${isActive('/profile')}`}
                            onClick={onClose}
                        >
                            Profile
                        </Link>
                    </li>
                    {/* You might also add a Logout button here */}
                    <li>
                        <button
                            onClick={() => { /* Implement logout logic here */ onClose(); }}
                            className="block w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
