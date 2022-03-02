import Sponsor from "@components/Sponsor";
import {NextPage} from "next";

const SupportMe: NextPage = () => {
    return (
        <div className="space-y-14 lg:space-y-24">
            <main className="max-w-4xl mx-auto mt-16 antialiased">
                <Sponsor/>
            </main>
        </div>
    )
}

export default SupportMe