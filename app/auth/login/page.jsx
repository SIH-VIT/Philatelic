import React from "react";
import classes from "./index.module.scss";
import Link from "next/link";
import { InputField, Button } from "@/components";

const LoginPage = () => {
	return (
		<div className={classes.container}>
			<div className={classes.col}>
				<h1 className={classes.title}>Login</h1>
				<p className={classes.text}>
					Log in to your account to see your profile
				</p>
				<form className={classes.form}>
					<InputField label="Email" type="email" id="email" />

					<div className={classes.row}>
						<label htmlFor="password" className={classes.label}>
							Password
						</label>
						<Link href="/auth/resetPassword" className={classes.forgotPass}>
							forgot?
						</Link>
					</div>

					<InputField type="password" id="password" />
					<Button label="Login" appearance="prime" />

					<p className={classes.text}>
						Don’t have an account?{" "}
						<Link href="/auth/createAccount">Create now</Link>
					</p>
				</form>
			</div>

			<div className={classes.bgCol}>
				<p className={classes.absText}>
					The Philatelic Society of India (PSI) was formed in 1897 by a group
					of, mainly, expatriate Englishmen resident in the country as the first
					all-India philatelic society.
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
