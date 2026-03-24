import earth from "../assets/earth.svg";
import Button from "./Button";
import Check from "./UI/Check";
import Earth from "./UI/Earth";
import Flash from "./UI/Flash";
import Growth from "./UI/Growth";

type Plan = {
	name: string;
	tagline: string;
	description: string;
	price: string;
	cta: string;
	popular?: boolean;
	features: string[];
	icon: React.ReactElement;
};

const plans: Plan[] = [
	{
		name: "Starter",
		tagline: "Campagne locale",
		description: "Ideal pour tester sur un marche",
		price: "Tarification sur mesure selon vos volumes",
		cta: "Demander un devis",
		features: [
			"Jusqu a 1 000 utilisateurs",
			"Jusqu a 10K QR codes",
			"1 pays / region",
			"Album standard (equipe nationale)",
			"Hebergement Cloud securise",
			"Backoffice simplifie",
			"Support par email",
			"1 marque",
		],
		icon: <Flash color="#16A34A" width="24" height="24" />,
	},
	{
		name: "Scale",
		tagline: "Expansion nationale",
		description: "Pour des campagnes d envergure",
		price: "Tarification sur mesure selon vos volumes",
		cta: "Planifier une demo",
		popular: true,
		features: [
			"Jusqu a 50 000 utilisateurs",
			"QR codes illimites",
			"Multi-pays (jusqu a 5)",
			"Album complet (toutes les equipes)",
			"Cloud ou On-Premise",
			"Backoffice avance avec analytics",
			"Support prioritaire 24/7",
			"Jusqu a 3 marques",
			"API REST disponible",
		],
		icon: <Growth />,
	},
	{
		name: "Enterprise",
		tagline: "Solution globale",
		description: "Pour les groupes internationaux",
		price: "Tarification sur mesure selon vos volumes",
		cta: "Contactez-nous",
		features: [
			"Utilisateurs illimites",
			"QR codes illimites",
			"Deploiement mondial",
			"Albums personnalises par region",
			"Infrastructure dediee (On-Premise)",
			"Multi-marques illimite",
			"Developpements sur-mesure",
			"Account manager dedie",
			"SLA garanti 99.9%",
			"Formation et onboarding complet",
		],
		icon: <Earth />,
	},
];

export default function PlansSection() {
	return (
		<section className="container overflow-hidden rounded-4xl py-16 sm:py-20">
			<div className="bg-gradient-to-b from-white to-slate-50">
				<div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
						Des formules adaptees a votre echelle
					</h2>
					<p className="mt-4 text-base text-slate-600 sm:text-lg">
						Choisissez la solution qui correspond a vos besoins et votre ambition
					</p>
				</div>

				<ul className="grid gap-6 lg:grid-cols-3">
					{plans.map((plan) => (
						<PlanCard key={plan.name} plan={plan} />
					))}
				</ul>
			</div>
		</section>
	);
}

function PlanCard({ plan, children }: { plan: Plan }) {
	const cardStyle = plan.popular
		? "border-red-200 bg-white shadow-xl shadow-red-100/60 ring-2 ring-red-200"
		: "border-slate-200 bg-white shadow-lg shadow-slate-200/60";

	return (
		<li className={`relative flex h-full flex-col rounded-3xl border p-8 sm:p-7 ${cardStyle}`}>
			{plan.popular ? (
				<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
					Populaire
				</div>
			) : null}

			<div className="mb-4">
				<div className="icon mb-4 rounded-xl bg-[#F0FDF4] p-3 w-fit">{plan.icon}</div>
				<h3 className="text-xl font-semibold text-slate-900 leading-none">{plan.name}</h3>
				<p className="mb-4 text-sm font-medium tracking-wide text-[#16A34A]">{plan.tagline}</p>
				<p className="mb-6 text-base text-[#475569]">{plan.description}</p>
				<p className="text-[#64748B] py-4 border-t border-b border-gray-200 text-xs">{plan.price}</p>
			</div>

			<ul className="mb-7 py-2 space-y-3">
				{plan.features.map((feature) => (
					<li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
						<Check color={plan.popular ? "red" : "#16A34A"} />
						<span>{feature}</span>
					</li>
				))}
			</ul>

			<div>
				{plan.popular ? (
					<Button className=" from-red-500! to-red-500 text-white! ml-0 w-full justify-center" text={plan.cta} />
				) : (
					<button className="w-full cursor-pointer rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 active:scale-95">
						{plan.cta}
					</button>
				)}
			</div>
		</li>
	);
}
