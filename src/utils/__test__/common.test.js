import {
  arrayNotEmpty,
  updArryEleById,
  getArryEleById,
  deepClone,
  removeEleFromArr
} from '../common'
import { array1, array2 } from './mockData'

describe('array is empty function', function() {
  it('should return false when array is undefined', () => {
    // given - 准备数据
    const arr = undefined
    // when - 调用被测函数
    const result = arrayNotEmpty(arr)
    // then - 断言结果
    expect(result).toBe(false)
  })

  it('should return false when array is null', () => {
    // given - 准备数据
    const arr = null
    // when - 调用被测函数
    const result = arrayNotEmpty(arr)
    // then - 断言结果
    expect(result).toBe(false)
  })

  it('should return false when given value is not array', () => {
    // given - 准备数据
    const arr = 8
    // when - 调用被测函数
    const result = arrayNotEmpty(arr)
    // then - 断言结果
    expect(result).toBe(false)
  })

  it('should return false when array is empty', () => {
    // given - 准备数据
    const arr = []
    // when - 调用被测函数
    const result = arrayNotEmpty(arr)
    // then - 断言结果
    expect(result).toBe(false)
  })

  it('should return true when array is not empty', () => {
    // given - 准备数据
    const arr = [1]
    // when - 调用被测函数
    const result = arrayNotEmpty(arr)
    // then - 断言结果
    expect(result).toBe(true)
  })
})

describe('update array element by id', function() {
  it('should return array with updated element when given array and element to update', () => {
    // given - 准备数据
    const arr = deepClone(array1)

    const newElement = {
      id: 2,
      name: 'test3'
    }
    // when - 调用被测函数
    const result = updArryEleById(arr, newElement)
    // then - 断言结果
    expect(result[1].name).toBe('test3')
  })

  it('should return the same array when given array and element not match', () => {
    // given - 准备数据
    const arr = deepClone(array1)
    const newElement = {
      id: 3,
      name: 'test3'
    }
    // when - 调用被测函数
    const result = updArryEleById(arr, newElement)
    // then - 断言结果
    expect(result[1].name).toBe('test2')
  })
})

describe('get array element by id', function() {
  it('should return element when given array and id which matches', () => {
    // given - 准备数据
    const arr = deepClone(array1)
    const id = 2
    // when - 调用被测函数
    const result = getArryEleById(arr, id)
    // then - 断言结果
    expect(result.id).toBe(2)
  })

  it('should return the same array when given array and element not match', () => {
    // given - 准备数据
    const arr = deepClone(array1)
    const id = 3
    // when - 调用被测函数
    const result = getArryEleById(arr, id)
    // then - 断言结果
    expect(result).toBe(undefined)
  })
})

describe('remove array element', function() {
  it('should return new array when given element to remove which matches', () => {
    // given - 准备数据
    const arr = deepClone(array2)
    const element = 'test2'
    // when - 调用被测函数
    const result = removeEleFromArr(arr, element)
    // then - 断言结果
    expect(result.sort()).toEqual(['test1'].sort())
  })

  it('should return same array when given element to remove not matches', () => {
    // given - 准备数据
    const arr = deepClone(array2)
    const element = 'test3'
    // when - 调用被测函数
    const result = removeEleFromArr(arr, element)
    // then - 断言结果
    expect(result).toEqual(expect.arrayContaining(['test1', 'test2']))
  })
})
