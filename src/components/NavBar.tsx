import logo from "../assets/logo.svg";
import arrow from "../assets/arrow-right.svg";

export default function NavBar() {
	return (
		<nav className="p-4  text-sm font-medium shadow-md sticky top-0 left-0 w-full">
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
				<button className="flex gap-2 ml-3 cursor-pointer active:scale-95 px-5 py-2.5 bg-linear-90 from-[#16A34A] to-[#0B6B3A] shadow-md text-white rounded-md">
					<p>Demander une démo</p>
					<img src={arrow} alt="right arrow" />
				</button>
			</div>
		</nav>
	);
}
