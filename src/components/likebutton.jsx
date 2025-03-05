import React, { useState } from 'react';

const LikeButton = ({ isLiked, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
        isLiked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
};

export default LikeButton;