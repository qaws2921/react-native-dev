import React from 'react'
import type {FC} from 'react'
import {Text} from 'react-native'
import * as D from '../data'

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({person}) => {
  // const {person} = props
  return <Text>{JSON.stringify(person, null, 2)}</Text>
}

export default Person