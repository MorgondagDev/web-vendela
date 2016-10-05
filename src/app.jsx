import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.updateName = this.updateName.bind(this)
		this.onKeyDown = this.onKeyDown.bind(this)
		this.clearWords = this.clearWords.bind(this)

		this.state = {
			name:'Vendela Carlberg Larsson',
			toggle: false,
			timer:false,
			input:''
		}
	}

	componentDidMount(){
		setInterval(this.updateName,450)
		document.onkeydown = this.onKeyDown
	}

	onKeyDown(e){
		if(e.ctrlKey || e.shiftKey){
			return;
		}
		if (e.key === 'Enter') {
			if(this.state.timer){
				window.clearTimeout(this.state.timer);
			}
			this.clearWords();
			return;
		}
		if(e.keyCode === 8){
			this.setState({input: this.state.input.slice(0,this.state.input.length-1)})
			e.preventDefault();
		} else {
			this.setState({input: (this.state.input + e.key).slice(0,25) })
		}

		if(this.state.timer){
			window.clearTimeout(this.state.timer);
		}
		this.setState({timer:setTimeout(this.clearWords, 1000)})
	}

	clearWords(){
		this.setState({input:'', timer:false})
	}


	updateName(){
		if(this.state.toggle){
			this.setState({toggle:false, name:'Vendela Carlberg Larsson:'})
		} else {
			this.setState({toggle:true, name:'Vendela Carlberg Larsson|'})
		}
	}

	render(){
		let data = ''
		if(this.state.input){
			data = this.state.input
		}
		return(
			<article>
				<h1>{this.state.name} <span>{data}</span></h1>
				<p><a href="http://twitter.com/vemdel" title="Vendela Carlberg Larsson on Twitter">Twitter</a></p>
				<p><a href="http://morgondag.nu" title="Vendela Carlberg Larsson's Company">Morgondag</a></p>
				<p><a href="http://instagram.com/morgondag" title="Vendela Carlberg Larsson on Instagram">Instagram</a></p>
				<p><a href="http://morgondag-nu.tumblr.com" title="Vendela Carlberg Larsson on Tumblr">Tumblr</a></p>
				<p><a href="https://www.youtube.com/channel/UCIGlLCIdHqDhUiao1LmAFoA" title="Vendela Carlberg Larsson on Youtube">Youtube</a></p>
				<p><a href="https://medium.com/morgondag" title="Vendela Carlberg Larsson on Medium">Medium</a></p>
				<p><a href="https://github.com/vemdel" title="Vendela Carlberg Larsson Github">Github</a></p>
				<p><a href="mailto:vendela@morgondag.nu" title="Vendela Carlberg Larsson mail">Mail</a></p>
				<p><br/></p>
				<p>Games:</p>
				<p><a href="http://rymdresa.com/" title="Vendela Carlberg Larsson's game RymdResa">RymdResa</a></p>
				<p><a href="https://imprint-x.com/" title="Vendela Carlberg Larsson's game RymdResa imprint-X">imprint-X</a></p>
			</article>
		)
	}
}
