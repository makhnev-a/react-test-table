import React from "react";
import {TableCell} from "./TableCell";

type PropsType = {
    id: number
    name: string
    type: string
    color: string
    deleteRow: (id: number) => void
    changeRow: (id: number, name: string) => void
};

export const TableRow = ({id, name, type, color, deleteRow, changeRow}: PropsType) => {
    const onDeleteRow = () => deleteRow(id);

    return (
        <>
            <tr>
                <td>{id}</td>
                <TableCell id={id} rowName={name} changeRow={changeRow}/>
                <TableCell id={id} rowName={type} changeRow={changeRow}/>
                <TableCell id={id} rowName={color} isColor changeRow={changeRow}/>
                <td>
                    <button onClick={onDeleteRow}>X</button>
                </td>
            </tr>
        </>
    );
};