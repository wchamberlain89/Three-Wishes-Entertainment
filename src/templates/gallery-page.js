import React from 'react'
import Layout from '../components/Layout';
import DecoratedTitle from '../components/DecoratedTitle';

export const GalleryPageTemplate = () => {
  return (
    <Layout>
      <DecoratedTitle>Gallery</DecoratedTitle>
    </Layout>
  )
}

const GalleryPage = () => {
  return (
    <GalleryPageTemplate/>
  )
}

export default GalleryPage
