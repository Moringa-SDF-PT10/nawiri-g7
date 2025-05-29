// src/pages/DashboardPage.js
import { useState } from 'react';

import Sidebar from '../components/dashboard/Sidebar';
// Assuming you want to display CourseList directly for students
import CourseList from '../components/dashboard/CourseList';

const DashboardPage = ({ user }) => { // Still accepting user prop
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Mobile Header with Toggle Button */}
            <header className="bg-white shadow-sm p-4 lg:hidden flex items-center justify-between">
                <h1 className="text-xl font-bold">Student Dashboard</h1> {/* Changed title */}
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                    aria-label="Toggle sidebar"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>

            <div className="flex flex-1">
                {/* Sidebar - Hidden on mobile when closed */}
                <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block fixed lg:relative z-20 w-64 h-full`}>
                    {/* Pass the user prop to Sidebar */}
                    <Sidebar onClose={() => setSidebarOpen(false)} user={user} />
                </div>

                {/* Overlay for mobile when sidebar is open */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content Area */}
                <main className="flex-1 p-6 lg:ml-64 mt-16 lg:mt-0">
                    <h1 className="text-2xl font-bold mb-6 hidden lg:block">Student Dashboard</h1> {/* Changed title */}

                    {/* For a student dashboard, you might show their enrolled courses directly */}
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Your Enrolled Courses</h2>
                            <CourseList /> {/* Display CourseList here */}
                        </div>
                        {/* You can add other student-relevant widgets here, e.g., announcements, progress */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Announcements</h2>
                            <p className="text-gray-600">No new announcements at this time.</p>
                        </div>
                    </div>

                    {/* Removed admin-specific sections */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                            <ActivityLog />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Users</h2>
                            <UserList />
                        </div>
                    </div> */}
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;