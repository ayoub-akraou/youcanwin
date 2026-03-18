import collection from "../assets/collection.svg";
import arrow from "../assets/arrow-right.svg";
import lampe from "../assets/lampe.svg";
import arc from "../assets/arc.svg";

export default function Header() {
	return (
		<header className="flex justify-center items-center gap-8 py-32">
			<div className="flex-1 flex flex-col gap-8">
				<h1 className="text-7xl font-bold">
					Transformez chaque
					<div className="inline-block relative bg-linear-90 from-[#16A34A] to-[#0B6B3A] bg-clip-text text-transparent">
						<span>&nbsp;produit&nbsp;</span>
						<img className="absolute top-full left-1/2 -translate-x-1/2" src={arc} />
					</div>
					en expérience de jeu
				</h1>
				<p className="description text-2xl">
					YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes.
					<span className="font-semibold">Codes QR, cartes digitales, défis et récompenses.</span>
				</p>
				<div className="stats flex justify-between">
					<div className="">
						<div className="text-[#0B6B3A] text-4xl font-bold ">500K+</div>
						<div className="text-sm font-medium">Interactions/mois </div>
					</div>
					<div>
						<div className="text-[#B01219] text-4xl font-bold ">50+</div>
						<div className="text-sm font-medium">Marques actives</div>
					</div>
					<div className="">
						<div className="text-[#0B6B3A] text-4xl font-bold ">x3.5</div>
						<div className="text-sm font-medium">ROI moyen</div>
					</div>
				</div>
				<div className="buttons font-medium flex text-nowrap my-4">
					<button className="flex gap-2 cursor-pointer active:scale-95 px-8 py-4 bg-linear-90 from-[#16A34A] to-[#0B6B3A] shadow-md text-white rounded-xl">
						<p>Demander une démo</p>
						<img src={arrow} alt="right arrow" />
					</button>
					<button className="flex gap-2 ml-3 cursor-pointer active:scale-95 px-8 py-4 shadow-md text-[#334155] rounded-xl border-2 border-[#CBD5E1]">
						<img src={lampe} alt="right arrow" />
						<p>Comment ça marche</p>
					</button>
				</div>
				<div className="font-medium border-t-gray-300 border-t pt-8 ">
					<p className="mb-4 text-xs text-[#64748B] uppercase">Ils nous font confiance</p>
					<ul className="text-[#94A3B8] text-sm flex gap-8">
						<li>Maroc Telecom </li>
						<li>Inwi</li>
						<li>Orange</li>
						<li>Carrefour</li>
					</ul>
				</div>
			</div>
			<div className="flex-1">
				<img src={collection} alt="mobile collection" />
			</div>
		</header>
	);
}
