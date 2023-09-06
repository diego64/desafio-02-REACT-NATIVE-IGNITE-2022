import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { getMealPlans } from './getMealPlans'

export async function removeMeal(id: string) {
  try {

    const mealPlans: MealPlan[] = await getMealPlans()

    const newMeal = mealPlans
      .map(mealPlan => {
        const mealPlanHasMealId = mealPlan.meals.find(meal => meal.id === id)
        
        if (mealPlanHasMealId) {
          return {
            ...mealPlan,
            meals: mealPlan.meals.filter(meal => meal.id !== id)
          }
        }

        return mealPlan
      })
      .filter(mealPlan => mealPlan.meals.length > 0)

    const storage = JSON.stringify(newMeal)

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage)

  } catch (error) {
    throw error
  }
}
