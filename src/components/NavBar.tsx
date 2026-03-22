import logo from "../assets/logo.svg";
import Button from "./Button.tsx";
export default function NavBar() {
	return (
		<nav className="p-4 bg-white z-50 text-sm font-medium shadow-md sticky top-0 left-0 w-full">
			<div className="container flex items-center">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<ul className="ml-auto flex gap-1">
					<li>
						<a className="px-3 py-2" href="">
							Nos offres
						</a>
					</li>
					<li>
						<a className="px-3 py-2" href="">
							Nos jeux
						</a>
					</li>
					<li>
						<a className="px-3 py-2" href="">
							Album 2025
						</a>
					</li>
					<li>
						<a className="px-3 py-2" href="">
							Album 2025
						</a>
					</li>
					<li>
						<a className="px-3 py-2" href="">
							À propos
						</a>
					</li>
				</ul>
				<Button text="Demander une démo" />
			</div>
		</nav>
	);
}
