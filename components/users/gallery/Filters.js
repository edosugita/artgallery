import style from '@/styles/Filter.module.css'
import { useRouter } from 'next/router'

export default function Filters() {
  const router = useRouter()

  console.log(router.pathname)

  const condition = router.pathname != '/collections' 
  return (
    <>
        <form>
            <h6 className={style.h6_title}>Sort</h6>
            <div className={style.time_title}>
                {router.pathname != '/collections' &&
                    <div className={style.price_title}>
                        <h6>price</h6>
                        <div className={`${style.form_check} d-flex justify-content-between`}>
                            <label className="form-check-label" for="price1">
                                Terendah ke Tertinggi
                            </label>
                            <input className="form-check-input" type="radio" name="price" id="price1" />
                        </div>
                        <div className={`${style.form_check} d-flex justify-content-between`}>
                            <label className="form-check-label" for="price2">
                                Tertinggi ke Terendah
                            </label>
                            <input className="form-check-input" type="radio" name="price" id="price2" />
                        </div>
                    </div>
                }
                
            
                <h6>time</h6>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="time1">
                        Terbaru
                    </label>
                    <input className="form-check-input" type="radio" name="time" id="time1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="time2">
                        Terlama
                    </label>
                    <input className="form-check-input" type="radio" name="time" id="time2" />
                </div>
            </div>
            <h6 className={style.h6_title}>Filter</h6>
            {router.pathname != '/collections' &&
                <div className={style.auction_title}>
                    <h6>auction</h6>
                    <div className={`${style.form_check} d-flex justify-content-between`}>
                        <label className="form-check-label" for="ongoing1">
                            On Going
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="ongoing1" />
                    </div>
                    <div className={`${style.form_check} d-flex justify-content-between`}>
                        <label className="form-check-label" for="upcoming1">
                            Upcoming
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="upcoming1" />
                    </div>
                </div>
            }
            <div className={style.category_title}>
                <h6>category</h6>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="ongoing1">
                        Abstract
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="ongoing1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="upcoming1">
                        Realism
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="upcoming1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="ongoing1">
                        Impressionism
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="ongoing1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="upcoming1">
                        Expressionism
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="upcoming1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="ongoing1">
                        Surrealism
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="ongoing1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="upcoming1">
                        Manga
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="upcoming1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="ongoing1">
                        Stroke technique
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="ongoing1" />
                </div>
                <div className={`${style.form_check} d-flex justify-content-between`}>
                    <label className="form-check-label" for="upcoming1">
                        Collage technique
                    </label>
                    <input className="form-check-input" type="checkbox" value="" id="upcoming1" />
                </div>
            </div>
        </form>
    </>
  )
}
