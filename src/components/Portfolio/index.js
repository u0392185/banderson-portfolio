import React from 'react'


function Portfolio() {

	return (
		<div className="flex justify-around flex-wrap grow sm:my-4">
			<div className="my-2">
				<a href="https://aSoftMurmur.com" target="_blank">
					<img src="images/aSoftMurmur.png"  width="367" height="200" />
				</a>
			</div>
			
			<div className="my-2">
				<a href="https://www.ocearch.org/tracker/" target="_blank">
					<img src="images/ocearchTracker.png"  width="367" height="200" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://spotthestation.nasa.gov/" target="_blank">
					<img src="images/spotTheStation.png"  width="367" height="200" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://theoatmeal.com" target="_blank">
					<img src="images/theOatmeal.png"  width="367" height="200" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://waitbutwhy.com" target="_blank">
					<img src="images/waitbutwhy.png"  width="367" height="200" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://xkcd.com" target="_blank">
					<img src="images/xkcd.png"  width="367" height="200" />
				</a>
			</div>
		</div>
	)
}

export default Portfolio
