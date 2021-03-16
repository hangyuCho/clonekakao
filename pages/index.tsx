import AppLayout from '../layout/AppLayout'
import { AppProps } from 'next/app'

const Home = ({ 
  allPostsData 
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }
}) => {
  return (
    <>
      <AppLayout>
        <div>profile</div>
      </AppLayout>
    </>
  );
}

export default Home;
