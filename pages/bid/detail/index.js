import Footer from '@/components/users/Footer'
import Navbar from '@/components/users/Navbar'
import { useEffect } from 'react'
import style from '@/styles/Detailbid.module.css'
import Image from 'next/image'
import ArtTest from '@/public/images/png/Image.png'
import CarouselOnGoing from '@/components/users/carausel/CarouselOnGoing'
import CarouselUpcoming from '@/components/users/carausel/CarouselUpcoming'
import HistoryBid from '@/components/users/HistoryBid'

export default function BidDetail() {
  useEffect(() => {
    document.title='Detail'
  })
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <div className="container p-5">
                <section className={style.section_one}>
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className={style.section_img}>
                                <Image src={ArtTest} alt='Images' />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="col-12 mb-5">
                                <div className={style.information}>
                                    <h5 className={style.h5}>Form in Space</h5>
                                    <p className={style.by}>By<span className={style.name}> Doja</span></p>
                                    <p className={style.desc}>&#34;Form in Space&#34; is a visual art piece that explores the relationship between form and space. This artwork is an exploration of the interplay between objects and the space they occupy, and how this relationship can evoke a range of emotional and physical responses in the viewer. The artist has used various techniques and mediums to create a dynamic and thought-provoking composition that invites the viewer to contemplate the complex relationship between form and space.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className={style.buy_information}>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-12 mb-3">
                                            <div className={style.box}>
                                                <p>Open Bid</p>
                                                <h5>RP 180.000</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12 mb-3">
                                            <div className={style.box}>
                                                <p>Start Auction</p>
                                                <h5>22/02/2023 at 10.00 AM</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12 mb-3">
                                            <div className={style.box}>
                                                <p>Best Bid</p>
                                                <h5>RP 180.000.000</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12 mb-3">
                                            <div className={style.box}>
                                                <p>End Auction</p>
                                                <h5>4h : 54m : 43s</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.buy_button}>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <input className={`btn btn-danger w-100 ${style.btnbuy}`} type="button" value={'Buy Now'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.section}>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center">
                                <div className='col-12 mb-3'>
                                    <h4 className={style.h4_title}>History Bid</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <HistoryBid />
                        </div>
                    </div>
                </section>
                <section className={style.section}>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center">
                                <div className='col-6 mb-3'>
                                    <h4 className={style.h4_title}>On Going Auction</h4>
                                </div>
                                <div className='col-6 mb-3'>
                                    <div className='d-flex justify-content-end'>
                                        <input className={`btn rounded-top-3 ${style.section_btn}`} type='button' value='See All' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <CarouselOnGoing />
                        </div>
                    </div>
                </section>
                <section className={style.section}>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center">
                                <div className='col-6 mb-3'>
                                    <h4 className={style.h4_title}>Upcoming Auction</h4>
                                </div>
                                <div className='col-6 mb-3'>
                                    <div className='d-flex justify-content-end'>
                                        <input className={`btn rounded-top-3 ${style.section_btn}`} type='button' value='See All' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <CarouselUpcoming />
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

