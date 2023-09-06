import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { getMealPlans } from './getMealPlans'
import * as Crypto from 'expo-crypto'

export async function addMeal(meal: Omit<Meal, "id">) {
  try {

    let mealPlans: MealPlan[] = await getMealPlans()

    const id = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      meal.name + meal.description + meal.hour + meal.date
    )

    const newMeal = {
      id,
      name: meal.name,
      description: meal.description,
      isInDiet: meal.isInDiet,
      hour: meal.hour
    }

    const mealPlan = mealPlans.find(mealPlan => mealPlan.date === meal.date)

    if (mealPlan) {
      mealPlan.meals.push(newMeal)

      mealPlan.meals = mealPlan.meals.sort((a, b) => {
        const hourA = a.hour.split(':')
        const hourB = b.hour.split(':')

        const dateA = new Date(0, 0, 0, Number(hourA[0]), Number(hourA[1]))
        const dateB = new Date(0, 0, 0, Number(hourB[0]), Number(hourB[1]))

        return dateB.getTime() - dateA.getTime()
      })
    } else {
      mealPlans.unshift({
        date: meal.date,
        meals: [newMeal]
      })
    }

    mealPlans = mealPlans.sort((a, b) => {      
      const dateA = new Date(+a.date.split('/')[2], +a.date.split('/')[1], +a.date.split('/')[0])
      const dateB = new Date(+b.date.split('/')[2], +b.date.split('/')[1], +b.date.split('/')[0])

      return dateB.getTime() - dateA.getTime()
    })

    const storage = JSON.stringify(mealPlans)

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage)

  } catch (error) {
    throw error
  }
}
