import React, { useState } from 'react'

function ContactForm() {
	
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });

	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState('');

	function handleChange(e) {
		if(e.target.name === 'email') {
			const isValid = validateEmail(e.target.value)
			// isValid conditional statement
			if (!isValid) {
			  setErrorMessage('Please enter a valid email.');
			} else {
			  setErrorMessage('');
			}
		} else {
			if(!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
		if(!errorMessage) {
			setFormState({...formState, [e.target.name]: e.target.value})
		}

	}

	function handleSubmit(e) {
		e.preventDefault();
		validateEmail()
		console.log(formState)
	}

	function validateEmail(email) {

		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
	}

	return (
		<section>
			<h1 data-testid="" className="text-2xl text-teal-600 mb-6">Send me a message</h1>
			<form id="contact-form" onSubmit={handleSubmit} className="text-teal-100">
		        <div className="flex my-2">
		        	<div className="w-1/4">
		        		<label  htmlFor="name">Name:</label>
		        	</div>
		        	<div className="w-1/2">
				  		<input className="text-black" type="text" name="name" defaultValue={name} onBlur={handleChange} />
		        	</div>		
				</div>
				<div className="flex my-2">
		        	<div className="w-1/4">
		        		<label htmlFor="email">Email address:</label>
		        	</div>
		        	<div className="w-1/2">
				  		<input className="text-black" type="email" name="email" defaultValue={email} onBlur={handleChange} />
		        	</div>		        									  
				</div>
				<div className="flex my-2">
					<div className="w-1/4">
				  		<label htmlFor="message">Message:</label>
					</div>	
					<div className="w-1/2">
				  		<textarea className="text-black" name="message" rows="5"  defaultValue={message} onBlur={handleChange} />
					</div>	
				</div>
				{errorMessage && (
					<div>
						<p className="error-text text-red-400 my-2">{errorMessage}</p>
					</div>
				)}
				<button 
					className="btn hover:bg-blue-500 text-teal-100 bg-teal-500 font-bold py-2 px-4 border-blue-700 rounded" 
					data-testid="submitButton" 
					type="submit"
				>Submit</button>
			</form>
		</section>
	)
}

export default ContactForm