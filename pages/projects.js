import { Container, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'


import mouseDark from '../public/images/kphandev_logo_dark.png'
import mouse from '../public/images/kphandev_logo.png'
import corn from '../public/images/e85_logo.png'

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
            <WorkGridItem id="e85" title="E85 Station Map" thumbnail={corn} href="https://github.com/kphanplan/e85_pumps">
              A niche, mobile-friendly web app for users to find E85 gas stations across the United States.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="portfolio" title="KPhan.dev" thumbnail={portfolioThumbnail} href="https://github.com/kphanplan/portfolio_2024">
              Responsive web app to host my portfolio and a place to express myself
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}


export default Projects
