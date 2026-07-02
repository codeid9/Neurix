type Props = {
  role: "user" | "assistant";
  message: string;
};

const MessageBubble = ({ role, message }: Props) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xl rounded-3xl px-5 py-4 ${
          isUser
            ? "bg-violet-600 text-white"
            : "border border-zinc-200 bg-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;
