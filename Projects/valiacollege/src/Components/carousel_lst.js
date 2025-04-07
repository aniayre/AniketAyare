import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MyCarousel() {
    return (
        <div className=''>
            <OwlCarousel className="owl-theme" loop dotsEach margin={0} autoplay autoplayTimeout={3000} autoplayHoverPause={true} responsive={{
                0: { // For screens smaller than 576px
                    items: 1 // Show 1 item at a time
                },
                480: { // For screens from 576px to 768px 
                    items: 2
                },
                640: { // For screens from 768px to 992px
                    items: 3
                },
                768: { // For screens 992px and wider
                    items: 4
                },
                1200: { // For screens 992px and wider
                    items: 5
                }
            }} >
                {/* <div>
        <img src="" alt="images/fst_car/website-certificate-1.jpg" />
      </div>
      <div>
        <img src="images/fst_car/website-certificate-3.jpg" alt="Image 2" />
      </div> */}
                <div className="">
                    <img className="SecOwlCars" src="images\1.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\6.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\4.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\3.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\11.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\12-1.jpg" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\21.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\20.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\18.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\16.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\19.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\14.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\17.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\15.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\13.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\5.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\10.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\8.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\7.png" alt="" />
                </div>
                <div className="">
                    <img className="SecOwlCars" src="images\9.png" alt="" />
                </div>
                {/* ...more s */}
            </OwlCarousel>
        </div>


    );
}

export default MyCarousel;