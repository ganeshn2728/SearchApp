import {
  GET_EQUALIZER,
  GET_BANDS,
  SET_FREQUENCY,
} from './actionType'

export function getEqualizer () {
  return { type: GET_EQUALIZER }
}

export function getBands () {
  return { type: GET_BANDS }
}

export function setFrequency (value) {
  return { value, type: SET_FREQUENCY}
}
