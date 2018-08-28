import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}
                >
                    {siteTitle}
                </Link>
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
