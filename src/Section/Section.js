import React from 'react';
import PropTypes from 'prop-types';;

const Section = (props) => (
    <section>
        <h2>{props.title}</h2>
        {props.children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section;