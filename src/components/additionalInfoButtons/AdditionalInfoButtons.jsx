import { StyledLink, List, Item, Box } from './AdditionalInfoButtons.styled';

export function AdditionalInfoButtons() {
  return (
    <Box>
      <h3>Additional information</h3>
      <List>
        <Item>
          <StyledLink to="cast">Cast</StyledLink>
        </Item>
        <Item>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Item>
      </List>
    </Box>
  );
}
