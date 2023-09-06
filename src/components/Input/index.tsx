import { Container, Label, Input as SCInput } from './styles'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  label: string
}

export function Input({ label, multiline, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container multiline={multiline}>
      <Label>{label}</Label>
      <SCInput multiline={multiline} {...rest} cursorColor={theme.COLORS.GRAY_4} />
    </Container>
  )
}
