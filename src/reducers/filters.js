const filterDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export const filterReducer = (state = filterDefault, action) => {
    switch(action.type) {
      case 'SET_TEXT':
        return {...state, text: action.text};
      case 'SORT_AMOUNT':
        return {...state, sortBy: 'amount'};
      case 'SORT_DATE':
        return {...state, sortBy: 'date'};
      case 'SET_START_DATE':
        return {...state, startDate: action.startDate};
      case 'SET_END_DATE':
        return {...state, endDate: action.endDate};
      default:
        return state;
    }
}