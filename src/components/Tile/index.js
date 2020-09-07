import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Game from '../../game/Game';

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
        activated: false,
        grid: this.props.grid
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('contextmenu', this.rightClick);
        this.state.grid.registerTile(this, this.props.row, this.props.column);
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

    reveal = () => {
        if(!this.state.activated && this.state.text !== '🚩'){
            const {row, column} = this.props;
            const hasBomb = Game.tileHasBomb(row, column);
            const bombsAround = Game.bombsAround(row, column);
            if(hasBomb){
                this.state.grid.revealAllBombs();
            }
            this.setState({
                activated: true,
                text: (hasBomb ? '💣' : (bombsAround !== 0 ? bombsAround : ''))
            }, () => {
                if(bombsAround === 0){
                    this.revealAround();
                }
            });
            
        }
    }

    revealBomb = () => {
        if(Game.tileHasBomb(this.props.row, this.props.column)){
            this.setState({text: '💣'});
        }
    }

    revealAround = () => {
        const {row, column} = this.props;
        for(let i = -1; i < 2; i++){
            for(let j = -1; j < 2; j++){
                this.state.grid.revealTile(row + i, column + j);
            }
        }
    }

    render(){
        return(
            <Square onClick={this.reveal} activated={this.state.activated}>
                {this.state.text}
            </Square>
        );
    }
}