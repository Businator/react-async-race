const brands = ['Lada', 'KIA', 'Honda', 'Audi', 'Hyundai', 'Nissan', 'Ford', 'Volkswagen', 'BMW', 'Toyota']

const models = ['Priora', 'Ceed', 'Civic', 'A6', 'Solaris', 'Juke', 'Focus', 'Polo', 'X5', 'Camry']

const getRandomCarName = () => {
  const brand = brands[Math.floor(Math.random() * brands.length)] as string
  const model = models[Math.floor(Math.random() * models.length)] as string

  return `${brand} ${model}`
}

const hexLetters = '0123456789ABCDEF'

const getRandomCarColor = () => {
  let carColor = '#'

  for (let i = 0; i < 6; i++) {
    carColor += hexLetters[Math.floor(Math.random() * 16)] as string
  }

  return carColor
}

export const generateRandomCars = (carCount = 100) =>
  new Array(carCount).fill(1).map(() => ({ name: getRandomCarName(), color: getRandomCarColor() }))
