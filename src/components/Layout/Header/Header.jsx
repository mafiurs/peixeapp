import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import "./header.css";
import actions from "../../../redux/moviesList/actions";

export default function Header() {
 const inputEl = useRef(null);
 const dispatch = useDispatch();
 const [inputValue, setInputValue] = useState("");
 const handleClickIcon = (e) => {
  e.preventDefault();
  dispatch(actions.fetchMovies(inputValue));
 };
 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(actions.fetchMovies(inputValue));
 };
 const handleInputChange = (e) => {
  setInputValue(e.target.value);
  console.log("inputValue: ", inputValue);
 };
 useEffect(() => {
  inputEl.current.focus();
 }, [inputEl.current]);
 return (
  <Grid container className="header">
   <Grid item xs={12} className="header__title-containter">
    <a className="header__title">Movies</a>
   </Grid>
   <Grid item xs={12} className="input-containter">
    <div className="input-containter__title">Enter a movie title</div>
    <div className="input-containter__input">
     <form onSubmit={handleSubmit}>
      <TextField
       id="standard-basic"
       placeholder="Avengers End Game"
       inputRef={inputEl}
       onChange={handleInputChange}
       InputProps={{
        endAdornment: (
         <InputAdornment position="end">
          <IconButton edge="end">
           <SearchIcon type="submit" onClick={handleClickIcon} />
          </IconButton>
         </InputAdornment>
        ),
       }}
       fullWidth
      />
     </form>
    </div>
   </Grid>
  </Grid>
 );
}
