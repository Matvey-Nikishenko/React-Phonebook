
 const initialState = {
     items: [],
     filter: ''

 }



export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'HANDLE_FILTER_CHANGE': 
        return {
            ...state,
            filter: action.filter
        } 
  
      case 'ADD_NEW_CONTACT': 
        return {
            ...state, 
            items: [...state.items, 
            {
                id: action.id,
                name: action.name,
                number: action.number
            }
        ]
      }
  
      case 'DELETE_CONTACT':
        const idx = state.items.findIndex(contact => contact.id === action.id);
        const before = state.items.slice(0, idx);
        const after = state.items.slice(idx+1);
        return {
          ...state,
          items: [...before, ...after]
        }
        
  
      
      default: 
      return state   
    }
  };

  export default toDoReducer;