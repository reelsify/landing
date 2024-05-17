import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import BrandLogo from "./brand-logo"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter className="h-5 w-5"/>,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram className="h-5 w-5"/>,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook className="h-5 w-5"/>,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube className="h-5 w-5"/>,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub className="h-5 w-5"/>,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch className="h-5 w-5"/>,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `)

  const { links, meta, socialLinks, copyright } = data.layout.footer
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16" aria-hidden="true">
          <a
            className="mx-auto h-10 w-auto flex justify-center"
            aria-label="Home"
            href="/"
          >
            <BrandLogo />
          </a>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              {links &&
                links.map((link) => (
                  <li key={link.id} className="list-none">
                    <a
                      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      href={link.href}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
            </div>
          </nav>
        </div>
        <div className="mt-6 flex flex-col items-center border-t border-slate-400/10 py-10 md:flex-row-reverse md:justify-between">
          <div className="mt-12 sm:mt-6 flex gap-x-6">
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id} className="list-none">
                      <a
                        className="group"
                        href={url}
                        aria-label={`Reelsify on ${getSocialName(link)}`}
                      >
                        {getSocialIcon(link)}
                      </a>
                    </li>
                  )
                )
              })}
          </div>
          <div className="mt-12 sm:mt-6 flex gap-x-6 flex-col items-center md:flex-row-reverse md:justify-between">
            {meta &&
              meta.map((link) => (
                <li key={link.id} className="list-none">
                  <a href={link.href}>
                    <span className="text-sm text-slate-500">
                      {link.text}
                    </span>
                  </a>
                </li>
              ))}
            <span className="text-sm text-slate-500 sm:mt-1 mb-1">{copyright}</span>
          </div>
        </div>
      </div>
    </footer>
    // <Box as="footer" paddingY={4}>
    //   <Container>
    //     <Flex variant="start" responsive>
    //       <NavLink to="/">
    //         <VisuallyHidden>Home</VisuallyHidden>
    //         <BrandLogo />
    //       </NavLink>
    //       <Space />
    //       <FlexList>
    //         {socialLinks &&
    //           socialLinks.map((link) => {
    //             const url = getSocialURL(link)
    //             return (
    //               url && (
    //                 <li key={link.id}>
    //                   <IconLink to={url}>
    //                     <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
    //                     {getSocialIcon(link)}
    //                   </IconLink>
    //                 </li>
    //               )
    //             )
    //           })}
    //       </FlexList>
    //     </Flex>
    //     <Space size={5} />
    //     <Flex variant="start" responsive>
    //       <FlexList variant="start" responsive>
    //         {links &&
    //           links.map((link) => (
    //             <li key={link.id}>
    //               <NavLink to={link.href}>{link.text}</NavLink>
    //             </li>
    //           ))}
    //       </FlexList>
    //       <Space />
    //       <FlexList>
    //         {meta &&
    //           meta.map((link) => (
    //             <li key={link.id}>
    //               <NavLink to={link.href}>
    //                 <Text variant="small">{link.text}</Text>
    //               </NavLink>
    //             </li>
    //           ))}
    //       </FlexList>
    //       <Text variant="small">{copyright}</Text>
    //     </Flex>
    //   </Container>
    //   <Space size={3} />
    // </Box>
  )
}
