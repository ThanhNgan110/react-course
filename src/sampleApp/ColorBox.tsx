import { useState } from "react";

import styles from "./styles/index.module.css";

// Colors array
const arrColors = ["red", "yellow", "aqua", "purple"];

const ColorBox = () => {
	const [colorDefault, setColorDefault] = useState<string[]>(arrColors);
	const [activeColor, setActiveColor] = useState<string | null>(null);

	const handleClickColor = (color: string) => () => {
		//c1:
		if (activeColor === color) {
			setColorDefault(arrColors);
			setActiveColor(null);
			return;
		}

		setActiveColor(color);
		const newColors = colorDefault.map(() => color);
		setColorDefault(newColors);

		// c2:
		// const isActive = activeColor === color;
		// setActiveColor(isActive ? null : color);
		// setColorDefault(isActive ? arrColors : colorDefault.map(() => color));
	};

	return (
		<>
			<h1>Current color:{activeColor || "default"} </h1>
			<div className={styles.boxColor}>
				{colorDefault.map((color, index) => (
					<BoxItem
						key={`${index}`}
						label={arrColors[index]}
						color={color}
						onClick={handleClickColor(arrColors[index])}
					/>
				))}
			</div>
		</>
	);
};

type BoxItemProps = {
	label: string;
	color: string;
	onClick: () => void;
};

const BoxItem = ({ label, color, onClick }: BoxItemProps) => {
	return (
		<div style={{ backgroundColor: color }} onClick={onClick}>
			{label}
		</div>
	);
};

export default ColorBox;
