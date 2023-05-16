import PropTypes from 'prop-types';
import { Title, StyledLink, List, Item, Box, Img } from './MoviesList.styled';

export function MoviesList({ title, movies, goBack }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: goBack }}>
                <Img
                  src={
                    movie.poster_path
                      ? `https://www.themoviedb.org/t/p/original/${movie.poster_path}`
                      : 'https://i.ibb.co/z703XMd/film-plug.png'
                  }
                  alt={movie.title}
                ></Img>
                <Box>
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                </Box>
              </StyledLink>
            </Item>
          );
        })}
      </List>
    </>
  );
}

MoviesList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};
