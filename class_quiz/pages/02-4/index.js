import { useState } from "react"

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordcheck, setPasswordcheck] = useState('')
  const [emailError, setEmailError] = useState('')
  const [pwError, setPwError] = useState('')
  
  const onClickSignUp = () => {
    if (!email) {
      setEmailError('이메일을 입력해주세요.')
    }

    if(!email.includes('@')) {
      setEmailError('이메일에 @가 없으면 에러입니다.')
    }

    if (password !== passwordcheck) {
      setPwError('비밀번호와 비밀번호 확인이 다르면 에러입니다.')
    }
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
    if(event.target.value) {
      setEmailError('')
    }
  }

  const onChangePw = (event) => {
    setPassword(event.target.value)
    
  }

  const onChangePwCheck = (event) => {
    setPasswordcheck(event.target.value)
    if (event.target.value) {
      setPwError('')
    }
  }
  return (
    <>
      <div>이메일: <input type="text" onChange={onChangeEmail} /></div>
      <div style={{color: 'red'}}>{emailError}</div>
      <div>비밀번호: <input type="password" onChange={onChangePw} /></div>
      <div>비밀번호 확인: <input type="password" onChange={onChangePwCheck} /></div>
      <div style={{ color: 'red' }}>{pwError}</div>
      <button onClick={onClickSignUp}>가입하기</button>
    </>
  )
}

export default SignUp