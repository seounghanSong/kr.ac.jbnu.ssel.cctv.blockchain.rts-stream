const onvif = require('node-onvif');

// console.log("Start the discovery(retrieve) process.");
// // find the ONVIF network cameras.
// // It will take about 3 seconds/
// onvif.startProbe().then((device_info_list) => {
//   console.log(device_info_list.length + ' devices were found.');
//   // Show the device name and the URL of the end point.
//   device_info_list.forEach((info) => {
//     console.log('- ' + info.urn);
//     console.log(' - ' + info.name);
//     console.log(' - ' + info.xaddrs[0]);
//   });
// }).catch((error) => {
//   console.error(error);
// })

// // Create an OnvifDevice object
// let device = new onvif.OnvifDevice({
//   xaddr: "http://192.168.1.30/onvif/device_service",
//   user : "admin",
//   pass : "admin"
// });
//
// device.init().then(() => {
//   // Get the UDP stream URL
//   let url = device.getUdpStreamUrl();
//   console.log(url);
// }).catch((error) => {
//   console.error(error);
// })

Stream = require('node-rtsp-stream');
stream = new Stream({
  name : 'name',
  streamUrl: 'rtsp://192.168.1.30:554/stream1',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats' : '', // an option with no necessary value uses a blank string
    '-r' : 30 // options with required values specify the value after the key
  }
});
