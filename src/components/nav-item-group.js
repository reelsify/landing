import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Flex, FlexList, NavButtonLink, NavLink } from "./ui"
import Caret from "./caret"


export default function NavItemGroup({ name, navItems }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [popupVisible, setPopupVisible] = React.useState(false)
  const onGroupButtonClick = React.useCallback(() => {
    if (!isOpen) {
      setIsOpen(true)
      setPopupVisible(true)
    } else {
      // ensures that sub-menu closes when no animation is available
      setPopupVisible(false)
    }
  }, [isOpen])

  React.useEffect(() => {
    // crude implementation of animating the popup without a library
    const popupBox = document.querySelector(`[data-id="${name}-popup-box"]`)
    const onAnimationEnd = ({ animationName }) => {
      if (animationName === `zoomOutDown`) {
        setIsOpen(false)
      }
    }
    if (popupBox) {
      popupBox.addEventListener("animationend", onAnimationEnd)
      return () => {
        popupBox.removeEventListener("animationend", onAnimationEnd)
      }
    }
  }, [isOpen, name])

  React.useEffect(() => {
    // hide menu when clicked outside
    const handleClickOutside = (event) => {
      const wrapper = document.querySelector(
        `[data-id="${name}-group-wrapper"]`
      )
      if (
        
        isOpen &&
        wrapper &&
        !wrapper.contains(event.target)
      ) {
        onGroupButtonClick()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [name, isOpen, onGroupButtonClick])

  return (
    <Flex
      data-id={`${name}-group-wrapper`}
      variant="columnStart"
      gap={4}

    >
      <NavButtonLink
        onClick={onGroupButtonClick}
      
      >
        <Flex gap={1} >
          {name}
          <Caret direction={isOpen ? "up" : "down"} />
        </Flex>
      </NavButtonLink>
      {isOpen && (
        <Box
          data-id={`${name}-popup-box`}
          
        >
          <FlexList
            variant="columnStart"
            gap={2}
            
          >
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <NavLink to={navItem.href} >
                  <Flex variant="start" gap={3}>
                    {navItem.icon && (
                      <GatsbyImage
                        alt={navItem.icon.alt}
                        image={getImage(navItem.icon.gatsbyImageData)}
                  
                      />
                    )}
                    <Flex variant="columnStart" marginY={1} gap={0}>
                      <Box as="span" >
                        {navItem.text}
                      </Box>
                      {!!navItem.description && (
                        <Box as="p" >
                          {navItem.description}
                        </Box>
                      )}
                    </Flex>
                  </Flex>
                </NavLink>
              </li>
            ))}
          </FlexList>
        </Box>
      )}
    </Flex>
  )
}
