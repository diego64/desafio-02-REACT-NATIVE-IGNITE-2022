type Meal = {
  id: string
  name: string
  description: string
  isInDiet: boolean
  hour: string
  date: string
}

type MealPlan = {
  date: string
  meals: Omit<Meal, 'date'>[]
}
