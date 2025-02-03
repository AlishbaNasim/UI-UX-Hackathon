import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '../env'; // Apne projectId aur dataset import karein
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = createImageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
});

export const urlForImage = (source:  SanityImageSource) => builder.image(source);
