import { useEffect } from 'react' 
import Footer from '@/components/users/Footer'
import Navbar from '@/components/users/Navbar'
import style from '@/styles/Information/Information.module.css'
import ArtTest from '@/public/images/png/Image.png'
import Image from 'next/image'
import Link from 'next/link'

export default function DetailInformation() {
  useEffect(() => {
    document.title = 'Information'
  })
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <div className="container p-5">
                <div className="row">
                    <div className='col-md-7'>
                        <div className="information">
                            <div className={style.section_three_img}>
                                <Image src={ArtTest} alt='Image New Information' className='rounded'/>
                            </div>
                            <div className={style.section_three_title}>
                                <h6>Boom in Art Sales: Record-breaking prices for Contemporary Artworks</h6>
                            </div>
                            <div className={style.section_three_desc}>
                                <p>In recent years, the art market has experienced significant growth and interest, with contemporary artworks in particular seeing record-breaking prices. This trend has been fueled by a number of factors, including increased demand from collectors, growing interest from investors, and the scarcity of specific artworks.</p>
                                <p>This boom in art sales is a positive sign for the art market, indicating a healthy and growing interest in art as an investment and a cultural artifact. However, it also raises concerns about the accessibility and affordability of art for the wider public. With prices for contemporary artworks reaching new heights, some worry that art is becoming an asset reserved only for the wealthy, further exacerbating existing inequalities in the art world.</p>
                                <p>Despite these concerns, the art market continues to thrive, with collectors and investors eagerly seeking out the next big thing in contemporary art. As long as demand remains high and interest continues to grow, it seems likely that the boom in art sales and record-breaking prices for contemporary artworks will continue into the foreseeable future.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className={`${style.list_information}`}>
                            <Link className="text-decoration-none text-light" href={'/information/detail'}>
                                <div className="row">
                                    <div className="col-4">
                                        <div className={style.list_img}>
                                            <Image src={ArtTest} alt='Image New Information' className='rounded' />
                                        </div>
                                    </div>
                                    <div className="col-8 d-grid align-content-between">
                                        <div className={`col-12 ${style.list_title}`}>
                                            <h6>Art Collectors Rejoice: Top Art Auction Houses Go Online for Convenient Bidding</h6>
                                        </div>
                                        <div className={`col-12 ${style.list_date}`}>
                                            <p>12/08/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="text-decoration-none text-light" href={'/information/detail'}>
                                <div className="row">
                                    <div className="col-4">
                                        <div className={style.list_img}>
                                            <Image src={ArtTest} alt='Image New Information' className='rounded' />
                                        </div>
                                    </div>
                                    <div className="col-8 d-grid align-content-between">
                                        <div className={`col-12 ${style.list_title}`}>
                                            <h6>Art Collectors Rejoice: Top Art Auction Houses Go Online for Convenient Bidding</h6>
                                        </div>
                                        <div className={`col-12 ${style.list_date}`}>
                                            <p>12/08/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="text-decoration-none text-light" href={'/information/detail'}>
                                <div className="row">
                                    <div className="col-4">
                                        <div className={style.list_img}>
                                            <Image src={ArtTest} alt='Image New Information' className='rounded' />
                                        </div>
                                    </div>
                                    <div className="col-8 d-grid align-content-between">
                                        <div className={`col-12 ${style.list_title}`}>
                                            <h6>Art Collectors Rejoice: Top Art Auction Houses Go Online for Convenient Bidding</h6>
                                        </div>
                                        <div className={`col-12 ${style.list_date}`}>
                                            <p>12/08/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="text-decoration-none text-light" href={'/information/detail'}>
                                <div className="row">
                                    <div className="col-4">
                                        <div className={style.list_img}>
                                            <Image src={ArtTest} alt='Image New Information' className='rounded' />
                                        </div>
                                    </div>
                                    <div className="col-8 d-grid align-content-between">
                                        <div className={`col-12 ${style.list_title}`}>
                                            <h6>Art Collectors Rejoice: Top Art Auction Houses Go Online for Convenient Bidding</h6>
                                        </div>
                                        <div className={`col-12 ${style.list_date}`}>
                                            <p>12/08/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="text-decoration-none text-light" href={'/information/detail'}>
                                <div className="row">
                                    <div className="col-4">
                                        <div className={style.list_img}>
                                            <Image src={ArtTest} alt='Image New Information' className='rounded' />
                                        </div>
                                    </div>
                                    <div className="col-8 d-grid align-content-between">
                                        <div className={`col-12 ${style.list_title}`}>
                                            <h6>Art Collectors Rejoice: Top Art Auction Houses Go Online for Convenient Bidding</h6>
                                        </div>
                                        <div className={`col-12 ${style.list_date}`}>
                                            <p>12/08/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}
