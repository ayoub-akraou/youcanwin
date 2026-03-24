import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SolutionSection from "./components/SolutionSection";
import CustomerJourneySection from "./components/CustomerJourneySection";
import SalesToExperienceSection from "./components/SalesToExperienceSection";
import BackofficeSection from "./components/BackofficeSection";
import PlansSection from "./components/PlansSection";

function App() {
	return (
		<>
			<NavBar />
			<div className="container px-4">
				<Header />
				<SolutionSection />
				<CustomerJourneySection />
			</div>
			<SalesToExperienceSection />
			<BackofficeSection />
			<PlansSection />
		</>
	);
}

export default App;
