import Layout from '../components/layouts/article'
import Section from '../components/section'
import Milestones from '../components/timeline'

import { Heading, GridItem, Text, Box, Grid, useColorModeValue, Flex } from '@chakra-ui/react'
import { FaReact, FaVuejs, FaPython, FaNodeJs, FaGolang, FaDocker, FaAws, FaHandshake  } from 'react-icons/fa6';
import { DiPostgresql, DiMysql } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";
import { BiLogoKubernetes } from "react-icons/bi";
import { GiTeamIdea } from "react-icons/gi";
import { HiOutlineEmojiHappy } from "react-icons/hi";



const Experience = () => {
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900'); // dark text for light mode, light text for dark mode

    const TechIcon = ({ icon: IconComponent }) => (
        <Box as={IconComponent} size="1.5em" mx={1} />
    );

    // Define your array of icons
    const frontEndIcons = [FaReact, FaVuejs, TbBrandThreejs]
    const backendIcons = [FaPython, FaNodeJs, FaGolang, DiPostgresql, DiMysql];
    const cloudIcons = [BiLogoKubernetes, FaDocker, FaAws]
    const teamIcons = [GiTeamIdea, FaHandshake, HiOutlineEmojiHappy]
    return (
        <span>
            <Section delay={0.2} >
                <Layout>
                    <Heading as="h3" variant="section-title" mt="20px">
                        Experience
                    </Heading>
                    <Box px={0}>
                        <Grid
                            templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                            gap={8}
                        >
                            <GridItem w="100%" color={textColor} py={2} borderRadius="md">
                                <Flex alignItems="center" justify='space-between'>
                                    <Text as="h2" fontSize="xl" fontWeight="bold">
                                        Front-end
                                    </Text>
                                    <Flex>
                                        {frontEndIcons.map((Icon, index) => (
                                            <TechIcon key={index} icon={Icon} />
                                        ))}
                                    </Flex>
                                </Flex>

                                <Text mt={2}>Experienced with various React and Vue frameworks with a touch of Three.js to create dynamic, responsive, and accessible user interfaces.</Text>
                            </GridItem>

                            <GridItem w="100%" color={textColor} py={2} borderRadius="md">
                                <Flex alignItems="center" justify='space-between'>
                                    <Text as="h2" fontSize="xl" fontWeight="bold">
                                        Back-end
                                    </Text>
                                    <Flex>
                                        {backendIcons.map((Icon, index) => (
                                            <TechIcon key={index} icon={Icon} />
                                        ))}
                                    </Flex>
                                </Flex>

                                <Text mt={2}>Built scalable AI infrastructure, APIs, and long running business processes using Python, Node, and Go along with PostgreSQL and MySQL for various solutions.</Text>
                            </GridItem>

                            <GridItem w="100%" color={textColor} py={2} borderRadius="md">
                                <Flex alignItems="center" justify='space-between'>
                                    <Text as="h2" fontSize="xl" fontWeight="bold">
                                        Cloud Systems
                                    </Text>
                                    <Flex>
                                        {cloudIcons.map((Icon, index) => (
                                            <TechIcon key={index} icon={Icon} />
                                        ))}
                                    </Flex>
                                </Flex>
                                <Text mt={2}>Configured secure and efficient deployment images using Docker, while monitoring system health through Kubernetes, in conjunction with a range of utilities available in AWS.</Text>
                            </GridItem>

                            <GridItem w="100%" color={textColor} py={2} borderRadius="md">
                                <Flex alignItems="center" justify='space-between'>
                                    <Text as="h2" fontSize="xl" fontWeight="bold">
                                        Teamwork
                                    </Text>
                                    <Flex>
                                        {teamIcons.map((Icon, index) => (
                                            <TechIcon key={index} icon={Icon} />
                                        ))}
                                    </Flex>
                                </Flex>
                                <Text mt={2}>Communicative, reliable team member with strong considerations for ease of maintaince, scalability, and the wellbeing of the team</Text>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Heading as="h3" variant="section-title" mt="20px">
                        Milestones
                    </Heading>
                    <Milestones />
                </Layout>
            </Section >
        </span>

    )
}


export default Experience