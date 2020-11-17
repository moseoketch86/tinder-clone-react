import React from 'react'
import './SwipeButtons.css'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons-repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons-left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons-star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons-right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons-lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        
        
        </div>
    )
}

export default SwipeButtons
