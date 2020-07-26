import React from 'react';
import './App.css';
import {Table} from "./components/Table";
import {useStorage} from "./utils/customHooks";
import {TableRowsType} from "./utils/types";

const data = [
    {id: 2, name: 'name2', type: 'main2', color: '#cccccc'},
    {id: 1, name: 'name1', type: 'main', color: '#f4f4f4'},
    {id: 3, name: 'name3', type: 'main3', color: '#000000'},
];

const App = () => {
    const [table, setTable] = useStorage('table', data);

    const addRowHandler = () => setTable([...table, {
        id: table.length + 1,
        name: 'name3',
        type: 'main3',
        color: '#000000'
    }]);

    const deleteRowHandler = (rowId: number) => {
        setTable(table.filter((row: TableRowsType) => row.id !== rowId));
    };

    const changeRowHandler = (id: number, dataName: string, dataValue: string) => {
        setTable(table.map((tr: TableRowsType) => {
            if (tr.id === id) {
                debugger
                return {...tr, [dataName]: dataValue}
            }

            return tr;
        }));
    };

    return (
        <div className="App">
            <Table
                table={table}
                deleteRow={deleteRowHandler}
                changeRow={changeRowHandler}
            />
            <button onClick={addRowHandler}>Add</button>
        </div>
    );
}

export default App;