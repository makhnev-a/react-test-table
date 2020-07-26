import {useEffect, useState} from 'react';

export const useStorage = (key: string, initialValue: any, storage = localStorage) => {
    const [state, setState] = useState(() => {
        try {
            const storageValue = storage.getItem(key);

            if (typeof storageValue !== 'string') {
                storage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }

            return JSON.parse(storageValue || 'null');
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            const serializedState = JSON.stringify(state);
            storage.setItem(key, serializedState);
        } catch (err) {
            console.log(err);
        }
    });

    return [state, setState];
};