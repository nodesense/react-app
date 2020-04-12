const CHOOSE_COLOR = 'CHOOSE_COLOR';
const CHANGE_UI = 'CHANGE_UI';

import { put, take } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { END } from 'redux-saga';

const chooseColor = (color) => ({
  type: CHOOSE_COLOR,
  payload: {
    color,
  },
});

const changeUI = (color) => ({
  type: CHANGE_UI,
  payload: {
    color,
  },
});

function* changeColorSaga() {
    const action = yield take(CHOOSE_COLOR);
    yield put(changeUI(action.payload.color));
  }

describe("Saga test", () => {
    it ("saga test 1", () => {
        const gen = changeColorSaga();
        expect(gen.next().value).toEqual( take(CHOOSE_COLOR));
    })
})


const CHOOSE_NUMBER = 'CHOOSE_NUMBER';
const DO_STUFF = 'DO_STUFF';

const chooseNumber = (number) => ({
  type: CHOOSE_NUMBER,
  payload: {
    number,
  },
});

const doStuff = () => ({
  type: DO_STUFF,
});


function* doStuffThenChangeColor() {
    yield put(doStuff());
    yield put(doStuff());
    const action = yield take(CHOOSE_NUMBER);
    if (action.payload.number % 2 === 0) {
      yield put(changeUI('red'));
    } else {
      yield put(changeUI('blue'));
    }
  }


describe('doStuffThenChangeColor', () => {
    const gen = cloneableGenerator(doStuffThenChangeColor)();
    gen.next(); // DO_STUFF
    gen.next(); // DO_STUFF
    gen.next(); // CHOOSE_NUMBER
  
    it('user choose an even number', (done) => {
      // cloning the generator before sending data
      const clone = gen.clone();
      expect(clone.next(chooseNumber(2)).value).toEqual(put(changeUI('red')));
    
      expect(clone.next().done).toBe(true);
   
  
      done();
    });
  
    it('user choose an odd number', (end) => {
      const clone = gen.clone();
      expect(clone.next(chooseNumber(3)).value).toEqual(put(changeUI('blue'))); 
      expect(clone.next().done).toBe(true)
  
      end()
    });
    
  });
