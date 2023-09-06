import { css, styled } from 'styled-components/native'

export const Container = styled.View<{ multiline?: boolean }>`
  gap: 4px;
  flex: 1;
  max-height: ${({ multiline }) => multiline ? '142px' : '70px' };
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 8px 14px;
  ${({ multiline }) => multiline && css`
    height: 120px;
    text-align-vertical: top;
  `};
`
