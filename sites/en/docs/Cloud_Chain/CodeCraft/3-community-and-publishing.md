---
description: Browse, reuse, and publish CodeCraft projects through the SenseCraft AI Application Gallery.
title: CodeCraft Community & Publishing
keywords:
  - CodeCraft
  - Publishing
sidebar_label: 3. Community & Publishing
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/community-and-publishing
sidebar_position: 4
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/codecraft/community-and-publishing/
createdAt: '2026-06-29'
updatedAt: '2026-08-04'
---

# CodeCraft Community & Publishing

CodeCraft is not only suitable for building projects from scratch, but also allows you to browse, reuse, and publish works through the SenseCraft AI Application Gallery.

In the Application Gallery, you can explore project inspiration, browse official examples, experience community projects, and publish your own CodeCraft creations to share with more users. Other users can view your projects, deploy firmware, and—if permitted—clone your project for learning or further development.

This document explains how to browse community projects in the Application Gallery and how to publish CodeCraft projects to the SenseCraft AI Application Gallery.

---

## 3.1 Application Gallery & Community Projects

In the SenseCraft AI [Application Gallery](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square), you can complete the entire workflow from inspiration discovery to project publishing in one place.

![CodeCraft Community Projects](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/codecraft-community-EN.png)

**What can you do here?**

| Purpose | Description |
|------|----------|
| 🔍 Find inspiration | Browse a large number of projects for ideas |
| 📖 Learn official examples | Study standardized implementations provided by the official team |
| ♻️ Reuse community projects | Fork or adapt existing works directly |
| 🚀 Publish your own work | Showcase your creations to the community |
| 🎮 Quickly experience hardware | From mini games to complex maker projects, enabling rapid prototyping |

**Core Advantages**

- **CodeCraft accelerates development** — Helps you build prototypes faster and reduces coding barriers.
- **One-click publishing** — Completed projects can be directly published to the gallery for global reuse.

> 💡 Suitable for all stages, from casual projects to advanced maker builds. Both beginners and experienced users can benefit.

---

**How to use the Application Gallery**

| Method | How it works | Use case |
| :--- | :--- | :--- |
| **Browse & Reuse** | **Clone** (copy project → modify based on original) | • Quickly experience development boards or sensors<br/>• Modify existing examples<br/>• Adapt official projects for teaching or demos |
| **Create & Publish** | **Publish** (App → My Apps → Create New App → New Workspace) | • Showcase ideas and receive feedback<br/>• Contribute examples for others<br/>• Build a personal project portfolio |

---

## 3.2 Application Publishing

### 3.2.1 Preparation Before Publishing

Before publishing, prepare the following materials:

| Item | Requirements | Notes |
|--------|----------|------|
| **Project Image** | • Recommended as cover image<br/>• Aspect ratio: `4:3`<br/>• Size < `2MB`<br/>• Clear and visually representative | Required |
| **Project Name & Description** | • Concise and attractive name<br/>• May include device keywords (e.g., `Wio Terminal`, `XIAO ESP32S3 Sense`) | Required |
| **Firmware File** | • Format: `.bin` or `.hex`<br/>• Must be tested on real hardware<br/>• `.bin` for Wio Terminal / XIAO ESP32S3 Sense<br/>• `.hex` commonly used for Grove Beginner Kit | Required |
| **Source Code File** | • e.g., `.ino` file<br/>• Optional, for learning and modification | Optional |

---

### 3.2.2 Publishing FAQ

| Question | Answer |
|------|----------|
| **What if firmware is missing?** | - Firmware is essential; without it others cannot run your project<br/>- Always test firmware on real hardware before uploading<br/>- If not generated, ask CodeCraft AI: “Please provide a `.bin` firmware file.” |
| **Are GIFs supported in covers and documents?** | - Yes, GIFs are supported in both cover and documentation<br/>- Recommended for dynamic demonstrations<br/>- Keep file size small to avoid slow loading |
| **Can videos be embedded?** | - Yes, video links are supported<br/>- Compatible with YouTube, Bilibili, Douyin, and other platforms<br/>- Paste links directly into the editor for automatic embedding |

---

## 3.3 Publishing a New App on SenseCraft AI

### 3.3.1 Go to SenseCraft AI

Open the [SenseCraft AI Application Gallery](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square). You can create a new application from scratch or clone an existing one for modification and republishing.

---

### 3.3.2 Create a New Application

You can either start from scratch or use an existing application as a template.

#### 3.3.2.1 Clone an Existing App

Open any published application and click `Clone` to continue editing based on it.

![Clone App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Clone-App-ZH.png)

---

#### 3.3.2.2 Create a New App

Go to the Application Gallery and click:

`My Apps` > `Create New App` > `Create New Workspace`

![Create New App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/create-new-app-EN.png)

---

### 3.3.3 Editing Content

After creating an application, complete the content in four steps using the editor.

![Edit App Workflow](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Edit-App-Flow-ZH.png)

---

#### 3.3.3.1 App Overview

Fill in basic app information including name, description, scenario, license, and images.

| Field | Description & Suggestions | Required |
| :--- | :--- | :--- |
| **Name** | • Clear and attractive<br/>• Include device keywords such as `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense`, `CodeCraft`<br/>• Example: `CodeCraft Smart Temperature & Humidity Display - Wio Terminal` | ✅ |
| **Description** | • Briefly describe function and hardware used<br/>• Mention “created with CodeCraft” if applicable<br/>• Example: `This is a Wio Terminal project created with CodeCraft for real-time temperature and humidity display.` | ✅ |
| **Scenario** | Choose from:<br/>• Education<br/>• Smart Home<br/>• Environmental Monitoring<br/>• Sensor Applications<br/>• AIoT Projects | ✅ |
| **License** | **1. Allow cloning:** enables others to fork and modify your project<br/>**2. Allow commercial use:** enables commercial usage if allowed | ✅ |
| **Images** | • Use real device photos<br/>• Aspect ratio `4:3`, size < `2MB`<br/>• Clearly show project output<br/>• Up to 16 images | ✅ |

---

#### 3.3.3.2 App Details

In this section, describe project background, development process, and usage instructions. You can also add firmware blocks for one-click deployment.

| Category | Instructions / Content | Example |
| :--- | :--- | :--- |
| **Project Introduction** | • Describe function and hardware<br/>• Explain CodeCraft workflow<br/>• List prompts used<br/>• Show results and notes<br/>• Add CodeCraft link | ![project-doc-interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/project-doc-interface-ZH.png) |
| **Firmware & Device Deployment** | • Insert “Flash Firmware” block<br/>• Select target device<br/>• Supports Wio Terminal / Grove Beginner Kit / XIAO ESP32S3 Sense | ![Document Editing](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Document-editing-page-ZH.png) |
| **Upload Firmware File** | • Upload `.bin` or `.hex` files<br/>• `.hex` typically for Grove Beginner Kit<br/>• Ensure firmware is tested | ![Firmware Upload](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/add-firmware-burning-function-block-ZH.png) |
| **Upload Source Code (Optional)** | • Upload `.ino` or other source files<br/>• Helps learning and modification | ![Upload Source](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/upload-firmware-and-source-code-ZH.png) |
| **Development & Testing Details** | • Describe steps clearly<br/>• Include testing methods and results<br/>• Add screenshots or data if needed | — |

---

#### 3.3.3.3 Bill of Materials

| Seeed Development Boards | Other Seeed Products | Third-party Hardware / Tools |
| :--- | :--- | :--- |
| `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense` | • Grove sensors, expansion modules, etc.<br/>• If missing, submit a request via [SenseCraft AI Device Request Form](https://seeedstudio.feishu.cn/share/base/form/shrcnNgPcW5x5rIrz4i066BlTqh) | • Third-party hardware<br/>• Other related materials |

---

#### 3.3.3.4 Preview & Publish

**Before submitting, ensure the following:**

| Category | Checklist |
| :--- | :--- |
| **Basic Information** | • Cover image is clear and attractive<br/>• App name is accurate<br/>• Description is clear<br/>• License settings are correct |
| **Materials & Firmware** | • Bill of materials is complete<br/>• Firmware uploaded correctly |
| **Function Validation** | • Device works correctly after flashing |
| **Optional Content** | • Source code downloadable (if uploaded)<br/>• Other files such as 3D models or vector assets |

Once confirmed, click **Publish** and agree to the disclaimer.

---

### 3.3.4 After Publishing

After review approval, your application will appear in the SenseCraft AI Application Gallery.

You can copy the app link and share it on social media, community forums, or project documentation so more users can discover and use your CodeCraft project.
