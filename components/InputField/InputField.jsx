import React from "react";
import classes from "./index.module.scss";

const InputField = ({ label, type, id }) => {
	return (
		<div>
			{label && (
				<label htmlFor={id} className={classes.label}>
					{label}
				</label>
			)}
			<input className={classes.input} type={type} id={id} />
		</div>
	);
};

export default InputField;
