import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { # 타입적는 곳
    createProduct(seller:$seller, createProductInput: $createProductInput) # 실제 우리가 전달할 변수 적는 곳
    {
      _id
      number
      message
    }
  }
`

const GraphqlMutaionPage = () => {
  
  const [나의함수] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async() => {
    // const writer = 'qqq' // 이 함수에 있으면 현재 스코프
    const result = await 나의함수({
      variables: { // variables 이게 $ 역할
        seller: "훈이", // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
        createProductInput: {
          name: "마우스",
          detail: "무선 마우스",
          price: 50000
        }
      }
    })
    console.log(result)
    alert(result.data.createProduct.message)
  }

  

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
    
  )
}

export default GraphqlMutaionPage