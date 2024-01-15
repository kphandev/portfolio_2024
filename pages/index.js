import { Box, Container, Link, Icon, Button, Heading, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import styled from '@emotion/styled'
import { css } from '@emotion/react';
import NextLink from 'next/link'
import { FaArrowCircleRight } from "react-icons/fa";

// A little floaty animation
const floatAnimation = css`@keyframes float {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    75% { transform: translateX(3px); }
}`;

const AnimatedButton = styled(Button)`
  ${floatAnimation}
  &:hover svg {
    animation: float 1.25s ease-in-out infinite;
  }
`;

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box display={{ sm: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Kevin Phan
                        </Heading>
                        <p>-Full Stack Developer-</p>
                    </Box>
                    <Box flexShrink={0} align="center">
                        <Box align="center" my={4}>
                            <Link as={NextLink} href='/about'>
                                <AnimatedButton
                                    rightIcon={<Icon as={FaArrowCircleRight} boxSize={6} />}
                                    colorScheme='teal'
                                    size='md'
                                >
                                    <Text>
                                        Learn More
                                    </Text>
                                </AnimatedButton>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default Page