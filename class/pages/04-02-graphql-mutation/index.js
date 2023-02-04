import { gql, useMutation } from "@apollo/client"

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer:"철수", title:"제목이라능", contents:"내용이라능")
    {
      _id
      number
      message
    }
  }
`

const GraphqlMutaionPage = () => {
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async() => {
    const result = await 나의함수()
    console.log(result)
    alert(result.data.createBoard.message)
  }

  return (
    <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
  )
}

export default GraphqlMutaionPage