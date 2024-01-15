import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { Box, Heading, Grid, Text, Container, Image, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const About = () => (
    <Container>
        <Section delay={0.1}>
            <Layout>
                <Flex alignItems="flex-end"> {/* This will center both the image and the heading */}
                    <Heading as="h2" variant="page-title" flexGrow={1}>
                        Intro
                    </Heading>
                    <Box flexShrink={0}>
                        <Image
                            borderColor="gray.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            borderRadius="full"
                            src="/images/pixel_portrait.png"
                            alt='profile_pic'
                        />
                    </Box>
                </Flex>
            </Layout>
            <Paragraph>
                Howdy! I’m Kevin Phan (KPhan), a <u>full stack developer</u> who has thrived in the start-up space, rapidly gaining experience and growing my skills.
                With a diverse skillset, I’m able to share unique perspectives and to be a reliable, versatile member of any team!
                Curiosity and teamwork are huge for me—there are few things more satisfying than gathering together to solve a common problem with an efficient, sustainable, and easily maintained solution!
                <br /><br />
                <b>TL;DR:</b> <br />Versatile, team oriented full-stack dev with a passion creating lasting solutions
            </Paragraph>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title" mt="20px">
                Interests
            </Heading>
            <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>
                <Box><Text><span role="img" aria-label="climbing">🧗</span> Bouldering & Climbing</Text></Box>
                <Box><Text><span role="img" aria-label="coding">💻</span> Coding</Text></Box>
                <Box><Text><span role="img" aria-label="food">🍲</span> Cooking & Food Culture</Text></Box>
                <Box><Text><span role="img" aria-label="gaming">🎮</span> Gaming</Text></Box>
                <Box><Text><span role="img" aria-label="weightlifting">🏋️</span> Weightlifting</Text></Box>
                <Box><Text><span role="img" aria-label="animation">🎥</span> Animation</Text></Box>
                <Box><Text><span role="img" aria-label="traveling">✈️</span> Traveling</Text></Box>
            </Grid>
        </Section>
    </Container>

)

export default About