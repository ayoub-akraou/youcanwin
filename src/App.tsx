import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SolutionSection from "./components/SolutionSection";
import CustomerJourneySection from "./components/CustomerJourneySection";
import SalesToExperienceSection from "./components/SalesToExperienceSection";
import BackofficeSection from "./components/BackofficeSection";

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
		</>
	);
}

export default App;
