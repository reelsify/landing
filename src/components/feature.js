import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GrFormNextLink } from "react-icons/gr"

export default function Feature(props) {
  return (
    <div className="overflow-hidden sm:py-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="mx-auto mt-5 md:mt-0 rounded-xl shadow-xl ring-1 ring-gray-400/10 
        grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
        lg:max-w-none lg:grid-cols-2 bg-slate-100"
        >
          <div className="m-2 p-1 lg:m-8 lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                {props.kicker}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {props.heading}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {props.text}
              </p>
              {props.links && props.links.length > 0 && (
                <div className="mt-6">
                  {" "}
                  <a
                    className="text-blue-600 font-semibold"
                    href={props.links[0].href}
                  >
                    {props.links[0].text} <GrFormNextLink className="inline" />
                  </a>
                </div>
              )}
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl> */}
            </div>
          </div>
          <div className="-mt-8 md:mt-0 px-4 md:px-0 py-4 lg:py-8 rounded-b-xl lg:rounded-r-xl bg-gradient-to-b lg:bg-gradient-to-r
        from-slate-100 via-blue-100 to-blue-800 via-15% lg:via-30%">
            {props.image && (
              <GatsbyImage
                image={getImage(props.image.gatsbyImageData)}
                alt={props.image.alt}
                className={
                  "max-w-lg rounded-xl  sm:w-[57rem] md:-ml-4 lg:-ml-0 "
                }
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
      </div>
    </div>
    // <Section padding={4} >
    //   <Container>
    //     <Flex gap={4} variant="responsive">
    //       <Box width="half" order={props.flip ? 1 : null}>
    //         {props.image && (
    //           <GatsbyImage
    //             alt={props.image.alt}
    //             image={getImage(props.image.gatsbyImageData)}
    //           />
    //         )}
    //       </Box>
    //       <Box width="half">
    //         <Subhead>
    //           {props.heading}
    //         </Subhead>
    //         <Text variant="lead">{props.text}</Text>
    //         <ButtonList links={props.links} />
    //       </Box>
    //     </Flex>
    //   </Container>
    // </Section>
  )
}

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    heading
    kicker
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
