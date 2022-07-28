import { useRouter } from 'next/router'
import WorkerBody from '../../../src/components/workers/workercard'
import Navbar from '../../../src/components/App-Bar/userAppbar'
const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return(<div>
    <Navbar/>
    <WorkerBody/>
  </div>);
}

export default Post