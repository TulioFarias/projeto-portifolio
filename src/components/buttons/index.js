import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

import { Button } from './style'
export function Buttons({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>
}

Buttons.propTypes = {
  children: propTypes.string
}
