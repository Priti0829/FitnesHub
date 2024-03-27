import cv2
import numpy as np
import PoseModule as pm

def detect_pose():
    SCREEN_WIDTH = 1400  # Enter your desired screen width
    SCREEN_HEIGHT = 1000  # Enter your desired screen height

    cap = cv2.VideoCapture(0)
    detector = pm.poseDetector()
    count = 0
    direction = 0
    form = 0
    feedback = "Fix Form"

    # Set camera resolution
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, SCREEN_WIDTH)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, SCREEN_HEIGHT)

    while cap.isOpened():
        ret, img = cap.read()
        if ret:
            img = cv2.resize(img, (SCREEN_WIDTH, SCREEN_HEIGHT))  # Resize image to match screen resolution

            img = detector.findPose(img, False)
            lmList = detector.findPosition(img, False)
            
            if len(lmList) != 0:
                elbow = detector.findAngle(img, 11, 13, 15)
                shoulder = detector.findAngle(img, 13, 11, 23)
                hip = detector.findAngle(img, 11, 23, 25)
            
                per = np.interp(elbow, (90, 160), (0, 100))
                bar = np.interp(elbow, (90, 160), (380, 50))

                if elbow > 160 and shoulder > 40 and hip > 160:
                    form = 1
        
                if form == 1:
                    if per == 0:
                        if elbow <= 90 and hip > 160:
                            feedback = "Up"
                            if direction == 0:
                                count += 0.5
                                direction = 1
                        else:
                            feedback = "Fix Form"
                        
                    if per == 100:
                        if elbow > 160 and shoulder > 40 and hip > 160:
                            feedback = "Down"
                            if direction == 1:
                                count += 0.5
                                direction = 0
                        else:
                            feedback = "Fix Form"

            if form == 1:
                cv2.rectangle(img, (SCREEN_WIDTH - 20, 50), (SCREEN_WIDTH, 380), (0, 255, 0), 3)
                cv2.rectangle(img, (SCREEN_WIDTH - 20, int(bar)), (SCREEN_WIDTH, 380), (0, 255, 0), cv2.FILLED)
                cv2.putText(img, f'{int(per)}%', (SCREEN_WIDTH - 35, 430), cv2.FONT_HERSHEY_PLAIN, 2, (255, 0, 0), 2)

            cv2.rectangle(img, (0, 380), (100, 480), (0, 255, 0), cv2.FILLED)
            cv2.putText(img, str(int(count)), (25, 455), cv2.FONT_HERSHEY_PLAIN, 5, (255, 0, 0), 5)
            
            cv2.rectangle(img, (SCREEN_WIDTH - 140, 0), (SCREEN_WIDTH, 40), (255, 255, 255), cv2.FILLED)
            cv2.putText(img, feedback, (SCREEN_WIDTH - 135, 40), cv2.FONT_HERSHEY_PLAIN, 2, (0, 255, 0), 2)

            ret, buffer = cv2.imencode('.jpg', img)
            frame_bytes = buffer.tobytes()
            yield frame_bytes

    cap.release()
    cv2.destroyAllWindows()

def main():
    for frame_bytes in detect_pose():
        # Convert the byte string to a NumPy array
        nparr = np.frombuffer(frame_bytes, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        cv2.imshow('Pose Detection with Feedback', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
