import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import ChevronRight from "../components/chevron-right"
import SEOHead from "../components/head"

export default function NotFound() {
  return (
    <Layout>
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Heading variant="mega" >
              404
            </Heading>
            <Heading as="h1">Page not found</Heading>
            <Flex variant="column" gap={0}>
              <Text variant="lead" >
                Sorry! We couldn’t find the page you were looking for.
              </Text>
              <Link to="/" >
                <span>Back to home</span>
                <ChevronRight  />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}
