import './Map.css';

function Map() {
    return (
        <>
            <img 
            className="Map" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5u0UtoDw_Y8VaQ0sgE6LU1o9nEuUyR9vTQ&s" 
            alt="example land">
            </img>
        </>
    );
}

function Houses() {
    return (
        <>
            <img 
            className="House" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs1azERWx8RawApKCB21IqHS__wr-OWnzdw&s" 
            alt="house on land">
            </img>
        </>
    );
}

export default function MapDisplay() {
    return (
        <div className="Map-container">
            <Map />
            <Houses />
        </div>
    );
}