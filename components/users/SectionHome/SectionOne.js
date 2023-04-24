import Image from "next/image";
import Link from "next/link";
import ArtTest from '@/public/images/png/Image.png'
import style from '@/styles/SectionHome/SectionOne.module.css'

export default function SectionOne() {
  return (
    <>
        {/* SECTION ONE 'SLIDER' */}
        <section className={style.section_one}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className={`row ${style.row}`}>
                        <div className='col-md-5 col-sm-12'>
                            <h1 className={`mb-3 ${style.h1}`}>Landscape with Mountains</h1>
                            <span className={style.span}>This is a realistic watercolor painting of a mountain landscape.</span>
                            <h2 className={`mt-3 ${style.h2}`}>Rp 60.000.000</h2>
                            <div className={`d-flex gap-4 mt-3 ${style.button_group}`}>
                                <input className={`btn btn-danger rounded-top-3 ${style.btn}`} type='button' value='Buy Now' />
                                <Link className={style.link_detail} href="/detail">See Detail</Link>
                            </div>
                        </div>
                        <div className='col-md-7 col-sm-12'>
                            <div className={`d-flex justify-content-end ${style.section_one_img}`}>
                                <Image src={ArtTest} alt='Image Slider' className='rounded-top' />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={`row ${style.row}`}>
                        <div className='col-md-5 col-sm-12'>
                            <h1 className={`mb-3 ${style.h1}`}>Landscape with Mountains</h1>
                            <span className={style.span}>This is a realistic watercolor painting of a mountain landscape.</span>
                            <h2 className={`mt-3 ${style.h2}`}>Rp 60.000.000</h2>
                            <div className={`d-flex gap-4 mt-3 ${style.button_group}`}>
                                <input className={`btn btn-danger rounded-top-3 ${style.btn}`} type='button' value='Buy Now' />
                                <Link className={style.link_detail} href="#">See Detail</Link>
                            </div>
                        </div>
                        <div className='col-md-7 col-sm-12'>
                            <div className={`d-flex justify-content-end ${style.section_one_img}`}>
                                <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={`row ${style.row}`}>
                        <div className='col-md-5 col-sm-12'>
                            <h1 className={`mb-3 ${style.h1}`}>Landscape with Mountains</h1>
                            <span className={style.span}>This is a realistic watercolor painting of a mountain landscape.</span>
                            <h2 className={`mt-3 ${style.h2}`}>Rp 60.000.000</h2>
                            <div className={`d-flex gap-4 mt-3 ${style.button_group}`}>
                                <input className={`btn btn-danger rounded-top-3 ${style.btn}`} type='button' value='Buy Now' />
                                <Link className={style.link_detail} href="#">See Detail</Link>
                            </div>
                        </div>
                        <div className='col-md-7 col-sm-12'>
                            <div className={`d-flex justify-content-end ${style.section_one_img}`}>
                                <Image src={ArtTest} alt='Image Slider' height="250" className='rounded-top' />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* END SECTION ONE */}
    </>
  )
}
