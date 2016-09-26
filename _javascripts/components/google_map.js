export default class GoogleMap {
  constructor() {
    window.onload = function () { 
      let el = document.getElementById('map');
      let pos = {
        lat: parseFloat(el.dataset.lat),
        lng: parseFloat(el.dataset.lng)
      };

      el.map = new google.maps.Map(el, {
        zoom: 14,
        scrollwheel: false,
        disableDefaultUI: true,
        center: pos,
        styles: [{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f2f2'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':-100},{'lightness':45}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#46bcec'},{'visibility':'on'}]}]
      });

      el.marker = new google.maps.Marker({
        map: el.map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: pos
      });
    };
  }
}