import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile.js'
import Profile_m from './qcomps/profile_mistake.js'
import First_comp from './qcomps/firstcomp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
import Profile_P from './components/profile_props.js'
import Gallery from './qcomps/gallery_props.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <Profile_m />
        <First_comp />
        <Bio />
        <TodoList />
        <Profile_P />
        <Gallery />
    </div>
  )
}
