
let idMax = 100;


export const addContact = (name, number) => {
    return {
        type: 'ADD_NEW_CONTACT',
        id: idMax++,
            name,
            number
    }    
};

export const deleteContact = (id) => {
    return {
        type: 'DELETE_CONTACT',
            id
    };
};

export const filterContact = (filter) => {
    return {
        type: 'HANDLE_FILTER_CHANGE',
            filter 
    }
}
