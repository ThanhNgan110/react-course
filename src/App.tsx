import DemoChildren from "./pages/fundamental/DemoChildren";
import JSX from "./pages/fundamental/JSX";
import Props from "./pages/fundamental/Props";
import State from "./pages/fundamental/State";
import Component from "./pages/fundamental/Component";
import ConditionalRendering from "./pages/fundamental/ConditionalRendering";
import ListKey from "./pages/fundamental/ListKey";
import GenerateBox from "./sampleApp/GenerateBox";
function App() {
	return (
		<>
			<JSX />

			<br />
			<Props />

			<br />
			<DemoChildren />

			<br />
			<State />

			<br />
			<Component />

			<br />
			<ConditionalRendering />

			<br />
			<ListKey />

			<br />
			<GenerateBox />

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
}

export default App;
