import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    border 1px solid ${cores.branca};
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    width: 95%;
    }

`
