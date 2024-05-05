import styles from './app.module.css';
import data from './data.json'
import { useState } from 'react';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
const [steps] = useState(data)
const [activeIndex, setActiveIndex] = useState(0)
	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

const isFinalStep = activeIndex === steps.length - 1;


function clickBack() {

  if (activeIndex > 0) {
    setActiveIndex(prevIndex => prevIndex - 1);
  }
}

function clickForward() {
 
  if (activeIndex < steps.length - 1) {
    setActiveIndex(prevIndex => prevIndex + 1);
  }
}

function clickStartOver() {
  setActiveIndex(0);
}

    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Инструкция по готовке пельменей</h1>
          <div className={styles.steps}>
            <div className={styles['steps-content']}>
              {steps[activeIndex].content}
            </div>
            <ul className={styles['steps-list']}>              
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                const isDone = index <= activeIndex;
                const stepItem = [styles['steps-item'], isActive ? styles.active : '',
                  isDone ? styles.done : ''        
                    ].join(' ').trim();
                  return (
                    <li key={index} className={stepItem}>         
                    <button className={styles['steps-item-button']}>{index + 1}</button>
                      {step.title} 
                    </li>
                  )
                })}
            </ul>

            <div className={styles['buttons-container']}>
              <button className={styles.button} onClick={clickBack} disabled={activeIndex === 0}>
                Назад
              </button>
              { !isFinalStep ? (
                <button className={styles.button} onClick={clickForward}>
                  Далее
                </button> 
                ) : (
                <button className={styles.button} onClick={clickStartOver}>
                  Начать сначала
                </button>
                )}
              </div>
            </div>
          </div>
        </div>
    )

  };
