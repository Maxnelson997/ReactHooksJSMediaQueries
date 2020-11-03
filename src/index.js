import Layout from './components/layout/layout';
import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Use from './use';

ReactDOM.render(
    <Layout>
        <Use/>
    </Layout>,
    document.getElementById('layout-wrapper')
)

module.hot.accept();