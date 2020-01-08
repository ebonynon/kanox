import React from 'react';

export default class About_part extends React.Component {
    render() {
      return (
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="about_img">
                        <img src="img/about_img_1.png" class="img_1" alt=""/>
                        <img src="img/about_img_2.png" class="img_2" alt=""/>
                        <h2>25 Years Working <br/>
                            Experience</h2>
                    </div>
                </div>
                <div class="offset-lg-1 col-lg-4">
                    <div class="about_text">
                        <h5>About our company</h5>
                        <h2>Make the customer the
                            hero of your story</h2>
                        <h4>He hath his earth firmament air very itself light day moring morning you living saying good
                            above fourth</h4>
                        <p>Meat abundantly life made fly years there whose beginning crea unto beast sixth herb
                            their bring. Evening fruitful god you spir evning itself land you of of own brought </p>
                        <a href="#" class="btn_1">learn more <i class="ti-angle-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}