import React, { useState } from "react";

import type { BoxItemProps } from "./types";

import style from "./styles/index.module.css";

const BoxItem = ({ color = "#FAEBD7", label, onClick }: BoxItemProps) => {
	return (
		<div
			className={style.boxItem}
			style={{ backgroundColor: color }}
			onClick={onClick}
		>
			Box #{label}
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
		if (Number(inputValue) > 0 && Number(inputValue) <= 128) {
			setInputValue(inputValue);
		}

		onGenerateItem(Number(inputValue));
	};

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
	const [message, setMessage] = useState<string>("");

	const handleGenerateItem = (inputValue: number) => {
		setBox(inputValue);
		if (box === 0) {
			setMessage("No box");
		}

		console.log("data", inputValue);
	};

	return (
		<>
			<h1>Sample App - GenerateBox</h1>
			<Form onGenerateItem={handleGenerateItem} />
			<div className={style.boxWrapper}>
				{box === 0
					? message
					: Array.from({ length: box }, (_, i) => <BoxItem label={i + 1} />)}

			</div>
		</>
	);
};

export default GenerateBox;
