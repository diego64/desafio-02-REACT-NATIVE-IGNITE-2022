import { styled } from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  height: 132px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: calc(56px - 12px);
`

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7}; /* */
  flex: 1;

  border-radius: 20px 20px 0 0;

  padding: 40px 24px;
  margin-top: -24px;
`

export const Form = styled.View`
  flex: 1;
  gap: 24px;
`
export const ContentInput = styled.View<{ multiline?: boolean }>`
  gap: 4px;
  flex: 1;
  max-height: ${({ multiline }) => multiline ? '142px' : '70px' };
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const ContentDate = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`

export const ContentIsOnDiet = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
