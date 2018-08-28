import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const styles = theme => ({
    section: {
        marginTop: theme.spacing.unit * 3
    },
    toolbar: {
        marginTop: theme.spacing.unit * 2
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
            <div className={classes.toolbar}>
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
            </div>
            <div className={classes.toolbar}>
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="Add"
                    className={classes.button}
                >
                    <AddIcon />
                </Button>
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="Edit"
                    className={classes.button}
                >
                    <Icon>edit_icon</Icon>
                </Button>
                <Button
                    variant="fab"
                    color="secondary"
                    aria-label="Delete"
                    className={classes.button}
                >
                    <DeleteIcon />
                </Button>
                <Button
                    variant="fab"
                    color="secondary"
                    aria-label="Star"
                    className={classes.button}
                >
                    <Icon>star</Icon>
                </Button>
            </div>
        </section>

        <section className={classes.section}>
            <Link to="/page-2/">Go to page 2</Link>
        </section>
    </Layout>
);

export default withStyles(styles)(IndexPage);
