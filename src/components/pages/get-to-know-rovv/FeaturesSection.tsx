// src/pages/get-to-know-rovv/FeaturesSection.tsx
import Image from '../../../assets/images/safety-full.png'
import { motion } from 'framer-motion'
import {
  Wallet,
  Gavel,
  CalendarCheck,
  Siren,
  ShieldCheck,
  MapPin,
  Clock,
  WifiOff,
  Navigation,
  Share2,
  Star,
  Gift,
  Users
} from 'lucide-react'

const features = [
  { icon: Wallet, title: "ROVV Wallet", desc: "Pay seamlessly and enjoy instant refunds with your in-app wallet" },
  { icon: Gavel, title: "Bid Your Fare", desc: "Name your price and get matched with a driver who accepts your bid" },
  { icon: CalendarCheck, title: "Multi-Ride Booking", desc: "Book several rides at once and manage them easily in one place" },
  { icon: Siren, title: "SOS Alert Button", desc: "Stay protected with an instant emergency alert built into your app" },
  { icon: ShieldCheck, title: "Ride OTP Verification", desc: "Confirm the right driver every time with secure OTP ride checks" },
  { icon: MapPin, title: "Multi-Stop Rides", desc: "Add multiple stops and complete your journey in one smooth trip" },
  { icon: Clock, title: "Schedule Rides", desc: "Book ahead and ride exactly when you need to" },
  { icon: WifiOff, title: "Offline Booking", desc: "Request a ride even with low or no internet connection" },
  { icon: Navigation, title: "Real-Time Tracking", desc: "Track your driver’s location live location from pickup to destination" },
  { icon: Share2, title: "Share Ride Link", desc: "Share your live trip link so loved ones can follow your journey" },
  { icon: Star, title: "Rating & Feedback System", desc: "Rate trips easily and help us improve your experience" },
  { icon: Gift, title: "Referral Rewards", desc: "Invite friends and earn bonuses with every successful referral" },
  { icon: Users, title: "Pool Ride", desc: "Share a ride with others heading the same way and save money" },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-7">
          <span className="inline-block px-4 py-1 bg-dark text-bg text-sm font-semibold rounded-full mb-4">
            App Features
          </span>
          <h2 className="text-[17px] md:text-6xl lg:text-4xl font-nohemi font-bold text-dark">
            Tools That Power Easy, Reliable Movement
          </h2>
        </div>


       
        {/* Layout: Image fixed on right, list scrolls on left */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-start">
           {/* Fixed Girl Image (Desktop only) */}
          <div className="w-full md:order-2 lg:order-2">
            <img
              src={Image}
              alt="Mission"
              className="w-full h-auto object-cover transition-all duration-900 ease-in-out hover:scale-110"
            />
          </div>
          {/* Scrollable Features List */}
          <div className="space-y-8 lg:max-h-screen lg:overflow-y-auto scrollbar-hide lg:pb-32 flex flex-col">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-5 group"
              >
                <div className="shrink-0 w-12 h-12 bg-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-purple group-hover:text-bg transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-medium  font-bold font-sans leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          


        </div>
      </div>
    </section>
  )
}