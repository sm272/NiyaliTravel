import { Hero } from '@/components/hero'
import { FeaturedDestinations } from '@/components/featured-destinations'
import { PopularExperiences } from '@/components/popular-experiences'
import { AgentShowcase } from '@/components/agent-showcase'
import { NewsletterSignup } from '@/components/newsletter-signup'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <PopularExperiences />
      <AgentShowcase />
      <NewsletterSignup />
    </>
  )
}