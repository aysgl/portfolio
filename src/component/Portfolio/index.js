import React, { useRef } from 'react';
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
import Translate from "../../design/translate.mov"
import TranslateImg from "../../design/translate.png"
import FlightRadar from "../../design/flightradar.mov"
import FlightRadarImg from "../../design/flightradar.png"
import Job from "../../design/jobs.mov"
import JobImg from "../../design/jobs.png"
import Coin from "../../design/coin.mov"
import CoinImg from "../../design/coin.png"
import Chat from "../../design/chat.mov"
import ChatImg from "../../design/chat.png"
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
                                <Video video={Currency} title="Currency" poster={CurrencyImg} src="https://github.com/aysgl/currency" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Collapse} title="Collapse" poster={CollapseImg} src="https://github.com/aysgl/collapse" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Discount} title="Discount" poster={DiscountImg} src="https://github.com/aysgl/discount" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Dicegame} title="Dicegame" poster={DicegameImg} src="https://github.com/aysgl/dicegame" tag="reactjs, scss" gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Video video={Notepad} title="Notepad" poster={NotepadImg} src="https://github.com/aysgl/notepad-react" tag="reactjs, scss" gridRef={gridRef} />

                    </div>
                    <div className='col-md-6'>
                        <Video video={Feedback} title="Feedback" poster={FeedbackImg} src="https://github.com/aysgl/feedback" tag="js, html, scss" gridRef={gridRef} />
                    </div>
                    <div className='col-md-6'>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <Video video={Github} title="Github" poster={GithubImg} src="https://github.com/aysgl/github" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Login} title="Login" poster={LoginImg} src="https://github.com/aysgl/login" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Movie} title="Movie" poster={MovieImg} src="https://github.com/aysgl/movies" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className='col-md-6'>
                                <Video video={Searchapp} title="Searchapp" poster={SearchappImg} src="https://github.com/aysgl/searchapp" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <Video video={Todo} title="Todo" poster={TodoImg} src="https://github.com/aysgl/todo-redux" tag="reactjs, redux, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Twitter} title="Twitter" poster={TwitterImg} src="https://github.com/aysgl/tweetcard" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Quizapp} title="Quizapp" poster={QuizappImg} src="https://github.com/aysgl/quizapp" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Scrolling} title="Blogs" poster={ScrollingImg} src="https://github.com/aysgl/blogs" tag="js, html, scss" gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Video video={Playlist} title="Playlist" poster={PlaylistImg} src="https://github.com/aysgl/playlist" tag="js, html, scss" gridRef={gridRef} />
                    </div>
                    <div className='col-md-6'>
                        <Video video={Translate} title="Translate" poster={TranslateImg} src="https://github.com/aysgl/translate" tag="reactjs, redux" gridRef={gridRef} />
                    </div>
                    <div className='col-md-6'>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <Video video={FlightRadar} title="Flight Radar" poster={FlightRadarImg} src="https://github.com/aysgl/flightradar" tag="reactjs, redux" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Job} title="Job" poster={JobImg} src="https://github.com/aysgl/jobs" tag="reactjs, redux" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Coin} title="Coin" poster={CoinImg} src="https://github.com/aysgl/coin" tag="reactjs, chartjs" gridRef={gridRef} />
                            </div>
                            <div className="col-md-6">
                                <Video video={Chat} title="Chat" poster={ChatImg} src="https://github.com/aysgl/chat" tag="reactjs, firebase" gridRef={gridRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;


