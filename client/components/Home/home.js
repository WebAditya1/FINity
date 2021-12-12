import React from 'react';
import {Main} from "../icons/index";
// import book1 from "./Images/Book1.png";
// import book2 from "./Images/Book2.png";
// import book3 from "./Images/Book3.png";
// import book4 from "./Images/Book4.png";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from "./home.module.css";
import Header from "../layout/header/index";

export default function Home() {
    return (
        <>
            <div className={styles.section}>
                <div id={styles.section1}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.maindiv}>
                                {/* <div className="col-lg-6 col-md-6 col-sm-10 col-10"> */}
                                <div>
                                    <h3 className={styles.topheading}>Free and open stock market and financial education</h3>
                                   
                                    <p className={styles.toptext}>Think of Finity as your new best friend, helping you towards your journey to Financial Literacy.
                                        We have an extensive and in-depth collection of the stock market and financial <span className={styles.links}>lessons</span>,
                                        along with an extensive collection of <span className={styles.links}>Books</span>, <span className={styles.links}>Podcasts</span>, <span className={styles.links}>Playlists</span>, & <span className={styles.links}>Resources</span> specifically curated by our Team to help you navigate to your Best Financially-educated self. It is openly accessible to everyone and is one of the largest financial education resources on the web.</p>
                                    <p className={styles.toptextp2}>Checkout & be a part of our community. Enter the <span className={styles.links}>Forum</span>.</p>
                                </div>
                                {/* </div> */}

                                {/* <div className="col-lg-6 col-md-6 col-sm-10 col-10"> */}
                                <div className={styles.topImage}>
                                    <Main />
                                    {/* <img className="top-Image" src=""></img> */}
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div id={styles.section2}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.modulediv}>
                                <h4 className={styles.module}>Modules</h4>
                                <p className={styles.smalltitle}>Basics of Finance and Trading</p>
                            </div>
                        </div>

                        <div className={styles.row1}>
                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>1.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>2.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>3.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>4.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>5.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>6.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>7.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className={styles.cardsdiv}>
                                <div className={styles.modulecards}>
                                    <h4 className={styles.title}><span className={styles.no}>8.</span> Introduction to Stock Markets</h4>
                                    <div>
                                    <p className={styles.chapter}>15 chapters</p>
                                    {/* <ProgressBar id="progress" variant="success" now={60}></ProgressBar> */}
                                    </div>
                                    <p className={styles.cardtext}>Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>
                            
                            <p className={styles.checkupdate}>Check updates...</p>
                        </div>
                    </div>
                </div>

                <div id={styles.section3}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.modulediv}>
                                <h4 className={styles.module}>Books</h4>
                                <p className={styles.smalltitle}>Level up by reading the best books in the industry</p>
                            </div>
                        </div>

                        <div className={styles.row}>
                            {/* <div className="col-lg-3 col-md-3 col-sm-6 col-12"> */}
                                <div className={styles.bookcards} >
                                    {/* <img src={book1} /> */}
                                    <div className={styles.cardbody , styles.bookdesdiv}>
                                        <h4 className="book-title">A Random Walk Down Wall Street</h4>
                                        <p className="book-text"> Burton Malkiel</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="card book-cards">
                                    {/* <img src={book2} /> */}
                                    <div className="card-body book-des-div">
                                        <h4 className="book-title">The Intelligent Investor</h4>
                                        <p className="book-text"> Benjamin Graham</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="card book-cards">
                                    {/* <img src={book3} /> */}
                                    <div className="card-body book-des-div">
                                        <h4 className="book-title">One Up on Wall Street</h4>
                                        <p className="book-text"> John Rothchild and Peter Lynch</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="card book-cards">
                                    {/* <img src={book4} /> */}
                                    <div className="card-body book-des-div">
                                        <h4 className="book-title">Little Book of Common Sense Investing</h4>
                                        <p className="book-text"> John C. Bogle</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}