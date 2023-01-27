import { useState } from 'react'
import { Wrapper, Title, GridWrapper, Label, FormWrapper, ZipcodeWrapper, FormInput, FormContent, RegistButton, ErrorMessage } from '../../../styles/freeboard'

const FreeboardNew = () => {
  const [writer, setWriter] = useState('')
  const [writerError, setWriterError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')
  const [content, setContent] = useState('')
  const [contentError, setContentError] = useState('')

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if(event.target.value) {
      setWriterError('')
    }
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
    if (event.target.value) {
      setPasswordError('')
    }
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    if (event.target.value) {
      setTitleError('')
    }
  }

  const onChangeContent = (event) => {
    setContent(event.target.value)
    if (event.target.value) {
      setContentError('')
    }
  }


  function onClickSignUp(){
    // 검증하기
    if(!writer) {
      setWriterError('! 작성자를 입력해주세요.')
    } 
    if(!password) {
      setPasswordError('! 비밀번호를 정확히 입력해 주세요')
    }
    if(!title) {
      setTitleError('! 제목을 입력해주세요.')
    }
    if(!content) {
      setContentError('! 내용을 입력해주세요.')
    }

    if (writer && password  && title  && content) {
      alert('게시물 등록이 완료되었습니다.')
    }
  }

  return(
    <Wrapper>
      <Title>게시물 등록</Title>
      <GridWrapper>
        <div>
          <Label>작성자</Label>
          <FormInput type="text" placeholder='이름을 적어주세요.' onChange={onChangeWriter} />
          <ErrorMessage>{writerError}</ErrorMessage>
        </div>
        <div>
          <Label>비밀번호</Label>
          <FormInput type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword} />
          <ErrorMessage>{passwordError}</ErrorMessage>
        </div>
      </GridWrapper>
      <FormWrapper>
        <Label>제목</Label>
        <FormInput type="text" placeholder='제목을 작성해주세요.' onChange={onChangeTitle} />
        <ErrorMessage>{titleError}</ErrorMessage>
      </FormWrapper>
      <FormWrapper>
        <Label>내용</Label>
        <FormContent placeholder='내용을 작성해주세요.' onChange={onChangeContent} />
        <ErrorMessage>{contentError}</ErrorMessage>
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
      <RegistButton type="button" onClick={onClickSignUp}>등록하기</RegistButton>
    </Wrapper>
  )
}

export default FreeboardNew