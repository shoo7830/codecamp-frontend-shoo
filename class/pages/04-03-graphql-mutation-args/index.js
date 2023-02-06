import { gql, useMutation } from "@apollo/client"

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) { # 타입적는 곳
    createBoard(writer:$writer, title: $title, contents:$contents) # 실제 우리가 전달할 변수 적는 곳
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
    const result = await 나의함수({
      variables: { // variables 이게 $ 역할
        writer: "훈이",
        title: "제목인가",
        contents: "제목일걸"
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
  }

  return (
    <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
  )
}

export default GraphqlMutaionPage