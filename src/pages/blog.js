import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
    <Layout>
        <SEO title="Hello Toptal" />
        <h1>Hello Toptal</h1>
        <p>
            This is a placeholder for a blog post supplement to my Toptal
            application
        </p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
