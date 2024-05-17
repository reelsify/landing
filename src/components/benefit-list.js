import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image"

function convertTo3ByN(array) {
  return Array.from({ length: Math.ceil(array.length / 3) }, (_, index) =>
    array.slice(index * 3, index * 3 + 3)
  )
}

export default function BenefitList(props) {
  let contentMatrix = convertTo3ByN(props.content)
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <StaticImage
        src="../assets/background-faqs.jpg"
        alt=""
        loading="lazy"
        width={1558}
        height={946}
        decoding="async"
        data-nimg="1"
        className="absolute top-100 right-0 max-w-none -translate-y-1/4 translate-x-[30%]"
        style={{ color: "transparent" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto lg:mx-0 text-center">
          {props.heading && (
            <h2
              id="faq-title"
              className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            >
              {props.heading}
            </h2>
          )}
          {props.text && (
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {props.text}
            </p>
          )}
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-row gap-8 lg:max-w-none"
        >
          {contentMatrix.map((row) => (
            <li>
              <ul role="list" className="flex flex-col gap-y-8 lg:flex-row">
                {row.map((element) => (
                  <li key={element.id} className="lg:max-w-xs mx-auto">
                    <GatsbyImage className="h-5 w-5" alt={element.image.alt} image={getImage(element.image.gatsbyImageData)} />
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {element.heading}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      {element.text}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      heading
      text
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
