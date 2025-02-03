function* rootSaga() {
    yield takeLatest('GET_ZOO_ANIMALS', getZooAnimals);
}