import Badge from './Badge';
import tags from '@site/blog/tags.yml';

export default function TagBadges() {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '1.5rem 0', justifyContent: 'center' }}>
			{Object.entries(tags).map(([key, tag], i) => (
				<a href={`/blog/tags/${key}`} key={key} style={{ textDecoration: 'none' }}>
					<Badge>{tag.label}</Badge>
				</a>
			))}
		</div>
	);
}
