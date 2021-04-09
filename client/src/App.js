import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getvideos } from "./actions/getvideos.js";
import "./App.css";
import PropTypes from "prop-types";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import { Button } from "@material-ui/core";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar.js";
const App = ({ videos: { videos }, getvideos }) => {
  const [term, setterm] = useState("");
  const [selectvideo, setselectvideo] = useState();
  const onchange = (e) => {
    setterm(e.target.value);
  };
  const onvideoselect = (video) => {
    setselectvideo(video);
  };
  useEffect(() => {
    getvideos("Pepa Pig");
  }, []);
  const formOnSubmit = (e) => {
    e.preventDefault();
    getvideos(term);
    setselectvideo(videos[0]);
  };

  return (
    <Provider store={store}>
      <Fragment>
        <div className="page">
          <Navbar />
          <h1 className="heading">Aquí tienes tu propia web para que descarges los videos favoritos de tus peques!!!</h1>
          <form
            onSubmit={(e) => {
              formOnSubmit(e);
            }}
          >
            <div className="input_bro">
              <input
                className="impt"
                type="text"
                placeholder="Pon aquí que buscas"
                spellCheck="false"
                value={term}
                onChange={(e) => {
                  onchange(e);
                }}
              />

              <div className="btn">
                <Button
                  onClick={(e) => {
                    formOnSubmit(e);
                  }}
                  variant="contained"
                  color="primary"
                  className="btn1"
                >
                  ¡¡Ruben Selections!!
                </Button>
              </div>
            </div>
          </form>
          <div className="whoel-section">
            <div className="left">
              <VideoDetail video={selectvideo ? selectvideo : videos[0]} />
            </div>
            <div className="right">
              <VideoList videos={videos} onvideoselect={onvideoselect} />
            </div>
          </div>
        </div>
        <footer className="last">
          <br></br>
          <br></br>
          <br></br>
          <p>Thanks for share your code Gunratna!! ;D </p>
          <p className="credits">&copy; coded by Gunratna</p>
        </footer>
      </Fragment>
    </Provider>
  );
};
App.propTypes = {
  videos: PropTypes.object.isRequired,
  getvideos: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  videos: state.getvideoreducer,
});
export default connect(mapStateToProps, { getvideos })(App);

