import React from "react";
import styles from "./index.module.scss";

const Button = ({
	label,
	onClick,
	appearance = "primary",
	size = "md",
	disabled = false,
}) => {
	const buttonClassNames = [styles.btn, styles[appearance], styles[size]].join(
		" "
	);

	return (
		<button className={buttonClassNames} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
