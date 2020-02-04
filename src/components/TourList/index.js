import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    const toursavailable = tours.length ? (
      tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
      ))
    ) : (
      <p className="exitInfo">You may travel back home now. Thank you !!!</p>
    )
    return (
      <section className="tourlist">
          {toursavailable}
      </section>
    );
  }
}
