import { Grid, Paper } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'

const imageDimension = 175
const linkStyles = { textDecoration: 'none' }
const paperStyles = {
  height: imageDimension,
  width: imageDimension,
  position: 'relative',
} as CSSProperties
const imageStyles = { borderRadius: 4 }

type Props = {
  character: {
    id: number
    image: string
  }
}

export default function CharcterListItem({ character }: Props) {
  const { id, image } = character || {}
  return (
    <Grid item role='listitem'>
      <Link href={`characters/${id}`} style={linkStyles}>
        <Paper style={paperStyles} elevation={5}>
          <Image style={imageStyles} alt='rick and morty' src={image} fill />
        </Paper>
      </Link>
    </Grid>
  )
}
