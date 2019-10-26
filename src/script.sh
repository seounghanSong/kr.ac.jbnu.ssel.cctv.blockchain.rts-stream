VIDSOURCE="rtsp://192.168.1.30:554/stream1"
AUDIO_OPTS="-c:a libfaac -b:a 160000 -ac 2"
VIDEO_OPTS="-s 854x480 -c:v libx264 -b:v 800000"
OUTPUT_HLS="-hls_time 20 -hls_list_size 1 -start_number 1"
ffmpeg -i "$VIDSOURCE" -y $AUDIO_OPTS $VIDEO_OPTS $OUTPUT_HLS mystream.mp4
