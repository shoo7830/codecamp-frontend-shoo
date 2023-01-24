import styled from '@emotion/styled'

export const Wrapper = styled.div`
  //width: 1200px;
  box-sizing: border-box;
  margin: 100px auto;
  padding: 60px 102px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Noto Sans CJK KR';
`
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 36px;
  box-sizing: border-box;
`
export const Label = styled.h2`
  margin: 0;
  padding: 0 0 16px;
  font-size: 16px;
  box-sizing: border-box;
`
export const FormWrapper = styled.div`
  padding: 40px 0 0 0;
  box-sizing: border-box;
`
export const FormInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 100%;
  height: 52px;
  padding: 0 0 0 16px;
  box-sizing: border-box;

  &::placeholder {
    color: #bdbdbd;
  }
`
export const FormContent = styled.textarea`
  border: 1px solid #bdbdbd;
  width: 100%;
  height: 480px;
  padding: 16px 0 0 14px;
  box-sizing: border-box;
  &::placeholder {
    color: #bdbdbd;
  }
`
export const RegistButton = styled.button`
  display: block;
  margin: 0 auto;
  border: 0;
  width: 170px;
  padding: 14px 0;
  text-align: center;
  background: #FFD600;
  cursor: pointer;
  box-sizing: border-box;
`