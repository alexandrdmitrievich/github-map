/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 7,
      center: { lat: 48, lng: 37 },
    }
  );

 // const image =
 //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
 //const iconco = new google.maps.Icon()
 const image = 'Res/regiment/137.png'
  const beachMarker = new google.maps.Marker({
    position: { lat: 48, lng: 37 },
    map,
    icon: {url:image,
      scaledSize: new google.maps.Size(153/2,102/2)
      //labelOrigin: new google.maps.Point(0,0)
    },
    label: {
      text: "Швидко котята"
    },
    title: "Тест"
    //labelOrigin: 
  });
}


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
