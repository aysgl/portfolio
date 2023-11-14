import React, { useRef } from 'react';
import Isotope from 'isotope-layout';
import Collapse from "../../design/collapse.mov"
import CollapseImg from "../../design/collapse.png"
import Currency from "../../design/currency.mov"
import CurrencyImg from "../../design/currency.png"
import Dicegame from "../../design/dicegame.mov"
import DicegameImg from "../../design/dicegame.png"
import Discount from "../../design/discount.mov"
import DiscountImg from "../../design/discount.png"
import Feedback from "../../design/feedback.mov"
import FeedbackImg from "../../design/feedback.png"
import Github from "../../design/github.mov"
import GithubImg from "../../design/github.png"
import Login from "../../design/login.mov"
import LoginImg from "../../design/login.png"
import Movie from "../../design/movie.mov"
import MovieImg from "../../design/movie.png"
import Notepad from "../../design/notepad.mov"
import NotepadImg from "../../design/notepad.png"
import Playlist from "../../design/playlist.mov"
import PlaylistImg from "../../design/playlist.png"
import Quizapp from "../../design/quizapp.mov"
import QuizappImg from "../../design/quizapp.png"
import Scrolling from "../../design/scrolling.mov"
import ScrollingImg from "../../design/scrolling.png"
import Searchapp from "../../design/searchapp.mov"
import SearchappImg from "../../design/searchapp.png"
import Todo from "../../design/todo.mov"
import TodoImg from "../../design/todo.png"
import Twitter from "../../design/twitter.mov"
import TwitterImg from "../../design/twitter.png"
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
                                <Video src={Collapse} title="Collapse" poster={CollapseImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Discount} title="Discount" poster={DiscountImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Dicegame} title="Dicegame" poster={DicegameImg} gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Video src={Notepad} title="Notepad" poster={NotepadImg} gridRef={gridRef} />

                    </div>
                    <div className='col-md-6'>
                        <Video src={Feedback} title="Feedback" poster={FeedbackImg} gridRef={gridRef} />
                    </div>
                    <div className='col-md-6'>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <Video src={Github} title="Github" poster={GithubImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Login} title="Login" poster={LoginImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Movie} title="Movie" poster={MovieImg} gridRef={gridRef} />
                            </div>
                            <div className='col-md-6'>
                                <Video src={Searchapp} title="Searchapp" poster={SearchappImg} gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <Video src={Todo} title="Todo" poster={TodoImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Twitter} title="Twitter" poster={TwitterImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Quizapp} title="Quizapp" poster={QuizappImg} gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video src={Scrolling} title="Scrolling" poster={ScrollingImg} gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Video src={Playlist} title="Playlist" poster={PlaylistImg} gridRef={gridRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

