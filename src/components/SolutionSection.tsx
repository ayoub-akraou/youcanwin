import type { ReactNode } from "react";
import check from "../assets/check.svg";
import football from "../assets/foot-ball.png";
import phone from "../assets/phone.svg";
import liste from "../assets/liste.svg";
import gift from "../assets/gift.svg";
import analytics from "../assets/analytics.svg";
import calendar from "../assets/calendar.svg";

export default function SolutionSection() {
	return (
		<section className="flex flex-col gap-16 py-20 lg:flex-row">
			<div className="image flex-1 px-8 lg:px-16">
				<img className="bloc mx-auto" src={football} alt="football" />
			</div>
			<div className="right flex-1">
				<p className="mb-4 flex w-fit gap-2 rounded-full bg-[#DCFCE7] px-3 py-1 text-sm font-medium text-[#0B6B3A]">
					<img src={check} alt="check icon" />
					<span>Solution complete</span>
				</p>
				<h1 className="mb-4 text-4xl font-bold">Le terrain de jeu digital de votre marque</h1>
				<p className="mb-8 text-lg text-[#475569]">
					YouCanWin transforme vos produits en experiences interactives. Chaque achat devient une opportunite
					d'engagement avec vos consommateurs.
				</p>
				<ul className="mb-8 flex flex-col gap-5">
					<SolutionItem title="Activation instantanee" description="QR codes uniques sur chaque produit">
						<img src={phone} alt="phone icon" />
					</SolutionItem>
					<SolutionItem title="Collection digitale" description="Cartes de joueurs, raretes, echanges">
						<img src={liste} alt="liste icon" />
					</SolutionItem>
					<SolutionItem
						title="Recompenses exclusives"
						description="Tirages au sort, lots partenaires, experiences VIP">
						<img src={gift} alt="gift icon" />
					</SolutionItem>
					<SolutionItem title="Analytics avances" description="Dashboard temps reel, insights consommateurs">
						<img src={analytics} alt="analytics icon" />
					</SolutionItem>
				</ul>

				<button className="rounded-lg bg-[#DC2626] px-6 py-3 text-base text-white">
					Planifier une demo <img className="ml-2.5 inline-block" src={calendar} alt="calendar icon" />
				</button>
			</div>
		</section>
	);
}

type SolutionItemProps = {
	title: string;
	description: string;
	children: ReactNode;
};

function SolutionItem({ title, description, children }: SolutionItemProps) {
	return (
		<li className="flex items-center gap-4">
			<div className="icon rounded-lg bg-[#F0FDF4] p-2.5">{children}</div>
			<div>
				<h4 className="text-base font-semibold">{title}</h4>
				<p className="description text-sm text-[#475569]">{description}</p>
			</div>
		</li>
	);
}
