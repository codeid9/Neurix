import { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    username: "Abhay",
    email: "abhay@example.com",
    theme: "light",
    notifications: true,
    autoSave: true,
  });

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="mt-2 text-zinc-500">Manage your account preferences.</p>
      </div>

      {/* Profile Settings */}
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold">Profile</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Username</label>

            <input
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>
        </div>
      </div>

      {/* Preferences */}

      <div className="rounded-2xl border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold">Preferences</h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <span>Theme</span>

            <select
              value={form.theme}
              onChange={(e) => setForm({ ...form, theme: e.target.value })}
              className="rounded-lg border px-4 py-2"
            >
              <option value="light">Light</option>

              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <span>Email Notifications</span>

            <input
              type="checkbox"
              checked={form.notifications}
              onChange={() =>
                setForm({
                  ...form,
                  notifications: !form.notifications,
                })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <span>Auto Save Chats</span>

            <input
              type="checkbox"
              checked={form.autoSave}
              onChange={() =>
                setForm({
                  ...form,
                  autoSave: !form.autoSave,
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Security */}

      <div className="rounded-2xl border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold">Security</h2>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-xl border px-5 py-3 hover:bg-zinc-100">
            Change Password
          </button>

          <button className="rounded-xl border border-red-300 px-5 py-3 text-red-600 hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>

      {/* Save */}

      <div className="flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
