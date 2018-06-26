/*eslint-env browser*/
/*eslint "no-console": "off" */


/*var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v9",
    center: [18, 47.368650], // starting position
    zoom: 3 // starting zoom
});*/

//map.addControl(new mapboxgl.NavigationControl());

/*mapboxgl.accessToken = 'pk.eyJ1Ijoic2luY2xhcml1cyIsImEiOiJjaXBvZjdxOXQwMXFvZnVtM3A4YmFrejN2In0.ze62-HAgTD4AOTZPmRJh_Q';*/


var beforeMap = new mapboxgl.Map({
    container: 'before',
    center: [18, 47.368650], // starting position
    zoom: 3,
    style: "mapbox://styles/mapbox/dark-v9",
});

beforeMap.addControl(new mapboxgl.NavigationControl());




var afterMap = new mapboxgl.Map({
    container: 'after',
    center: [18, 47.368650], // starting position
    zoom: 3,
    style: "mapbox://styles/mapbox/light-v9",

});
//    map.addControl(new mapboxgl.NavigationControl());


var map = new mapboxgl.Compare(beforeMap, afterMap, {
    // Set this to enable comparing two maps by mouse movement:
});

