import React, {useEffect} from "react"
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productsActions"
import Products from "./Products"


const Main = () => {
    const currnetPage = useSelector((state)=> state.pages.currentPage)
    const perPage = useSelector((state)=> state.pages.perPage)
    


    const dispatch = useDispatch();
    const fetchProducts = async (currnetPage, perPage) => {
      const response = await axios
        .get(`https://api.punkapi.com/v2/beers?page=${currnetPage}&per_page=${perPage}`)
        .catch((err) => {
          console.log("Err: ", err);
        })
      dispatch(setProducts(response.data))
    };
  
    useEffect(() => {
      fetchProducts(currnetPage, perPage);
    }, [currnetPage]);

    return(
      <div>
        <Products />
      </div>
    )
}

export default Main