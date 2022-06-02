/* Created by: marco cuconato
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/assignment6-HTML/sw.js", {
    scope: "/assignment6-HTML/",
  })
}

/**
 * Input.
 */

 const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData[0].url)
    document.getElementById("image").innerHTML =
    '<img src="' + 
      jsonData[0].url + 
      '" alt="API cat image" ' +
      '>'
  } catch (err) {
    console.log(err)
  }
}

getImage("https://api.thecatapi.com/v1/images/search")