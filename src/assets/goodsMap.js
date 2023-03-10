let drink = [
  { id: 'drink1', goodName: '可乐', price: 3, number: 20 },
  { id: 'drink2', goodName: '雪碧', price: 3, number: 14 },
  { id: 'drink3', goodName: '北冰洋', price: 5, number: 16 },
  { id: 'drink4', goodName: '冰红茶', price: 4, number: 8 },
  { id: 'drink4', goodName: '茶Π', price: 6, number: 22 },
]

let fruit = [
  { id: 'fruit1', goodName: '西瓜', price: 6, number: 10 },
  { id: 'fruit2', goodName: '苹果', price: 3, number: 30 },
]

let goodsMap = new Map()
goodsMap.set('fruit', fruit)
goodsMap.set('drink', drink)

export const getGoodsListByType = (type) => {
  return goodsMap.get(type)
}