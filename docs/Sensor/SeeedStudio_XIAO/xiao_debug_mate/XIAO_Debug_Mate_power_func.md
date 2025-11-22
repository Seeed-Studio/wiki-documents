---
description: Create a doc page with rich content.
title: Power Meter
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/32.webp
slug: /xiao_debug_mate_power
sidebar_position: 4
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/32.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/xiao_debug_mate_power" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introducion

The Power Meter feature of the XIAO Debug Mate transforms your device into a versatile, high-precision tool for measuring voltage, current, and power consumption. With an intuitive graphical interface and real-time data updates, you can easily monitor the power draw of your XIAO board or other connected hardware throughout all stages of development. Whether you're optimizing for ultra-low-power operation or verifying system stability under load, the Power Meter provides clear, accurate insight at your fingertips. This section will walk you through its key capabilities and how to get the most from this function.

## Tips for Using the Power Meter

To ensure accurate measurements and protect your device, please review these important tips before using the power analysis function.

### Safe Input Voltage

The XIAO Debug Mate itself should be powered by a standard **5V/1A USB source**. Using under-powered, over-powered, or non-compliant chargers may result in unstable operation or risk damaging the device.

<svg viewBox="0 0 800 520" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#2f9e44" />
    </marker>
    <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#e03131" />
    </marker>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">Power Supply Requirements</text>
  
  {/* Central Device: XIAO Debug Mate - Moved down to align with taller boxes */}
  <g transform="translate(300, 175)">
    <rect x="0" y="0" width="200" height="140" rx="10" fill="#343a40" filter="url(#dropShadow)" />
    <rect x="10" y="10" width="180" height="120" rx="5" fill="#495057" />
    <text x="100" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">XIAO Debug Mate</text>
    <text x="100" y="75" textAnchor="middle" fontSize="12" fill="#adb5bd">USB-C Input</text>
    
    {/* Port Graphic */}
    <rect x="70" y="90" width="60" height="20" rx="4" fill="#212529" stroke="#868e96" strokeWidth="2" />
    <line x1="80" y1="100" x2="120" y2="100" stroke="#868e96" strokeWidth="2" />
  </g>

  {/* Left Side: The CORRECT Way - Increased Height */}
  <g transform="translate(50, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#ebfbee" stroke="#2f9e44" strokeWidth="2" strokeDasharray="5,5" />
    
    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#2f9e44" />
    <rect x="0" y="20" width="200" height="20" fill="#2f9e44" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">RECOMMENDED</text>
    
    {/* Icon */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#2f9e44" strokeWidth="2" />
    <path d="M90 90 L100 90 L100 80 M100 90 L110 90" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" />
    
    <text x="100" y="145" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#2b8a3e">5V / 1A</text>
    <text x="100" y="170" textAnchor="middle" fontSize="14" fill="#2b8a3e">Standard Source</text>
    
    {/* Result Tag - Moved down */}
    <g transform="translate(40, 210)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#40c057" />
      <text x="60" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Stable Operation</text>
    </g>
  </g>

  {/* Right Side: The WRONG Way - Increased Height to fix overflow */}
  <g transform="translate(550, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#fff5f5" stroke="#e03131" strokeWidth="2" strokeDasharray="5,5" />
    
    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#e03131" />
    <rect x="0" y="20" width="200" height="20" fill="#e03131" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">AVOID</text>
    
    {/* Warning Icons */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#e03131" strokeWidth="2" />
    <text x="100" y="98" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#e03131">!</text>
    
    {/* Bad Specs - Spaced out vertically */}
    <text x="100" y="140" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">Over-powered (&gt;5V)</text>
    <text x="100" y="165" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">Under-powered</text>
    <text x="100" y="190" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">Non-compliant</text>

    {/* Result Tag - Moved down */}
    <g transform="translate(40, 215)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#fa5252" />
      <text x="60" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Risk of Damage</text>
    </g>
  </g>

  {/* Connecting Arrows - Adjusted Y to new center (245) */}
  {/* Green Arrow */}
  <path d="M250 245 L290 245" stroke="#2f9e44" strokeWidth="4" markerEnd="url(#arrowGreen)" />
  
  {/* Red Arrow with X */}
  <path d="M550 245 L510 245" stroke="#e03131" strokeWidth="4" markerEnd="url(#arrowRed)" />
  <line x1="525" y1="235" x2="535" y2="255" stroke="#e03131" strokeWidth="3" />
  <line x1="535" y1="235" x2="525" y2="255" stroke="#e03131" strokeWidth="3" />

  {/* Bottom Note - Widened Box to fix overflow */}
  <g transform="translate(100, 430)">
    {/* Width increased from 400 to 600 */}
    <rect x="0" y="0" width="600" height="50" rx="4" fill="#f8f9fa" stroke="#dee2e6" strokeWidth="1" />
    <circle cx="30" cy="25" r="10" fill="#1c7ed6" />
    <text x="30" y="31" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">i</text>
    <text x="50" y="20" fontSize="12" fill="#495057" fontWeight="bold">Tip:</text>
    {/* Text alignment adjusted for wider box */}
    <text x="50" y="35" fontSize="12" fill="#495057">Use a standard PC USB port or a high-quality 5V/1A wall adapter.</text>
  </g>

</svg>

### Safe Measurement Range

The power meter is a high-precision instrument designed to measure current from **1µA to 1A**. It maintains an accuracy of **±1%** across the 10µA to 1A range. Exceeding the 1A limit may damage the measurement circuitry.

### Power Consumption Discrepancy: Meter vs. Battery

When you measure a XIAO board's power consumption with the Debug Mate, the measurement is taken from the 5V power supply line. This power then goes through the XIAO's internal voltage regulator (LDO) to produce 3.3V for the chip. This regulator itself consumes a small amount of power.

<svg viewBox="0 0 800 450" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#495057" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">Power Measurement Logic: Pre-Regulator</text>

  {/* --- SECTION 1: The Measurement Device (Debug Mate) --- */}
  {/* Moved Left to x=20 to create space */}
  <g transform="translate(20, 100)">
    {/* Device Body */}
    <rect x="0" y="0" width="160" height="200" rx="10" fill="#343a40" filter="url(#shadow)" />
    <text x="80" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">Debug Mate</text>
    
    {/* Screen */}
    <rect x="20" y="50" width="120" height="60" rx="4" fill="#212529" stroke="#495057" strokeWidth="2" />
    <text x="80" y="80" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#40c057" fontFamily="monospace">50.0 mA</text>
    <text x="80" y="100" textAnchor="middle" fontSize="10" fill="#868e96">DISPLAYED VALUE</text>

    {/* Probe Line Out - Extended length to cross the gap */}
    <line x1="160" y1="140" x2="280" y2="140" stroke="#fa5252" strokeWidth="6" />
    
    {/* 5V Label - Centered in the new gap */}
    <text x="220" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fa5252">5V Line</text>
    
    {/* Measurement Point Indicator - Centered in the new gap */}
    <circle cx="220" cy="140" r="6" fill="#fa5252" stroke="#fff" strokeWidth="2" />
    <text x="220" y="165" textAnchor="middle" fontSize="11" fill="#fa5252" fontWeight="bold">Measurement Point</text>
  </g>

  {/* --- SECTION 2: The XIAO Board --- */}
  {/* Moved Right to x=300 to fix overlap */}
  <g transform="translate(300, 80)">
    {/* PCB Outline */}
    <rect x="0" y="0" width="480" height="240" rx="15" fill="#ebfbee" stroke="#2f9e44" strokeWidth="3" />
    <text x="20" y="30" fontSize="16" fontWeight="bold" fill="#2b8a3e">XIAO Board</text>

    {/* Component: LDO Regulator */}
    <g transform="translate(50, 90)">
      <rect x="0" y="0" width="100" height="100" rx="4" fill="#e9ecef" stroke="#adb5bd" strokeWidth="2" />
      <text x="50" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#495057">LDO</text>
      <text x="50" y="50" textAnchor="middle" fontSize="10" fill="#868e96">Voltage Regulator</text>
      
      {/* Heat/Loss visualization */}
      <path d="M30 70 Q40 60 50 70 T70 70" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <path d="M30 80 Q40 70 50 80 T70 80" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <text x="50" y="120" textAnchor="middle" fontSize="11" fill="#fd7e14" fontWeight="bold">Self-Consumption</text>
      <text x="50" y="135" textAnchor="middle" fontSize="10" fill="#fd7e14">(~5mA Loss)</text>
    </g>

    {/* Component: MCU (The Chip) */}
    <g transform="translate(280, 60)">
      <rect x="0" y="0" width="140" height="140" rx="8" fill="#343a40" filter="url(#shadow)" />
      <rect x="10" y="10" width="120" height="120" rx="4" fill="#212529" />
      <text x="70" y="70" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ced4da">MCU / Chip</text>
      <text x="70" y="90" textAnchor="middle" fontSize="12" fill="#adb5bd">Actual Load</text>
      <text x="70" y="110" textAnchor="middle" fontSize="14" fill="#40c057" fontWeight="bold">~45 mA</text>
    </g>

    {/* Internal Connections */}
    {/* 5V Input to LDO - Dashed line inside board */}
    <line x1="0" y1="140" x2="50" y2="140" stroke="#fa5252" strokeWidth="4" strokeDasharray="4,4" opacity="0.6" />
    
    {/* 3.3V LDO to MCU */}
    <line x1="150" y1="140" x2="280" y2="140" stroke="#fab005" strokeWidth="6" markerEnd="url(#arrowFlow)" />
    {/* Moved text up slightly to avoid overlap with line */}
    <text x="215" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fab005">3.3V Line</text>
  </g>

  {/* --- SECTION 3: The Equation / Explanation --- */}
  <g transform="translate(100, 360)">
    <rect x="0" y="0" width="600" height="70" rx="8" fill="#f1f3f5" stroke="#dee2e6" strokeWidth="1" />
    
    {/* Equation Parts */}
    <text x="300" y="25" textAnchor="middle" fontSize="14" fill="#495057" fontWeight="bold">Why is the reading higher?</text>
    
    <g transform="translate(60, 45)">
      <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#343a40">Displayed Value</text>
      <text x="140" y="0" fontSize="16" fontWeight="bold" fill="#868e96">=</text>
      <text x="170" y="0" fontSize="16" fontWeight="bold" fill="#2b8a3e">Chip Consumption</text>
      <text x="330" y="0" fontSize="16" fontWeight="bold" fill="#868e96">+</text>
      <text x="360" y="0" fontSize="16" fontWeight="bold" fill="#fd7e14">Regulator Overhead</text>
    </g>
  </g>

</svg>

Therefore, the power value shown on the Debug Mate will be slightly **higher** than the actual power consumed by the XIAO if it were powered directly by a 3.3V battery. This is normal and expected behavior for any measurement taken "pre-regulator."

### Calibration and Verification

Every XIAO Debug Mate is individually calibrated for voltage and current at the factory. This calibration data is stored in a write-protected section of memory (EEPROM) and is not affected by firmware updates.

:::danger
Do not attempt to manually erase or alter this calibration data. Doing so will destroy the factory calibration and may permanently disable the power measurement functionality.
:::

## Getting Started

To access the power meter, navigate to the **Power Meter icon** (bottom-right) on the main menu and **press the button**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/33.jpg" style={{width:600, height:'auto'}}/></div>

### Getting Started: Understanding the Three Power Meter UIs

The Power Meter function provides three distinct user interfaces (UIs), each tailored for a specific stage of the development process. You can instantly switch between these views to get the data you need, whether it's a high-precision snapshot, a low-power reading, or a long-term analysis.

**Navigation:**
*   **Switching UIs:** Simply **turn the scroll wheel** to cycle between the three power meter screens. There is no cursor; the entire page changes.
*   **Resetting Data:** The statistics on UI 3 are cleared only when you **long-press the button** to return to the main menu.

#### UI 1: High-Precision Dashboard

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

This is the default view, designed for immediate, high-resolution feedback.

*   **What It Shows:**
    *   `U`: Instantaneous Voltage (V) up to 4 decimal places.
    *   `I`: Instantaneous Current (A) up to 4 decimal places.
    *   `P`: Instantaneous Power (W) up to 4 decimal places.

*   **Purpose and Use Case:**
    This UI is your go-to for **real-time debugging and fundamental sanity checks**. Its high precision allows you to see even small fluctuations in power draw. Use this screen to quickly verify:
    *   If the device is drawing the expected amount of current when idle.
    *   The immediate power impact of turning on a peripheral (like a screen or sensor).
    *   The stability of your 5V power source.


#### UI 2: Multi-Unit View for Low-Power

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

This view is optimized for the intuitive observation of low-power projects.

*   **What It Shows:**
    *   `U`: Instantaneous Voltage (V).
    *   `I`: Instantaneous Current, automatically scaled and displayed in **Amps (A)**, **milliamps (mA)**, and **microamps (µA)**.
    *   `P`: Instantaneous Power, automatically scaled and displayed in **Watts (W)** and **milliwatts (mW)**.

*   **Purpose and Use Case:**
    When developing battery-powered or energy-efficient devices, current can drop into the microamp range. This UI **eliminates the need for manual unit conversion**, allowing you to instantly understand the magnitude of your device's power consumption. It is perfect for:
    *   Verifying that your device has successfully entered a deep sleep mode (current should be in the µA range).
    *   Comparing the power draw of different code optimizations without having to mentally calculate the units.

#### UI 3: Statistical Analysis & Battery Estimation

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

This view is designed for long-term testing and final product validation.

*   **What It Shows:**
    *   `Min/Max`: The minimum and maximum **Current (A)** and **Power (W)** recorded during the session.
    *   `Total`: The accumulated **Energy (Wh)** and **Charge (Ah)**.
    *   `Time`: The elapsed time since the measurement session began.

*   **Operation:**
    The timer and data accumulation **start automatically** when you first enter this screen. Switching to UI 1 or UI 2 will **not** reset the data, allowing you to check real-time values while a long-term test is running. The data is only cleared when you exit to the main menu.

*   **Purpose and Use Case:**
    This UI is essential for **pre-deployment validation**. Before committing to a battery, you can simulate the device's workload and use this screen to:
    *   Identify peak current (`Max A`) to ensure your battery and power circuitry can handle the load.
    *   Use the total consumed charge (`Total Ah`) to accurately estimate the battery life you can expect from a battery of a specific capacity (mAh).

#### **Important Note on Battery Life Estimation**

Please be aware of a critical detail when using UI 3 for battery calculations:

The XIAO Debug Mate measures the power consumed from the **5V power input** to the XIAO. This 5V supply is then converted to 3.3V by the XIAO's onboard power management IC (PMIC/LDO). This conversion process is not 100% efficient and the PMIC itself consumes a small amount of power.

When you power a XIAO directly with a Li-Po battery, you typically connect it to the 3.3V battery pads on the back, bypassing the 5V-to-3.3V conversion circuit.

Therefore, the power consumption measured by the Debug Mate will be **slightly higher** than the actual power drawn from a 3.3V battery. The value you measure is an excellent and safe **upper-bound estimate** for your battery life calculations.

### Measuring the Power Consumption of a XIAO

This is the most straightforward use case.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

1.  Simply plug your XIAO board directly into the female headers on the front of the XIAO Debug Mate.
2.  The Debug Mate will automatically power the XIAO and begin measuring its total power draw.

### Measuring a XIAO and its Peripherals

You can measure the combined power consumption of a XIAO board and any connected sensors or modules.

Connect your peripheral (e.g., a sensor) to the I/O pins on the headers surrounding the XIAO socket.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/35.jpg" style={{width:800, height:'auto'}}/></div>

:::danger CRITICAL
1. To be included in the measurement, the peripheral **must** be powered from a **5V pin** on the header. Power drawn from the 3.3V pin is supplied by the XIAO's internal regulator and will **not** be measured by the Debug Mate.

2. **Do not** connect the peripheral to the Debug Mate's Grove port for power measurement, as its power line is separate from the XIAO measurement circuit.
:::

### Measuring Other Microcontrollers

The power meter is not limited to the XIAO series. You can measure any development board that can be powered by 5V.

1.  Use DuPont wires to connect your target board to the **5V and GND pins** on the XIAO Debug Mate's female headers.
2.  Ensure that your entire target system (the microcontroller board and all peripherals you wish to measure) is powered exclusively through this 5V connection from the Debug Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/34.jpg" style={{width:800, height:'auto'}}/></div>

**Example: Measuring a Seeeduino V4.2**

1.  Connect the **5V pin** of the Seeeduino V4.2 to the **5V pin** on the Debug Mate's header.
2.  Connect a **GND pin** of the Seeeduino V4.2 to a **GND pin** on the Debug Mate's header.
3.  Power on the Debug Mate. It will now supply 5V to the Seeeduino board and measure its total current consumption.

## Troubleshooting

### Q1: Is the power consumption of the Grove interface also included in the statistics?

**Do not** connect the peripheral to the Debug Mate's Grove port for power measurement, as its power line is separate from the XIAO measurement circuit.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
