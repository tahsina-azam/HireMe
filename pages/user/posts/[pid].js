import { useRouter } from 'next/router'
import WorkerBody from '../../../src/components/workers/workercard'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return(<div>
    <WorkerBody/>
  </div>);
}

export default Post