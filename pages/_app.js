import React from 'react'
import App, { Container } from 'next/app'
import * as SentryNode from '@sentry/browser';
// import * as SentryNode from '@sentry/node';
const axios = require('axios');

SentryNode.init({
    dsn: "https://f9b7080967954f65a3cfc353b66f708d@sentry.io/1384259",
    autoBreadcrumbs: true,
    captureUnhandledRejections: true,
});

class MyApp extends App {
    constructor(...args) {
        super(...args);


        //
        // Sentry.init({
        //     dsn: "https://f9b7080967954f65a3cfc353b66f708d@sentry.io/1384259",
        //     autoBreadcrumbs: true,
        //     captureUnhandledRejections: true,
        // });
    }

    static async getInitialProps({ Component, router, ctx }) {
        SentryNode.captureException('throwing another exception')

        let pageProps = {};


        try {

            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps(ctx)
                if (ctx.err) {
                    console.log('working');
                    // axios.post('http://localhost:5000', { err: ctx.err })
                    SentryNode.captureException(ctx.err.toString() + 'new')

                    console.log('AFTERRRRRR');
                    throw error;
                }
                }
            }
         catch (error) {
            axios.post('http://localhost:5000', {err: ctx.err.toString(), stack: ctx.err.stack });

            console.log('whoaaaasde there was an error');
            // console.log(error);
        }

        return { pageProps }
    }

    render() {
        // SentryNode.captureException("hi thanks for the error")

        const { Component, pageProps } = this.props;

        return (
            <Container><div>this is a test</div>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp;