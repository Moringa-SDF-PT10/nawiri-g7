import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

 

function PlaceholderStudentDashboard() {
  const { session, signOut } = UserAuth()
  const navigate = useNavigate()

  

  return (
    <>
    <h1>DASHBOARD</h1>
      <h2>Welcome, {session?.user?.email}🙌</h2>
      <div>
        <p className="signout">Sign out</p>
      </div>
    </>
  );
}
export default PlaceholderStudentDashboard;
