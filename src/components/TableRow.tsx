import React, {useState, ChangeEvent} from "react";

type PropsType = {
    id: number
    name: string
    type: string
    color: string
    deleteRow: (id: number) => void
    changeRow: (id: number, name: string) => void
};

export const TableRow = ({id, name, type, color, deleteRow, changeRow}: PropsType) => {
    const [nameActive, setNameActive] = useState(false);
    const [rowName, setRowName] = useState(name);

    const onNameActiveClick = () => setNameActive(true);
    const onNameInActiveClick = () => {
        setNameActive(false);
        changeRow(id, rowName);
    }

    const onDeleteRow = () => deleteRow(id);
    const onChangeRow = (e: ChangeEvent<HTMLInputElement>) => setRowName(e.currentTarget.value);

    return (
        <>
            <tr>
                <td>{id}</td>
                <td
                    onClick={onNameActiveClick}
                    onBlur={onNameInActiveClick}

                >
                    {
                        nameActive
                            ? <input
                                autoFocus
                                value={rowName}
                                onChange={onChangeRow}
                            />
                            : <span>{name}</span>
                    }
                </td>
                <td>{type}</td>
                <td>{color}</td>
                <td>
                    <button onClick={onDeleteRow}>X</button>
                </td>
            </tr>
        </>
    );
};