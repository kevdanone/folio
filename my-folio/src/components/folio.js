import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Projet = styled.section`
  height:50vh;
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  background-color:#2e3141;
`


const Folio = ({ data }) => (
    <Projet>
      <h2>{data.folioTitle}</h2>
    </Projet>
  )
  
  Folio.propTypes = {
    data: PropTypes.object,
  }
  
  export default Folio