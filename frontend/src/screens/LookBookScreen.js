import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import "../../src/index.css";
// Ask about product page css  jquery photos in homepage , babel transpile
function LookBook(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  return (
    <div>
      <div>
        <img
          src="https://i.imgur.com/tIFtS2Tl.png"
          width="100%"
          height="100%"
        />
      </div>
      <div className="bgimg">
        <div className="bottomleft">
          <p>COMING SOON</p>
        </div>
      </div>
    </div>
  );
}
export default LookBook;
