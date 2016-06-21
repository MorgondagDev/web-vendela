import React, { Component } from 'react'
import { render } from 'react-dom'

window.addEventListener('DOMContentLoaded', ()=> {
	render((
		<app>Hello worlds!</app>
	), document.querySelector('section'))
}, false)
