import React, { useState, type ChangeEvent } from "react";

import type { BoxItemProps } from "./types";

import style from "./styles/index.module.css";

const BoxItem = ({ color, label, onClick }: BoxItemProps) => {

	return (
		<div
			className={style.boxItem}
			style={{ backgroundColor: color }}
			onClick={onClick}
		>
			{label}
		</div>
	);
};

type FormProps = {
	onGenerateItem: (input: number) => void;
};

const Form = ({ onGenerateItem }: FormProps) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onGenerateItem(Number(inputValue));
	};

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			Number of boxes:
			<input type="text" value={inputValue} onChange={handleChangeInput} />
			<button type="submit">Generate</button>
		</form>
	);
};

const GenerateBox = () => {
	const [box, setBox] = useState<number>(0);

	const handleGenerateItem = (inputValue: number) => {
		setBox(inputValue);
		console.log("data", inputValue);
	};

	return (
		<>
			<h1>Sample App - GenerateBox</h1>
			<Form onGenerateItem={handleGenerateItem} />

			{/* <BoxItem /> */}
		</>
	);
};

export default GenerateBox;
