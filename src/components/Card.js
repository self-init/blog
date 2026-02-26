export default function Card({ title, children }) {
	return (
		<div style={{
			border: '1px solid var(--docusaurus-tag-list-border)',
			boxShadow: '2px 2px 0px var(--ifm-color-primary-lightest)',
			borderRadius: '8px',
			padding: '1.25rem 1.5rem',
			flex: '1 1 260px',
			background: 'var(--ifm-background-color)',
		}}>
			<h3 style={{ marginTop: 0, fontSize: '1.05rem' }}>
				{title}
			</h3>
			<p style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: '1.65' }}>{children}</p>
		</div>
	)
}
