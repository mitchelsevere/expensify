export const setText = (text = '') => ({
    type: 'SET_TEXT',
    text
  });
  
export const sortAmount = () => ({
    type: 'SORT_AMOUNT'
  });
  
export const sortDate = () => ({
    type: 'SORT_DATE'
  });
  
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
  });