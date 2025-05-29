import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-grow w-full max-w-screen-xl mx-auto p-4">
        {children}
      </main>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
