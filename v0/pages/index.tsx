import type { NextPage } from 'next'
import Main from "@components/Main";

const Home: NextPage = () => {
  return (
      <div className="space-y-14 lg:space-y-24">
        <main className="max-w-4xl mx-auto antialiased">
          <Main/>
        </main>
      </div>
  )
}

export default Home
