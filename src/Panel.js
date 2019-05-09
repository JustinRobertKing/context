import React from 'react'
import { ColorContext } from './ColorContext'

export default function Panel() {
	return (
		<ColorContext.Consumer>
			{
				({ color }) => {
					let style ={
						height: '200px',
						width: '200px',
						background: color,
						display: 'flex',
						justifyContent: 'space-around',
						flexFlow: 'row wrap'
					}

					return (
						<div style={style}></div>
					)
				}
			}
		</ColorContext.Consumer>
	)
}