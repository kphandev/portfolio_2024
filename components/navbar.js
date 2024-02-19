import Logo from './logo'
import NextLink from 'next/link'
import {
    Box,
    Container,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#202023980')}
            style={{ backdropFilter: 'blur(5px' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                {/* Logo component */}
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo></Logo>
                    </Heading>
                </Flex>

                {/* Desktop Menu */}
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/" path={path}>home</LinkItem>
                    <LinkItem href="/about" path={path}>about</LinkItem>
                    <LinkItem href="/experience" path={path}>experience</LinkItem>
                    <LinkItem href="/projects" path={path}>projects</LinkItem>
                    <LinkItem href="/contact" path={path}>contact</LinkItem>
                </Stack>

                {/* Hamburger Menu */}
                <Box flex={1} align="right">
                    <ThemeToggleButton></ThemeToggleButton>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }} >
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="options"
                            ></MenuButton>
                            <MenuList>
                                <Link as={NextLink} href="/">
                                    <MenuItem>home</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/about">
                                    <MenuItem>about</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/experience">
                                    <MenuItem>experience</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/projects">
                                    <MenuItem>projects</MenuItem>
                                </Link>
                                <Link as={NextLink} href="/contact">
                                    <MenuItem>contact</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar