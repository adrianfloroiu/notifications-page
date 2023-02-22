import "./App.css";
import Notification from "./Notification";
import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar: "./avatar-mark-webber.webp",
      author: "Mark Webber",
      title: "reacted to your recent post",
      post: "My first tournament today!",
      time: "1m ago",
      isUnread: true,
    },
    {
      id: 2,
      avatar: "./avatar-angela-gray.webp",
      author: "Angela Gray",
      title: "followed you",
      time: "5m ago",
      isUnread: true,
    },
    {
      id: 3,
      avatar: "./avatar-jacob-thompson.webp",
      author: "Jacob Thompson",
      title: "has joined your group",
      group: "Chess Club",
      time: "1 day ago",
      isUnread: true,
    },
    {
      id: 4,
      avatar: "./avatar-rizky-hasanuddin.webp",
      author: "Rizky Hasanuddin",
      title: "sent you a private message",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5 days ago",
      isUnread: false,
    },
    {
      id: 5,
      avatar: "./avatar-kimberly-smith.webp",
      author: "Kimberly Smith",
      title: "commented on your picture",
      picture: "./image-chess.webp",
      time: "1 week ago",
      isUnread: false,
    },
    {
      id: 6,
      avatar: "./avatar-nathan-peterson.webp",
      author: "Nathan Peterson",
      title: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      isUnread: false,
    },
    {
      id: 7,
      avatar: "./avatar-anna-kim.webp",
      author: "Anna Kim",
      title: "left the group",
      group: "Chess Club",
      time: "2 weeks ago",
      isUnread: false,
    },
  ]);

  const [unreadNotifications, setUnreadNotifications] = useState(3);

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
    setUnreadNotifications(0);
  }

  return (
    <div className="App">
      <div className="card">
        <div className="top">
          <h2 className="title">
            Notifications <span>{unreadNotifications}</span>
          </h2>
          <p onClick={markAllRead} className="mark">
            Mark all as read
          </p>
        </div>

        <div className="content">
          {notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
