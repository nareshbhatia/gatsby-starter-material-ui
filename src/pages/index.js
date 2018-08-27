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

const IndexPage = ({ classes }) => (
    <Layout>
        <Typography variant="display2" gutterBottom>
            Hi people
        </Typography>
        <Typography>Welcome to your new Gatsby site.</Typography>
        <Typography>Now go build something great.</Typography>

        <div className={classes.linkWrapper}>
            <Link to="/page-2/">Go to page 2</Link>
        </div>
    </Layout>
);

export default withRoot(withStyles(styles)(IndexPage));
