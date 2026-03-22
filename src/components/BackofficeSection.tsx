import settings from "../assets/settings.svg";
import qrCode from "../assets/qr-code.svg";
import group from "../assets/group.svg";
import controllers from "../assets/controllers.svg";
import analytics from "../assets/analytics.svg";
import gift from "../assets/gift.svg";
import clock from "../assets/clock.svg";
import download from "../assets/download.svg";
import liste from "../assets/liste.svg";
import earth from "../assets/earth.svg";
import cloud from "../assets/cloud.svg";
import Button from "./Button";

export default function BackofficeSection() {
	return (
		<section className=" bg-[#F5F5F5]">
			<div className="p-20 contanier px-4">
				<div className="w-fit mb-4 mx-auto px-4 py-1.5 rounded-full bg-[#DCFCE7] text-sm font-medium text-[#0B6B3A]">
					<img className="mr-2 inline-block" src={settings} alt="settings icon" />
					Backoffice tout-en-un
				</div>
				<h1 className="text-4xl font-bold text-center mb-4">Gérez tout depuis une interface unique</h1>
				<p className="text-lg text-[#475569] mb-12 text-center">
					Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie
				</p>

				<ul className="grid grid-cols-4 gap-8 mb-12">
					<Card
						title="Générateur QR Codes"
						description="Créez et téléchargez vos QR
                  codes uniques en masse">
						<img src={qrCode} alt="" />
					</Card>
					<Card
						title="CRM Participants"
						description="Collectez et gérez vos
                  participants avec segmentation avancée">
						<img src={group} alt="" />
					</Card>
					<Card
						title="Configuration jeux"
						description="Paramétrez entièrement vos jeux :
                  règles, lots, durée, visuels">
						<img src={controllers} alt="" />
					</Card>
					<Card title="Analytics temps réel" description="Suivez vos KPIs : scans, conversions, engagement, ROI">
						<img src={analytics} alt="" />
					</Card>
					<Card
						title="Gestion des lots"
						description="Définissez vos récompenses et
                  gérez les tirages au sort">
						<img src={gift} alt="" />
					</Card>
					<Card
						title="Notifications"
						description="Envoyez des push, emails et SMS
                  à vos participants">
						<img src={clock} alt="" />
					</Card>
					<Card
						title="Export données"
						description="Téléchargez vos données en CSV,
                  Excel ou via API">
						<img src={download} alt="" />
					</Card>
					<Card
						title="Multi-campagnes"
						description="Gérez plusieurs campagnes
                  simultanément">
						<img src={liste} alt="" />
					</Card>
				</ul>
				<Button text="Demander un accès au backoffice" className="mx-auto!" />
			</div>
			<ul className="py-7 px-32 flex justify-between bg-white *:border-none *:flex *:flex-col *:items-center">
				<Card title="Utilisateurs" description="De 1K à illimité ">
					<img src={group} alt="group icon" />
				</Card>
				<Card title="QR Codes" description="Volume adapté">
					<img src={qrCode} alt="qr-code icon" />
				</Card>
				<Card title="Couverture" description="Local à mondial">
					<img src={earth} alt="eart icon" />
				</Card>
				<Card title="Albums" description="Standard ou custom">
					<img src={liste} alt="list icon" />
				</Card>
				<Card title="Infrastructure" description="Cloud ou On-Premise">
					<img src={cloud} alt="cloud icon" />
				</Card>
			</ul>
		</section>
	);
}

function Card({ title, description, className, children }) {
	return (
		<li className={`border p-6 border-[#E2E8F0] bg-white rounded-xl ${className}`}>
			<div className="icon mb-4 w-fit p-2.5 rounded-lg bg-[#F0FDF4]">{children}</div>
			<h4 className="font-semibold text-base mb-2">{title}</h4>
			<p className="description text-sm text-[#475569]">{description}</p>
		</li>
	);
}
