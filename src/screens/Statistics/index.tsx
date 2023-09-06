import { Alert, TouchableOpacity, View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { Content,
  ContentTitle,
  Data,
  DataInfo,
  DataText,
  DataTitle,
  Info,
  InfoChildred,
  Percent,
  PercentText,
  PercentTitle
} from './styles'
import { useCallback, useState } from 'react'

import { getMealPlans } from '@storage/meals/getMealPlans'

export function Statistics() {
  const theme = useTheme()
  const navigation = useNavigation()

  const [mealPlans, setMealPlans] = useState<MealPlan[]>([])

  const amountOfMeals = mealPlans.reduce((acc, cur) => {
    return acc + cur.meals.length
  }, 0)

  const amountOfMealsInDiet = mealPlans.reduce((acc, cur) => {
    return acc + cur.meals.filter(meal => meal.isInDiet).length
  }, 0)

  const percentOfMealsInDiet = amountOfMeals === 0 
    ? '--,--%' 
    : ((amountOfMealsInDiet * 100) / (amountOfMeals)).toFixed(2).split('.').join(',') + '%'

  const bestDietSequence = mealPlans
    .map(mealPlan => mealPlan.meals)
    .flat()
    .reduce((acc, cur, i, arr) => {
      if (!cur.isInDiet) return acc

      let counter = 0

      for (let j = i; j < arr.length; j++) {
        if (arr[j].isInDiet) counter++
        else break
      }

      if (counter > acc) return counter

      return acc

    }, 0)

  function handleNavigateToHome() {
    navigation.navigate('home')
  }

  async function loadMealPlans() {
    try {
      
      const mealPlansList = await getMealPlans()

      setMealPlans(mealPlansList)
      
    } catch (error) {
      Alert.alert('Erro ao carregar os planos de refeições')
    }
  }

  useFocusEffect(useCallback(() => {
    loadMealPlans()
  }, []))

  return (
    <View>
      <Percent>
        <PercentTitle>{percentOfMealsInDiet}</PercentTitle>
        <PercentText>das refeições dentro da dieta</PercentText>
        <TouchableOpacity
          style={{ position: 'absolute', left: 24, top: 56 }}
          onPress={handleNavigateToHome}
        >
          <ArrowLeft
            size={24}
            color={theme.COLORS.GREEN_DARK}
          />
        </TouchableOpacity> 
      </Percent>

      <Content>
        <ContentTitle>estatísticas gerais</ContentTitle>
        <Data>
          <DataInfo>
            <DataTitle>{bestDietSequence}</DataTitle>
            <DataText>melhor sequência de pratos dentro da dieta</DataText>
          </DataInfo>

          <DataInfo>
            <DataTitle>{amountOfMeals}</DataTitle>
            <DataText>refeições registradas</DataText>
          </DataInfo>

          <Info>
            <InfoChildred style={{ backgroundColor: theme.COLORS.GREEN_MID }}>
              <DataTitle>{amountOfMealsInDiet}</DataTitle>
              <DataText>
                refeições dentro da dieta
              </DataText>
            </InfoChildred>
            <InfoChildred style={{ backgroundColor: theme.COLORS.RED_MID }}>
              <DataTitle>{amountOfMeals - amountOfMealsInDiet}</DataTitle>
              <DataText>
                refeições fora da dieta
              </DataText>
            </InfoChildred>
          </Info>
        </Data>
      </Content>
    </View>
  )
}