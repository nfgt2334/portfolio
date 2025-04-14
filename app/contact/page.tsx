'use client'

import { Suspense } from 'react'
import { ContactForm } from './_components/ContactForm'

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  )
}
