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
  align-items: center;
  margin-top: 32px;
`
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 40px;
`
export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  & img {
    width: 60px;
    height: auto;
  }
`
export const Name = styled.a`
  font-weight: bold;
  font-size: 24px;
  padding-left: 20px;
  
  & img {
    width: 12px;
    height: auto;
    padding-left: 10px;
  }
`

export const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 43px 0 0;
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
  padding-left: 50px;
  padding-right: 40px;
`
export const FaqItem = styled.div`
  display: flex;
  padding: 25px 0;
`
export const FaqTitle = styled.div`
  margin: 0;
  padding: 0;
  font-size: 24px;
`
export const FaqNumber = styled.p`
  margin: 0;
  padding: 0 0 5px;
  color: #ADADAD;
  font-size: 18px;
`
export const FaqButton = styled.button`
  margin: 0 13px 0 auto;
  padding: 0;
  border: 0;
  background: transparent;
`
export const FooterMenu = styled.div`
  display: flex;
  align-items: flex-end;
  height: 96px;
  padding-bottom: 12px;
  justify-content: space-around;
  border-bottom: 1px solid #CACACA ;
`
export const FooterItem = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 60px;
  color: #ADADAD;
  :nth-of-type(4) {
    color: #FF1B6D;
  }

  & p {
    margin: 0;
    padding: 10px 0 0;
    text-align: center;
  }
`