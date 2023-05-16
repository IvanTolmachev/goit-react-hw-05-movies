import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from 'service/themoviedbApi';
import { List, Item, Title, Text } from './Reviews.styled';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    apiService.getMovieReviews(movieID).then(response => {
      const reviewsData = response.results.map(review => {
        return { author: review.author, review: review.content, id: review.id };
      });
      setReviews(reviewsData);
    });
  }, [movieID]);

  return (
    <>
      {reviews.length === 0 ? (
        <Text> There are no reviews yet</Text>
      ) : (
        <>
          <Title className="isHidden">Reviews</Title>
          <List>
            {reviews.map(review => {
              return (
                <Item key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.review}</p>
                </Item>
              );
            })}
          </List>
        </>
      )}
    </>
  );
}
