import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js";

OMDBGetByImdbID("tt0993846").then((data) => {
    console.log(data);
});

OMDBSearchComplete("Mean Girls").then((data) => {
    console.log(data);
});

OMDBSearchByPage("Mickey Mouse").then((data) => {
    console.log(data);
});