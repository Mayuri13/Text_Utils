import React from 'react'

export default function Error() {
    let bg = ["./404img.jpg","./404img2.jpg","./404img3.jpg","./404img4.jpg"]
    function openSite() {
        // get a random number between 0 and the number of links
        var randIdx = Math.floor(Math.random() * bg.length);
        // round it, so it can be used as array index
        // construct the link to be opened
        var link = bg[randIdx];
        return link;
      };
      
  return (

    <img src={openSite()} className='image'  alt="" srcset="" />
  )
}
