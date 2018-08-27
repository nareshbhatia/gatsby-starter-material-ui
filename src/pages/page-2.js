import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import withRoot from '../withRoot';

const styles = theme => ({
    linkWrapper: {
        marginTop: theme.spacing.unit * 2
    }
});

const SecondPage = ({ classes }) => (
    <Layout>
        <Typography variant="display2" gutterBottom>
            Hi from the second page
        </Typography>
        <Typography>Welcome to page 2.</Typography>
        <Typography>Now go build something great.</Typography>

        <div className={classes.linkWrapper}>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
);

export default withRoot(withStyles(styles)(SecondPage));
