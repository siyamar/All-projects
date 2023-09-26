import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-10 px-6 py-2 rounded-lg hover:bg-teal-700" key={route.id}>
            <a href={route.path}>{route.name}</a>
            </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;