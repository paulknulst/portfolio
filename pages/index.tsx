import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
      <div className="flex h-screen w-screen flex-col items-center justify-center py-2 bg-slate-700">
        <Head>
          <title>Portofolio - Paul Knulst</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main
            className="flex flex-col overflow-x-hidden bg-background justify-center items-center">
          <Image
              src="/366.png"
              className="rounded-full"
              alt="Paul Knulst"
              height={240}
              width={240}
              objectFit="contain"
              quality={100}
          />
          <h1 className="text-6xl font-bold pt-12 text-yellow-500">
            Paul Knulst
          </h1>
          <div className="w-96 space-y-3 pt-4 items-center justify-center flex-wrap w-full max-w-lg p-6 text-gray-200">
            <a href="https://blog.paulknulst.de" target="_blank"
               className="w-full flex items-center px-5 py-2 my-3 duration-500 border-2 rounded-lg fill-current hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-accent border-accent text-accent">
              <span className="ml-3 text-xl font-semibold md:ml-6">Check out my blog</span>
            </a>
            <a href="https://github.com/paulknulst" target="_blank"
               className="w-full flex items-center px-5 py-2 my-3 duration-500 border-2 rounded-lg fill-current hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-accent border-accent text-accent">
              <span className="ml-3 text-xl font-semibold md:ml-6">My GitHub profile</span>
            </a>
            <a href="https://www.linkedin.com/in/paulknulst/" target="_blank"
               className="w-full flex items-center px-5 py-2 my-3 duration-500 border-2 rounded-lg fill-current hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-accent border-accent text-accent">
              <span className="ml-3 text-xl font-semibold md:ml-6">Connect with me on LinkedIn</span>
            </a>
            <a href="https://twitter.com/paulknulst" target="_blank"
               className="w-full flex items-center px-5 py-2 my-3 duration-500 border-2 rounded-lg fill-current hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-accent border-accent text-accent">
              <span className="ml-3 text-xl font-semibold md:ml-6">Follow me on Twitter</span>
            </a>
            <a href="https://sponsor.knulst.de" target="_blank"
               className="w-full flex items-center px-5 py-2 my-3 duration-500 border-2 rounded-lg fill-current hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-accent border-accent text-accent">
              <span className="ml-3 text-xl font-semibold md:ml-6">Sponsor me</span>
            </a>
          </div>
        </main>
      </div>
  )
}
