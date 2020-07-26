import React, {ChangeEvent, useEffect, useRef, useState} from "react";

type PropsType = {
    id: number
    rowName: string
    changeRow: (id: number, rowName: string) => void
    isColor?: boolean
    dataAttr: string
};

export const TableCell = (props: PropsType) => {
    const [nameActive, setNameActive] = useState(false);
    const [cellName, setCellName] = useState(props.rowName);
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
        props.changeRow(props.id, props.rowName);
    };

    const onChangeRow = (e: ChangeEvent<HTMLInputElement>) => setCellName(e.currentTarget.value);

    return (
        <td
            onClick={onNameActiveClick}
            onBlur={onNameInActiveClick}
            data-column={props.dataAttr}
        >
            {
                nameActive
                    ?
                    <input
                        autoFocus
                        value={cellName}
                        onChange={onChangeRow}
                        type={props.isColor ? 'color' : 'text'}
                        ref={inputRef}
                    />
                    : <span style={{backgroundColor: cellName}}>{cellName}</span>
            }
        </td>
    );
};