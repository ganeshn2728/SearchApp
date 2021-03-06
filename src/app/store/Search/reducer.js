import { fromJS } from 'immutable'
import {
  GET_LIST,
} from './actionType'

export const initialState = fromJS({
  searchResults: []
})


export default function searchReducer (state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      const mockData = [
        {
          "_id": "5c14b0112e67968c749ffe2d",
          "name": "Rios Tillman",
          "gender": "male"
        },
        {
          "_id": "5c14b0118d0c9f0c7bbc9994",
          "name": "Melendez Lang",
          "gender": "male"
        },
        {
          "_id": "5c14b0110ae48e4c58ad2dd8",
          "name": "Blanca Burns",
          "gender": "female"
        },
        {
          "_id": "5c14b011bba68d6416828ca7",
          "name": "Robbie Ware",
          "gender": "female"
        },
        {
          "_id": "5c14b0117049f7cd4b65095c",
          "name": "Maggie Atkinson",
          "gender": "female"
        },
        {
          "_id": "5c14b011d929410af7502880",
          "name": "Tabatha Roy",
          "gender": "female"
        },
        {
          "_id": "5c14b0119087517c5f602467",
          "name": "Everett Nielsen",
          "gender": "male"
        },
        {
          "_id": "5c14b0111fcc78ff673a8289",
          "name": "Valencia Harvey",
          "gender": "male"
        },
        {
          "_id": "5c14b011490e1462aafe8842",
          "name": "Ada Mcfadden",
          "gender": "female"
        },
        {
          "_id": "5c14b01186feba96b8f3c87c",
          "name": "Elsa Britt",
          "gender": "female"
        },
        {
          "_id": "5c14b011e0521c078c3a18c8",
          "name": "Peters Carpenter",
          "gender": "male"
        },
        {
          "_id": "5c14b011b2f5d5d51c5a3fb1",
          "name": "Pearson Bryant",
          "gender": "male"
        },
        {
          "_id": "5c14b01162ad106137ff1a6f",
          "name": "Dena Compton",
          "gender": "female"
        },
        {
          "_id": "5c14b01142f5425dc5fe8353",
          "name": "Roslyn Montoya",
          "gender": "female"
        },
        {
          "_id": "5c14b01185ed54f054676c1a",
          "name": "Earline Mayo",
          "gender": "female"
        },
        {
          "_id": "5c14b0116547933f30806887",
          "name": "Knapp Delaney",
          "gender": "male"
        },
        {
          "_id": "5c14b0111776a9cacfb5f331",
          "name": "Rich Norris",
          "gender": "male"
        },
        {
          "_id": "5c14b011f772a97c30bf93e5",
          "name": "Veronica Gallagher",
          "gender": "female"
        },
        {
          "_id": "5c14b011a6782287441b25a9",
          "name": "Hoover Mcmillan",
          "gender": "male"
        },
        {
          "_id": "5c14b0117ab7cece1580ec75",
          "name": "Clare Webster",
          "gender": "female"
        },
        {
          "_id": "5c14b011b8ba7053cb3c49bc",
          "name": "Matilda Hays",
          "gender": "female"
        },
        {
          "_id": "5c14b011b85b092040271f1e",
          "name": "Carver Little",
          "gender": "male"
        },
        {
          "_id": "5c14b011569ca48d85283ad0",
          "name": "Sanford Ruiz",
          "gender": "male"
        },
        {
          "_id": "5c14b0115497c2e3dd0ae530",
          "name": "Bertie Deleon",
          "gender": "female"
        },
        {
          "_id": "5c14b0111320a04ac0b76d95",
          "name": "Walker Collins",
          "gender": "male"
        }
      ]
      return state
        .set('searchResults', fromJS(mockData))

    default:
      return state
  }
}
