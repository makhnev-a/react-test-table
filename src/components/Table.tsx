import React from "react";
import {TableRow} from "./TableRow";
import {TableRowsType} from "../utils/types";
import styles from './Table.module.css';

type PropsType = {
    table: Array<TableRowsType>
    deleteRow: (id: number) => void
    changeRow: (id: number, dataName: string, dataValue: string) => void
    tableRowDown: (index: number) => void
    tableRowUp: (index: number) => void
};

export const Table = ({table, deleteRow, changeRow, tableRowDown, tableRowUp}: PropsType) => {
    const tableRows = table.map((tr, index) =>
        <TableRow
            id={tr.id}
            index={index}
            name={tr.name}
            type={tr.type}
            color={tr.color}
            deleteRow={deleteRow}
            changeRow={changeRow}
            tableRowDown={tableRowDown}
            tableRowUp={tableRowUp}
            key={tr.id}
        />
    );

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>type</th>
                        <th>color</th>
                        <th>actions / delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </>
    );
};