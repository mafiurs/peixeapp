import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import actions from "../../redux/moviesList/actions";
import "./landing-page.css";

const Dashboard = (props) => {
 const [queryParams, setQueryParams] = useState(null);
 const dispatch = useDispatch();
 const { loading, error, movies } = useSelector(({ moviesList }) => moviesList);

 //  useEffect(() => {
 //   dispatch(actions.fetchMovies(queryParams));
 //  }, [dispatch, queryParams]);

 //  if (loading)
 //   return (
 //    <div className="skeleton-container">
 //     <Grid item xs={12}>
 //      <Skeleton variant="text" width="50%" height={60} />
 //      <Skeleton variant="rect" width="100%" height={170} />
 //      <Skeleton variant="text" width="50%" height={60} />
 //      <Skeleton variant="rect" width="100%" height={300} />
 //     </Grid>
 //    </div>
 //   );
 //  if (error) return <p>{error.message}</p>;
 if (movies.list.length === 0) return null;
 return (
  <Grid item xs={12} className="movies">
   {movies.list.map(({ Title, Year, Type, Poster }) => (
    <div className="movies-poster">
     <img className="movies-poster__image" src={Poster}></img>
     <div className="movies-poster__overlay-content">
      <b>{Title}</b>
      <small className="displayBlock">
       Type: {Type} Year: {Year}
      </small>
     </div>
     <div variant="outlined" className="movies-poster__overlay-button">
      <div className="movies-poster__overlay-button__text">SEE MORE</div>
     </div>
    </div>
   ))}
  </Grid>
 );
};

export default Dashboard;
