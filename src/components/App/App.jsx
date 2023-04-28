import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import * as API from 'services/pixabay-api';

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
      page: prevState.page + 1,
    }));
  };

  render() {
    const { gallery, isLoading, error, page } = this.state;
    return (
      <div>
        <header>
          <SearchBar onSubmit={this.searchImages} />
        </header>
        {error && <p>'Oops, something went wrong! Please, try again'</p>}
        {isLoading ? '...LOADING' : <ImageGallery items={gallery} />}
        {gallery.length / 12 >= page && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
