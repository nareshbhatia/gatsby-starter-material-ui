import React from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

const NotFoundPage = () => (
    <Layout>
        <Typography variant="h3" gutterBottom>
            NOT FOUND
        </Typography>
        <Typography>
            You just hit a route that doesn&#39;t exist... the sadness.
        </Typography>
    </Layout>
);

export default NotFoundPage;
