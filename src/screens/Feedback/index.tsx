import { Button } from '@components/Button'
import { Container, Content, Description, DescriptionBold, Image, Title } from './styles'

import { useRoute, useNavigation } from '@react-navigation/native'

import IllustrationGoodImg from '@assets/illustrationGood.png'
import IllustrationBadImg from '@assets/illustrationBad.png'

type RouteParams = {
  type: 'good' | 'bad'
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()
  const type = (route.params as RouteParams)?.type || 'bad'

  function handleNavigateToHome() {
    navigation.navigate('home')
  }
  
  return (
    <Container>
      <Content>
        <Title type={type}>
          {type === 'good' ? 'Continue Assim!' : 'Que pena!'}
        </Title>
        {
          type === 'good' ? (
            <Description>
              Você continua <DescriptionBold>dentro da dieta</DescriptionBold>. Muito bem!
            </Description>
          ) : (
            <Description>
              Você <DescriptionBold>saiu da dieta</DescriptionBold> dessa vez, mas continue se esforçando e não desista!
            </Description>
          )
        }

      </Content>

      <Image source={type === 'good' ? IllustrationGoodImg : IllustrationBadImg} />

      <Button text="Ir para a página inicial" onPress={handleNavigateToHome} />
    </Container>
  )
}
