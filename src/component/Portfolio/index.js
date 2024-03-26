/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
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
import Todo from "../../design/todo.gif";
import TodoImg from "../../design/todo.png";
import Twitter from "../../design/twitter.gif";
import TwitterImg from "../../design/twitter.png";
import Translate from "../../design/translate.gif";
import TranslateImg from "../../design/translate.png";
import FlightRadar from "../../design/flightradar.gif";
import FlightRadarImg from "../../design/flightradar.png";
import Job from "../../design/jobs.gif";
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
import Games from "../../design/gamesrn.gif";
import GamesImg from "../../design/gamesrn.png";
import Moviesb from "../../design/moviesb.gif";
import MoviesbImg from "../../design/moviesb.png";
import Video from "../Video";
import Isotope from "isotope-layout";

const Portfolio = () => {
  // const gridRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  const openModal = (video) => {
    setIsModalOpen(true);
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    isotope.current = new Isotope(".portfolio_container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      //   layoutMode: "masonry",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const navItems = document.querySelectorAll(".nav-link");
    navItems.forEach((item) => item.classList.remove("active"));
    const selectedItem = document.querySelector(`.nav-link[data-key="${key}"]`);
    if (selectedItem) {
      selectedItem.classList.add("active");
    }
  };

  return (
    <div className="position-relative">
      <ul className="nav nav-underline justify-content-center my-4">
        <li className="nav-item" onClick={handleFilterKeyChange("*")}>
          <span className="nav-link text-black" data-key="*">
            All
          </span>
        </li>
        <li className="nav-item" onClick={handleFilterKeyChange("javascript")}>
          <span className="nav-link text-black" data-key="javascript">
            JavaScript
          </span>
        </li>
        <li className="nav-item" onClick={handleFilterKeyChange("typescript")}>
          <span className="nav-link text-black" data-key="typescript">
            TypeScript
          </span>
        </li>
        <li className="nav-item" onClick={handleFilterKeyChange("reactjs")}>
          <span className="nav-link text-black" data-key="reactjs">
            React.js
          </span>
        </li>
        <li className="nav-item" onClick={handleFilterKeyChange("reactnative")}>
          <span className="nav-link text-black" data-key="reactnative">
            React Native
          </span>
        </li>
        <li className="nav-item" onClick={handleFilterKeyChange("nodejs")}>
          <span className="nav-link text-black" data-key="nodejs">
            Node.js
          </span>
        </li>
      </ul>

      <div className="portfolio-div">
        <div className="portfolio">
          <div className="grid g-0 row portfolio_container" ref={isotope}>
            <div className="col-md-6 portfolio-item javascript">
              <div className="row g-0">
                <div className="col-md-6">
                  <Video
                    video={Currency}
                    title="Currency"
                    poster={CurrencyImg}
                    src="https://github.com/aysgl/currency"
                    tag="js, html, scss"
                    openModal={() => openModal(Currency)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Collapse}
                    title="Collapse"
                    poster={CollapseImg}
                    src="https://github.com/aysgl/collapse"
                    tag="js, html, scss"
                    openModal={() => openModal(Collapse)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Discount}
                    title="Discount"
                    poster={DiscountImg}
                    src="https://github.com/aysgl/discount"
                    tag="js, html, scss"
                    openModal={() => openModal(Discount)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Feedback}
                    title="Feedback"
                    poster={FeedbackImg}
                    src="https://github.com/aysgl/feedback"
                    tag="js, html, scss"
                    openModal={() => openModal(Feedback)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 portfolio-item reactjs">
              <Video
                video={Notepad}
                title="Notepad"
                poster={NotepadImg}
                src="https://github.com/aysgl/notepad-react"
                tag="reactjs, scss"
                openModal={() => openModal(Notepad)}
              />
            </div>
            <div className="col-md-6 portfolio-item reactjs">
              <Video
                video={Dicegame}
                title="Dicegame"
                poster={DicegameImg}
                src="https://github.com/aysgl/dicegame"
                tag="reactjs, scss"
                openModal={() => openModal(Dicegame)}
              />
            </div>
            <div className="col-md-6 portfolio-item javascript">
              <div className="row g-0">
                <div className="col-md-6">
                  <Video
                    video={Github}
                    title="Github"
                    poster={GithubImg}
                    src="https://github.com/aysgl/github"
                    tag="js, html, scss"
                    openModal={() => openModal(Github)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Login}
                    title="Login"
                    poster={LoginImg}
                    src="https://github.com/aysgl/login"
                    tag="js, html, scss"
                    openModal={() => openModal(Login)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Movie}
                    title="Movie"
                    poster={MovieImg}
                    src="https://github.com/aysgl/movies"
                    tag="js, html, scss"
                    openModal={() => openModal(Movie)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Searchapp}
                    title="Searchapp"
                    poster={SearchappImg}
                    src="https://github.com/aysgl/searchapp"
                    tag="js, html, scss"
                    openModal={() => openModal(Searchapp)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 portfolio-item javascript">
              <div className="row g-0">
                <div className="col-md-6">
                  <Video
                    video={Playlist}
                    title="Playlist"
                    poster={PlaylistImg}
                    src="https://github.com/aysgl/playlist"
                    tag="js, html, scss"
                    openModal={() => openModal(Playlist)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Twitter}
                    title="Twitter"
                    poster={TwitterImg}
                    src="https://github.com/aysgl/tweetcard"
                    tag="js, html, scss"
                    openModal={() => openModal(Twitter)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Quizapp}
                    title="Quizapp"
                    poster={QuizappImg}
                    src="https://github.com/aysgl/quizapp"
                    tag="js, html, scss"
                    openModal={() => openModal(Quizapp)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Scrolling}
                    title="Blogs"
                    poster={ScrollingImg}
                    src="https://github.com/aysgl/blogs"
                    tag="js, html, scss"
                    openModal={() => openModal(Scrolling)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 portfolio-item reactjs">
              <Video
                video={Todo}
                title="Todo"
                poster={TodoImg}
                src="https://github.com/aysgl/todo-redux"
                tag="reactjs, redux, scss"
                openModal={() => openModal(Todo)}
              />
            </div>
            <div className="col-md-6 portfolio-item reactjs">
              <Video
                video={Translate}
                title="Translate"
                poster={TranslateImg}
                src="https://github.com/aysgl/translate"
                tag="reactjs, redux"
                openModal={() => openModal(Translate)}
              />
            </div>
            <div className="col-md-6 portfolio-item reactjs">
              <div className="row g-0">
                <div className="col-md-6">
                  <Video
                    video={FlightRadar}
                    title="Flight Radar"
                    poster={FlightRadarImg}
                    src="https://github.com/aysgl/flightradar"
                    tag="reactjs, redux"
                    openModal={() => openModal(FlightRadar)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Job}
                    title="Job"
                    poster={JobImg}
                    src="https://github.com/aysgl/jobs"
                    tag="reactjs, redux"
                    openModal={() => openModal(Job)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Coin}
                    title="Coin"
                    poster={CoinImg}
                    src="https://github.com/aysgl/coin"
                    tag="reactjs, chartjs"
                    openModal={() => openModal(Coin)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Chat}
                    title="Chat"
                    poster={ChatImg}
                    src="https://github.com/aysgl/chat"
                    tag="reactjs, firebase"
                    openModal={() => openModal(Chat)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 portfolio-item reactjs reactnative typescript reactnative">
              <div className="row g-0">
                <div className="col-md-6">
                  <Video
                    video={CarTs}
                    title="Car typescript"
                    poster={CarTsImg}
                    src="https://github.com/aysgl/carts"
                    tag="reactjs, typescript, scss"
                    openModal={() => openModal(CarTs)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={NoteTs}
                    title="Notes Typescript"
                    poster={NoteTsImg}
                    src="https://github.com/aysgl/notets"
                    tag="reactjs, typescript, scss"
                    openModal={() => openModal(NoteTs)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Notes}
                    title="Notes"
                    poster={NotesImg}
                    src="https://github.com/aysgl/notesrn"
                    tag="react native"
                    openModal={() => openModal(Notes)}
                  />
                </div>
                <div className="col-md-6">
                  <Video
                    video={Games}
                    title="Games"
                    poster={GamesImg}
                    src="https://github.com/aysgl/gamesrn"
                    tag="react native"
                    openModal={() => openModal(Games)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 portfolio-item nodejs">
              <Video
                video={Moviesb}
                title="Movies"
                poster={MoviesbImg}
                src="https://github.com/aysgl/moviesb"
                tag="node.js"
                openModal={() => openModal(Moviesb)}
              />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedVideo && (
        <div
          className="position-fixed bg-black w-100 vh-100 top-0 start-0"
          style={{ "--bs-bg-opacity": 0.9, zIndex: 99999 }}
          onClick={closeModal}
        >
          <div className="modal d-block">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content bg-transparent border-0">
                <div className="modal-body text-center">
                  <img
                    ref={isotope}
                    src={selectedVideo}
                    style={{ height: "86vh", width: "auto" }}
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
