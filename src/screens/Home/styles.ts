import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 66px 24px 0px;
  gap: 33px;
`

export const Header = styled.View`
  width: 100%;

  justify-content: space-between;
  flex-direction: row;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 999px;
`

export const Percent = styled.TouchableOpacity`
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  margin: 0 24px;

  border-radius: 8px;

  position: relative;
  gap: 2px;
  padding: 20px 16px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`

export const NewMeal = styled.View`
  width: 100%;
  justify-content: space-between;

  display: flex;
  gap: 8px;
`

export const List = styled.ScrollView`
  width: 100%;
`

export const SectionListItem = styled.View`
  width: 100%;
  gap: 8px;
  margin-bottom: 32px;
`

export const SectionListHeader = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const SectionListContent = styled.TouchableOpacity`
  width: 100%;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};

  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  padding: 14px 16px 14px 12px;
`

export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Status = styled.View<{ isInDiet?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, isInDiet }) => isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`

export const TextHour = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const TextMessage = styled.Text`
  flex: 1;
  flex-wrap: nowrap;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`