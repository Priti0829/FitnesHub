# from flask import Flask, render_template
# from flask_socketio import SocketIO, emit
# from PushhUpCount import detect_pose

# app = Flask(__name__)
# socketio = SocketIO(app)

# @socketio.on('connect')
# def handle_connect():
#     print('Client connected')

# @socketio.on('disconnect')
# def handle_disconnect():
#     print('Client disconnected')

# def emit_frames():
#     for frame_bytes in detect_pose():
#         socketio.emit('frame', {'image': frame_bytes})

# @app.route('/')
# def index():
#     return render_template('index.html')

# if __name__ == '__main__':
#     socketio.run(app, debug=True)




from flask import Flask, Response
from PushhUpCount import detect_pose
import cv2

app = Flask(__name__)

def generate_frames():
    for frame_bytes in detect_pose():
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

@app.route('/')
def index():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
