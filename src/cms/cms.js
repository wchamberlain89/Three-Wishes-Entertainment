import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import FaqPagePreview from './preview-templates/FaqPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ServicesPagePreview from './preview-templates/ServicesPagePreview';
import withStyledComponentsRendered from './StylesheetInjector';

CMS.registerMediaLibrary(cloudinary)
CMS.registerMediaLibrary(uploadcare)


CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview));
CMS.registerPreviewTemplate('faq', withStyledComponentsRendered(FaqPagePreview));
CMS.registerPreviewTemplate('services',withStyledComponentsRendered(ServicesPagePreview));

