import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Percent = styled.View`
  width: 100%;
  padding: 82px;
  
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  
  position: relative;

  justify-content: center;
  align-items: center;

`

export const PercentTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const PercentText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const Content = styled.View`
  border-radius: 20px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 24px;
  gap: 23px;
  margin-top: -40px;
`

export const ContentTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  text-align: center;
`

export const Data = styled.View`
  gap: 12px;
`
export const DataInfo = styled.View`
  padding: 16px;
  gap: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 8px;
`
export const DataTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const DataText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  flex-wrap: wrap;
  text-align: center;
`

export const Info = styled.View`
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  gap: 12px;
`

export const InfoChildred = styled(DataInfo)`
  flex: 1;
`