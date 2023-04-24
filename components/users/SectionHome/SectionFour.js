import Image from 'next/image'
import React from 'react'
import CarouselNewsArt from '../carausel/CarouselNewsArt'
import ArtTest from '@/public/images/png/Image.png'
import style from '@/styles/SectionHome/SectionFour.module.css'

export default function SectionFour() {
  const handleClick = (e, path) => {
    path = 'see' ? window.location.href='/gallery' : ''
  }

  return (
    <>
        <section className={style.section_four}>
            <div className='row align-items-center mb-3'>
                <div className='col-6 mb-3'>
                    <h4 className={style.h4_title}>Newest Art</h4>
                </div>
                <div className='col-6 mb-3'>
                    <div className='d-flex justify-content-end'>
                        <input className={`btn rounded-top-3 ${style.section_four_btn}`} type='button' value='See All' onClick={(e) => handleClick(e, 'see')} />
                    </div>
                </div>

                <div className='col-md-4 col-sm-6 col-12 mb-3'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12 mb-3'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12 mb-3'>
                    <div className={style.card}>
                        <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                        <div className={style.card_body}>
                            <h5>Form in Space</h5>
                            <p><span>By</span> doja</p>
                            <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                        </div>
                    </div>
                </div>
            </div>
            <CarouselNewsArt/>
        </section>
    </>
  )
}
