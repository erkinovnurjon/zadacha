import Image from 'next/image'
import React from 'react'

const Testumonial = () => {
  return (
        <section className="dark:text-gray-400 dark:bg-gray-900 bg-white text-black body-font">
              <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                      <Image width={360} height={180} alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/302x302"/>
                                            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                            <p className="text-gray-500">Senior Product Designer</p>
                                </div>
                          </div>
                          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                      <Image width={360} height={180} alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/300x300" />
                                            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                            <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                                            <p className="text-gray-500">UI Develeoper</p>
                                </div>
                          </div>
                          <div className="lg:w-1/3 lg:mb-0 p-4">
                                <div className="h-full text-center">
                                      <Image alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/305x305" width={360} height={180}/>
                                            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                            <p className="text-gray-500">CTO</p>
                                </div>
                          </div>
                    </div>
              </div>
        </section>
  )
}

export default Testumonial