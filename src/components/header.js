import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SlMenu } from "react-icons/sl"
import { GrClose } from "react-icons/gr"
//import NavItemGroup from "./nav-item-group"
import BrandLogo from "./brand-logo"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
          cta {
            id
            href
            text
          }
        }
      }
    }
  `)

  const { navItems, cta } = data.layout.header
  const [isOpen, setOpen] = React.useState(false)

  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" href="/">
              <BrandLogo />
            </a>
            <div className="hidden md:flex md:gap-x-6">
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id} className="list-none">
                    {navItem.navItemType === "Group" ? (
                      // <NavItemGroup
                      //   name={navItem.name}
                      //   navItems={navItem.navItems}
                      // />
                      <></>
                    ) : (
                      <a
                        className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        href={navItem.href}
                      >
                        {navItem.text}
                      </a>
                    )}
                  </li>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/* <div className="hidden md:block">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/register"
              >
                <span>
                  Get started <span className="hidden lg:inline">today</span>
                </span>
              </a>
            </div> */}
            {cta && (
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                color="blue"
                variant="solid"
                href={cta.href}
              >
                {cta.text}
              </a>
            )}
            <div className="-mr-1 md:hidden">
              <div data-headlessui-state="">
                <button
                  className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                  aria-label="Toggle Navigation"
                  type="button"
                  aria-expanded="false"
                  onClick={() => {
                    if (isOpen === false) {
                      setOpen(true)
                    } else {
                      setOpen(false)
                    }
                  }}
                >
                  <div
                    className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    {isOpen === true ? <GrClose /> : <SlMenu />}
                  </div>
                </button>
              </div>
              {isOpen && (
                <div
                  class="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100"
                  tabindex="-1"
                  data-open=""
                  // style="--button-width: 32px;"
                >
                  {navItems &&
                    navItems.map((navItem) => (
                      <li key={navItem.id} className="list-none">
                        {navItem.navItemType === "Group" ? (
                          // <NavItemGroup
                          //   name={navItem.name}
                          //   navItems={navItem.navItems}
                          // />
                          <></>
                        ) : (
                          <a class="block w-full p-2" href={navItem.href}>
                            {navItem.text}
                          </a>
                        )}
                      </li>
                    ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
