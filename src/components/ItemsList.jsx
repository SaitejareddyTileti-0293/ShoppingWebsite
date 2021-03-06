import React, { Component } from "react";
import data from "../itemsList.json";
import { connect } from "react-redux";
import { addItem } from "../redux";

class ItemsList extends Component {
  cardsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  handlePostRequest = (data) => {
    data.quantity = 1;
    const items = this.props.items;
    if (!items.some((item) => item.id === data.id)) {
      this.props.addItem(data);
    }
  };

  render() {
    return (
      <div className="container" style={this.cardsStyle}>
        {data.itemDetails.map((d, index) => (
          <div key={index} className="card col-md-4 col-sm-6">
            <img className="card-img-top" src={d.link} alt="shop-item" />
            <div className="card-body">
              <h5 className="card-title">{d.productDisplayName}</h5>
              <p className="card-text">
                {d.usage +
                  " " +
                  d.subCategory +
                  " " +
                  d.articleType +
                  " for the " +
                  d.season +
                  " season"}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="property">Colour : </span>
                <span className="value">{d.baseColour}</span>
              </li>
              <li className="list-group-item">
                <span className="property">Gender : </span>
                <span className="value">{d.gender}</span>
              </li>
              <li className="list-group-item">
                <span className="property">Category : </span>
                <span className="value">{d.masterCategory}</span>
              </li>
            </ul>
            <div className="card-body">
              <button
                className="btn btn-dark"
                onClick={() => this.handlePostRequest(d)}
              >
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (i) => dispatch(addItem(i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
