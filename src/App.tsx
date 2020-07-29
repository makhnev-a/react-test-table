import React from 'react';
import './App.css';
import {Table} from "./components/Table/Table";
import {useStorage} from "./utils/customHooks";
import {TableRowsType} from "./utils/types";
import {Button} from "./components/Button/Button";

const data = [
    {id: 2, name: 'name2', type: 'main2', color: '#cccccc'},
    {id: 1, name: 'name1', type: 'main', color: '#f4f4f4'},
    {id: 3, name: 'name3', type: 'main3', color: '#000000'},
];

const App = () => {
    const [table, setTable] = useStorage('table', data);

    const addRowHandler = () => setTable([...table, {
        id: table.length ? Math.max(...table.map((row: TableRowsType) => row.id)) + 1 : 1,
        name: 'nameNewTest',
        type: 'mainNewTest',
        color: '#000000'
    }]);

    const deleteRowHandler = (rowId: number) => {
        setTable(table.filter((row: TableRowsType) => row.id !== rowId));
    };

    const changeRowHandler = (id: number, dataName: string, dataValue: string) => {
        setTable(table.map((tr: TableRowsType) => {
            if (tr.id === id) {
                return {...tr, [dataName]: dataValue}
            }

            return tr;
        }));
    };

    const swap = (arr = [], start = 0, end = 0) => {
        let result = new Map();

        arr.map((_, index) => {
            switch (index) {
                case start:
                    return result.set(index, arr[end]);
                case end:
                    return result.set(index, arr[start]);
                default:
                    return result.set(index, arr[index]);
            }
        });

        return Array.from(result.values());
    };

    const tableRowDown = (index: number) => {
        let newIndex = index + 1;

        if (index === table.length - 1) {
            table.unshift(table.pop());
            setTable([...table]);
        } else {
            setTable(swap(table, index, newIndex));
        }
    };

    const tableRowUp = (index: number) => {
        let newIndex = index - 1;

        if (newIndex < 0) {
            table.push(table.shift());
            setTable([...table]);
        } else {
            setTable(swap(table, index, newIndex));
        }
    };

    return (
        <div className="App">
            <Table
                table={table}
                deleteRow={deleteRowHandler}
                changeRow={changeRowHandler}
                tableRowUp={tableRowUp}
                tableRowDown={tableRowDown}
            />
            <Button
                onHandler={addRowHandler}
                btnName={'add'}
                btnText={'Add'}
            />
        </div>
    );
}

export default App;