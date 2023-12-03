import React, { useState } from 'react';
import styles from '../styles/textads.module.css';
import Submit from './Submit';
import { useNavigate } from 'react-router-dom';
const TextAds = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()
  const handleOnchange = (event) => {

  }

  const handleSubmit = (event) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false);
      navigate("/createads")
    }, 600)
  }
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.heading}>Create Text & Media</h3>
      <div>
        <div className={styles.inputsContainer}>
          <div className={styles.inputsLeftSide}>
            <div>
              <p className={styles.inputLables}>Heading 01</p>
              <input className={styles.input} type="text" placeholder='' onChange={(e) => handleOnchange(e.target.value)} />
            </div>
            <div>
              <p className={styles.inputLables}>Heading 02</p>
              <input className={styles.input} type="text" placeholder='' onChange={(e) => handleOnchange(e.target.value)} />
            </div>
            <div>
              <p className={styles.inputLables}>Business Name</p>
              <input className={styles.input} type="text" placeholder='Add your business name' onChange={(e) => handleOnchange(e.target.value)} />
            </div>
          </div>
          <div className={styles.inputsRightSide}>
            <div>
              <p className={styles.inputLables}>Description</p>
              <textarea
                className={styles.textArea}
                type="text"
                placeholder=''
                onChange={(e) => handleOnchange(e.target.value)}
              />
            </div>
            <div>
              <p className={styles.inputLables}>Button lable</p>
              <input className={styles.input} type="text" placeholder='Select a lable that best suits you ad' onChange={(e) => handleOnchange(e.target.value)} />
            </div>
          </div>
        </div>
        <div>
          <p className={styles.inputLables}>Website</p>
          <input className={styles.input}
            type="text"
            placeholder='Add the URL of the landing page you want to redirect users to'
            onChange={(e) => handleOnchange(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.buttonDiv}>
        <button className={styles.CancelBtn} onClick={() => navigate(-1)}>Back</button>
        <button className={styles.SubmitBtn} onClick={handleSubmit}>Submit</button>
      </div>
      {submitted && <Submit />}
    </div>
  )
}

export default TextAds;