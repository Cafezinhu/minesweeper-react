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

export default function Grid(props){

    Game.generate(props.rows, props.columns, props.bombs);
    let rows = [];
    let counter = 0;
    for(let i = 0; i < props.rows; i++){
        let tiles = [];
        for(let j = 0; j < props.columns; j++){
            tiles.push(
                <Tile bomb={Game.tileHasBomb(i, j)} key={counter} row={i} column={j}>
                    {counter}
                </Tile>
            );
            counter++;
        }
        rows.push(<Row rows={props.rows} key={i}>{tiles}</Row>);
    }

    return(
        <GridRoot>
            {rows}
        </GridRoot>
    );
}