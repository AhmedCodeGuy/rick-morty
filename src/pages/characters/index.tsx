import { gql, useQuery } from '@apollo/client'
import {
  Breadcrumbs,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import CharactersList from '../../components/CharactersList'
import {
  changePageIndex,
  selectPageIndex,
} from '../../features/pageIndex/pageIndexSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const GET_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`

const footerStyles = {
  height: 60,
  marginTop: 20,
  padding: 10,
}

const breadcrumbsStyles = {
  marginTop: 20,
}

export default function HomePage() {
  const dispatch = useAppDispatch()
  const pageIndex = useAppSelector(selectPageIndex)

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: pageIndex },
  })

  if (loading) return <CircularProgress />
  if (error) return <p>Error : {error.message}</p>

  return (
    <Container maxWidth='xl'>
      <Breadcrumbs aria-label='breadcrumb' style={breadcrumbsStyles}>
        <Link href='/'>Home</Link>
      </Breadcrumbs>

      <Typography paddingTop={1} paddingBottom={1} variant='h2'>
        Characters
      </Typography>
      <CharactersList data={data.characters.results} />

      <Grid container justifyContent='center' style={footerStyles}>
        <Pagination
          onChange={(_, value) => dispatch(changePageIndex(value))}
          page={pageIndex}
          count={data.characters.info.pages}
          size='large'
        />
      </Grid>
    </Container>
  )
}
