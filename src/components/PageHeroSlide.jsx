import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie_Serie_View from "./Movie_Serie_View";
import { Link } from "react-router-dom";

import netflix_icon from "../assets/images/icon.png";

export default function PageHeroSlide({ data }) {
  return (
    <>
      <div className="fluid-overlay"></div>
      <img
        src={`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${data.backdrop_path}`}
        alt="slider-bg"
        className="slide-bg-img"
      />
      <div className="slide-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-2 col-4">
              <div className="work-category">
                <img width={25} height={20} src={netflix_icon} alt="netflix" />
                <span className="ms-2">{data.title ? "MOVIES" : "SERIES"}</span>
              </div>
              <div className="work-banner">
                <h2 className="m-0 work-title">{data.title || data.name}</h2>
              </div>
              <div className="work-info d-flex">
                <span className="work-info-tag  age-class">
                  {data.release_date?.split("-")[0] ||
                    data.first_air_date?.split("-")[0]}
                </span>
              </div>
              <p className="work-description py-2">{data.overview}</p>
              <div className="work-actions-btns">
                <Link
                  to={`/watch/${data.title ? "movie" : "serie"}/${data.id}/${
                    data.name ? "season/1/epsoide/1" : ""
                  }`}
                  className="btn me-3"
                >
                  <i className="fal fa-play me-3"></i>
                  play
                </Link>
                <Link
                  to={`/${data.title ? "movie" : "serie"}/${data.id}`}
                  className="btn me-3 info-link-btn"
                >
                  more information
                </Link>
              </div>
            </div>
            <div className="offset-2 col-2 p-0 position-relative">
              <Movie_Serie_View work={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}