import React from "react"
import { SideProfile } from "./Profile"
import { TagCloud } from "./TagCloud"
import { SideLinks } from "./Link"
import styled from "styled-components"

const SideGrid = styled.div`
  display: grid;
  grid-gap: 1em;
`

export const Side = () => {
  return (
    <SideGrid>
      <SideProfile />
      <SideLinks />
      <TagCloud />
    </SideGrid>
  )
}
