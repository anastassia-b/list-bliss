

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};
