import { Link, useNavigate } from "react-router";

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 bg-base-100 rounded-xl shadow">

      {/* Left buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline btn-sm flex items-center gap-1"
        >
          ⬅ Back
        </button>

        <Link
          to="/"
          className="btn btn-success btn-sm flex items-center gap-1"
        >
          🏠 Home
        </Link>
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-center flex-1">
        Welcome to your <span className="text-primary">Dashboard</span> ✨
      </h2>

      {/* Right empty spacer (balance layout) */}
      <div className="w-[120px] hidden md:block"></div>
    </div>
  );
};

export default DashboardHeader;
