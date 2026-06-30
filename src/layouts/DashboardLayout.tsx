import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FiHome,
  FiMessageSquare,
  FiFileText,
  FiUpload,
  FiSettings,
  FiUser,
} from "react-icons/fi";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: FiMessageSquare,
  },
  {
    name: "Documents",
    path: "/documents",
    icon: FiFileText,
  },
  {
    name: "Upload",
    path: "/upload",
    icon: FiUpload,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: FiUser,
  },
];

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* Sidebar */}
      <aside className="w-72 border-r border-zinc-200 bg-white p-6">
        <h1 className="mb-10 text-3xl font-bold text-violet-600">Neurix</h1>

        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  location.pathname === link.path
                    ? "bg-violet-600 text-white"
                    : "hover:bg-zinc-100"
                }`}
              >
                <Icon size={20} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1">
        <header className="flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-8">
          <h2 className="text-2xl font-bold">
            {links.find((l) => l.path === location.pathname)?.name}
          </h2>

          <div className="flex items-center gap-4">
            <img
              src="https://ui-avatars.com/api/?name=A"
              alt=""
              className="h-10 w-10 rounded-full"
            />
          </div>
        </header>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
