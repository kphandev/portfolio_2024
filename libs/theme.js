import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// All variables are just configurations for extendTheme()
// ultimately gets used in _document.js
const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            transition: 'background-color 0.5s ease'
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3D7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'"
};

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    disableTransitionOnChange: false
}

const sizes = {
    container: {
        // md: '800px'
    }
}

const theme = extendTheme({
    config, styles, components, colors, fonts, sizes
})

export default theme