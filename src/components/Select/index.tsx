import { Container, Status, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  selected: boolean
  type?: 'default' | 'outline'
}

export function Select({ selected, type = 'default', ...rest }: Props) {
  return (
    <Container
      selected={selected}
      type={type}
      {...rest}
    >
      <Status type={type} />
      <Text>
        {type === 'default' ? 'Sim' : 'Não'}
      </Text>
    </Container>
  )
}