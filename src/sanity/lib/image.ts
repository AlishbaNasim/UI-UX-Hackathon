import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '../env'; // Apne projectId aur dataset import karein

const builder = createImageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
});

export const urlForImage = (source: any) => builder.image(source);
