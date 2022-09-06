import React from 'react'
import { SvgXml } from 'react-native-svg'

import { Icons } from '@/constants/images'
import { Metrics } from '@/theme'

interface Props {
  image: ValueOf<typeof Icons>,
  width?: number
  height?: number
  color?: string
}

const SvgIcon = ({
  image,
  width = Metrics.smallIconHeight,
  height = Metrics.smallIconHeight,
  color,
}: Props): JSX.Element => (
  <SvgXml width={width} height={height} xml={image(color)} />
)

export default SvgIcon
