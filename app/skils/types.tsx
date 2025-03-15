import { IconType } from 'react-icons'

export type Skill = {
  name: string
  icon: IconType
  color: string
  passedYear: string
  modifier: string
}

export type DisplayForm = {
  isShowModal: boolean
}
