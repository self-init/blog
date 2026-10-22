export default function Badge({ children, color, style }) {
	return (
		<span class='badgebutton' style={{

			...style
	  }}>
	    {children}
	  </span>
	)
}
