import { Settings, Search } from 'lucide-react';
import ConversationsList from './ConversationsList';
import ChatView from './ChatView';

const ChatLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Panel - Conversations */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center bg-gray-100 rounded-full p-2">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Textbean"
              className="bg-transparent outline-none flex-1"
            />
            <Settings className="w-5 h-5 text-gray-500 ml-2" />
          </div>
        </div>

        <ConversationsList />
      </div>

      {/* Right Panel - Chat */}
      <div className="flex-1">
        <ChatView />
      </div>
    </div>
  );
};

export default ChatLayout;
