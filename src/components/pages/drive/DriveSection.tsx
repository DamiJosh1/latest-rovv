// src/pages/get-to-know-rovv/BecomeDriverSection.tsx
import { ArrowRightIcon } from 'lucide-react'
import Image from '../../../assets/images/new- (5).png'

export default function DriveSection() {
  const steps = [
    {title:"Sign Up Online ", desc: " Fill out the registration form"},
    {title:"Verification & Training", desc: " Submit documents and attend a short onboarding"},
    {title:"Activate Your Account", desc: "Get approved and start receiving trips"},
    {title:"Start Earning", desc: "Drive on your own schedule and keep 100% of your income"},
  ]

  const requirements = ["Valid Driver's License", "Vehicle Inspection", "Proof of Insurance", "Background Check"]

  return (
    <section className="py-15 px-4 md:px-6 mt-10 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-dark text-bg font-bold rounded-full mb-4">
            Drive with ROVV
          </span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-nohemi text-dar" >Become a ROVV Driver</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div className='relative w-full lg:w-full'>
            <img
                  src={Image}
                  alt="Mission"
                  className="w-full h-auto object-contain md:translate-x-30 md:w-[70%] transition-all duration-900 ease-in-out hover:scale-80"
            />
          </div>

          <div>
            <div className="space-y-6 mb-8">
              {steps.map((step, i) => (
                <div key={i} className="flex w-full xl:w-full md:flex-row gap-4 md:w-[70%] md:translate-x-30 border border-light rounded-2xl px-5 py-4 shadow-md">
                  <div className="text-3xl font-black w-15 h-15 sm:w-15 sm:h-15 bg-light items-center justify-center flex rounded-xl text-medium">0{i + 1}</div>
                <div>
                  <h3 className="text-[16px] md:text-xl font-bold  text-dark mb-1">{step.title}</h3>
                  <p className="font-sans font-bold text-[10px] md:text-sm text-medium w-full xl:w-90 leading-snug">{step.desc}</p>
                </div>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-dark font-nohemi md:translate-x-5 text-center mb-4 mt-9 xl:text-left xl:ml-195 ">Requirements</h3>
      <div className='grid grid-cols-1 xl:grid-cols-2 '>
            <div className="mb-10">
                  
                  <div className="space-y-2 md:w-[50%] md:translate-x-50 lg:translate-x-0">
                    {requirements.map((req, i) => (
                      <div key={i} className="flex ml:0 xl:ml-140 items-center w-full  xl:w-70 gap-4 bg-purple text-bg rounded-sm py-4 px-6">
                        <ArrowRightIcon className="w-6 h-6 rounded-sm text-purple bg-bg" />
                        <span className="font-medium ">{req}</span>
                      </div>
                    ))}
                  </div>
            </div>
          <div className="w-[50%] h-45 md:w-[25%] xl:w-45 xl:h-45 mx-auto md:translate-x-5 md:mx-auto xl:mx-0  xl:translate-x-0 flex flex-col items-center justify-center rounded-sm bg-orange-light ">
                  <h4 className="text-xl md:text-[18px]  font-bold font-nohemi mt-3">Join ROVV as a <br />Driver Partner</h4>
                  <p className="text-sm  text-medium font-sans font-bold mb-3">Drive with freedom, <br />Earn on your terms</p>
                  <button className="px-10 ml-0 xl:ml-3 py-2 bg-purple text-bg font-bold rounded-xl shadow-lg w-auto xl:w-auto">
                    Sign up
                  </button>
          </div>
      </div>
     
    </section>
  )
}