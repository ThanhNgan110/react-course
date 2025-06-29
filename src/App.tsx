import GenerateBox from "./sampleApp/GenerateBox";
import DemoChildren from "./pages/fundamental/DemoChildren"
import JSX from "./pages/fundamental/JSX"
import Props from "./pages/fundamental/Props"
import State from "./pages/fundamental/State"
import Component from "./pages/fundamental/Component"
import ConditionalRendering from "./pages/fundamental/ConditionalRendering"
import ListKey from "./pages/fundamental/ListKey"
import PropsDrillingLiftingStateUp from "./pages/fundamental/PropsDrillingLiftingStateUp"
import Form from "./pages/fundamental/Form"
import StateHook from "./pages/fundamental/StateHook";
import EffectHook from "./pages/fundamental/EffectHook";
import React from "react";


function App() {
	const [mount, setMount] = React.useState(true);
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
      <PropsDrillingLiftingStateUp />

      <br />
      <Form />

			<br />
			<StateHook />

			<br />
			<button type="button" onClick={() => setMount(prev => !prev)}>Mount Effect Hook</button>
			{mount && <EffectHook />}

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
