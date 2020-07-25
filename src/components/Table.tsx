import React from "react";
import {TableRow} from "./TableRow";
import {TableRowsType} from "../utils/types";

type PropsType = {
    table: Array<TableRowsType>
    deleteRow: (id: number) => void
    changeRow: (id: number, name: string) => void
};

export const Table = ({table, deleteRow, changeRow}: PropsType) => {
    const tableRows = table.map(tr =>
        <TableRow
            id={tr.id}
            name={tr.name}
            type={tr.type}
            color={tr.color}
            deleteRow={deleteRow}
            changeRow={changeRow}
            key={tr.id}
        />
    );

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>type</th>
                        <th>color</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </>
    );
};