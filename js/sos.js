function sendSOS(){

navigator.geolocation.getCurrentPosition(
(position)=>{

alert(
"SOS Sent\nLatitude: "
+ position.coords.latitude
+
"\nLongitude: "
+ position.coords.longitude
);

}
);

}