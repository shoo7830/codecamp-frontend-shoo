
import { useRouter } from "next/router"


const staticRoutingPage = () => {
  const router = useRouter()
  const onClickMove1 = () => {
    router.push('/05-08-dynamic-routed-board-query/238')
  }

  const onClickMove2 = () => {
    router.push('/05-08-dynamic-routed-board-query/239')
  }

  const onClickMove3 = () => {
    router.push('/05-08-dynamic-routed-board-query/240')
  }

  const onClickMove100 = () => {
    router.push('/05-08-dynamic-routed-board-query/241')
  }

  return (
    <>
      <button onClick={onClickMove1}>238번 게시글로 이동하기</button><br />
      <button onClick={onClickMove2}>239번 게시글로 이동하기</button><br />
      <button onClick={onClickMove3}>240번 게시글로 이동하기</button>
      <button onClick={onClickMove100}>241번 게시글로 이동하기</button>
    </>
  )
}

export default staticRoutingPage