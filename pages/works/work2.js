import { Container, Text } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'

import Layout from '../../components/layouts/article'

const Work2 = () => {
  return (
    <Layout titl="work">
      <Container>
        <Title>Work2</Title>
        <Text mb={2}>Coming soon...</Text>
        <WorkImage src="/images/works/thumbnailWork2.png" />
      </Container>
    </Layout>
  )
}

export default Work2
