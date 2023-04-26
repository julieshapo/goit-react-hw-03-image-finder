// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Layout } from 'components/Layout/Layout';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';

export class App extends Component {
  state = {
    gallery: {},
  };

  componentDidMount() {
    const API_URL = 'https://pixabay.com/api/';
    const API_KEY = '34748847-3ccb4c25ceedd5b939786b2e8';
    fetch(
      `${API_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response =>
      response.json().then(gallery => this.setState({ gallery }))
    );
  }
  render() {
    return (
      <Layout>
        <SearchBar />
        {this.state.gallery && <div> Gallery</div>}
      </Layout>
    );
  }
}

// <ImageGallery list={this.state.gallery} />;
