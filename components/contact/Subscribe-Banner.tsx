import React from 'react'

const SubscribeBanner = () => {
  return (
    <div className='pb-16'>
     {/* SUBSCRIBE BANNER */}
      <div className="mt-24 max-w-6xl mx-auto bg-orange-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="uppercase text-sm tracking-wider text-white/90 mb-2">
            Get to know about all the exclusive offers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Subscribe to Hardkaur
          </h2>
        </div>

        <button className="bg-white/20 text-white px-8 py-4 rounded-md border border-white hover:bg-white/30 transition font-medium focus:outline-none focus:ring-2 focus:ring-white">
          Subscribe Now
        </button>
      </div>
    </div>
   
  )
}

export default SubscribeBanner