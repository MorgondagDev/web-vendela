import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.updateName = this.updateName.bind(this)
		this.onKeyDown = this.onKeyDown.bind(this)
		this.clearWords = this.clearWords.bind(this)

		this.state = {
			name:'Kim Aarnseth',
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
			this.setState({toggle:false, name:'Kim Aarnseth:'})
		} else {
			this.setState({toggle:true, name:'Kim Aarnseth|'})
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
				<p><a href="http://twitter.com/kim_aarnseth" title="Kim Aarnseth on Twitter">Twitter</a></p>
				<p><a href="http://morgondag.nu" title="Kim Aarnseth's Company">Morgondag</a></p>
				<p><a href="http://instagram.com/morgondag" title="Kim Aarnseth on Instagram">Instagram</a></p>
				<p><a href="http://morgondag-nu.tumblr.com" title="Kim Aarnseth on Tumblr">Tumblr</a></p>
				<p><a href="https://www.youtube.com/channel/UCIGlLCIdHqDhUiao1LmAFoA" title="Kim Aarnseth on Youtube">Youtube</a></p>
				<p><a href="https://play.spotify.com/album/11VUNuoeOLxcHR3uYWqTI5?play=true&utm_source=open.spotify.com&utm_medium=open" title="Kim Aarnseth on Spotify">Spotify</a></p>
				<p><a href="https://medium.com/morgondag" title="Kim Aarnseth on Medium">Medium</a></p>
				<p><a href="https://github.com/morgondag" title="Kim Aarnseth Github">Github</a></p>
				<p><a href="mailto:kim@morgondag.nu" title="Kim Aarnseth mail">Mail</a></p>
				<p><br/></p>
				<p>Games:</p>
				<p><a href="http://rymdresa.com/" title="Kim Aarnseth's game RymdResa">RymdResa</a></p>
				<p><a href="https://imprint-x.com/" title="Kim Aarnseth's game RymdResa imprint-X">imprint-X</a></p>

			</article>
		)
	}
}
