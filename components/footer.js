import { Box, Divider, Link, Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Divider />
      <Box as="footer" w="100%" p={5} align="center">
        <Text fontSize="sm">
          This website is built based on the&nbsp;
          <Link href="https://www.craftz.dog/" target="_blank">
            Takuya Matsuyama's website{' '}
          </Link>
        </Text>
      </Box>
    </>
  )
}

export default Footer
