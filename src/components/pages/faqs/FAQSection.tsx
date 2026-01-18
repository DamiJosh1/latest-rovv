// src/pages/get-to-know-rovv/FAQSection.tsx
import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import sideImg from '../../../assets/images/new--1.png'

const faqs = [
  { q: "How does ROVV work?", a: "ROVV connects riders and drivers seamlessly through a simple mobile app..." },
  { q: "How do I become a ROVV driver?", a: "Sign up online, submit documents..." },
  { q: "Can I schedule a ride ahead of time?", a: "Yes! You can book rides in advance..." },
  { q: "How are fares calculated on ROVV?", a: "Fares are transparent and based on..." },
  { q: "What safety measures does ROVV provide?", a: "We have ride OTP, SOS button, 24/7 support..." },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-27 px-6 bg-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 font-nohemi font-medium bg-back text-dark px-4 py-2 rounded-[40px] text-sm">
            FAQ
          </span>
        </div>
        <h2 className="text-xl md:text-4xl font-nohemi text-center font-bold md:mb-10 lg:mb-10 text-dark">
          Frequently Asked Questions
        </h2>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* FAQ Accordion List */}
          <div className="w-full md:w-1/2 space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-sm overflow-hidden transition-all duration-300 ${
                  openIndex === i 
                    ? 'bg-primary text-white' // Changes to Purple when clicked
                    : 'bg-purple border border-gray-100 text-bg' // Default style when closed
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-colors"
                >
                  <span className="text-[14px] md:text-xl font-bold pr-4">
                    {faq.q}
                  </span>
                  {openIndex === i ? (
                    <X className="w-6 h-6 shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-bg" />
                  )}
                </button>

                {/* Answer/Description Area */}
                {openIndex === i && (
                  <div className="px-8 pb-6 text-sm md:text-base font-medium leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Side Image */}
          <div className="w-full md:w-1/2 order-first md:order-last mt-10 md:mt-0">
            <img src={sideImg} alt="FAQ Illustration" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl font-bold font-nohemi mb-2 text-dark">Still have questions?</p>
          <p className="text-lg text-gray-600 font-sans mb-8">Please contact our support team, we’re happy to help!</p>
          <button className="px-10 py-4 bg-primary rounded-xl font-bold text-white hover:opacity-90 transition active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}