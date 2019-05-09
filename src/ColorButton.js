import React from 'react'
import './ColorButton.css'
import { ColorContext } from './ColorContext'

export default function ColorButton() {
	return (
		<ColorContext.Consumer>
			{
				({ changeColor }) => {
					return (
						<button className="Button" onClick={changeColor}>Change the color</button>
					)
				}
			}
		</ColorContext.Consumer>
	)
}