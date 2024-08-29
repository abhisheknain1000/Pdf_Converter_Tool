import PropTypes from 'prop-types';

const Button = ({ label, link, icon }) => {
    return (
        <a className="btn" href={link}>
            {label} {icon}
        </a>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    icon: PropTypes.element
};


export default Button;
