import React from "react";
import "./form.css";

const Form = () => {
	return (
		<>
			<div className={"form-class"}>
				<form className="inner-form">
					<div className="introText">
						<span>
							Before you go, please leave your contact details so
							we can get back to you...
						</span>
					</div>
					<label className="input-label">
						<input
							className="textbox-input"
							type="text"
							name="name"
							placeholder="*Your name"
							required="True"
							maxLength="56"
						/>
					</label>
					<br />
					<label className="input-label">
						<input
							className="textbox-input"
							type="text"
							name="email"
							placeholder="*Your email"
							required="True"
							maxLength="56"
						/>
					</label>
					<div className="form-consent-wrapper">
						<div className="checkbox-wrapper">
							<input
								className="checkbox"
								type="checkbox"
							/>
						</div>
						<span className="consent-form-text">
							<span>* </span>
							<span>
								[Sample legal text] The personal data you have
								provided will be processed by XXXXX for purposes
								of providing you the service. The legal basis of
								the processing is XXXXX. Your data will not be
								transferred nor assigned to third parties. You
								can exercise your right to access, rectify and
								delete your data, as well as the other rights
								granted by law by sending an email to XXXXX. For
								further information, please check our privacy
								policy XXXXX.
							</span>
						</span>
					</div>
					<button className=" button">Send your answer ⟶</button>
				</form>
			</div>
		</>
	);
};

export default Form;
