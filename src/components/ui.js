import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import isAbsoluteURL from "is-absolute-url"
import * as React from "react"

export const cx = (...args) => args.filter(Boolean).join(" ")

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) {
  return <Component {...props} />
}

export function Container({ width = "normal", ...props }) {
  return <Base  {...props} />
}

export function Flex({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  marginY,
  alignItems,
  cx: _cx = [],
  ...props
}) {
  return (
    <Base
      {...props}
    />
  )
}

export function Box({
  width = "full",
  background,
  padding,
  paddingY,
  radius,
  center = false,
  order,
  cx: _cx = [],
  ...props
}) {
  return (
    <Base
      {...props}
    />
  )
}

export function FlexList(props) {
  return <Flex as="ul"  {...props} />
}

export function List(props) {
  return <Base as="ul"  {...props} />
}

export function Space({ size = "auto", ...props }) {
  return <Base  {...props} />
}

export function Nudge({ left, right, top, bottom, ...props }) {
  return (
    <Base
      
      {...props}
    />
  )
}

export function Section(props) {
  return <Box as="section" {...props} />
}

export function Text({
  variant = "body",
  center = false,
  bold = false,
  ...props
}) {
  return (
    <Base
      {...props}
    />
  )
}

export function SuperHeading({ ...props }) {
  return <Text as="h1" variant="superHeading" {...props} />
}

export function Heading({ ...props }) {
  return <Text as="h2" variant="heading" {...props} />
}

export function Subhead({ ...props }) {
  return <Text as="h3" variant="subhead" {...props} />
}


export function Link({ to, href, ...props }) {
  const url = href || to || ""
  if (isAbsoluteURL(url)) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={url} {...props} />
    )
  }
  return <GatsbyLink to={url}  {...props} />
}

export function NavLink({ ...props }) {
  return <Base as={Link}  {...props} />
}

export function NavButtonLink({ ...props }) {
  return <Base as="button"  {...props} />
}

export function Button({ variant = "primary", ...props }) {
  return <Base as={Link}  {...props} />
}

export function ButtonList({ links = [], reversed = false, ...props }) {
  const getVariant = (i) => {
    if (reversed) {
      return i === 0 ? "reversed" : "linkReversed"
    }
    return i === 0 ? "primary" : "link"
  }
  return (
    <FlexList marginY={4} {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            <Button href={link.href} variant={getVariant(i)}>
              {link.text}
            </Button>
          </li>
        ))}
    </FlexList>
  )
}

export function CTALink(props) {
  return <Base as={Link}  {...props} />
}

export function LinkList({ links = [], ...props }) {
  return (
    <FlexList {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            <CTALink href={link.href}>{link.text}</CTALink>
          </li>
        ))}
    </FlexList>
  )
}

export function Blockquote(props) {
  return <Base as="blockquote"  {...props} />
}

export function Avatar({ alt, image }) {
  return (
    <GatsbyImage alt={alt} image={getImage(image)}  />
  )
}

export function Logo({ alt, image, size = "small" }) {
  return (
    <GatsbyImage
      alt={alt}
      image={getImage(image)}
    />
  )
}

export function Kicker({ ...props }) {
  return <Text variant="kicker" {...props} />
}

export function Icon({ alt, image, size = "medium" }) {
  return (
    <GatsbyImage
      alt={alt}
      image={getImage(image)}
      
    />
  )
}

export function IconLink(props) {
  return <NavLink  {...props} />
}

export function InteractiveIcon(props) {
  return <Base as="button" {...props} />
}

export function VisuallyHidden(props) {
  return <Base as="span"  {...props} />
}

export function BlockLink(props) {
  return <Link  {...props} />
}
