import React, { useRef } from 'react';
import Isotope from 'isotope-layout';
import Collapse from "../../design/collapse.mov"
import Currency from "../../design/currency.mov"
import CurrencyImg from "../../design/currency.png"
import Dicegame from "../../design/dicegame.mov"
import Discount from "../../design/discount.mov"
import Feedback from "../../design/feedback.mov"
import Github from "../../design/github.mov"
import Login from "../../design/login.mov"
import Movie from "../../design/movie.mov"
import Notepad from "../../design/notepad.mov"
import Playlist from "../../design/playlist.mov"
import Quizapp from "../../design/quizapp.mov"
import Scrolling from "../../design/scrolling.mov"
import Searchapp from "../../design/searchapp.mov"
import Todo from "../../design/todo.mov"
import Twitter from "../../design/twitter.mov"
import Video from '../Video';


const Portfolio = () => {
    const gridRef = useRef(null);

    return (
        <div className="portfolio-div">
            <div className="portfolio">
                <div className="grid g-0 row portfolio_container " ref={gridRef}>
                    <div className='col-md-6'>
                        <div className='row g-0'>
                            <div className="col-md-6">
                                <Video src={Currency} title="Currency" poster={CurrencyImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Collapse} title="Collapse" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Discount} title="Discount" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Dicegame} title="Dicegame" gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Video src={Notepad} title="Notepad" gridRef={gridRef} />

                    </div>
                    <div className='col-md-6'>
                        <Video src={Feedback} title="Feedback" gridRef={gridRef} />
                    </div>
                    <div className='col-md-6'>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <Video src={Github} title="Github" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Login} title="Login" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Movie} title="Movie" gridRef={gridRef} />
                            </div>
                            <div className='col-md-6'>
                                <Video src={Searchapp} title="Searchapp" gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <Video src={Todo} title="Todo" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Twitter} title="Twitter" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Quizapp} title="Quizapp" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Scrolling} title="Scrolling" gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Video src={Playlist} title="Playlist" gridRef={gridRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

