import { Wrapper, Title, Label, RegistButton } from '../../../styles/freeboard'

export default function FreeboardNew() {
  return(
    <>
      <Wrapper>
        <Title>게시물 등록</Title>
        <div>
          <Label>작성자</Label>
          <input type="text" placeholder='이름을 적어주세요.' />
        </div>
        <div>
          <Label>비밀번호</Label>
          <input type="password" />
        </div>
        <div>
          <Label>제목</Label>
          <input type="text" />
        </div>
        <div>
          <Label>주소</Label>
          <input type="text" />
          <button>우편번호 검색</button>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <Label>유튜브</Label>
          <input type="text" />
        </div>
        <div>
          <Label>사진 첨부</Label>
          <input type="text" />
        </div>
        <div>
          <Label>메인 설정</Label>
          <input type="text" />
        </div>
        <RegistButton type="button">등록하기</RegistButton>
      </Wrapper>
      
    </>
  )
}