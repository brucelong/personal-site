import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class TopMenu extends React.Component {
	render(){
		return(
			<Navbar bg='dark' expand='lg'>
					<Navbar.Brand href="#home">Charles Long</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#resume">Resume</Nav.Link>
							<Nav.Dropdown title="Projects" id="basic-nav-dropdown">
								<NavDropdown.Item href="#appleiic">Apple ][c Conversion</NavDropdown.Item>
								<NavDropdown.Item href="#cobaltraq2">Cobalt RaQ 2 Conversion</NavDropdown.Item>
								<NavDropDown.Divider />
								<NavDropdown.Item href="#v20mobofpga">V20 FPGA Motherboard</NavDropdown.Item>
							</Nav.Dropdown>
						</Nav>
					</Navbar.Collapse>
			</Navbar>
		);
	}

}

class Square extends React.Component {
	render() {
		return  (
			<button 
				className="square" 
				onClick={() => this.props.onClick()}
			>
		  		{this.props.value}
			</button>
	  	);
	}
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}
	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({squares: squares});
	}
	renderSquare(i) {
		return <Square value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}
		/>
	}
	  
	render() {
		const status = 'Next player: X';
	
		return (
		  <div>
			<div className="status">{status}</div>
			<div className="board-row">
			  {this.renderSquare(0)}
			  {this.renderSquare(1)}
			  {this.renderSquare(2)}
			</div>
			<div className="board-row">
			  {this.renderSquare(3)}
			  {this.renderSquare(4)}
			  {this.renderSquare(5)}
			</div>
			<div className="board-row">
			  {this.renderSquare(6)}
			  {this.renderSquare(7)}
			  {this.renderSquare(8)}
			</div>
		  </div>
		);
	}
	
	
}

class Game extends React.Component {
	render() {
	  return (
		<div className="game">
		  <div className="game-board">
			<Board />
		  </div>
		  <div className="game-info">
			<div>{/* status */}</div>
			<ol>{/* TODO */}</ol>
		  </div>
		</div>
	  );
	}
}


ReactDOM.render(
	<TopMenu />,
  	document.getElementById('root')
);

