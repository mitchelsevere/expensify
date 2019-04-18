const expenseDefault = [];

export const expenseReducer = (state = expenseDefault, action) => {
    switch(action.type) {
      case 'ADD_EXPENSE':
        return [...state, action.expense];
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
        return state.map((expense) => expense.id === action.id ? {...expense, ...action.update} : expense);
      default:
        return state;
    }
  };