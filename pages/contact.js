import { Container } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section';
import { Grid, GridItem, Link, Text, Icon, Flex, useColorModeValue, chakra, useBreakpointValue } from '@chakra-ui/react';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionImage = chakra(motion.img);
const rockingAnimation = {
    rotate: [0, -10, 0, -10, 0],
    transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.5
    }
};

const Contact = () => {
    const variant = useBreakpointValue({ base: 'mobile', md: 'desktop' });
    const emblemImg = `/images/kphandev_icon${useColorModeValue('', '-dark')}.png`

    const SocialLink = ({ href, label, icon }) => {
        return (
            <Link href={href} isExternal>
                <Flex justify='center'>
                    <Icon as={icon} w={6} h={6} />
                    {variant === 'desktop' && <Text ml={3}>{label}</Text>}
                </Flex>
            </Link>
        );
    };

    return (
        <Section delay={0.1}>
            <Container>
                <Flex justify={'space-between'}>
                    <MotionImage src={emblemImg} boxSize={'70px'} alt="logo" mr={5} animate={rockingAnimation} />
                    <Paragraph>Thank you for visiting! Please feel free to contact me for any questions!</Paragraph>
                </Flex>
                <Grid mt="2vh" templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }} gap={{ base: 2, md: 6 }}>
                    <GridItem w="100%">
                        <SocialLink href="https://www.linkedin.com/in/kphandev/" label="LinkedIn" icon={FaLinkedin} />
                    </GridItem>
                    <GridItem w="100%">
                        <SocialLink href="https://github.com/kphandev" label="Github" icon={FaGithub} />
                    </GridItem>
                    <GridItem w="100%">
                        <SocialLink href="mailto:thekphantastic@gmail.com" label="Gmail" icon={FaEnvelope} />
                    </GridItem>
                </Grid>
            </Container>
        </Section>

    )
}

export default Contact