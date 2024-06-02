const useState = (initialState: any = "") => {
  let state = initialState;

  const getState = () => {
    return state;
  };

  const setState = (newState: any) => (state = newState);
  return {
    getState,
    setState,
  };
};

const Redux = {
  useState,
};

export default Redux;
