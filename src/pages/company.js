


import style from "../css/company.module.css";

import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Company = () => {

    document.title = "Company";

    return (

        <main>
            <section className={ style.company_content }>
                <section className="">
                    <section className={ style.form }>
                        <section>
                            <Swiper
                                spaceBetween={ 3 }
                                slidesPerView={ 1 }
                                // onSlideChange={ () => console.log( "slide change") }
                                // onSwiper={ ( swiper ) => console.log( swiper ) }
                            >
                                {/* <section className={ style.group_button }>
                                    <SwiperButton __Go="prev" />
                                    <SwiperButton __Go="next" />
                                </section> */}
                                <SwiperSlide>
                                    <h1 className={ style.title }>Công ty</h1>
                                    <section className={ style.groups }>
                                        <section className={ style.row }>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyName">Tên công ty</label>
                                                <input id="txt_CompanyName" className={ style.control } />
                                            </section>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyWebsite">Website công ty</label>
                                                <input id="txt_CompanyWebsite" className={ style.control } />
                                            </section>
                                        </section>
                                        <section className={ style.row }>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyTaxCode">Mã số thuế</label>
                                                <input id="txt_CompanyTaxCode" className={ style.control } />
                                            </section>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyBusinessField">Loại hình công ty</label>
                                                <input id="txt_CompanyBusinessField" className={ style.control } />
                                            </section>
                                        </section>
                                        <section className={ style.row }>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyOfficialAddress">Địa chỉ</label>
                                                <input id="txt_CompanyOfficialAddress" className={ [ style.control, "active" ].join( " " ) } />
                                            </section>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyContactPhone">Số điện thoại</label>
                                                <input id="txt_CompanyContactPhone" className={ style.control } />
                                            </section>
                                        </section>
                                        <section className={ style.row }>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyContactEmail">Email</label>
                                                <input id="txt_CompanyContactEmail" className={ style.control } />
                                            </section>
                                            <section className={ style.col }>
                                                <label htmlFor="txt_CompanyContactPerson">Người đại diện</label>
                                                <input id="txt_CompanyContactPerson" className={ style.control } />
                                            </section>
                                        </section>
                                        <section className={ style.group_button }>
                                            <button className={ style.btn_NotSave }>Hủy</button>
                                            <button className={ style.btn_Save }>Lưu</button>
                                        </section>
                                    </section>
                                </SwiperSlide>
                            </Swiper>
                        </section>
                    </section>
                </section>
            </section>
        </main>

    );

}
 
export default Company;


