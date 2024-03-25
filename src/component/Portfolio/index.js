import React, { useRef } from "react";
import Collapse from "../../design/collapse.gif";
import CollapseImg from "../../design/collapse.png";
import Currency from "../../design/currency.gif";
import CurrencyImg from "../../design/currency.png";
import Dicegame from "../../design/dicegame.gif";
import DicegameImg from "../../design/dicegame.png";
import Discount from "../../design/discount.gif";
import DiscountImg from "../../design/discount.png";
import Feedback from "../../design/feedback.gif";
import FeedbackImg from "../../design/feedback.png";
import Github from "../../design/github.gif";
import GithubImg from "../../design/github.png";
import Login from "../../design/login.gif";
import LoginImg from "../../design/login.png";
import Movie from "../../design/movie.gif";
import MovieImg from "../../design/movie.png";
import Notepad from "../../design/notepad.gif";
import NotepadImg from "../../design/notepad.png";
import Playlist from "../../design/playlist.gif";
import PlaylistImg from "../../design/playlist.png";
import Quizapp from "../../design/quizapp.gif";
import QuizappImg from "../../design/quizapp.png";
import Scrolling from "../../design/scrolling.gif";
import ScrollingImg from "../../design/scrolling.png";
import Searchapp from "../../design/searchapp.gif";
import SearchappImg from "../../design/searchapp.png";
import Todo from "../../design/todo.mov";
import TodoImg from "../../design/todo.png";
import Twitter from "../../design/twitter.mov";
import TwitterImg from "../../design/twitter.png";
import Translate from "../../design/translate.gif";
import TranslateImg from "../../design/translate.png";
import FlightRadar from "../../design/flightradar.gif";
import FlightRadarImg from "../../design/flightradar.png";
import Job from "../../design/jobs.mov";
import JobImg from "../../design/jobs.png";
import Coin from "../../design/coin.gif";
import CoinImg from "../../design/coin.png";
import Chat from "../../design/chat.gif";
import ChatImg from "../../design/chat.png";
import CarTs from "../../design/carts.gif";
import CarTsImg from "../../design/carts.png";
import NoteTs from "../../design/notets.gif";
import NoteTsImg from "../../design/notets.png";
import Notes from "../../design/notes.gif";
import NotesImg from "../../design/notes.png";
import Games from "../../design/gamesrn.mov";
import GamesImg from "../../design/gamesrn.png";
import Moviesb from "../../design/moviesb.mov";
import MoviesbImg from "../../design/moviesb.png";
import Video from "../Video";

const Portfolio = () => {
  const gridRef = useRef(null);

  return (
    <div className="portfolio-div">
      <div className="portfolio">
        <div className="grid g-0 row portfolio_container " ref={gridRef}>
          <div className="col-md-6">
            <div className="row g-0">
              <div className="col-md-6">
                <Video
                  video={Currency}
                  title="Currency"
                  poster={CurrencyImg}
                  src="https://github.com/aysgl/currency"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Collapse}
                  title="Collapse"
                  poster={CollapseImg}
                  src="https://github.com/aysgl/collapse"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Discount}
                  title="Discount"
                  poster={DiscountImg}
                  src="https://github.com/aysgl/discount"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Dicegame}
                  title="Dicegame"
                  poster={DicegameImg}
                  src="https://github.com/aysgl/dicegame"
                  tag="reactjs, scss"
                  gridRef={gridRef}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Video
              video={Notepad}
              title="Notepad"
              poster={NotepadImg}
              src="https://github.com/aysgl/notepad-react"
              tag="reactjs, scss"
              gridRef={gridRef}
            />
          </div>
          <div className="col-md-6">
            <Video
              video={Feedback}
              title="Feedback"
              poster={FeedbackImg}
              src="https://github.com/aysgl/feedback"
              tag="js, html, scss"
              gridRef={gridRef}
            />
          </div>
          <div className="col-md-6">
            <div className="row g-0">
              <div className="col-md-6">
                <Video
                  video={Github}
                  title="Github"
                  poster={GithubImg}
                  src="https://github.com/aysgl/github"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Login}
                  title="Login"
                  poster={LoginImg}
                  src="https://github.com/aysgl/login"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Movie}
                  title="Movie"
                  poster={MovieImg}
                  src="https://github.com/aysgl/movies"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Searchapp}
                  title="Searchapp"
                  poster={SearchappImg}
                  src="https://github.com/aysgl/searchapp"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0">
              <div className="col-md-6">
                <Video
                  video={Todo}
                  title="Todo"
                  poster={TodoImg}
                  src="https://github.com/aysgl/todo-redux"
                  tag="reactjs, redux, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Twitter}
                  title="Twitter"
                  poster={TwitterImg}
                  src="https://github.com/aysgl/tweetcard"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Quizapp}
                  title="Quizapp"
                  poster={QuizappImg}
                  src="https://github.com/aysgl/quizapp"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Scrolling}
                  title="Blogs"
                  poster={ScrollingImg}
                  src="https://github.com/aysgl/blogs"
                  tag="js, html, scss"
                  gridRef={gridRef}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Video
              video={Playlist}
              title="Playlist"
              poster={PlaylistImg}
              src="https://github.com/aysgl/playlist"
              tag="js, html, scss"
              gridRef={gridRef}
            />
          </div>
          <div className="col-md-6">
            <Video
              video={Translate}
              title="Translate"
              poster={TranslateImg}
              src="https://github.com/aysgl/translate"
              tag="reactjs, redux"
              gridRef={gridRef}
            />
          </div>
          <div className="col-md-6">
            <div className="row g-0">
              <div className="col-md-6">
                <Video
                  video={FlightRadar}
                  title="Flight Radar"
                  poster={FlightRadarImg}
                  src="https://github.com/aysgl/flightradar"
                  tag="reactjs, redux"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Job}
                  title="Job"
                  poster={JobImg}
                  src="https://github.com/aysgl/jobs"
                  tag="reactjs, redux"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Coin}
                  title="Coin"
                  poster={CoinImg}
                  src="https://github.com/aysgl/coin"
                  tag="reactjs, chartjs"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Chat}
                  title="Chat"
                  poster={ChatImg}
                  src="https://github.com/aysgl/chat"
                  tag="reactjs, firebase"
                  gridRef={gridRef}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-0">
              <div className="col-md-6">
                <Video
                  video={CarTs}
                  title="Car typescript"
                  poster={CarTsImg}
                  src="https://github.com/aysgl/carts"
                  tag="reactjs, typescript, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={NoteTs}
                  title="Notes Typescript"
                  poster={NoteTsImg}
                  src="https://github.com/aysgl/notets"
                  tag="reactjs, typescript, scss"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Notes}
                  title="Notes"
                  poster={NotesImg}
                  src="https://github.com/aysgl/notesrn"
                  tag="react native"
                  gridRef={gridRef}
                />
              </div>
              <div className="col-md-6">
                <Video
                  video={Games}
                  title="Games"
                  poster={GamesImg}
                  src="https://github.com/aysgl/gamesrn"
                  tag="react native"
                  gridRef={gridRef}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Video
              video={Moviesb}
              title="Movies"
              poster={MoviesbImg}
              src="https://github.com/aysgl/moviesb"
              tag="node.js"
              gridRef={gridRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
