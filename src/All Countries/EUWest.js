import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ useEffect,useState } from 'react'
import useFetch from '../fetch'
import useParse from '../parse'
import Pagination from '../pagination'
import data from './data'
import GoldenDiv from '../img/goldenplaceholder (2).png'
import '../css/override.css'
const fetch = require("node-fetch")
const TourneyUsersWithValues = []


