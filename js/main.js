//window.addEventListener('DOMContentLoaded', (event) => {
//    getVisitCount();
//});

const functionApi = 'https://4rw1ga0vq4.execute-api.us-east-1.amazonaws.com/Prod'; 
//import express from "express";
//const app =express()
import cors from "cors";
app.use(cors({
 orgin:'https://dmaru0vimjeqf.cloudfront.net/'
}))

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}