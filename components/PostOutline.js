import Link from 'next/link';
import React from 'react';

const PostOutline = ({ post }) => {
  return (
    <div>
      <h3>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
      <p>{post.data.excerpt}</p>
      <Link href={`/posts/${post.slug}`}>Read more</Link>
    </div>
  );
};

export default PostOutline;
