import React from 'react'


function Portfolio() {

	return (
		<div className="flex justify-around flex-wrap grow sm:my-4">
			<div className="my-2">
				<a href="https://aSoftMurmur.com" target="_blank" rel="noreferrer">
					<img src="images/aSoftMurmur.png"  width="367" height="200" alt="A Soft Murmur website screenshot" />
				</a>
			</div>
			
			<div className="my-2">
				<a href="https://www.ocearch.org/tracker/" target="_blank" rel="noreferrer">
					<img src="images/ocearchTracker.png"  width="367" height="200" alt="Ocearch Tracker website screenshot" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://spotthestation.nasa.gov/" target="_blank" rel="noreferrer">
					<img src="images/spotTheStation.png"  width="367" height="200" alt="Spot the Station NASA website screenshot" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://theoatmeal.com" target="_blank" rel="noreferrer">
					<img src="images/theOatmeal.png"  width="367" height="200" alt="The Oatmeal website screenshot" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://waitbutwhy.com" target="_blank" rel="noreferrer">
					<img src="images/waitbutwhy.png"  width="367" height="200" alt="Waitbutwhy website screenshot" />
				</a>
			</div>

			<div className="my-2">
				<a href="https://xkcd.com" target="_blank" rel="noreferrer">
					<img src="images/xkcd.png"  width="367" height="200" alt="xkcd website screenshot" />
				</a>
			</div>
		</div>
	)
}

export default Portfolio
