import React from 'react'
import Layout from '../components/Layout';
import DecoratedTitle from '../components/DecoratedTitle';

export const GalleryPageTemplate = () => {
  return (
    <Layout>
      <div className="width-container">
        <DecoratedTitle style={{margin: "3rem 0"}}><h1 className="fs-xl">Gallery</h1></DecoratedTitle>
      </div>
    </Layout>
  )
}

const GalleryPage = () => {
  return (
    <GalleryPageTemplate/>
  )
}

export default GalleryPage;
