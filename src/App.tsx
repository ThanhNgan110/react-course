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
import JobBoardTony from './sampleApp/JobsBoardTony'
import TodoForm from "./components/context/TodoForm";
import TodoList from "./components/context/TodoList";
import TodoCount from "./components/context/TodoCount";
import { TodoProvider } from "./contexts/TodoContext";
import RefHook from "./pages/fundamental/RefHook";
import PerformanceHook from "./pages/fundamental/PerformanceHook";
import CustomHook from "./pages/fundamental/CustomHook";
import ReactErrorBoundary from "./pages/fundamental/ReactErrorBoundary";
import { Link, NavLink, Route, Routes } from "react-router";

function App() {
	const [mount, setMount] = React.useState(true);
	return (
		<>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a
						href="https://flowbite.com/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Flowbite
						</span>
					</a>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link
									to="/jsx"
									className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 dark:text-white"
									aria-current="page"
								>
									JSX
								</Link>
							</li>
							<li>
								<Link
									to="/props"
									className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 dark:text-white"
									aria-current="page"
								>
									Props
								</Link>
							</li>
							<li>
								<Link
									to="/state"
									replace
									className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 dark:text-white"
									aria-current="page"
								>
									State
								</Link>
							</li>
							<li>
								<NavLink
									to="/demo-children"
									className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 dark:text-white"
									aria-current="page"
								>
									Demo Children
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<br />

			<Routes>
				<Route path="/jsx" element={<JSX />} />
				<Route path="/props" element={<Props />} />
				<Route path="/state" element={<State />} />
				<Route path="/demo-children" element={<DemoChildren />} />
			</Routes>
		
			<br />
			<br />
			<hr />

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
			<PerformanceHook />

			<br />
			<CustomHook />

			<br />
			<ReactErrorBoundary />


			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	)
}

export default App
