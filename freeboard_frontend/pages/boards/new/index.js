import { Wrapper, Title, Label, FormWrapper, FormInput, FormContent, RegistButton } from '../../../styles/freeboard'

export default function FreeboardNew() {
  return(
    <>
      <Wrapper>
        <Title>게시물 등록</Title>
        <div>
          <FormWrapper>
            <Label>작성자</Label>
            <FormInput type="text" placeholder='이름을 적어주세요.' />
          </FormWrapper>
          <FormWrapper>
            <Label>비밀번호</Label>
            <FormInput type="password" placeholder='비밀번호를 입력해주세요.' />
          </FormWrapper>
        </div>
        <FormWrapper>
          <Label>제목</Label>
          <FormInput type="text" placeholder='제목을 작성해주세요.' />
        </FormWrapper>
        <FormWrapper>
          <Label>내용</Label>
          <FormContent placeholder='내용을 작성해주세요.' />
        </FormWrapper>
        <FormWrapper>
          <Label>주소</Label>
          <FormInput type="text" />
          <button>우편번호 검색</button>
          <div>
            <FormInput type="text" />
          </div>
          <div>
            <FormInput type="text" />
          </div>
        </FormWrapper>
        <FormWrapper>
          <Label>유튜브</Label>
          <FormInput type="text" placeholder='링크를 복사해주세요.' />
        </FormWrapper>
        <FormWrapper>
          <Label>사진 첨부</Label>
          
        </FormWrapper>
        <FormWrapper>
          <Label>메인 설정</Label>
          <label htmlFor="youtube">
            <input type="radio" id='youtube' checked name="main" /> 유튜브
          </label>
          <label htmlFor="pic">
            <input type="radio" id='pic' name="main" /> 사진
          </label>
        </FormWrapper>
        <RegistButton type="button">등록하기</RegistButton>
      </Wrapper>
      
    </>
  )
}