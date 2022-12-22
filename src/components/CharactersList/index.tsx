import { Grid } from '@mui/material'
import CharcterListItem from '../CharcterListItem'

export type character = {
  id: number
  name: string
  image: string
}
type Props = {
  data: character[]
}

export default function CharactersList({ data }: Props) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      role='list'
    >
      {data?.map((character: any) => {
        return <CharcterListItem key={character.id} character={character} />
      })}
    </Grid>
  )
}
