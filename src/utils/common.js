export const arrayNotEmpty = arr => {
  if (!Array.isArray(arr)) {
    return false
  }
  return arr.length > 0
}

export const updArryEleById = (arr, newEle) => {
  return arr.map(element => {
    if (element.id === newEle.id) {
      return newEle
    }
    return element
  })
}

export const getArryEleById = (arr, id) => {
  return arr.find(element => element.id === id)
}

export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj))
}

export const removeEleFromArr = (arr, element) => {
  const index = arr.indexOf(element)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}
