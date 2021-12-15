import { ADD_ITEM_TO_CART } from './action-types'
import {addItem} from './actions'

describe ("redux-cart action test suite", () => {
    it("should create addItem action" , () => {
        expect(addItem({id: 1, name: 'p1', price: 100, qty: 1}))
              .toEqual({
                  type: ADD_ITEM_TO_CART,
                  payload: {
                      item: {id: 1, name: 'p1', price: 100, qty: 1}
                  }
              })
    })
})