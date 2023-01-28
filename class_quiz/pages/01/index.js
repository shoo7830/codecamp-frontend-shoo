import { Wrapper, Header, Search, InfoWrapper, Title, NameWrapper, MenuList, MenuItem, FaqList } from '../../styles/emotion'

const MyPages = () => {
  
  
  return (
    <Wrapper>
      <Header>
        <Search><img src="/search.svg" alt="" /></Search>
        <InfoWrapper>
          <Title>
            마이
          </Title>
          <NameWrapper>
            
          </NameWrapper>
        </InfoWrapper>
        <MenuList>
          <MenuItem>공지사항</MenuItem>
          <MenuItem>이벤트</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Q&A</MenuItem>
        </MenuList>
      </Header>
      <FaqList>

      </FaqList>
    </Wrapper>
  )
}

export default MyPages