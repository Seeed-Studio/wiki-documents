---
description: CO₂ calibration procedure for the SenseCAP S1000 V2 10-in-1 Compact Weather Sensor.
title: SenseCAP S1000 V2 CO₂ Calibration
keywords:
  - SenseCAP
  - SenseCAP S1000 V2
  - CO2 Calibration
  - Compact Weather Sensor
image: https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg
slug: /sensecap_s1000_v2_co2_calibration
sku: 101991024
last_update:
  date: 09/09/2026
  author: Zhai Chenyang
createdAt: '2026-09-09'
updatedAt: '2026-09-09'
url: https://wiki.seeedstudio.com/sensecap_s1000_v2_co2_calibration/
---

# SenseCAP S1000 V2 CO₂ Calibration

:::note
This CO₂ calibration procedure applies only to **SKU 101991024** and is not compatible with the IAP-version multi-in-one CO₂ weather station.
:::
   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg"/></div>
## Calibration Methods

- **ABC Automatic Baseline Correction:** The sensor identifies the lowest stable CO₂ concentration over a specified period and adjusts it to the ABC target, typically around 400 ppm. This method is suitable for offices, homes, and other environments that are regularly ventilated and periodically reach outdoor fresh-air CO₂ levels. On the S1000, the automatic correction period can be configured using `SA_ABC`, in hours.
- **Target One-Point Calibration:** The sensor reading is adjusted to a known CO₂ concentration, such as 1,000 ppm confirmed using certified calibration gas or a reliable reference instrument. This method is suitable for precise on-site calibration, environments with consistently high CO₂ levels, or locations that are not regularly exposed to fresh air. On the S1000, the target concentration can be entered using `SA_TC`, and the one-point calibration is performed immediately after the value is entered.

## Detailed Calibration Procedure

### ABC Automatic Calibration Procedure

#### Precautions Before Enabling ABC

- During each ABC cycle, the environment should reach a CO₂ level close to the outdoor background concentration for a period of time and remain relatively stable.
- ABC is suitable for regularly ventilated homes, offices, classrooms, and meeting rooms.
- It is unsuitable for greenhouses, livestock facilities, continuously occupied or enclosed spaces, and environments where CO₂ is intentionally added.
- ABC evaluates both the lowest detected concentration and its stability; it does not simply treat the lowest reading as 400 ppm.
- Significant measurement deviations may require several ABC cycles to be corrected gradually.

#### Configure and Enable ABC

`SA_ABC` sets the ABC calibration cycle for the CO₂ sensor built into the SenseCAP S1000 V2 10-in-1 Compact Weather Sensor.

<div class="table-center">

| Parameter | Value |
| --- | --- |
| Unit | Hours |
| Supported range | 0–65535 |
| Default value | 0 (ABC disabled) |
| Values that disable ABC | 0 and 65535 |
| Recommended setting | 180 hours (approximately 7.5 days) |

</div>

1. Connect to the device through the service serial port.

2. Check the device's ASCII address using the default serial settings below.

   <div class="table-center">

   | Parameter | Default value |
   | --- | --- |
   | Baud rate | 9600 |
   | Stop bits | 1 |
   | Data bits | 8 |
   | Parity | None |

   </div>

   If the serial terminal automatically appends CRLF, enter only `?`.

   **Send:**

   ```text
   ?
   ```

   **Response:**

   ```text
   0XA
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration1.png"/></div>

3. Use the returned address in subsequent commands. If the address is `0`, send the following command to set the ABC cycle to the recommended value of 180 hours.

   **Send:**

   ```text
   0XA;SA_ABC=180
   ```

   **Response:**

   ```text
   0XA;SA_ABC=180
   ```

   This response indicates that the setting has been written successfully.

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration2.png"/></div>
4. Verify the current setting.

   **Send:**

   ```text
   0XA;SA_ABC=?
   ```

   **Response:**

   ```text
   SA_ABC=180
   ```

   A response containing `SA_ABC=180` confirms that ABC is enabled.
   

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration3.png"/></div>

### Target One-Point Calibration Procedure

#### Preparation Before Calibration

1. Record the CO₂ reading before calibration.
2. Ensure that the device is powered and communicating properly.
3. Allow the reference gas to fully replace the original gas inside the measurement chamber and reach a stable condition.
4. Prevent people from breathing directly toward the sensor.
5. Keep the temperature, humidity, and pressure as stable as possible.

**Recommended Stability Criteria**

- Allow sufficient time for the reference gas to fully replace the original gas.
- Confirm that at least 3–5 consecutive measurements show only minimal variation.
- Ensure that both the calibration gas and the sensor are at a stable temperature.
- Keep the calibration chamber vented at atmospheric pressure.
- Do not apply pressurized gas directly to the sensor. When using a gas cylinder, use a pressure regulator and suitable tubing to control the flow rate.

#### Target Calibration

Target calibration is a one-point calibration method for the CO₂ sensor built into the SenseCAP S1000 V2 10-in-1 Compact Weather Sensor. It requires a certified calibration gas or a reliable reference instrument with a known CO₂ concentration, such as 400, 800, 1,000, or 1,500 ppm.

`SA_TC` specifies the target calibration value in ppm. It has no default value and supports a range of 0–10000 ppm. After a valid value is written, the device immediately performs a one-point calibration.

#### Calibration Procedure

For the default serial parameters and instructions on checking the device address, refer to [Configure and Enable ABC](#configure-and-enable-abc).

1. Place the device in a suitable calibration chamber.

2. Introduce a CO₂ gas mixture of a known concentration according to the calibration chamber's operating requirements.

3. Keep the chamber vented to maintain atmospheric pressure. Continuously monitor the CO₂ readings and wait until the gas concentration inside the chamber stabilizes. Use the following command to check the current reading.

   **Send:**

   ```text
   0XA;G5?
   ```

   :::note
   If the serial terminal automatically appends CRLF, enter the command directly. Otherwise, add `<CR><LF>` to the end of the command.
   :::

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration4.png"/></div>

4. Enter the known target concentration. For example, when using certified 1,000 ppm calibration gas, send the following command.

   **Send:**

   ```text
   0XA;SA_TC=1000
   ```

   **Response:**

   ```text
   0XA;SA_TC=1000
   ```

   This response indicates that the command was received successfully. The device performs the one-point calibration immediately after the value is written.

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration5.png"/></div>

5. Wait for at least one CO₂ data update cycle, approximately 16 seconds by default, and then check the reading again.

   **Send:**

   ```text
   0XA;G5?
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration6.jpg"/></div>

:::note
Only enter the verified concentration of the calibration gas or reference instrument. Do not enter an estimated value for target calibration.
:::

