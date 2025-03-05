import React, { useState } from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg w-80">
      <div className="flex items-center space-x-3">
        <img
          src={post.profileImage}
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-500"
        />
        <span className="font-semibold text-lg">{post.username}</span>
      </div>
      <p className="mt-3 text-gray-300">{post.content}</p>
      <div className="mt-4">
        <LikeButton isLiked={liked} onToggle={handleLikeToggle} />
      </div>
    </div>
  );
};

export default PostCard;