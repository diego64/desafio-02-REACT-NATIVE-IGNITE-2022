import {
  Container,
  Header,
  Block,
  Content,
  DateAndTime,
  TextContent,
  TitleContent,
  TitleDateAndTime,
  HeaderTitle,
  TitleStatus,
  ButtonIcon,
  Icon,
  Status,
  Footer,
  ModalContainer,
  TitleModal,
  FooterModal,
  ModalContent
} from './styles'

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { useRoute } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useCallback, useState } from 'react'
import { getMealById } from '@storage/meals/getMealById'
import { Button } from '@components/Button'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { removeMeal } from '@storage/meals/removeMeal'
import { Alert, Modal } from 'react-native'


type RouteParams = {
  id: string
}

export function Meal() {
  const route = useRoute()
  const id = (route.params as RouteParams).id

  const [meal, setMeal] = useState<Meal>({} as Meal)
  const [isModalVisible, setIsModalVisible] = useState(false)
  
  const navigation = useNavigation()
  const theme = useTheme()

  const dateString = `${meal.date} às ${meal.hour}`

  function handleGoBack() {
    navigation.goBack()
  }

  async function loadMeal() {
    const foundMeal = await getMealById(id)

    if (foundMeal) {
      setMeal(foundMeal)
    }
  }

  async function onRemoveMealAndGoHome() {
    try {
      await removeMeal(id)

      setIsModalVisible(false)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível remover a refeição')
    }
  }

  function handleRemoveMeal() {
    setIsModalVisible(true)
  }

  function handleNavigationToEditMeal() {
    navigation.navigate('editMeal', { id })
  }

  function handleCloseModal() {
    setIsModalVisible(false)
  }

  useFocusEffect(useCallback(() => {
    loadMeal()
  }, []))

  return (
    <Container>
      <Header isInDiet={meal.isInDiet} >
        <ButtonIcon onPress={handleGoBack}>
          <ArrowLeft
            size={24}
            color={theme.COLORS.GRAY_1}
          />
        </ButtonIcon>
        <HeaderTitle>Refeição</HeaderTitle>
      </Header>

      <Content>
        <Block>
          <TitleContent>{meal.name}</TitleContent>
          <TextContent>{meal.description}</TextContent>
        </Block>

        <Block>
          <TitleDateAndTime>Data e Hora</TitleDateAndTime>
          <DateAndTime>{dateString}</DateAndTime>
        </Block>
        
        <Block>
          <Status>
            <Icon type={meal.isInDiet ? 'default' : 'outline'} />
            <TitleStatus>
              {true ? 'dentro da dieta' : 'fora da dieta'}
            </TitleStatus>
          </Status>
        </Block>

        <Footer>
          <Button
            text="Editar refeição"
            icon={PencilSimpleLine}
            onPress={handleNavigationToEditMeal}
          />
          <Button
            text="Excluir refeição"
            icon={Trash}
            type="SECONDARY"
            onPress={handleRemoveMeal}
          />
        </Footer>
      </Content>

      <Modal
        animationType="fade"
        transparent
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer
          onPress={handleCloseModal}
        >
          <ModalContent>
            <TitleModal>Deseja realmente excluir o registro da refeição?</TitleModal>
            <FooterModal>
              <Button
                text="Cancelar"
                type="SECONDARY"
                style={{ flex: 1 }}
                onPress={handleCloseModal}
                />
              <Button
                style={{ flex: 1 }}
                text="Sim, excluir"
                type="PRIMARY"
                onPress={onRemoveMealAndGoHome}
              />
            </FooterModal>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  )
}
