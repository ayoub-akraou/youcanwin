import check from "../assets/check.svg";
import football from "../assets/foot-ball.png";
import phone from "../assets/phone.svg";
import liste from "../assets/liste.svg";
import gift from "../assets/gift.svg";
import analytics from "../assets/analytics.svg";
import calendar from "../assets/calendar.svg";

export default function SolutionSection() {
	return (
		<section className="flex gap-16 py-20">
			<div className="image flex-1 px-16">
				<img className="bloc mx-auto" src={football} alt="football" />
			</div>
			<div className="right flex-1">
				<p className="rounded-full flex gap-2 text-[#0B6B3A] bg-[#DCFCE7] px-3 py-1 font-medium text-sm mb-4 w-fit">
					<img src={check} alt="check icon" />
					<span>Solution complète</span>
				</p>
				<h1 className="mb-4 text-4xl font-bold">Le terrain de jeu digital de votre marque</h1>
				<p className="text-lg text-[#475569] mb-8">
					YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité
					d'engagement avec vos consommateurs.
				</p>
				<ul className="flex flex-col gap-5 mb-8">
					<SolutionItem title="Activation instantanée" description="QR codes uniques sur chaque produit ">
						<img src={phone} alt="phone icon" />
					</SolutionItem>
					<SolutionItem title="Collection digitale" description="Cartes de joueurs, raretés, échanges">
						<img src={liste} alt="liste icon" />
					</SolutionItem>
					<SolutionItem
						title="Récompenses exclusives"
						description="Tirages au sort, lots partenaires, expériences VIP">
						<img src={gift} alt="gift icon" />
					</SolutionItem>
					<SolutionItem title="Analytics avancés" description="Dashboard temps réel, insights consommateurs">
						<img src={analytics} alt="analytics icon" />
					</SolutionItem>
				</ul>

				<button className="px-6 py-3 rounded-lg text-base bg-[#DC2626] text-white">
					Planifier une démo <img className="ml-2.5 inline-block" src={calendar} alt="calendar icon" />
				</button>
			</div>
		</section>
	);
}

function SolutionItem({ title, description, children }) {
	return (
		<li className="flex items-center gap-4">
			<div className="icon p-2.5 rounded-lg bg-[#F0FDF4]">{children}</div>
			<div className="">
				<h4 className="font-semibold text-base">{title}</h4>
				<p className="description text-sm text-[#475569]">{description}</p>
			</div>
		</li>
	);
}
