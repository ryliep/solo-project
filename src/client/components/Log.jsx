import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimalActionCreator } from '../actions/actions.js'

const Log = () => {
  const [inputName, setInputName] = useState('');
  
//   useEffect(() => {
//     let gameWon = false;
//     let boardLock = true;
//     // check if the game is won
//     // are there 3 matching in a daignol?
//     // check left to right
//     if (
//       text[0][0] === text[1][1] &&
//       text[1][1] === text[2][2] &&
//       text[0][0] !== "-"
//     ) {
//       gameWon = [
//         [0, 0],
//         [1, 1],
//         [2, 2],
//       ];
//     }
//     // right to left
//     if (
//       text[0][2] === text[1][1] &&
//       text[1][1] === text[2][0] &&
//       text[0][2] != "-"
//     )
//       gameWon = [
//         [0, 2],
//         [1, 1],
//         [2, 0],
//       ];

//     // for loop checking both rows and columns
//     for (let i = 0; i < 3; i++) {
//       // are there 3 matching in a row?
//       if (
//         text[i][0] === text[i][1] &&
//         text[i][1] === text[i][2] &&
//         text[i][0] !== "-"
//       )
//         gameWon = [
//           [i, 0],
//           [i, 1],
//           [i, 2],
//         ];
//       // are there 3 matching in a column?
//       if (
//         text[0][i] === text[1][i] &&
//         text[1][i] === text[2][i] &&
//         text[0][i] !== "-"
//       )
//         gameWon = [
//           [0, i],
//           [1, i],
//           [2, i],
//         ];
//       // check if there are still more places to play
//       for (let j = 0; j < 3; j++) {
//         if (text[i][j] === "-") boardLock = false;
//       }
//     }

//     // if the game is won or the board is locked, set a game over state
//     // if gameWon -> player 'prevPlay' won
//     // if boardLock -> tie
//     // if either -> game over
//     if (gameWon) {
//       prevTurn.current = 0;
//       // loop through gameWon; set winningColors[gameWon[i]][gameWon[j]] = green
//       const winningColors = colorState.slice();
//       for (let i = 0; i < 3; i++) {
//         winningColors[gameWon[i][0]][gameWon[i][1]] = "DarkSeaGreen";
//       }

//       setColorState(winningColors);
//     }
//     if (boardLock) {
//       prevTurn.current = 0;
//       setColorState([
//         ["FireBrick", "FireBrick", "FireBrick"],
//         ["FireBrick", "FireBrick", "FireBrick"],
//         ["FireBrick", "FireBrick", "FireBrick"],
//       ]);
//     }
//   }, [text]);

//   // keep track of previous turn via index of prevTurn
//   const possibleTurns = ["O", "X"];
//   let prevTurn = useRef(0);
//   // let prevTurn = { current: 0 };

  async function handleClick(inputName) {
    // console.log('inputName: ', inputName);
    // console.log(typeof inputName);
    fetch('/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(inputName)
    })
    .then(resp => resp.json())
    .then((data) => {
      console.log('made post request to get animal data: ', data);
    })
    .catch(err => console.log('getAnimal fetch /log: ERROR: ', err));
  }

  return (
            <div>
                <h1>Animals</h1>
                
                <input type='text' value={inputName} placeholder="Add animal's name here" onChange={function(e) {
                    setInputName(e.target.value.toUpperCase());

                }}
                ></input>
                <div>
                    <button type='button' onClick={() => {
                        handleClick(inputName)
                    }}>New Log</button>
                    <Link to={'/newanimal'}>
                        {/* TODO: add functionality to Add Animal button */}
                        <button type='button'>Add Animal</button>
                    </Link>
                </div>
            </div>
        )
};


// ! failed attempt at class components
/*
class Log extends Component {
    state = {
            inputValue: ''
    }

    // getAnimal = async function() {
    //         fetch('/log', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'Application/JSON'
    //           },
    //           body: JSON.stringify(this.state.inputValue)
    //         })
    //         .then(resp => resp.json())
    //         .then((data) => {
    //           console.log('made post request to get animal data: ', data);
    //         })
    //         .catch(err => console.log('getAnimal fetch /log: ERROR: ', err));
    //     }
    // constructor(props) {
    //     // super(props),
    //     // this.state = {
    //     //     inputValue: ''
    //     // }
    //     // this.reset()
    // }

    // reset() {
    //     this.state = {
    //         inputValue: ''
    //     }
    // }

    render() {
        // const dispatch = useDispatch();
        // const getName = useSelector

        // const handleGetAnimal = (e) => {
        //     dispatch(getAnimalActionCreator(e.target.value))
        // }
        // let state = this.state;

        const getAnimal = async function(s) {
            fetch('/log', {
              method: 'POST',
              headers: {
                'Content-Type': 'Application/JSON'
              },
              body: JSON.stringify(s)
            })
            .then(resp => resp.json())
            .then((data) => {
              console.log('made post request to get animal data: ', data);
            })
            .catch(err => console.log('getAnimal fetch /log: ERROR: ', err));
        }
        

        return (
            <div>
                <h1>Animals</h1>
                
                <input type='text' value={this.state.inputValue} placeholder="Add animal's name here" onChange={function(e) {
                    this.updateInputValue(e)
                }}
                ></input>
                <div>
                    <button type='button' onClick={function() {
                        state = this.state.inputValue;
                        getAnimal(state);
                    }}>New Log</button>
                    <Link to={'/newanimal'}>
                        {/* TODO: add functionality to Add Animal button */
                        /*
                        <button type='button'>Add Animal</button>
                    </Link>
                </div>
            </div>
        )
    }

    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    
}
*/

export default Log