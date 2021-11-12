import React, {useState} from 'react';
import s from './NewCommit.module.scss'
import Form from "../Form";
import {RandomName} from "../../pages";

export function NewCommit({commit, removeCommit}) {

  const [state, setState] = useState(false);
  const [onCommits, setOnCommits] = useState([]);

  console.log(commit)
  const addCommit = (inputValue) => {
    if (inputValue) {
      const newItem = {
        id: Math.random().toString(10),
        text: inputValue,
        name: RandomName(),
        color: '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      }
      setOnCommits([...onCommits, newItem])
    }
  }

  const removeCommitOn = (id) => {
    setOnCommits([...onCommits.filter((commit) => commit.id !== id)])
  }


  return (
    <div key={commit.id} className={s.commit}>
      <div className={s.name}><span style={{
        backgroundColor: `${commit.color}`
      }} className={s.avatar}/>{commit.name}</div>
      <div className={s.text}>{commit.text}</div>
      <div onClick={() => removeCommit(commit.id)} className={s.remove}>X</div>
      <div className={s.row}>
        <button className={s.button} onClick={() => setState(!state)}>Ответить</button>
      </div>
      {state && <Form addCommit={addCommit} close={setState}/>}
      {onCommits.map((commit) => {
        return (
          <NewCommit key={commit.id} commit={commit} removeCommit={removeCommitOn}/>
        )
      })}
    </div>
  );
}
