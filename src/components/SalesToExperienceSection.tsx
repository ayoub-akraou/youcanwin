import type { ReactNode } from "react";
import flash from "../assets/flash.svg";
import heart from "../assets/heart.svg";
import moon from "../assets/moon.svg";

export default function SalesToExperienceSection() {
	return (
		<section className="bg-linear-90 from-[#16A34A] to-[#0B6B3A] px-24 py-20 text-center text-white">
			<h1 className="title mb-6 text-4xl">Transformez vos ventes en experience memorable</h1>
			<p className="description mb-12 text-lg">
				YouCanWin offre a vos clients plus qu'un produit : une experience interactive complete autour du football
			</p>
			<ul className="cards flex flex-col justify-between gap-6 md:flex-row">
				<Card title="Engagement immediat" description="Chaque produit devient une opportunite de jeu">
					<img src={flash} alt="flash icon" />
				</Card>
				<Card title="Fidelisation naturelle" description="Les clients reviennent pour completer leur collection">
					<img src={heart} alt="heart icon" />
				</Card>
				<Card title="Viralite organique" description="Les fans partagent et echangent entre eux">
					<img src={moon} alt="moon icon" />
				</Card>
			</ul>
		</section>
	);
}

type CardProps = {
	children: ReactNode;
	title: string;
	description: string;
};

function Card({ children, title, description }: CardProps) {
	return (
		<li className="card flex flex-1 flex-col items-center rounded-2xl bg-white/10 p-8">
			<div className="mb-4 rounded-xl bg-white/20 p-4">{children}</div>
			<h3 className="mb-2 text-xl">{title}</h3>
			<p className="text-base">{description}</p>
		</li>
	);
}
