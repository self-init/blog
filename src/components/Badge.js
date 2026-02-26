export default function Badge({ children, color, style }) {
	return (
		<span style={{
	  	border: '1px solid var(--docusaurus-tag-list-border)',
	    borderRadius: 'var(--ifm-global-radius)',
	    boxShadow: '2px 2px 0px var(--ifm-color-primary-lightest)',
			color: 'var(--ifm-link-color)',
	    padding: '3px 10px',
	    fontSize: '0.78rem',
	    fontFamily: 'monospace',
	    fontWeight: 600,
	    letterSpacing: '0.04em',
	    display: 'inline-block',
	    marginRight: '6px',
			marginBottom: '6px',
			background: 'var(--ifm-background-color)',
			...style
	  }}>
	    {children}
	  </span>
	)
}
