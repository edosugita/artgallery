import Image from 'next/image'
import CarouselSale from '../carausel/CarouselSale'
import ArtTest from '@/public/images/png/Image.png'
import style from '@/styles/SectionHome/SectionTwo.module.css'
import Link from 'next/link'

export default function SectionTwo() {
  const handleClick = (e, path) => {
    path = 'see' ? window.location.href='/gallery' : ''
  }
  return (
    <>
        <section className={style.section_two}>
            <div className='row align-items-center mb-3'>
                <div className='col-6 mb-3'>
                    <h4 className={style.h4_title}>Art On Sale</h4>
                </div>
                <div className='col-6 mb-3'>
                    <div className='d-flex justify-content-end'>
                        <input className={`btn rounded-top-3 ${style.section_two_btn}`} type='button' value='See All' onClick={(e) => handleClick(e, 'see')} />
                    </div>
                </div>

                <div className='col-md-4 col-sm-6 col-12 mb-3'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-md-4 col-sm-6 col-12 mb-3'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-md-4 col-sm-6 col-12 mb-3'>
                    <Link className="text-decoration-none text-light" href={'/detail'}>
                        <div className={style.card}>
                            <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                            <div className={style.card_body}>
                                <h5>Form in Space</h5>
                                <p><span>By</span> doja</p>
                                <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                    <p>-10%</p> 
                                    <p>RP 200.000</p>
                                </div>
                                <p className={`card-text ${style.card_text}`}>RP 200.000</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <CarouselSale/>
        </section>
    </>
  )
}
