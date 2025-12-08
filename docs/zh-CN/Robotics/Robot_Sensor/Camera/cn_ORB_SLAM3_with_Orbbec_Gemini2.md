---
description: 本 wiki 提供了在 reComputer Jetson 上使用 Orbbec Gemini2 RGB-D 相机设置和运行 ORB-SLAM3 算法的详细步骤，用于高级视觉 SLAM 应用。
title: 在 reComputer 上使用 Orbbec Gemini2 运行 ORB-SLAM3
keywords:
- ORB-SLAM3
- SLAM
- reComputer
- Jetson
- Orbbec Gemini2
- RGB-D camera
- Visual SLAM
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orb_slam3.webp
slug: /cn/orb_slam3_orbbec_gemini2
last_update:
  date: 2025-08-21
  author: Zibo
---

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orbbec-gemini-2-3d-camera.png" />
</div>

<div style={{ textAlign: "justify" }}>
Orbbec Gemini 2 是一款高性能 RGB-D 相机，配备双眼结构光深度传感器和集成的 6 轴 IMU。它提供完全同步的 RGB 和深度数据流，确保精确的实时深度到彩色对齐，这对于准确的 3D 感知至关重要。这些功能的结合使 Gemini 2 非常适合机器人技术、计算机视觉和其他 3D 应用，能够以高可靠性和准确性执行物体检测、建图、导航和空间分析等任务。该相机结构紧凑，易于设置，并完全支持 Orbbec SDK，适用于研究和工业部署。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 介绍

<div style={{ textAlign: "justify" }}>
[ORB-SLAM3](https://github.com/UZ-SLAMLab/ORB_SLAM3)是一种先进的视觉 SLAM 算法，适用于单目、立体和 RGB-D 相机。它使用 ORB 特征进行鲁棒的跟踪和建图，支持回环检测和重定位，为机器人技术、AR/VR 和自主导航提供高精度和高效率。本 wiki 提供了在 reComputer Jetson 系列上使用 Orbbec Gemini2 RGB-D 相机设置和运行 ORB-SLAM3 的全面步骤，用于高级视觉 SLAM 应用。
</div>

## 先决条件

- **[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)** 预装 Jetpack 6.2
- **Orbbec Gemini2 3D Camera**
- **[ROS2 Humble](https://wiki.seeedstudio.com/cn/install_ros2_humble/)** 环境已安装

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 安装 Orbbec SDK

**步骤 1.** 下载并安装适用于 ARM64 架构的 Orbbec SDK：

```bash
# Download Orbbec SDK
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.11/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip

# Unzip the SDK
unzip OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64.zip
```

**步骤 2.** 构建示例并测试：

```bash
# Install udev rules
cd OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64/shared/
sudo chmod +x ./install_udev_rules.sh
sudo ./install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
# Build examples and setup
cd ..
./build_examples.sh
./setup.sh
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/test_sdk.png" />
</div>

## 构建 ORB-SLAM3

**步骤 1.** 安装系统依赖项：

```bash
sudo apt update && sudo apt install -y \
    cmake build-essential libeigen3-dev libopencv-dev \
    libglew-dev libpython2.7-dev ffmpeg libavcodec-dev \
    libavutil-dev libavformat-dev libswscale-dev \
    libavdevice-dev libdc1394-22-dev libraw1394-dev \
    libjpeg-dev libpng-dev libtiff5-dev libopenexr-dev \
    libepoxy-dev python3-dev libboost-serialization-dev
```

**步骤 2.** 安装 ORB-SLAM3 可视化所需的 Pangolin：

```bash
git clone --recursive https://github.com/stevenlovegrove/Pangolin.git
cd Pangolin
git submodule update --init --recursive

# Install prerequisites
./scripts/install_prerequisites.sh recommended

# Remove conflicting packages and install OpenEXR
sudo apt remove libilmbase-dev -y
sudo apt install libopenexr-dev libimath-dev -y

# Build and install
mkdir build && cd build
cmake ..
make -j$(nproc)
sudo make install
```

:::warning
如果遇到 OpenEXR 相关的编译错误，您可能需要修改源代码：

在`./components/pango_image/src/image_io_exr.cpp`中，将：

```cpp
#include <ImfChannelList.h>
#include <ImfFrameBuffer.h>
#include <ImfInputFile.h>
#include <ImfOutputFile.h>
```

替换为：

```cpp
#include <OpenEXR/ImfChannelList.h>
#include <OpenEXR/ImfFrameBuffer.h>
#include <OpenEXR/ImfInputFile.h>
#include <OpenEXR/ImfOutputFile.h>
```

:::

**步骤 3.** 编译 ORB-SLAM3 的配置

```bash
cd ~
git clone https://github.com/UZ-SLAMLab/ORB_SLAM3.git
cd ORB_SLAM3
```

ORB-SLAM3 可能与较新的 C++标准存在兼容性问题。修复`monotonic_clock`问题：

```bash
# Replace monotonic_clock with steady_clock in all source files
find Examples -name "*.cc" -exec sed -i 's/monotonic_clock/steady_clock/g' {} \;
```

:::info
例如，在`Examples/Stereo/stereo_euroc.cc`中：

```cpp
// Change from:
std::chrono::monotonic_clock::time_point t1 = std::chrono::monotonic_clock::now();

// To:
std::chrono::steady_clock::time_point t1 = std::chrono::steady_clock::now();
```

:::

**步骤 4.** 测试 Pangolin 是否正确安装：

```bash
./examples/SimpleDisplay/SimpleDisplay
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/v_tool.png" />
</div>

如果安装正确，可以正常打开如上图所示的窗口。

**步骤 5.** 修改 CMakeLists.txt

修改 CMakeLists.txt 文件以使项目与 Orbbec SDK 兼容。直接复制以下完整的 CMakeList.txt 配置：
:::info
您需要修改：`set(ORBBEC_SDK_PATH "/home/seeed/demo/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64")`为您自己安装 SDK 的路径。
:::
<details>
<summary> CMakeLists.txt </summary>

```cmake
cmake_minimum_required(VERSION 2.8)
project(ORB_SLAM3)

IF(NOT CMAKE_BUILD_TYPE)
  SET(CMAKE_BUILD_TYPE Release)
ENDIF()

MESSAGE("Build type: " ${CMAKE_BUILD_TYPE})

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS}  -Wall   -O3")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall   -O3")
set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS_RELEASE} -march=native")
set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -march=native")

# Check C++14, C++11 or C++0x support
include(CheckCXXCompilerFlag)
CHECK_CXX_COMPILER_FLAG("-std=c++14" COMPILER_SUPPORTS_CXX14)
CHECK_CXX_COMPILER_FLAG("-std=c++11" COMPILER_SUPPORTS_CXX11)
CHECK_CXX_COMPILER_FLAG("-std=c++0x" COMPILER_SUPPORTS_CXX0X)
if(COMPILER_SUPPORTS_CXX14)
   set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14")
   add_definitions(-DCOMPILEDWITHC14)
   message(STATUS "Using flag -std=c++14.")
elseif(COMPILER_SUPPORTS_CXX11)
   set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
   add_definitions(-DCOMPILEDWITHC11)
   message(STATUS "Using flag -std=c++11.")
elseif(COMPILER_SUPPORTS_CXX0X)
   set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++0x")
   add_definitions(-DCOMPILEDWITHC0X)
   message(STATUS "Using flag -std=c++0x.")
else()
   message(FATAL_ERROR "The compiler ${CMAKE_CXX_COMPILER} has no C++14/11 support. Please use a different C++ compiler.")
endif()

LIST(APPEND CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake_modules)

find_package(OpenCV 4.4)
   if(NOT OpenCV_FOUND)
      message(FATAL_ERROR "OpenCV > 4.4 not found.")
   endif()

MESSAGE("OPENCV VERSION:")
MESSAGE(${OpenCV_VERSION})

find_package(Eigen3 3.1.0 REQUIRED)
find_package(Pangolin REQUIRED)
find_package(realsense2)

include_directories(
${PROJECT_SOURCE_DIR}
${PROJECT_SOURCE_DIR}/include
${PROJECT_SOURCE_DIR}/include/CameraModels
${PROJECT_SOURCE_DIR}/Thirdparty/Sophus
${EIGEN3_INCLUDE_DIR}
${Pangolin_INCLUDE_DIRS}
)

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/lib)

add_library(${PROJECT_NAME} SHARED
src/System.cc
src/Tracking.cc
src/LocalMapping.cc
src/LoopClosing.cc
src/ORBextractor.cc
src/ORBmatcher.cc
src/FrameDrawer.cc
src/Converter.cc
src/MapPoint.cc
src/KeyFrame.cc
src/Atlas.cc
src/Map.cc
src/MapDrawer.cc
src/Optimizer.cc
src/Frame.cc
src/KeyFrameDatabase.cc
src/Sim3Solver.cc
src/Viewer.cc
src/ImuTypes.cc
src/G2oTypes.cc
src/CameraModels/Pinhole.cpp
src/CameraModels/KannalaBrandt8.cpp
src/OptimizableTypes.cpp
src/MLPnPsolver.cpp
src/GeometricTools.cc
src/TwoViewReconstruction.cc
src/Config.cc
src/Settings.cc
include/System.h
include/Tracking.h
include/LocalMapping.h
include/LoopClosing.h
include/ORBextractor.h
include/ORBmatcher.h
include/FrameDrawer.h
include/Converter.h
include/MapPoint.h
include/KeyFrame.h
include/Atlas.h
include/Map.h
include/MapDrawer.h
include/Optimizer.h
include/Frame.h
include/KeyFrameDatabase.h
include/Sim3Solver.h
include/Viewer.h
include/ImuTypes.h
include/G2oTypes.h
include/CameraModels/GeometricCamera.h
include/CameraModels/Pinhole.h
include/CameraModels/KannalaBrandt8.h
include/OptimizableTypes.h
include/MLPnPsolver.h
include/GeometricTools.h
include/TwoViewReconstruction.h
include/SerializationUtils.h
include/Config.h
include/Settings.h)

add_subdirectory(Thirdparty/g2o)

target_link_libraries(${PROJECT_NAME}
${OpenCV_LIBS}
${EIGEN3_LIBS}
${Pangolin_LIBRARIES}
${PROJECT_SOURCE_DIR}/Thirdparty/DBoW2/lib/libDBoW2.so
${PROJECT_SOURCE_DIR}/Thirdparty/g2o/lib/libg2o.so
-lboost_serialization
-lcrypto
)

# If RealSense SDK is found the library is added and its examples compiled
if(realsense2_FOUND)
    include_directories(${PROJECT_NAME}
    ${realsense_INCLUDE_DIR}
    )
    target_link_libraries(${PROJECT_NAME}
    ${realsense2_LIBRARY}
    )
endif()

# Check for Orbbec SDK
# Try to find OrbbecSDK in the local directory first
set(ORBBEC_SDK_PATH "/home/seeed/demo/OrbbecSDK_v2.4.11_202508040936_058db73_linux_aarch64")
if(EXISTS ${ORBBEC_SDK_PATH})
    set(ORBBEC_FOUND TRUE)
    set(ORBBEC_INCLUDE_DIRS ${ORBBEC_SDK_PATH}/include)
    set(ORBBEC_LIBRARIES ${ORBBEC_SDK_PATH}/lib/libOrbbecSDK.so)
    message(STATUS "Orbbec SDK found at: ${ORBBEC_SDK_PATH}")
    message(STATUS "Orbbec SDK include dirs: ${ORBBEC_INCLUDE_DIRS}")
    message(STATUS "Orbbec SDK library: ${ORBBEC_LIBRARIES}")
else()
    # Fallback to pkg-config
    find_package(PkgConfig)
    if(PkgConfig_FOUND)
        pkg_check_modules(ORBBEC ob_api)
        if(ORBBEC_FOUND)
            message(STATUS "Orbbec SDK found via pkg-config: ${ORBBEC_VERSION}")
        endif()
    endif()
endif()

if(ORBBEC_FOUND)
    include_directories(${PROJECT_NAME}
    ${ORBBEC_INCLUDE_DIRS}
    )
    target_link_libraries(${PROJECT_NAME}
    ${ORBBEC_LIBRARIES}
    )
else()
    message(WARNING "Orbbec SDK not found. Orbbec examples will not be compiled.")
endif()


# Build examples

# RGB-D examples
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples/RGB-D)

add_executable(rgbd_tum
        Examples/RGB-D/rgbd_tum.cc)
target_link_libraries(rgbd_tum ${PROJECT_NAME})

if(realsense2_FOUND)
    add_executable(rgbd_realsense_D435i
            Examples/RGB-D/rgbd_realsense_D435i.cc)
    target_link_libraries(rgbd_realsense_D435i ${PROJECT_NAME})
endif()

if(ORBBEC_FOUND)
    add_executable(rgbd_orbbec_gemini2
            Examples/RGB-D/rgbd_orbbec_gemini2_cpp.cc)
    target_link_libraries(rgbd_orbbec_gemini2 ${PROJECT_NAME})
endif()


# RGB-D inertial examples
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples/RGB-D-Inertial)

if(realsense2_FOUND)
    add_executable(rgbd_inertial_realsense_D435i
            Examples/RGB-D-Inertial/rgbd_inertial_realsense_D435i.cc)
    target_link_libraries(rgbd_inertial_realsense_D435i ${PROJECT_NAME})
endif()

#Stereo examples
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples/Stereo)

add_executable(stereo_kitti
        Examples/Stereo/stereo_kitti.cc)
target_link_libraries(stereo_kitti ${PROJECT_NAME})

add_executable(stereo_euroc
        Examples/Stereo/stereo_euroc.cc)
target_link_libraries(stereo_euroc ${PROJECT_NAME})

add_executable(stereo_tum_vi
        Examples/Stereo/stereo_tum_vi.cc)
target_link_libraries(stereo_tum_vi ${PROJECT_NAME})

if(realsense2_FOUND)
    add_executable(stereo_realsense_t265
            Examples/Stereo/stereo_realsense_t265.cc)
    target_link_libraries(stereo_realsense_t265 ${PROJECT_NAME})

    add_executable(stereo_realsense_D435i
            Examples/Stereo/stereo_realsense_D435i.cc)
    target_link_libraries(stereo_realsense_D435i ${PROJECT_NAME})
endif()



#Monocular examples
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples/Monocular)

add_executable(mono_tum
        Examples/Monocular/mono_tum.cc)
target_link_libraries(mono_tum ${PROJECT_NAME})

add_executable(mono_kitti
        Examples/Monocular/mono_kitti.cc)
target_link_libraries(mono_kitti ${PROJECT_NAME})

add_executable(mono_euroc
        Examples/Monocular/mono_euroc.cc)
target_link_libraries(mono_euroc ${PROJECT_NAME})

add_executable(mono_tum_vi
        Examples/Monocular/mono_tum_vi.cc)
target_link_libraries(mono_tum_vi ${PROJECT_NAME})

if(realsense2_FOUND)
    add_executable(mono_realsense_t265
            Examples/Monocular/mono_realsense_t265.cc)
    target_link_libraries(mono_realsense_t265 ${PROJECT_NAME})

    add_executable(mono_realsense_D435i
            Examples/Monocular/mono_realsense_D435i.cc)
    target_link_libraries(mono_realsense_D435i ${PROJECT_NAME})
endif()

#Monocular inertial examples
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples/Monocular-Inertial)

add_executable(mono_inertial_euroc
        Examples/Monocular-Inertial/mono_inertial_euroc.cc)
target_link_libraries(mono_inertial_euroc ${PROJECT_NAME})

add_executable(mono_inertial_tum_vi
        Examples/Monocular-Inertial/mono_inertial_tum_vi.cc)
target_link_libraries(mono_inertial_tum_vi ${PROJECT_NAME})

if(realsense2_FOUND)
    add_executable(mono_inertial_realsense_t265
            Examples/Monocular-Inertial/mono_inertial_realsense_t265.cc)
    target_link_libraries(mono_inertial_realsense_t265 ${PROJECT_NAME})

    add_executable(mono_inertial_realsense_D435i
            Examples/Monocular-Inertial/mono_inertial_realsense_D435i.cc)
    target_link_libraries(mono_inertial_realsense_D435i ${PROJECT_NAME})
endif()

#Stereo Inertial examples
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples/Stereo-Inertial)

add_executable(stereo_inertial_euroc
        Examples/Stereo-Inertial/stereo_inertial_euroc.cc)
target_link_libraries(stereo_inertial_euroc ${PROJECT_NAME})

add_executable(stereo_inertial_tum_vi
        Examples/Stereo-Inertial/stereo_inertial_tum_vi.cc)
target_link_libraries(stereo_inertial_tum_vi ${PROJECT_NAME})

if(realsense2_FOUND)
    add_executable(stereo_inertial_realsense_t265
            Examples/Stereo-Inertial/stereo_inertial_realsense_t265.cc)
    target_link_libraries(stereo_inertial_realsense_t265 ${PROJECT_NAME})

    add_executable(stereo_inertial_realsense_D435i
            Examples/Stereo-Inertial/stereo_inertial_realsense_D435i.cc)
    target_link_libraries(stereo_inertial_realsense_D435i ${PROJECT_NAME})
endif()



set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples/Calibration)
if(realsense2_FOUND)
    add_executable(recorder_realsense_D435i
            Examples/Calibration/recorder_realsense_D435i.cc)
    target_link_libraries(recorder_realsense_D435i ${PROJECT_NAME})

    add_executable(recorder_realsense_T265
            Examples/Calibration/recorder_realsense_T265.cc)
    target_link_libraries(recorder_realsense_T265 ${PROJECT_NAME})
endif()



#Old examples - DISABLED to avoid compilation issues
# Uncomment the following lines if you need the old examples

# # RGB-D examples
# set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples_old/RGB-D)
# 
# add_executable(rgbd_tum_old
#         Examples_old/RGB-D/rgbd_tum.cc)
# target_link_libraries(rgbd_tum_old ${PROJECT_NAME})
# 
# if(realsense2_FOUND)
#     add_executable(rgbd_realsense_D435i_old
#             Examples_old/RGB-D/rgbd_realsense_D435i.cc)
#     target_link_libraries(rgbd_realsense_D435i_old ${PROJECT_NAME})
# endif()
# 
# # RGB-D inertial examples
# set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples_old/RGB-D-Inertial)
# 
# if(realsense2_FOUND)
#     add_executable(rgbd_inertial_realsense_D435i_old
#             Examples_old/RGB-D-Inertial/rgbd_inertial_realsense_D435i.cc)
#     target_link_libraries(rgbd_inertial_realsense_D435i_old ${PROJECT_NAME})
# endif()
# 
# #Stereo examples
# set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples_old/Stereo)
# 
# add_executable(stereo_kitti_old
#         Examples_old/Stereo/stereo_kitti.cc)
# target_link_libraries(stereo_kitti_old ${PROJECT_NAME})
# 
# add_executable(stereo_euroc_old
#         Examples_old/Stereo/stereo_euroc.cc)
# target_link_libraries(stereo_euroc_old ${PROJECT_NAME})
# 
# add_executable(stereo_tum_vi_old
#         Examples_old/Stereo/stereo_tum_vi.cc)
# target_link_libraries(stereo_tum_vi_old ${PROJECT_NAME})
# 
# if(realsense2_FOUND)
#     add_executable(stereo_realsense_t265_old
#             Examples_old/Stereo/stereo_realsense_t265.cc)
#     target_link_libraries(stereo_realsense_t265_old ${PROJECT_NAME})
# 
#     add_executable(stereo_realsense_D435i_old
#             Examples_old/Stereo/stereo_realsense_D435i.cc)
#     target_link_libraries(stereo_realsense_D435i_old ${PROJECT_NAME})
# endif()
# 
# #Monocular examples
# set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples_old/Monocular)
# 
# add_executable(mono_tum_old
#         Examples_old/Monocular/mono_tum.cc)
# target_link_libraries(mono_tum_old ${PROJECT_NAME})
# 
# add_executable(mono_kitti_old
#         Examples_old/Monocular/mono_kitti.cc)
# target_link_libraries(mono_tum_old ${PROJECT_NAME})
# 
# add_executable(mono_euroc_old
#         Examples_old/Monocular/mono_euroc.cc)
# target_link_libraries(mono_euroc_old ${PROJECT_NAME})
# 
# add_executable(mono_tum_vi_old
#         Examples_old/Monocular/mono_tum_vi.cc)
# target_link_libraries(mono_tum_vi_old ${PROJECT_NAME})
# 
# if(realsense2_FOUND)
#     add_executable(mono_realsense_t265_old
#             Examples_old/Monocular/mono_realsense_t265.cc)
#     target_link_libraries(mono_realsense_t265_old ${PROJECT_NAME})
# 
#     add_executable(mono_realsense_D435i_old
#             Examples_old/Monocular/mono_realsense_D435i.cc)
#     target_link_libraries(mono_realsense_D435i_old ${PROJECT_NAME})
# endif()
# 
# #Monocular inertial examples
# set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples_old/Monocular-Inertial)
# 
# add_executable(mono_inertial_euroc_old
#         Examples_old/Monocular-Inertial/mono_inertial_euroc.cc)
# target_link_libraries(mono_inertial_euroc_old ${PROJECT_NAME})
# 
# add_executable(mono_inertial_tum_vi_old
#         Examples_old/Monocular-Inertial/mono_inertial_tum_vi.cc)
# target_link_libraries(mono_inertial_tum_vi_old ${PROJECT_NAME})
# 
# if(realsense2_FOUND)
#     add_executable(mono_inertial_realsense_t265_old
#             Examples_old/Monocular-Inertial/mono_inertial_realsense_t265.cc)
#     target_link_libraries(mono_inertial_realsense_t265_old ${PROJECT_NAME})
# 
#     add_executable(mono_inertial_realsense_D435i_old
#             Examples_old/Monocular-Inertial/mono_inertial_realsense_D435i.cc)
#     target_link_libraries(mono_inertial_realsense_D435i_old ${PROJECT_NAME})
# endif()
# 
# #Stereo Inertial examples
# set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/Examples_old/Stereo-Inertial)
# 
# add_executable(stereo_inertial_euroc_old
#         Examples_old/Stereo-Inertial/stereo_inertial_realsense_t265.cc)
# target_link_libraries(stereo_inertial_realsense_t265_old ${PROJECT_NAME})
# 
# add_executable(stereo_inertial_tum_vi_old
#         Examples_old/Stereo-Inertial/stereo_inertial_tum_vi.cc)
# target_link_libraries(stereo_inertial_tum_vi_old ${PROJECT_NAME})
# 
# if(realsense2_FOUND)
#     add_executable(stereo_inertial_realsense_t265_old
#             Examples_old/Stereo-Inertial/stereo_inertial_realsense_t265.cc)
#     target_link_libraries(stereo_inertial_realsense_t265_old ${PROJECT_NAME})
# 
#     add_executable(stereo_inertial_realsense_D435i_old
#             Examples_old/Stereo-Inertial/stereo_inertial_realsense_D435i.cc)
#     target_link_libraries(stereo_inertial_realsense_D435i_old ${PROJECT_NAME})
# endif()

```

</details>

**步骤 6.** 创建一个使用 Orbbec Gemini2 适配器的 ORB-SLAM3 RGB-D 模式脚本

在 `Examples/RGB-D/` 目录下创建一个名为 `rgbd_orbbec_gemini2_cpp.cc` 的文件，内容如下：

<details>
<summary> rgbd_orbbec_gemini2_cpp.cc </summary>

```c++
/**
* This file is part of ORB-SLAM3
*
* Copyright (C) 2017-2021 Carlos Campos, Richard Elvira, Juan J. Gómez Rodríguez, José M.M. Montiel and Juan D. Tardós, University of Zaragoza.
* Copyright (C) 2014-2016 Raúl Mur-Artal, José M.M. Montiel and Juan D. Tardós, University of Zaragoza.
*
* ORB-SLAM3 is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
* License as published by the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* ORB-SLAM3 is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the
* implied warranty of MERCHANTABILITY or PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with ORB-SLAM3.
* If not, see <http://www.gnu.org/licenses/>.
*/

#include <signal.h>
#include <stdlib.h>
#include <iostream>
#include <algorithm>
#include <fstream>
#include <chrono>
#include <ctime>
#include <sstream>

#include <condition_variable>
#include <mutex>
#include <thread>

#include <opencv2/core/core.hpp>

#include <libobsensor/ObSensor.hpp>
#include <libobsensor/h/ObTypes.h>

#include <System.h>

using namespace std;

bool b_continue_session;

void exit_loop_handler(int s){
    cout << "Finishing session" << endl;
    b_continue_session = false;
}

// Orbbec Gemini 2 camera parameters
const int WIDTH = 640;
const int HEIGHT = 480;
const int FPS = 30;

// Global variables for camera data
cv::Mat imCV, depthCV;
double timestamp_image = -1.0;
bool image_ready = false;
int count_im_buffer = 0;

// Mutex and condition variable for thread synchronization
std::mutex imu_mutex;
std::condition_variable cond_image_rec;

// Orbbec pipeline and config using C++ API
std::shared_ptr<ob::Pipeline> pipeline = nullptr;
std::shared_ptr<ob::Config> config = nullptr;

// Callback function for receiving frames from Orbbec Gemini 2
void orbbec_frame_callback(std::shared_ptr<ob::FrameSet> frameSet) {
    std::unique_lock<std::mutex> lock(imu_mutex);

    if (frameSet == nullptr) {
        return;
    }

    count_im_buffer++;

    // Get current timestamp
    double new_timestamp_image = std::chrono::duration_cast<std::chrono::milliseconds>(
        std::chrono::system_clock::now().time_since_epoch()).count() * 1e-3;

    // Limit frame rate to 15 FPS to reduce processing load
    if (abs(timestamp_image - new_timestamp_image) < 0.067) { // 1/15 = 0.067 seconds
        count_im_buffer--;
        return;
    }

    try {
                    // Process color frame
            auto colorFrame = frameSet->getFrame(OB_FRAME_COLOR);
            if (colorFrame != nullptr) {
                auto videoFrame = colorFrame->as<ob::VideoFrame>();
                uint32_t width = videoFrame->getWidth();
                uint32_t height = videoFrame->getHeight();
                OBFormat format = videoFrame->getFormat();

                // Convert to OpenCV Mat
                if (format == OB_FORMAT_RGB || format == OB_FORMAT_BGR) {
                    uint8_t* data = (uint8_t*)videoFrame->getData();
                    imCV = cv::Mat(height, width, CV_8UC3, data);
                    if (format == OB_FORMAT_RGB) {
                        cv::cvtColor(imCV, imCV, cv::COLOR_RGB2BGR);
                    }

                    // Resize image for better performance (smaller size for faster processing)
                    cv::resize(imCV, imCV, cv::Size(640, 360));

                    // Add small delay to prevent overwhelming the system
                    std::this_thread::sleep_for(std::chrono::milliseconds(10));
                }
            }

        // Process depth frame
        auto depthFrame = frameSet->getFrame(OB_FRAME_DEPTH);
        if (depthFrame != nullptr) {
            auto videoFrame = depthFrame->as<ob::VideoFrame>();
            uint32_t width = videoFrame->getWidth();
            uint32_t height = videoFrame->getHeight();

            uint8_t* data = (uint8_t*)videoFrame->getData();
            // Convert to OpenCV Mat (depth is 16-bit)
            depthCV = cv::Mat(height, width, CV_16U, data);

            // Resize depth image for better performance (smaller size for faster processing)
            cv::resize(depthCV, depthCV, cv::Size(640, 360));
        }

        timestamp_image = new_timestamp_image;
        image_ready = true;

    } catch (const ob::Error& e) {
        std::cerr << "Error processing frames: " << e.what() << std::endl;
    }

    lock.unlock();
    cond_image_rec.notify_all();
}

int main(int argc, char **argv)
{
    if(argc != 3)
    {
        cerr << endl << "Usage: ./rgbd_orbbec_gemini2_cpp path_to_vocabulary path_to_settings" << endl;
        return 1;
    }

    // Check if vocabulary file exists
    if (strcmp(argv[1], "-") == 0) {
        cerr << "Vocabulary file not found." << endl;
        exit(-1);
    }

    // Check if settings file exists
    if (strcmp(argv[2], "-") == 0) {
        cerr << "Settings file not found." << endl;
        exit(-1);
    }

    try {
        // Create pipeline using C++ API
        pipeline = std::make_shared<ob::Pipeline>();
        cout << "✓ Pipeline created successfully" << endl;

        // Get device info
        auto device = pipeline->getDevice();
        if (device) {
            auto deviceInfo = device->getDeviceInfo();
            cout << "✓ Device name: " << deviceInfo->getName() << endl;
            cout << "✓ Device serial: " << deviceInfo->getSerialNumber() << endl;
        }

        // Create config
        config = std::make_shared<ob::Config>();

        // Enable color stream
        config->enableVideoStream(OB_STREAM_COLOR, OB_WIDTH_ANY, OB_HEIGHT_ANY, OB_FPS_ANY, OB_FORMAT_RGB);
        cout << "✓ Color stream enabled" << endl;

        // Enable depth stream
        config->enableVideoStream(OB_STREAM_DEPTH, OB_WIDTH_ANY, OB_HEIGHT_ANY, OB_FPS_ANY, OB_FORMAT_Y16);
        cout << "✓ Depth stream enabled" << endl;

        // Start pipeline with callback
        pipeline->start(config, orbbec_frame_callback);
        cout << "✓ Orbbec Gemini 2 pipeline started successfully!" << endl;

    } catch (const ob::Error& e) {
        cerr << "Failed to initialize Orbbec SDK: " << e.what() << endl;
        return -1;
    } catch (const std::exception& e) {
        cerr << "Exception during initialization: " << e.what() << endl;
        return -1;
    }

    // Create SLAM system
    ORB_SLAM3::System SLAM(argv[1], argv[2], ORB_SLAM3::System::RGBD, true, 0, "");
    float imageScale = SLAM.GetImageScale();

    double timestamp;
    cv::Mat im, depth;

    double t_resize = 0.f;
    double t_track = 0.f;

    cout << "Starting SLAM system..." << endl;

    // Main loop
    while (!SLAM.isShutDown())
    {
        {
            std::unique_lock<std::mutex> lk(imu_mutex);
            if (!image_ready)
                cond_image_rec.wait(lk);

            if (count_im_buffer > 1)
                cout << count_im_buffer - 1 << " dropped frames\n";
            count_im_buffer = 0;

            timestamp = timestamp_image;
            im = imCV.clone();
            depth = depthCV.clone();

            image_ready = false;
        }

        if (imageScale != 1.f)
        {
            int width = im.cols * imageScale;
            int height = im.rows * imageScale;
            cv::resize(im, im, cv::Size(width, height));
            cv::resize(depth, depth, cv::Size(width, height));
        }

        // Pass the image to the SLAM system
        SLAM.TrackRGBD(im, depth, timestamp);
    }

    cout << "System shutdown!" << endl;

    // Cleanup
    if (pipeline) {
        pipeline->stop();
        cout << "✓ Pipeline stopped" << endl;
    }

    return 0;
}

```

</details>

**步骤 7.** 构建 ORB-SLAM3

```bash
chmod +x build.sh
./build.sh
```

## 相机标定

<div style={{ textAlign: "justify" }}>
在运行 ORB-SLAM3 之前，需要对相机进行标定以获取相机的参数配置。这里我们演示使用 ROS 提供的相机标定工具来标定相机并获取其参数。
</div>

**步骤 1.** 安装 Orbbec ROS2 驱动

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git

# Install dependencies
sudo apt install libgflags-dev nlohmann-json3-dev \
    ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins \
    ros-${ROS_DISTRO}-compressed-image-transport ros-$ROS_DISTRO-image-publisher \
    ros-$ROS_DISTRO-camera-info-manager ros-$ROS_DISTRO-diagnostic-updater \
    ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs \
    ros-$ROS_DISTRO-backward-ros libdw-dev

# Install udev rules
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger

# Build
cd ~/ros2_ws/
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source and launch
source ./install/setup.bash
ros2 launch orbbec_camera gemini2.launch.py
```

:::note
您可以通过观察相机数据话题是否正常发布来检查相机节点是否能正常启动。
<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/camera_topic.png" />
</div>
:::

**步骤 2.** 安装相机标定包

```bash
sudo apt install ros-humble-camera-calibration
```

**步骤 3.** 下载标定棋盘格

从以下地址下载标定棋盘格

[棋盘格合集](https://markhedleyjones.com/media/calibration-checkerboard-collection/Checkerboard-A4-25mm-8x6.pdf) 并打印出来。

**步骤 4.** 运行相机标定

```bash
# For 8x6 checkerboard with 25mm squares
ros2 run camera_calibration cameracalibrator --size 8x6 --square 0.025 \
  --ros-args --remap image:=/camera/color/image_raw --remap camera:=/camera/color
```

:::note

- `--size 8x6` 指的是内角点的数量（8×6 = 48 个角点，对应 9×7 网格）
- `--square 0.025` 指的是方格大小，单位为米（25mm）
- 移动相机从不同角度捕获图像

:::

从不同角度收集图像，自动计算相机参数，并将标定数据保存在工具提示中。
<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/cal_tool.png" />
</div>

<div align="center">
    <img width={1000}  
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/cal_save.png" />
</div>

**步骤 5.** 配置相机 YAML 文件

在您的 ORB-SLAM3 项目的 `Examples/RGB-D/` 文件夹下为 Orbbec Gemini2 相机创建一个名为 `Orbbec_Gemini2.yaml` 的参数配置文件。

<details>
<summary> Orbbec_Gemini2.yaml </summary>

```yaml
%YAML:1.0

#--------------------------------------------------------------------------------------------
# Camera Parameters
#--------------------------------------------------------------------------------------------
File.version: "1.0"

Camera.type: "PinHole"

# Camera calibration and distortion parameters 
Camera1.fx: 375.46889
Camera1.fy: 372.37399
Camera1.cx: 300.47217
Camera1.cy: 170.2732

# distortion parameters
Camera1.k1: 0.003083
Camera1.k2: 0.015102
Camera1.p1: -0.005496
Camera1.p2: -0.012839
Camera1.k3: 0.0

# Camera resolution
Camera.width: 640
Camera.height: 360

# Camera frames per second 
Camera.fps: 30

# Color order of the images (0: BGR, 1: RGB)
Camera.RGB: 1

# Stereo/Depth 参数（如果是单目，可以不用）
Stereo.ThDepth: 40.0
Stereo.b: 0.0745

# Depth map scale
RGBD.DepthMapFactor: 1000.0

#--------------------------------------------------------------------------------------------
# ORB Parameters
#--------------------------------------------------------------------------------------------
ORBextractor.nFeatures: 800
ORBextractor.scaleFactor: 1.2
ORBextractor.nLevels: 6
ORBextractor.iniThFAST: 20
ORBextractor.minThFAST: 7

#--------------------------------------------------------------------------------------------
# Viewer Parameters
#--------------------------------------------------------------------------------------------
Viewer.KeyFrameSize: 0.05
Viewer.KeyFrameLineWidth: 1.0
Viewer.GraphLineWidth: 0.9
Viewer.PointSize: 2.0
Viewer.CameraSize: 0.08
Viewer.CameraLineWidth: 3.0
Viewer.ViewpointX: 0.0
Viewer.ViewpointY: -0.7
Viewer.ViewpointZ: -3.5
Viewer.ViewpointF: 500.0

```

</details>

## 运行 ORB-SLAM3

```bash
# Set Library Path
export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH
# Run RGB-D mode slam
./Examples/RGB-D/rgbd_orbbec_gemini2 Vocabulary/ORBvoc.txt Examples/RGB-D/Orbbec_Gemini2.yaml
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini2/orb_slam3.gif" />
</div>

## 资源

- [Orbbec SDK v2 API 指南](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/source/3_Application_Guide/Application_Guide.html)
- [Orbbec ROS2 驱动](https://github.com/orbbec/OrbbecSDK_ROS2)
- [ORB-SLAM3 仓库](https://github.com/UZ-SLAMLab/ORB_SLAM3)
- [ROS1使用教程参考Gemini2](https://wiki.seeedstudio.com/orbbec_depth_camera_on_ros/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
