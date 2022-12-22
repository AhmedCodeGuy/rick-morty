import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick & Morty</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <Link href='/characters'>
          <img src='/logo.png' className={styles.logo} alt='logo' />
        </Link>

        <span>
          <Typography variant='h1'>Rick & Morty</Typography>
          <Typography variant='h4'>
            Learn all about rick and morty's TV Show characters
          </Typography>
          <br />
          <Button
            size='large'
            variant='outlined'
            onClick={() => {
              router.push('/characters')
            }}
          >
            Let's Go
          </Button>
        </span>
      </header>
    </div>
  )
}

export default IndexPage
