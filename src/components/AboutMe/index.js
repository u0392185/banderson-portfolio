import React, { useState } from 'react'

function AboutMe() {

	return (
		<div>
			<div className="flex">
				<img src="202.jpeg" width="320" height="240" />
				<div className="mx-2">
					<p className="my-2">Hi! I'm Brian. I live with my wife, three kids, dog, and cat in Sandy, Utah.</p>
					<p className="my-2">I enjoy electronics, robotics, IoT household automation, and bike rides with my son and dog.</p>
					<p className="my-2">Hit me up with the contact form.</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe