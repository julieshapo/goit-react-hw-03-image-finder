import { LoadButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadButton type="submit" onClick={onClick}>
      <span>Load More</span>
    </LoadButton>
  );
};
