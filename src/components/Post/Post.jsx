import './Post.css';

const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <img src="/user.jpg" className="post__avatar" />
        <div>
          <h4 className="post__user">George Jose</h4>
          <span className="post__time">1 hour ago</span>
        </div>
      </div>

      <p className="post__text">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <img src="/post.jpg" className="post__image" />

      <div className="post__actions">
        <div className="post__icons">
          <span>❤️</span>
          <span>💬</span>
          <span>📤</span>
        </div>
        <button className="post__save-btn">Save</button>
      </div>

      <input
        className="post__comment"
        placeholder="Write your comment..."
      />
    </div>
  );
};

export default Post;