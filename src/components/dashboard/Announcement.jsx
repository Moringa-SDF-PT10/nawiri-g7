import { useState } from "react";

const Announcement = ({ id, title, date, department, content, read, onMarkAsRead }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`p-4 mb-4 rounded-2xl shadow-md transition-all duration-300 ${
        read ? "bg-gray-100 opacity-75" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-start mb-1">
        <div>
          <h2 className={`text-lg font-semibold ${read ? "text-gray-500" : ""}`}>
            {title}
          </h2>
          <p className="text-sm text-gray-500">
            {department} • {date}
          </p>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-blue-500 hover:underline text-sm"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
          {!read && (
            <button
              onClick={() => onMarkAsRead(id)}
              className="text-green-600 hover:underline text-sm"
            >
              Mark as read
            </button>
          )}
        </div>
      </div>
      <p className="text-gray-700 text-sm">
        {expanded ? content : `${content.slice(0, 120)}...`}
      </p>
    </div>
  );
};

export default Announcement;
