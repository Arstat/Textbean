import { Avatar } from '@/components/ui/avatar';

const conversations = [
  {
    id: 1,
    name: 'Project',
    lastMessage: 'Contribute then',
    time: '10:20 AM',
    unreadCount: 0,
    avatar: 'https://miro.medium.com/v2/resize:fit:1400/0*roXS_KDLvMcvoF0U',
  },
  {
    id: 2,
    name: 'Offer Box 2.0',
    lastMessage: 'Offer: Apply ₹400 off Coupon | Havells AQUAS...',
    time: '10:02 AM',
    unreadCount: 2,
  },
  // Add more conversations as needed
];

const ConversationsList = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
        >
          <Avatar className="h-12 w-12">
            <img
              src={conversation.avatar || 'https://github.com/shadcn.png'}
              alt={conversation.name}
              className="rounded-full"
            />
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 truncate">
                {conversation.name}
              </h3>
              <span className="text-sm text-gray-500">{conversation.time}</span>
            </div>
            <p className="text-sm text-gray-500 truncate">
              {conversation.lastMessage}
            </p>
          </div>
          {conversation.unreadCount > 0 && (
            <div className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
              {conversation.unreadCount}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConversationsList;
