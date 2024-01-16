import React from 'react';
import {
  Box,
  chakra,
  Image,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';

const milestones = [
  {
    id: 1,
    date: 'Nov 2022 - Dec 2023',
    title: 'Document Crunch Inc.',
    role: 'Full Stack Developer',
    description: `for a fast-paced, fully-remote company building an AI-assisted software platform for evaluating construction contracts and provisions.`,
    image: '/images/dc_logo.webp',
  },
  {
    id: 2,
    date: 'Apr 2021 - Nov 2022',
    title: 'Emory Solutions LLC.',
    role: 'Full Stack Developer',
    description: ` for a local agency in Northwest Arkansas (NWA) specializing in building custom software, data analytics, and eCommerce tools.`,
    image: '/images/es_logo.png'
  },
  {
    id: 3,
    date: 'Nov 2020 - Apr 2021',
    title: 'PNC Bank',
    role: 'Software Associate',
    description: 'at a Fortune 500 bank orchestrating deployments, documentation, team coordination, and certification management for everday operations.',
    image: '/images/pnc_logo.jpg'
  },
  {
    id: 4,
    date: 'Jul 2020 - Oct 2020',
    title: 'Tech Elevator',
    role: 'Graduate',
    description: 'from a Coding bootcamp that teaches students the fundamentals of software development and matches them with employers.',
    image: '/images/te_logo.png'
  },
  {
    id: 5,
    date: 'May 2019',
    role: 'Graduate',
    title: 'Graduated Ohio State University',
    description: 'from Ohio State with a Bachelor of Science in Nutrition Science',
    image: '/images/osu_logo.png'
  }
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <div maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />
              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </div>
  );
};

const Card = ({ id, title, role, description, date, image }) => {
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#000000', '#ffffff')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Image src={image} boxSize={useBreakpointValue({ base: "150px", md: "150px" })} objectFit="cover" alt="" borderRadius={'5px'} />
        <VStack spacing={3} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">{title}</chakra.h1>
          <Text fontSize="1xl" w="100%">{date}</Text>
          <Text fontSize="md">
            <u>{role}</u> {description}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.700', 'whiteAlpha.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.700', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;