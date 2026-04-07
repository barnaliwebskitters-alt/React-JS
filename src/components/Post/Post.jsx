const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img src="/user.jpg" alt="" />
        <div>
          <h4>George Jose</h4>
          <span>1 hour ago</span>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <img src="/post.jpg" alt="post" />

      <div className="post-actions">
        <span>❤️</span>
        <span>💬</span>
        <span>📤</span>
        <button>Save</button>
      </div>

      <input placeholder="Write your comment..." />
    </div>
  );
};

export default Post;