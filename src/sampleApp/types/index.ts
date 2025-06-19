export type BoxItemProps = {
	label: string | number;
	color: string;
	onClick: () => void;
};

export type BoxProps = {
	label: number;
	color: string;
};

export type FormProps = {
	onGenerateItem: (input: number) => void;
};

