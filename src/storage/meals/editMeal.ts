import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { getMealPlans } from './getMealPlans'

export async function editMeal(meal: Meal) {
  try {

    const mealPlans: MealPlan[] = await getMealPlans()
    
    let mealPlansRemovedMeal = mealPlans
      .map(mealPlan => {
        mealPlan.meals = mealPlan.meals.filter(mealItem => mealItem.id !== meal.id)
        return mealPlan
      })
      .filter(mealPlan => mealPlan.meals.length > 0)

    const mealPlan = mealPlansRemovedMeal.find(mealPlan => mealPlan.date === meal.date)

    if (mealPlan) {
      mealPlan.meals.push(meal)

      mealPlan.meals = mealPlan.meals
        .sort((a, b) => {
          const hourA = a.hour.split(':')
          const hourB = b.hour.split(':')

          const dateA = new Date(0, 0, 0, Number(hourA[0]), Number(hourA[1]))
          const dateB = new Date(0, 0, 0, Number(hourB[0]), Number(hourB[1]))

          return dateB.getTime() - dateA.getTime()
        })
    } else {
      mealPlansRemovedMeal.unshift({
        date: meal.date,
        meals: [meal]
      })
    }

    mealPlansRemovedMeal = mealPlansRemovedMeal.sort((a, b) => {      
      const dateA = new Date(+a.date.split('/')[2], +a.date.split('/')[1], +a.date.split('/')[0])
      const dateB = new Date(+b.date.split('/')[2], +b.date.split('/')[1], +b.date.split('/')[0])

      return dateB.getTime() - dateA.getTime()
    })

    const storage = JSON.stringify(mealPlansRemovedMeal)
    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage)

  } catch (error) {
    throw error
  }
}
