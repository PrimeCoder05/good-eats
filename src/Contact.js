export default function Contact() {
	return (
		<>
			<div className="wrapper">
				<h2>Online Order</h2>
				<form>
					<label htmlFor="first-name">First Name:</label> 
					<input type="text" name="first-name" id="first-name" autoComplete="given-name" required />

					<label htmlFor="last-name">Last Name:</label>
					<input type="text" name="last-name" id="last-name" autoComplete="family-name" required />

					<label htmlFor="phone-number">Phone Number:</label>
					<input type="tel" name="phone-number" id="phone-number" required />

					
				</form>
			</div>
			
		</>
	);
}