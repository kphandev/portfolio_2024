import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const animation = `
    @keyframes animation {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        75% { transform: rotate(10deg); }
    }
`;

const LogoBox = styled.span`
  ${animation}
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 50px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    animation: animation 0.5s ease-in-out 2;
  }
`;

const Logo = () => {
    const emblemImg = `/images/kphandev_icon${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <LogoBox>
                <Image src={emblemImg} width={40} height={40} alt="logo"></Image>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold"
                    fontSize="xl"
                    ml={5}
                >
                    KPhan.dev
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
