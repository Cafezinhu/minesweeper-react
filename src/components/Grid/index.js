import React, { Component } from 'react';
import styled from 'styled-components';
import Tile from '../Tile';
import Game from '../../game/Game';

const width = 650;
const height = 650;

const GridRoot = styled.div`
    width: ${width}px;
    height: ${height}px;
    background: #74f797;
`;

const Row = styled.div`
    width: 100%;
    height: calc(${height}px/ ${props => props.rows});
    display: flex;
    justify-content: space-evenly;
`;

var tiles = [];

export default class Grid extends Component{

    componentDidMount(){
        Game.generate(this.props.rows, this.props.columns, this.props.bombs);
    }

    registerTile = (tile) => {
        tiles.push(tile);
    }

    revealAllBombs = () => {
        tiles.forEach(tile => {
            tile.revealBomb();
        });
    }

    render(){
        let rows = [];
        let counter = 0;
        for(let i = 0; i < this.props.rows; i++){
            let currentTiles = [];
            for(let j = 0; j < this.props.columns; j++){
                const tile = <Tile key={counter} row={i} column={j} grid={this}>
                        {counter}
                    </Tile>;
                
                currentTiles.push(tile);
                counter++;
            }
            rows.push(<Row rows={this.props.rows} key={i}>{currentTiles}</Row>);
        }

        return(
            <GridRoot>
                {rows}
            </GridRoot>
        );
    }
}