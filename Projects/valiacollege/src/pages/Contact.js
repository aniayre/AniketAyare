const Contact = () => {
    return (
        <div>

            <div className="conus">
                <div className="container-md w-75 mx-auto">
                    <div className="row container-lg">
                        <div className="col-lg-6">
                            <div>
                                <h3 className="cupht">CONTACT US</h3>
                                <div className="mt-5">
                                    <div className="row ps-3">
                                        <div className="col-1">
                                            <h4>
                                                <i class="bi bi-geo-alt fs-2"></i>
                                            </h4>
                                        </div>
                                        <div className="col-11 ps-4">
                                            <h6 className="consubh">
                                                <span>Address</span>
                                            </h6>
                                            <p>D.N.Nagar, Cosmopolitan Education Society Road, Andheri(West), Mumbai – 400 053.</p>
                                        </div>
                                    </div>
                                    <div className="row ps-3">
                                        <div className="col-1">
                                            <h3>
                                                <i class="bi bi-person-lines-fill fs-2"></i>
                                            </h3>
                                        </div>
                                        <div className="col-11 ps-4">
                                            <h6 className="consubh">
                                                <span>Contact Number</span>
                                            </h6>
                                            <p>For Bcom Section: 7710026759<br /> For Self Finance Section: 7710026749</p>
                                        </div>
                                    </div>
                                    <div className="row ps-3">
                                        <div className="col-1">
                                            <h3>
                                                <i class="bi bi-envelope fs-2"></i>
                                            </h3>
                                        </div>
                                        <div className="col-11 ps-4">
                                            <h6 className="consubh">
                                                <span>Email id</span>
                                            </h6>
                                            <p>valiacollege@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-4">
                            <div className="text-end bg-white px-4 py-5">
                                <form className="px-2">
                                    <div>
                                        <input className="inbg p-3 mb-3 w-100" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input className="inbg p-3 mb-3 w-100" placeholder="Email Address" />
                                    </div>
                                    <div>
                                        <textarea className="inbg p-3 mb-3 w-100" rows={5} placeholder="Message" />
                                    </div>
                                    <div className="conbtndv">
                                        <button className="subbtn">SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container w-75 mx-auto my-5 pt-5">
                <div className="row">
                    <div className="col-lg-6 p-4">
                        <div className="bhmar p-5">
                            <h3>We’re Open</h3>
                            <h5 className="">HOURS</h5>
                            <p>Monday : 8 am–6 pm</p>
                            <p>Tuesday : 8 am–6 pm</p>
                            <p>Wednesday : 8 am–6 pm</p>
                            <p>Thursday : 8 am–6 pm</p>
                            <p>Friday : 8 am–6 pm</p>
                            <p>Saturday : 8 am–6 pm</p>
                            <p>Sunday : Closed</p>
                        </div>
                    </div>
                    <div className="col-lg-6 p-4">
                        <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.601689964987!2d72.82982!3d19.125122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9dfbfdde539%3A0x3db27ee27018f061!2sValia%20College%20of%20Arts%2CCommerce%20And%20Science!5e0!3m2!1sen!2sin!4v1728119000664!5m2!1sen!2sin" height="542.6" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;