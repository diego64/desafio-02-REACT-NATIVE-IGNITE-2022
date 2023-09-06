import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function getMealPlans() {
  try {

    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`)

    let mealPlans: MealPlan[] = storage ? JSON.parse(storage) : []

    mealPlans = mealPlans.sort((a, b) => {      
      const dateA = new Date(+a.date.split('/')[2], +a.date.split('/')[1], +a.date.split('/')[0])
      const dateB = new Date(+b.date.split('/')[2], +b.date.split('/')[1], +b.date.split('/')[0])

      return dateB.getTime() - dateA.getTime()
    })

    return mealPlans

  } catch (error) {
    throw error
  }
}
