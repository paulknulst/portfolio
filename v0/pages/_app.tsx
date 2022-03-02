import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import MetaContainer from "@components/MetaContainer";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <ThemeProvider attribute="class" enableSystem={true}>
                <MetaContainer>
                    <Component {...pageProps} />
                </MetaContainer>
            </ThemeProvider>
        </div>
    )
}

export default MyApp
