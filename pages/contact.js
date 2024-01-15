import { Container } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { Grid, GridItem, Link, Text, Icon, Flex, useColorModeValue, chakra } from '@chakra-ui/react';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionImage = chakra(motion.img);
const rockingAnimation = {
    rotate: [0, -10, 0, -10, 0], // Rocking degrees
    transition: {
        duration: 1, 
        ease: "easeInOut",
        repeat: Infinity, 
        repeatDelay: 1.5
    }
};

const Contact = () => {
    const emblemImg = `/images/kphandev_icon${useColorModeValue('', '-dark')}.png`

    return (
        <Container>
            <Flex justify={'space-between'}>
                <MotionImage src={emblemImg} boxSize={'70px'} alt="logo" mr={5} animate={rockingAnimation} ></MotionImage>
                <Paragraph>Thank you for visiting! Please feel free to contact me for any questions!
                    <Grid mt="2vh" templateColumns={{ sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                        <GridItem w="100%">
                            <Link href="https://www.linkedin.com/in/kev-phan/" isExternal>
                                <Flex justify='center'>
                                    <Icon as={FaLinkedin} w={6} h={6} />
                                    <Text ml={3}>LinkedIn</Text>
                                </Flex>
                            </Link>

                        </GridItem>
                        <GridItem w="100%">
                            <Link href="https://github.com/kphanplan" isExternal>
                                <Flex justify='center'>
                                    <Icon as={FaGithub} w={6} h={6} />
                                    <Text ml={3}>Github</Text>
                                </Flex>
                            </Link>
                        </GridItem>
                        <GridItem w="100%">
                            <Link href="mailto:thekphantastic@gmail.com">
                                <Flex justify='center'>
                                    <Icon as={FaEnvelope} w={6} h={6} />
                                    <Text ml={3}>Gmail</Text>
                                </Flex>
                            </Link>
                        </GridItem>
                    </Grid>
                </Paragraph>
            </Flex>

        </Container>
    )

}



export default Contact