import {Component} from 'react'
import './index.css'

const statusIds = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  registered = () => (
    <div className="bg-container">
      <div className="text">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="img"
        />
        <h1> You have already registered for the event </h1>
      </div>
    </div>
  )

  yetToRegister = () => (
    <div className="bg-container">
      <div className="text">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="img-1"
        />
        <p>
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fail totally in love with this
          beautiful art form.
        </p>
        <button className="button" type="button">
          {' '}
          Register Here{' '}
        </button>
      </div>
    </div>
  )

  registrationsClosed = () => (
    <div className="bg-container">
      <div className="text">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="img-1"
        />
        <h1> Registrations Are Closed Now! </h1>
        <p> Stay tuned. we will reopen the registrations soon! </p>
      </div>
    </div>
  )

  normal = () => (
    <div className="bg-container-1">
      <p> Click on an event, to view its registration details </p>
    </div>
  )

  render() {
    const {status} = this.props
    switch (status) {
      case statusIds.registered:
        return this.registered()
      case statusIds.yetToRegister:
        return this.yetToRegister()
      case statusIds.registrationsClosed:
        return this.registrationsClosed()
      default:
        return this.normal()
    }
  }
}

export default ActiveEventRegistrationDetails
