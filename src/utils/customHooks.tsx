import { useEffect, useState } from 'react';

export const useStorage = (key: string, initialValue: any, storage = sessionStorage, raw: any) => {
    const [state, setState] = useState(() => {
        try {
            const storageValue = storage.getItem(key);

            if (typeof storageValue !== 'string') {
                storage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }

            return raw ? storageValue : JSON.parse(storageValue || 'null');
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            const serializedState = raw ? String(state) : JSON.stringify(state);
            storage.setItem(key, serializedState);
        } catch (err) {
            console.log(err);
        }
    });

    return [state, setState];
};