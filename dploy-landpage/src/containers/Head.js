import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Head() {
    return (
        <div className="head">
            <button className="discover-btn">Discover &nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    )
}
