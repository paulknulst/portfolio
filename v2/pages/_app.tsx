import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import ContainerBlock from "@components/ContainerBlock";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <ThemeProvider attribute="class" enableSystem={true}>
                <ContainerBlock>
                    <Component {...pageProps} />
                </ContainerBlock>
            </ThemeProvider>
        </div>
    )
}

export default MyApp
