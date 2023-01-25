import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  box-sizing: border-box;
  margin: 100px auto;
  padding: 60px 102px 100px;
  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
  font-family: Arial, Helvetica, sans-serif;
`
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 36px;
  box-sizing: border-box;
`
export const GridWrapper = styled.div`
  padding-top: 120px;
  display: grid;

  div & {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
  }
`
export const FormWrapper = styled.div`
  padding: 40px 0 0 0;
  box-sizing: border-box;

  & input[type='radio'] {
    accent-color: #FFD600;
  }

  & label + label{
    margin-left: 20px;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  & li {
    display: inline-flex;
    margin-right: 24px;

    & button {
      margin: 0;
      padding: 0;
      width: 78px;
      height: 78px;
      border: 0;
      background: #BDBDBD;
      color: #4F4F4F;
      cursor: pointer;
    }
  }
`
export const Label = styled.h2`
  margin: 0;
  padding: 0 0 16px;
  font-size: 16px;
  box-sizing: border-box;
`
export const ZipcodeWrapper = styled.div`
  & input:nth-of-type(1) {
    width: 77px;
  }

  & input:nth-of-type(2) {
    margin-top: 16px;
  }

  & input:nth-of-type(3) {
    margin-top: 30px;
  }

  & button {
    margin: 0 0 0 16px;
    padding: 0;
    border: 0;
    background: #000;
    color: #fff;
    text-align: center;
    height: 52px;
    width: 124px;
    cursor: pointer;
  }
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
  resize: none;
  &::placeholder {
    color: #bdbdbd;
  }
`
export const RegistButton = styled.button`
  display: block;
  margin: 80px auto 0;
  border: 0;
  width: 170px;
  padding: 14px 0;
  text-align: center;
  background: #FFD600;
  cursor: pointer;
  box-sizing: border-box;
`