import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Flex justifyContent="center" alignItems="center" w="100%">
                <Image
                    src={thumbnail}
                    alt={title}
                    objectFit="cover" // Ensure the image covers the area
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
            </Flex>
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({
    children,
    href,
    title,
    thumbnail
}) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={href}
            scroll={false}
            cursor="pointer"
        >
            <Flex justifyContent="center" alignItems="center" w="100%">
                <Image
                    height={300}
                    loading="lazy"
                    objectFit="cover"
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
            </Flex>

            <LinkOverlay as="div" href={href}>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
        `}
    />
)