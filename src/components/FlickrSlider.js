import React, { Component } from "react";
import axios from "axios";
import Swiper from "swiper/dist/js/swiper.js";

function setupSwiper() {
  var mySwiper = new Swiper(".swiper-profile", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
    },
  });
}

class FlickrSlider extends Component {
  state = {
    photos: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://api.flickr.com/services/rest/", {
        params: {
          api_key: "0b6cd19f8d79fa07eb5b3057ce973db7",
          format: "json",
          method: "flickr.photos.search",
          user_id: "35694074@N02",
          tags: "profile",
          nojsoncallback: 1,
        },
      })
      .then((data) => {
        const photos = data.data.photos.photo.sort(() => Math.random() - 0.5);
        this.setState({
          photos: photos,
          isLoading: false,
        });
        setupSwiper();
      });
  }

  componentWillUnmount() {
    document.querySelector(".swiper-profile").destroy();
  }

  render() {
    const { photos, isLoading } = this.state;

    const slides = photos.map((photo) => (
      <div
        key={photo.id}
        className="swiper-slide bg-cover"
        style={{
          backgroundImage: `url(https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg)`,
        }}
      ></div>
    ));

    return (
      <div className="swiper-container swiper-profile ac">
        <div className="swiper-wrapper">{isLoading ? "..." : slides}</div>
      </div>
    );
  }
}

export default FlickrSlider;
