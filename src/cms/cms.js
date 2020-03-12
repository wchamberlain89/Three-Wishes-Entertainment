import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview';
import withStyledComponentsRendered from './StylesheetInjector';


CMS.registerPreviewTemplate(
  'index',
  withStyledComponentsRendered(IndexPagePreview)
);
CMS.registerMediaLibrary(uploadcare)
CMS.registerPreviewTemplate(
  'services',
  withStyledComponentsRendered(ServicesPagePreview)
);
CMS.registerMediaLibrary(cloudinary)

