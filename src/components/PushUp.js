import React, { useState, useEffect } from 'react';

function PushUp() {
	// const [videoSrc, setVideoSrc] = useState('');

	// useEffect(() => {
	// 	const fetchVideo = async () => {
	// 		try {
	// 			const response = await fetch('/video_feed');
	// 			if (!response.ok) {
	// 				throw new Error('Failed to fetch video stream');
	// 			}
	// 			setVideoSrc(URL.createObjectURL(await response.blob()));
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	fetchVideo();
	// }, []);

	return (
		<div style={{ backgroundColor: "black", color: "white" }}>
			<div className='container p-3'>
				<h1 className='text-center mb-3 '>Pose Detection with Feedback</h1>
				<div className="img-box" style={{}}>
					<img id="video-stream" src="http://127.0.0.1:5000" alt="Pose Detection with Feedback" style={{ height: "100%", width: "100%" }} />
				</div>
			</div>
		</div>
	);
}

export default PushUp;
