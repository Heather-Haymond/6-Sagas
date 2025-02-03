
const zooAnimals = (state = [], action) => {
  switch (action.type) {
      case 'SET_ZOO_ANIMALS':
          return action.payload;
      default:
          return state;
  }
};