import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import { motion } from 'framer-motion';

const LazyModelViewer = dynamic(() => import('../model-viewer'), {
    ssr: false,
    loading: () => <div>Loading 3D Model...</div>
});


const Main = ({ children, router }) => {
    const showLargeModel = router.pathname === '/' || router.pathname === '/contact';

    const viewerStyle = {
        height: showLargeModel ? '75vh' : '40vh',
        width: '100%'
    };

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content="Kevin Phan's updated portfolio site" />
                <title>Kevin Phan - Software Dev</title>
            </Head>

            <Navbar path={router.asPath}></Navbar>

            <Container maxW="container.md" pt="20">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                    <LazyModelViewer style={viewerStyle} />
                    {children}
                </motion.div>
            </Container>
        </Box>
    )
}

export default Main