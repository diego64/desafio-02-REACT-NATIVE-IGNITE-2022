import { styled } from 'styled-components/native'

type ContainerProps = {
  selected: boolean
  type: 'default' | 'outline'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  height: 50px;
  background-color: ${({ theme, selected, type }) => {
    if (selected) {
      return type === 'default' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
    }

    return theme.COLORS.GRAY_6
  }};
  border: 2px solid ${({ theme, selected, type }) => {
    if (selected) {
      return type === 'default' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
    }

    return theme.COLORS.GRAY_6
  }};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const Status = styled.View<{ type: 'default' | 'outline' }>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'default' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
