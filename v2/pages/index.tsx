import type {NextPage} from 'next'
import About from "@components/About";

const Home: NextPage = () => {
    return (
        <div className="space-y-14 lg:space-y-24">
            <main className="max-w-4xl mx-auto antialiased">
                <About/>
            </main>
        </div>
    )
}

export default Home
