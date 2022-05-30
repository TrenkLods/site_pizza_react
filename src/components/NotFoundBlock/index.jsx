import React from 'react'
import styles from './NotFoundBlock.module.scss'

export const index = () => {
  return (
      <div className={styles.root}>
          <h1 >
        <span>
            =/
        </span>
        <br/>
        NotFound
        
    </h1>
    <p className={styles.description}>
        Данная страница не найдена  
    </p>
      </div>
    
  )
}
export default index;