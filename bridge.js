const Stream = require('node-rtsp-stream')

// First Stream
const stream = new Stream({
  name: 'webcam1',
  streamUrl: 'rtsp://192.168.1.125:7070/webcam', 
  wsPort: 9999, // Port for first stream
  ffmpegOptions: { 
    '-stats': '', 
    '-r': 30, 
    '-s': '640x480' 
  }
})

// Second Stream
const stream2 = new Stream({
  name: 'webcam2',
  streamUrl: 'rtsp://192.168.1.167:7070/webcam', 
  wsPort: 9998, // Different port to avoid conflicts
  ffmpegOptions: { 
    '-stats': '', 
    '-r': 30, 
    '-s': '640x480' 
  }
})
