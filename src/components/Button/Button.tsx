import React from 'react'

export interface ButtonProps {
  label: 'label 1' | 'label 2' | 'label 3'
}

function Button({ label }: ButtonProps) {
  return <button>{label}</button>
}

export default Button
