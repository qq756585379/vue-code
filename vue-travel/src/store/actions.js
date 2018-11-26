import * as types from './types'

export const setCity = function ({commit}, city) {
  commit(types.SET_CITY, city)
}
