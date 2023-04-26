import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ list }) => {
  return (
    <Gallery>
      {list.map(item => (
        <li key={item.id}>
          <ImageGalleryItem item={item} />
        </li>
      ))}
    </Gallery>
  );
};
