import { Component } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Form, Header, SearchBtn, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);

    this.reset();
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <IoSearch size={25} />
          </SearchBtn>
          <Input
            type="text"
            value={value}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
export default Searchbar;
