import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      sx={{
        "& fieldset": { border: "none" },
        backgroundColor: "#EDEEF4",
        borderRadius: "10px",
        color: "#EDEEF4",
        width: { xs: "95%", sm: "70%" },
      }}
      label="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
