import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import Navbar from '../navbar'
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const LazyModelViewer = dynamic(() => import('../model-viewer'), {
    ssr: false,
    loading: () => <div>Loading 3D Model...</div>
});


const Main = ({ children, router }) => {
    const showLargeModel = router.pathname === '/' || router.pathname === '/contact';
    const variant = useBreakpointValue({ base: 'mobile', md: 'desktop' });

    const viewerStyle = {
        height: showLargeModel ? '75vh' : '40vh',
        width: '100%'
    };

    useEffect(() => {
        const originalTitle = "KPhan.dev - Full Stack Dev | ";
        let i = 0;
        const scrollTitle = () => {
            const title = originalTitle.substr(i) + originalTitle.substr(0, i);
            document.title = title;
            i = (i + 1) % originalTitle.length;
        };
        const intervalId = setInterval(scrollTitle, 300); // Adjust speed as needed

        return () => {
            clearInterval(intervalId); // Clean up the interval
            document.title = originalTitle; // Reset title on unmount
        };
    }, []);

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content="Welcome to KPhan.dev, Kevin Phan's portfolio that showcases his projects, experience, and the journey as a full-stack developer." />
                <link rel="icon" href="/images/kphandev_favicon.png" />
                <title>KPhan.dev - Portfolio</title>
            </Head>

            <Navbar path={router.asPath}></Navbar>

            <Container maxW="container.md" pt="20">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                    {
                        (variant === 'mobile' && showLargeModel===true) ? (
                            <>
                                {children}
                                <LazyModelViewer style={viewerStyle} />
                            </>
                        ) : (
                            <>
                                <LazyModelViewer style={viewerStyle} />
                                {children}
                            </>
                        )
                    }
                </motion.div>
            </Container>
        </Box>
    )
}

export default Main