import React, { useState } from 'react';
import styles from '../styles/mediaads.module.css';
import Submit from './Submit';
import { useNavigate } from 'react-router-dom';

const MediaAds = () => {
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
              <input
                className={styles.input}
                type="text"
                placeholder='Add a heading that would make users interested'
                onChange={(e) => handleOnchange(e.target.value)}
              />
            </div>
            <div>
              <p className={styles.inputLables}>Heading 02</p>
              <input className={styles.input} type="text" placeholder='Add a heading that would make users interested' onChange={(e) => handleOnchange(e.target.value)} />
            </div>
          </div>
          <div className={styles.inputsRightSide}>
            <div>
              <p className={styles.inputLables}>Description</p>
              <textarea
                className={styles.textArea}
                type="text"
                placeholder='Add primary text to help users understand more about your products, service offers'
                onChange={(e) => handleOnchange(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.middleInputs}>
          <div>
            <p className={styles.inputLables}>Landscape Marketing Image(1.9:1)</p>
            <input className={styles.input} type="text" placeholder='Add the URL of the Image you want to use for the ad' onChange={(e) => handleOnchange(e.target.value)} />
          </div>
          <div>
            <p className={styles.inputLables}>Portrait Marketing Image(4:5)</p>
            <input className={styles.input} type="text" placeholder='Add the URL of the Image you want to use for the ad' onChange={(e) => handleOnchange(e.target.value)} />
          </div>
          <div>
            <p className={styles.inputLables}>Landscape Marketing Image(1:1)</p>
            <input className={styles.input} type="text" placeholder='Add the URL of the Image you want to use for the ad' onChange={(e) => handleOnchange(e.target.value)} />
          </div>
        </div>
        <div>
          <p className={styles.inputLables}>Video URL</p>
          <input className={styles.input}
            type="text"
            placeholder='Add the URL of the landing page you want to redirect users to'
            onChange={(e) => handleOnchange(e.target.value)}
          />
        </div>
        <div className={styles.lastInputs}>
          <div>
            <p className={styles.inputLables}>Landscape Marketing Image(1.9:1)</p>
            <input className={styles.input} type="text" placeholder='Add your business name' onChange={(e) => handleOnchange(e.target.value)} />
          </div>
          <div>
            <p className={styles.inputLables}>Portrait Marketing Image(4:5)</p>
            <input className={styles.input} type="text" placeholder='Select a lable that best suits you ad' onChange={(e) => handleOnchange(e.target.value)} />
          </div>
        </div>
        <div>
          <p className={styles.inputLables}>Website URL</p>
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

export default MediaAds;