import { useEffect, useState } from "react";

function Notification({ notification }) {
  const [unread, setUnread] = useState(null);

  useEffect(() => {
    setUnread(notification.isUnread);
  }, [notification]);

  return (
    <div className={unread ? "notification unread" : "notification"}>
      <div className="avatar">
        <img src={notification.avatar} alt="Avatar" />
      </div>
      <div className="notification-text">
        <p className="title">
          {" "}
          <span className="author">{notification.author}</span>&nbsp;
          {notification.title}&nbsp;
          <span className="post">{notification.post}</span>
          <span className="group">{notification.group}</span>
          {unread && <span className="dot"></span>}
        </p>
        <p className="time">{notification.time}</p>
        {notification.message && (
          <div className="message">{notification.message}</div>
        )}
      </div>
      {notification.picture && (
        <div className="notification-picture">
          <img src={notification.picture} alt="Picture" />
        </div>
      )}
    </div>
  );
}

export default Notification;
