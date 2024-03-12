import Layout from '../components/layouts/article'
import Section from '../components/section'
import Milestones from '../components/timeline'

import { Heading, GridItem, Text, Box, Grid, useColorModeValue, Flex, Tag } from '@chakra-ui/react'
import { FaReact, FaVuejs, FaPython, FaNodeJs, FaGolang, FaDocker, FaAws, FaHandshake  } from 'react-icons/fa6';
import { DiPostgresql, DiMysql } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";
import { BiLogoKubernetes } from "react-icons/bi";
import { GiTeamIdea } from "react-icons/gi";
import { HiOutlineEmojiHappy } from "react-icons/hi";



const Experience = () => {
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900'); // dark text for light mode, light text for dark mode

    // Define your array of icons
    const frontEndIcons = [FaReact, FaVuejs, TbBrandThreejs]
    const frontEndTags = ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript', 'Chakra UI', 'Three.js', 'Bootstrap', 'HTML', 'CSS', 'jQuery'];
    const backendIcons = [FaPython, FaNodeJs, FaGolang, DiPostgresql, DiMysql];
    const backendTags = ['Python (Django, FastAPI)', 'Go', 'Java (Spring Boot)', 'PHP (Symfony)', 'SQL', 'PostgreSQL', 'MySQL', 'Various ORMs'];
    const cloudIcons = [BiLogoKubernetes, FaDocker, FaAws]
    const cloudTags = ['AWS (ECS, Cloud Computing, Cognito)', 'Docker', 'Kubernetes', 'Azure', 'CI/CD', 'Git', 'Version Control', 'Agile methodologies'];
    const teamIcons = [GiTeamIdea, FaHandshake, HiOutlineEmojiHappy]
    const teamTags = ['Cypress', 'Pytest', 'Postman', 'Playwright', 'Microservices', 'OOP', 'Jira', 'Kanban', 'ESLint'];

    const TechIcon = ({ icon: IconComponent }) => (
        <Box as={IconComponent} size="1.5em" mx={1} />
    );

    const renderTags = (tags) => (
        <Flex wrap="wrap" mt="2">
            {tags.map((tag, index) => (
                <Tag key={index} mr="2" mb="2" colorScheme="blue">{tag}</Tag>
            ))}
        </Flex>
    );

    return (
        <span>
            <Section delay={0.2} >
                <Layout>
                    <Flex justifyContent="space-between" alignItems="center" mb={4}>
                        <Heading as="h3" variant="section-title" mt="20px">
                            Experience
                        </Heading>
                    </Flex>
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
                                {renderTags(frontEndTags)}
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
                                {renderTags(backendTags)}

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
                                {renderTags(cloudTags)}
                            </GridItem>

                            <GridItem w="100%" color={textColor} py={2} borderRadius="md">
                                <Flex alignItems="center" justify='space-between'>
                                    <Text as="h2" fontSize="xl" fontWeight="bold">
                                        Project Success
                                    </Text>
                                    <Flex>
                                        {teamIcons.map((Icon, index) => (
                                            <TechIcon key={index} icon={Icon} />
                                        ))}
                                    </Flex>
                                </Flex>
                                <Text mt={2}>
                                    Brings effective communication, problem-solving, and adaptability to every team. Committed to fostering positive collaborations and a growth-oriented work environment using technologies that improve quality of work and standards.</Text>
                                {renderTags(teamTags)}
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