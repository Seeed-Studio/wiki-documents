---
description: Wiring-free home/office painless energy monitoring
title: Non-Invasive AC Energy Monitoring with Home Assistant
keywords:
    - CT
    - energy consumption monitoring
    - Home Assistant
slug: /non_invasive_ct_energy_consumption
sidebar_position: 2
last_update:
    date: 08/18/2025
    author: Spencer
---

## 1. Solution Overview

This guide outlines a solution for implementing a **non-invasive** AC energy metering system using common hardware modules and the Home Assistant smart home platform.

### Goals and Value

In the modern pursuit of granular energy management and smart home automation, traditional wall meters or smart plugs have clear limitations. A standard utility meter only provides a "coarse-grained" total of a household's energy consumption. While a smart plug can monitor an individual appliance, its "invasive" nature (requiring it to be placed between the device and the outlet) restricts its use, especially for hard-wired appliances or those in hard-to-reach places.

This solution is designed to address these pain points. Its core value lies in:

- **Non-Invasive Deployment**: No need to cut power or modify existing electrical circuits. Simply clamp the split-core current transformer (CT) onto a **single** power wire of the target appliance to begin measurement. This dramatically reduces installation complexity and safety risks.
- **Granular Metering**: Achieve "device-level" energy monitoring for specific AC appliances like air conditioners, water pumps, or 3D printers. Obtain precise real-time data, including current, power, and total energy consumption.
- **Low Cost & High Integration**: Utilizes the cost-effective **XIAO ESP32-C6** module and standard CT sensors. It integrates seamlessly with mainstream IoT ecosystems like Home Assistant via ESPHome, enabling data visualization, automation, and remote alerts.

### Target Audience

This guide is primarily for:

- **Smart Home Enthusiasts**: Individuals looking to integrate energy data from high-consumption or critical appliances into Home Assistant for advanced automation and energy-saving strategies.
- **Developers & System Integrators**: Professionals who need to provide custom, device-level energy monitoring solutions for clients.
- **Makers & Small Workshop Operators**: Users who want to monitor the operational status and energy consumption of equipment like 3D printers and laser cutters.
- **Energy Auditors & Maintenance Engineers**: Professionals performing energy audits to uncover "energy vampires" (high standby power) or using abnormal current monitoring for predictive equipment maintenance.

### Expected Outcome

Users will build a complete data pipeline from the physical world to a digital application, achieving the following:

1. **Real-time Data Monitoring**: View instantaneous current, active power, and total energy consumption for one or more target devices in real-time on Home Assistant or any MQTT-compatible platform.
2. **Local or Cloud Data**: Securely transmit monitoring data via Wi-Fi to a local server (like a Raspberry Pi or NUC running Home Assistant) or a cloud-based IoT platform.
3. **Intelligent Automation**: Create powerful automation scenarios in Home Assistant based on precise power and current data. For example:
    - When a 3D printer's power consumption drops below 5W for over a minute, determine the print is finished, automatically turn off its power, and send a mobile notification.
    - If a water pump's current remains consistently above its normal range, send an alert for a potential stall, preventing motor damage.

### System Architecture

![xx](https://mermaid.ink/svg/pako:eNqNVc1u00AQfpXVcgHJblLbcVwLVTIuKEiEFhp-BOGwsceJhb0brTdNS-kLoEpFgDhwgR54AC4IibfhBeARGHvd1C6_e9rZnfnmm_nG60MaiRioT6eSzWfk1t0xJ7iKxUQfzMSigMdj-uP9yQcyEDl0tpMkjYBc53upFDwHrsb0iY4qV5xKiFQqOBldOz8NQsT49u6UWFb3PlpkRyxBtgNhD3GrVK--khGTU1AkmM-zlPEIrk5kZ_PyTti5IdN4Cp0gvNKKRkjT3KxB9DHwWG8ulJQLniohq0yvX5ChNlM-JQMm4yWT8B8FhaMq_s0x7sgu8EJITTHMWD6HmKA_IwWiZkCWCNGm-_BmsK0JnFZ7bCfI6QEZgoIa6Prujm2ZodsOxGxlnWXM36vkoJZCPq2SHL8kt7VJRpLxIk-LAgtqAUuxwNSa02fyIDVvpORudbZy-1OqSHAlRVbFvv34_csJCfUJCXE6Lsr823YOAj1jp9WMkQD5FYpxpVuxmzOp9M1OxlQiZN7uSsyK2USgepr_J3KvAElulskTdjY8QzFJUQwcqc4DmLQBBoEenzOc3xash4uYa-bm8zENF1JieZX4KPOYPkdxtGOlqFl56UaWYlYfz_DOaHSldNXt1u56XwfcEhHLzuQqPQdBk0OUsaLYgqQms6sOsKQkzTL_UpKAC65RYOefQmk6uGrTXKaxmvnWfP8CTP0xNHHATewkWeE4juetzHOcXwjVA9di1E28BiPPi6J_M6qnqV1Z0m1VxtgfcRpodY8MfBsa3Wo6hCOj0qrZheZ9rUyztOb1IDBWE9PiTQ18T9OY-kouwKA5yJyVJj0sw8dUzSDHV8bHbcxKmcf8CGPmjD8SIj8Lw-zTGfUTlhVoLeYxU7CVMvzo8tUpjmAMMhQLrqi_7lYY1D-k-9Q3e-vOWt_uez3X7dme3e0b9ID6tr2xZq13-xt9y-451kbvyKDPqqzra57juF1rw7Ec1-3bPc-gEJeNGep_RPWrOPoJefADGA)

**Data Flow Explained:**

1. **Physical Sensing**: The target appliance operates normally, drawing AC current through its power cord (specifically, the **Live wire**).
2. **Signal Acquisition**: The CT sensor is clamped non-invasively around this single power wire. Through electromagnetic induction, it generates a small, secondary current that is precisely proportional to the main current.
3. **A/D Conversion & Calculation**: The XIAO Wi-Fi Energy Meter receives the analog signal from the CT sensor. Its onboard energy metering chipset samples and converts this signal, calculating RMS values for current, power, and other metrics.
4. **Wireless Transmission**: The onboard **ESP32-C6** chip connects to the local Wi-Fi network and publishes the processed data using the ESPHome native API or the MQTT protocol.
5. **Data Consumption & Application**: A Home Assistant server subscribes to this data, presenting it as sensor entities, recording its history, and using it to trigger automations and notifications.

## 2. Hardware Selection

For detailed specifications, visit the product wiki：[Seeed Studio 2-Channel Wi-Fi AC Energy Meter Wiki](/2_channel_wifi_ac_energy_meter)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/2_channel_wifi_ac_energy_meter/">
            <strong><span><font color={'FFFFFF'} size={"4"}> Visit product Wiki 🖱️</font></span></strong>
    </a>
</div>

### Non-invasive Current Transformer (CT)

The CT sensor is the cornerstone of our "non-invasive" measurement system. It acts like a "stethoscope" for electrical circuits, allowing it to "listen" to the flow of current without making direct physical contact with the conductor.

#### How It Works

It operates on the principle of **electromagnetic induction**, identical to a transformer.

1. **Primary Winding**: When you clamp the CT sensor around a power wire, that wire itself acts as the "primary winding" with a single turn (N=1).
2. **Magnetic Field**: As alternating current flows through the wire, it generates an alternating magnetic field around it.
3. **Secondary Winding**: Inside the CT sensor is a ferrite core and a coil of finely wound copper wire. This forms the "secondary winding."
4. **Induced Current**: The alternating magnetic field from the primary wire passes through the core and, according to Faraday's Law of Induction, induces a small but precisely proportional AC current in the secondary winding.

**Key Advantage**: The entire process involves only magnetic coupling, with no physical electrical connection. This makes it "non-invasive," safe, and convenient.

#### Installation Guidelines

Incorrect installation is the most common reason for inaccurate or zero readings.

:::danger Safety First!

Before clamping or adjusting any CT sensor, you must turn off the corresponding circuit breaker. Use a voltage tester to confirm that the target wire is completely de-energized. Safety is always the top priority.

:::

- **Directionality**

  The CT sensor casing usually has an arrow (->) or a P1 -> P2 mark to indicate the "positive" direction of current flow. For accurate active power readings (which account for the power factor), ensure all sensors are installed in the same direction relative to the current source (e.g., current flows from P1 to P2).

- **Clamping Position**

  This is the most critical and error-prone step.

  - **Correct Method**: Ensure the CT sensor is clamped around **only one** of the insulated wires—either the **Live** or the **Neutral** wire.
  - **Incorrect Method**: Never clamp the CT sensor around the entire power cable sheath that contains multiple conductors (Live, Neutral, and Ground).
  - **Why?**: In a single-phase AC circuit, the current in the Live and Neutral wires is equal in magnitude but opposite in direction at any given moment. If you clamp both, their magnetic fields will perfectly cancel each other out. The net magnetic field will be zero, and the sensor will induce no current, resulting in a constant zero reading.

  **Diagram:**

  ```plaintext
  // CORRECT Installation
  // Clamp around the Live wire ONLY
         Power Cable
  ------------------ L (Live) ----->>> Current Flow
  /`---\
  | CT | --[ CLAMPED ]--
  \`---/
  ------------------ N (Neutral)----
  
  // INCORRECT Installation
  // Clamped around the entire cable
         Power Cable Jacket
  /`------------------`\
  |    --- L --->      |
  /`---\  (Magnetic fields cancel out)
  | CT | --[ CLAMPED ]--
  \`---/  <--- N ---      |
  \`------------------`/
  // Result: Reading is 0
  ```

### XIAO 2-Channel Wi-Fi AC Energy Meter

If the CT sensor is the "sensory organ," the XIAO Wi-Fi Energy Meter is the system's "brain" and "communications hub."

#### Core Advantages

- **Ultra-Compact & Dual-Channel**: Inheriting the tiny "stamp" form factor of the Seeed Studio XIAO series, it is extremely easy to integrate into space-constrained electrical boxes or device enclosures. The dual-channel design means a single module can independently monitor two separate AC circuits, making it highly cost-effective.
- **Powerful Connectivity & IoT Integration**: It features a high-performance **ESP32-C6** core, providing native support for **Wi-Fi 6, Bluetooth 5, Zigbee, and Thread**. This allows it to easily connect to your local network and push data seamlessly to IoT platforms like Home Assistant via standard protocols like ESPHome and MQTT. It is also future-proofed for the upcoming **Matter** ecosystem.
- **Built on a Mature Platform**: The energy meter can be configured and flashed directly using ESPHome. ESPHome is a powerful and mature open-source project that abstracts complex low-level programming into simple YAML configuration files. Users can define sensors, set up networking, and integrate with Home Assistant without writing C++ code, significantly lowering the barrier to entry.

## 3. Use Cases and Examples

Now that we have successfully integrated the device data into Home Assistant, these numbers are no longer isolated figures but powerful triggers for limitless automation ideas.

:::note

Remember to replace the example entity_id values with your own.

:::

### Scenario 1: Home Energy Audit to Hunt Down "Energy Vampires"

- **Problem**: Your monthly electricity bill is high, but it's unclear which appliances are the culprits, especially those consuming power in standby mode.

- **Solution**: Sequentially clamp the CT sensor onto the power cords of high-consumption or always-on devices like refrigerators, air conditioners, home entertainment centers, and computers for several days to collect data.

- **Implementation**:

  1. **Long-Term Trend Analysis**: Use Home Assistant's built-in **Energy Dashboard** to clearly visualize the total consumption of each device over a day, week, or month. This makes it easy to identify the biggest energy hogs.
  2. **Standby Power Identification**: By examining the historical graph of the power sensor, you can pinpoint the exact standby power draw of a device. For example, you might discover that your home theater system consumes 15W continuously even when "off."

- **Automation Example** (Smart Alert):

  ```YAML
  # Home Assistant Automation: High Standby Power Alert
  alias: High Standby Power Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      above: 10 # Power threshold in Watts
      for: "00:10:00" # For a duration of 10 minutes
  condition:
    - condition: time
      after: "02:00:00"
      before: "06:00:00"
  action:
    - service: notify.mobile_app_your_phone_name # Replace with your notification service
      data:
        title: "High Standby Power Detected"
        message: "The entertainment center's standby power has been above 10W for 10 minutes. Consider unplugging it."
  ```

### Scenario 2: Smart Device Monitoring for a Workshop or Makerspace

- **Problem**: Long-running tasks like 3D printing or laser cutting require frequent manual checks to see if they are finished or have failed.

- **Solution**: Monitor the real-time power consumption of the 3D printer or laser cutter. These devices have distinct power profiles: a peak during preheating, stable fluctuations during operation, and a drop to a very low standby level upon completion.

- **Automation Example** (Task Completion Notification & Auto-Shutdown):

  ```YAML
  # Home Assistant Automation: 3D Print Job Finished
  alias: 3D Print Job Finished
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      below: 8 # Power threshold for a completed job in Watts
      for: "00:03:00" # For 3 minutes to confirm stable state
  condition:
    # Ensure the device's power dropped from a higher working state
    - condition: template
      value_template: "{{ trigger.from_state.state | float(0) > 50 }}"
  action:
    # 1. Send a mobile notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "3D Print Complete!"
        message: "Your 3D print job has finished. The printer will power down in 15 minutes."
    # 2. Wait for the print to cool down
    - delay: "00:15:00"
    # 3. Turn off the smart plug connected to the printer
    - service: switch.turn_off
      target:
        entity_id: switch.3d_printer_plug
  ```

### Scenario 3: Predictive Maintenance for Critical Equipment

- **Problem**: The failure of critical equipment like an aquarium pump or a server cooling fan can lead to costly damage.

- **Solution**: Continuously monitor the **current** drawn by these motor-driven devices. During normal operation, the current stays within a predictable range. If a mechanical stall or bearing failure occurs, the motor's load increases dramatically, causing an abnormal spike in current.

- **Automation Example** (Pump Stall Alert):

  ```YAML
  # Home Assistant Automation: Water Pump Stall Alert
  alias: Water Pump Stall Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_2_current
      above: 1.5 # Set a danger threshold (e.g., normal is 0.8A)
      for: "00:00:05" # For 5 seconds to filter out initial startup spikes
  action:
    # 1. Send a high-priority notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "‼️ URGENT ALERT: Pump May Be Stalled ‼️"
        message: "Pump current is abnormally high at {{ trigger.to_state.state }}A. Please check immediately!"
    # 2. (Optional) Cut power to the pump to prevent motor burnout
    - service: switch.turn_off
      target:
        entity_id: switch.water_pump_plug
  ```

### Scenario 4: Fair Sub-metering for Shared Spaces

- **Problem**: In a co-working space or makerspace, how to fairly charge members for their use of high-power equipment like a CNC machine or a large laser cutter.
- **Solution**: Utilize the total energy consumption sensor, which accurately records the device's usage in kilowatt-hours (kWh).
- **Implementation**:
  1. **Data Logging**: Home Assistant automatically logs historical sensor data.
  2. **Billing Cycles**: Using Home Assistant's tools (e.g., utility meter helper), you can easily create daily, weekly, monthly, or manual billing cycles.
  3. **Cost Calculation**: At the end of each billing cycle, the administrator reads the total kWh consumed during that period and multiplies it by the local electricity rate to determine the amount owed.

## 4. FAQ

<details>
<summary>Q1: Can this solution monitor three-phase power?</summary>

**No.** The hardware and software in this guide are designed for **single-phase AC power**, which is the most common type of electrical service in residential and small commercial locations. Three-phase power monitoring requires specialized hardware capable of synchronously measuring three current and voltage channels and processing phase differences, which is beyond the scope of this solution.

</details>

<details>
<summary>Q2: What if I need to monitor an appliance that draws more than 5A? (e.g., an air conditioner or kitchen circuit)</summary>

Absolutely. You just need to upgrade the CT sensor and recalibrate the software:

1. **Upgrade the Hardware**: Replace the standard 5A CT sensor with a larger-rated split-core CT, such as 20A, 50A, or even 100A (for monitoring a main feed). When purchasing, ensure the new CT is a **current-output type** (e.g., `100A:50mA`) to maintain compatibility with the XIAO Energy Meter's input port.

2. **Recalibrate the Software**: A new CT has a different transformation ratio, so you must update the calibration parameters in your ESPHome configuration file.
    - **Calibration Method**: Please refer to the official ESPHome Sensor Component documentation for calibration instructions.

</details>

<details>
<summary>Q3: What should I do if the Wi-Fi connection is unstable and the device frequently goes offline?</summary>

Wi-Fi issues can typically be addressed by checking two areas: the physical environment and the software configuration:

1. **Check the Physical Environment**:
    - **Signal Strength**: The device's location, especially inside a metal electrical box, may have poor Wi-Fi reception. Use your phone to check the signal strength near the device. Consider moving your router closer or adding a Wi-Fi extender or mesh node.
    - **Antenna Placement**: Ensure the **ESP32-C6**'s onboard antenna is not completely obstructed by metal parts.

2. **Optimize Software Configuration**: You can add several options to your ESPHome YAML file to improve network stability.

```yaml
wifi:
  ssid: "Your_WiFi_SSID"
  password: "Your_WiFi_Password"

  # -- Stability Enhancements --
  # 1. Set a static IP to avoid issues with DHCP leases
  manual_ip:
    static_ip: 192.168.1.100
    gateway: 192.168.1.1
    subnet: 255.255.255.0

  # 2. Disable Wi-Fi power-saving mode to keep the connection active (this slightly increases power consumption)
  power_save_mode: none

# If the device can't connect to the API or Wi-Fi for 30 mins, 
# it will automatically reboot to try and recover.
api:
  reboot_timeout: 30min

ota:
  # ...
```

</details>
