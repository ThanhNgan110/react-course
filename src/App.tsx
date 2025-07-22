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
import ContextHook from "./pages/fundamental/ContextHook";

import TrafficLight from './sampleApp/TrafficLight'

import { colors } from './sampleApp/mockData'
import Post from './sampleApp/JobsBoard'
import JobBoardTony from './sampleApp/JobsBoardTony'
import TodoForm from "./components/context/TodoForm";
import TodoList from "./components/context/TodoList";
import TodoCount from "./components/context/TodoCount";
import { TodoProvider } from "./contexts/TodoContext";
import RefHook from "./pages/fundamental/RefHook";

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
			<button type="button" onClick={() => setMount(prev => !prev)}>
				Mount Effect Hook
			</button>
			{mount && <EffectHook />}

			<br />
			<TrafficLight colors={colors} />
			<br />
			{/* <Post /> */}

			<br />
			<JobBoardTony />

			<br />
			<ContextHook />
			<TodoProvider>
				<TodoForm />
				<TodoList />
				<TodoCount />
			</TodoProvider>

			<br />
			<RefHook />


			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	)
}

export default App