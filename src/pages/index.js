import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const styles = theme => ({
    section: {
        marginTop: theme.spacing.unit * 3
    },
    button: {
        marginRight: theme.spacing.unit
    }
});

const IndexPage = ({ classes }) => (
    <Layout>
        <Typography variant="display2" gutterBottom>
            Hi people
        </Typography>
        <Typography>Welcome to your new Gatsby site.</Typography>
        <Typography>This page has been styled using Material-UI.</Typography>

        <section className={classes.section}>
            <Typography variant="title" gutterBottom>
                Sample Components
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Primary
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
            >
                Secondary
            </Button>
        </section>

        <section className={classes.section}>
            <Link to="/page-2/">Go to page 2</Link>
        </section>
    </Layout>
);

export default withStyles(styles)(IndexPage);
