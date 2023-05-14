import Image from 'next/image'
import CarouselNewsArt from '../carausel/CarouselNewsArt'
import style from '@/styles/SectionHome/SectionFour.module.css'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function SectionFour() {
    const [dataSell, setDataSell] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/api/data/product/sell?limit=3')
                const dataSell = await response.json()
                setDataSell(dataSell)
            } catch (e) {
                console.log({message: e})
            }
        }

        fetchData()
    }, []);

    const handleClick = (e, path) => {
        path === 'see' ? window.location.href='/gallery' : ''
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

                    {dataSell.map((item, index) => (
                        <div className='col-md-4 col-sm-6 col-12 mb-3' key={index}>
                            <Link className="text-decoration-none text-light" href={`/detail/${item.slug}`} >
                                <div className={style.card}>
                                    <Image src={`/images/png/${item.image}`} alt='Image Slider' height={500} width={500} className='rounded-top' />
                                    <div className={style.card_body}>
                                        <h5>{item.artname}</h5>
                                        <div className="mb-3 mt-2">
                                            {item.kategori.split(",").map((kategori) => (
                                                <span key={kategori} className="badge me-2 mb-1" style={{background: '#2E2E2E', color: '#EBEBEB'}}>{kategori}</span>
                                            ))}
                                        </div>
                                        <p><span>By</span> {item.username}</p>
                                        <p className={`card-text ${style.card_text}`}>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <CarouselNewsArt/>
            </section>
        </>
    )
}
