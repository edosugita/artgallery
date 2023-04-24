import Image from "next/image";
import Link from "next/link";
import ArtTest from '@/public/images/png/Image.png'
import style from '@/styles/SectionHome/SectionThree.module.css'

export default function SectionThree() {
  const handleClick = (e, path) => {
    path = 'see' ? window.location.href='/information/detail' : ''
  }
  return (
    <>
        <section className={style.section_three}>
            <div className='row mb-3'>
                <div className="d-flex align-items-center">
                    <div className='col-6 mb-3'>
                        <h4 className={style.h4_title}>New Information</h4>
                    </div>
                    <div className='col-6 mb-3'>
                        <div className='d-flex justify-content-end'>
                            <input className={`btn rounded-top-3 ${style.section_three_btn}`} type='button' value='See All' onClick={(e) => handleClick(e, 'see')}  />
                        </div>
                    </div>
                </div>

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
        </section>
    </>
  )
}
