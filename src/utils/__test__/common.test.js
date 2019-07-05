import { arrayNotEmpty } from '../common'

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
