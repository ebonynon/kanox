import React from 'react';

export default class Footer extends React.Component {
    render() {
      return (
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-sm-6 col-md-6 col-xl-3">
                    <div class="single-footer-widget footer_1">
                        <a href="index.html"> <img src="img/footer_logo.png" alt=""/> </a>
                        <p>But when shot real her. Chamber her one visite removal six
                            sending himself boys scot exquisite existend an </p>
                        <p>But when shot real her hamber her </p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-4">
                    <div class="single-footer-widget footer_2">
                        <h4>Newsletter</h4>
                        <p>Stay updated with our latest trends Seed heaven so said place winged over given forth fruit.
                        </p>
                        <form action="#">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder='Enter email address'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter email address'"/>
                                    <div class="input-group-append">
                                        <button class="btn" type="button"><i class="ti-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="social_icon">
                            <a href="#"> <i class="ti-facebook"></i> </a>
                            <a href="#"> <i class="ti-twitter-alt"></i> </a>
                            <a href="#"> <i class="ti-instagram"></i> </a>
                            <a href="#"> <i class="ti-skype"></i> </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 col-xl-3">
                    <div class="single-footer-widget footer_3">
                        <h4>Instagram</h4>
                        <div class="footer_img">
                            <div class="single_footer_img">
                                <img src="img/footer_img/footer_img_1.png" alt=""/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img/footer_img_2.png" alt=""/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img/footer_img_3.png" alt=""/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img/footer_img_4.png" alt=""/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img/footer_img_5.png" alt=""/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img/footer_img_6.png" alt=""/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      );
    }
}