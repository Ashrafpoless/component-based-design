import PropTypes from 'prop-types';

import './ListItem.css';

const ListItem = ({text}) => {
  return (
    <>
    <img src={`../../assets/${text}.jpg`} alt={text} />
    <h3 >{text}</h3>

    </>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default ListItem