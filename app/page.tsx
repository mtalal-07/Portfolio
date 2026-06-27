'use client'

import { useEffect, useRef } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Work from '@/components/work'
import Skills from '@/components/skills'
import Journey from '@/components/journey'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  const revealsRef = useRef<NodeListOf<Element> | null>(null)

  useEffect(() => {
    // Intersection Observer for reveal on scroll
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    revealsRef.current = document.querySelectorAll('.reveal-on-scroll')
    revealsRef.current.forEach((el) => {
      observer.observe(el)
    })

    // Sticky header logic
    let lastScroll = 0
    const header = document.querySelector('header')
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (header) {
        if (currentScroll > lastScroll && currentScroll > 100) {
          header.style.transform = 'translateY(-100%)'
        } else {
          header.style.transform = 'translateY(0)'
        }
        lastScroll = currentScroll
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      revealsRef.current?.forEach((el) => {
        observer.unobserve(el)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="pt-32">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
