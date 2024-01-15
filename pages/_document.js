import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

// Why here instead of _app.js?
// _app.js is more for initializing pages and is more concerned about globals
// _document.js is run as early as possible, to prevent a flashing of any unstyled HTML

// sets the lang, load fonts, load scripts
// theme.config.initialiColorMode gets defined in theme.js
export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                        <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}