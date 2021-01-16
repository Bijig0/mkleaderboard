import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/override.css'
import { App } from "./App";
import urlGet from '../urlGet'

export const Brazil = () => {
    return (
        <>
        <App urls={urlGet("Brazil")}/>
        </>
    )
}

export const EUEast = () => {
    return (
        <>
        <App urls={urlGet("EU East")}/>
        </>
    )
}

export const EUWest = () => {
    return (
        <>
        <App urls={urlGet("EU West")}/>
        </>
    )
}

export const LANorth = () => {
    return (
        <>
        <App urls={urlGet("Latin America North")}/>
        </>
    )
}

export const LASouth = () => {
    return (
        <>
        <App urls={urlGet("Latin America South")}/>
        </>
    )
}

export const ME = () => {
    return (
        <>
        <App urls={urlGet("ME")}/>
        </>
    )
}

export const OCE = () => {
    return (
        <>
        <App urls={urlGet("OCE")}/>
        </>
    )
}

export const NAWest = () => {
    return (
        <>
        <App urls={urlGet("NA West")}/>
        </>
    )
}

export const NAEast = () => {
    return (
        <>
        <App urls={urlGet("NA East")}/>
        </>
    )
}

export const Mexico = () => {
    return (
        <>
        <App urls={urlGet("Mexico")}/>
        </>
    )
}



export default Brazil