import { useRouter } from 'next/router'
import WorkerCard from '../../../src/components/workerprofile/profilecard'

const Post = () => {
  const router = useRouter()
  const { tname } = router.query

  return (
    <div>
      <WorkerCard/>
    </div>
  );
}

export default Post