import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'
import VoxelSai from '../voxel-sai'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="newsintea's homepage" />
        <meta name="author" content="Shintaro Yonemoto" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>newsintea - Homepage</title>
      </Head>
      <Navbar path={router.asPath}></Navbar>

      <Container maxW="container.md" minH="calc(100vh - 61px)" pt={14}>
        <NoSsr>
          <VoxelSai />
        </NoSsr>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
