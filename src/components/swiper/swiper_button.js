


import { useSwiper } from "swiper/react";
import style from "../../css/swiper.module.css";

const SwiperButton = ( props ) => {

    const swiper = useSwiper();

    return (

        <>
            {
                ( props.__Go === "next" ) 
                ?
                    <button className={ style.go } onClick={ () => swiper.slideNext() }>Tiếp</button>
                :
                    <button className={ style.go } onClick={ () => swiper.slidePrev() }>Trước</button>
            }
        </>

    );

};

export default SwiperButton;


