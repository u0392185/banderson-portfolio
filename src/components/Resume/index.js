import React from 'react'

function Resume() {

	const skills = [
		{
			listed: ["PHP", "Node.js", "C#", "MySQL", "MongoDB", "Postgre SQL", "Apache2", "Nginx", "Git", "Docker", "Kubernetes", "Android", "Python", "Redis", "Lambda"],
			name: "backEnd",
			display: "Back-end"
		},
		{
			listed: ["HTML5", "JavaScript", "ES6", "React JS", "Vue.js", "jQuery", "CSS 3", "Tailwind"],
			name: "frontEnd",
			display: "Front-end"
		},
		{
			listed: ["Debian / Ubuntu","Gnome","LAMP","Data Modeling","PHPStorm","Sublime Text","Photoshop"],
			name: "osApplication",
			display: "OS / Application"
		},
		{
			listed: ["Amazon AWS, EC2, S3, Lambda, Cognito etc.","Azure DevOps","Digital Ocean","Twilio","JIRA","Trello","Google Analytics","Google Cloud"],
			name: "webServices",
			display: "Web Services"
		},
		{
			listed: ["Laravel","Symfony","Phalcon","Nuxt","CodeceptJS","Twitter Bootstrap","Selenium","PHPUnit","Codeception"],
			name: "frameworksCms",
			display: "Frameworks / CMS"
		},
		
	]

	return (
		<section>
			<div className="flex justify-between">
				<div>
					<h1 data-testid="" className="text-2xl text-teal-600 mb-6">I have skills!</h1>
				</div>
				<div>
					<a href="brianAndersonResume.pdf" target="_blank" rel="noreferrer">
						<button 
					        className="btn hover:bg-blue-500 text-teal-100 bg-teal-800 font-bold py-2 px-4 border-blue-700 rounded" 
			        	>View my Resume</button>
					</a>
				</div>
			</div>
			{
				skills.map(({listed, display, name}, i) => (
			        <div className="flex my-6" key={name}>
			        	<div className="w-1/4">
			        		{display}
			        	</div>
			        	<div className="w-1/2">
					  		{listed.map((skill, j) => (
				  				<span key={j} className="madSkills">{skill}{j < (listed.length - 1)  && ", "}</span>
					  		))}
			        	</div>		
					</div>
			))}	

		</section>
	)
}

export default Resume