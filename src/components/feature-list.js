import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Heading, Text } from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Container width="fullbleed">
      <Box radius="large">
        <Box center paddingY={5}>
          <Heading>
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        {props.content.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
