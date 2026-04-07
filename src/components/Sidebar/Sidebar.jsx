import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* LOGO / TITLE */}
      <div className="sidebar__logo">
        <h2>FindFriends</h2>
      </div>

      {/* PROFILE MINI */}
      <div className="sidebar__profile">
        <img
          src="/profile.jpg"
          alt="profile"
          className="sidebar__avatar"
        />
        <div>
          <p className="sidebar__name">Elviz</p>
          <span className="sidebar__username">@elviz</span>
        </div>
      </div>

      {/* MENU */}
      <div className="sidebar__menu">
        <div className="sidebar__item active">🏠 Dashboard</div>
        <div className="sidebar__item">❤️ Favorites</div>
        <div className="sidebar__item">📝 Your Posts</div>
        <div className="sidebar__item">👥 Communities</div>
        <div className="sidebar__item">⚙️ Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;