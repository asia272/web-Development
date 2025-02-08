import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="courses">Courses</Link>  {/* Relative Path */}
            <Link to="playlist">Playlist</Link>
          </li>
        </ul>
      </nav>
      
      {/* Outlet will render child components */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
