import { FiFileText, FiUploadCloud } from "react-icons/fi";

const Upload = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">Upload Documents</h1>

        <p className="mt-2 text-zinc-500">
          Upload PDFs to build your AI knowledge base.
        </p>
      </div>

      {/* Upload Box */}
      <div className="rounded-2xl border-2 border-dashed border-zinc-300 bg-white p-10 text-center transition hover:border-violet-500">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
          <FiUploadCloud size={38} className="text-violet-600" />
        </div>

        <h2 className="mt-6 text-2xl font-semibold">
          Drag & Drop your PDF here
        </h2>

        <p className="mt-3 text-zinc-500">
          or click the button below to browse your files
        </p>

        <input id="pdf-upload" type="file" accept=".pdf" className="hidden" />

        <label
          htmlFor="pdf-upload"
          className="mt-8 inline-block cursor-pointer rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700"
        >
          Choose PDF
        </label>

        <p className="mt-4 text-sm text-zinc-400">
          Supported format: PDF (Max 20MB)
        </p>
      </div>

      {/* Upload Queue */}
      <div className="rounded-2xl border bg-white">
        <div className="border-b p-6">
          <h3 className="text-lg font-semibold">Recent Uploads</h3>
        </div>

        <div className="divide-y">
          {[
            {
              name: "Research Paper.pdf",
              size: "2.4 MB",
              status: "Indexed",
            },
            {
              name: "Company Policy.pdf",
              size: "1.3 MB",
              status: "Processing",
            },
            {
              name: "Meeting Notes.pdf",
              size: "850 KB",
              status: "Completed",
            },
          ].map((file) => (
            <div
              key={file.name}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-violet-100 p-3">
                  <FiFileText className="text-violet-600" size={22} />
                </div>

                <div>
                  <h4 className="font-medium">{file.name}</h4>

                  <p className="text-sm text-zinc-500">{file.size}</p>
                </div>
              </div>

              <span
                className={`w-fit rounded-full px-3 py-1 text-sm ${
                  file.status === "Indexed"
                    ? "bg-green-100 text-green-700"
                    : file.status === "Completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {file.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Tips */}
      <div className="rounded-2xl border bg-zinc-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">Tips</h3>

        <ul className="list-disc space-y-2 pl-5 text-zinc-600">
          <li>Upload clean, searchable PDFs.</li>
          <li>Large documents may take longer to index.</li>
          <li>You can chat with your document after indexing finishes.</li>
          <li>Supported format: PDF only.</li>
        </ul>
      </div>
    </div>
  );
};

export default Upload;
