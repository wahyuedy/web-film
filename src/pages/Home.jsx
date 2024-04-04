import React, { useRef } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Request";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={request.requestUpComing} />
      <Row rowID="2" title="Popular" fetchURL={request.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={request.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={request.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={request.requestHorror} />
      <Row rowID="6" title="Action" fetchURL={request.requestACtion} />
      <Row rowID="7" title="Thriller" fetchURL={request.requestThriller} />
      <Footer />
    </div>
  );
};
export default Home;
