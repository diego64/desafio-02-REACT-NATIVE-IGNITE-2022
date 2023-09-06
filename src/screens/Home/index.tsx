import {
  Container,
  Divider,
  Header,
  List,
  Logo,
  NewMeal,
  Percent,
  Profile,
  SectionListContent,
  SectionListHeader,
  SectionListItem,
  Status,
  TextHour,
  TextMessage,
  Title
} from './styles'
import { Button } from '@components/Button'

import { ArrowUpRight, Plus } from 'phosphor-react-native'

import LogoImg from '@assets/logo.png'
import { Alert, Text } from 'react-native'
import { useTheme } from 'styled-components/native'

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { getMealPlans } from '@storage/meals/getMealPlans'

export function Home() {
  const theme = useTheme()
  const navigation = useNavigation()

  const [mealPlans, setMealPlans] = useState<MealPlan[]>([])

  function handleNavigateToStatistics() {
    navigation.navigate('statistics')
  }

  function handleNavigateToMeal(id: string) {
    navigation.navigate('meal', { id })
  }

  function handleNavigationToNewMeal() {
    navigation.navigate('newMeal')
  }

  async function loadMealPlans() {
    try {
      
      const mealPlansList = await getMealPlans()

      setMealPlans(mealPlansList)
      
    } catch (error) {
      Alert.alert('Erro ao carregar os planos de refeições')
    }
  }

  const amountOfMeals = mealPlans.reduce((acc, cur) => {
    return acc + cur.meals.length
  }, 0)

  const amountOfMealsInDiet = mealPlans.reduce((acc, cur) => {
    return acc + cur.meals.filter(meal => meal.isInDiet).length
  }, 0)

  const percentOfMealsInDiet = amountOfMeals === 0 
    ? '--,--%' 
    : ((amountOfMealsInDiet * 100) / (amountOfMeals)).toFixed(2).split('.').join(',') + '%'

  useFocusEffect(useCallback(() => {
    loadMealPlans()
  }, []))

  return (
    <Container>
      <Header>
        <Logo source={LogoImg} />
        <Profile source={{ uri: "https://github.com/diego64.png" }} />
      </Header>


      <Percent
        onPress={handleNavigateToStatistics}
      >
        <Title>{percentOfMealsInDiet}</Title>
        <Text>das refeições dentro da dieta</Text>
          <ArrowUpRight
            style={{ position: 'absolute', right: 5, top: 5 }}
            size={24}
            color={theme.COLORS.GREEN_DARK}
          />
      </Percent>

      <NewMeal>
        <Text>Refeições</Text>
        <Button
          text="Nova refeição"
          icon={Plus}
          onPress={handleNavigationToNewMeal}
        />
      </NewMeal>

      <List showsVerticalScrollIndicator={false}>
        {mealPlans.map((item, index) => (
          <SectionListItem key={index}>
            <SectionListHeader>{item.date}</SectionListHeader>

            {
              item.meals.map((meal) => (
                <SectionListContent key={meal.id} onPress={() => handleNavigateToMeal(meal.id)}>
                  <TextHour>{meal.hour}</TextHour>
                  <Divider />
                  <TextMessage>{meal.name}</TextMessage>
                  <Status isInDiet={meal.isInDiet} />
                </SectionListContent>
              ))
            }
          </SectionListItem>
        ))}
      </List>
    </Container>
  )
}
