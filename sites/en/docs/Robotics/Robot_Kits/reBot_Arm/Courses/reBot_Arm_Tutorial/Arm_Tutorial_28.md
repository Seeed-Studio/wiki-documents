---
description: "Chapter 28 of the Seeed Physical AI Beginner's Course — object detection and hand-eye calibration: the vision task taxonomy, YOLO and open-vocabulary detection, oriented bounding boxes, NMS and mAP, ArUco markers with solvePnP, AX = XB hand-eye calibration, and 6-DoF grasp pose estimation with GraspNet."
title: Chapter 28 - Object Detection and Hand-Eye Calibration
keywords:
  - reBot
  - Robotic Arm
  - YOLO
  - OBB
  - ArUco
  - Hand-Eye Calibration
  - 6-DoF Grasp
  - GraspNet
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_28
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: Seeed Studio Robotics Team
createdAt: '2026-10-08'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_28/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 6 · Chapter 28 · Theory</span>
    <h2>28. Object Detection and Hand-Eye Calibration</h2>
    <p>
      Chapter 28 of the Seeed Physical AI Beginner's Course — object detection and hand-eye calibration: the vision task taxonomy, YOLO and open-vocabulary detection, oriented bounding boxes, NMS and mAP, ArUco markers with solvePnP, AX = XB hand-eye calibration, and 6-DoF grasp pose estimation with GraspNet.
    </p>
    <div className="hero-actions">
      <a href="#overview">Chapter overview</a>
      <a href="#detection">Detection algorithms</a>
      <a href="#hand-eye">Hand-eye calibration</a>
      <a href="#grasp">6-DoF grasping</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 28.1 Chapter Overview

In the last chapter we learned the basic pipeline of robot vision: environment -> camera capture -> 2D image -> depth information -> 3D space coordinates -> robot coordinates, but we did not dwell on the algorithmic principles and implementation details of each link. This chapter goes one level deeper into each link so the reader understands the mathematics and engineering trade-offs behind the algorithms.

In a real robot system, the robot does not face an already annotated target position. So four core questions must be solved in depth:

- Question 1: Why is the detection algorithm YOLO? How does YOLOE let you define custom classes?
    - See: object detection algorithm principles (28.3)
- Question 2: Why use ArUco instead of a chessboard for camera calibration?
    - See: ArUco marker principles (28.4)
- Question 3: Why can active depth cameras directly produce a depth map? How are depth and RGB aligned?
    - See: active depth camera principles (Chapter 27, section 27.5)
- Question 4: How is a 6-DoF grasp pose estimated from an image?
    - See: 6-DoF grasp pose estimation (28.6)
- This chapter builds a deeper understanding:
    - Detection algorithms (YOLOE / OBB) -> ArUco camera calibration -> active depth camera principles -> 6-DoF grasp pose estimation

## 28.2 Visual Task Taxonomy

### The Task Chain in Robot Vision

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-01.png" alt="Four-stage robot vision pipeline" />
</div>

Robot vision is a pipeline where each stage's output feeds the next:

```text
object detection -> segmentation mask -> OBB -> grasp pose estimation
   |           |         |          |
   |           |         |          +-> 6-DoF pose
   |           |         +-> short-edge direction = gripper open/close direction
   |           +-> pixel-level ROI, used to crop the point cloud
   +-> class + coarse position
```

Each stage has its own technical choices:

| Stage | Output | Typical algorithms |
| :--- | :--- | :--- |
| Object detection | Class + coarse position | YOLO (speed) or RT-DETR (accuracy) |
| Segmentation | Pixel-level ROI, used to crop the point cloud | Mask R-CNN (instance) or SAM (zero-shot) |
| Oriented bounding box | Short-edge direction = gripper open/close direction | YOLO-OBB or Oriented R-CNN |
| Grasp pose estimation | 6-DoF pose | Geometric method (OBB + depth) or GraspNet (neural network) |

### Comparison of Four Visual Tasks

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-02.png" alt="Classification, detection, segmentation and OBB" />
</div>

The four tasks build on one another; they differ in what they take in and what they give back:

| Task | What it does | Input | Output | Typical networks |
| :--- | :--- | :--- | :--- | :--- |
| **Classification** | Simplest task: image in, class label out | Whole image (e.g. `224x224x3`) | Class probability distribution (e.g. `[0.05, 0.85, 0.10]`) | ResNet, VGG, EfficientNet |
| **Detection** | Classification + localization | Whole image | One `(class, bounding box)` tuple per object; box as `(x1, y1, x2, y2)` or `(cx, cy, w, h)` | Faster R-CNN, YOLO, SSD, RT-DETR |
| **Segmentation** | Pixel-level classification: one class label per pixel | Whole image | A class mask the same size as the input | Mask R-CNN (instance), U-Net (semantic), SAM |
| **Oriented bounding box (OBB)** | Bounding box with a rotation angle | Whole image | `(cx, cy, w, h, theta)` | YOLOv8-OBB, Oriented R-CNN |

Three things worth remembering: classification can only answer "what is there", not "where"; segmentation comes in three flavours — semantic (same class shares one label), instance (different objects of the same class get different labels) and panoptic (semantic + instance); and OBB hugs a rotated object tightly instead of dragging in the background a horizontal box would include.

<a id="detection"></a>

## 28.3 Deep Dive into Detection Algorithms

### Why YOLO for Real-Time Robot Vision

The core requirement of robot vision algorithms is **real-time performance**. Consider a typical scenario:

- An object moves on a conveyor at 0.1 m/s; field of view is 0.5 m; crossing time is 5 seconds. Assume 20 Hz control (50 ms frame interval). If detection takes 200 ms per frame (5 Hz), the robot cannot keep up and will frequently miss the grasp.
- **YOLO's "look once" idea**: divide the image into an SxS grid, each grid directly predicts B boxes + class, and produces results in a single forward pass.

### Open-Vocabulary Detection (YOLOE / YOLO-World)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-03.png" alt="Open-vocabulary YOLOE and YOLO-World detection" />
</div>

Industrial robots often encounter objects not covered by COCO's 80 classes: boxes of a specific color ("red box"), custom parts ("M3 bolt"), temporarily placed tools ("wrench"). Traditional YOLO must retrain on a dataset (hundreds of annotations) to recognize these—costly.

YOLOE (YOLO with Extended vocabulary) achieves open vocabulary through two mechanisms:

- Text encoder: encodes class names (e.g. "red box") into semantic vectors;
- Vision-text alignment: the detection head compares predicted boxes against all class-vector similarities.
- The text encoder knows the visual concept behind the phrase "red box." Even if it never saw a red box during training, it can match the text "red box" to the red box in the image. Note it performs text-visual similarity matching, not true language understanding; and if the text encoder has never seen a word, it cannot understand it.

YOLO-World uses a similar approach

- YOLO-World uses CLIP-style image-text alignment for open vocabulary; its working principle is the same as YOLOE.

#### Core API

```python
from ultralytics import YOLO

# load pretrained YOLOE model
model = YOLO("yoloe-26s-seg.pt")

# set custom classes (replace default 80)
model.set_classes(["red_box", "blue_box", "yellow_cup"])

# now the model detects only these three classes
results = model.predict(image)
```

#### Suitable scenarios

- Arm scenarios with many category changes (e-commerce warehousing, flexible production)
- Rapid demo validation (test without training)
- Small-batch customization (10-20 classes, no retraining)

### Why Robot Vision Often Uses OBB

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-04.png" alt="OBB versus horizontal box for grasping" />
</div>

A horizontal box contains lots of background for tilted objects:

```text
[diagram: a wrench tilted 45 degrees]

Horizontal box:
+--------------+
|  \          |
|   \ wrench  |
|    \        |
+--------------+
background ~40%

OBB box:
    +===+
   |   |  hugs the wrench
    +===+
background ~5%
```

The OBB short-edge direction directly gives the gripper open/close direction—the key input for downstream 6-DoF grasp estimation.

### Oriented Bounding Box (OBB) Principles

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-05.png" alt="OBB five parameters and angle periodicity" />
</div>

An oriented box is represented by 5 parameters: OBB = (cx, cy, w, h, theta). Parameter descriptions:

- (cx, cy): center pixel coordinates
- w: width (short or long edge, must be specified beforehand)
- h: height (perpendicular to w)
- theta: rotation angle (radians or degrees)

    ```text
    +-------------+
            |               | h
       theta ←|-------------|+
            |      cx,cy    |
            +-------------+
                  w
    ```

So OBB provides the geometric basis for grasp direction:

```python
# pseudocode
short_edge = OBB short-edge direction        # gripper open/close direction
approach_axis = -position_to_camera  # approach direction (object toward camera)
open_axis = short_edge            # vision frame Y axis
grip_axis = cross(open_axis, approach_axis)  # vision frame X axis
```

#### The angle periodicity problem

- Rotation 0 and 180 degrees are geometrically equivalent for a long object, but L1/L2 loss computes them as "180 degrees apart," causing unstable training.

    ```text
    [diagram: angle periodicity]

        +===+         +===+
        |   |   <=>    |   |
        +===+         +===+
        theta = 0 deg   theta = 180 deg
    ```

- Solution: IoU loss (Probiou). IoU (Intersection over Union) is naturally insensitive to rotation:
    - At rotation 0, IoU = 1.0 (overlapping)
    - At rotation 90, IoU = 0.0 (not overlapping)
    - At rotation 180, IoU = 1.0 (overlapping)
    - So directly optimizing IoU avoids angle periodicity and learns the more essential notion of "overlap."
    - IoU formula
        - IoU (Intersection over Union) is the most basic measure of "how much two boxes overlap" in detection:

            ```text
            [diagram: intersection and union of two rectangles A, B]

               A: +----+
                  |    |    B: +----+
                  |  +-|----+    |
                  +--+-+    |    |
                     +------+    |

               A intersect B: overlapping region (small middle rectangle)
               A union B: total area covered by A and B
            ```

    - Mathematical form:

        $$
        IoU(A,B)=\frac{\mid A\cap B \mid}{\mid A\cup B \mid}
        $$

    - Fast computation for axis-aligned rectangles; for a normal horizontal box (x1, y1, x2, y2), it can be computed analytically:

        ```text
        Case 1: intersecting
           +------+
           |  A   |
           |   +--+--+
           |   |int|  |
           +---+--+  |
               |  B  |
               +-----+

        Case 2: not intersecting (IoU=0)
           +---+
           | A |
           +---+
                    +---+
                    | B |
                    +---+
        ```

### Post-processing: NMS

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-06.png" alt="NMS duplicate box suppression" />
</div>

NMS is the standard post-detection step. After YOLO detects an image, the same object may be "repeatedly" predicted by multiple grid cells as several overlapping boxes. NMS removes these duplicates, keeping only the best one.

- Example code

    ```python
    def nms(boxes, scores, iou_threshold):
        """
        boxes: [(x1, y1, x2, y2), ...]
        scores: [confidence, ...]
        returns: list of kept indices
        """
        # 1. sort by confidence descending
        order = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)

        keep = []
        while order:
            # 2. pick the highest-scoring box
            i = order[0]
            keep.append(i)

            # 3. compute IoU with other boxes
            rest = order[1:]
            ious = [compute_iou(boxes[i], boxes[j]) for j in rest]

            # 4. keep boxes with IoU < threshold (remove redundant)
            order = [rest[j] for j, iou in enumerate(ious) if iou < iou_threshold]

        return keep
    ```

### mAP (Evaluation Metric)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-07.png" alt="Precision and recall" />
</div>

#### Precision and Recall

- mAP is built from Precision and Recall; understand these two first.
- Precision formula: high Precision = the model does not make false positives.

    $$
    Precision = \frac{TP}{TP+FP}
    $$

    - Meaning: of all boxes the model calls "cup," how many are truly cups.
        - Example: the model outputs 5 boxes, 3 correct and 2 wrong
        - Precision = 3 / 5 = 60%
- Recall formula: high Recall = the model does not miss objects.

    $$
    Recall = \frac{TP}{TP+FN}
    $$

    - Meaning: of all real cups in the image, how many the model found.
        - Example: there are 4 real cups in the image; the model found 3
        - Recall = 3 / 4 = 75%
- Precision and Recall trade off against each other, so a combined metric is needed.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-08.png" alt="Average precision and the precision-recall curve" />
</div>

**AP (Average Precision)—area under the P-R curve; computation steps:**

For one class, sort all predicted boxes by confidence from high to low, then sweep confidence thresholds (e.g. 0.9, 0.8, 0.7 ...). Each threshold yields a (Precision, Recall) pair; plot the P-R curve; area under the curve = AP. P-R curve geometry:

#### Physical meaning of AP

- AP captures: "across confidence thresholds, the model maintains both high precision and full recall."

    ```text
    [diagram: P-R curve]

      Precision
      1.0 |   *
          |  /| *
      0.8 | / |   **
          |/   |     **
      0.6 |    |       ***
          |    |         ***
      0.4 |    |            *****
          |    |                 *********
      0.2 |    |                          *********
          +----+----------------------------- Recall
          0.0  0.2  0.4  0.6  0.8  1.0

          AP = area under curve (ideal 1.0)
    ```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-09.png" alt="mAP mean average precision metric" />
</div>

#### mAP (mean Average Precision)

- **Formula**:

$$
mAP=\frac{1}{N}\sum^N_{i=1}AP_i
$$

- N is the number of classes, AP_i is the AP of class i.
- **Meaning**: the average AP across all classes, reflecting the model's combined performance on **all classes**.

### From Detection Result to Grasp Direction

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-10.png" alt="Detection box versus grasp point" />
</div>

A detection box is not a grasp point. Many beginners assume "box center = grasp position," but they differ:

```text

        detection box
      +--------+
      |  +--+  |
      |  |  |  |    cup body center
      |  |  |  | ← box center != grasp point
      |  |  |  |
      |  +--+  |
      |   )    | ← cup handle = best grasp point
      +--------+
```

**The best grasp position is usually not the target center, but:**

| Object | Best grasp point |
| :--- | :--- |
| Cup | Near the handle |
| Wrench | The handle |
| Spoon | The handle |
| Book | Middle of the long edge |

#### Three grasp-candidate-point methods

| Method | How it works | Good for | Pros | Cons |
| :--- | :--- | :--- | :--- | :--- |
| 1. Centre grasp | Use the box centre directly as the grasp point | Regular objects (square boxes, cubes) | Simple | Poor for long or irregular objects |
| 2. Keypoint detection | Train a model to detect specific keypoints (cup handle, grip, ...) | Objects with obvious grasp features | High precision | Needs extra annotation data |
| 3. 3D information | Use depth to find the highest point (grasp near the top), the plane centre (flat objects) or a graspable region (mask + depth analysis) | Complex scenes | No extra annotation | Complex algorithm |

#### The natural link between OBB and grasp direction

- The OBB short-edge direction directly corresponds to the gripper open/close direction—the most important use of OBB in robot vision:

    ```text
    [diagram: OBB short edge = gripper open/close direction]

           short edge (grasp direction)
          ←------------------>
          +------------------+
          |                  |
          |      object      | long edge
          |                  |
          +------------------+
    ```

- This property—OBB short edge = grasp direction—makes OBB the cleanest input for 6-DoF grasp estimation. It is also the core basis of geometric grasp estimation.

## 28.4 ArUco and Camera Calibration

### Full Derivation: Pixels to 3D Coordinates

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-11.png" alt="Pinhole camera model, pixel to 3D" />
</div>

```text
[diagram: side view of pinhole imaging]

        camera optical center O
         |
         | f (focal length)
         |
   ------+--------- image plane
         |  ← pixel (u, v)
         |
   ------+--------- object plane
         |
   world point (X, Y, Z)
```

#### Similar-triangle derivation

- From similar triangles (image-plane X axis):

    $$
    \frac{X}{Z}=\frac{u-c_x}{f_X}
    $$

- Rearranged:

    $$
    \begin{aligned}
    X &= \frac{(u-c_x)\cdot Z}{f_X} \\
    Y &= \frac{(u-c_y)\cdot Z}{f_y}
    \end{aligned}
    $$

#### Error propagation analysis

- Let depth error be $\sigma_Z$; from the X formula:

    $$
    \sigma_X=\frac{\mid u-c_x \mid}{f_x}\cdot\sigma_Z
    $$

    - That is: the farther a pixel is from the optical center (cx, cy), the more the depth error is amplified.
    - Physical meaning: objects near the image edge have a large disparity angle, so a small depth error significantly affects X, Y position estimates.
- **Numerical example**: let $f_x = 600$, $f_y = 600$, $c_x = 320$, $c_y = 240$, $Z = 0.65$ m and pixel $(u, v) = (520, 240)$.

    $$
    \begin{aligned}
    X &= \frac{(520-320)\times 0.65}{600} = \frac{200\times 0.65}{600} = 0.217\ \text{m} \\
    Y &= \frac{(240-240)\times 0.65}{600} = 0\ \text{m} \\
    Z &= 0.65\ \text{m}
    \end{aligned}
    $$

- The object's position in the camera frame: (0.217, 0, 0.65) m
- Implementation reference:

    ```python
    # ordinary_grasp.py L398-403 implementation reference
    def _backproject(u, v, z_m, K):
        fx, fy = float(K[0, 0]), float(K[1, 1])
        cx, cy = float(K[0, 2]), float(K[1, 2])
        x = (u - cx) * z_m / fx
        y = (v - cy) * z_m / fy
        return np.array([x, y, z_m], dtype=np.float32)
    ```

### ArUco Marker Principles

#### ArUco marker structure

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-12.png" alt="ArUco marker structure and dictionaries" />
</div>

```text
[diagram: ArUco marker structure]
+-------------+
| ############ |
| # 1 0 1 0 # |
| # 0 1 1 0 # |   internal binary code
| # 1 1 0 1 # |   determines ID (0-49)
| # 0 1 0 0 # |
| ############ |
+-------------+
   ^          ^
   top-left    top-right (4 corner world coordinates known)
```

#### A marker has two parts

- **The black outer border handles "localization"**—the algorithm detects four corners along the border, fixing their pixel coordinates in the image;
- **The internal binary matrix handles "identity"**—a 4x4 grid has 16 bits and can encode many distinct IDs. The common DICT_4X4_50 provides 50 unique IDs; for more, use DICT_6X6_250 or DICT_7X7_1000.
    - The ID is the "dictionary lookup key." Knowing "which number the marker is" lets the algorithm look up its real size and position in the world frame. A camera only captures a 2D image; there is no "scale" in it: a 5 cm marker close up and a 10 cm marker far away can look identical in a photo. The ID is the dictionary index—once recognized, you look up the marker's real edge length and the 3D coordinates of its 4 corners. With real 3D coordinates paired with 2D pixels, you can solve the camera pose.
- So the full ArUco workflow is: detect black border -> find four corners -> read internal code and identify ID -> using "known ID means known marker size and corner positions in the world frame," solve for camera pose.
- Pros comparison

### ArUco Pose Estimation (solvePnP)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-13.png" alt="solvePnP recovers 3D pose from 2D corners" />
</div>

#### What problem solvePnP solves

- In one sentence: ArUco detection tells you "where the marker's 4 corners are in pixels"; solvePnP tells you "where this marker is in the camera's 3D space and how it is oriented."

#### Why solvePnP is needed

- The camera only outputs 2D information (pixel coordinates), but the robot needs 3D information:
    - Recall the hand-eye calibration. Its equation is AX = XB, where B is the transform from marker to camera, T_marker2cam—and B is exactly obtained by ArUco corner detection followed by solvePnP. **Without solvePnP there is no B; without B you cannot solve X; hand-eye calibration cannot proceed.**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-14.png" alt="solvePnP projection equation and workflow" />
</div>

#### Physical meaning of solvePnP

```text
image plane (u, v)
        +----------+
   p1 --|.         |
        |          |
   p2 --|.  detected|
        |  4 corners|
   p3 --|.         |
        |          |
   p4 --|.         |
        +----------+
              ^ K (intrinsics)
              |
         solvePnP
              |
              v R, t

   3D space (X, Y, Z)
        +----------+
        | marker  |← rotation R
        |  P1 P2   |
        |  P4 P3   |
        +----------+
              ^
        position t (t meters from camera)
```

- Given 3D world coordinates (a fixed 3D frame describing "where the marker's corner is in real space" with 3 numbers (X, Y, Z), in real length units cm/m), the corresponding 2D pixel coordinates (a 2D image frame describing "where that corner landed in the picture" with 2 numbers (u, v)), and camera intrinsics K, solvePnP back-deduces the camera's rotation R and translation t. It internally uses least-squares optimization, minimizing projection error; the output is the marker's pose relative to the camera.

<a id="hand-eye"></a>

## 28.5 Deep Dive: Hand-Eye Calibration

### Geometric Meaning of AX = XB

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-15.png" alt="Hand-eye calibration AX = XB" />
</div>

#### Problem definition

- Hand-eye calibration solves for X (the fixed transform between camera and end or base), given:
    - A: end-to-base transform (T_gripper2base, from arm forward kinematics)
    - B: marker-to-camera transform (T_marker2cam, from ArUco detection)
- Constraint equation:

    $$
    A\cdot X=X\cdot B
    $$

- X is the hand-eye matrix—a 4x4 homogeneous transform describing the fixed pose (orientation + position) of the camera frame relative to the arm end frame.
    - It contains a 3x3 rotation matrix R_X (orientation) and a 3x1 translation t_X (position);
    - Euler angles are just another "reading" of R_X—the same orientation can be a rotation matrix or Euler angles, and they convert back and forth.

#### Geometric interpretation

Geometrically the constraint is simple. The end moves from pose 1 to pose 2, $A_1 \rightarrow A_2$ (recorded by the arm), while the camera sees the marker move from $1'$ to $2'$, $B_1 \rightarrow B_2$ (ArUco detection). $X$ is the fixed transform between the camera and the end (camera on the end), so the same rigid relationship has to hold at every pose:

$$
\begin{aligned}
A_1 X &= X B_1 \\
A_2 X &= X B_2
\end{aligned}
$$

Multiple (A, B) pairs give multiple constraints; geometrically **only one X satisfies all of them**.

#### Mathematical form

- **Eye-in-Hand**: solve for X = T_cam2gripper (fixed pose of camera relative to end)
- **Eye-to-Hand**: solve for X = T_cam2base (fixed pose of camera relative to base)
- In implementation, each sampled (A, B) is stored; once enough are collected, a calibration solver solves them together.

### Rigid-Body Transform Math Basics

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-16.png" alt="The 4x4 homogeneous transformation matrix" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-17.png" alt="Chained transforms and matrix order" />
</div>

#### 4x4 homogeneous transform matrix

```text
T = [ R   t ]    R: 3x3 rotation matrix
    [ 0   1 ]    t: 3x1 translation vector
```

Advantages of homogeneous transforms:

- Unifies rotation and translation in one matrix multiplication
- Can chain: T1 @ T2 @ T3 means successive transformations through T1, T2, T3. But note: **matrix multiplication is non-commutative—different order gives completely different results**—"rotate 90 degrees then translate" is not the same as "translate then rotate 90 degrees."

#### Three rotation representations

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-18.png" alt="Geometric meaning of the rotation matrix" />
</div>

- Rotation matrix R
    - **Properties**:
        - R^T = R^(-1) (orthogonality)
        - det(R) = 1

        ```text
        [diagram: geometric meaning of R]

        R = [ r11 r12 r13 ]    each column is a basis vector
            [ r21 r22 r23 ]    expressed in the new frame
            [ r31 r32 r33 ]
        ```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-19.png" alt="Euler angles ZYX and gimbal lock" />
</div>

- Euler angles (ZYX intrinsic)
    - **Implementation**: rotate about Z (yaw) -> about new Y (pitch) -> about new X (roll):

        $$
        R=R_z(yaw)\cdot R_y(pitch)\cdot R_x(roll)
        $$

        ```python
        # transforms.py L32-72 implementation reference
        def pose6d_to_mat4(x, y, z, rx, ry, rz, degrees=False):
            if degrees:
                rx, ry, rz = np.radians(rx), np.radians(ry), np.radians(rz)

        # Rotation around X (roll)
            Rx = np.array([
                [1,          0,           0],
                [0,  np.cos(rx), -np.sin(rx)],
                [0,  np.sin(rx),  np.cos(rx)],
            ])
        # Rotation around Y (pitch)
            Ry = np.array([
                [ np.cos(ry), 0, np.sin(ry)],
                [          0, 1,          0],
                [-np.sin(ry), 0, np.cos(ry)],
            ])
        # Rotation around Z (yaw)
            Rz = np.array([
                [np.cos(rz), -np.sin(rz), 0],
                [np.sin(rz),  np.cos(rz), 0],
                [         0,           0, 1],
            ])

        # Intrinsic ZYX rotation: R = Rz @ Ry @ Rx
            R = Rz @ Ry @ Rx

            T = np.eye(4, dtype=np.float64)
            T[:3, :3] = R
            T[:3, 3] = [x, y, z]
            return T
        ```

- **Singularity (gimbal lock)**:
    - Euler angles have a famous pitfall called "gimbal lock": when pitch is +/-90 degrees, X and Z axes coincide, roll and yaw degenerate, DOF drops from 3 to 2, and the pose representation is no longer unique. So near singularities the code uses a fallback formula—this is why Euler angles are often paired with rotation matrices or quaternions in engineering.

        ```python
        # transforms.py L110-122 implementation (handling singularities)
        def rotation_matrix_to_euler_zyx(R):
            R = _nearest_rotation_matrix(R)
            sy = np.sqrt(R[0, 0] ** 2 + R[1, 0] ** 2)
            if sy > 1e-6:
                rx = np.arctan2(R[2, 1], R[2, 2])
                ry = np.arctan2(-R[2, 0], sy)
                rz = np.arctan2(R[1, 0], R[0, 0])
            else:
        # near singularity, use fallback formula
                rx = np.arctan2(-R[1, 2], R[1, 1])
                ry = np.arctan2(-R[2, 0], sy)
                rz = 0.0
            return np.array([rx, ry, rz], dtype=np.float64)
        ```

### Eye-in-Hand vs Eye-to-Hand

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-20.png" alt="Eye-in-hand versus eye-to-hand" />
</div>

```text
[diagram: EIH vs ETH mounting]

Eye-in-Hand:
  arm end -- camera -- looking at workspace
  camera moves with the end

Eye-to-Hand:
  above workspace -- camera -- looking down
  camera fixed, does not move with the end
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-21.png" alt="Inverting ETH into the AX = XB form" />
</div>

#### Special handling for ETH (taking the inverse)

**Implementation**:

```python
# hand_eye.py L110-114 implementation (ETH mode: invert A)
if self._mode == CalibMode.EYE_TO_HAND:
# OpenCV calibrateHandEye solves AX=XB; in ETH mode, invert
# T_gripper2base and pass it as the first argument; it returns T_cam2base.
    R_g2b = [np.linalg.inv(s.T_gripper2base)[:3, :3] for s in self._samples]
    t_g2b = [np.linalg.inv(s.T_gripper2base)[:3, 3].reshape(3, 1) for s in self._samples]
```

**Why ETH needs the inverse**:

- OpenCV's `calibrateHandEye` solves AX=XB internally.
- **EIH mode**: A is T_gripper2base (end motion), X is T_cam2gripper (fixed camera-end), B is T_marker2cam. The equation holds directly.
- **ETH mode**: A is still T_gripper2base, but X is T_cam2base (fixed camera-base). Then AX != XB directly; you must invert A before passing it.

#### What "taking the inverse" means

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-22.png" alt="Inverse of a homogeneous transform" />
</div>

- **"Taking the inverse" = matrix inverse.** In ETH mode, OpenCV does not accept `T_gripper2base`; it wants `T_base2gripper`, so you take the **matrix inverse**.

    ```python
    # what we have (arm FK output)
    T_gripper2base = [R  t]    # end pose (in base frame)
                         [0  1]

    # what OpenCV ETH mode wants (after inversion)
    T_base2gripper = T_gripper2base^-1 = [R^T   -R^T.t]   # base in end frame
                                  [0       1   ]
    ```

- **Rotation part**: inverse of R = transpose of R (R is orthogonal)
- **Translation part**: -R^T . t (un-rotate first, then un-translate)
- Geometric meaning: "end pose in base frame" becomes "base pose in end frame" after inversion.

### Calibration Pose Design Principles

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-23.png" alt="Calibration pose coverage" />
</div>

#### Coverage principle

- Calibration poses must cover changes across **all three rotation axes**:

    ```text
    [diagram: calibration pose distribution]

          Roll ^
               |
       +-------+-------+
       |       |       |
       |  Yaw -+-->    |
       |       |       |
       +-------+-------+
               |
               v Pitch
    ```

- If poses are limited to one angular range (e.g. all roll ~ 0), AX=XB is under-constrained and X is non-unique. So during calibration the arm's poses must involve Roll, Pitch, and Yaw changes.

### Coordinate Transform Chain After Calibration

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-24.png" alt="Eye-in-hand versus eye-to-hand transform chains" />
</div>

**Implementation**:

```python
"""Transform a camera-observed pose into the arm base frame"""
    T_compensation = hand_eye_compensation_matrix(cfg)
    T_he = np.asarray(T_hand_eye, dtype=np.float64)

    if hand_eye_mode == "eye_in_hand":
# EIH: T_cam2base = T_comp x T_tcp2base x T_hand_eye
        return T_compensation @ np.asarray(T_tcp2base, dtype=np.float64) @ T_he
    if hand_eye_mode == "eye_to_hand":
# ETH: T_cam2base = T_comp x T_hand_eye
        return T_compensation @ T_he
```

#### EIH formula meaning

```text
[diagram: EIH transform chain]

  P_obj (target in camera frame)
       |
       | T_cam2gripper (hand-eye result)
       v
  P_obj (target in end frame)
       |
       | T_tcp2base (forward kinematics)
       v
  P_obj (target in base frame)
       |
       | T_compensation (post-hoc fine tune)
       v
  P_obj_final (final target in base frame)
```

- **Implementation**:

    ```python
    """Read compensation matrix from config"""
        calibration = cfg.get("calibration") or {}
        compensation = calibration.get("hand_eye_compensation_m") or {}
        T = np.eye(4, dtype=np.float64)
        T[:3, 3] = [
            float(compensation.get("x", 0.0)),
            float(compensation.get("y", 0.0)),
            float(compensation.get("z", 0.0)),
        ]
        return T
    ```

#### ETH formula

- Because the camera is fixed, the base-camera transform is fixed; T_tcp2base does not enter the composition.

### Calibration Error and Reprojection Analysis

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-25.png" alt="Reprojection error and validation" />
</div>

#### Reprojection error

- Definition: reproject calibration points into the image and compute the pixel distance to the originally detected points.

    ```text
    [diagram: reprojection error]

      original point p_i      reprojected point p_i'
           |                    |
           +---- dx, dy -------+

      reprojection error = sqrt(dx^2 + dy^2)
    ```

    - Empirical threshold: &lt; 1 pixel (sub-pixel).
    - **Error sources**

        | Source | Effect |
        | :--- | :--- |
        | Camera mounting error | Slight camera movement invalidates the calibration |
        | Calibration board error | Inaccurate target position during calibration |
        | Depth error | Depth-camera measurement error |
        | Robot error | Joint error and mechanical backlash |

#### Error propagation chain

```text
calibration error -> pixel error -> grasp deviation
   ^                  ^              ^
   |                  |              |
   |            1-2 pixels     a few mm to cm
   |
   +-- poor calibration poses, camera moved
```

#### Validation methods

- **Reprojection error**: &lt; 1 pixel (direct validation)
- **Real grasp success rate**: place objects at known positions in the workspace and see whether the robot reliably grasps (integrated validation)

<a id="grasp"></a>

## 28.6 6-DoF Grasp Pose Estimation

### Coordinate Conventions for 6-DoF Grasping

#### Vision grasp frame (GraspNet convention)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-26.png" alt="GraspNet visual grasp frame axes" />
</div>

```text
[diagram: vision grasp frame]

Y (open)
|
|   gripper open/close direction
|
+------ X (grip) -> gripper axis (grasp direction)
/
Z (approach)
v approach direction (object toward camera)
```

- X = grip_axis (gripper axis, perpendicular to the finger plane)
- Y = open_axis (open/close direction)
- Z = approach_axis (approach direction, from object toward camera)

#### Robot TCP frame (reBotArm convention)

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-27.png" alt="reBotArm TCP frame axis convention" />
</div>

```text
[diagram: TCP frame]

Z
|  / Y (open)
| /
+------ X (approach) -> tool forward direction (approach object)
```

- X = approach
- Y = open
- Z = completed by right-hand rule

#### Conversion between the two frames

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-28.png" alt="Parallel-gripper 180 degree symmetry" />
</div>

- **Implementation**:

    ```python
    # transforms.py L141-182 implementation reference
    def grasp_axes_to_rebot_tcp_rotation(grip_axis, open_axis, approach_axis):
        """Map grasp-frame axes to the reBotArm TCP frame."""
        grip = grip_axis / norm(grip_axis)
        open_vec = open_axis / norm(open_axis)
        approach = approach_axis / norm(approach_axis)

    # tcp_x = tool forward = approach direction (negate, since plane normal faces camera)
        tcp_x = -approach
    # tcp_y = open direction, subtract approach component to make orthogonal
        tcp_y = open_vec - dot(open_vec, tcp_x) * tcp_x
        tcp_y = tcp_y / norm(tcp_y)
    # tcp_z = right-hand cross product
        tcp_z = cross(tcp_x, tcp_y)
        tcp_z = tcp_z / norm(tcp_z)

    # keep tcp_z aligned with grip_axis
        if dot(tcp_z, grip) < 0:
            tcp_y = -tcp_y
            tcp_z = -tcp_z

        R = np.column_stack([tcp_x, tcp_y, tcp_z]).astype(np.float64)
        if np.linalg.det(R) < 0.0:
            R[:, 2] *= -1.0
        return R
    ```

#### 180-degree symmetry of a parallel gripper

- A parallel (two-finger) gripper has a special symmetry: **rotating 180 degrees about its own X axis (gripper axis) is equivalent**.

    ```text
    [diagram: parallel-gripper symmetry]

       X (grip)     X (grip)
       |            |
       +-+    <=>    +-+
       | |   rotate  | |
       +-+  180 deg  +-+
       |            |
    ```

- If unhandled, the robot randomly switches between equivalent poses and the execution path becomes unstable.
    - **Implementation**:

        ```python
        # transforms.py L125-138 implementation reference
        def canonicalize_parallel_gripper_tcp_rotation(R):
            """Pick a stable equivalent pose."""
            alt = R @ Rx(pi)  # rotate 180 deg about X

            roll = rotation_matrix_to_euler_zyx(R)[0]
            alt_roll = rotation_matrix_to_euler_zyx(alt)[0]

        # pick the branch with smaller |roll| (roll~0 is usually more stable)
            return alt if abs(alt_roll) < abs(roll) else R
        ```

### Geometric Grasp Estimation from OBB + Depth Quantile

#### Full pipeline

- **Implementation**:

    ```python
    # ordinary_grasp.py L98-219 core pseudocode
    def estimate_grasp(result, index, depth_mm, K, depth_quantile=0.75):
    # 1. get OBB
        rect_points = _rect_points(result, index, depth_mm.shape, bbox_xyxy)
        center = rect_points.mean(axis=0).astype(np.float32)

    # 2. short edge = grasp direction
        short_vec_uv, short_len_px = _short_edge(rect_points)
        short_dir_uv = _normalize(short_vec_uv)

    # 3. mask refinement (for curved objects)
        if short_dir_uv is not None:
            refined = _refine_grasp_line_from_mask(mask, center, short_dir_uv, long_len_px)
            if refined is not None:
                center, short_edge_points, grasp_span_px = refined

    # 4. depth sampling (75th quantile within mask)
        depth_values = depth_mm[mask > 0]
        depth_values = depth_values[depth_values > 0]
        if len(depth_values) == 0:
            center_depth = get_depth_mm(depth_mm, center_px[0], center_px[1], 5)
            if center_depth > 0:
                depth_values = np.array([center_depth], dtype=np.float32)

        z_m = float(np.quantile(depth_values, depth_quantile) / 1000.0)

    # 5. backproject center to 3D
        position = _backproject(float(center[0]), float(center[1]), z_m, K)

    # 6. build three axes
        approach = _normalize(-position)       # Z axis: object toward camera
        open_axis = _pixel_vec_to_3d(short_dir_uv, z_m, K)
        open_axis = open_axis - float(np.dot(open_axis, approach)) * approach  # Gram-Schmidt
        open_axis = _normalize(open_axis)

    # ensure open_axis[0] >= 0 (avoid symmetry ambiguity)
        if open_axis[0] < 0:
            open_axis = -open_axis

        grip_axis = _normalize(np.cross(open_axis, approach))
        open_axis = _normalize(np.cross(approach, grip_axis))

    # 7. assemble rotation matrix
        rotation = np.column_stack([grip_axis, open_axis, approach]).astype(np.float32)

    # 8. convert to reBotArm TCP rotation
        tcp_rotation = grasp_axes_to_rebot_tcp_rotation(
            rotation[:, 0], rotation[:, 1], rotation[:, 2]
        ).astype(np.float32)

    # 9. estimate grasp width
        jaw_width_m = float(np.linalg.norm(
            _pixel_vec_to_3d(short_dir_uv * grasp_span_px, z_m, K)
        ))

        return grasp_pose
    ```

#### Three-axis orthogonalization in detail

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-29.png" alt="Grasp axis orthonormalization" />
</div>

- **Why orthogonalize**:
    - In numerical computation, pixel vectors and depth both carry error, so `open_axis` and `approach` may not be orthogonal. Gram-Schmidt orthogonalization guarantees a strictly orthogonal triad forming a valid rotation matrix.

        ```python
        # key steps
        approach = -position / norm(position)           # object toward camera
        open_3d = pixel_to_3d(short_dir_uv, z_m, K)     # short-edge direction in 3D
        open_axis = open_3d - dot(open_3d, approach) * approach   # Gram-Schmidt
        open_axis = normalize(open_axis)
        grip_axis = normalize(cross(open_axis, approach))
        open_axis = normalize(cross(approach, grip_axis))  # re-orthogonalize for numerical stability
        ```

#### Backprojection function

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-30.png" alt="Backprojection from pixel to 3D point" />
</div>

- **Role**: convert a single pixel coordinate (with known depth) to a 3D **point** (position) in the camera frame.

    ```text
    [diagram: physical meaning of backprojection]

      pixel (u=190, v=240) + depth Z=0.65m
               v _backproject
      3D point (X=0.2, Y=0, Z=0.65)
               v
      "object is 0.65m ahead, 0.2m to the right"
    ```

- **Implementation**:

    ```python
    # ordinary_grasp.py L398-403 implementation
    def _backproject(u, v, z_m, K):
        fx, fy = float(K[0, 0]), float(K[1, 1])
        cx, cy = float(K[0, 2]), float(K[1, 2])
        x = (u - cx) * z_m / fx
        y = (v - cy) * z_m / fy
        return np.array([x, y, z_m], dtype=np.float32)
    ```

#### Pixel vector to 3D vector

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-31.png" alt="Pixel vector to 3D vector with mask refinement" />
</div>

- **Role**: convert a pixel-space **vector** (direction + length) to a camera-frame 3D **vector** (direction + length).

    ```text
    [diagram: physical meaning of a pixel vector]

      pixel vector (50, 0) + depth Z=0.65m
               v _pixel_vec_to_3d
      3D vector (0.054, 0, 0)
               v
      "at depth 0.65m, 50 pixels right = 5.4 cm physical"
    ```

- **Implementation**:

    ```python
    # ordinary_grasp.py L406-408 implementation
    def _pixel_vec_to_3d(vec_uv, z_m, K):
        fx, fy = max(float(K[0, 0]), 1e-6), max(float(K[1, 1]), 1e-6)
        return np.array([
            float(vec_uv[0]) * z_m / fx,
            float(vec_uv[1]) * z_m / fy,
            0.0
        ], dtype=np.float32)
    ```

#### Mask refinement (curved objects)

- **Why mask refinement is needed**:
    - The OBB center is the object's geometric center, but for curved objects like a banana, the best grasp point is a specific location along the long axis (usually near the middle). The refinement uses the mask's actual width to adjust the grasp point.
    - **Implementation**: `utils/ordinary_grasp.py_refine_grasp_line_from_mask()` (L233-275)

        ```python
        # ordinary_grasp.py L233-275 implementation
        def _refine_grasp_line_from_mask(mask, center, short_dir_uv, long_len_px):
            """Refine the short-axis grasp point using the mask's central cross-section."""
            ys, xs = np.nonzero(mask > 0)
            if len(xs) < 32:
                return None  # mask too small, skip refinement

            points = np.column_stack([xs, ys]).astype(np.float32)
            grip_dir_uv = np.array([-short_dir_uv[1], short_dir_uv[0]], dtype=np.float32)

            rel = points - center.reshape(1, 2)
            grip_coord = rel @ grip_dir_uv   # coordinate along short axis
            open_coord = rel @ short_dir_uv  # coordinate along long axis

            grip_center = float(np.median(grip_coord))
            band_half_width = clip(long_len_px * 0.04, 2.0, 12.0)
            band_mask = np.abs(grip_coord - grip_center) <= band_half_width

            if count(band_mask) < 24:
                band_half_width = clip(long_len_px * 0.08, 4.0, 18.0)
                band_mask = np.abs(grip_coord - grip_center) <= band_half_width
            if count(band_mask) < 24:
                return None
        # within the band, take 5%/95% quantiles along open direction
            open_min = np.percentile(open_coord[band_mask], 5.0)
            open_max = np.percentile(open_coord[band_mask], 95.0)
            open_center = 0.5 * (open_min + open_max)

        # recombine center
            refined_center = center + grip_center * grip_dir_uv + open_center * short_dir_uv
            short_edge_points = _line_from_center(refined_center, short_dir_uv * (open_max - open_min))
            return refined_center, short_edge_points, float(open_max - open_min)
        ```

#### When the geometric method works—and its limits

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-32.png" alt="Applicability and limits of geometric grasping" />
</div>

### 6-DoF Grasp Estimation with Point-Cloud Networks (GraspNet)

**Implementation**:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-33.png" alt="GraspNet overall pipeline" />
</div>

```text
[diagram: GraspNet pipeline]

RGB + depth
  |
  +-> point cloud generation (backproject with camera intrinsics)
  |
  +-> YOLO detection (crop ROI)
       |
       +-> crop point cloud to target region
            |
            +-> voxelize (voxel_size = 0.01 m)
                 |
                 +-> GraspNet network
                      |
                      +-> PointNet++ backbone (feature extraction)
                      |
                      +-> grasp candidate head (~600 candidates)
                      |
                      +-> scoring head (scores each candidate)
                           |
                           +-> pred_decode (parse into Grasp objects)
                                |
                                +-> collision detection (ModelFreeCollisionDetector)
                                     |
                                     +-> pick the highest-scoring valid grasp
```

#### Input: point cloud + Mask

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-34.png" alt="GraspNet point-cloud network pipeline" />
</div>

- **Implementation**:

    ```python
    # graspnet_utils.py L21-25 implementation
    PROJECT_ROOT = Path(__file__).resolve().parents[1]
    GRASPNET_ROOT = PROJECT_ROOT / "sdk" / "graspnet-baseline"
    DEFAULT_NUM_VIEW = 300
    DEFAULT_VOXEL_SIZE = 0.01              # 1 cm voxel
    DEFAULT_WARMUP_FRAMES = 20
    DISPLAY_FLIP_X = np.diag([1.0, -1.0, -1.0, 1.0]).astype(np.float64)
    ```

- Point cloud backprojected from depth map:
    - Each depth pixel (u, v, Z) backprojects to (X, Y, Z)
    - Concatenate all pixels into the point cloud
- Network structure
    - PointNet++ backbone
        - Point-cloud feature backbone extracting multi-scale geometric features from local to global.
    - Grasp candidate head
        - Outputs many 6-DoF grasp candidates (~600), each containing: 3D position (camera frame), rotation matrix, grasp width, grasp depth.
    - Scoring head
        - Scores each candidate (0-1); higher score means higher expected success.

#### Output format

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-35.png" alt="Decoding GraspNet output and collision checking" />
</div>

```text
Grasp {
  score: 0.85              # grasp quality score
  rotation: (3, 3) matrix  # 6-DoF rotation
  translation: (3,)        # grasp point (camera frame)
  width: 0.05              # grasp width (m)
  depth: 0.02              # grasp depth (m)
}
```

#### Collision detection

- **Implementation**:

    ```python
    # graspnet_utils.py L45 implementation
    from collision_detector import ModelFreeCollisionDetector  # noqa
    ```

- The collision detector checks whether the gripper would hit surrounding objects when executing the grasp, and filters out colliding grasps.

#### Suitable scenarios

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-36.png" alt="GraspNet versus geometric methods" />
</div>

### Converting the Grasp Pose to the Base Frame

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-28/ch28-37.png" alt="Grasp, pregrasp and retreat poses" />
</div>

- **Implementation**:

    ```python
    # transforms.py L227-240 implementation
    def transform_grasp_pose_to_base_with_retreat(
        position_cam,           # grasp point (camera frame)
        tcp_rotation_cam,       # TCP rotation (camera frame)
        T_cam2base,             # hand-eye camera->base matrix
        pregrasp_offset_m,      # pregrasp retract distance
        retreat_offset_m,       # retreat distance
        insertion_depth_m=0.0,
    ):
    # 1. transform grasp point to base frame
        T_grasp_cam = make_T(position_cam, tcp_rotation_cam)
        T_grasp_base = T_cam2base @ T_grasp_cam

    # 2. canonicalize parallel-gripper symmetry
        T_grasp_base[:3, :3] = canonicalize_parallel_gripper_tcp_rotation(T_grasp_base[:3, :3])

    # 3. offset along TCP X to get pregrasp and retreat
        T_grasp_base = offset_along_tool_x(T_grasp_base, -insertion_depth_m)
        T_pregrasp_base = offset_along_tool_x(T_grasp_base, pregrasp_offset_m)
        T_retreat_base = offset_along_tool_x(T_grasp_base, retreat_offset_m)

    # 4. convert back to 6D pose
        return mat4_to_pose6d(T_grasp_base), mat4_to_pose6d(T_pregrasp_base), mat4_to_pose6d(T_retreat_base)
    ```

    - **Physical meaning of the three poses**

        ```text
        [diagram: three grasp-pose stages]

               retreat
                 ^
                 | retreat_offset
                 |
               pregrasp
                 ^
                 | pregrasp_offset
                 |
               grasp
                 v object surface
        ```

        - **grasp**: the actual grasp point, where the gripper closes
        - **pregrasp**: pre-grasp point, retracted along TCP X by some distance, for obstacle-free approach
        - **retreat**: post-grasp point, lifted along TCP X by some distance after grasping
        - For example:
            - pregrasp_offset = 0.05 m -> stop 5 cm away before approaching
            - retreat_offset = 0.10 m -> lift 10 cm after grasping

#### Why three poses are needed

- The standard robot grasp flow:
- Move from the initial position to **pregrasp** (fast, coarse positioning)
- Move slowly from pregrasp to **grasp** (precise alignment)
- Close the gripper
- Lift from grasp to **retreat** (fast withdrawal)
- Move from retreat to the place point

This "fast approach + precise grasp + fast retreat" pattern ensures grasp precision while improving overall efficiency.

</div>
