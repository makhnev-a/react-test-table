import React, {ChangeEvent, useEffect, useRef, useState} from "react";

type PropsType = {
    id: number
    rowName: string
    changeRow: (id: number, dataName: string, dataValue: string) => void
    isColor?: boolean
    dataAttr: string
};

export const TableCell = ({id, rowName, changeRow, isColor, dataAttr}: PropsType) => {
    const [nameActive, setNameActive] = useState(false);
    const [cellName, setCellName] = useState(rowName);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (nameActive) {
            console.log(inputRef.current);
            inputRef.current?.click();
        }
    }, [nameActive]);

    const onNameActiveClick = () => setNameActive(true);
    const onNameInActiveClick = () => {
        setNameActive(false);
        changeRow(id, dataAttr, cellName);
    };

    const onChangeRow = (e: ChangeEvent<HTMLInputElement>) => setCellName(e.currentTarget.value);

    return (
        <td
            onClick={onNameActiveClick}
            onBlur={onNameInActiveClick}
            data-column={dataAttr}
        >
            {
                nameActive
                    ?
                    <input
                        autoFocus
                        value={cellName}
                        onChange={onChangeRow}
                        type={isColor ? 'color' : 'text'}
                        ref={inputRef}
                    />
                    : <span>{cellName}</span>
            }
        </td>
    );
};