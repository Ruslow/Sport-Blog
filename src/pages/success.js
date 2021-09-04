import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
const Success = () => {
  return (
    <Layout>
      <Seo title="Success" />
      <section className="success-page">
        <div className="page-center">
          <h2>your submission was recieved !</h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
