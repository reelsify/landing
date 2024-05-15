import * as React from "react"
import { graphql } from "gatsby"
import { Space, Container, Section, FlexList, Text, Logo,Subhead, Claim } from "./ui"

export function LogoItem(props) {
  if (!props.image) return null

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  )
}

export default function LogoList(props) {
  console.log(props.claims)
  return (
    <Section >
      <Container >
        {props.text && (
          <Subhead center as="h3">
            {props.text}
          </Subhead>
        )}
        <Space size={4} />
        <FlexList gap={4} >
          {props.claims && props.claims.map(
            (claim,index) =>
                <li key={index}>
                  <Claim claim={claim}/>
                </li>
          )}
        </FlexList>
        <FlexList gap={4} variant="center">
          {props.logos && props.logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
    claims
  }
`
