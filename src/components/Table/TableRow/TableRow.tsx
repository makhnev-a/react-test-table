import React from "react";
import {TableCell} from "../TableCell/TableCell";
import styles from './TableRow.module.css';
import {Button} from "../../Button/Button";

type PropsType = {
    id: number
    name: string
    type: string
    color: string
    deleteRow: (id: number) => void
    changeRow: (id: number, dataName: string, dataValue: string) => void
    tableRowDown: (index: number) => void
    tableRowUp: (index: number) => void
    index: number
};

export const TableRow = ({id, index, name, type, color, deleteRow, changeRow, tableRowDown, tableRowUp}: PropsType) => {
    const onDeleteRow = () => deleteRow(id);
    const onUpBtnClick = () => tableRowUp(index);
    const onDownBtnClick = () => tableRowDown(index);

    return (
        <>
            <tr>
                <td data-column={'id'}>{id}</td>
                <TableCell id={id} rowName={name} changeRow={changeRow} dataAttr={'name'}/>
                <TableCell id={id} rowName={type} changeRow={changeRow} dataAttr={'type'}/>
                <TableCell id={id} rowName={color} isColor changeRow={changeRow} dataAttr={'color'}/>
                <td data-column={'delete'}>
                    <div className={styles.actionCell}>
                        <div className={styles.filter}>
                            <span style={{marginRight: '10px'}} onClick={onUpBtnClick}>&uarr;</span>
                            <span onClick={onDownBtnClick}>&darr;</span>
                        </div>
                        <div>
                            <Button
                                onHandler={onDeleteRow}
                                btnName={'del'}
                                btnText={'Del row'}
                            />
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
};