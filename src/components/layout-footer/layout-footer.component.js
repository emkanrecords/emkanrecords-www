import React from 'react'
import styles from './layout-footer.module.scss'

export default function LayoutFooterComponent () {

    return (
        <footer className={styles.container}>
            Made by&nbsp;
            <a
                href="https://bamdadsabbagh.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Bamdad Sabbagh
            </a>
        </footer>

    )

}