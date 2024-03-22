import { Container, Heading, SimpleGrid, useColorModeValue, Tag, HStack } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'


import mouseDark from '../public/images/kphandev_logo_dark.png'
import mouse from '../public/images/kphandev_logo.png'
import corn from '../public/images/e85_logo.png'

const TechTag = ({ children }) => {
  return <Tag size="sm" m={1} borderRadius="full">{children}</Tag>
}

const Projects = () => {
  const portfolioThumbnail = useColorModeValue(mouse, mouseDark)

  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="e85" title="E85 Road Map" thumbnail={corn} href="https://www.e85roadmap.com/">
              Mobile-focused web app that allows users to plan a trip and find E85 fuel stations along the route!
            </WorkGridItem>
            <HStack justify="space-between">
              <TechTag>React</TechTag>
              <TechTag>Next.js</TechTag>
              <TechTag>Mapbox</TechTag>
              <TechTag>Postgres</TechTag>
            </HStack>
          </Section>
          <Section>
            <WorkGridItem id="portfolio" title="KPhan.dev" thumbnail={portfolioThumbnail} href="https://github.com/kphanplan/portfolio_2024">
              Responsive web app to host my portfolio and to showcase my projects!
            </WorkGridItem>
            <HStack justify="space-between">
              <TechTag>React</TechTag>
              <TechTag>Next.js</TechTag>
              <TechTag>Chakra</TechTag>
              <TechTag>Three.js</TechTag>
            </HStack>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}


export default Projects
