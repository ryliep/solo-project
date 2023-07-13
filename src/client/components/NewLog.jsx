import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimalActionCreator } from '../actions/actions.js'

//   hook for handling state change of input fields
  function useInput(init) {
    const [value, setValue] = useState(init);
    const onChange = function(event) {
        setValue(event.target.value);
    }
    return [value, onChange];

  }

const NewLog = () => {
//   training log state
  const [behavior, behaviorOnChange] = useInit('');
  const [reinforcement, reinforcementOnChange] = useInit(0);
  const [plan, planOnChange] = useInit('');
  const [details, detailsOnChange] = useInit('');
  const [behaviorError, setBehaviorError] = setState(null);

//   medical log state
  const [hydration, hydrationOnChange] = useInit(0);
  const [eyes, eyesOnChange] = useInit(0);
  const [skin, skinOnChange] = useInit(0);
  const [breath, breathOnChange] = useInit(0);
  const [activity, activityOnChange] = useInit(0);



//! make post request on clicking submit for either table
  async function handleClick(inputName) {
    //! edge case: check if behavior is one of the 3 required strings and if not setBehaviorError('required')
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

  // useEffect to clear behaviorError when `behavior` is changed
  useEffect(()=>{
    setBehaviorError(null);
  }, [behavior]);



  return (
    <div>
      <div className='blankLog'>

        <h2>Training Log</h2>
        <div>
            <div className="createTFields">
            <label htmlFor="behavior">Behavior: </label>
            <input name="behavior" placeholder="tasking, medical, trick" value={behavior} onChange={behaviorOnChange} /> 
            {behaviorError ? (<span className='errorMsg'>{behaviorError}</span>) : null}
        </div>
        <div className="createTFields">
            <label htmlFor="reinforcement">% Primary Reinforcement: </label>
            <input name="reinforcement" placeholder="10%" value={reinforcement} onChange={reinforcementOnChange} /> 
            {/* TODO: add error to account for edge cases */}
        </div>
        <div className="createTFields">
            <label htmlFor="plan">Plan: </label>
            <input name="plan" placeholder="duration, desense, etc." value={plan} onChange={planOnChange} /> 
            {/* TODO: add error to account for edge cases */}
        </div>
        <div className="createTFields">
            <label htmlFor="details">Details: </label>
            <input name="details" placeholder="session specific information" value={details} onChange={detailsOnChange} /> 
            {/* TODO: add error to account for edge cases */}
        </div>
        </div>

        <div className='submitLog'>
            <button type='button' onClick={() => {
                console.log('submit button')
                // handleClick('pass in inputted data for all feilds?')
            }}>New Log</button>
        </div>       
        
      </div>

      <div className='blankLog'>

        <h2>Medical Log</h2>
        <div>
          <div className="createTFields">
            <label htmlFor="hydration">Hydration: </label>
            <input name="hydration" placeholder="Liters" value={hydration} onChange={hydrationOnChange} /> 
            {/* TODO: add error to account for edge cases */}
          </div>
          <div className="createTFields">
            <label htmlFor="eyes">Eyes: </label>
            <input name="eyes" placeholder="scale from 0 to 5" value={eyes} onChange={eyesOnChange} /> 
            {/* TODO: add error to account for edge cases */}
          </div>
          <div className="createTFields">
            <label htmlFor="skin">Skin: </label>
            <input name="skin" placeholder="scale from 0 to 5" value={skin} onChange={skinOnChange} /> 
            {/* TODO: add error to account for edge cases */}
          </div>
          <div className="createTFields">
            <label htmlFor="breath">Breath: </label>
            <input name="breath" placeholder="scale from 0 to 5" value={breath} onChange={breathOnChange} /> 
            {/* TODO: add error to account for edge cases */}
          </div>
          <div className="createTFields">
            <label htmlFor="activity">Activity: </label>
            <input name="activity" placeholder="scale from 0 to 5" value={activity} onChange={activityOnChange} /> 
            {/* TODO: add error to account for edge cases */}
          </div>
        </div>
                    
        
      </div>
        





                

        
    </div>
  )
};

export default Log