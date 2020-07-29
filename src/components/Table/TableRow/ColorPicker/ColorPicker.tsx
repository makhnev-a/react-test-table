import React, {useState} from 'react';
import {ChromePicker, ColorResult} from 'react-color';
import styles from './ColorPicker.module.css';

type PropsType = {
    rowName: string
    changeRow: (id: number, dataName: string, dataValue: string) => void
    id: number
    dataAttr: string
};

export const ColorPicker = ({rowName, id, dataAttr, changeRow}: PropsType) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleChangeComplete = (color: ColorResult) => {
        changeRow(id, dataAttr, color.hex);
    };

    return (
        <td>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span onClick={() => setShowColorPicker(!showColorPicker)}>{rowName}</span>
                {showColorPicker && <button style={{backgroundColor: 'red', color: '#fff'}}
                                            onClick={() => setShowColorPicker(false)}>x</button>}
            </div>

            {showColorPicker && <ChromePicker
                className={styles.picker}
                color={rowName}
                onChangeComplete={handleChangeComplete}
            />}
        </td>
    );
};