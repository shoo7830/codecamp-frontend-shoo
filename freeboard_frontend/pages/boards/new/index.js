import { Wrapper, Title, GridWrapper, Label, FormWrapper, ZipcodeWrapper, FormInput, FormContent, RegistButton } from '../../../styles/freeboard'

export default function FreeboardNew() {
  return(
    <>
      <Wrapper>
        <Title>게시물 등록</Title>
        <GridWrapper>
          <div>
            <Label>작성자</Label>
            <FormInput type="text" placeholder='이름을 적어주세요.' />
          </div>
          <div>
            <Label>비밀번호</Label>
            <FormInput type="password" placeholder='비밀번호를 입력해주세요.' />
          </div>
        </GridWrapper>
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
          <ZipcodeWrapper>
            <FormInput type="text" />
            <button>우편번호 검색</button>
            <FormInput type="text" />
            <FormInput type="text" />
          </ZipcodeWrapper>
        </FormWrapper>
        <FormWrapper>
          <Label>유튜브</Label>
          <FormInput type="text" placeholder='링크를 복사해주세요.' />
        </FormWrapper>
        <FormWrapper>
          <Label>사진 첨부</Label>
          <ul>
            <li>
              <button>
                +<br />
                Upload
              </button>
            </li>
            <li>
              <button>
                +<br />
                Upload
              </button>
            </li>
            <li>
              <button>
                +<br />
                Upload
              </button>
            </li>
          </ul>
        </FormWrapper>
        <FormWrapper>
          <Label>메인 설정</Label>
          <label htmlFor="youtube">
            <input type="radio" id='youtube' name="main" /> 유튜브
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