import { useEffect, useState } from "react";
import { HOME_API } from "./utils/constants";

const useResList=()=>{
    const [resList,setResList]= useState([]);
    useEffect(()=>{
     fetchData();
    },[])
    const fetchData=async ()=>{
    const data= await fetch(HOME_API);
    const json= await data.json();
    // setResList(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // console.log("reslist",resList)

    return resList;
}
export default useResList