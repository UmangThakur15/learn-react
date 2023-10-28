import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile.js'
import Profile_m from './qcomps/profile_mistake.js'
import First_comp from './qcomps/firstcomp.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <Profile_m />
        <First_comp />
    </div>
  )
}
