import { FiFileText } from "react-icons/fi";

const EmptyState = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
        <FiFileText className="text-violet-600" size={36} />
      </div>

      <h2 className="mt-8 text-3xl font-bold">Welcome to Neurix</h2>

      <p className="mt-3 max-w-lg text-zinc-500">
        Upload a PDF and start asking questions. Your AI assistant will answer
        using Retrieval-Augmented Generation.
      </p>
    </div>
  );
};

export default EmptyState;
