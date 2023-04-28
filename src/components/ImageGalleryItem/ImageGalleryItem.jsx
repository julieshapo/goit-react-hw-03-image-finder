import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  return (
    <>
      <Image src={item.webformatURL} alt={item.tags} width="320" />
    </>
  );
};
