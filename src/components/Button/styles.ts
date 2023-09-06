import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type ButtonProps = {
  type: 'PRIMARY' | 'SECONDARY'
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  
  background-color: ${({ theme, type, isActive }) => {
    switch (type) {
      case 'SECONDARY':
        return isActive ? theme.COLORS.GRAY_5 : theme.COLORS.GRAY_7
        default:
          return isActive ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_2
        }
    }};

  padding: 16px 24px;
  gap: 12px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text<Partial<ButtonProps>>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`
