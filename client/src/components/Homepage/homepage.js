import React, { Component, Fragment } from 'react'

import Title from '../Title/title'

export class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <Title />
                <section className="s-pt-40 s-pb-30 s-py-lg-130 timetable ls text-center text-md-left" id="timetables">
                    <div className="container">
                        <div className="divider-25"></div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="section-heading">
                                    <h6 className="small-text color-main">updated schedule</h6>
                                    <h3>Timetable of classes</h3>
                                    <img className="image-wrap" src="/images/icon-main2.png" alt="" />
                                </div>
                                <div className="d-none d-lg-block divider-60"></div>
                            </div>
                            <div className="col-12">
                                <ul className="nav nav-tabs form-tabs visible-md">
                                    <li className="tab-selector nav-item active">
                                        <a className="nav-link first" href="#tab1" data-toggle="tab">Sunday</a>
                                    </li>
                                    <li className="tab-selector nav-item">
                                        <a className="nav-link" href="#tab2" data-toggle="tab">Monday</a>
                                    </li>
                                    <li className="tab-selector nav-item">
                                        <a className="nav-link" href="#tab3" data-toggle="tab">Tuesday</a>
                                    </li>
                                    <li className="tab-selector nav-item">
                                        <a className="nav-link" href="#tab4" data-toggle="tab">Wednesday</a>
                                    </li>
                                    <li className="tab-selector nav-item">
                                        <a className="nav-link" href="#tab5" data-toggle="tab">Thursday</a>
                                    </li>
                                    <li className="tab-selector nav-item">
                                        <a className="nav-link" href="#tab6" data-toggle="tab">Friday</a>
                                    </li>
                                    <li className="tab-selector nav-item">
                                        <a className="nav-link last" href="#tab7" data-toggle="tab">Saturday</a>
                                    </li>
                                </ul>
                                <select className="form-control hidden-md hidden-lg hidden-xl" id="tab_selector">
                                    <option value="0">Sunday</option>
                                    <option value="1">Monday</option>
                                    <option value="2">Tuesday</option>
                                    <option value="3">Wednesday</option>
                                    <option value="4">Thursday</option>
                                    <option value="5">Friday</option>
                                    <option value="6">Saturday</option>
                                </select>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab1">
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/02.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">International Cuisine from Alexander Lamb</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>19 jan - 25 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>09:00 am - 11:30 am</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Alexander Lamb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/01.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Fish, Meat and Poultry</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 05 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>11:30 am - 01:15 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Bert Webster</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/07.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Exotic Cuisine for Connoisseurs of Exotics</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 20 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>01:15 pm - 04:30 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Hana Montgom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/11.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Secrets of French Desserts</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>01 feb - 30 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>04:30 Pm - 07:00 pm </span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Elen Bucnan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab2">
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/03.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Secrets of French Desserts</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>19 jan - 25 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>09:00 am - 11:30 am</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Alexander Lamb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/04.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">International Cuisine from Alexander Lamb</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 05 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>11:30 am - 01:15 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Bert Webster</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/05.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Fish, Meat and Poultry</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 20 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>01:15 pm - 04:30 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Hana Montgom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/07.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Exotic Cuisine for Connoisseurs of Exotics</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>01 feb - 30 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>04:30 Pm - 07:00 pm </span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Elen Bucnan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab3">
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/08.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">International Cuisine from Alexander Lamb</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>19 jan - 25 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>09:00 am - 11:30 am</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Alexander Lamb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/09.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Fish, Meat and Poultry</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 05 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>11:30 am - 01:15 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Bert Webster</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/10.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Exotic Cuisine for Connoisseurs of Exotics</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 20 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>01:15 pm - 04:30 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Hana Montgom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/11.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Secrets of French Desserts</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>01 feb - 30 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>04:30 Pm - 07:00 pm </span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Elen Bucnan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab4">
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/12.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Secrets of French Desserts</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>19 jan - 25 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>09:00 am - 11:30 am</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Alexander Lamb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/01.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">International Cuisine from Alexander Lamb</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 05 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>11:30 am - 01:15 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Bert Webster</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/02.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Fish, Meat and Poultry</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 20 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>01:15 pm - 04:30 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Hana Montgom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/03.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Exotic Cuisine for Connoisseurs of Exotics</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>01 feb - 30 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>04:30 Pm - 07:00 pm </span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Elen Bucnan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab5">
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/04.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">International Cuisine from Alexander Lamb</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>19 jan - 25 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>09:00 am - 11:30 am</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Alexander Lamb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/05.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Fish, Meat and Poultry</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 05 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>11:30 am - 01:15 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Bert Webster</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/06.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Exotic Cuisine for Connoisseurs of Exotics</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 20 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>01:15 pm - 04:30 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Hana Montgom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/07.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Secrets of French Desserts</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>01 feb - 30 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>04:30 Pm - 07:00 pm </span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Elen Bucnan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab6">
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/08.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Secrets of French Desserts</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>19 jan - 25 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>09:00 am - 11:30 am</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Alexander Lamb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/09.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">International Cuisine from Alexander Lamb</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 05 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>11:30 am - 01:15 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Bert Webster</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/10.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Fish, Meat and Poultry</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 20 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>01:15 pm - 04:30 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Hana Montgom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/11.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Exotic Cuisine for Connoisseurs of Exotics</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>01 feb - 30 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>04:30 Pm - 07:00 pm </span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Elen Bucnan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab7">
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/12.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">International Cuisine from Alexander Lamb</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>19 jan - 25 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>09:00 am - 11:30 am</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Alexander Lamb</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/01.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Fish, Meat and Poultry</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 05 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>11:30 am - 01:15 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Bert Webster</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/02.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Exotic Cuisine for Connoisseurs of Exotics</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>31 jan - 20 feb, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>01:15 pm - 04:30 pm</span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Hana Montgom</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media bordered">
                                            <a href="#" className="ds">
                                                <img src="/images/gallery/03.jpg" alt="" />
                                            </a>
                                            <div className="media-body">
                                                <h5>
                                                    <a href="events-left.html">Secrets of French Desserts</a>
                                                </h5>
                                                <div className="btn-timetable">
                                                    <a href="" className="btn btn-outline-maincolor">About class</a>
                                                </div>
                                                <div className="item-meta">
                                                    <i className="fa fa-calendar color-main2"></i>
                                                    <span>01 feb - 30 mar, 2018</span>
                                                    <i className="fa fa-clock-o color-main2"></i>
                                                    <span>04:30 Pm - 07:00 pm </span>
                                                    <i className="fa fa-user color-main2"></i>
                                                    <span>Elen Bucnan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ls s-pt-75 s-pb-30 s-py-lg-100">
                    <div className="container">
                        <div className="row">

                            <div className="divider-65 d-none d-lg-block"></div>
                            <div className="col-md-12 text-center">
                                <h1 className="fw-400">Pricing Plan</h1>
                                <img className="image-wrap" src="/images/icon-main2.png" alt="" />
                            </div>

                            <div className="divider-50"></div>

                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-plan bordered with-bg">
                                    <div className="plan-name bg-maincolor">
                                        <h3>
                                            Startup Plan
                                        </h3>
                                    </div>
                                    <div className="price-wrap color-darkgrey">
                                        <span className="plan-sign">$</span>
                                        <span className="plan-price">49</span>
                                        <span className="plan-decimals">.95</span>
                                    </div>
                                    <div className="plan-description fs-14 text-uppercase color-darkgrey">
                                        Starting Business
                                    </div>
                                    <div className="plan-features">
                                        <ul className="list-bordered">
                                            <li>
                                                <p>Up to 5 Team Members</p>
                                            </li>
                                            <li>
                                                <p>1 Project</p>
                                            </li>
                                            <li>
                                                <p>Invoicing and Expence Tracking</p>
                                            </li>
                                            <li>
                                                <p>Q+A Call</p>
                                            </li>
                                            <li>
                                                <p>Email and Chat Support</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="plan-button">
                                        <a href="#" className="btn btn-outline-maincolor">Purchase</a>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-4 col-md-6">

                                <div className="pricing-plan plan-featured bordered with-bg">
                                    <div className="plan-name bg-maincolor2">
                                        <h3>
                                            Business Plan
                                        </h3>
                                    </div>
                                    <div className="price-wrap color-darkgrey">
                                        <span className="plan-sign">$</span>
                                        <span className="plan-price">99</span>
                                        <span className="plan-decimals">.95</span>
                                    </div>
                                    <div className="plan-description fs-14 text-uppercase color-darkgrey">
                                        Starting Business
                                    </div>
                                    <div className="plan-features">
                                        <ul className="list-bordered">
                                            <li>
                                                <p>Up to 10 Team Members</p>
                                            </li>
                                            <li>
                                                <p>5 Project</p>
                                            </li>
                                            <li>
                                                <p>Invoicing and Expence Tracking</p>
                                            </li>
                                            <li>
                                                <p>Written Report</p>
                                            </li>
                                            <li>
                                                <p>Email and Chat Support</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="plan-button">
                                        <a href="#" className="btn btn-outline-maincolor2">Purchase</a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 mx-sm-auto">

                                <div className="pricing-plan bordered with-bg">
                                    <div className="plan-name bg-maincolor">
                                        <h3>
                                            Expert Plan
                                        </h3>
                                    </div>
                                    <div className="price-wrap color-darkgrey">
                                        <span className="plan-sign">$</span>
                                        <span className="plan-price">199</span>
                                        <span className="plan-decimals">.95</span>
                                    </div>
                                    <div className="plan-description fs-14 text-uppercase color-darkgrey">
                                        Higher Business
                                    </div>
                                    <div className="plan-features">
                                        <ul className="list-bordered">
                                            <li>
                                                <p>Up to 30 Team Members</p>
                                            </li>
                                            <li>
                                                <p>10 Project</p>
                                            </li>
                                            <li>
                                                <p>Invoicing and Expence Tracking</p>
                                            </li>
                                            <li>
                                                <p>Written Report</p>
                                            </li>
                                            <li>
                                                <p>Email and Chat Support</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="plan-button">
                                        <a href="#" className="btn btn-outline-maincolor">Purchase</a>
                                    </div>
                                </div>

                            </div>

                            <div className="divider-55 d-none d-lg-block"></div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Homepage
