import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import Card from './Card';
import Badge from './Badge';

export default function RecentPosts() {
  const globalData = useGlobalData();
  const posts = globalData?.['blog-posts-global-data']?.['default']?.posts ?? [];

  return (
 	  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '1.5rem 0', justifyContent: 'center'}}>
			{posts.map((post, i) => (
				<a href={post.permalink} style={{ textDecoration: 'none', color: 'inherit' }}>
					<Badge>{post.title}</Badge>
				</a>
      ))}
    </div>
  );
}
