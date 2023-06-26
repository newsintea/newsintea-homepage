import { Container, Heading, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4}>
          Posts
        </Heading>
        <Text>Coming soon ...</Text>
        {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="Post1" title="Post1" thumbnail={thumbnailPost1}>
              This is Post1
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="post2" title="post2" thumbnail={thumbnailpost2}>
              This is post2
            </WorkGridItem>
          </Section>
        </SimpleGrid> */}
      </Container>
    </Layout>
  )
}

export default Posts
