'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Something went wrong. Please try again.')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-4">
          Stay Connected
        </p>
        <h2 className="text-4xl md:text-5xl font-aston-script mb-6">
          Join Uncommon Sense
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Receive 10% off your first order, exclusive updates, and inspiration delivered to your inbox.
        </p>

        {isSubmitted ? (
          <div className="bg-secondary p-8 rounded-lg">
            <p className="text-lg italic mb-2">Welcome to Uncommon Sense.</p>
            <p className="text-sm text-muted-foreground">
              Check your inbox for your welcome gift!
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-secondary border-0 rounded-full px-6"
                required
              />
              <Button disabled={isLoading} className="inline-flex rounded-full items-center justify-center gap-2">
                {isLoading ? 'Subscribing...' : 'Subscribe'}
                {!isLoading && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />}
              </Button>
            </form>
            {error && (
              <p className="mt-3 text-sm text-destructive">{error}</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default NewsLetter