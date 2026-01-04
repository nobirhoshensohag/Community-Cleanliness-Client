import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  FaBell,
  FaHeart,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";

const stats = [
  { title: "Follows", value: "25%", color: "from-pink-400 to-pink-600" },
  { title: "Scope", value: "75%", color: "from-indigo-400 to-indigo-600" },
  { title: "Views", value: "50%", color: "from-purple-400 to-purple-600" },
];

const barData = [
  { name: "Sun", a: 30, b: 20 },
  { name: "Mon", a: 50, b: 35 },
  { name: "Tue", a: 40, b: 25 },
  { name: "Wed", a: 70, b: 45 },
  { name: "Thu", a: 55, b: 30 },
  { name: "Fri", a: 80, b: 50 },
  { name: "Sat", a: 60, b: 40 },
];

const areaData = [
  { day: "Sun", value: 300 },
  { day: "Mon", value: 600 },
  { day: "Tue", value: 350 },
  { day: "Wed", value: 500 },
  { day: "Thu", value: 400 },
  { day: "Fri", value: 700 },
  { day: "Sat", value: 450 },
];

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      {/* ===== Top Bar ===== */}
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center bg-white p-4 rounded-2xl shadow">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full sm:w-1/2 bg-gray-100 px-4 py-2 rounded-full outline-none"
        />

        <div className="flex justify-end gap-4 text-gray-600 text-xl">
          <FaHeart />
          <FaBell />
          <FaBars className="sm:hidden" />
          <FaUserCircle className="text-2xl" />
        </div>
      </div>

      {/* ===== Stat Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${item.color} text-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:scale-[1.02]`}
          >
            <p className="text-sm opacity-80">{item.title}</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              {item.value}
            </h2>

            <div className="mt-4 h-2 bg-white/30 rounded">
              <div className="h-2 w-1/2 bg-white rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Charts ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4 text-gray-700">
            Subscriptions
          </h3>
          <div className="h-[250px] sm:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="a" fill="#a855f7" radius={[6, 6, 0, 0]} />
                <Bar dataKey="b" fill="#ec4899" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4 text-gray-700">
            Earnings
          </h3>
          <div className="h-[250px] sm:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#a855f7"
                  fillOpacity={1}
                  fill="url(#colorVal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
