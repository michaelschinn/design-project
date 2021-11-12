import Navigation from "./Navigation";
import { Link } from "react-router-dom"

export default function Header() {
	return(
		<header>
			<Link className="logo" to="/">
				<div className="mscLogo"></div>
				<div className="fullNameLogo"></div>
			</Link>
			<Navigation />
		</header>
	)
}
