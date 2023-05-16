import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from 'service/themoviedbApi';
import { Img, List, Item, Title, Text } from './Cast.styled';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    apiService.getMovieActors(movieID).then(response => {
      const actors = response.cast.map(actor => {
        return {
          name: actor.name,
          character: actor.character,
          id: actor.credit_id,
          photo: actor.profile_path,
        };
      });
      setCast(actors);
    });
  }, [movieID]);

  return (
    <>
      <Title className="isHidden">Actors</Title>
      {cast.length === 0 ? (
        <Text>There is no information about actors</Text>
      ) : (
        <List>
          {cast.map(actor => {
            return (
              <Item key={actor.id}>
                <div>
                  <h4>{actor.name}</h4>
                  <p>Character: {actor.character}</p>
                </div>
                <Img
                  src={
                    actor.photo
                      ? `https://www.themoviedb.org/t/p/original/${actor.photo}`
                      : 'https://i.ibb.co/dPBdjhT/actor-plug.png'
                  }
                  alt={actor.name}
                ></Img>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
}
