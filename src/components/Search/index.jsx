import React from 'react'
import styles from './Search.module.scss'
export const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className={styles.root}>
            <svg className={styles.search}
                height="512px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512">
                <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" /></svg>

            <input
                value={searchValue}
                contentType="charset=UTF-8"
                onChange={(event) => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder='Поиск пиццы...'
            />

            {searchValue&&(
                <svg onClick={()=>setSearchValue('')}
                className={styles.clear}
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 24 24"
                width="48px"
                height="48px">
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
            </svg>
            )}
            
        </div>

    )
}
export default Search;
