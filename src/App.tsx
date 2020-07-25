import React, {useState} from 'react';
import './App.css';
import {Table} from "./components/Table";

const App = () => {
    const data = [
        {id: 1, name: 'name1', type: 'main', color: '#f4f4f4'},
        {id: 2, name: 'name2', type: 'main2', color: '#cccccc'},
        {id: 3, name: 'name3', type: 'main3', color: '#000000'},
    ];

    const [table, setTable] = useState(data);

    const addRowHandler = () => setTable([...table, {id: 4, name: 'name3', type: 'main3', color: '#000000'}]);

    const deleteRowHandler = (rowId: number) => {
        setTable(table.filter(row => row.id !== rowId));
    };

    return (
        <div className="App">
            <Table
                table={table}
                deleteRow={deleteRowHandler}
            />
            <button onClick={addRowHandler}>Add</button>
        </div>
    );
}

export default App;