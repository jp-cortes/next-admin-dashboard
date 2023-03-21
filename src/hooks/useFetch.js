import { useState, useEffect } from "react";
import axios from 'axios';
import endPoints from "services/api";


const useFetch = () => {
    const [data, setData] =  useState([]);
    const [allData, setAllData] =  useState([]);
    const [offSet, setOffSet] =  useState(0);
    const [page, setPage] =  useState(1);
    const PRODUCTS_LIMIT = 10;


    async function fetchAllData() {
        const response = await axios(endPoints.products.getProducts(0, 0));
        setAllData(response.data);
    }
    async function fetchData() {
        const response = await axios(endPoints.products.getProducts(PRODUCTS_LIMIT, offSet));
        setData(response.data);
    }

    useEffect(() => {
        try {
            fetchData();
            fetchAllData();
        } catch (error) {
            console.log(error);
        }
    }, [offSet, PRODUCTS_LIMIT]);

    return {
        allData,
        data,
        offSet, 
        setOffSet,
        PRODUCTS_LIMIT,
        page, 
        setPage,
    };
}

export { useFetch };