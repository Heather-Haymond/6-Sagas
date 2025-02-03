
function* getZooAnimals() {
  console.log('In the Zoo');
  try {
      const response = yield axios.get('/api/zoo');
      console.log('data', response.data);
      yield put({
          type: 'SET_ZOO_ANIMALS',
          payload: response.data
      });
  } catch (error) {
      console.log('in get animals error:', error);
  }
}
