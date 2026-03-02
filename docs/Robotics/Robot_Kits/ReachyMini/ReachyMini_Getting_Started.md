---
description: Build and control ReachyMini, a compact, open-source desktop humanoid robot for AI and robotics learning.
title: ReachyMini Getting Started
keywords:
- Lerobot
- Huggingface
- ReachyMini
- Robotics
- 3D Printing
- Open Source
- Humanoid Robot
- Python
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.webp
slug: /reachymini_getting_started
sku:
translation:
  skip: [zh-CN,ja,es]
last_update:
  date: 1/7/2026
  author: TienjuiWong
---

<div style={{maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'}}>
  <video
    width="100%"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    style={{display: 'block'}}
    ref={(video) => { if (video) video.play().catch(() => {}); }}>
    <source src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🤖</font></span></strong>
</a>
</div>

The **Reachy Mini** is the first open-source desktop robot designed to explore human-robot interaction and creative custom applications. Developed collaboratively by **Pollen Robotics** and **Hugging Face**, this compact humanoid robot brings professional-grade robotics capabilities to your desk at an affordable price point.

Optimized and manufactured by **Seeed Studio**, Reachy Mini combines expressive physical interaction with modern AI capabilities. Whether you're building voice assistants, computer vision applications, or educational tools, Reachy Mini provides a complete platform for real-world AI experimentation.


:::tip[What You'll Learn]

- The key features and architecture of Reachy Mini
- Hardware specifications and differences between Lite and Full versions
- How to assemble and configure your Reachy Mini
- How to control the robot using the Python SDK
- How to integrate with Hugging Face models and applications
- Where to find community resources and support

:::

## Key Features & Specifications

Reachy Mini packs impressive capabilities into a compact, desktop-sized package.

| Feature | Reachy Mini Lite | Reachy Mini (Full) |
|:---|:---|:---|
| **Price** | $299 + shipping | $449 + shipping |
| **Compute** | External (Mac/Linux compatible) | Raspberry Pi 4 onboard |
| **Connectivity** | Wired only | WiFi + Ethernet (via USB-C adapter) |
| **Power** | Wired power | Battery + wired operation |
| **Microphones** | 4 | 4 |
| **Speaker** | 5W | 5W |
| **Camera** | Wide-angle | Wide-angle |
| **Accelerometer** | No | Yes |
| **Head Movement** | 6-DOF | 6-DOF |
| **Body Rotation** | Yes | Yes |
| **Animated Antennas** | 2 | 2 |
| **Height** | 28 cm (11") | 28 cm (11") |
| **Weight** | 1.5 kg (3.3 lbs) | 1.5 kg (3.3 lbs) |

### Physical Dimensions

- **Height:** 28 cm / 11 inches (approximately 23 cm / 9 inches in sleep mode)
- **Width:** 16 cm / 6.3 inches
- **Weight:** 1.5 kg / 3.3 lbs

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '24px 0'}}>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachy_mini_dimensions.png" alt="Reachy Mini Dimensions"/>
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Physical Dimensions</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/dof_table.png" alt="Degrees of Freedom Table"/>
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>DOF Specifications</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/degrees_of_freedom.png" alt="Degrees of Freedom Diagram"/>
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Motion Range</p>
  </div>
</div>

## Designed for Human-Robot Interaction

Reachy Mini is specifically engineered for expressive, engaging human-robot interaction:

### Expressive Movement
- **6 Degrees of Freedom Head:** Natural-looking pan, tilt, and roll movements
- **Full Body Rotation:** 360-degree rotation for dynamic positioning
- **Animated Antennas:** Two expressive antennas that add personality and feedback

### Multimodal Sensing
- **4-Microphone Array:** Advanced audio capture for voice recognition and sound localization
- **Wide-Angle Camera:** Computer vision capabilities for face detection, object recognition, and more
- **5W Speaker:** Clear audio output for speech synthesis and sound effects

### Open & Extensible
- **Fully Open-Source:** Hardware design, software SDK, and simulation environment
- **Python SDK:** Intuitive programming interface with JavaScript and Scratch support coming soon
- **Hugging Face Integration:** Direct access to state-of-the-art AI models for speech, vision, and more

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/wLftEz-QF1E"
      title="Reachy Mini Demo 1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/JvdBJZ-qR18"
      title="Reachy Mini Demo 2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/vRh8G46Nc5k"
      title="Reachy Mini Demo 3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/dMpLCGvE2A0"
      title="Reachy Mini Demo 4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>

## Hardware Versions

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/plumber.png" alt="Reachy Mini Plumber" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

### Reachy Mini Lite ($299)

The Lite version is ideal for developers who prefer external compute or already have a preferred development environment.

**Best for:**
- Developers with Mac/Linux systems
- Users who want maximum control over compute resources
- Educational settings with existing computer labs
- Projects requiring integration with existing infrastructure

**Limitations:**
- Requires wired connection to host computer
- No WiFi capability
- No accelerometer
- Must be powered via wall outlet

### Reachy Mini Full ($449)

The Full version includes onboard computing for complete autonomy and wireless operation.

**Best for:**
- Standalone robot applications
- Wireless research and development
- Projects requiring accelerometer data
- Portable demonstrations and deployments

**Additional Features:**
- Raspberry Pi 4 onboard computer
- WiFi connectivity
- Battery for wireless operation
- Built-in accelerometer

## Assembly Guide

Reachy Mini is sold as a kit that takes approximately **2-3 hours** to assemble. The assembly process is designed to be approachable for builders of all experience levels.

### Assembly Resources

- **Interactive Assembly Guide:** [Step-by-step online instructions](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)


:::caution[Assembly Tips]

- Set aside 2-3 hours in a clean, well-lit workspace
- A set of small screwdrivers is required (included in kit)
- Follow the online guide step-by-step for best results
- Test each subsystem as you assemble (camera, microphones, servos)

:::

## Getting Started with Software

### Prerequisites

Depending on your version, you'll need:

**Reachy Mini Lite:**
- Mac or Linux computer (Windows support coming soon)
- Python 3.8 or higher
- USB connection

**Reachy Mini Full:**
- WiFi network or Ethernet connection
- Web browser for dashboard access

### Quick Start Installation

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/cowboy.png" alt="Reachy Mini Cowboy" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Install the Reachy Mini SDK with the following command:

```bash
pip install reachy-mini
```

> **Pro tip:** Install [uv](https://docs.astral.sh/uv/getting-started/installation/) for 10-100x faster app installations (auto-detected, falls back to `pip`).

### Hello World Example

Control your robot in just a few lines of code:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## Dashboard Control

A web-based dashboard provides an intuitive interface for testing and controlling Reachy Mini without writing code.

**Features:**
- Real-time motor control
- Camera feed display
- Microphone testing
- App management
- System diagnostics

Download the dashboard from the [official repository](https://github.com/pollen-robotics/reachy_mini) or access it directly from your Reachy Mini Full's local network.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_webui.png"/>
</div>

## Hugging Face Apps Ecosystem

Reachy Mini features a growing ecosystem of ready-to-use applications powered by Hugging Face Spaces. Install these apps directly from your robot's dashboard with one click.

### Featured Apps

**Conversation App**
- Natural language interaction powered by Large Language Models
- Voice recognition and speech synthesis
- Customizable personality and knowledge base

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-hand-tracking-app.jpg" alt="Reachy Mini Hand Tracking" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

**Hand Tracker**
- Real-time hand tracking using computer vision
- The robot follows your hand movements
- Great for demonstrations and interaction experiments

**Radio**
- Voice-controlled radio streaming
- Natural language requests for songs and stations
- Demonstrates audio processing capabilities

**And Many More:**
Browse the complete app collection on [Hugging Face Spaces](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini)

<div align="center">
    <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/apps.png" alt="Reachy Mini Apps Ecosystem"/>
</div>

## Building Custom Applications

### Python SDK

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-conversation-app.jpg" alt="Reachy Mini Conversation" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

The Python SDK provides comprehensive control over all Reachy Mini systems:

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Motor control
    mini.goto_target(head=pose, duration=1.0)

    # Camera access
    frame = mini.camera.get_frame()

    # Audio I/O
    mini.speaker.play_audio(audio_data)
    audio = mini.microphones.record(duration=5.0)

    # Accelerometer (Full version only)
    orientation = mini.imu.get_orientation()
```

### AI Integration

Reachy Mini seamlessly integrates with Hugging Face's extensive model ecosystem:

- **Speech Recognition:** Whisper, Wav2Vec2
- **Speech Synthesis:** Bark, SpeechT5
- **Vision:** ViT, CLIP, YOLO
- **Language:** LLaMA, Mistral, GPT models
- **Multimodal:** GPT-4V, LLaVA

### Publishing Apps

Share your creations with the global Reachy Mini community:

1. Build your app using the SDK
2. Create a Hugging Face Space
3. Add the `reachy-mini` tag
4. Publish and share with millions of Hugging Face users

## Simulation Development

Prototype and develop Reachy Mini applications without hardware using the MuJoCo simulation environment:

```bash
pip install reachy-mini[simulation]
```

Test your code, iterate quickly, and deploy to hardware when ready.

## Technical Specifications Deep Dive

### Motor System

- **Degrees of Freedom:** 6-DOF head movement
- **Control:** High-precision servo motors
- **Safety:** Current limiting and position feedback
- **Smooth Motion:** Interpolated trajectories for natural movement

### Audio System

- **Microphone Array:** 4 microphones arranged for optimal sound localization
- **Beamforming:** Hardware-level audio processing
- **SNR:** High signal-to-noise ratio for clear voice capture
- **Speaker:** 5W output with clear frequency response

### Vision System

- **Sensor:** Wide-angle camera
- **Resolution:** HD video capture
- **FPS:** 30 frames per second
- **Field of View:** Optimized for desktop interaction

### Power Requirements

**Lite Version:**
- Powered via USB from host computer or wall adapter
- Typical consumption: 5V @ 2A

**Full Version:**
- Internal battery for wireless operation
- USB-C charging
- Battery life: 2-4 hours depending on usage

## Privacy & Security

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/astronaut.png" alt="Reachy Mini Astronaut" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Reachy Mini is designed with privacy in mind:

- **No Data Collection:** The robot does not store, transmit, or process personal data by default
- **Local Processing:** All AI processing can be done locally
- **User Control:** Camera and microphone functions are fully under user control
- **Open Source:** Full transparency in software and hardware

Reachy Mini does not send any data to Pollen Robotics or Hugging Face. All processing happens locally unless you explicitly configure cloud services.

## Community & Support

### Join the Community

- **Discord:** [Join the Reachy Mini Discord](https://discord.com/invite/2bAhWfXme9)
- **GitHub:** [Report issues and contribute](https://github.com/pollen-robotics/reachy_mini)
- **Official Website:** [https://www.pollen-robotics.com/reachy-mini/](https://www.pollen-robotics.com/reachy-mini/)

### Documentation & Learning Resources

- **[Official Development Guide](https://github.com/pollen-robotics/reachy_mini/blob/develop/README.md):** Complete official documentation and development resources
- **[SDK Installation](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/installation.md):** 5 minutes to set up your computer
- **[Quickstart Guide](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/quickstart.md):** Run your first behavior on Reachy Mini
- **[Python SDK](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/python-sdk.md):** Learn to move, see, speak, and hear
- **[AI Integrations](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/integration.md):** Connect LLMs, build Apps, and publish to Hugging Face
- **[Core Concepts](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/core-concept.md):** Architecture, coordinate systems, and safety limits
- **[Secondary Development](https://github.com/Seeed-Projects/reachy-mini-starter):** Seeed's starter guide for custom application development
- **[Assembly Guide](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide):** Step-by-step assembly instructions
- 🤗[**Share your app with the community**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)


## What's Next?

### Roadmap

The Reachy Mini platform is continuously evolving:

- **JavaScript Support:** Coming soon for web-based development
- **Scratch Integration:** Block-based programming for beginners
- **Additional Apps:** Growing ecosystem of community applications
- **Hardware Expansions:** Modular accessories and upgrades
- **Enhanced AI Models:** Optimized models for onboard processing

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
