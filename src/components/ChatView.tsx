import { Avatar } from '@/components/ui/avatar';
import { Mic, Send } from 'lucide-react';

const messages = [
  {
    id: 1,
    text: 'Ok',
    sender: 'John',
    type: 'received',
  },
  {
    id: 2,
    text: 'Sure, I will do it',
    type: 'sent',
  },
  {
    id: 3,
    text: 'Contribute then',
    sender: 'John',
    type: 'received',
  },
];

const ChatView = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*roXS_KDLvMcvoF0U"
            alt="Project"
            className="rounded-full"
          />
        </Avatar>
        <div>
          <h2 className="font-semibold">Project</h2>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'sent' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                message.type === 'sent'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.sender && (
                <p className="text-xs text-cyan-500 mb-1">{message.sender}</p>
              )}
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full p-2">
          <input
            type="text"
            placeholder="Send a WhatsApp message"
            className="flex-1 bg-transparent outline-none px-2"
          />
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Mic className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Send className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
