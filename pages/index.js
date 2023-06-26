import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Link from 'next/link'

const Page = () => {
  return (
    <Layout>
      <Container zIndex={2}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello! こんにちは！ ¡Hola! 您好! 안녕하세요!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Shintaro Yonemoto
            </Heading>
            <p>Web developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            aligin="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            Shintaro is a third year engineer after graduation working as a web
            engineer at an IT company in Tokyo. He is mainly in charge of
            front-end and interested in a wide range of technologies, especially
            server-side languages.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Yokohama(横浜), Japan.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            B.S., Design Engineering, Shibaura Institute of
            Technology(芝浦工業大学デザイン工学科)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Join the current company.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Likes
          </Heading>
          Walking, Coffee, Reading books.
        </Section>

        <Section delay1={0.3}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/newsintea" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @newsintea
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://twitter.com/settings/your_twitter_data/account"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @sai
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/newsintea_walk/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @newsintea_walk
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
