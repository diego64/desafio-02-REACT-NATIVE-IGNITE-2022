import React, { useState } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { IconProps } from 'phosphor-react-native'

import { Container, Text } from './styles'
import { useTheme } from 'styled-components/native'

type Props = TouchableOpacityProps & {
  type?: 'PRIMARY' | 'SECONDARY'
  text: string
  icon?: (props: IconProps) => JSX.Element
}

export function Button({ icon: Icon, text, type='PRIMARY', ...rest }: Props) {
  const [isActive, setIsActive] = useState(false)

  const theme = useTheme()
  
  function handlePressIn() {
    setIsActive(true)
  }
  
  function handlePressOut() {
    setIsActive(false)
  }

  return (
    <Container
      {...rest}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      type={type}
      isActive={isActive}
    >
      {Icon !== undefined && (
        <Icon
          size={24}
          color={type === 'PRIMARY' ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_1}
        />
      )}
      <Text type={type}>
        {text}
      </Text>
    </Container>
  )
}
