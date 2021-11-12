import React, {useState} from 'react';
import s from './Form.module.scss'

export default function Form({addCommit, close}) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    addCommit(inputValue)
    setInputValue('')
    if(close !== undefined)close(false)
  }

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }


  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <textarea cols="30" rows="1" className={s.textarea} value={inputValue} onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Введите комментарий...'>
      </textarea>

      <button className={s.button}>Отправить</button>
    </form>
  );
}


