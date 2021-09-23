import React from 'react'
import PublicLayout from '../../layouts/Public/PublicLayout';

const Account = () => {
    return (
        <PublicLayout>
            <section class="section-1">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="img_cover">
                                        <img src="img/Profile_pic.png" class=" img-fluid w-30" alt="..."/>
                                        <a to="#" class ="Shape">
                                        <img src="img/Shape 3.png" class ="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                    <h4>
                                        Ganu Patson
                                    </h4>
                                    <p class="p_1">
                                        Email: ganu.patson@gmail.com
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row row_2">
                        <div class="col-lg-8 col-md-8 col-12">
                            <p class="p_2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                    <div class="row my-3 gh d-flex justify-content-center">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="d-flex">
                                <div class="back">
                                    <img src="img/Shape 5.png" alt="" class="img-fluid "/>
                                </div>
                                <p class="p_3">
                                    Refer your friends
                                </p>
                            </div>

                        </div>
                    </div>
                    <div class="row my-3  d-flex justify-content-center">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="d-flex">
                                <div class="back">
                                    <img src="img/Shape 5.png" alt="" class="img-fluid "/>
                                </div>
                                <p class="p_3">
                                    Refer your friends
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="row my-3 hk d-flex justify-content-center">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="d-flex">
                                <div class="back">
                                    <img src="img/Shape 5.png" alt="" class="img-fluid "/>
                                </div>
                                <p class="p_3">
                                    Refer your friends
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}

export default Account;
