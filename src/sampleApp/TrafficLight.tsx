import React from 'react'

import style from './styles/index.module.css'

import type { Light, Colors, ColorName } from './types'

interface LightProps {
	backgroundColor: string
}

const Light = ({ backgroundColor }: LightProps) => {
	return <div className={style.light} style={{ backgroundColor }}></div>
}

interface TrafficLightProps {
	colors: Colors
}

const TrafficLight = ({ colors }: TrafficLightProps) => {
	const [currentColor, setCurrentColor] = React.useState<ColorName>('red')

	React.useEffect(() => {
		const { nextColor, duration } = colors[currentColor]

		const timeoutId = setTimeout(() => {
			setCurrentColor(nextColor as ColorName)
		}, duration)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [currentColor, colors])

	return (
		<div className={style.trafficLightContainer}>
			{Object.keys(colors).map(color => (
				<Light key={color} backgroundColor={color === currentColor ? colors[color].backgroundColor : '#555'} />
			))}
		</div>
	)
}

export default TrafficLight
