import * as React from "react"
import { graphql } from "gatsby"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <section id="features" aria-label="Features for running your books" className="relative overflow-hidden bg-white pb-28 pt-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{props.heading}</h2>
          {props.text && <p className="mt-6 text-lg tracking-tight text-slate-700">{props.text}</p>}
        </div>
        {props.content.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    heading
    kicker
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
