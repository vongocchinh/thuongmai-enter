import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useForm } from 'react-hook-form';
const Search = () => {

  const {handleSubmit,register}=useForm();
  const onSubmit=(e)=>{
    console.log(e);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="header-search">
        <input
          type="text"
          className="input-text"
          placeholder="Search for Products"
          {...register("search-name",{required:true})}
        />
        <button type="submit" className="input-submit" value="search">
          <SearchIcon className="SearchIcon" />
        </button>
      </form>
    </>
  );
};

export default Search;
