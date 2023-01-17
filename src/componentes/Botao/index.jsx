import React from 'react'
import styles from './Botao.module.scss'

export default function Botao({Children}) {
    return (
        <button className={styles.botao}>{Children}</button>
    )
}