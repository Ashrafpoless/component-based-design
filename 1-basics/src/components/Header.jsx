// import PropTypes from 'prop-types'
import { Button } from './Button';

import './Header.css';

const Header = () => {
  return (
    <header>
        <h1>Pokemon App</h1>
        <Button text='Click me' /> 
    </header>
  )
}

Header.propTypes = {}

export default Header