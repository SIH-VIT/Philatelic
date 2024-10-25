import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import React from "react";

const page = () => {
	return (
		<div>
			<InputField label="Email" type="email" id="email" />
			<Button label="Create Account" />
		</div>
	);
};

export default page;
