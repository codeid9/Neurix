import ChatHeader from "../components/chat/ChatHeader";
import ChatInput from "../components/chat/ChatInput";
import ChatSidebar from "../components/chat/ChatSidebar";
import EmptyState from "../components/chat/EmptyState";
// import MessageBubble from "../components/chat/MessageBubble";

const Chat = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      {/* Sidebar */}
      <div className="hidden w-80 border-r border-zinc-200 lg:block">
        <ChatSidebar />
      </div>

      {/* Chat */}
      <div className="flex flex-1 flex-col">
        <ChatHeader />

        <div className="flex-1 overflow-y-auto bg-zinc-50 p-6">
          <EmptyState />

          {/* Uncomment later */}

          {/* <div className="space-y-6">
            <MessageBubble
              role="user"
              message="What is Retrieval Augmented Generation?"
            />

            <MessageBubble
              role="assistant"
              message="Retrieval-Augmented Generation (RAG) combines a retrieval system with a Large Language Model to answer questions using external knowledge."
            />
          </div> */}
        </div>

        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
