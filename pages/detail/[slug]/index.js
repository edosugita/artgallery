import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '@/components/users/Footer'
import Navbar from '@/components/users/Navbar'
import CarouselNewsArt from '@/components/users/carausel/CarouselNewsArt'
import CarouselSale from '@/components/users/carausel/CarouselSale'
import style from '@/styles/Detail.module.css'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { getSession } from 'next-auth/react'

export default function Detail() {
    const router = useRouter()
    const {slug} = router.query
    const [data, setData] = useState(null)
    const [session, setSession] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/api/data/product/slug?slug=${slug}`)
                const data = await response.json()
                setData(data[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [slug, data])

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            setSession(session);
        };
        
        fetchSession();
    }, [session]);

    useEffect(() => {
        document.title = 'Art Galery'
    }, [])

    const handleAddToCart = async () => {
        const uuidUser = session?.user?.user.uuid_user
        const uuidArt = data.uuid_art

        try {
            const response = await fetch(`http://localhost:3000/api/data/cart/add?uuidUser=${uuidUser}&uuidArt=${uuidArt}`, { method: 'POST' })
            const result = await response.json()

            await Swal.mixin({
                title: 'Success',
                text: 'Success add Arts to cart',
                icon: 'success',
                timer: 1000,
                background: '#141414',
                color: '#FFFFFF',
                timerProgressBar: true,
                showConfirmButton: false,
                progressStepsColor: '#E30813',
                willClose(popup) {
                router.reload()
                }
            }).fire()
        } catch (error) {
         console.log(error)
        }
    }

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <div className="container p-5">
                    <section className={style.section_one} key={1}>
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className={style.section_img}>
                                    {data && <Image src={`/images/png/${data.image}`} width={500} height={500} alt='Images'/>}
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-between">
                                <div className="col-12 mb-5">
                                    <div className={style.information}>
                                        {data && <h5 className={style.h5}>{data.artname}</h5>}
                                        {data && <p className={style.by}>By<span className={style.name}> {data.username}</span></p>}
                                        {data && <p className={style.desc}>{data.description}</p>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={style.buy_information}>
                                        <div className={style.box}>
                                            <p>price</p>
                                            {data && <h5>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price)}</h5>}
                                        </div>
                                        <div className={style.buy_button}>
                                            <div className="row mt-3">
                                                <div className="col-7">
                                                    <input className={`btn btn-danger w-100 ${style.btnbuy}`} type="button" value={'Buy Now'} />
                                                </div>
                                                <div className="col-5">
                                                    <button className={`btn text-light w-100 ${style.btnshop}`} onClick={handleAddToCart}>
                                                        <FontAwesomeIcon className='me-3' icon={faCartShopping} />
                                                        Add to Cart
                                                    </button>
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
                                    <div className='col-6 mb-3'>
                                        <h4 className={style.h4_title}>Art On Sale</h4>
                                    </div>
                                    <div className='col-6 mb-3'>
                                        <div className='d-flex justify-content-end'>
                                            <input className={`btn rounded-top-3 ${style.section_btn}`} type='button' value='See All' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <CarouselSale />
                            </div>
                        </div>
                    </section>
                    <section className={style.section}>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-center">
                                    <div className='col-6 mb-3'>
                                        <h4 className={style.h4_title}>Newest Art</h4>
                                    </div>
                                    <div className='col-6 mb-3'>
                                        <div className='d-flex justify-content-end'>
                                            <input className={`btn rounded-top-3 ${style.section_btn}`} type='button' value='See All' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <CarouselNewsArt />
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