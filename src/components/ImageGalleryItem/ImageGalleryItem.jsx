import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  <>
    <Image key={item.id} src={item.webformatURL} alt="" />
    {item.webformatURL}
  </>;
};
