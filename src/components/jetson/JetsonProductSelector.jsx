import React, { useState, useMemo } from 'react';

// Product data parsed from "Jetson产品参数对比.xlsx" (Sheet 1: 整机对比, Sheet 3: 模组对比).
// Regenerate via the one-off parser; do not hand-edit individual entries.
const PRODUCTS = [
  {"id": "C", "name": "reComputer J1010", "fullName": "[110061362]reComputer J1010", "series": "reComputer (Classic) J101", "module": "Jetson Nano 4GB", "moduleKey": "nano", "tops": 0.5, "memoryGb": 4, "price": "219", "priceNum": 219.0, "positioning": "开发套件", "application": null, "interfaceCounts": {"usb3_count": 1, "usb2_count": 2, "usb_count": 3, "mipi_count": 2, "hdmi_count": 1, "m2_keye_count": 1, "eth_1g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["4.6.6"], "jetpackFactory": "4.6.6", "ssd": "-", "sdCard": "Micro SD card", "displayOut": "1x HDMI Type A", "powerConnector": "USB Type C", "powerRange": "5V/3A", "dimension": "130mm x 120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Passive", "tempMin": 0, "tempMax": 60, "tempText": "0℃ ~ 60℃", "ip": "none", "warranty": null, "lifetime": "January 2027", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["devkit"], "moduleSpec": {"gpu": "128-core NVIDIA Maxwell, 128 CUDA cores", "cpu": "Quad-core ARM Cortex-A57", "memory": "4GB 64-bit LPDDR4, 25.6GB/s", "power": "5W – 10W", "aiPerformance": "472 GFLOPS", "video": "Encode: 1x 4K30 (H.265); Decode: 2x 4K60 (H.265)", "csi": "2x MIPI CSI-2 (D-PHY 1.1)"}, "type": "machine"},
  {"id": "D", "name": "reComputer J1020 v2", "fullName": "[110061441]reComputer J1020 v2", "series": null, "module": "Jetson Nano 4GB", "moduleKey": "nano", "tops": 0.5, "memoryGb": 4, "price": "279", "priceNum": 279.0, "positioning": "开发套件", "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "mipi_count": 2, "hdmi_count": 1, "dp_count": 1, "m2_keym_count": 1, "eth_1g_count": 1, "has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": ["4.6.6"], "jetpackFactory": "4.6.6", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI Type A; 1x DP", "powerConnector": "5525 Barrel DC Jack", "powerRange": "12V/2A", "dimension": "130 mm x 120 mm x 50 mm", "weight": "451.9g", "installation": "Desk, wall-mounting", "cooling": "Passive", "tempMin": 0, "tempMax": 60, "tempText": "0℃ ~ 60℃", "ip": "none", "warranty": null, "lifetime": "January 2027", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["devkit"], "moduleSpec": {"gpu": "128-core NVIDIA Maxwell, 128 CUDA cores", "cpu": "Quad-core ARM Cortex-A57", "memory": "4GB 64-bit LPDDR4, 25.6GB/s", "power": "5W – 10W", "aiPerformance": "472 GFLOPS", "video": "Encode: 1x 4K30 (H.265); Decode: 2x 4K60 (H.265)", "csi": "2x MIPI CSI-2 (D-PHY 1.1)"}, "type": "machine"},
  {"id": "E", "name": "reComputer J2021", "fullName": "[110061381]reComputer J2021", "series": "reComputer (Classic) J202", "module": "Jetson Xavier NX 8GB", "moduleKey": "xavier_nx", "tops": 21, "memoryGb": 8, "price": "629-729", "priceNum": 629.0, "positioning": "开发套件", "application": "视觉模型", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "mipi_count": 2, "hdmi_count": 1, "dp_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "eth_1g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["4.6.1", "4.6.6"], "jetpackFactory": "4.6.1", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI type A; 1x DP", "powerConnector": "5525 Barrel DC Jack", "powerRange": "9-19V", "dimension": "130mm x 120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10~60 °C", "ip": "none", "warranty": "1 year", "lifetime": "January 2028", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["devkit"], "moduleSpec": {"gpu": "384-core NVIDIA Volta, 48 Tensor Cores", "cpu": "6-core NVIDIA Carmel Arm v8.2 64-bit", "memory": "8GB 128-bit LPDDR4x, 59.7GB/s", "power": "10W – 20W", "aiPerformance": "21 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 2x 8K30 (H.265)", "csi": "2x MIPI CSI-2, up to 6 cameras"}, "type": "machine"},
  {"id": "F", "name": "reComputer J3010", "fullName": "[110110146]reComputer J3010", "series": "reComputer (Classic) J401", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "499-599", "priceNum": 499.0, "positioning": "商用级", "application": "edge AI，视频分析", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "mipi_count": 2, "hdmi_count": 1, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "eth_1g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1", "6.2"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "9-19V", "dimension": "130mm x120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10~60 °C", "ip": "none", "warranty": "1 year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "G", "name": "reComputer J4011", "fullName": "[110110144]reComputer J4011", "series": null, "module": "Jetson Orin NX 8GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 8, "price": "699-899", "priceNum": 699.0, "positioning": "商用级", "application": "edge AI，视频分析，大语言模型", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "mipi_count": 2, "hdmi_count": 1, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "eth_1g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "9-19V", "dimension": "130mm x120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10~60 °C", "ip": "none", "warranty": "1 year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "117 TOPS", "video": "Encode: 1080p30 CPU; Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "H", "name": "reComputer J3010B", "fullName": "[114993486]reComputer J3010B", "series": "reComputer (Classic) J401B", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "505-605", "priceNum": 505.0, "positioning": "商用级", "application": "edge AI，视频分析，公共领域", "interfaceCounts": {"usb3_count": 2, "usb_count": 2, "can_count": 1, "mipi_count": 2, "hdmi_count": 1, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "eth_1g_count": 1, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1", "6.2"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "9-19V", "dimension": "130mm x120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10~60 °C", "ip": "none", "warranty": "1 year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "I", "name": "reComputer J4011B", "fullName": "[114993488]reComputer J4011B", "series": null, "module": "Jetson Orin NX 8GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 8, "price": "705-905", "priceNum": 705.0, "positioning": "商用级", "application": null, "interfaceCounts": {"usb3_count": 2, "usb_count": 2, "can_count": 1, "mipi_count": 2, "hdmi_count": 1, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "eth_1g_count": 1, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "9-19V", "dimension": "130mm x120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10~60 °C", "ip": "none", "warranty": "1 year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "117 TOPS", "video": "Encode: 1080p30 CPU; Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "J", "name": "reComputer Industrial J2011", "fullName": "[110110188]reComputer Industrial J2011", "series": "reComputer Industrial J201", "module": "Jetson Xavier NX 8GB", "moduleKey": "xavier_nx", "tops": 21, "memoryGb": 8, "price": "999-1099", "priceNum": 999.0, "positioning": "工业级", "application": null, "interfaceCounts": {"usb3_count": 3, "usb_count": 3, "can_count": 1, "rs_count": 1, "mipi_count": 2, "hdmi_count": 1, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 1, "has_wifi": true, "has_tpm": true, "has_gpio": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "6.0"], "jetpackFactory": "5.1.1", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.0 Type A", "powerConnector": "Terminal block 2 pin", "powerRange": "12-24V", "dimension": "159mm x 155mm x 57mm", "weight": "1.57kg", "installation": "Desk, DIN rail, wall-mounting, VESA", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60°C with 0.7m/s", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2028", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "384-core NVIDIA Volta, 48 Tensor Cores", "cpu": "6-core NVIDIA Carmel Arm v8.2 64-bit", "memory": "8GB 128-bit LPDDR4x, 59.7GB/s", "power": "10W – 20W", "aiPerformance": "21 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 2x 8K30 (H.265)", "csi": "2x MIPI CSI-2, up to 6 cameras"}, "type": "machine"},
  {"id": "K", "name": "reComputer Industrial J3010", "fullName": "[110110192]reComputer Industrial J3010", "series": "reComputer Industrial J401", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "799-899", "priceNum": 799.0, "positioning": "工业级", "application": "工业环境，edge AI，视频分析通用领域", "interfaceCounts": {"usb3_count": 3, "usb_count": 3, "can_count": 1, "rs_count": 1, "mipi_count": 2, "hdmi_count": 1, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 1, "has_wifi": true, "has_tpm": true, "has_gpio": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1", "6.2"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.0 Type A", "powerConnector": "Terminal block 2 pin", "powerRange": "12-24V", "dimension": "159mm x 155mm x 57mm", "weight": "1.57kg", "installation": "Desk, DIN rail, wall-mounting, VESA", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60°C with 0.7m/s", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["industrial"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "L", "name": "reComputer Industrial J4011", "fullName": "[110110190]reComputer Industrial J4011", "series": null, "module": "Jetson Orin NX 8GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 8, "price": "999-1199", "priceNum": 999.0, "positioning": "工业级", "application": null, "interfaceCounts": {"usb3_count": 3, "usb_count": 3, "can_count": 1, "rs_count": 1, "mipi_count": 2, "hdmi_count": 1, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 1, "has_wifi": true, "has_tpm": true, "has_gpio": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.0 Type A", "powerConnector": "Terminal block 2 pin", "powerRange": "12-24V", "dimension": "159mm x 155mm x 57mm", "weight": "1.57kg", "installation": "Desk, DIN rail, wall-mounting, VESA", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60°C with 0.7m/s", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["industrial"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "117 TOPS", "video": "Encode: 1080p30 CPU; Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "M", "name": "reServer industrial J3010", "fullName": "[114110250]reServer industrial J3010", "series": "reServer Industrial J401", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "899-999", "priceNum": 899.0, "positioning": "工业级", "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "rs_count": 1, "hdmi_count": 1, "sata_count": 2, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 4, "has_lte": true, "has_tpm": true, "has_gpio": true, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1", "6.2"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 1.4", "powerConnector": "Terminal block 2 pin", "powerRange": "12V-36V", "dimension": "194.33mm x 187mm x 95.5mm", "weight": "2.8kg", "installation": "Desk, DIN rail, VESA", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60°C with 0.7m/s", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "N", "name": "reServer industrial J4011", "fullName": "[114110248]reServer industrial J4011", "series": null, "module": "Jetson Orin NX 8GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 8, "price": "1099-1299", "priceNum": 1099.0, "positioning": "工业级", "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "rs_count": 1, "hdmi_count": 1, "sata_count": 2, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 4, "has_lte": true, "has_tpm": true, "has_gpio": true, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 1.4", "powerConnector": "Terminal block 2 pin", "powerRange": "12V-36V", "dimension": "194.33mm x 187mm x 95.5mm", "weight": "2.8kg", "installation": "Desk, DIN rail, VESA", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60°C with 0.7m/s", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "117 TOPS", "video": "Encode: 1080p30 CPU; Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "O", "name": "reComputer Mini J3011", "fullName": "[102110999]reComputer Mini J3011", "series": "reComputer Mini J401", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "599", "priceNum": 599.0, "positioning": "商用级", "application": "cobot，AMR，service robot，飞控", "interfaceCounts": {"usb3_count": 3, "usb2_count": 1, "usb_count": 4, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": ["6.0", "6.2"], "jetpackFactory": "6", "ssd": "M.2 NVMe 2242 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30", "powerRange": "12-54V", "dimension": "63mm x 95mm x 42mm", "weight": "345g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -10, "tempMax": 50, "tempText": "-10℃~50℃", "ip": "none", "warranty": "1 Year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "P", "name": "reComputer Mini J4012", "fullName": "[102111001]reComputer Mini J4012", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "899", "priceNum": 899.0, "positioning": "商用级", "application": null, "interfaceCounts": {"usb3_count": 3, "usb2_count": 1, "usb_count": 4, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": ["6.0"], "jetpackFactory": "6", "ssd": "M.2 NVMe 2242 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30", "powerRange": "12-54V", "dimension": "63mm x 95mm x 42mm", "weight": "345g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -10, "tempMax": 50, "tempText": "-10℃~50℃", "ip": "none", "warranty": "1 Year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "Q", "name": "reComputer Mini J3011 with Extension", "fullName": "[114993551]reComputer Mini J3011 with Extension", "series": "reComputer Mini J401 with Extension", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "709", "priceNum": 709.0, "positioning": "商用级", "application": null, "interfaceCounts": {"usb3_count": 7, "usb2_count": 1, "usb_count": 8, "can_count": 2, "uart_count": 1, "i2c_count": 2, "spi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "eth_1g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": ["6.0", "6.2"], "jetpackFactory": "6", "ssd": "M.2 NVMe 2242 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30", "powerRange": "12-54V", "dimension": "63mm x 95mm x 66.7mm", "weight": "462g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -10, "tempMax": 50, "tempText": "-10℃~50℃", "ip": "none", "warranty": "1 Year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "R", "name": "reComputer Mini J4011 with Extension", "fullName": "[114993553]reComputer Mini J4011 with Extension", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "999", "priceNum": 999.0, "positioning": "商用级", "application": null, "interfaceCounts": {"usb3_count": 7, "usb2_count": 1, "usb_count": 8, "can_count": 2, "uart_count": 1, "i2c_count": 2, "spi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "eth_1g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": ["6.0"], "jetpackFactory": "6", "ssd": "M.2 NVMe 2242 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30", "powerRange": "12-54V", "dimension": "63mm x 95mm x 66.7mm", "weight": "462g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -10, "tempMax": 50, "tempText": "-10℃~50℃", "ip": "none", "warranty": "1 Year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "S", "name": "reComputer Super J3010", "fullName": "[114110311]reComputer Super J3010", "series": "reComputer Super J401", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "499-599", "priceNum": 499.0, "positioning": "半工业级", "application": "edge AI，视频分析，性能提升，室内室外场景", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "mipi_count": 4, "hdmi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "12V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 65, "tempText": "-20℃~65℃", "ip": "none", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "T", "name": "reComputer Super J4011", "fullName": "[114110313]reComputer Super J4011", "series": null, "module": "Jetson Orin NX 8GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 8, "price": "750-950", "priceNum": 750.0, "positioning": "半工业级", "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "mipi_count": 4, "hdmi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "12V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 65, "tempText": "-20℃~65℃(25W Mode)\n-20℃~60℃(MAXN Mode)", "ip": "none", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "117 TOPS", "video": "Encode: 1080p30 CPU; Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "U", "name": "reComputer Robotics J3010", "fullName": "[114110307]reComputer Robotics J3010", "series": "reComputer Robotics J401", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "520-620", "priceNum": 520.0, "positioning": "半工业级", "application": "机器人应用，AMR，cobot，机械狗，service robot，底盘机器人等", "interfaceCounts": {"usb3_count": 7, "usb_count": 7, "can_count": 5, "uart_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30(2+2)", "powerRange": "19-54V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 55, "tempText": "-20℃~55℃", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "V", "name": "reComputer Robotics J4011", "fullName": "[114110309]reComputer Robotics J4011", "series": null, "module": "Jetson Orin NX 8GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 8, "price": "790-999", "priceNum": 790.0, "positioning": "半工业级", "application": null, "interfaceCounts": {"usb3_count": 7, "usb_count": 7, "can_count": 5, "uart_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30(2+2)", "powerRange": "19-54V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 55, "tempText": "-20℃~55℃(25W Mode)\n-20℃~50℃(MAXN Mode)", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "117 TOPS", "video": "Encode: 1080p30 CPU; Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "W", "name": "reComputer Robotics J3010 with GMSL extension board", "fullName": "[114110328]reComputer Robotics J3010 with GMSL extension board", "series": "reComputer Robotics J401 with GMSL extension board", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": "550-650", "priceNum": 550.0, "positioning": "半工业级", "application": "机器人应用，AMR，cobot，机械狗，service robot，底盘机器人，人形机器人等", "interfaceCounts": {"usb3_count": 7, "usb_count": 7, "can_count": 5, "gmsl_count": 4, "uart_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30(2+2)", "powerRange": "19-54V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 55, "tempText": "-20℃~55℃", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": "MAX96712GTB/V", "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "X", "name": "reComputer Robotics J4011 with GMSL extension board", "fullName": "[114110330]reComputer Robotics J4011 with GMSL extension board", "series": null, "module": "Jetson Orin NX 8GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 8, "price": "820-1029", "priceNum": 820.0, "positioning": "半工业级", "application": "机器人应用，AMR，cobot，机械狗，service robot，底盘机器人，人形机器人等", "interfaceCounts": {"can_count": 5, "gmsl_count": 4, "uart_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "usb3_count": 7, "usb2_count": 0, "usb_count": 7, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30(2+2)", "powerRange": "19-54V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 55, "tempText": "-20℃~55℃(25W Mode)\n-20℃~50℃(MAXN Mode)", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": "MAX96712GTB/V", "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "117 TOPS", "video": "Encode: 1080p30 CPU; Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "Y", "name": "reComputer Rugged J3011", "fullName": "[100002634]reComputer Rugged J3011", "series": "reComputer Rugged J401", "module": "Jetson Orin Nano 8GB", "moduleKey": "orin_nano", "tops": 20, "memoryGb": 8, "price": null, "priceNum": null, "positioning": "工业级、部分车规级、IP66防护等级（防尘、防强力喷水）", "application": "船载、车载（后装/改装）、港口 AGV、野外巡检等", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 2, "rs_count": 1, "hdmi_count": 1, "uart_count": 1, "i2c_count": 1, "spi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 4, "has_wifi": true, "has_gpio": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "M12 A-Code 8-pin", "powerRange": "19-48V", "dimension": "250mm x 210mm x 98mm", "weight": null, "installation": "Desk, wall-mounting", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60C(with 0.7m/s airflow)", "ip": "ip66", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, RoHS, REACH", "gmslDeserializer": "-", "vehicleReady": true, "scenarios": ["rugged"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "6-core Arm Cortex-A78AE v8.2 64-bit", "memory": "8GB 128-bit LPDDR5, 68GB/s", "power": "7W – 15W – 25W", "aiPerformance": "67 TOPS (Orin Nano Super)", "video": "Encode: 1080p30 CPU; Decode: 1x 4K60, 5x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "Z", "name": "reComputer Rugged J4012", "fullName": "[100046979]reComputer Rugged J4012", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": null, "priceNum": null, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 2, "rs_count": 1, "hdmi_count": 1, "uart_count": 1, "i2c_count": 1, "spi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 4, "has_wifi": true, "has_gpio": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "M12 A-Code 8-pin", "powerRange": "19-48V", "dimension": "250mm x 210mm x 98mm", "weight": null, "installation": "Desk, wall-mounting", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60C(with 0.7m/s airflow)", "ip": "ip66", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, RoHS, REACH", "gmslDeserializer": "-", "vehicleReady": true, "scenarios": ["rugged"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "AE", "name": "reComputer Robotics J5011 with GMSL", "fullName": "[100076722]reComputer Robotics J5011 with GMSL", "series": "reComouter Robotics J501", "module": "Jetson AGX Orin 32GB", "moduleKey": "agx_orin_32", "tops": 200, "memoryGb": 32, "price": "1800.99", "priceNum": 1800.99, "positioning": "半工业级", "application": "人形机器人、底盘机器人、自动驾驶等", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 4, "rs_count": 2, "hdmi_count": 1, "i2c_count": 1, "spi_count": 1, "m2_keym_count": 2, "m2_keye_count": 1, "m2_keyb_count": 1, "eth_1g_count": 4, "eth_10g_count": 1, "has_wifi": true, "gmsl_count": 8, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2", "7.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "Terminal Block 2-pin", "powerRange": "DC 19V ~ 48V", "dimension": "210mm x 180mm x 87mm (with stands)", "weight": "2.95 kg", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10℃~60℃", "ip": "none", "warranty": "2 Years", "lifetime": null, "certifications": "CE, FCC, RoHS, REACH, KC", "gmslDeserializer": "MAX96712", "vehicleReady": true, "scenarios": ["robotics", "autonomous"], "moduleSpec": {"gpu": "1792-core NVIDIA Ampere, 56 Tensor Cores", "cpu": "12-core Arm Cortex-A78AE v8.2 64-bit", "memory": "32GB 256-bit LPDDR5, 204.8GB/s", "power": "15W – 40W", "aiPerformance": "200 TOPS", "video": "Encode: 1x 4K60 (H.265); Decode: 1x 8K30, 2x 4K60 (H.265)", "csi": "Up to 6 cameras, 16 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "AF", "name": "reComputer Robotics J5012 with GMSL", "fullName": "[100032662]reComputer Robotics J5012 with GMSL", "series": null, "module": "Jetson AGX Orin 64GB", "moduleKey": "agx_orin_64", "tops": 275, "memoryGb": 64, "price": "2830.99", "priceNum": 2830.99, "positioning": "半工业级", "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 4, "rs_count": 2, "gmsl_count": 8, "hdmi_count": 1, "i2c_count": 1, "spi_count": 1, "m2_keym_count": 2, "m2_keye_count": 1, "m2_keyb_count": 1, "eth_1g_count": 4, "eth_10g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2", "7.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "Terminal Block 2-pin", "powerRange": "DC 19V ~ 48V", "dimension": "210mm x 180mm x 87mm (with stands)", "weight": "2.95 kg", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10℃~60℃", "ip": "none", "warranty": "2 Years", "lifetime": null, "certifications": "CE, FCC, RoHS, REACH, KC", "gmslDeserializer": "MAX96712", "vehicleReady": true, "scenarios": ["robotics", "autonomous"], "moduleSpec": {"gpu": "2048-core NVIDIA Ampere, 64 Tensor Cores", "cpu": "12-core Arm Cortex-A78AE v8.2 64-bit", "memory": "64GB 256-bit LPDDR5, 204.8GB/s", "power": "15W – 60W", "aiPerformance": "275 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 1x 8K30, 3x 4K60 (H.265)", "csi": "Up to 6 cameras, 16 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "CBC", "name": "reComputer J101 Carrier Board", "fullName": "[102991694]reComputer J101 Carrier Board(w/o Power Adapter)", "series": "reComputer (Classic) J101", "type": "carrier", "module": "Jetson Nano 4GB", "moduleKey": "nano", "tops": 0.5, "memoryGb": 4, "price": "69", "priceNum": 69.0, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 1, "usb2_count": 2, "usb_count": 3, "rs_count": 1, "mipi_count": 2, "hdmi_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "has_wifi": true, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "-", "sdCard": "1x Micro SD card slot", "displayOut": "1x HDMI Type A", "powerConnector": "USB Type C", "powerRange": "5V/3A", "dimension": "100mm x 80mm", "weight": null, "installation": null, "cooling": null, "tempMin": 0, "tempMax": 60, "tempText": "0℃ ~ 60℃", "ip": "none", "warranty": null, "lifetime": "January 2027", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["devkit"], "moduleSpec": {"gpu": "128-core NVIDIA Maxwell, 128 CUDA cores", "cpu": "Quad-core ARM Cortex-A57", "memory": "4GB 64-bit LPDDR4, 25.6GB/s", "power": "5W – 10W", "aiPerformance": "472 GFLOPS", "video": "Encode: 1x 4K30 (H.265); Decode: 2x 4K60 (H.265)", "csi": "2x MIPI CSI-2 (D-PHY 1.1)"}, "moduleKeys": ["nano"]},
  {"id": "CBD", "name": "reComputer J202 Carrier Board", "fullName": "[102991695]reComputer J202 Carrier Board", "series": "reComputer (Classic) J202", "type": "carrier", "module": "Jetson TX2 NX / Jetson Nano 4GB / Jetson Xavier NX 8GB / Jetson Xavier NX 16GB", "moduleKey": "xavier_nx", "tops": 21, "memoryGb": 16, "price": "99(原价139) / 131", "priceNum": 99.0, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "rs_count": 1, "mipi_count": 2, "hdmi_count": 1, "dp_count": 1, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "1x M.2 KEY M PCIe", "sdCard": "-", "displayOut": "1x HDMI Type A; 1x DP", "powerConnector": "5525 Barrel DC Jack", "powerRange": "12V/2A", "dimension": "100mm x 80mm", "weight": null, "installation": null, "cooling": null, "tempMin": 0, "tempMax": 60, "tempText": "0℃ ~ 60℃", "ip": "none", "warranty": null, "lifetime": "January 2027", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["devkit"], "moduleSpec": {"gpu": "384-core NVIDIA Volta, 48 Tensor Cores", "cpu": "6-core NVIDIA Carmel Arm v8.2 64-bit", "memory": "8GB 128-bit LPDDR4x, 59.7GB/s", "power": "10W – 20W", "aiPerformance": "21 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 2x 8K30 (H.265)", "csi": "2x MIPI CSI-2, up to 6 cameras"}, "moduleKeys": ["nano", "tx2_nx", "xavier_nx", "xavier_nx_16"]},
  {"id": "CBE", "name": "A203 V2 Carrier Board", "fullName": "[103110043]A203v2 Carrier Board", "series": "A203 V2", "type": "carrier", "module": "Jetson TX2 NX / Jetson Nano 4GB / Jetson Xavier NX 8GB / Jetson Xavier NX 16GB", "moduleKey": "xavier_nx", "tops": 21, "memoryGb": 16, "price": "179", "priceNum": 179.0, "positioning": null, "application": null, "interfaceCounts": {"can_count": 1, "rs_count": 1, "mipi_count": 1, "hdmi_count": 1, "uart_count": 1, "i2c_count": 2, "spi_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "has_wifi": true, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "1x M.2 KEY M PCIe", "sdCard": "1x Micro SD Card Slot", "displayOut": "1x HDMI", "powerConnector": "DC Input Power TE Connector", "powerRange": "9-19V/3A", "dimension": "87mm x 52mm", "weight": "100g", "installation": null, "cooling": null, "tempMin": -25, "tempMax": 65, "tempText": "-25℃ ~ 65°", "ip": "none", "warranty": null, "lifetime": null, "certifications": "CE, FCC, RoHS", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["devkit"], "moduleSpec": {"gpu": "384-core NVIDIA Volta, 48 Tensor Cores", "cpu": "6-core NVIDIA Carmel Arm v8.2 64-bit", "memory": "8GB 128-bit LPDDR4x, 59.7GB/s", "power": "10W – 20W", "aiPerformance": "21 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 2x 8K30 (H.265)", "csi": "2x MIPI CSI-2, up to 6 cameras"}, "moduleKeys": ["nano", "tx2_nx", "xavier_nx", "xavier_nx_16"]},
  {"id": "CBF", "name": "A205 Carrier Board", "fullName": "[114110048]A205 Carrier Board", "series": "A205", "type": "carrier", "module": "Jetson TX2 NX / Jetson Nano 4GB / Jetson Xavier NX 8GB / Jetson Xavier NX 16GB", "moduleKey": "xavier_nx", "tops": 21, "memoryGb": 16, "price": "399", "priceNum": 399.0, "positioning": null, "application": null, "interfaceCounts": {"rs_count": 1, "mipi_count": 6, "hdmi_count": 2, "uart_count": 1, "i2c_count": 2, "spi_count": 2, "sata_count": 5, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "-", "sdCard": "1x TF_Card slot", "displayOut": "2x HDMI", "powerConnector": "4.2mm pitch 4-pin DC connector", "powerRange": "13-19V/8A", "dimension": "170mm x 100mm", "weight": null, "installation": null, "cooling": null, "tempMin": -25, "tempMax": 80, "tempText": "-25℃~80℃", "ip": "none", "warranty": null, "lifetime": null, "certifications": "CE, FCC, RoHS", "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "384-core NVIDIA Volta, 48 Tensor Cores", "cpu": "6-core NVIDIA Carmel Arm v8.2 64-bit", "memory": "8GB 128-bit LPDDR4x, 59.7GB/s", "power": "10W – 20W", "aiPerformance": "21 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 2x 8K30 (H.265)", "csi": "2x MIPI CSI-2, up to 6 cameras"}, "moduleKeys": ["nano", "tx2_nx", "xavier_nx", "xavier_nx_16"]},
  {"id": "CBG", "name": "A205E Carrier Board", "fullName": "[102110774]A205E Carrier Board", "series": "A205E", "type": "carrier", "module": "Jetson TX2 NX / Jetson Nano 4GB / Jetson Xavier NX 8GB / Jetson Xavier NX 16GB", "moduleKey": "xavier_nx", "tops": 21, "memoryGb": 16, "price": "416", "priceNum": 416.0, "positioning": null, "application": null, "interfaceCounts": {"can_count": 1, "rs_count": 1, "mipi_count": 1, "hdmi_count": 2, "uart_count": 1, "i2c_count": 2, "spi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "1x M.2 KEY M PCIe", "sdCard": "1x Micro SD Card Slot", "displayOut": "2x HDMI", "powerConnector": "DC Power Jack", "powerRange": "9-36V/8A", "dimension": "115mm x 105mm", "weight": null, "installation": null, "cooling": null, "tempMin": -25, "tempMax": 80, "tempText": "-25℃~80℃", "ip": "none", "warranty": null, "lifetime": null, "certifications": null, "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "384-core NVIDIA Volta, 48 Tensor Cores", "cpu": "6-core NVIDIA Carmel Arm v8.2 64-bit", "memory": "8GB 128-bit LPDDR4x, 59.7GB/s", "power": "10W – 20W", "aiPerformance": "21 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 2x 8K30 (H.265)", "csi": "2x MIPI CSI-2, up to 6 cameras"}, "moduleKeys": ["nano", "tx2_nx", "xavier_nx", "xavier_nx_16"]},
  {"id": "CBH", "name": "reComputer J401 Carrier Board", "fullName": "[102110769]reComputer J401 Carrier Board", "series": "reComputer (Classic) J401", "type": "carrier", "module": "Jetson Orin Nano 4GB / Jetson Orin Nano 8GB / Jetson Orin NX 8GB / Jetson Orin NX 16GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 16, "price": "149 / 141", "priceNum": 149.0, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "rs_count": 1, "mipi_count": 2, "hdmi_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "1x M.2 KEY M PCIe", "sdCard": "-", "displayOut": "1x HDMI", "powerConnector": "Barrel DC Jack", "powerRange": "12V/5A", "dimension": "100mm x 80mm", "weight": null, "installation": null, "cooling": null, "tempMin": -10, "tempMax": 60, "tempText": "-10℃~60℃", "ip": "none", "warranty": null, "lifetime": null, "certifications": "CE, FCC, UKCA, RoHS, KC", "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["devkit", "edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "moduleKeys": ["orin_nano", "orin_nx", "orin_nx_16"]},
  {"id": "CBI", "name": "reComputer Mini Carrier Board", "fullName": "[114993592]reComputer Mini Carrier Board", "series": "reComputer (Mini)", "type": "carrier", "module": "Jetson Orin Nano 4GB / Jetson Orin Nano 8GB / Jetson Orin NX 8GB / Jetson Orin NX 16GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 16, "price": "89", "priceNum": 89.0, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 1, "usb2_count": 1, "usb_count": 2, "rs_count": 1, "dp_count": 1, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "has_wifi": true, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": false, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "1x M.2 KEY M PCIe", "sdCard": "-", "displayOut": "1x DP 1.4 (included in Type-C conenctor)", "powerConnector": "1 x XT30 Connector", "powerRange": "12-54V DC", "dimension": "56mm x 88mm", "weight": "80g", "installation": null, "cooling": null, "tempMin": -10, "tempMax": 50, "tempText": "-10℃~50℃", "ip": "none", "warranty": "1 Year", "lifetime": null, "certifications": "CE, FCC, REACH, RoHS", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "moduleKeys": ["orin_nano", "orin_nx", "orin_nx_16"]},
  {"id": "CBJ", "name": "reComputer Mini Extension Board", "fullName": "[114993593]reComputer Mini Extension Board", "series": "reComputer (Mini) Extension Board", "type": "carrier", "module": "reComputer Mini Extension Board（扩展板，无算力）", "moduleKey": "extension", "tops": 0, "memoryGb": 0, "price": "59", "priceNum": 59.0, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 2, "rs_count": 1, "i2c_count": 2, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": false, "has_rtc": false}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "-", "sdCard": "-", "displayOut": "-", "powerConnector": "-", "powerRange": "-", "dimension": "56mm x 88mm", "weight": "75g", "installation": null, "cooling": null, "tempMin": -10, "tempMax": 50, "tempText": "-10℃~50℃", "ip": "none", "warranty": "1 Year", "lifetime": null, "certifications": "CE, FCC, REACH, RoHS", "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["robotics"], "moduleSpec": {"gpu": "—", "cpu": "—", "memory": "—", "power": "—", "aiPerformance": "无算力（扩展板）", "video": "—", "csi": "—"}, "moduleKeys": ["extension"]},
  {"id": "CBK", "name": "reComputer Robotics J401 Carrier Board", "fullName": "[102110769]reComputer J401 Carrier Board", "series": "reComputer (Robotics) J401", "type": "carrier", "module": "Jetson Orin Nano 4GB / Jetson Orin Nano 8GB / Jetson Orin NX 8GB / Jetson Orin NX 16GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 16, "price": "189", "priceNum": 189.0, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 7, "usb_count": 7, "can_count": 5, "rs_count": 1, "gmsl_count": 4, "dp_count": 1, "uart_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "eth_1g_count": 2, "has_wifi": true, "has_gpio": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "1x M.2 KEY M PCIe", "sdCard": "-", "displayOut": "1x DP1.4(Type C Host)", "powerConnector": "XT30(2+2) (XT30 to 5525 DC Jack Cable included)", "powerRange": "19-54V", "dimension": "115mm x 115mm", "weight": "200g", "installation": null, "cooling": null, "tempMin": -20, "tempMax": 60, "tempText": "-20℃~60℃(25W Mode)\n-20℃~55℃(MAXN Mode)\n(with reComputer Robotics heat sink with fan)", "ip": "none", "warranty": "2 Years", "lifetime": null, "certifications": "RoHS, REACH, CE, FCC, UKCA, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "moduleKeys": ["orin_nano", "orin_nx", "orin_nx_16"]},
  {"id": "CBL", "name": "A603 Carrier Board", "fullName": "[102110840]A603 Carrier Board", "series": "A603", "type": "carrier", "module": "Jetson Orin Nano 4GB / Jetson Orin Nano 8GB / Jetson Orin NX 8GB / Jetson Orin NX 16GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 16, "price": "170", "priceNum": 170.0, "positioning": null, "application": null, "interfaceCounts": {"has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": false}, "jetpackVersions": [], "jetpackFactory": "", "ssd": null, "sdCard": null, "displayOut": null, "powerConnector": null, "powerRange": null, "dimension": null, "weight": null, "installation": null, "cooling": null, "tempMin": 0, "tempMax": null, "tempText": null, "ip": "none", "warranty": null, "lifetime": null, "certifications": null, "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "moduleKeys": ["orin_nano", "orin_nx", "orin_nx_16"]},
  {"id": "CBM", "name": "A607 Carrier Board", "fullName": "[102110841]A607 Carrier Board", "series": "A607", "type": "carrier", "module": "Jetson Orin Nano 4GB / Jetson Orin Nano 8GB / Jetson Orin NX 8GB / Jetson Orin NX 16GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 16, "price": "419", "priceNum": 419.0, "positioning": null, "application": null, "interfaceCounts": {"has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": false}, "jetpackVersions": [], "jetpackFactory": "", "ssd": null, "sdCard": null, "displayOut": null, "powerConnector": null, "powerRange": null, "dimension": null, "weight": null, "installation": null, "cooling": null, "tempMin": 0, "tempMax": null, "tempText": null, "ip": "none", "warranty": null, "lifetime": null, "certifications": null, "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "moduleKeys": ["orin_nano", "orin_nx", "orin_nx_16"]},
  {"id": "CBN", "name": "A608 Carrier Board", "fullName": "[105110001]A608 Carrier Board", "series": "A608", "type": "carrier", "module": "Jetson Orin Nano 4GB / Jetson Orin Nano 8GB / Jetson Orin NX 8GB / Jetson Orin NX 16GB", "moduleKey": "orin_nx", "tops": 100, "memoryGb": 16, "price": "259", "priceNum": 259.0, "positioning": null, "application": null, "interfaceCounts": {"has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": false}, "jetpackVersions": [], "jetpackFactory": "", "ssd": null, "sdCard": null, "displayOut": null, "powerConnector": null, "powerRange": null, "dimension": null, "weight": null, "installation": null, "cooling": null, "tempMin": 0, "tempMax": null, "tempText": null, "ip": "none", "warranty": null, "lifetime": null, "certifications": null, "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "moduleKeys": ["orin_nano", "orin_nx", "orin_nx_16"]},
  {"id": "CBO", "name": "reServer Industrial J501 Carrier Board", "fullName": "[102991854] reServer Industrial J501-Carrier board", "series": "reServer Industrial J501", "type": "carrier", "module": "Jetson AGX Orin 32GB / Jetson AGX Orin 64GB", "moduleKey": "agx_orin_64", "tops": 275, "memoryGb": 64, "price": "440.99", "priceNum": 440.99, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "rs_count": 1, "gmsl_count": 8, "hdmi_count": 1, "sata_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "has_wifi": true, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": [], "jetpackFactory": "", "ssd": "1x M.2 KEY M PCIe", "sdCard": "-", "displayOut": "1x HDMI 2.1 Type A", "powerConnector": "DC Terminal block 2 pin", "powerRange": "12V-36V", "dimension": "176 x 163mm", "weight": "225g", "installation": null, "cooling": null, "tempMin": -20, "tempMax": 60, "tempText": "-20~60℃", "ip": "none", "warranty": null, "lifetime": null, "certifications": null, "gmslDeserializer": "MAX96724RGTNV", "vehicleReady": false, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "2048-core NVIDIA Ampere, 64 Tensor Cores", "cpu": "12-core Arm Cortex-A78AE v8.2 64-bit", "memory": "64GB 256-bit LPDDR5, 204.8GB/s", "power": "15W – 60W", "aiPerformance": "275 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 1x 8K30, 3x 4K60 (H.265)", "csi": "Up to 6 cameras, 16 lanes MIPI CSI-2"}, "moduleKeys": ["agx_orin_32", "agx_orin_64"]},
  {"id": "CBP", "name": "reServer Industrial J501 GMSL Extension Board", "fullName": "[102991855]reServer Industrial J501-GMSL extension board", "series": "reServer Industrial J501 - GMSL Extension Board", "type": "carrier", "module": "reServer Industrial J501 GMSL Extension Board（扩展板，无算力）", "moduleKey": "extension", "tops": 0, "memoryGb": 0, "price": "139", "priceNum": 139.0, "positioning": null, "application": null, "interfaceCounts": {"has_sim": true, "has_lte": false, "has_5g": false, "has_usb_c": false, "has_rtc": false}, "jetpackVersions": [], "jetpackFactory": "", "ssd": null, "sdCard": null, "displayOut": null, "powerConnector": null, "powerRange": null, "dimension": null, "weight": null, "installation": null, "cooling": null, "tempMin": 0, "tempMax": null, "tempText": null, "ip": "none", "warranty": null, "lifetime": null, "certifications": null, "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "—", "cpu": "—", "memory": "—", "power": "—", "aiPerformance": "无算力（扩展板）", "video": "—", "csi": "—"}, "moduleKeys": ["extension"]},
  {"id": "CBQ", "name": "reComputer Mini J501 GMSL Extension Board", "fullName": "[100020039] reComputer Mini J501--GMSL extension board", "series": "reComputer Mini J501", "type": "carrier", "module": "Jetson AGX Orin 32GB / Jetson AGX Orin 64GB", "moduleKey": "agx_orin_64", "tops": 275, "memoryGb": 64, "price": "359", "priceNum": 359.0, "positioning": null, "application": null, "interfaceCounts": {"usb3_count": 3, "usb_count": 3, "can_count": 2, "rs_count": 1, "hdmi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "eth_10g_count": 1, "has_wifi": true, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "", "ssd": "1x M.2 Key M", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "1 x XT30 Connector", "powerRange": "19-48V DC", "dimension": "110mm x 110mm", "weight": "90g", "installation": null, "cooling": null, "tempMin": -10, "tempMax": 60, "tempText": "-10℃~60℃ （with thermal grease)\n\n-10℃~55℃ （with thermal pad)", "ip": "none", "warranty": "2 Year", "lifetime": null, "certifications": "CE, FCC, REACH, RoHS", "gmslDeserializer": "MAX96712", "vehicleReady": false, "scenarios": ["robotics", "autonomous"], "moduleSpec": {"gpu": "2048-core NVIDIA Ampere, 64 Tensor Cores", "cpu": "12-core Arm Cortex-A78AE v8.2 64-bit", "memory": "64GB 256-bit LPDDR5, 204.8GB/s", "power": "15W – 60W", "aiPerformance": "275 TOPS", "video": "Encode: 2x 4K60 (H.265); Decode: 1x 8K30, 3x 4K60 (H.265)", "csi": "Up to 6 cameras, 16 lanes MIPI CSI-2"}, "moduleKeys": ["agx_orin_32", "agx_orin_64"]},
  {"id": "CBR", "name": "reComputer J601 Carrier Board", "fullName": "暂无申请", "series": "reComputer J601", "type": "carrier", "module": "Jetson AGX Thor 64GB / Jetson AGX Thor 128GB", "moduleKey": "agx_thor", "tops": 2000, "memoryGb": 128, "price": null, "priceNum": null, "positioning": "半工业级", "application": "人形机器人", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "rs_count": 1, "gmsl_count": 4, "hdmi_count": 1, "i2c_count": 1, "spi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "eth_10g_count": 1, "has_wifi": true, "has_gpio": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["7.1"], "jetpackFactory": "", "ssd": "1x M.2 Key M", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "1 x XT30 Connector", "powerRange": "19-48V DC", "dimension": "168mm x 155mm", "weight": null, "installation": null, "cooling": null, "tempMin": -10, "tempMax": 60, "tempText": "-10°C ~ +60°C", "ip": "none", "warranty": "2 Year", "lifetime": null, "certifications": "CE,FCC,RoHS", "gmslDeserializer": null, "vehicleReady": false, "scenarios": ["robotics", "autonomous"], "moduleSpec": {"gpu": "2560-core NVIDIA Blackwell, Tensor Cores", "cpu": "14-core Arm Neoverse-V3AE 64-bit", "memory": "128/64GB LPDDR5X", "power": "40W – 130W", "aiPerformance": "2070 TFLOPS", "video": "—", "csi": "Up to 20 cameras via HSB"}, "moduleKeys": ["agx_thor"]},
  {"id": "G2", "name": "reComputer J4012", "fullName": "[110110145]reComputer J4012", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "699-899", "priceNum": 699.0, "positioning": "商用级", "application": "edge AI，视频分析，大语言模型", "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "mipi_count": 2, "hdmi_count": 1, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "eth_1g_count": 1, "has_wifi": true, "has_lte": false, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "9-19V", "dimension": "130mm x120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10~60 °C", "ip": "none", "warranty": "1 year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "I2", "name": "reComputer J4012B", "fullName": "[114993489]reComputer J4012B", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "705-905", "priceNum": 705.0, "positioning": "商用级", "application": null, "interfaceCounts": {"usb3_count": 2, "usb_count": 2, "can_count": 1, "mipi_count": 2, "hdmi_count": 1, "uart_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "eth_1g_count": 1, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "9-19V", "dimension": "130mm x120mm x 58.5mm", "weight": "451.9g", "installation": "Desk", "cooling": "Active", "tempMin": -10, "tempMax": 60, "tempText": "-10~60 °C", "ip": "none", "warranty": "1 year", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "L2", "name": "reComputer Industrial J4012", "fullName": "[110110191]reComputer Industrial J4012", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "999-1199", "priceNum": 999.0, "positioning": "工业级", "application": null, "interfaceCounts": {"usb3_count": 3, "usb_count": 3, "can_count": 1, "rs_count": 1, "mipi_count": 2, "hdmi_count": 1, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 1, "has_wifi": true, "has_tpm": true, "has_gpio": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.0 Type A", "powerConnector": "Terminal block 2 pin", "powerRange": "12-24V", "dimension": "159mm x 155mm x 57mm", "weight": "1.57kg", "installation": "Desk, DIN rail, wall-mounting, VESA", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60°C with 0.7m/s", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["industrial"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "N2", "name": "reServer industrial J4012", "fullName": "[114110247]reServer industrial J4012", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "1099-1299", "priceNum": 1099.0, "positioning": "工业级", "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "rs_count": 1, "hdmi_count": 1, "sata_count": 2, "m2_keym_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 1, "poe_count": 4, "has_lte": true, "has_tpm": true, "has_gpio": true, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["5.1.1", "5.1.3", "6.0", "6.1"], "jetpackFactory": "5.1.3", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 1.4", "powerConnector": "Terminal block 2 pin", "powerRange": "12V-36V", "dimension": "194.33mm x 187mm x 95.5mm", "weight": "2.8kg", "installation": "Desk, DIN rail, VESA", "cooling": "Passive", "tempMin": -20, "tempMax": 60, "tempText": "-20 ~ 60°C with 0.7m/s", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["industrial", "edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "T2", "name": "reComputer Super J4012", "fullName": "[114110314]reComputer Super J4012", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "750-950", "priceNum": 750.0, "positioning": "半工业级", "application": null, "interfaceCounts": {"usb3_count": 4, "usb_count": 4, "can_count": 1, "mipi_count": 4, "hdmi_count": 1, "m2_keym_count": 1, "m2_keye_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": true, "has_5g": false, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x HDMI 2.1", "powerConnector": "5525 Barrel DC Jack", "powerRange": "12V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 65, "tempText": "-20℃~65℃(25W Mode)\n-20℃~60℃(MAXN Mode)", "ip": "none", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["edge_ai"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "V2", "name": "reComputer Robotics J4012", "fullName": "[114110310]reComputer Robotics J4012", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "790-999", "priceNum": 790.0, "positioning": "半工业级", "application": null, "interfaceCounts": {"usb3_count": 7, "usb_count": 7, "can_count": 5, "uart_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30(2+2)", "powerRange": "19-54V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 55, "tempText": "-20℃~55℃(25W Mode)\n-20℃~50℃(MAXN Mode)", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": null, "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
  {"id": "X2", "name": "reComputer Robotics J4012 with GMSL extension board", "fullName": "[114110331]reComputer Robotics J4012 with GMSL extension board", "series": null, "module": "Jetson Orin NX 16GB", "moduleKey": "orin_nx_16", "tops": 100, "memoryGb": 16, "price": "820-1029", "priceNum": 820.0, "positioning": "半工业级", "application": "机器人应用，AMR，cobot，机械狗，service robot，底盘机器人，人形机器人等", "interfaceCounts": {"can_count": 5, "gmsl_count": 4, "uart_count": 1, "i2c_count": 2, "m2_keym_count": 1, "m2_keye_count": 1, "m2_keyb_count": 1, "has_sim": true, "eth_1g_count": 2, "has_wifi": true, "usb3_count": 7, "usb2_count": 0, "usb_count": 7, "has_lte": false, "has_5g": true, "has_usb_c": true, "has_rtc": true}, "jetpackVersions": ["6.2"], "jetpackFactory": "6.2", "ssd": "M.2 NVMe 2280 SSD 128G included", "sdCard": "-", "displayOut": "1x USB 3.2 Type-C (Host/DP 1.4)", "powerConnector": "XT30(2+2)", "powerRange": "19-54V", "dimension": "130mm x 120mm x 66mm", "weight": "1110g", "installation": "Desk, wall-mounting", "cooling": "Active", "tempMin": -20, "tempMax": 55, "tempText": "-20℃~55℃(25W Mode)\n-20℃~50℃(MAXN Mode)", "ip": "ip40", "warranty": "2 Years", "lifetime": "January 2032", "certifications": "CE, FCC, UKCA, RoHS, REACH, KC", "gmslDeserializer": "MAX96712GTB/V", "vehicleReady": true, "scenarios": ["robotics"], "moduleSpec": {"gpu": "1024-core NVIDIA Ampere, 32 Tensor Cores", "cpu": "8-core Arm Cortex-A78AE v8.2 64-bit", "memory": "16GB 128-bit LPDDR5, 102.4GB/s", "power": "10W – 25W – 40W", "aiPerformance": "157 TOPS", "video": "Decode: 1x 8K30, 2x 4K60, 9x 1080p60 (H.265)", "csi": "Up to 4 cameras, 8 lanes MIPI CSI-2"}, "type": "machine"},
];

const MODULE_KEYS = [
  'nano', 'tx2_nx', 'xavier_nx', 'orin_nano', 'orin_nx', 'orin_nx_16', 'agx_orin_32', 'agx_orin_64', 'agx_thor',
];
const TOPS_STEPS = [0, 20, 40, 100, 200, 275, 2000];
const MEMORY_STEPS = [0, 4, 8, 16, 32, 64];
const TEMP_STEPS = [0, -10, -20, -25];
const IFACE_KEYS = [
  'CAN', 'RS485', 'GMSL', 'MIPI', 'SATA', 'GPIO', 'UART', 'I2C', 'SPI',
  'HDMI', 'DP', 'USB3', 'USB_C', 'WIFI', 'LTE4G', '5G', 'SIM', 'POE', 'ETH1G', 'ETH10G', 'RTC', 'TPM',
];

const PRESETS = {
  plant_pest: {
    scenario: 'autonomous', minTops: 100, requiredIfaces: ['GMSL', 'CAN', 'RS485', '5G'],
    minIp: 'none', minTemp: -10, vehiclePower: true,
  },
  industrial_ai: {
    scenario: 'industrial', minTops: 20, requiredIfaces: ['RS485', 'CAN', 'POE'],
    minIp: 'ip40', minTemp: -20, vehiclePower: true,
  },
  robotics: {
    scenario: 'robotics', minTops: 20, requiredIfaces: ['CAN', 'UART', 'I2C'],
    minIp: 'none', minTemp: -10, vehiclePower: true,
  },
  in_vehicle: {
    scenario: 'rugged', minTops: 20, requiredIfaces: ['CAN', 'POE'],
    minIp: 'ip66', minTemp: -20, vehiclePower: true,
  },
  devkit: {
    scenario: 'devkit', minTops: 0, requiredIfaces: [],
    minIp: 'none', minTemp: 0, vehiclePower: false,
  },
};

const TEXT = {
  zh: {
    title: 'Jetson 选型工具',
    intro:
      '不知道选哪款？直接搜索型号或 SKU，或点击场景卡片一键预设条件；结果按匹配度排序，可勾选最多 4 款产品进行对比。',
    searchPlaceholder: '搜索型号 / SKU / 关键词，如 J5012、Rugged、GMSL',
    presetTitle: '场景速选',
    presets: {
      plant_pest: { title: '植物病虫害 / 无人机巡检', desc: 'AGX 级算力 + 多路 GMSL 相机 + CAN/RS485 + 5G + 车载宽压' },
      industrial_ai: { title: '工业视觉检测', desc: 'IP40 防护 + 宽温 + RS485/CAN/PoE 工业接口' },
      robotics: { title: '机器人 / AMR', desc: '多路 CAN + UART/I2C + 宽压供电' },
      in_vehicle: { title: '车载 / 户外', desc: 'IP66 + M12 车规连接器 + PoE + 宽温' },
      devkit: { title: '开发学习 / 原型', desc: '入门预算，快速上手边缘 AI' },
      custom: { title: '自定义', desc: '清空预设，手动组合筛选条件' },
    },
    filters: {
      type: '产品类型',
      typeAll: '全部',
      typeMachine: '整机',
      typeCarrier: '载板',
      module: '模组',
      aiPerf: '最低 AI 算力 (TOPS)',
      memory: '最小内存 (GB)',
      storage: '存储扩展',
      ifaces: '必备接口',
      env: '防护与环境',
      jetpack: 'JetPack 版本',
      scenario: '应用场景',
      scenarioAny: '不限',
      ip: '最低防护等级',
      temp: '最低工作温度',
      vehicle: '需要 12/24V 车载电源',
      any: '不限',
      m2one: '≥1× M.2 Key M',
      m2two: '≥2× M.2 Key M',
      sata: '需要 SATA',
    },
    modules: {
      nano: 'Jetson Nano',
      tx2_nx: 'Jetson TX2 NX',
      xavier_nx: 'Jetson Xavier NX',
      orin_nano: 'Jetson Orin Nano',
      orin_nx: 'Jetson Orin NX 8GB',
      orin_nx_16: 'Jetson Orin NX 16GB',
      agx_orin_32: 'AGX Orin 32GB',
      agx_orin_64: 'AGX Orin 64GB',
      agx_thor: 'AGX Thor（载板）',
    },
    scenarios: {
      devkit: '入门/开发套件',
      edge_ai: '边缘 AI/视频分析',
      industrial: '工业控制',
      robotics: '机器人/AMR',
      rugged: '车载/户外/严苛环境',
      autonomous: '自动驾驶/高端研发',
    },
    ifaces: {
      CAN: 'CAN', RS485: 'RS485/232', GMSL: 'GMSL', MIPI: 'MIPI CSI', SATA: 'SATA',
      GPIO: 'GPIO', UART: 'UART', I2C: 'I2C', SPI: 'SPI', HDMI: 'HDMI', DP: 'DP',
      USB3: 'USB 3.x', USB_C: 'USB Type-C', WIFI: 'WiFi/BT', LTE4G: '4G/LTE 蜂窝', '5G': '5G 蜂窝', SIM: 'SIM 卡槽', POE: 'PoE 供电', RTC: 'RTC',
      ETH1G: '1G 以太网', ETH10G: '10G 以太网', TPM: 'TPM',
    },
    results: '推荐结果',
    sortedByMatch: '按匹配度排序',
    resultCount: (n) => `共 ${n} 款产品`,
    resetAll: '重置全部筛选',
    badges: { best: '最佳匹配', second: '次选', third: '备选' },
    specs: {
      module: '模组', tops: 'AI 算力', memory: '内存', temp: '工作温度',
      ip: '防护', jetpack: 'JetPack', score: '匹配度', normal: '普通',
    },
    reasons: {
      aiOk: 'AI 算力满足', ifaceOk: '接口全部满足', ipOk: '防护等级满足', tempOk: '温度范围满足',
      vehicleOk: '支持车载电源', scenarioOk: '场景匹配', jetpackOk: 'JetPack 版本满足',
    },
    gaps: {
      aiGap: 'AI 算力不足', ifaceGap: '缺少接口', ipGap: '防护等级不足', tempGap: '低温不达标',
      vehicleGap: '不支持车载电源', scenarioGap: '场景不匹配', jetpackGap: 'JetPack 版本不支持',
    },
    card: { expand: '查看详情', collapse: '收起', addCompare: '加入对比' },
    detail: {
      ifaces: '完整接口清单', module: '模组规格', jetpack: 'JetPack 支持', factory: '出厂固件',
      supported: '支持版本', power: '供电与结构', powerConn: '电源接口', powerRange: '供电范围',
      dimension: '尺寸', weight: '重量', install: '安装方式', cooling: '散热', other: '其他信息',
      warranty: '保修', lifetime: '供货至', cert: '认证', application: '应用领域',
      gmslChip: 'GMSL 解串器', none: '—',
    },
    compare: {
      btn: '开始对比', clear: '清空', title: '产品对比', close: '关闭', remove: '移除',
      maxHint: '最多选择 4 款产品', diffHint: '高亮行表示所选产品之间存在差异',
      selected: (n) => `已选 ${n} / 4 款`,
    },
    cRows: {
      score: '匹配度', module: '模组', tops: 'AI 算力', aiPerf: '模组 AI 性能',
      gpu: 'GPU', cpu: 'CPU', memGb: '内存容量', memSpec: '内存规格', power: '模组功耗',
      video: '视频编解码', csi: 'CSI 摄像头', gmsl: 'GMSL', can: 'CAN', rs: 'RS485/232',
      uart: 'UART', i2c: 'I2C', spi: 'SPI', usb3: 'USB 3.x', usb2: 'USB 2.0', mipi: 'MIPI CSI',
      poe: 'PoE', eth: '以太网', m2: 'M.2 Key M', sata: 'SATA', storage: '随机存储',
      connectivity: '无线/蜂窝', sim: 'SIM 卡', jetpack: 'JetPack 版本', temp: '工作温度',
      ip: '防护等级', vehicle: '车载电源', powerSupply: '整机供电', dimension: '尺寸',
      weight: '重量', install: '安装方式', cooling: '散热', warranty: '保修', lifetime: '供货周期',
      scenarios: '适用场景',
    },
    empty: '没有符合条件的产品，试试放宽筛选条件。',
  },
  en: {
    title: 'Jetson Product Selector',
    intro:
      "Not sure which one to pick? Search by model or SKU, or click a scenario card to apply a preset. Results are ranked by match score; select up to 4 products to compare.",
    searchPlaceholder: 'Search model / SKU / keyword, e.g. J5012, Rugged, GMSL',
    presetTitle: 'Quick Scenario Pick',
    presets: {
      plant_pest: { title: 'Plant Pest / Drone Inspection', desc: 'AGX-class compute + multi GMSL cameras + CAN/RS485 + 5G + wide-range vehicle power' },
      industrial_ai: { title: 'Industrial Vision', desc: 'IP40 + wide temp + RS485/CAN/PoE industrial I/O' },
      robotics: { title: 'Robotics / AMR', desc: 'Multi CAN + UART/I2C + wide-range power' },
      in_vehicle: { title: 'In-Vehicle / Outdoor', desc: 'IP66 + M12 connectors + PoE + wide temp' },
      devkit: { title: 'Learning / Prototyping', desc: 'Entry-level budget to start edge AI' },
      custom: { title: 'Custom', desc: 'Clear presets and combine filters manually' },
    },
    filters: {
      type: 'Product Type',
      typeAll: 'All',
      typeMachine: 'Machine',
      typeCarrier: 'Carrier Board',
      module: 'Module',
      aiPerf: 'Min AI Performance (TOPS)',
      memory: 'Min Memory (GB)',
      storage: 'Storage Expansion',
      ifaces: 'Required Interfaces',
      env: 'Protection & Environment',
      jetpack: 'JetPack Version',
      scenario: 'Scenario',
      scenarioAny: 'Any',
      ip: 'Min IP Rating',
      temp: 'Min Operating Temp',
      vehicle: 'Need 12/24V vehicle power',
      any: 'Any',
      m2one: '≥1× M.2 Key M',
      m2two: '≥2× M.2 Key M',
      sata: 'SATA required',
    },
    modules: {
      nano: 'Jetson Nano',
      tx2_nx: 'Jetson TX2 NX',
      xavier_nx: 'Jetson Xavier NX',
      orin_nano: 'Jetson Orin Nano',
      orin_nx: 'Jetson Orin NX 8GB',
      orin_nx_16: 'Jetson Orin NX 16GB',
      agx_orin_32: 'AGX Orin 32GB',
      agx_orin_64: 'AGX Orin 64GB',
      agx_thor: 'AGX Thor (carrier)',
    },
    scenarios: {
      devkit: 'Entry / DevKit',
      edge_ai: 'Edge AI / Video Analytics',
      industrial: 'Industrial Control',
      robotics: 'Robotics / AMR',
      rugged: 'In-Vehicle / Outdoor / Harsh',
      autonomous: 'Autonomous / High-end R&D',
    },
    ifaces: {
      CAN: 'CAN', RS485: 'RS485/232', GMSL: 'GMSL', MIPI: 'MIPI CSI', SATA: 'SATA',
      GPIO: 'GPIO', UART: 'UART', I2C: 'I2C', SPI: 'SPI', HDMI: 'HDMI', DP: 'DP',
      USB3: 'USB 3.x', USB_C: 'USB Type-C', WIFI: 'WiFi/BT', LTE4G: '4G/LTE cellular', '5G': '5G cellular', SIM: 'SIM slot', POE: 'PoE', RTC: 'RTC',
      ETH1G: '1G Ethernet', ETH10G: '10G Ethernet', TPM: 'TPM',
    },
    results: 'Recommendations',
    sortedByMatch: 'sorted by match score',
    resultCount: (n) => `${n} product${n === 1 ? '' : 's'}`,
    resetAll: 'Reset all filters',
    badges: { best: 'Best Match', second: 'Runner-up', third: 'Alternative' },
    specs: {
      module: 'Module', tops: 'AI Perf', memory: 'Memory', temp: 'Temp',
      ip: 'IP', jetpack: 'JetPack', score: 'Match', normal: 'Standard',
    },
    reasons: {
      aiOk: 'AI performance OK', ifaceOk: 'All interfaces OK', ipOk: 'IP rating OK', tempOk: 'Temp range OK',
      vehicleOk: 'Vehicle power OK', scenarioOk: 'Scenario match', jetpackOk: 'JetPack OK',
    },
    gaps: {
      aiGap: 'AI performance insufficient', ifaceGap: 'Missing interfaces', ipGap: 'IP rating insufficient',
      tempGap: 'Low temp insufficient', vehicleGap: 'No 12/24V vehicle power', scenarioGap: 'Scenario mismatch',
      jetpackGap: 'JetPack unsupported',
    },
    card: { expand: 'Details', collapse: 'Collapse', addCompare: 'Compare' },
    detail: {
      ifaces: 'Full Interface List', module: 'Module Specs', jetpack: 'JetPack Support', factory: 'Factory firmware',
      supported: 'Supported versions', power: 'Power & Mechanical', powerConn: 'Power connector', powerRange: 'Power range',
      dimension: 'Dimension', weight: 'Weight', install: 'Installation', cooling: 'Cooling', other: 'Other Info',
      warranty: 'Warranty', lifetime: 'Available until', cert: 'Certifications', application: 'Applications',
      gmslChip: 'GMSL deserializer', none: '—',
    },
    compare: {
      btn: 'Compare', clear: 'Clear', title: 'Product Comparison', close: 'Close', remove: 'Remove',
      maxHint: 'Select up to 4 products', diffHint: 'Highlighted rows differ across selected products',
      selected: (n) => `${n} / 4 selected`,
    },
    cRows: {
      score: 'Match score', module: 'Module', tops: 'AI Performance', aiPerf: 'Module AI Perf',
      gpu: 'GPU', cpu: 'CPU', memGb: 'Memory Size', memSpec: 'Memory Spec', power: 'Module Power',
      video: 'Video Encode/Decode', csi: 'CSI Cameras', gmsl: 'GMSL', can: 'CAN', rs: 'RS485/232',
      uart: 'UART', i2c: 'I2C', spi: 'SPI', usb3: 'USB 3.x', usb2: 'USB 2.0', mipi: 'MIPI CSI',
      poe: 'PoE', eth: 'Ethernet', m2: 'M.2 Key M', sata: 'SATA', storage: 'Included Storage',
      connectivity: 'Wireless/Cellular', sim: 'SIM Slot', jetpack: 'JetPack Versions', temp: 'Operating Temp',
      ip: 'IP Rating', vehicle: 'Vehicle Power', powerSupply: 'System Power', dimension: 'Dimension',
      weight: 'Weight', install: 'Installation', cooling: 'Cooling', warranty: 'Warranty', lifetime: 'Production Lifetime',
      scenarios: 'Scenarios',
    },
    empty: 'No products match the current filters. Try relaxing them.',
  },
};

const STYLES = `
.jps-layout { display: grid; grid-template-columns: 265px minmax(0, 1fr); gap: 16px; align-items: start; }
@media (max-width: 996px) { .jps-layout { grid-template-columns: 1fr; } }
.jps-filters { position: sticky; top: 84px; max-height: calc(100vh - 100px); overflow: auto; }
@media (max-width: 996px) { .jps-filters { position: static; max-height: none; } }
.jps-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 12px; }
.jps-bar { position: static; margin-top: 12px; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; }
.jps-overlay { position: fixed; inset: 0; z-index: 2000; background: #000; backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 16px; }
.jps-modal { border: 1px solid var(--ifm-color-emphasis-400); border-radius: 10px; box-shadow: 0 12px 40px rgba(0,0,0,0.25); max-width: 1150px; width: 100%; max-height: 90vh; overflow: auto; background: #fff; color: #1c1e21; }
html[data-theme='dark'] .jps-modal { background: #1b1b1d; color: #e3e3e3; }
.jps-compare-table { display: block; overflow-x: auto; white-space: normal; }
.jps-compare-table tr, .jps-compare-table tr th, .jps-compare-table tr td { background: #fff; }
html[data-theme='dark'] .jps-compare-table tr, html[data-theme='dark'] .jps-compare-table tr th, html[data-theme='dark'] .jps-compare-table tr td { background: #1b1b1d; }
.jps-compare-table tr.jps-diff, .jps-compare-table tr.jps-diff th, .jps-compare-table tr.jps-diff td { background: #fff8e6; color: #1c1e21; }
html[data-theme='dark'] .jps-compare-table tr.jps-diff, html[data-theme='dark'] .jps-compare-table tr.jps-diff th, html[data-theme='dark'] .jps-compare-table tr.jps-diff td { background: #4d3800; color: #fff8e6; }
`;

function ipRank(ip) {
  return ip === 'ip66' ? 2 : ip === 'ip40' ? 1 : 0;
}

function ipLabel(p, t) {
  return p.ip === 'ip66' ? 'IP66' : p.ip === 'ip40' ? 'IP40' : t.specs.normal;
}

function count(p, key) {
  return (p.interfaceCounts && p.interfaceCounts[key]) || 0;
}

function hasInterface(p, key) {
  const c = p.interfaceCounts || {};
  switch (key) {
    case 'CAN': return count(p, 'can_count') > 0;
    case 'RS485': return count(p, 'rs_count') > 0;
    case 'GMSL': return count(p, 'gmsl_count') > 0;
    case 'MIPI': return count(p, 'mipi_count') > 0;
    case 'SATA': return count(p, 'sata_count') > 0;
    case 'GPIO': return !!c.has_gpio;
    case 'UART': return count(p, 'uart_count') > 0;
    case 'I2C': return count(p, 'i2c_count') > 0;
    case 'SPI': return count(p, 'spi_count') > 0;
    case 'HDMI': return count(p, 'hdmi_count') > 0;
    case 'DP': return count(p, 'dp_count') > 0;
    case 'USB3': return count(p, 'usb3_count') > 0;
    case 'WIFI': return !!c.has_wifi || count(p, 'm2_keye_count') > 0;
    case 'LTE4G': return !!c.has_lte || count(p, 'm2_keyb_count') > 0;
    case '5G': return !!c.has_5g || count(p, 'm2_keyb_count') > 0;
    case 'USB_C': return !!c.has_usb_c;
    case 'RTC': return !!c.has_rtc;
    case 'SIM': return !!c.has_sim;
    case 'POE': return count(p, 'poe_count') > 0;
    case 'ETH1G': return count(p, 'eth_1g_count') > 0;
    case 'ETH10G': return count(p, 'eth_10g_count') > 0;
    case 'TPM': return !!c.has_tpm;
    default: return false;
  }
}

function formatInterfaces(p) {
  const parts = [];
  const push = (n, label) => { if (n) parts.push(n > 1 ? `${label} ×${n}` : label); };
  push(count(p, 'usb3_count'), 'USB 3.x');
  push(count(p, 'usb2_count'), 'USB 2.0');
  push(count(p, 'can_count'), 'CAN');
  push(count(p, 'rs_count'), 'RS485/232');
  push(count(p, 'gmsl_count'), 'GMSL2');
  push(count(p, 'mipi_count'), 'MIPI CSI');
  push(count(p, 'poe_count'), 'PoE');
  push(count(p, 'eth_1g_count'), '1G Ethernet');
  push(count(p, 'eth_10g_count'), '10G Ethernet');
  push(count(p, 'uart_count'), 'UART');
  push(count(p, 'i2c_count'), 'I2C');
  push(count(p, 'spi_count'), 'SPI');
  push(count(p, 'sata_count'), 'SATA');
  push(count(p, 'hdmi_count'), 'HDMI');
  push(count(p, 'dp_count'), 'DP');
  push(count(p, 'm2_keym_count'), 'M.2 Key M');
  push(count(p, 'm2_keye_count'), 'M.2 Key E (WiFi/BT)');
  push(count(p, 'm2_keyb_count'), 'M.2 Key B (5G/LTE)');
  const c = p.interfaceCounts || {};
  if (c.has_wifi) parts.push('WiFi/BT');
  if (c.has_lte && !count(p, 'm2_keyb_count')) parts.push('LTE');
  if (c.has_sim) parts.push('SIM');
  if (c.has_gpio) parts.push('GPIO');
  if (c.has_tpm) parts.push('TPM');
  return parts;
}

function formatSpec(p, t) {
  const temp = p.tempMax != null ? `${p.tempMin}~${p.tempMax}°C` : `${p.tempMin}°C`;
  return [
    `${p.tops} TOPS`,
    `${p.memoryGb} GB`,
    temp,
    ipLabel(p, t),
  ];
}

const box = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  borderRadius: 8,
  padding: 16,
  margin: '16px 0',
  background: 'var(--ifm-background-color)',
};
const groupLabel = { fontWeight: 600, margin: '12px 0 6px', fontSize: 13 };
const chip = {
  display: 'inline-flex', alignItems: 'center', gap: 4, borderRadius: 14, border: '1px solid var(--ifm-color-emphasis-300)',
  padding: '2px 10px', fontSize: 12, background: 'var(--ifm-color-emphasis-200)', cursor: 'pointer', margin: 2,
};
const chipActive = {
  ...chip, background: 'var(--ifm-color-primary)', color: 'var(--ifm-color-primary-contrast-background)', borderColor: 'var(--ifm-color-primary)',
};
const sectionTitle = { fontWeight: 600, fontSize: 13, margin: '10px 0 4px', color: 'var(--ifm-color-emphasis-700)' };
const muted = { fontSize: 12.5, color: 'var(--ifm-color-emphasis-700)' };
const selectStyle = { width: '100%', padding: '4px 6px', borderRadius: 6, border: '1px solid var(--ifm-color-emphasis-300)', background: 'var(--ifm-background-color)', color: 'var(--ifm-color-content)' };

function SpecChips({ items }) {
  return (
    <span>
      {items.map((s) => (
        <span key={s} style={{ ...chip, cursor: 'default', background: 'var(--ifm-color-emphasis-100)' }}>{s}</span>
      ))}
    </span>
  );
}

function CompareDrawer({ items, t, onClose, onRemove }) {
  const num = (p, key) => {
    const n = count(p, key);
    return n > 0 ? n : '—';
  };
  const bool = (v) => (v ? '✓' : '—');
  const rows = [
    { label: t.cRows.score, get: (p) => (p.score != null ? p.score : '—') },
    { label: t.cRows.module, get: (p) => p.module },
    { label: t.cRows.tops, get: (p) => `${p.tops} TOPS` },
    { label: t.cRows.aiPerf, get: (p) => (p.moduleSpec || {}).aiPerformance || '—' },
    { label: t.cRows.gpu, get: (p) => (p.moduleSpec || {}).gpu || '—' },
    { label: t.cRows.cpu, get: (p) => (p.moduleSpec || {}).cpu || '—' },
    { label: t.cRows.memGb, get: (p) => `${p.memoryGb} GB` },
    { label: t.cRows.memSpec, get: (p) => (p.moduleSpec || {}).memory || '—' },
    { label: t.cRows.power, get: (p) => (p.moduleSpec || {}).power || '—' },
    { label: t.cRows.video, get: (p) => (p.moduleSpec || {}).video || '—' },
    { label: t.cRows.csi, get: (p) => (p.moduleSpec || {}).csi || '—' },
    { label: t.cRows.gmsl, get: (p) => num(p, 'gmsl_count') },
    { label: t.cRows.can, get: (p) => num(p, 'can_count') },
    { label: t.cRows.rs, get: (p) => num(p, 'rs_count') },
    { label: t.cRows.uart, get: (p) => num(p, 'uart_count') },
    { label: t.cRows.i2c, get: (p) => num(p, 'i2c_count') },
    { label: t.cRows.spi, get: (p) => num(p, 'spi_count') },
    { label: t.cRows.usb3, get: (p) => num(p, 'usb3_count') },
    { label: t.cRows.usb2, get: (p) => num(p, 'usb2_count') },
    { label: t.cRows.mipi, get: (p) => num(p, 'mipi_count') },
    { label: t.cRows.poe, get: (p) => num(p, 'poe_count') },
    {
      label: t.cRows.eth,
      get: (p) => {
        const g = count(p, 'eth_1g_count');
        const t10 = count(p, 'eth_10g_count');
        if (!g && !t10) return '—';
        const segs = [];
        if (g) segs.push(`${g}× 1G`);
        if (t10) segs.push(`${t10}× 10G`);
        return segs.join(' + ');
      },
    },
    { label: t.cRows.m2, get: (p) => num(p, 'm2_keym_count') },
    { label: t.cRows.sata, get: (p) => num(p, 'sata_count') },
    { label: t.cRows.storage, get: (p) => p.ssd || p.sdCard || '—' },
    {
      label: t.cRows.connectivity,
      get: (p) => {
        const c = p.interfaceCounts || {};
        const segs = [];
        if (c.has_wifi || count(p, 'm2_keye_count')) segs.push('WiFi/BT');
        if (count(p, 'm2_keyb_count') || c.has_lte) segs.push('5G/LTE');
        return segs.length ? segs.join(' + ') : '—';
      },
    },
    { label: t.cRows.sim, get: (p) => bool((p.interfaceCounts || {}).has_sim) },
    { label: t.cRows.jetpack, get: (p) => p.jetpackVersions.join(', ') },
    { label: t.cRows.temp, get: (p) => p.tempText || '—' },
    { label: t.cRows.ip, get: (p) => ipLabel(p, t) },
    { label: t.cRows.vehicle, get: (p) => bool(p.vehicleReady) },
    { label: t.cRows.powerSupply, get: (p) => [p.powerConnector, p.powerRange].filter(Boolean).join(' · ') || '—' },
    { label: t.cRows.dimension, get: (p) => p.dimension || '—' },
    { label: t.cRows.weight, get: (p) => p.weight || '—' },
    { label: t.cRows.install, get: (p) => p.installation || '—' },
    { label: t.cRows.cooling, get: (p) => p.cooling || '—' },
    { label: t.cRows.warranty, get: (p) => p.warranty || '—' },
    { label: t.cRows.lifetime, get: (p) => p.lifetime || '—' },
    { label: t.cRows.scenarios, get: (p) => p.scenarios.map((s) => t.scenarios[s]).join(' / ') },
  ];
  return (
    <div
      className="jps-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="jps-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t.compare.title}
        style={{ padding: 20 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <h4 style={{ margin: 0 }}>{t.compare.title}</h4>
          <button onClick={onClose} style={{ padding: '4px 12px' }}>{t.compare.close}</button>
        </div>
        <p style={muted}>{t.compare.diffHint}</p>
        <table className="jps-compare-table" style={{ borderCollapse: 'collapse', fontSize: 13, width: '100%' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '6px 10px', borderBottom: '2px solid var(--ifm-color-emphasis-300)', position: 'sticky', left: 0 }} />
              {items.map((p) => (
                <th key={p.id} style={{ textAlign: 'left', padding: '6px 10px', borderBottom: '2px solid var(--ifm-color-emphasis-300)', minWidth: 160 }}>
                  <div>{p.name}</div>
                  <button
                    onClick={() => onRemove(p.id)}
                    style={{ marginTop: 4, fontSize: 11, padding: '1px 8px' }}
                  >
                    {t.compare.remove}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const values = items.map(row.get);
              const diff = new Set(values.map((v) => String(v))).size > 1;
              return (
                <tr key={row.label} className={diff ? 'jps-diff' : undefined}>
                  <th style={{ textAlign: 'left', fontWeight: 600, padding: '6px 10px', borderBottom: '1px solid var(--ifm-color-emphasis-200)', position: 'sticky', left: 0, whiteSpace: 'nowrap' }}>
                    {row.label}
                  </th>
                  {values.map((v, i) => (
                    <td key={i} style={{ padding: '6px 10px', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>{v}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function JetsonProductSelector({ lang = 'zh' }) {
  const t = TEXT[lang] || TEXT.zh;

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [scenario, setScenario] = useState('');
  const [moduleFilter, setModuleFilter] = useState([]);
  const [minTops, setMinTops] = useState(0);
  const [minMemory, setMinMemory] = useState(0);
  const [minM2, setMinM2] = useState(0);
  const [needSata, setNeedSata] = useState(false);
  const [requiredIfaces, setRequiredIfaces] = useState([]);
  const [minIp, setMinIp] = useState('none');
  const [minTemp, setMinTemp] = useState(0);
  const [vehiclePower, setVehiclePower] = useState(false);
  const [jetpackFilter, setJetpackFilter] = useState('');
  const [expanded, setExpanded] = useState([]);
  const [compareIds, setCompareIds] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [activePreset, setActivePreset] = useState('');

  const jetpackOptions = useMemo(() => {
    const set = new Set();
    PRODUCTS.forEach((p) => p.jetpackVersions.forEach((v) => set.add(v)));
    return Array.from(set).sort((a, b) => {
      const pa = a.split('.').map(Number);
      const pb = b.split('.').map(Number);
      return pa[0] - pb[0] || (pa[1] || 0) - (pb[1] || 0) || (pa[2] || 0) - (pb[2] || 0);
    });
  }, []);

  const resetFilters = () => {
    setSearch('');
    setTypeFilter('all');
    setScenario('');
    setModuleFilter([]);
    setMinTops(0);
    setMinMemory(0);
    setMinM2(0);
    setNeedSata(false);
    setRequiredIfaces([]);
    setMinIp('none');
    setMinTemp(0);
    setVehiclePower(false);
    setJetpackFilter('');
    setMaxPrice('');
    setActivePreset('');
  };

  const applyPreset = (key) => {
    if (key === 'custom') {
      resetFilters();
      return;
    }
    const preset = PRESETS[key];
    setSearch('');
    setModuleFilter([]);
    setMinTops(preset.minTops);
    setMinMemory(0);
    setMinM2(0);
    setNeedSata(false);
    setRequiredIfaces(preset.requiredIfaces);
    setScenario(preset.scenario);
    setMinIp(preset.minIp);
    setMinTemp(preset.minTemp);
    setVehiclePower(preset.vehiclePower);
    setJetpackFilter('');
    setActivePreset(key);
  };

  const toggleIface = (key) => {
    setRequiredIfaces((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
    setActivePreset('');
  };

  const toggleModule = (key) => {
    setModuleFilter((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const toggleCompare = (id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };


  const results = useMemo(() => {
    const tokens = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = PRODUCTS.filter((p) => {
      if (tokens.length) {
        const hay = [
          p.name, p.fullName, p.series || '', p.module, p.positioning || '', p.application || '',
        ].join(' ').toLowerCase();
        if (!tokens.every((tok) => hay.includes(tok))) return false;
      }
      if (typeFilter !== 'all' && (p.type || 'machine') !== typeFilter) return false;
      if (moduleFilter.length && !(p.moduleKeys || [p.moduleKey]).some((k) => moduleFilter.includes(k))) return false;
      if (minTops > 0 && p.tops < minTops) return false;
      if (minMemory > 0 && (p.memoryGb || 0) < minMemory) return false;
      if (minM2 > 0 && count(p, 'm2_keym_count') < minM2) return false;
      if (needSata && !hasInterface(p, 'SATA')) return false;
      if (requiredIfaces.length && requiredIfaces.some((k) => !hasInterface(p, k))) return false;
      if (jetpackFilter && !p.jetpackVersions.includes(jetpackFilter)) return false;
      return true;
    });

    const scored = filtered.map((p) => {
      let score = 0;
      const reasons = [];
      const gaps = [];

      if (minTops > 0) {
        if (p.tops >= minTops) {
          score += 20;
          reasons.push(t.reasons.aiOk);
        } else {
          gaps.push(t.gaps.aiGap);
        }
      }

      if (requiredIfaces.length) {
        const hits = requiredIfaces.filter((k) => hasInterface(p, k));
        score += hits.length * 10;
        if (hits.length === requiredIfaces.length) {
          reasons.push(t.reasons.ifaceOk);
        } else {
          const missing = requiredIfaces.filter((k) => !hits.includes(k)).map((k) => t.ifaces[k]);
          gaps.push(`${t.gaps.ifaceGap}: ${missing.join(', ')}`);
        }
      }

      if (minIp !== 'none') {
        if (ipRank(p.ip) >= ipRank(minIp)) {
          score += 10;
          reasons.push(t.reasons.ipOk);
        } else {
          gaps.push(t.gaps.ipGap);
        }
      }

      if (minTemp < 0) {
        if (p.tempMin <= minTemp) {
          score += 10;
          reasons.push(t.reasons.tempOk);
        } else {
          gaps.push(`${t.gaps.tempGap} (${p.tempMin}°C)`);
        }
      }

      if (vehiclePower) {
        if (p.vehicleReady) {
          score += 10;
          reasons.push(t.reasons.vehicleOk);
        } else {
          gaps.push(t.gaps.vehicleGap);
        }
      }

      if (scenario) {
        if (p.scenarios.includes(scenario)) {
          score += 15;
          reasons.push(t.reasons.scenarioOk);
        } else {
          gaps.push(t.gaps.scenarioGap);
        }
      }

      if (jetpackFilter) {
        score += 10;
        reasons.push(t.reasons.jetpackOk);
      }

      return { ...p, score, reasons, gaps };
    });

    scored.sort(
      (a, b) => b.score - a.score
        || b.tops - a.tops
        || a.name.localeCompare(b.name)
    );
    return scored;
  }, [search, typeFilter, scenario, moduleFilter, minTops, minMemory, minM2, needSata, requiredIfaces, minIp, minTemp, vehiclePower, jetpackFilter, t]);

  const compareItems = useMemo(() => {
    const byId = new Map(results.map((p) => [p.id, p]));
    return compareIds.map((id) => byId.get(id) || PRODUCTS.find((p) => p.id === id));
  }, [compareIds, results]);

  const badgeFor = (index, score) => {
    if (score <= 0 || index > 2) return null;
    if (index === 0) return { text: t.badges.best, color: 'var(--ifm-color-primary)', bg: 'var(--ifm-color-primary-contrast-background)' };
    if (index === 1) return { text: t.badges.second, color: 'var(--ifm-color-success)', bg: 'var(--ifm-color-success-contrast-background)' };
    return { text: t.badges.third, color: 'var(--ifm-color-warning-contrast-foreground)', bg: 'var(--ifm-color-warning-contrast-background)' };
  };

  return (
    <div style={box} className="jps-wrap">
      <style>{STYLES}</style>
      <h3 style={{ marginTop: 0 }}>{t.title}</h3>
      <p style={muted}>{t.intro}</p>

      <input
        type="search"
        value={search}
        onChange={(e) => { setSearch(e.target.value); setActivePreset(''); }}
        placeholder={t.searchPlaceholder}
        style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--ifm-color-emphasis-300)', background: 'var(--ifm-background-color)', color: 'var(--ifm-color-content)', marginBottom: 12 }}
      />

      <div style={groupLabel}>{t.presetTitle}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, marginBottom: 16 }}>
        {Object.entries(t.presets).map(([key, preset]) => (
          <button
            key={key}
            onClick={() => applyPreset(key)}
            style={{
              textAlign: 'left', padding: '8px 10px', borderRadius: 8, cursor: 'pointer',
              border: activePreset === key ? '2px solid var(--ifm-color-primary)' : '1px solid var(--ifm-color-emphasis-300)',
              background: activePreset === key ? 'var(--ifm-color-primary-contrast-background)' : 'var(--ifm-background-surface)',
              color: 'var(--ifm-color-content)',
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 13.5 }}>{preset.title}</div>
            <div style={{ fontSize: 12, color: 'var(--ifm-color-emphasis-700)' }}>{preset.desc}</div>
          </button>
        ))}
      </div>

      <div className="jps-layout">
        <div className="jps-filters" style={{ border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: 12 }}>
          <div style={groupLabel}>{t.filters.type}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[['all', t.filters.typeAll], ['machine', t.filters.typeMachine], ['carrier', t.filters.typeCarrier]].map(([key, label]) => (
              <button
                key={key}
                onClick={() => { setTypeFilter(key); setActivePreset(''); }}
                style={typeFilter === key ? chipActive : chip}
              >
                {label}
              </button>
            ))}
          </div>

          <div style={groupLabel}>{t.filters.scenario}</div>
          <select value={scenario} onChange={(e) => { setScenario(e.target.value); setActivePreset(''); }} style={selectStyle}>
            <option value="">{t.filters.scenarioAny}</option>
            {Object.entries(t.scenarios).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>

          <div style={groupLabel}>{t.filters.module}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {MODULE_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => toggleModule(key)}
                style={moduleFilter.includes(key) ? chipActive : chip}
              >
                {t.modules[key]}
              </button>
            ))}
          </div>

          <div style={groupLabel}>{t.filters.aiPerf}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {TOPS_STEPS.map((step) => (
              <button key={step} onClick={() => { setMinTops(step); setActivePreset(''); }} style={minTops === step ? chipActive : chip}>
                {step === 0 ? t.filters.any : `≥${step}`}
              </button>
            ))}
          </div>

          <div style={groupLabel}>{t.filters.memory}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {MEMORY_STEPS.map((step) => (
              <button key={step} onClick={() => { setMinMemory(step); setActivePreset(''); }} style={minMemory === step ? chipActive : chip}>
                {step === 0 ? t.filters.any : `≥${step}GB`}
              </button>
            ))}
          </div>

          <div style={groupLabel}>{t.filters.storage}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[0, 1, 2].map((n) => (
              <button key={n} onClick={() => { setMinM2(n); setActivePreset(''); }} style={minM2 === n ? chipActive : chip}>
                {n === 0 ? t.filters.any : n === 1 ? t.filters.m2one : t.filters.m2two}
              </button>
            ))}
            <button onClick={() => { setNeedSata(!needSata); setActivePreset(''); }} style={needSata ? chipActive : chip}>
              {t.filters.sata}
            </button>
          </div>

          <div style={groupLabel}>{t.filters.ifaces}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {IFACE_KEYS.map((key) => (
              <button key={key} onClick={() => toggleIface(key)} style={requiredIfaces.includes(key) ? chipActive : chip}>
                {t.ifaces[key]}
              </button>
            ))}
          </div>

          <div style={groupLabel}>{t.filters.env}</div>
          <select value={minIp} onChange={(e) => { setMinIp(e.target.value); setActivePreset(''); }} style={{ ...selectStyle, marginBottom: 8 }}>
            <option value="none">{t.filters.any}</option>
            <option value="ip40">IP40</option>
            <option value="ip66">IP66</option>
          </select>
          <select value={minTemp} onChange={(e) => { setMinTemp(Number(e.target.value)); setActivePreset(''); }} style={{ ...selectStyle, marginBottom: 8 }}>
            {TEMP_STEPS.map((v) => (
              <option key={v} value={v}>{v === 0 ? t.filters.any : `${v}°C`}</option>
            ))}
          </select>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 'normal', fontSize: 13 }}>
            <input type="checkbox" checked={vehiclePower} onChange={(e) => { setVehiclePower(e.target.checked); setActivePreset(''); }} />
            {t.filters.vehicle}
          </label>

          <div style={groupLabel}>{t.filters.jetpack}</div>
          <select value={jetpackFilter} onChange={(e) => { setJetpackFilter(e.target.value); setActivePreset(''); }} style={selectStyle}>
            <option value="">{t.filters.any}</option>
            {jetpackOptions.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>

        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
            <h4 style={{ margin: 0 }}>
              {t.results}
              <span style={{ ...muted, marginLeft: 8, fontWeight: 'normal' }}>
                {t.resultCount(results.length)} · {t.sortedByMatch}
              </span>
            </h4>
            <button onClick={resetFilters} style={{ padding: '4px 12px' }}>{t.resetAll}</button>
          </div>

          {results.length === 0 && <p>{t.empty}</p>}

          <div className="jps-cards">
            {results.map((p, index) => {
              const badge = badgeFor(index, p.score);
              const isExpanded = expanded.includes(p.id);
              const inCompare = compareIds.includes(p.id);
              const compareDisabled = !inCompare && compareIds.length >= 4;
              return (
                <div key={p.id} style={{ border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <strong style={{ fontSize: 14.5 }}>{p.name}</strong>
                      {(p.type === 'carrier') && (
                        <span style={{ marginLeft: 6, fontSize: 10.5, padding: '1px 7px', borderRadius: 8, background: 'var(--ifm-color-secondary-contrast-background)', color: 'var(--ifm-color-secondary-contrast-foreground)', verticalAlign: 'middle' }}>
                          {t.filters.typeCarrier}
                        </span>
                      )}
                      <div style={muted}>{p.series || p.module}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      {badge && (
                        <span style={{ background: badge.bg, color: badge.color, borderRadius: 10, fontSize: 11, padding: '2px 8px', fontWeight: 600, display: 'inline-block', marginBottom: 4 }}>
                          {badge.text}
                        </span>
                      )}
                      <div style={{ fontSize: 12, color: 'var(--ifm-color-primary)', whiteSpace: 'nowrap' }}>
                        {t.specs.score}: {p.score}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span style={{ ...muted, marginRight: 6 }}>{t.specs.module}: {p.module}</span>
                  </div>
                  <div><SpecChips items={formatSpec(p, t)} /></div>
                  <div style={{ fontSize: 12.5, color: 'var(--ifm-color-emphasis-700)' }}>
                    {t.specs.jetpack}: {p.jetpackVersions.join(' / ')}
                  </div>

                  {p.reasons.length > 0 && (
                    <div style={{ fontSize: 12.5, color: 'var(--ifm-color-success)' }}>✓ {p.reasons.join(' · ')}</div>
                  )}
                  {p.gaps.length > 0 && (
                    <div style={{ fontSize: 12.5, color: 'var(--ifm-color-danger)' }}>✗ {p.gaps.join(' · ')}</div>
                  )}

                  <div style={{ display: 'flex', gap: 8, marginTop: 'auto', flexWrap: 'wrap' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 'normal', fontSize: 13, opacity: compareDisabled ? 0.4 : 1 }}>
                      <input type="checkbox" checked={inCompare} disabled={compareDisabled} onChange={() => toggleCompare(p.id)} />
                      {t.card.addCompare}
                    </label>
                    <button onClick={() => toggleExpand(p.id)} style={{ padding: '2px 10px', fontSize: 13 }}>
                      {isExpanded ? t.card.collapse : t.card.expand}
                    </button>
                  </div>

                  {isExpanded && (
                    <div style={{ borderTop: '1px solid var(--ifm-color-emphasis-200)', paddingTop: 8 }}>
                      <div style={sectionTitle}>{t.detail.ifaces}</div>
                      <div><SpecChips items={formatInterfaces(p)} /></div>

                      <div style={sectionTitle}>{t.detail.module}</div>
                      <table style={{ borderCollapse: 'collapse', fontSize: 12.5, width: '100%' }}>
                        <tbody>
                          {[
                            ['AI Performance', (p.moduleSpec || {}).aiPerformance],
                            ['GPU', (p.moduleSpec || {}).gpu],
                            ['CPU', (p.moduleSpec || {}).cpu],
                            ['Memory', (p.moduleSpec || {}).memory],
                            ['Power', (p.moduleSpec || {}).power],
                            ['Video', (p.moduleSpec || {}).video],
                            ['CSI', (p.moduleSpec || {}).csi],
                          ].map(([label, value]) => (
                            <tr key={label}>
                              <th style={{ textAlign: 'left', fontWeight: 600, padding: '3px 8px 3px 0', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{label}</th>
                              <td style={{ padding: '3px 0' }}>{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div style={sectionTitle}>{t.detail.jetpack}</div>
                      <div style={{ fontSize: 12.5 }}>
                        {t.detail.factory}: {p.jetpackFactory || t.detail.none} · {t.detail.supported}: {p.jetpackVersions.join(', ') || t.detail.none}
                      </div>

                      <div style={sectionTitle}>{t.detail.power}</div>
                      <div style={{ fontSize: 12.5 }}>
                        {[
                          [t.detail.powerConn, p.powerConnector],
                          [t.detail.powerRange, p.powerRange],
                          [t.detail.dimension, p.dimension],
                          [t.detail.weight, p.weight],
                          [t.detail.install, p.installation],
                          [t.detail.cooling, p.cooling],
                          [t.detail.gmslChip, p.gmslDeserializer],
                        ].filter(([, v]) => v).map(([label, value]) => `${label}: ${value}`).join(' · ')}
                      </div>

                      <div style={sectionTitle}>{t.detail.other}</div>
                      <div style={{ fontSize: 12.5 }}>
                        {[
                          [t.detail.warranty, p.warranty],
                          [t.detail.lifetime, p.lifetime],
                          [t.detail.cert, p.certifications],
                          [t.detail.application, p.application],
                        ].filter(([, v]) => v).map(([label, value]) => `${label}: ${value}`).join(' · ')}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {compareIds.length > 0 && !compareOpen && (
        <div className="jps-bar" style={{ background: 'var(--ifm-background-surface)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <strong style={{ fontSize: 13.5 }}>{t.compare.title} · {t.compare.selected(compareIds.length)}</strong>
          {compareItems.map((p) => (
            <span key={p.id} style={chip}>
              {p.name}
              <button onClick={() => toggleCompare(p.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, fontSize: 12, lineHeight: 1 }}>×</button>
            </span>
          ))}
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button onClick={() => setCompareOpen(true)} disabled={compareIds.length < 2} style={{ padding: '6px 16px', fontWeight: 600 }}>
              {t.compare.btn}
            </button>
            <button onClick={() => setCompareIds([])} style={{ padding: '6px 16px' }}>{t.compare.clear}</button>
          </span>
          <span style={{ width: '100%', fontSize: 12, color: 'var(--ifm-color-emphasis-700)' }}>{t.compare.maxHint}</span>
        </div>
      )}

      {compareOpen && compareItems.length > 0 && (
        <CompareDrawer
          items={compareItems}
          t={t}
          onClose={() => setCompareOpen(false)}
          onRemove={(id) => {
            toggleCompare(id);
            setCompareIds((prev) => {
              const next = prev.filter((x) => x !== id);
              if (next.length < 2) setCompareOpen(false);
              return next;
            });
          }}
        />
      )}
    </div>
  );
}
