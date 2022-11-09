import goalOne from "../assets/LG50_100_05.png";
import goalTwo from "../assets/sizelg100-1.png";



interface product {
  name: string,
  price: number,
  description: string,
  title: string,
  longDescription: string,
  /* image?: PNG, */
  category: string,
  id: number,
}
let productOne: product = {
  name: 'LG50 “Hagemålet”',
  price: 1.99,
  description: 'B x H= 120 x 75 cm ',
  title: 'LG50 “Hagemålet”',
  longDescription: 'Det perfekte fotballmålet for de som elsker å spille fotball! Funtoplay LG50 Original er et norsk designet produkt som passer perfekt for fotballspill i hagen, på løkka, eller på treningsfeltet for de yngste.',
  /* image: {goalOne}, */
  category: 'mål',
  id: 1,
}
let productTwo: product = {
  name: 'Banana',
  price: 1.99,
  description: 'A yellow banana',
  title: 'Banana',
  longDescription: 'A yellow banana',
  /* image: {goalTwo}, */
  category: 'fruit',
  id: 2,
}


export default [productOne, productTwo];