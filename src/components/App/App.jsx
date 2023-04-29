import * as API from 'services/pixabay-api';
import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import { Container } from './App.styled';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    gallery: [],
    search: '',
    page: 1,
    isLoading: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.fetchGallery(search, page);
    }
  }

  fetchGallery = async (name, page) => {
    try {
      this.setState({ isLoading: true });

      const images = await API.fetchGallery(name, page);

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...images],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchImages = ({ name }) => {
    if (name.trim()) {
      this.setState({
        gallery: [],
        search: name,
        page: 1,
        isLoading: false,
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1),
    }));
  };

  render() {
    const { gallery, isLoading, error, page } = this.state;
    return (
      <Container>
        <Header>
          <SearchBar onSubmit={this.searchImages} />
        </Header>
        {error && <p>'Oops, something went wrong! Please, try again'</p>}
        {isLoading ? <Loader /> : <ImageGallery items={gallery} />}

        {Math.ceil(gallery?.length / 12) >= page && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </Container>
    );
  }
}
