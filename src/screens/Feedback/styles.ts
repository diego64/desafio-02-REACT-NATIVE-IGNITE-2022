import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  gap: 40px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text<{ type: 'good' | 'bad' }>`
  color: ${({ type, theme }) => type === 'good' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}; 
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const Description = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const DescriptionBold = styled(Description)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Image = styled.Image``

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8px;
`