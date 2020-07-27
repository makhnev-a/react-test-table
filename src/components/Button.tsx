import React from "react";
import styles from './Button.module.css';

type PropsType = {
    onHandler: () => void
    btnName: string
    btnText: string
};

export const Button = ({onHandler, btnName, btnText}: PropsType) => {
    const btnColor = btnName === 'add'
        ? `${styles.add}`
        : `${styles.del}`;

    return (
        <button
            onClick={onHandler}
            className={`${styles.btn} ${btnColor}`}
        >{btnText}</button>
    );
};