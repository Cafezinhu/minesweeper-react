import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Square = styled.div`
    background: #74c9f7;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    border: 1px solid #4b4aa1;
    &:hover{
        background: #7495f7;
    }
`;

export default class Tile extends Component{
    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('contextmenu', this.rightClick);
    }

    click = () => {
        alert('click ' + this.props.children);
    }

    rightClick = (event) => {
        event.preventDefault();
        alert('right click');
    }

    render(){
        return(
            <Square onClick={this.click}>
                {this.props.children}
            </Square>
        );
    }
}