import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Card } from "./Card";
import styles from "./wellbeing.module.css";
import { Sidebar } from "./Sidebar";
import { FooterComponents } from '../components/footer/FooterComponents'
import { Navbar } from '../components/Navbar/Navbar'

import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

export const Wellbeing = () => {

  try {
    const filter1 = localStorage.getItem("filter");
    if( filter1 == null ){
      localStorage.setItem("filter", JSON.stringify([]));
    }
  }
  catch(e) {
    console.log(e);
  }

  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("Relevance");
  const initFilter = localStorage.getItem("filter");
  const [filter, setFilter] = useState( JSON.parse(initFilter));

  
  const onClick = () => {
    var f = JSON.parse( localStorage.getItem("filter") );
    var discount = f.includes()
    setFilter(f);
    console.log(": Filter : = ", filter);
  }


  useEffect(async () => {
    let data = await axios.get(
      "http://localhost:8000/products"
    );

    data = data.data;
    setItems(data); 
  }, [filter]);

  const handleCreateNewItem = (e) => {
    setSort(e)
  };


  return (
    <div>
      <Navbar />
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar onClick={onClick}/>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.select}>
          <CustomSelect onChange={handleCreateNewItem} defaultValue={"Relevance"} >
            <StyledOption className={styles.selectItems} value="Relevance">Relevance</StyledOption>
            <StyledOption className={styles.selectItems} value={"price_low"}>Price: Low to High</StyledOption>
            <StyledOption className={styles.selectItems} value={"price_high"}>Price: High to Low</StyledOption>
            <StyledOption  className={styles.selectItems} value={"discount"}>Discount</StyledOption>
          </CustomSelect>
        </div>
        <div className={styles.itemsContainer}>
          {
          items.length > 0 &&

          (items.sort((a,b) => (sort === "Relevance") ? 0 : 
            (sort === "discount") ? (b.discount - a.discount) : 
            (sort === "price_low") ? (a.sp - b.sp) :
            (sort === "price_high") ? (b.sp - a.sp) : 0
          ))
          .filter( (item) => ( !filter.includes("Less than 10%")  || ( filter.includes("Less than 10%") && item.discount < 10 ) ) ? true : false )
          .filter( (item) => ( !filter.includes("10% and above")  || ( filter.includes("10% and above") && item.discount >= 10 ) ) ? true : false )
          .filter( (item) => ( !filter.includes("20% and above")  || ( filter.includes("20% and above") && item.discount >= 20 ) ) ? true : false )
          .filter( (item) => ( !filter.includes("30% and above")  || ( filter.includes("30% and above") && item.discount >= 30 ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Powder")  || ( filter.includes("Powder") && item.form === "Powder" ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Bottle")  || ( filter.includes("Bottle") && item.form === "Bottle" ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Disintegrating Strip")  || ( filter.includes("Disintegrating Strip") && item.form === "Disintegrating Strip" ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Immunity Booster")  || ( filter.includes("Immunity Booster") && item.uses.includes("Immunity Booster") ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Cardiac Care")  || ( filter.includes("Cardiac Care") && item.uses.includes("Cardiac Care") ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Skin Care")  || ( filter.includes("Skin Care") && item.uses.includes("Skin Care") ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Stomach Care")  || ( filter.includes("Stomach Care") && item.uses.includes("Stomach Care") ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Mind Care")  || ( filter.includes("Mind Care") && item.uses.includes("Mind Care") ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Weight Management")  || ( filter.includes("Weight Management") && item.uses.includes("Weight Management") ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Liver Care")  || ( filter.includes("Liver Care") && item.uses.includes("Liver Care") ) ) ? true : false )
          .filter( (item) => ( !filter.includes("Cough & Cold")  || ( filter.includes("Cough & Cold") && item.uses.includes("Cough & Cold") ) ) ? true : false )
          .map((item) => <Card key={`${item._id}`} item={item}  />)
          }
        </div>
      </div>
    </div>
    <FooterComponents />
    </div>
  );
};
