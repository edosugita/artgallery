import Image from 'next/image'
import CarouselSale from '../carausel/CarouselSale'
import ArtTest from '@/public/images/png/Image.png'
import style from '@/styles/SectionHome/SectionTwo.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SectionTwo() {
    const [data, setData] = useState([])

    const handleClick = (e, path) => {
        path === 'see' ? window.location.href='/gallery' : ''
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:3000/api/data/product/discount?limit=3")
                const data = await response.json()
                setData(data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [])

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

                    {data.map((item) => (
                        <div className='col-md-4 col-sm-6 col-12 mb-3' key={item.id}>
                            <Link className="text-decoration-none text-light" href={`/detail/${item.slug}`}>
                                <div className={style.card}>
                                    <div style={{height: '300px', width: '100%', overflow: "hidden"}}>
                                        <Image src={"/images/png/" + item.image} alt="Image Slider" height="520" width="520" className="rounded" style={{height: '100%', width: '100%', display: "block", objectFit:"cover"}} />
                                    </div>
                                    <div className={style.card_body}>
                                        <h5>{item.artname}</h5>
                                        <div className="mb-3 mt-2">
                                            {item.kategori.split(",").map((kategori) => (
                                                <span key={kategori} className="badge me-2 mb-1" style={{background: '#2E2E2E', color: '#EBEBEB'}}>{kategori}</span>
                                            ))}
                                        </div>
                                        <p><span>By</span> {item.username}</p>
                                        <div className={`d-flex align-items-center gap-2 ${style.discount}`}>
                                            <p>{item.discount}%</p>
                                            <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
                                        </div>
                                        <p className={`card-text ${style.card_text}`}>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price - (item.price * (item.discount / 100)))}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <CarouselSale/>
            </section>
        </>
    )
}