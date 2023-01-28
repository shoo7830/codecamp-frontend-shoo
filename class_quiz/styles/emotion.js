import styled from "@emotion/styled"

export const Wrapper = styled.div`
  box-sizing: border-box;
`
export const Header = styled.div`
  padding: 37px 48px 50px;
`
export const Search = styled.div`
  text-align: right;
`
export const InfoWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 40px;
`
export const NameWrapper = styled.div`
 justify-content: flex-end;
`

export const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 43px 0 58px;
  padding: 0;
`
export const MenuItem = styled.a`
  display: inline-flex;
  font-size: 30px;
  height: 43px;
  line-height: 43px;
  font-weight: bold;
  color: #CACACA;

  &:nth-of-type(3) {
    color: #FF1B6D;
    border-bottom: 2px solid #FF1B6D;
  }
`
export const FaqList = styled.div`
  border-top: 1px solid #CACACA ;
  border-bottom: 1px solid #CACACA ;
`
