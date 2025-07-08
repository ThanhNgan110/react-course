export type BoxItemProps = {
	label: string | number
	color: string
	onClick: () => void
}

export type BoxProps = {
	label: number
	color: string
}

export type FormProps = {
	onGenerateItem: (input: number) => void
}

export type Light = {
	duration: number
	nextColor: string
	backgroundColor: string
}

export type ColorName = 'red' | 'green' | 'yellow'

export type Colors = Record<ColorName, Light>

export interface ApiResponse<T> {
	data?: T | null
	success: boolean
	msg?: string
}
