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
    font-size: calc(${height}px/ ${props => props.rows}/2);
    display: flex;
    justify-content: space-evenly;
`;

var tiles = [];

export default class Grid extends Component{

    componentDidMount(){
        const {rows, columns, bombs} = this.props;
        Game.generate(rows, columns, bombs);
    }

    registerTile = (tile, row, column) => {
        tiles[row][column] = tile;
    }

    revealAllBombs = () => {
        tiles.forEach(row => {
            row.forEach(tile => {
                tile.revealBomb();
            });
        });
    }

    revealTile = (row, column) => {
        const {rows, columns} = this.props;
        if(row >= 0 && row < rows && column >= 0 && column < columns){
            //console.log(`revelando ${row} ${column}`);
            tiles[row][column].reveal();
        }
    }

    render(){
        const {rows, columns} = this.props;
        let currentRows = [];
        let counter = 0;
        tiles = [];
        for(let i = 0; i < rows; i++){
            let currentTiles = [];
            let newRow = [];
            for(let j = 0; j < columns; j++){
                const tile = <Tile key={counter} row={i} column={j} grid={this}/>;
                
                currentTiles.push(tile);
                counter++;

                newRow.push(null);
            }
            currentRows.push(<Row rows={rows} key={i}>{currentTiles}</Row>);
            tiles.push(newRow);
        }

        return(
            <GridRoot>
                {currentRows}
            </GridRoot>
        );
    }
}