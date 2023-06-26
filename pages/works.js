import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbnailWork1 from '../public/images/works/thumbnailWork1.png'
import thumbnailWork2 from '../public/images/works/thumbnailWork2.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="work1"
              title="newsintea's homepage"
              thumbnail={thumbnailWork1}
            >
              This is newsintea's homepage
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="work2" title="work2" thumbnail={thumbnailWork2}>
              This is work2
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
