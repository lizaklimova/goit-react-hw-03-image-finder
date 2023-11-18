import { Component } from 'react';
import { Notify } from 'notiflix';
import { getImages } from 'services/api';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Loader from '../Loader';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    value: '',
    pics: [],
    page: 1,
    perPage: 12,
    isEmpty: false,
    isLoading: false,
    showLoadMore: false,
  };

  handleSearch = value => {
    if (!value) Notify.warning('Please,enter sth');
    this.setState({
      value: value.trim(),
      page: 1,
      pics: [],
      isEmpty: false,
    });
  };

  componentDidUpdate(_, { value: q, page: pg }) {
    const { value, page } = this.state;

    if (q !== value || pg !== page) this.getPicsBySearch(value, page);
  }

  getPicsBySearch = async (value, page) => {
    try {
      this.setState({ isLoading: true });

      const { hits, total } = await getImages(value, page);

      if (total === 0) this.setState({ isEmpty: true });

      this.setState(({ pics }) => ({
        pics: [...pics, ...hits],
        showLoadMore: page < Math.ceil(total / this.state.perPage),
      }));
    } catch (error) {
      Notify.failure(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { pics, isEmpty, isLoading, showLoadMore } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery pics={pics} />
        {isLoading && <Loader />}
        {showLoadMore && <Button onLoadMore={this.onLoadMore} />}

        {isEmpty && <div>Sorry there is no pics</div>}
      </Container>
    );
  }
}
