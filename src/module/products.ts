interface product {
  name: string,
  price: number,
  description: string,
  title: string,
  longDescription: string,
  image: string,
  category: string,
  id: number,
}
let productOne: product = {
  name: 'Apple',
  price: 1.99,
  description: 'A red apple',
  title: 'Apple',
  longDescription: 'A red apple',
  image: 'https://images.unsplash.com/photo-1558987905-8b8b5d1b3f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  category: 'fruit',
  id: 1,
}
let productTwo: product = {
  name: 'Banana',
  price: 1.99,
  description: 'A yellow banana',
  title: 'Banana',
  longDescription: 'A yellow banana',
  image: 'https://images.unsplash.com/photo-1558987905-8b8b5d1b3f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  category: 'fruit',
  id: 2,
}
let productThree: product = {
  name: 'Orange',
  price: 1.99,
  description: 'A orange orange',
  title: 'Orange',
  longDescription: 'A orange orange',
  image: 'https://images.unsplash.com/photo-1558987905-8b8b5d1b3f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  category: 'fruit',
  id: 3,
}

export default [productOne, productTwo, productThree];