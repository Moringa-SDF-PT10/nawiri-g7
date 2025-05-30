import CourseList from "../components/dashboard/CourseList";
import Sidebar from "../components/dashboard/Sidebar";

// CoursesPage needs to accept the 'user' prop from its parent (e.g., App.js or AppRoutes)
const CoursesPage = ({ user }) => { // <--- Receive user as a prop
  return (
    <div className="flex">
      {/* Pass the user prop to Sidebar */}
      <Sidebar user={user} /> {/* <--- Pass user to Sidebar */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-2xl font-bold mb-6">Courses</h1>
        <CourseList />
      </div>
    </div>
  );
};

export default CoursesPage;
