// src/pages/get-to-know-rovv/BecomeDriverSection.tsx
import arrow from '../../../assets/images/arrow.png'
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
  <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-[#FFFAF2]">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-2 mb-6 md:mb-5 lg:mb-6">
        {/* Badge */}
        <span className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-[5px] lg:px-6 lg:py-1.5 bg-[#FFF2DE] text-[#141414] rounded-[34.463px] md:rounded-[40px] text-[13px] md:text-[14px] lg:text-base leading-[13px] md:leading-[14px] lg:leading-4 font-medium font-nohemi">
          ROVV app
        </span>

        {/* Title */}
        <h2 className="text-xl md:text-[35px] lg:text-[40px] leading-5 md:leading-[40px] lg:leading-[48px] font-bold font-nohemi text-[#141414] text-center">
          Become a ROVV Driver
        </h2>
      </div>

      {/* Main Content - Image and Steps */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 md:gap-6 lg:gap-20 mb-6 md:mb-10 lg:mb-10">
        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="relative w-[343px] h-[329px] md:w-[519px] md:h-[495.86px] lg:w-[628px] lg:h-[600px] rounded-[33.06px] md:rounded-[33.06px] lg:rounded-[40px] overflow-hidden">
            <img
              src={Image}
              alt="ROVV Driver"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4 md:gap-4 lg:gap-4 w-full max-w-[343px] md:max-w-[519px] lg:max-w-[519px] mx-auto lg:mx-0">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="flex gap-3 md:gap-6 lg:gap-6 p-3 md:p-6 lg:p-6 border-2 border-[#CDBBE1] rounded-[24px] md:rounded-[40px] lg:rounded-[40px]"
            >
              {/* Number Badge */}
              <div className="w-10 h-10 md:w-[78px] md:h-[70px] lg:w-[78px] lg:h-[70px] bg-[#CDBBE1] rounded-[8.21px] md:rounded-[16px] lg:rounded-[16px] flex items-center justify-center shrink-0">
                <span className="text-lg md:text-[35px] lg:text-[35px] leading-[18px] md:leading-[35px] lg:leading-[35px] font-bold font-nohemi text-[#4A4A4A]">
                  0{i + 1}
                </span>
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-2xl lg:text-2xl leading-[18px] md:leading-[34px] lg:leading-[34px] font-medium font-nohemi text-[#141414]">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg lg:text-lg leading-5 md:leading-6 lg:leading-6 font-normal font-sans text-[#4A4A4A]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Section */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-6 lg:gap-[132px]">
        {/* Requirements List */}
        <div className="flex flex-col gap-3 md:gap-2 lg:gap-4 w-full lg:w-auto">
          <h3 className="text-xl md:text-[28px] lg:text-[32px] leading-5 md:leading-[40px] lg:leading-[40px] font-semibold font-nohemi text-[#141414] text-center lg:text-left">
            Requirements
          </h3>
          
          <div className="flex flex-col gap-3 md:gap-3 lg:gap-3 w-full lg:max-w-[628px]">
            {requirements.map((req, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 px-10 md:px-10 lg:px-10 py-6 md:py-6 lg:py-6 bg-[#5E239D] rounded-[4px]"
              >
                {/* Arrow Icon */}
                <img 
                  src={arrow}  
                  alt="arrow" 
                  className="w-8 h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 shrink-0"
                />
                <span className="text-xl md:text-2xl lg:text-2xl leading-5 md:leading-6 lg:leading-6 font-medium font-nohemi text-white">
                  {req}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="flex flex-col gap-[14px] md:gap-[14px] lg:gap-[14px] p-7 md:p-10 lg:p-10 w-full max-w-[38px] md:max-w-[519px] lg:max-w-[519px] mx-auto lg:mx-0 bg-[#FFEFD6] rounded-[4px]">
          <div className="flex flex-col gap-4 md:gap-4 lg:gap-5">
            <div className="flex flex-col gap-1 md:gap-0 lg:gap-1">
              <h4 className="text-lg md:text-2xl lg:text-2xl leading-[18px] md:leading-[34px] lg:leading-[34px] font-medium font-nohemi text-[#141414]">
                Join The Community
              </h4>
              <p className="text-base md:text-lg lg:text-lg leading-[19px] md:leading-6 lg:leading-6 font-normal font-sans text-[#4A4A4A]">
                Drive with freedom. Earn on your terms
              </p>
            </div>
            
            <button className="flex justify-center items-center px-7 py-[14px] w-full h-[52px] bg-[#5E239D] rounded-lg text-white text-xl leading-6 font-bold font-sans hover:bg-purple-700 transition">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)}