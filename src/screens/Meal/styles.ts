import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Header = styled.View<{ isInDiet?: boolean }>`
  width: 100%;
  height: 132px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  background-color: ${({ theme, isInDiet }) => isInDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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
  gap: 24px;
`

export const Block = styled.View`
  gap: 8px;
`

export const TitleContent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const TextContent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const TitleDateAndTime = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const DateAndTime = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const TitleStatus = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const Status = styled.View`
  flex-direction: row;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  align-items: center;
  width: 144px;
`

export const Icon = styled.View<{ type: 'default' | 'outline' }>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'default' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Footer = styled.View`
  flex: 1;
  gap: 8px;
  justify-content: flex-end;
`

export const ModalContainer = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.COLORS.GRAY_1}25`};
`

export const ModalContent = styled.Pressable`
  max-width: 85%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
  gap: 32px;
  padding: 24px;
`
export const TitleModal = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const FooterModal = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
`