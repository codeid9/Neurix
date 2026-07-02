const documents = [
  {
    id: 1,
    name: "Research Paper.pdf",
    size: "2.4 MB",
    pages: 18,
    uploaded: "2 hours ago",
    status: "Indexed",
  },
  {
    id: 2,
    name: "Company Policy.pdf",
    size: "1.1 MB",
    pages: 12,
    uploaded: "Yesterday",
    status: "Indexed",
  },
  {
    id: 3,
    name: "Meeting Notes.pdf",
    size: "650 KB",
    pages: 8,
    uploaded: "3 days ago",
    status: "Processing",
  },
];

const Documents = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>

          <p className="text-zinc-500">Manage all your uploaded documents.</p>
        </div>

        <button className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white">
          Upload Document
        </button>
      </div>

      {/* Stats */}

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm text-zinc-500">Total Documents</p>

          <h2 className="mt-2 text-3xl font-bold">24</h2>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm text-zinc-500">Storage Used</p>

          <h2 className="mt-2 text-3xl font-bold">48 MB</h2>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm text-zinc-500">Indexed</p>

          <h2 className="mt-2 text-3xl font-bold">21</h2>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border bg-white">
        <table className="min-w-full">
          <thead className="border-b bg-zinc-50">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>

              <th className="px-6 py-4 text-left">Pages</th>

              <th className="px-6 py-4 text-left">Size</th>

              <th className="px-6 py-4 text-left">Uploaded</th>

              <th className="px-6 py-4 text-left">Status</th>

              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b transition hover:bg-zinc-50">
                <td className="px-6 py-5 font-medium">{doc.name}</td>

                <td className="px-6 py-5">{doc.pages}</td>

                <td className="px-6 py-5">{doc.size}</td>

                <td className="px-6 py-5">{doc.uploaded}</td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      doc.status === "Indexed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-right">
                  <button className="rounded-lg border px-4 py-2 hover:bg-zinc-100">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
