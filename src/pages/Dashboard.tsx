import {
  FiFileText,
  FiMessageSquare,
  FiUpload,
  FiTrendingUp,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    {
      title: "Documents",
      value: "24",
      icon: FiFileText,
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "AI Chats",
      value: "138",
      icon: FiMessageSquare,
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Uploads",
      value: "52",
      icon: FiUpload,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Accuracy",
      value: "98%",
      icon: FiTrendingUp,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const recentDocs = [
    "Research Paper.pdf",
    "Meeting Notes.pdf",
    "Company Policy.pdf",
    "Product Roadmap.pdf",
  ];

  const recentChats = [
    "Summarize the uploaded research paper",
    "What is the refund policy?",
    "Explain Retrieval-Augmented Generation",
    "Generate meeting summary",
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section className="rounded-3xl bg-linear-to-r from-violet-600 to-cyan-500 p-8 text-white">
        <p className="text-white/80">Welcome back 👋</p>

        <h1 className="mt-2 text-4xl font-bold">Good Morning, Abhay</h1>

        <p className="mt-4 max-w-xl text-white/80">
          Continue chatting with your documents or upload a new knowledge base.
        </p>
      </section>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon size={26} />
              </div>

              <h2 className="mt-6 text-4xl font-bold">{item.value}</h2>

              <p className="mt-2 text-zinc-500">{item.title}</p>
            </div>
          );
        })}
      </section>

      {/* Grid */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Documents */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Documents</h2>

            <button className="flex items-center gap-2 text-violet-600">
              View All <FiArrowRight />
            </button>
          </div>

          <div className="space-y-4">
            {recentDocs.map((doc) => (
              <div
                key={doc}
                className="flex items-center justify-between rounded-xl border border-zinc-100 p-4 transition hover:bg-zinc-50"
              >
                <div className="flex items-center gap-3">
                  <FiFileText className="text-violet-600" />
                  <span>{doc}</span>
                </div>

                <FiClock className="text-zinc-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Chats */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Chats</h2>

            <button className="flex items-center gap-2 text-violet-600">
              View All <FiArrowRight />
            </button>
          </div>

          <div className="space-y-4">
            {recentChats.map((chat) => (
              <div
                key={chat}
                className="rounded-xl border border-zinc-100 p-4 transition hover:bg-zinc-50"
              >
                <div className="flex items-center gap-3">
                  <FiMessageSquare className="text-cyan-600" />

                  <p>{chat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold">Quick Actions</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <button className="rounded-2xl border border-zinc-200 p-6 transition hover:border-violet-500 hover:bg-violet-50">
            📤 Upload Document
          </button>

          <button className="rounded-2xl border border-zinc-200 p-6 transition hover:border-violet-500 hover:bg-violet-50">
            💬 Start New Chat
          </button>

          <button className="rounded-2xl border border-zinc-200 p-6 transition hover:border-violet-500 hover:bg-violet-50">
            📄 Browse Documents
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
