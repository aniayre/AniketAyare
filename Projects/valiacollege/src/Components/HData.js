import React, { Component } from "react";
import Ourvision from "./Ourvision";
import MyCarousel from "./carousel_lst";
// import { fadeIn } from 'react-animations'

export default class HData extends Component {
    render() {
        return (
            <div>
                {/* VALIA CHHAGANLAL Para */}
                <div className="bh_text">
                    <div className="row pt-2 mx-0 px-0">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 pt-4 px-5">
                            <h4>VALIA CHHAGANLAL LALJIBHAI COLLEGE OF COMMERCE AND LILAVANTIBEN CHHAGANLAL VALIA COLLEGE OF ARTS
                                <br />
                                (GUJARATI LINGUISTIC MINORITY INSTITUTION)</h4>
                            <h4 className="pt-3">NAAC Reaccredited ‘B++’ Grade with CGPA 2.97 in 3rd cycle</h4>
                        </div>
                        <div className="col-lg-2 pt-5 text-left">
                            <button className="py-2 px-4 rounded-pill blink101">Admission Link</button>
                        </div>
                    </div>
                </div>

                {/* World Carasoul */}
                <div className="bootcaras">
                    {/* <!-- Carousel --> */}
                    <div id="demo" class="carousel slide" data-bs-ride="carousel">

                        {/* <!-- Indicators/dots --> */}
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                        </div>


                        {/* <!-- The slideshow/carousel --> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="images/fst_car/website-certificate-1.jpg" alt="Los Angeles" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/fst_car/website-certificate-3.jpg" alt="Chicago" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/fst_car/website-certificate-2.jpg" alt="New York" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/fst_car/website-certificate.jpg" alt="New York" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/fst_car/website-certificate-4-copy-1.jpg" alt="New York" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/fst_car/website-certificate-5-copy-1.jpg" alt="New York" class="w-100 d-block" />
                            </div>
                        </div>

                        {/* <!-- Left and right controls/icons --> */}
                        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>

                </div>

                {/* Brief History */}
                <div>
                    <div className="bh_bgimg" >
                        <div className="container m-5">
                            <div className="text_over_img w-75 mx-auto p-4">
                                <h3 className="pb-3"> <b>Brief History</b></h3>
                                <p className="pb-2">The Valia Chhaganlal Laljibhai College of Commerce and Lilavantiben Chhaganlal College of Arts was established in 1986 under the aegis of the Cosmopolitan Education Society. The parent body, Cosmopolitan Education society was established in 1961, when a group of likeminded residents of D. N. Nagar came together, inspired by the idealism of establishing a quality educational institution in the locality.</p>
                                <p className="pb-2">The college has the mission to provide value-based quality education and training in an environment conducive to intellectual, social and cultural enrichment to mould responsible citizens with a harmonious blend of Indian traditions and modern technology for a better tomorrow.</p>
                                <p className="">The college with a total strength of more than 2500 students offers undergraduate and post graduate programs both under the grant in aid system as well as the self -financed system. The various undergraduate programs offered are Bachelor of Commerce, Bachelor of Commerce (Accounting and Finance), Bachelor of Management Studies, Bachelor of Arts in Multimedia and Mass Communication, Bachelor of Science (Information Technology). The college also offers two masters programs Master of Commerce (Advanced Accountancy) and Master of Science (Information Technology). The Bachelor of Commerce program is in the grant in aid system and all other programs are self -financed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EKATVA */}
                <div className="container-fluid">
                    <div className="row py-3 px-2">
                        <div className="col-md-6">
                            <img className="w-100" src="images/b3.jpg" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <img className="w-100" src="images/b15.jpg"></img>
                                    </div>
                                    <div className="row pt-3">
                                        <img className="w-100" src="images/b14.jpg"></img>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <img className="w-100" src="images/b18.jpg"></img>
                                    </div>
                                    <div className="row pt-3">
                                        <img className="w-100" src="images/b10.jpg"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* OUR VISION */}
                <div>

                    <div className="o_vision w-75 mx-auto">
                        <div className="row pt-3">
                            <div className=" col-lg-6 pt-5">
                                <div className="px-5">
                                    <h1><b>” OUR VISION”</b></h1>
                                    <p>To maintain the highest academic standards upholding the noblest ideals and moral values, to identify hidden talent, create enlightened, empowered and socially committed students and above all good human beings.</p>
                                </div>
                                <div className="px-5">
                                    <h1><b>” OUR MISSION”</b></h1>
                                    <p>To provide value – based quality education and training in an environment conducive to intellectual, social and cultural enrichment so as to mould responsible citizens with a harmonious blend of Indian traditions and modern technology for a better tomorrow.</p>
                                </div>
                                <div className="px-5">
                                    <h1><b>” OUR OBJECTIVES”</b></h1>
                                    <p>
                                        <ul>
                                            <li>To impart quality education by regular review and upgradation of the teaching-learning process.</li>
                                            <li>To promote quality consciousness amongst staff and students.</li>
                                            <li>To provide access to information through a harmonious blend of traditional and modern sources.</li>
                                            <li>To extend guidance and support to students in their pursuit of professions and careers.</li>
                                            <li>To nurture talent and provide opportunities for growth in the areas of arts and sports.</li>
                                            <li>To sensitise students to the social milieu.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 px-5 pt-5">
                                <div className="py-4">
                                    <div className="px-3 py-4">
                                        <button className="ov_btn">NAAC Peer Team Visit May 2023</button>
                                    </div>
                                    <div className="p-2">
                                        <button className="ov_btn">Campus Online</button>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h1 className="py-4"><b>NOTICES</b></h1>
                                    <div className="notice_carousel p-5">
                                        <Ourvision></Ourvision>
                                    </div>
                                    {/* <div>
                                        <i class="fa-brands fa-facebook"></i>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="pb-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div>
                                        <h2 style={{ color: "#e65202" }}>We are associated with</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <img src="https://valiacollege.co.in/wp-content/uploads/2024/07/quick-heal-copy-e1720432674693.png" width={250}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message From The President */}
                <div>
                    <div className="Message_From_President">
                        <div className="container-fluid py-4 mb-4">
                            <div className="w-75 mx-auto text-white text-start py-3">
                                <h2 className="">Message From The President</h2>
                            </div>
                            <div className="w-75 mx-auto py-2">
                                <div className="row py-4">
                                    <div className="col-md-5">
                                        <div>
                                            <img className="w-100" src="https://valiacollege.co.in/wp-content/uploads/2021/03/Presidents-photograph-250x250-1.jpeg"></img>
                                        </div>
                                    </div>
                                    <div className="col-md-7 my-auto h-auto">
                                        <div className="container-md">
                                            <div className="">
                                                <p className="text-start text-white my-auto">The constant endeavour of the Cosmopolitan Education Society has been quality enhancement. With our sights aimed at the future, acknowledging the fast growing changes in the world of education today, our efforts are directed towards creating an environment in which talent and skill is nurtured and flourishes. this is what we strive for. Hard work always bears its rewards- it is a matter of pride for us to congratulate our student Miss. Preeti Matharu who attained the coveted 1 rank at the M.com examinations of the University of Mumbai.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NAAC Visit 2023 */}
                <div className="py-4">
                    <div>
                        <div className="w-75 mx-auto">
                            <div className="py-3" style={{color:'#e65202'}}>
                                <div>
                                    <h2>NAAC Visit 2023</h2>
                                </div>
                            </div>
                            {/* Carousel */}
                            <div id="demo" class="carousel slide" data-bs-ride="carousel">

                                {/* Indicators/dots */}
                                {/* <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
                                </div> */}

                                {/* The slideshow/carousel */}
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="Images/NAAC_Carasoul/Management-members.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/DSC_9962.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/DSC_8862.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/DSC_8344.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/DSC_8351.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/DSC_8333.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/PEER-TEAM-VISIT.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/DSC_8849.jpg" alt="" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="Images/NAAC_Carasoul/DSC_8359.jpg" alt="" class="d-block w-100" />
                                    </div>
                                </div>

                                {/* Left and right controls/icons */}
                                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* We are associated with */}
                <div className="">
                    <div>
                        <div>
                            <div className="pt-4">
                                <h2>We are associated with</h2>
                            </div>
                        </div>
                        <div className="w-75 pb-5 mx-auto">
                            <MyCarousel />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}