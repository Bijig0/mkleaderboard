import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ useEffect,useState } from 'react'
import useFetch from '../fetch'
import useParse from '../parse'
import Pagination from '../pagination'
import GoldenDiv from '../img/goldenplaceholder (2).png'
import '../css/override.css'
import { App } from "./App";
const fetch = require("node-fetch")
const TourneyUsersWithValues = []

const Brazil = () => {
    return (
        <>
        <App/>
        </>
    )
}

export default Brazil