import Layout from './components/layout/layout';
import BreakpointProvider from './components/breakpoint/breakpointProvider';
import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Use from './use';

const queries = {
    xs: '(min-width: 320px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)'
}

ReactDOM.render(
    <BreakpointProvider queries={queries}>
        <Layout>
            <Use/>
        </Layout>
    </BreakpointProvider>,
    document.getElementById('layout-wrapper')
)

module.hot.accept();