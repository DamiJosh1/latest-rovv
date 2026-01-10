
// src/pages/get-to-know-rovv/FAQSection.tsx
import { useState } from 'react'
import { Plus,X } from 'lucide-react'
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
    <section className="py-27 px-6  bg-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 font-sans font-bold bg-dark text-bg px-4 py-2 rounded-[40px] text-sm">
            FAQ
          </span>
        </div>
        <h2 className="text-xl md:text-4xl font-nohemi text-center font-bold md:mb-10 lg:mb-10">Frequently Asked Questions</h2>

        <div className='flex flex-col md:flex-row gap-8'>
          <div className=" w- md:1/2 space-y-4 text-bg">
                    {faqs.map((faq, i) => (
                      <div key={i} className={`bg-purple rounded-sm overflow-hidden ${openIndex === i ? 'bg-primary' : ''}`}>
                        <button
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-primary transition "
                        >
                          <span className="text-[12px] md:text-xl font-bold md:pr-8 lg:pr-8">{faq.q}</span>
                          {openIndex === i ? <X className="w-6 h-6 " /> : <Plus className="md:w-10 md:h-10" />}
                        </button>
                        {openIndex === i && (
                          <div className="px-8 pb-6 text-bg">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
          </div>
          <div className="w-full md:w-1/2 order-first md:order-last mt-10 md:mb-0">
            <img src={sideImg} alt="" className="w-full h-auto" />
          </div>
        </div>
       
        

        <div className="text-center mt-16">
          <p className="text-xl font-bold font-nohemi mb-6">Still have questions?</p>
          <p className="text-lg text-medium font-sans mb-8">Please contact our support team, we’re happy to help!</p>
          <button className="px-7 py-4 bg-primary rounded-xl font-bold text-bg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}