import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Phil</h1>
			<Link href={"/auth/login"}>Login</Link>
			<p>&nbsp;</p>
			<Link href={"/auth/createAccount"}>Signup</Link>
		</div>
	);
}
