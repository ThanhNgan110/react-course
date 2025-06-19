import React, { useState } from "react";

import type { BoxItemProps, BoxProps, FormProps } from "./types";

import style from "./styles/index.module.css";

const BoxItem = ({ color, label, onClick }: BoxItemProps) => {
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

const Form = ({ onGenerateItem }: FormProps) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (Number(inputValue) > 0 && Number(inputValue) <= 128) {
			setInputValue(inputValue);
		}

		onGenerateItem(Number(inputValue));
		setInputValue("");
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

const randomColor = () => {
	return Math.floor(Math.random() * 16777215).toString(16);
};

const GenerateBox = () => {
	const [box, setBox] = useState<BoxProps[]>([]);
	const [message, setMessage] = useState<string>("");

	const handleGenerateItem = (inputValue: number) => {
		if (inputValue === 0) {
			setBox([]);
			setMessage("No box");
		} else {
			const newBox = Array.from({ length: inputValue }, (_, i) => ({
				label: i + 1,
				color: "#FAEBD7",
			}));
			setBox(newBox);
		}
	};

	const handleChangeColor = (index: number) => {
		setBox((prev) =>
			prev.map((box, i) =>
				i === index
					? {
							...box,
							color: `#${randomColor()}`,
					  }
					: box
			)
		);
	};

	return (
		<>
			<h1>Sample App - GenerateBox</h1>
			<Form onGenerateItem={handleGenerateItem} />
			<div className={style.boxWrapper}>
				{box.length === 0
					? message
					: box.map((item, index) => (
							<BoxItem
								label={item.label}
								color={item.color}
								key={`${item.label}`}
								onClick={() => handleChangeColor(index)}
							/>
					  ))}
			</div>
		</>
	);
};

export default GenerateBox;
