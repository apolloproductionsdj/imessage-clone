import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="" />
                <div className="sidebar__input">
                    <SearchIcon />
                    <input placeholder="search" />
                </div>
                <IconButton variant="outlined" className="sidebar__inputButton">
                    <RateReviewOutlinedIcon />
                </IconButton>

            </div>
            <div className="sidebar__chat">

            </div>
        </div>
    );
}

export default Sidebar;
