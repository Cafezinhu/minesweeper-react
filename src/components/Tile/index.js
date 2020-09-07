import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Square = styled.div`
    background: ${props => props.activated ? '#c9fbff': '#74c9f7'};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    border: 1px solid #4b4aa1;
    cursor: default;
    user-select: none;
    &:hover{
        background: ${props => props.activated ? '#c9fbff': '#7495f7'};
    }
`;

export default class Tile extends Component{

    state = {
        text: '',
        activated: false
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('contextmenu', this.rightClick);
    }

    click = () => {
        if(this.state.text !== '🚩')
            this.setState({activated: true, text: ''});
    }

    rightClick = (event) => {
        event.preventDefault();
        if(this.state.text === '🚩'){
            this.setState({text: ''});
            return;
        }
        if(!this.state.activated){
            this.setState({text: '🚩'});
        }
        
    }

    render(){
        return(
            <Square onClick={this.click} activated={this.state.activated}>
                {this.state.text}
            </Square>
        );
    }
}