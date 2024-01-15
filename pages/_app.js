// contains the single page application
import { ChakraProvider } from "@chakra-ui/react";
import Main from '../components/layouts/main'
import Fonts from "../components/fonts";
import theme from '../libs/theme'
import { AnimatePresence } from "framer-motion";

// Component is index.js
const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Main router={router}>
                <AnimatePresence mode='wait' initial={true}>
                    <Component {...pageProps} key={router.route}></Component>
                </AnimatePresence>
            </Main>
        </ChakraProvider>
    )
}

export default Website