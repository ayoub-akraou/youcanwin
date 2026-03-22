import flash from "../assets/flash.svg";
import heart from "../assets/heart.svg";
import moon from "../assets/moon.svg";

export default function SalesToExperienceSection() {
	return (
		<section className="text-white px-24 py-20 text-center bg-linear-90 from-[#16A34A] to-[#0B6B3A]">
			<h1 className="title text-4xl mb-6">Transformez vos ventes en expérience mémorable</h1>
			<p className="description text-lg mb-12">
				YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football
			</p>
			<ul className="cards flex justify-between gap-6">
				<Card title="Engagement immédiat" description="Chaque produit devient une opportunité de jeu">
					<img src={flash} alt="flash icon" />
				</Card>
				<Card title="Fidélisation naturelle" description="Les clients reviennent pour compléter leur collection">
					<img src={heart} alt="heart icon" />
				</Card>
				<Card title="Viralité organique" description="Les fans partagent et échangent entre eux">
					<img src={moon} alt="moon icon" />
				</Card>
			</ul>
		</section>
	);
}

function Card({ children, title, description }) {
	return (
		<li className="card rounded-2xl p-8 flex flex-col items-center bg-white/10">
			<div className="rounded-xl p-4 bg-white/20 mb-4">{children}</div>
			<h3 className="mb-2 text-xl">{title}</h3>
			<p className="text-base">{description}</p>
		</li>
	);
}
