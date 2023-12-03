import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/createads.module.css'

const CreateAds = () => {
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const navigate = useNavigate()
  const handleCheckBoxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setCheckBox1(!checkBox1);
      setCheckBox2(false);
    } else {
      setCheckBox2(!checkBox2);
      setCheckBox1(false);
    }
  };

  const handleSubmit = () => {
    checkBox1 ? navigate("/textads") : checkBox2 ? navigate("/mediaads") : alert("select check box")

  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.adsContainer} onClick={() => handleCheckBoxChange(1)}>
          <input className={styles.checkbox} type="checkbox" checked={checkBox1} />
          <img className={styles.images} src="/textads.png" alt="TextAds Image" />
          <div className={styles.headings}>
            <p>Create</p>
            <h3>Text Ads</h3>
          </div>
        </div>
        <div className={styles.adsContainer} onClick={() => handleCheckBoxChange(2)}>
          <input className={styles.checkbox} type="checkbox" checked={checkBox2} />
          <img className={styles.images} src="/mediaads.png" alt="MediaAds Images" />
          <div className={styles.headings}>
            <p>Create</p>
            <h3>Media Ads</h3>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  )
}

export default CreateAds;