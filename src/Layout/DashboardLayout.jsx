import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaPlusCircle,
  FaList,
  FaHandsHelping,
  FaUserCircle,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-base-100">
      {/* ================= Sidebar ================= */}
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-gradient-to-b from-primary to-accent text-white p-6">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Clean Hub
        </h2>

        <ul className="space-y-3">
          {/* Overview */}
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-primary font-bold shadow"
                    : "hover:bg-white/20"
                }`
              }
            >
              <FaHome />
              <span>Overview</span>
            </NavLink>
          </li>

          {/* Add Issues */}
          <li>
            <NavLink
              to="/dashboard/add-issues"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-primary font-bold shadow"
                    : "hover:bg-white/20"
                }`
              }
            >
              <FaPlusCircle />
              <span>Add Issues</span>
            </NavLink>
          </li>

          {/* My Issues */}
          <li>
            <NavLink
              to="/dashboard/my-issues"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-primary font-bold shadow"
                    : "hover:bg-white/20"
                }`
              }
            >
              <FaList />
              <span>My Issues</span>
            </NavLink>
          </li>

          {/* My Contribution */}
          <li>
            <NavLink
              to="/dashboard/my-contribution"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-primary font-bold shadow"
                    : "hover:bg-white/20"
                }`
              }
            >
              <FaHandsHelping />
              <span>My Contribution</span>
            </NavLink>
          </li>

          {/* Profile */}
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-primary font-bold shadow"
                    : "hover:bg-white/20"
                }`
              }
            >
              <FaUserCircle />
              <span>Profile</span>
            </NavLink>
          </li>
         
        </ul>
      </aside>

      {/* ================= Main Content ================= */}
      <main className="col-span-12 md:col-span-9 lg:col-span-10 p-6 bg-base-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
