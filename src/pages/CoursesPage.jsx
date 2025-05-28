import CourseList from '../components/dashboard/CourseList';
import Sidebar from '../components/dashboard/Sidebar';

const CoursesPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 ml-64">
                <h1 className="text-2xl font-bold mb-6">Courses</h1>
                <CourseList />
            </div>
        </div>
    );
};

export default CoursesPage;