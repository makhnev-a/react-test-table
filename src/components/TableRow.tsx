import React from "react";

type PropsType = {
    id: number
    name: string
    type: string
    color: string
    deleteRow: (id: number) => void
};

export const TableRow = ({id, name, type, color, deleteRow}: PropsType) => {
    const onDeleteRow = () => {
        deleteRow(id);
    };

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>{color}</td>
                <td>
                    <button onClick={onDeleteRow}>X</button>
                </td>
            </tr>
        </>
    );
};