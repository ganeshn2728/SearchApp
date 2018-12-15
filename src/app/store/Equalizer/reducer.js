import { fromJS } from 'immutable'
import {
  GET_EQUALIZER,
  GET_BANDS,
  SET_FREQUENCY,
} from './actionType'

export const initialState = fromJS({
  equalizer : {
    "Rock": [
      {
        "frequency": "60",
        "position": 2
      },
      {
        "frequency": "310",
        "position": 4
      },
      {
        "frequency": "1k",
        "position": -3
      },
      {
        "frequency": "6k",
        "position": 4
      },
      {
        "frequency": "16k",
        "position": -9
      }
    ],
    "Pop": [
      {
        "frequency": "60",
        "position": 4
      },
      {
        "frequency": "310",
        "position": 5
      },
      {
        "frequency": "1k",
        "position": 7
      },
      {
        "frequency": "6k",
        "position": 9
      },
      {
        "frequency": "16k",
        "position": 10
      }
    ],
    "Jazz": [
      {
        "frequency": "60",
        "position": -4
      },
      {
        "frequency": "310",
        "position": -6
      },
      {
        "frequency": "1k",
        "position": 5
      },
      {
        "frequency": "6k",
        "position": -4
      },
      {
        "frequency": "16k",
        "position": 2
      }
    ],
    "Classical": [
      {
        "frequency": "60",
        "position": 7
      },
      {
        "frequency": "310",
        "position": 9
      },
      {
        "frequency": "1k",
        "position": -5
      },
      {
        "frequency": "6k",
        "position": 9
      },
      {
        "frequency": "16k",
        "position": -2
      }
    ],
    "default": [
      {
        "frequency": "60",
        "position": 0
      },
      {
        "frequency": "310",
        "position": 0
      },
      {
        "frequency": "1k",
        "position": 0
      },
      {
        "frequency": "6k",
        "position": 0
      },
      {
        "frequency": "16k",
        "position": 0
      }
    ]
  },
  frequency: [],
  bands: []
})


export default function equalizerReducer (state = initialState, action) {
  switch (action.type) {
    case GET_EQUALIZER:
      const frequencyObj = state.toJS().equalizer.default
      return state
        .set('frequency', fromJS(frequencyObj))

    case GET_BANDS:
      const bandData = ['Rock','Pop','Jazz','Classical', 'default']
      return state
        .set('bands', fromJS(bandData))

    case SET_FREQUENCY:
      const frequencyBand = state.toJS().equalizer[action.value]
      return state
        .set('frequency', fromJS(frequencyBand))

    default:
      return state
  }
}
