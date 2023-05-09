import { useEffect } from 'react' 
import Footer from '@/components/users/Footer'
import Navbar from '@/components/users/Navbar'
import style from '@/styles/SectionHome/SectionThree.module.css'
import ArtTest from '@/public/images/png/Image.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Information() {
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
                <div className="section_one">
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
                                    <span>Menurut laporan terbaru, pasar seni global mengalami peningkatan yang signifikan dalam penjualan karya seni kontemporer pada tahun ini. Beberapa karya seni terkenal seperti lukisan, patung, dan foto-foto seniman terkemuka telah terjual dengan harga rekor di lelang seni terkemuka.</span>
                                    <Link href='/information/detail'>
                                        See all ..
                                    </Link>
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

                <div className="section_two mt-5">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className={style.list_information}>
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
                        {/* ------------------------------------------------ */}
                        <div className="col-md-6 col-sm-12">
                            <div className={style.list_information}>
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

                <div className="section_three mt-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-sm justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}
