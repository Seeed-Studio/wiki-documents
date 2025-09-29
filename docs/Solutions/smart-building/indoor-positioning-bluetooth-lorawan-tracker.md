---
title: "Bluetooth Indoor Positioning System with LoRaWAN"
description: "A reliable indoor positioning solution using the SenseCAP Tracker. It combines Bluetooth for precise location tracking with LoRaWAN for long-range data transmission, enabling easy deployment."
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - Indoor Positioning
  - Asset Tracking
  - SOS
  - Campus Safety
slug: /solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 09/10/2025
  author: Spencer
---

## Introduction

### Overview

Indoor positioning is a common challenge for many industries. While high-precision systems like UWB exist, they can be costly and complex. This solution offers a flexible and cost-effective alternative by combining two powerful wireless technologies: **Bluetooth Low Energy (BLE)** for location sensing and **LoRaWAN** for long-range, low-power data transmission.

The system is built around the [SenseCAP T1000 Tracker](/SenseCAP_T1000_tracker/Introduction) and supports two distinct positioning modes, allowing you to balance precision with battery life based on your needs:

1. **High-Precision Tracking (Trilateration):** When a tracker detects signals from **three or more** BLE beacons, it can calculate its precise (x, y) coordinates on a map. This mode is ideal for tracking the movement of assets or personnel, providing accurate location updates periodically or whenever movement occurs.

2. **Zone-Based Positioning (Proximity):** When a tracker is in range of only one or two beacons, it identifies its location based on proximity to the nearest beacon. This mode is perfect for simpler use cases like automated check-ins, confirming an asset is in a designated room, or conserving battery life by reporting location less frequently.

By supporting both methods, this solution provides a versatile and easy-to-deploy system for a wide range of indoor tracking applications, from simple presence detection to more detailed coordinate-based monitoring.

:::tip Navigate to our bundle page

Check out our [Indoor & Outdoor Integrated Positioning](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html) bundle page for all the products you need to implement this solution.

:::

### Key Features & Benefits

- **Cost-Effective & Scalable**: Leverages affordable BLE beacons and avoids the need for expensive gateway installations in every room.
- **Long-Range Data Transmission**: A single LoRaWAN gateway can cover an entire building or campus, drastically reducing infrastructure costs.
- **Instant SOS Alert**: Trackers include a panic button that, when pressed, immediately sends an SOS alert via LoRaWAN for rapid emergency response.
- **Intelligent Power Management**: By using a built-in accelerometer, the tracker can report only when movement is detected and send periodic "heartbeat" signals otherwise. This dramatically extends battery life to up to 6 months with optimal settings for many asset tracking applications.
- **Simple Deployment**: Setting up BLE beacons and LoRaWAN gateways is straightforward, getting your positioning system online quickly.
- **Open-Source Software**: The project is fully open-source, allowing you to build and customize your own backend server using our [GitHub repository.](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)

### Use Cases

<div class="info-section">
    <div class="section-header">
        <h2>Use Cases</h2>
        <p>This solution is ideal for a wide range of zone-based tracking and safety applications:</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>Campus & School Safety</h3><p>Provide students and staff with a wearable tracker. The built-in SOS button allows them to instantly send an emergency alert with their last known location from anywhere on campus, providing peace of mind and enabling faster response times.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>Asset Management</h3><p>Track the location of valuable assets, both indoors and outdoors (e.g., vehicles in a parking lot). Configure the tracker to only report when it moves, conserving battery while ensuring you are alerted to unauthorized movement.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>Automated Check-In & Personnel Management</h3><p>By adjusting the signal strength of a BLE beacon, you can create a "check-in" zone for offices or nursing homes. When a person wearing a tracker enters the zone, their presence is automatically logged.</p></div></li>
    </ul>
</div>

### System Architecture

The system operates on a simple yet powerful principle. Mobile trackers listen for signals from fixed beacons and report what they hear to a central server.

![System Architecture Diagram](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### Prerequisites

The main components are:

1. **BLE Beacons**: These are small, fixed transmitters placed at known locations (e.g., room entrances, key zones). They continuously broadcast a unique ID.
2. **SenseCAP T1000 Tracker**: This is the mobile device attached to the asset or person you want to track. It scans for nearby BLE beacons and identifies the one with the strongest signal.
3. **LoRaWAN Gateway**: The tracker sends a data packet containing the ID of the nearest BLE beacon to the gateway via LoRaWAN.
4. **Network & Application Server**: The gateway forwards the data to a LoRaWAN Network Server([SenseCraft Data](https://sensecap.seeed.cc/portal)), which then routes it to an application server. The application server holds a map of the beacon IDs and their real-world locations, allowing it to determine the tracker's position (e.g., "Tracker #58 is near Beacon #12, which is in Conference Room 3").

Before you begin, make sure you have the following:

- A SenseCAP T1000 Tracker
- One or more BLE beacons
- A LoRaWAN gateway connected to the internet
- A server or computer with Docker installed

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>LoRaWAN® mobile tracker with BLE scanning capabilities</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">BLE Beacon Detection:</span> Supports BLE 5.1 for precise indoor and outdoor positioning.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">Wide Area Network:</span> LoRaWAN® Class A(v1.0.4) connectivity for long-range, low-power communication.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Motion Detection:</span> Built-in accelerometer for real-time motion and stationary status sensing.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Emergency Button:</span> Independent SOS button to trigger emergency alerts with one press.</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">BLE Beacons</a></h2>
        <p>Regular Bluetooth Broadcasting</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </div>
                <p><span class="highlight">Protocol Compatible:</span> Bluetooth® LE 5.0 | Full support for iBeacon and Eddystone formats.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Flexible Deployment:</span> Configurable transmission power for adjustable coverage radius.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">Long-lasting:</span> Up to <span class="highlight">2 years</span> of battery life with standard settings.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">Easy Installation:</span> Comes with adhesive backing for easy mounting on walls or other surfaces.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">Broadcasting Range:</span> Up to 75 meters outdoors, 120 meters indoors in open areas.</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 Multi-Platform Gateway</a></h2>
        <p>LoRaWAN® Network Infrastructure</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p><span class="highlight">Wide Coverage:</span> Indoor coverage radius of up to <span class="highlight">2 km</span>, ensuring stable signal.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Massive Connectivity:</span> Supports over <span class="highlight">200</span> concurrent devices with excellent performance.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">Multiple Backhauls:</span> Provides multiple network backhaul options including Ethernet, Wi-Fi, and 4G.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">Integrated Solution:</span> Built-in local LoRaWAN server capabilities to simplify network deployment and management.</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>

## Getting Started Guide

<div align="center">
<img class='img-responsive' width="1280" src="https://mermaid.ink/img/pako:eNo9jk9vwjAMxb9K5HOp2tE_JIdJQDcuO41phzUcotYtFW0SpYkYVHz3BSrmk9_Pz_aboFI1AoOmV-fqKIwlH59cEl_rcm-9PpDF4pVsygJ1ry5kg6JScpzpttyjdZrshMWzuMyweFrXWs_krdwq2XStM0i-jKhOaObBe_ndjU703RVnsPPOQfdo8cAlBNCargZmjcMABjSDuEuY7gE52CMOyIH5thbmxIHLm9_RQv4oNTzXjHLtEVgj-tErp2uftehEa8TwTw3KGs1WOWmB0Sh9HAE2wS-wLA6XeULzlyyL0piuaBLABVgc0ZBmeZymyTJa0SjJbgFcH3-jcJWntz-sxGvR?type=png" alt="Indoor positioning 2d map"/>
</div>

1. **Deploy Beacons**: Place BLE beacons at strategic locations throughout your facility. Create a map or list documenting the unique ID of each beacon and its physical location (e.g., `Beacon_ID_01: "Main Entrance"`, `Beacon_ID_02: "Warehouse Zone A"`).
2. **Set up the Gateway**: Connect your LoRaWAN gateway to the internet and configure it to forward packets to your chosen LoRaWAN Network Server.
3. **Deploy the Application**: On your application server, create the logic to map the reported beacon IDs back to the physical locations you documented in Step 3.
4. **Configure the Tracker**: Activate the SenseCAP T1000 and onboard it to your LoRaWAN Network Server. Ensure it is configured for BLE scanning mode.
5. **Visualize**: As the tracker moves through the facility, it will report the nearest beacon, and your application can display its location on a dashboard or map.

### Step 1: Set Up Your Hardware

First, you need to set up the physical devices in your facility.

#### **1a. Deploy Beacons**

:::info
For complete technical details, refer to the **[BC01 Indoor Bluetooth Beacon documentation](/bluetooth_beacon_for_SenseCAP_Traker/)**.
:::

First, place your **BLE beacons** at key locations throughout your facility, such as at the main entrance, in the warehouse, and in offices.

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

Next, create a list(template) for yourself to record each beacon's **unique MAC Address** and its physical location. This record is **essential** for the software configuration step.

**Example Record:**

```csv
MAC Address,Location,Beacon ID
c30000564b31,"Main Entrance",01
c30000564b32,"Warehouse Zone A",02
c30000564b33,"Corner Office",03
```

The video below shows how you will use this list to add your beacons to the application's map later. Creating an accurate record now will make the software setup much easier.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

**Pro Tip:** For easier management, you can use the **SenseCraft app** to give all your beacons a consistent **UUID**. This helps ensure the tracker only listens to your devices and ignores others. Check out [Feature 4: Filter by Beacon UUID](#feature-4-filter-by-beacon-uuid) for more details.

<details>
<summary>Quick view of the parameters of BC01 beacon</summary>

| Parameters | Default Value |
|------------|---------------|
| UUID | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major | 10001 |
| Minor | 19641 |
| Measured power | -59dBm |
| Tx Power | -30 - +4dBm, default 0dBm |
| Adv Interval | 100ms~10s, default 500ms |
| Password | seeed123 (Letters and numbers) |
| Device Name | BC01 (1-7 characters) |
| Soft Reboot | seeed123 (same with the password) |

</details>

#### 1b. Set Up the Gateway

First, power on your **LoRaWAN gateway** and connect it to the internet. From here, the steps depend on which network server you're using.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sensecap-portal" label="SenseCraft Data" default>

If you're using the default [SenseCraft Data](https://sensecap.seeed.cc/portal/)(formerly SenseCAP Portal) platform, your gateway is already pre-configured.

1. Follow the [official user manual](/quick_start_with_M2_MP) to make sure the gateway is online and connected to your account.
2. Once that's done, you can **move on to Step 2**.

  </TabItem>
  <TabItem value="chirpstack" label="ChirpStack (Local LoRaWAN Server)">

If you're using a self-hosted **ChirpStack** server, you'll need to re-point the gateway and prepare a decoder script.

1. **Configure the Gateway:** Follow this guide to [redirect your gateway's data to ChirpStack](/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).
2. **Download the Decoder:** ChirpStack needs a decoder to understand the data sent by your T1000 tracker. Download the script now so it's ready for a later step.

    - [**Download T1000 Decoder Script**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)

    **Note:** You'll add this script inside the **ChirpStack application settings**, not on the gateway itself.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

  </TabItem>
</Tabs>

### Step 2: Install the Positioning Application

Next, you will install the main application on your server using Docker. Or you can have a view of [the demo](https://indoorpositioning-demo.seeed.cc/) first.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Indoor positioning application preview"/>
</div>

#### Run the Installation Command

Open a terminal on your server and run the following command:

```bash
docker run -p 5173:5173 -p 8022:8022 --name indoor-positioning --restart unless-stopped -v /data/indoor-positioning/db/:/app/db/ -d seeedcloud/sensecraft-indoor-positioning
```

**What this command does:**

- It downloads and starts the SenseCraft Indoor Positioning application.
- `-p 5173:5173` makes the web dashboard accessible on port `5173`.
- `-v /data/indoor-positioning/db/:/app/db/` tells the application to store its database and maps in the `/data/indoor-positioning/db/` folder on your machine.
- `-d` runs the application in the background.

After running the command, you can access the dashboard by opening a web browser and going to `http://<your_server_ip>:5173`.

### Step 3: Configure the Application

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

Now, open the application dashboard in your browser to configure the system settings.

#### 3a. Runtime Configuration (Connecting to LoRaWAN)

This setting connects the application to your LoRaWAN Network Server to receive tracker data. A key feature is that **the application supports simultaneous connections to both the SenseCraft Data platform and a ChirpStack server.**

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

In the dashboard, you can enable one or both of the following MQTT sources to connect to your network servers.

##### To Connect to SenseCraft Data

1. Enable the **SenseCAP OpenStream MQTT** toggle.
2. Enter your **Username** and **API Key**.
      - You can generate these credentials by following the [Data OpenStream API Quickstart guide](/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/).

##### To Connect to ChirpStack

1. Enable the **ChirpStack MQTT** toggle.
2. Enter your ChirpStack **server address** and **Application ID**.
      - The MQTT topic field will then update automatically. You can find the **Application ID** on the main page for your application within ChirpStack.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

---

**Note:** The `{clientID}` field is used by the system and will be replaced with a random ID on startup. You don't need to change it.

**Important:** After enabling or changing any of these settings, you must **restart the application** (the Docker container) for them to take effect.

##### Other Settings

The following settings can be changed at any time without restarting the application:

- **Authentication:** Update the username and password used to log in to the application's dashboard.
- **Area Positioning:** Enable this option to estimate a tracker's location when there are too few beacon signals available for precise, multi-point positioning.
- **Tracker Access Control:** Configure which devices are allowed to send data to the application. You can either allow data from any device or create a specific list of authorized trackers.
- **Webhook:** Enable this to push location results to your own service using an HTTP POST request.

#### 3b. Map and Beacon Configuration

In this step, you will use the application's dashboard to upload your floor plan and add the beacons you physically deployed earlier.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Application Configuration Management"/>
</div>

1. Upload Your Map
First, go to the configuration menu and upload an image of your floor plan. Standard image formats like PNG or JPG are recommended.
2. Add Your Beacons
Go to the "Beacons" section. Using the list you created in [Step 1a](#1a-deploy-beacons), add each beacon's information (like its MAC address). The easiest way to do this is to click directly on the beacon's location on the map you just uploaded.
3. Adjust the Environmental Factor (Optional)
This is an advanced setting that fine-tunes location accuracy. It helps the system convert signal strength (RSSI) into a more accurate distance by accounting for your specific environment.
    - For open spaces, the default value of ~2.0 is usually sufficient.
    - For complex indoor areas with many walls and obstacles, you may need to adjust the value between 1.8 and 4.0.
    - **Recommendation:** It's best to leave this at the default setting to start. You can come back and adjust it later if you need to improve positioning accuracy.

### Step 4: Activate and Visualize Your Tracker

The final step is to turn on your tracker and see it on the map.

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **Activate the SenseCAP T1000 Tracker** and onboard it to your LoRaWAN Network Server. Ensure your gateway is online and the tracker devices is 'registered' on the LNS server. check [Step 1b](#1b-set-up-the-gateway) for details.
2. **Ensure it is set to BLE scanning mode** so it can detect the beacons. Check the video below for help.
3. **Visualize:** As the tracker moves through your facility, it will detect the nearest beacons and report its location. You will see its icon moving across the map on your dashboard.

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<p><em>Opt for `Other Platform`, When using ChirpStack.</em></p>
<p><em>Retain the default platform settings (SenseCAP for The Things Network), When using SenseCraft Data.</em></p>
</div>

## Application Features Overview

### Feature 1: Data Pushing (Webhook & WebSocket)

You can get real-time data from the system in two ways:

- **Webhook:** As mentioned in the configuration, this pushes data to a URL you provide.
- **WebSocket:** For real-time applications, you can connect to the `/ws` endpoint using Basic HTTP Authentication. The data formats for `sos`, `tracker_update` (trilateration), and `tracker_location_approximate` (proximity) are detailed in the JSON examples provided in the original document.

#### **Data Formats**

<Tabs>
<TabItem value="sos" label="SOS Alert" default>

```json
{
    "type": "tracker_sos",
    "data": {
        "2CF7F1C0530004AD": {
            "timestamp": 1756967508000,
            "sos": 0
        }
    }
}
```

</TabItem>
<TabItem value="trilateration" label="Trilateration/Multilateral">

```json
{
    "type": "tracker_update",
    "data": {
        "2CF7F1C0530003BD": {
            "trackerId": "2CF7F1C0530003BD",
            "timestamp": 1756967455550,
            "position": {
                "x": 11.1,
                "y": 12.3
            },
            "last_detected_beacons": [
                {
                    "macAddress": "C3:00:00:56:4B:5D",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -79,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:3E:7D:AA",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:13:3C:99",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                }
            ],
            "position_history": [],
            "map": "10 Floor",
            "sos": 2
        }
    }
}
```

</TabItem>
<TabItem value="area" label="Area Positioning">

```json
{
    "type": "tracker_location_approximate",
    "data": {
        "2CF7F1C0530004AD": {
            "trackerId": "2CF7F1C0530004AD",
            "timestamp": 1756967098851,
            "radius": 5.248074602497725,
            "last_detected_beacons": [
                {
                    "txPower": -59,
                    "rssi": -77,
                    "name": "corner",
                    "configured_x": 32.41,
                    "configured_y": 21.26,
                    "macAddress": "C3:00:00:56:4B:59"
                }
            ],
            "map": "10.5 Floor",
            "sos": 0
        }
    }
}
```

</TabItem>
</Tabs>

### Feature 2: Two Positioning Modes

The system supports two positioning methods:

1. **Trilateration:** When the tracker detects **three or more** beacons, it calculates a precise (x, y) coordinate. This is the default and most accurate mode.
2. **Proximity (Area Positioning):** If you enable this and the tracker can only detect **one** beacon, it will report its position as being "near" that beacon within a calculated radius. This is useful for ensuring coverage in all areas.

*Trilateration*

<table align="center">
<tr>
    <th>Trilateration</th>
    <th>Trilateration(SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

*Area Positioning*

<table align="center">
<tr>
    <th>Area Positioning</th>
    <th>Area Positioning(SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

### Feature 3: Viewing Alert History

You can view the alert history (e.g., SOS button presses) for any tracker by clicking on its icon on the map. The system logs each new alert and will continue to push notifications for an active alert until it is resolved.

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### Feature 4: Filter by Beacon UUID

You can filter the displayed trackers on the map by their associated beacon UUIDs. This allows for more focused monitoring of specific areas or assets. it is valued not to be hacked.

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## Reference & Resource

- **Landing Page**: [SenseCraft Indoor Positioning Solution](https://cc.seeedstudio.com/solutions/campus-safety-management)
- **Docker Image**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **Live Demo Site**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## FAQ

<details>
<summary>Why is my tracker not reporting its location?</summary>

- **Probable Cause:** There may be an issue with the LoRaWAN connectivity.
- **Solution:** Check the status of your LoRaWAN gateway to ensure it's online and connected. Also, verify that the tracker's Device EUI is correctly registered on your network server.

</details>

<details>
<summary>Why is the tracker's position inaccurate?</summary>

- **Probable Cause:** The placement of your BLE beacons might be causing interference or weak signal coverage.
- **Solution:** Try adjusting the transmission power of the beacons. You may also need to relocate them to reduce signal obstruction from walls or machinery.

</details>

<details>
<summary>Why is the tracker's battery draining so quickly?</summary>

- **Probable Cause:** The reporting frequency is set too high, causing the device to transmit data more often than necessary.
- **Solution:** Optimize the motion detection settings to only report when the tracker is moving. You can also increase the reporting interval (the time between location updates) to conserve power.

</details>

<details>
<summary>Why is location data missing or not showing up?</summary>

- **Probable Cause:** There could be a problem with the database or API, often related to how the data payload is being interpreted.
- **Solution:** First, verify that the payload decoder on your application server is correct and working. If the decoder is correct, check the application server logs for any errors or connectivity issues.

</details>

<details>
<summary>Why are SOS alerts not being received promptly?</summary>

- **Probable Cause:** The LoRaWAN network may be congested, or the device class isn't suitable for urgent messages.
- **Solution:** For time-critical applications like SOS alerts, ensure your tracker is configured to use **Class C mode**. This keeps the device's receiver on continuously, allowing for immediate reception of messages from the server.

</details>

<details>
<summary>How do I adjust the advertising interval and transmission power of a BC01 beacon?</summary>

You can use the **SenseCraft app** to configure the BC01 beacon.

1. Install the SenseCraft app from the [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) or [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834).
2. Open the app and enable Bluetooth on your phone.
3. Scan for nearby beacons and select the one you wish to configure.
4. Enter the default password "**seeed123**" to access the settings.
5. Adjust the advertising interval (100ms to 10s) and transmission power (-30dBm to +4dBm) to your needs.
6. Save the changes.

</details>
