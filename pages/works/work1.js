import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work1 = () => {
  return (
    <Layout titl="work">
      <Container>
        <Title>
          newsintea&apos;s homepage <Badge>2023</Badge>
        </Title>
        <P>This is the website you are looking at now.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="/">newsintea&apos;s homepage</Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Chakra UI, Three.js, Framer Motion</span>
          </ListItem>
          <ListItem>
            <Meta>Based</Meta>
            <Link href="https://www.craftz.dog/">
              Takuya Matsuyama&apos;s Homepage
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbnailWork1.png" />
      </Container>
    </Layout>
  )
}

export default Work1
