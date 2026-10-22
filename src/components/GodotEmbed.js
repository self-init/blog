import React, { useEffect } from "react";

export default function GodotEmbed({source, aspectRatio = '16 / 9'}) {
	useEffect(() => {
		// Your JavaScript code here. This runs on the client side.
		const iframe = document.getElementById("myIframe");
		const button = document.getElementById("fullscreenButton");

		button.addEventListener("click", () => {
			if (!document.fullscreenElement) {
				// Request fullscreen for the iframe element
				if (iframe.requestFullscreen) {
					iframe.requestFullscreen();
				} else if (iframe.webkitRequestFullscreen) {
					/* Safari */
					iframe.webkitRequestFullscreen();
				} else if (iframe.msRequestFullscreen) {
					/* IE11 */
					iframe.msRequestFullscreen();
				}
			} else {
				// Exit fullscreen if already in fullscreen mode
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitExitFullscreen) {
					/* Safari */
					document.webkitExitFullscreen();
				} else if (document.msExitFullscreen) {
					/* IE11 */
					document.msExitFullscreen();
				}
			}
		});
		// You can add DOM manipulation or third-party script initialization here
	}, []);
	return (
		<div>
			<iframe
				id="myIframe"
				src={source}
				width="100%"
				style={{ aspectRatio: aspectRatio }}
				height="auto"
				loading="lazy"
				frameborder="0"
			>
				Your browser does not support iframes.
			</iframe>
			<a id="fullscreenButton" style={{ cursor: "pointer" }}>
				Click here to open in fullscreen.
			</a>
		</div>
	);
}
