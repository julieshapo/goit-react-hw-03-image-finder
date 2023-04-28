import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <Gallery>
      {items.map(item => (
        <li key={item.id}>
          <ImageGalleryItem item={item} />
        </li>
      ))}
    </Gallery>
  );
};
