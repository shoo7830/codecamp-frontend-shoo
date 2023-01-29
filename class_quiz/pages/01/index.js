import { Wrapper, Header, Search, InfoWrapper, Title, NameWrapper, Name, MenuList, MenuItem, FaqList, FaqItem, FaqTitle, FaqNumber, FaqButton, FooterMenu, FooterItem } from '../../styles/emotion'

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
            <img src="/thumbnail.png" alt="" />
            <Name>
              임정아 
              <img src="/arrow-right.svg" alt="" />
            </Name>
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
        
        <FaqItem>
          <FaqTitle>
            <FaqNumber>Q.01</FaqNumber>
            리뷰 작성은 어떻게 하나요?
          </FaqTitle>
          <FaqButton>
            <img src="/arrow-down.svg" alt="" />
          </FaqButton>
        </FaqItem>
        <FaqItem>
          <FaqTitle>
            <FaqNumber>Q.02</FaqNumber>
            리뷰 수정/삭제는 어떻게 하나요?
          </FaqTitle>
          <FaqButton>
            <img src="/arrow-down.svg" alt="" />
          </FaqButton>
        </FaqItem>
        <FaqItem>
          <FaqTitle>
            <FaqNumber>Q.03</FaqNumber>
            아이디/비밀번호를 잊어버렸어요
          </FaqTitle>
          <FaqButton>
            <img src="/arrow-down.svg" alt="" />
          </FaqButton>
        </FaqItem>
        <FaqItem>
          <FaqTitle>
            <FaqNumber>Q.04</FaqNumber>
            회원탈퇴를 하고싶어요.
          </FaqTitle>
          <FaqButton>
            <img src="/arrow-down.svg" alt="" />
          </FaqButton>
        </FaqItem>
        <FaqItem>
          <FaqTitle>
            <FaqNumber>Q.05</FaqNumber>
            출발지 설정은 어떻게 하나요?
          </FaqTitle>
          <FaqButton>
            <img src="/arrow-down.svg" alt="" />
          </FaqButton>
        </FaqItem>
        <FaqItem>
          <FaqTitle>
            <FaqNumber>Q.06</FaqNumber>
            비밀번호를 변경하고 싶어요
          </FaqTitle>
          <FaqButton>
            <img src="/arrow-down.svg" alt="" />
          </FaqButton>
        </FaqItem>
      </FaqList>
      <FooterMenu>
        <FooterItem>
          <img src="/home.svg" alt="" /><p>홈</p>
        </FooterItem>
        <FooterItem>
          <img src="/pin.svg" alt="" /><p>잇츠로드</p>
        </FooterItem>
        <FooterItem>
          <img src="/pick.svg" alt="" /><p>마이찜</p>
        </FooterItem>
        <FooterItem>
          <img src="/my.svg" alt="" /><p>마이</p>
        </FooterItem>
      </FooterMenu>
    </Wrapper>
  )
}

export default MyPages