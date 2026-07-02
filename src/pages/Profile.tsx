import {
  FiEdit2,
  FiFileText,
  FiHardDrive,
  FiMessageSquare,
} from "react-icons/fi";

const activities = [
  {
    title: "Uploaded Research Paper.pdf",
    time: "2 hours ago",
  },
  {
    title: "Asked 15 questions",
    time: "Yesterday",
  },
  {
    title: "Uploaded Company Policy.pdf",
    time: "3 days ago",
  },
];

const Profile = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl border bg-white p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img
            src="https://ui-avatars.com/api/?name=Abhay&background=7c3aed&color=fff&size=256"
            alt="Profile"
            className="h-28 w-28 rounded-full"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold">Abhay</h1>

            <p className="mt-2 text-zinc-500">
              MERN Stack Developer & AI Enthusiast
            </p>

            <p className="mt-1 text-sm text-zinc-400">Joined June 2026</p>
          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-zinc-100">
            <FiEdit2 />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
            <FiFileText className="text-violet-600" size={22} />
          </div>

          <p className="text-zinc-500">Documents</p>

          <h2 className="mt-2 text-3xl font-bold">24</h2>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <FiMessageSquare className="text-green-600" size={22} />
          </div>

          <p className="text-zinc-500">Chats</p>

          <h2 className="mt-2 text-3xl font-bold">148</h2>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
            <FiHardDrive className="text-blue-600" size={22} />
          </div>

          <p className="text-zinc-500">Storage Used</p>

          <h2 className="mt-2 text-3xl font-bold">48 MB</h2>
        </div>
      </div>

      {/* Information */}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="mb-5 text-xl font-semibold">Personal Information</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-zinc-500">Full Name</p>

              <p className="font-medium">Abhay</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Email</p>

              <p className="font-medium">abhay@example.com</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Role</p>

              <p className="font-medium">User</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Plan</p>

              <p className="font-medium">Free</p>
            </div>
          </div>
        </div>

        {/* Activity */}

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="mb-5 text-xl font-semibold">Recent Activity</h2>

          <div className="space-y-5">
            {activities.map((activity) => (
              <div key={activity.title} className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-violet-600" />

                <div>
                  <p className="font-medium">{activity.title}</p>

                  <p className="text-sm text-zinc-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage */}

      <div className="rounded-2xl border bg-white p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Storage Usage</h2>

          <span className="text-sm text-zinc-500">48 MB / 500 MB</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full w-[10%] rounded-full bg-violet-600" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
