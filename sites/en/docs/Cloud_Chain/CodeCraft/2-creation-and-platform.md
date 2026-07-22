---
description: Build zero-code hardware projects with CodeCraft, select hardware, describe requirements, and flash and debug with project examples.
title: CodeCraft Creation & Platform
keywords:
  - CodeCraft
  - Creation
sidebar_label: 2. Creation & Platform
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/creation-and-platform
sidebar_position: 3
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/codecraft/creation-and-platform/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# CodeCraft Creation & Platform

## 2.1 Hands-on Development: Zero-Code Practice

### 2.1.1 Understanding the Conversational Workspace

CodeCraft is a web-based conversational programming platform. You do not need to download software or install complex drivers. Simply select your hardware on the webpage and describe your requirements in natural language to quickly build hardware projects.

![Connection and Flashing Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Connect-and-Burn-EN.png)

The basic workflow is as follows:

1. Visit https://codecraft.seeed.cc
2. Log in to your account
3. Select your development board
4. Describe the functionality you want to implement
5. Wait for CodeCraft to generate the program
6. Review the code, flash it to the hardware, and debug

![Flashing and Debugging Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Flashing-and-Debugging-EN.png)

---

### 2.1.2 Selecting Hardware

In the workspace, select your device. The recommended entry-level hardware includes:

- Wio Terminal  
- XIAO ESP32S3 Sense  
- Grove Beginner Kit  

In addition to the above, CodeCraft also supports a wider range of devices in the Seeed Studio hardware ecosystem. You can choose development boards, sensors, or expansion modules based on your project needs. After selecting hardware, CodeCraft generates optimized code and documentation tailored to the device capabilities.

![Hardware Selection Page Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/HardwareEco-EN.png)

---

## 2.2 Project Examples

This section provides three project examples to help you understand how to create programs for different hardware platforms using CodeCraft. Each example includes project objectives, sample prompts, flashing instructions, and iteration guidance.

---

### 2.2.1 Pomodoro Timer

#### 2.2.1.1 Project Objective

This example guides you to create a Pomodoro timer based on the Wio Terminal. The project displays a real-time countdown on the screen and uses buttons to control start, pause, reset, and mode switching.

![Wio Terminal Pomodoro Timer Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Display-EN.png)

---

#### 2.2.1.2 Sample Prompt

You can enter:

> Please create a Pomodoro timer program for Wio Terminal. Requirements:
> 1. Display a real-time countdown in mm:ss format.
> 2. Set focus time to 25 minutes and break time to 5 minutes.
> 3. Button A starts or pauses the timer.
> 4. Button B resets the timer.
> 5. Button C switches between focus and break modes.
> 6. Show a reminder message when the timer ends.

<!--![Pomodoro Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/POMODORO-TIMER-PROMPT-EN.png)-->

---

#### 2.2.1.3 Flashing to Hardware

1. Connect the Wio Terminal to your computer using a USB cable.  
2. Follow the on-screen instructions to enter flashing mode.  
3. Click the “Connect and Flash” button in CodeCraft.  
4. Wait for the upload to complete.

![Wio Terminal Flashing Page Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Burning-EN.png)

---

#### 2.2.1.4 Iteration

If you want to modify the project, you can continue telling CodeCraft:

> Please change the focus time to 45 minutes and the break time to 10 minutes.

CodeCraft will update the code and generate a new version based on your request.

---

### 2.2.2 ESP32 LED Blinking

#### 2.2.2.1 Project Objective

This example guides you to create an ESP32-based LED blinking project. The onboard LED toggles every 0.2 seconds to achieve rapid blinking. At the same time, the program sends LED status messages via serial output: when the LED is ON, it sends “LED ON”; when OFF, it sends “LED OFF”.

<!--![ESP32 LED Blinking Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.2.2 Sample Prompt

You can enter:

> Please create an LED blinking program for ESP32. Requirements:
> 1. Use the onboard LED.
> 2. Toggle the LED every 0.2 seconds.
> 3. When LED is ON, send “LED ON” via serial.
> 4. When LED is OFF, send “LED OFF” via serial.
> 5. Set serial baud rate to 115200.
> 6. Run continuously.

<!--![ESP32 Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Prompt-EN.png)-->

---

#### 2.2.2.3 Flashing to Hardware

1. Connect the ESP32 development board to your computer via USB.  
2. Select the correct ESP32 serial port in CodeCraft.  
3. Click the “Connect and Flash” button.  
4. Wait for the upload to complete.  
5. Open the serial monitor and verify that “LED ON” and “LED OFF” appear alternately.

![ESP32 Flashing Page Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Burning-EN.png)

<!--![ESP32 Serial Monitor Output](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Debugging-EN.png)-->

---

#### 2.2.2.4 Iteration

If you want to modify the project, you can continue telling CodeCraft:

> Please change the LED blinking interval to 1 second and display the blink count in the serial output.

CodeCraft will update the code and generate a new version.

---

### 2.2.3 Grove Beginner Kit Button-Controlled LED

#### 2.2.3.1 Project Objective

This example guides you to create a button-controlled LED project using the Grove Beginner Kit. The onboard button controls the LED: when pressed, the LED turns on; when released, it turns off. The program also prints button status in real time via serial output: “Pressed” when pressed, and “Released” when released.

<!--![Grove Beginner Kit Button Control Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.3.2 Sample Prompt

You can enter:

> Please create a “button-controlled LED switch” using Grove Beginner Kit. Requirements:
> 1. Use the onboard button to control the onboard LED.
> 2. Turn on the LED when the button is pressed.
> 3. Turn off the LED when the button is released.
> 4. Print button status via serial in real time.
> 5. Send “Pressed” when the button is pressed.
> 6. Send “Released” when the button is released.

<!--![Grove Beginner Kit Prompt Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Grove-Beginner-Kit-Prompt-EN.png)-->

---

#### 2.2.3.3 Flashing to Hardware

Before flashing, please check whether drivers are required:

- On Windows, you need to install the Grove Beginner Kit driver first, otherwise the device or serial port may not be recognized.  
- On macOS, no additional drivers are usually required.

![Grove Beginner Kit Windows Driver Tip 1](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-driver-download-tips-EN.png)

![Grove Beginner Kit Windows Driver Tip 2](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/beginner-kit-driver-EN.png)

1. Connect the Grove Beginner Kit to your computer via USB.  
2. Select the correct device and serial port in CodeCraft.  
3. Click the “Connect and Flash” button.  
4. Wait for the upload to complete.  
5. Press and release the onboard button and observe LED behavior.  
6. Open the serial monitor and confirm “Pressed” and “Released” appear.  
   (Note: Ensure the baud rate in the code matches the debugger tool.)

![Grove Beginner Kit Serial Monitor Output](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-Serial-Debugger-EN.png)

---

#### 2.2.3.4 Iteration

If you want to modify the project, you can continue telling CodeCraft:

> Please make the buzzer sound once when the button is pressed and display the number of button presses in the serial output.

CodeCraft will update the code and generate a new version.

---

## 2.3 FAQ

**Q: Why does flashing fail?**  
A: Please check whether the USB cable supports data transmission and ensure the development board is in the correct flashing mode.

**Q: What should I do if compilation errors occur?**  
A: Check the workspace debugging information and ensure baud rate, hardware model, and sensor configuration are correct.

**Q: Where can I find more project examples?**  
A: Visit the SenseCraft AI Application Gallery: https://sensecraft.seeed.cc/ai/application
