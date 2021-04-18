class Set {
  constructor(args) {
    this.entries = [];
    this.size = 0;

    this.add = (item) => {
      let absent = true;
      for (let i = 0; i < this.size; i++) {
        if (this.entries[i] === item) absent = false
      }
      if (absent) {
        this.entries[this.size] = item
        this.size++
      }
    }

    this.remove = (item) => {
      let newSet = [];
      let newIndex = 0;
      let oldIndex = 0;
      while (oldIndex < this.size) {
        if (this.entries[oldIndex] !== item) {
          newSet[newIndex] = this.entries[oldIndex]
          newIndex++
          oldIndex++
        } else {
          oldIndex++
        }
      }
      this.entries = newSet;
      this.size--
    }
    
    this.contains = (item) => {
      let verdict = false
      for (let i = 0; i < this.size; i++) {
        if (this.entries[i] === item) {
          verdict = true
        }
      }
      return verdict
    }

    this.init = () => {
      let items = [...args]
      for (let item of items){
        this.add(item)
      }
    }

    this.init()
  }
}



let assert = require('assert');

//--------------------testing initial class object---------------------------
assert.deepStrictEqual(new Set('string').entries
  , ['s', 't', 'r', 'i', 'n', 'g'], 'init not rendering strings properly');

assert.deepStrictEqual(new Set(['one', 'two', 'three']).entries
  , ['one', 'two', 'three'], 'init not rendering arrays of strings properly');

assert.deepStrictEqual(new Set([true, false, NaN, undefined]).entries
  , [true, false, NaN, undefined], 'init not rendering arrays of booleans, NaN and undefined properly');

assert.deepStrictEqual(new Set([1, 2, 3]).entries
  , [1, 2, 3], 'init not rendering arrays of numbers properly');

assert.deepStrictEqual(new Set([[1], [2], [3]]).entries
  , [[1], [2], [3]], 'init not rendering arrays of numbers properly');

assert.deepStrictEqual(new Set([{one: 1}, {two: 2}, {three: 3}]).entries
  , [{one: 1}, {two: 2}, {three: 3}], 'init not rendering arrays of objects properly');

assert.deepStrictEqual(new Set([3, 2, 1]).entries
, [3, 2, 1], 'init not preserving insertion order');


//------------------testing set functionality-------------------------
var test = new Set(['one', 'two', 'three'])

test.add('four')
assert.deepStrictEqual(test.entries, ['one', 'two', 'three', 'four'], 'add method not functioning properly')

test.remove('four')
assert.deepStrictEqual(test.entries, ['one', 'two', 'three'], 'remove method not functioning properly')

assert.deepStrictEqual(test.contains('one'), true, 'contains method not functioning properly')
assert.deepStrictEqual(test.contains('five'), false, 'contains method not functioning properly')
