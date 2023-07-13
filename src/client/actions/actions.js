// action types
const types = {
    GET_ANIMAL: "GET_ANIMAL"
}

// export action creators
export const getAnimalActionCreator = (name) => ({
  type: types[GET_ANIMAL],
  payload: name,
});