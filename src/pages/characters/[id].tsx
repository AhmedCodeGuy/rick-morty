import { gql, useQuery } from '@apollo/client'
import {
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { height } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'

const GET_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      image
      status
      species
      gender
      location {
        name
        type
        dimension
      }
      origin {
        name
        type
        dimension
      }
    }
  }
`
const imageDimension = 550

const breadcrumbsStyles = {
  marginTop: 20,
}

const cardStyles = {
  display: 'flex',
}

function Info({ label, value }) {
  if (value) {
    return (
      <Grid item xs={12} md={6}>
        <Typography>{label}</Typography>
        <Typography variant='h6'>{value}</Typography>
      </Grid>
    )
  }
}

export default function Character() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  })

  if (loading) return <CircularProgress />
  if (error) return <p>Error : {error.message}</p>

  const { name, image, status, species, gender, location, origin } =
    data.character

  const color = status === 'Alive' ? 'primary' : 'default'
  return (
    <Container maxWidth='xl'>
      <Breadcrumbs aria-label='breadcrumb' style={breadcrumbsStyles}>
        <Link href='/'>Home</Link>
        <Link href='/characters'>Characters</Link>
        <Typography>{id}</Typography>
      </Breadcrumbs>

      <Typography paddingTop={1} paddingBottom={1} variant='h2'>
        Character
      </Typography>

      <Card sx={cardStyles} elevation={1}>
        <CardMedia
          component='img'
          src={image}
          sx={{ maxWidth: imageDimension, maxHeight: imageDimension }}
        />
        <CardContent>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Grid item xs={12}>
              <Typography variant='h4'>{name}</Typography>
              <Stack direction='row' spacing={1}>
                {status !== 'unknown' && <Chip color={color} label={status} />}
                {species !== 'unknown' && <Chip label={species} />}
                {gender !== 'unknown' && <Chip label={gender} />}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Divider variant='fullWidth' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5'>Location</Typography>
            </Grid>
            <Info label='name' value={location.name} />
            <Info label='type' value={location.type} />
            <Info label='dimension' value={location.dimension} />
            <Grid item xs={12}>
              <Divider variant='fullWidth' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5'>Origin</Typography>
            </Grid>
            <Info label='name' value={origin.name} />
            <Info label='type' value={origin.type} />
            <Info label='dimension' value={origin.dimension} />
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}
