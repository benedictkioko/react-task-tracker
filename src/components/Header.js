import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1 className="text-4xl font-bold">{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
