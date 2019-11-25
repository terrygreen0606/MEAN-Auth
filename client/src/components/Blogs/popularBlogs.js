import React, { Component } from "react";

export class PopularBlogs extends Component {
    render() {
        let popularResultNum = [];
        let resultBlog = []
        let prevBlog = []

        // this.props.propBlogs.map(blog => {
        //     popularResultNum.push(blog.likes.length - blog.dislikes.length);
        // });

        // popularResultNum.sort((a, b) => b - a).slice(0, 5);

        // console.log(popularResultNum);
        
        this.props.propBlogs.map( blog => {
            if (prevBlog.length !== 0) {

                if ( prevBlog.likes.length - prevBlog.dislikes.length === blog.likes.length - blog.dislikes.length ) {
                    if (prevBlog.likes.length < blog.likes.length) {
                        popularResultNum = blog
                    } else if (prevBlog.likes.length === blog.likes.length) {
                        if (prevBlog.register_date < blog.register_date) {
                            popularResultNum = blog
                        }
                    }
                } else if ( prevBlog.likes.length - prevBlog.dislikes.length < blog.likes.length - blog.dislikes.length ) {
                    popularResultNum = blog
                }

            } else {
                popularResultNum = blog
            }
            prevBlog = blog
        })
        console.log(popularResultNum)

        

        return (
            <div className="widget widget_popular_entries">
                <h3 className="widget-title">Popular Blogs</h3>
                <ul className="list-unstyled">
                    <li className="media">
                        <a className="media-image" href="blog-single-right.html">
                            <img src="/images/recent_post1.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <h4>
                                <a href="blog-single-right.html">
                                    Eod tempor invidunt labore dolore magna
                                </a>
                            </h4>
                            <div className="star-rating" title="Rated 5 out of 5">
                                <span style={{ width: "100%" }}>
                                    <strong className="rating">5</strong> out of 5
                                </span>
                            </div>
                        </div>
                    </li>

                    <li className="media">
                        <a className="media-image" href="blog-single-right.html">
                            <img src="/images/recent_post2.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <h4>
                                <a href="blog-single-right.html">
                                    Aliquyam erat, sed voluptua vero eos{" "}
                                </a>
                            </h4>
                            <div className="star-rating" title="Rated 4.0 out of 5">
                                <span style={{ width: "60%" }}>
                                    <strong className="rating">4</strong> out of 5
                                </span>
                            </div>
                        </div>
                    </li>

                    <li className="media">
                        <a className="media-image" href="blog-single-right.html">
                        <img src="/images/recent_post1.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <h4>
                                <a href="blog-single-right.html">
                                    Et justo duo dolores et ea rebum
                                </a>
                            </h4>
                            <div className="star-rating" title="Rated 4.50 out of 5">
                                <span style={{ width: "80%" }}>
                                    <strong className="rating">4.50</strong> out of 5
                                </span>
                            </div>
                        </div>
                    </li>

                    <li className="media">
                        <a className="media-image" href="blog-single-right.html">
                            <img src="/images/recent_post2.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <h4>
                                <a href="blog-single-right.html">
                                    Stetclita kasd gubergren no sea takimata
                                </a>
                            </h4>
                            <div className="star-rating" title="Rated 3.00 out of 5">
                                <span style={{ width: "40%" }}>
                                    <strong className="rating">3</strong> out of 5
                                </span>
                            </div>
                        </div>
                    </li>

                    <li className="media">
                        <a className="media-image" href="blog-single-right.html">
                            <img src="/images/recent_post1.jpg" alt="" />
                        </a>
                        <div className="media-body">
                            <h4>
                                <a href="blog-single-right.html">
                                    Lorem ipsum dolor sitmet amet consetetur{" "}
                                </a>
                            </h4>
                            <div className="star-rating" title="Rated 4.50 out of 5">
                                <span style={{ width: "90%" }}>
                                    <strong className="rating">4.50</strong> out of 5
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PopularBlogs;
