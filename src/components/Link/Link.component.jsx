import React from "react";
import styled from 'styled-components'

const InnerLink = styled.a `
    color: #61dafb
`

const Link = ({ url, title }) => {
  return (
    <InnerLink href={url} target="_blank" rel="noopener noreferrer" className='App-link'>
      {title}
    </InnerLink>
  );
};

export default Link;
