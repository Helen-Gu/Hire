// Imports
import React, { Component } from "react";

// Import React Scrit Libraray to load Google object
import Script from "react-load-script";

class Search extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: "",
      query: "",
    };
  }

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["(cities)"],
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById(this.props.id),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields(["address_components", "formatted_address"]);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
      });
    }
  };

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLbL6to8MEisFeDyEjyQo4JjH-2GYp_14&libraries=places&language=en"
          onLoad={this.handleScriptLoad}
        />
        <div class="input-field">
          <input
            id={this.props.id}
            onChange={(event) => this.setState({ query: event.target.value })}
            className={this.props.className}
            // type="text"
            placeholder=""
            // ref={(input) => { this.nameInput = input; }}
            value={this.state.query}
          />
          <label htmlFor={this.props.id}>Where You Live</label>
        </div>
      </div>
    );
  }
}

export default Search;
