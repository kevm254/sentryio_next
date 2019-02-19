import NextError from 'next/error';
import { ErrorPage, Component } from 'next/error';
import * as Sentry from '@sentry/browser';
const axios = require('axios');

class MyError extends NextError {

    static getInitialProps({res, err}) {

        axios.post('http://localhost:5000', { err: 'here, take this data' });
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', Component.getInitialProps(ctx).err);
        axios.post('http://localhost:5000', { err: JSON.stringify(ctx) });

if (err) {
    console.log('@**********************************')
}
        axios.post('http://localhost:5000', { err: 'here is an error'})
            .then(() => {
                console.log('there was a response received');
            });
        if (context.err) console.log('whatttttttt errrrrrr');
        return ErrorPage.getInitialProps(context);
    };

    render() {
        return (<div>
            I really can't believe there was an error
        </div>)
    }
}

export default MyError;