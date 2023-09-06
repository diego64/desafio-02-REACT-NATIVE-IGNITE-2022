import {
  ButtonIcon,
  Container,
  Content,
  ContentDate,
  ContentInput,
  ContentIsOnDiet,
  Form,
  Header,
  HeaderTitle,
  Label,
} from './styles'

import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import { useState } from 'react'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Button as ButtonFooter } from '@components/Button' 
import { addMeal } from '@storage/meals/addMeal'

import { Select } from '@components/Select'
import { Input } from '@components/Input'

export function NewMeal() {
  const theme = useTheme()
  const navigation = useNavigation()

  const [isInDiet, setIsInDiet] = useState(true)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(format(new Date(), 'dd/MM/yyyy'))
  const [hour, setHour] = useState(format(new Date(), 'HH:mm'))
  
  function handleGoBack() {
    navigation.navigate('home')
  }

  async function handleCreateMeal() {
    if (!name.trim()) {
      Alert.alert('O nome da refeição é obrigatório')
      return
    }
    
    if (!description.trim()) {
      Alert.alert('A descrição da refeição é obrigatória')
      return
    }

    if (!date) {
      Alert.alert('A data da refeição é obrigatória')
      return
    }

    if (date.length < 10) {
      Alert.alert('A data não está no formato dd/mm/aaaa')
      return
    }

    if (!hour) {
      Alert.alert('A hora da refeição é obrigatória')
      return
    }

    if (hour.length < 5) {
      Alert.alert('A hora não está no formato hh:mm')
      return
    }

    try {

      await addMeal({
        date,
        hour,
        isInDiet,
        name,
        description,
       })

      navigation.navigate('feedback', { type: isInDiet ? 'good' : 'bad' })

    } catch (error) {
      Alert.alert('Não foi possível cadastrar a refeição')
    }
  }

  function handleSelectIsOnDiet() {
    setIsInDiet(true)
  }

  function handleSelectIsNotOnDiet() {
    setIsInDiet(false)
  }

  function handleNameChange(name: string) {
    setName(name)
  }

  function handleDescriptionChange(description: string) {
    setDescription(description)
  }
  
  function formatDate (text: string) {
    let formatted = text.replace(/\D/g, '')

    if (formatted.length > 2) {
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`
    }

    if (formatted.length > 5) {
      formatted = `${formatted.slice(0, 5)}/${formatted.slice(5)}`
    }

    setDate(formatted)
  }

  function formatHour(value: string) {
    const numericValue = value.replace(/\D/g, '')

    let formattedHour = ''
    if (numericValue.length > 0) {
      formattedHour = numericValue.slice(0, 2)

      if (numericValue.length > 2) {
        formattedHour += ':' + numericValue.slice(2, 4)
      }
    }

    setHour(formattedHour)
  }

  return (
    <Container
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Header>
        <ButtonIcon onPress={handleGoBack}>
          <ArrowLeft
            size={24}
            color={theme.COLORS.GRAY_1}
          />
        </ButtonIcon>
        <HeaderTitle>Nova refeição</HeaderTitle>
      </Header>

      <Content>
        <Form>
          <Input
            label="Nome"
            value={name}
            onChangeText={handleNameChange}
            maxLength={50}
            autoCorrect={false}
            autoComplete='off'
          />

          <Input
            label="Descrição"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={handleDescriptionChange}
            maxLength={500}
            autoCorrect={false}
            autoComplete='off'
          />

          <ContentDate>
            <Input
              label="Data"
              placeholder="dd/mm/aaaa"
              value={date}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={formatDate}
            />
            <Input
              label="Hora"
              placeholder="hh:mm"
              value={hour}
              keyboardType="numeric"
              maxLength={5}
              onChangeText={formatHour}
            />
          </ContentDate>

          <ContentInput>
            <Label>Está dentro da dieta?</Label>
            <ContentIsOnDiet>
              <Select
                type='default'
                selected={isInDiet}
                onPress={handleSelectIsOnDiet}
              />
              <Select
                type='outline'
                selected={!isInDiet}
                onPress={handleSelectIsNotOnDiet}
              />
            </ContentIsOnDiet>
          </ContentInput>
        </Form>

        <ButtonFooter text="Cadastrar refeição" onPress={handleCreateMeal} />
      </Content>
    </Container>
  )
}

