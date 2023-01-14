import React from 'react'

const ScrollComponent = ({ scrollToTop }) => {
    return (
        <svg width="500" height="79" viewBox="0 0 500 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.28882e-05C0 2.28882e-05 81.8439 6.43903 130.456 24.6528C171.599 40.0678 185.313 78.2624 229.167 78.9895C274.389 79.7392 289.326 40.2894 331.845 24.6528C393.583 1.94843 500 0 500 0L250 1.52588e-05L0 2.28882e-05Z" fill={scrollToTop ? "#f9feff" : "#bce8f1"} />
        </svg>

    )
}

export default ScrollComponent