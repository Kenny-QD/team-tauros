import React from 'react';
import axios from 'axios';

class CreateParty extends React.Component {
  constructor(props) {
    super(props);
    const {
      longitude,
      latitude,
      city,
      region,
    } = this.props;
    this.state = {
      name: '',
      start: '',
      end: '',
      date: '',
      radius: '',
      details: '',
      longitude,
      latitude,
      city,
      region,
      host_id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      getNewPartyEntry,
      longitude,
      latitude,
      city,
      region,
    } = this.props;
    axios.post('/api/homepage', this.state)
      .then(() => {
        getNewPartyEntry();
        this.setState({
          name: '',
          start: '',
          end: '',
          date: '',
          radius: '',
          details: '',
          longitude,
          latitude,
          city,
          region,
          host_id: 1,
        });
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    return (
      <div className="party-creation" >
      <div className="container-fluid">
        <div className="row">
          <div className="col center">
            <form onSubmit={this.handleSubmit}>
              <h4>Host a Party</h4>
              <div className="form-group creation-group">
                <label>Party</label>
                  <input
                    className="form-control creation-items"
                    name="name"
                    type="text"
                    value={this.state.name}
                    placeholder="Name Your Party"
                    onChange={this.handleChange}
                    />
              </div>
              <div className="form-group creation-group">
            <label>Party Details</label>
            <textarea
              className="form-control creation-items"
              name="details"
              rows="3.5"
              placeholder="80's theme? Signature cocktail? Let your neighbors know!"
              value={this.state.details}
              onChange={this.handleChange}
              />
              </div>
              <div className="form-group creation-group">
                <label>Start Time</label>
                  <input
                    className="form-control creation-items"
                    name="start"
                    type="time"
                    value={this.state.start}
                    onChange={this.handleChange}
                    />
              </div>
              <div className="form-group creation-group">
                <label>End Time</label>
                  <input
                    className="form-control creation-items"
                    type="time"
                    name="end"
                    value={this.state.end}
                    onChange={this.handleChange}
                    />
              </div>
              <div className="form-group creation-group">
                <label>Date</label>
                  <input
                    className="form-control creation-items"
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    />
              </div>
              <div className="form-group creation-group">
                <label>Radius</label>
                  <input
                    className="form-control creation-items"
                    type="number"
                    name="radius"
                    placeholder="Miles"
                    value={this.state.radius}
                    onChange={this.handleChange}
                    />
              </div>
              <div>
                  <input
                    className="btn btn-primary create-submit"
                    type="submit"
                    value="submit"
                    />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CreateParty;
