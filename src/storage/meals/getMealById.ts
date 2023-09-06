import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function getMealById(id: string) {
  try {

    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`)

    const mealPlans: MealPlan[] = storage ? JSON.parse(storage) : []

    const meal = mealPlans
      .map((mealPlan: MealPlan) => mealPlan.meals.map(_meal => ({ ..._meal, date: mealPlan.date} as Meal)))
      .flat()
      .find((meal) => meal.id === id)

    return meal

  } catch (error) {
    throw error
  }
}