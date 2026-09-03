// @ts-check

const fs = require('fs');
const path = require('path');
const hasReSpeakerFaq = fs.existsSync(path.join(__dirname, 'docs/FAQ/respeaker/ja_respeaker_faq.mdx'));

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  jaSidebar: [
    // 'Sensing_test',
    {
      type: 'doc',
      id: 'ja_Getting_Started',
      label: 'はじめに',
      className: 'sideboard_calss',
    },
    // {
    //   type: 'category',
    //   label: 'TinyML',
    //   collapsed: true,
    //   collapsible: true,
    //   link: {
    //     type: "doc",
    //     id: "TinyML/TinyML_Topic",
    //   },
    //   items: [
    //     'TinyML/TinyML_workshop_course',
    //   ]
    // },
    // 'Getting_Started_test',
    {
      type: 'doc',
      id: 'ja_Sensor',
      label: 'センシング',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Grove',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "Sensor/Grove/ja_Grove_System"
      },
      items: [
        {
          type: 'category',
          label: 'Groveセンサー',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/Grove/Grove_Sensors/ja_Grove_Sensor_Intro"
          },
          items: [
            {
              type: 'category',
              label: 'オールインワン',
              items: [
                'Sensor/Grove/Grove_Sensors/All_in_one/ja_Grove_SEN5X_All_in_One',
                'Sensor/Grove/Grove_Sensors/All_in_one/ja_Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680',
                'Sensor/Grove/Grove_Sensors/All_in_one/ja_Grove-CO2&Temperature&HumiditySensor-SCD41',
                'Sensor/Grove/Grove_Sensors/All_in_one/ja_Grove-CO2_Temperature_Humidity_Sensor-SCD30',
                'Sensor/Grove/Grove_Sensors/All_in_one/ja_Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931',
              ],
            },
            {
              type: 'category',
              label: 'AI搭載',
              items: [
                {
                  type: 'category',
                  label: 'Grove Vision AI',
                  collapsed: true,
                  collapsible: true,
                  link: {
                    type: "doc",
                    id: "Sensor/Grove/Grove_Sensors/AI-powered/ja_Grove-Vision-AI-Module"
                  },
                  items: [
                    'Sensor/Grove/Grove_Sensors/AI-powered/ja_Train-Deploy-AI-Model-Grove-Vision-AI',
                    'Sensor/Grove/Grove_Sensors/AI-powered/ja_edge-impulse-vision-ai',
                  ],
                },
                {
                  type: 'category',
                  label: 'Grove Vision AI V2',
                  collapsed: true,
                  collapsible: true,
                  link: {
                    type: "doc",
                    id: "Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/ja_Grove-vision-ai-v2"
                  },
                  items: [
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/ja_Grove-vision-ai-v2-software-supported',
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/ja_Grove-vision-ai-v2-camera-supported',
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/ja_grove_vision_ai_v2_sscma',
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/ja_Grove_vision_ai_v2_RS485',
                    {
                      type: 'category',
                      label: '開発',
                      items: [
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Development/ja_grove-vision-ai-v2-himax-sdk',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Development/ja_grove_vision_ai_v2_at_library',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'アプリケーション',
                      items: [
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/ja_grove-vision-ai-v2-sensecap-app',
                        // 'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-ha',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/ja_grove-vision-ai-v2-demo',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/ja_grove_vision_ai_v2_webcamera',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/ja_vision_ai_v2_crowd_heat_map',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/ja_grove_vision_ai_v2_telegram',
                      ],
                    },
                  ],
                },
                'Sensor/Grove/Grove_Sensors/AI-powered/ja_Grove-Gesture_sensor_paj7660',
                // 'Sensor/Grove/Grove_Sensors/AI-powered/Gesture_control_music_application',
              ],
            },
            {
              type: 'category',
              label: '温湿度',
              items: [
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-TempAndHumi_Sensor-SHT31',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-I2C_High_Accuracy_Temp&Humi_Sensor-SHT35',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-Temperature_and_Humidity_Sensor_Pro',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-TemperatureAndHumidity_Sensor',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-Temperature-Humidity-Sensor-DH20',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-TemperatureAndHumidity_Sensor-HDC1000',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/ja_Grove-SHT4x',
              ],
            },
            {
              type: 'category',
              label: '温度',
              items: [
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-1-Wire_Thermocouple_Amplifier-MAX31850K',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-I2C_Thermocouple_Amplifier-MCP9600',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_One-Wire-Temperature-Sensor-DS18B20',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-High_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-Thermal-Imaging-Camera-IR-Array',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-Digital_Infrared_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-Infrared_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-Infrared_Temperature_Sensor_Array-AMG8833',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-Temperature_Sensor_V1.2',
                'Sensor/Grove/Grove_Sensors/Temperature/ja_Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808',
                // 'Sensor/Grove/Grove_Sensors/Temperature/Sensor_temperature',
              ],
            },
            {
              type: 'category',
              label: '土壌湿度',
              items: [
                'Sensor/Grove/Grove_Sensors/Soli_Humidity/ja_Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant',
                'Sensor/Grove/Grove_Sensors/Soli_Humidity/ja_Grove-Moisture_Sensor',
              ],
            },
            {
              type: 'category',
              label: '近接',
              items: [
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Ultrasonic_Sensor_SMS812',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Sensor_distance',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Ultrasonic_Ranger',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-IR_Distance_Interrupter_v1.2',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-TF_Mini_LiDAR',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Doppler-Radar',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Time_of_Flight_Distance_Sensor-VL53L0X',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-80cm_Infrared_Proximity_Sensor',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Gesture_v1.0',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Adjustable_PIR_Motion_Sensor',
                'Sensor/Grove/Grove_Sensors/Proximity/ja_Grove-Hall_Sensor',
              ],
            },
            {
              type: 'category',
              label: '空気品質',
              items: [
                'Sensor/Grove/Grove_Sensors/Air_Quality/ja_Grove-Laser_PM2.5_Sensor-HM3301',
                'Sensor/Grove/Grove_Sensors/Air_Quality/ja_Grove-Dust_Sensor',
                'Sensor/Grove/Grove_Sensors/Air_Quality/ja_Grove-Air_Quality_Sensor_v1.3',
                'Sensor/Grove/Grove_Sensors/Air_Quality/ja_Grove-Formaldehyde-Sensor',
              ],
            },
            {
              type: 'category',
              label: 'ガス',
              items: [
                'Sensor/Grove/Grove_Sensors/Gas/ja_Sensor_gas',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Gas_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Multichannel-Gas-Sensor-V2',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Gas_Sensor-MQ2',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Gas_Sensor-MQ3',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Gas_Sensor-MQ5',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Gas_Sensor-MQ9',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Gas_Sensor-O2',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Gas_Sensor-O2-MIX8410',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Oxygen-Sensor-Pro',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Alcohol_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-CO2_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-smart_air_quality_sensor',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-VOC_and_eCO2_Gas_Sensor-SGP30',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-VOC_Gas_Sensor-SGP40',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-HCHO_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/ja_Grove-Multichannel_Gas_Sensor',
              ],
            },
            {
              type: 'category',
              label: '気圧計',
              items: [
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Sensor_barometer',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-Barometer-High-Accuracy',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-Barometer_Sensor',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-Barometer_Sensor-BME280',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-Barometer_Sensor-BMP180',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-Barometer_Sensor-BMP280',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-Barometer_Sensor-SPA06-003',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-High-Precision-Barometric-Pressure-Sensor-DPS310',
                'Sensor/Grove/Grove_Sensors/Barometer/ja_Grove-Integrated-Pressure-Sensor-Kit',
              ],
            },
            {
              type: 'category',
              label: '加速度計',
              items: [
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-D7S-Vibration-Sensor',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Sensor_accelerometer',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digital_Accelerometer-16g',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Analog_Accelerometer',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Compass_V1.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digitial_Compass_v2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digital_Accelerometer-1.5g',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digital_Accelerometer-400g',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis-Digital-Accelerometer-LIS3DHTR',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digital_Accelerometer_40g-ADXL357',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digital_Accelerometer_200g-ADXL372',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digital_Gyro',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-6-Axis_AccelerometerAndCompass_V2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-6-Axis_AccelerometerAndGyroscope',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-6-Axis_Accelerometer&Gyroscope_BMI088',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-IMU_10DOF',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-IMU_10DOF_v2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-IMU_9DOF_v2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-IMU_9DOF-lcm20600+AK09918',
                'Sensor/Grove/Grove_Sensors/Accelerometer/ja_Grove-Single_Axis_Analog_Gyro',
              ],
            },
            {
              type: 'category',
              label: '光',
              items: [
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Lightning-Sensor-AS3935',
                'Sensor/Grove/Grove_Sensors/Light/ja_Sensor_light',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Digital_Light_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Heelight_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Light_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Sunlight_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-UV_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-I2C_UV_Sensor-VEML6070',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Luminance_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Infrared_Receiver',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Line_Finder',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-IR_Line_Follower_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Flame_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-Infrared_Reflective_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove-I2C_Color_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/ja_Grove_Color_Sensor',
              ],
            },
            {
              type: 'category',
              label: '生体認証',
              items: [
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Sensor_biomedicine',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-Finger-clip_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-Finger-clip_Heart_Rate_Sensor_with_shell',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-EMG_Detector',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-Ear-clip_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-Chest_Strap_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-Capacitive-Fingerprint-Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-Fingerprint_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-GSR_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/ja_Grove-Human_Presence_Sensor-AK9753',
              ],
            },
            {
              type: 'category',
              label: '音響',
              items: [
                'Sensor/Grove/Grove_Sensors/Sound/ja_Sensor_sound',
                'Sensor/Grove/Grove_Sensors/Sound/ja_Grove-Sound_Sensor',
                'Sensor/Grove/Grove_Sensors/Sound/ja_Grove-Loudness_Sensor',
                'Sensor/Grove/Grove_Sensors/Sound/ja_Grove-Speech_Recognizer',
                'Sensor/Grove/Grove_Sensors/Sound/ja_Grove-Sound_Recorder',
                'Sensor/Grove/Grove_Sensors/Sound/ja_Grove-Analog-Microphone',
                'Sensor/Grove/Grove_Sensors/Sound/ja_Grove-Recorder_v2.0',
                'Sensor/Grove/Grove_Sensors/Sound/ja_Grove-Offline-Voice-Recognition',
              ],
            },
            {
              type: 'category',
              label: 'タッチ',
              items: [
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-Touch_Sensor',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-Rotary_Angle_Sensor',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-Round_Force_Sensor_FSR402',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-2_Channel_Inductive_Sensor-LDC1612',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI',
                'Sensor/Grove/Grove_Sensors/Touch/ja_Grove-I2C_Touch_Sensor',
              ],
            },
            {
              type: 'category',
              label: '液体',
              items: [
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Sensor_liquid',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-ORP-Sensor-Pro',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-Water_Sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-Water-Level-Sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_G1-1-4_Water_Flow_sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-PH-Sensor-kit',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-EC-Sensor-kit',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-TDS-Sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-ORP-Sensor-kit',
                'Sensor/Grove/Grove_Sensors/Liquid/ja_Grove-PH_Sensor',
              ],
            },
            {
              type: 'category',
              label: 'モーション',
              items: [
                'Sensor/Grove/Grove_Sensors/Motion/ja_Sensor_motion',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-PIR_Motion_Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Digital-PIR-Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Collision_Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Tilt_Switch',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Mini_Track_Ball',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Mouse_Encoder',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Piezo_Vibration_Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Slide_Potentiometer',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Optical_Rotary_Encoder-TCUT1600X01',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Vibration_Sensor_SW-420',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Encoder',
                'Sensor/Grove/Grove_Sensors/Motion/ja_Grove-Step_Counter-BMA456',
              ],
            },
            {
              type: 'category',
              label: '重量',
              items: [
                'Sensor/Grove/Grove_Sensors/Weight/ja_Grove-ADC_for_Load_Cell-HX711',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Groveネットワークモジュール',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/Grove/Grove_Sensors_Network/ja_Grove_network_module_intro"
          },
          items: [
            {
              type: 'category',
              label: 'LoRa',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "Sensor/Grove/Grove_Sensors_Network/LoRa/ja_Grove_LoRa_E5_New_Version"
              },
              items: [
                'Sensor/Grove/Grove_Sensors_Network/LoRa/ja_Grove_LoRa_E5_New_Version',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/ja_Grove_Wio_E5_P2P',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/ja_Grove_Wio_E5_TTN_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/ja_Grove_Wio_E5_Helium_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/ja_Grove_Wio_E5_Helium_tinyML_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/ja_Grove_Wio_E5_SenseCAP_Cloud_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/ja_Grove_Wio_E5_SenseCAP_XIAO_ESP32S3',
              ],
            },
            {
              type: 'category',
              label: 'Bluetooth',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/ja_Grove-BLE-dual_model-v1.0',
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/ja_Grove-Serial_Bluetooth_v3.0',
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/ja_Grove-BLE_v1',
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/ja_Grove-Serial_Bluetooth',
              ],
            },
            {
              type: 'category',
              label: 'Wi-Fi',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/Wi-Fi/ja_Grove-UART_Wifi',
                'Sensor/Grove/Grove_Sensors_Network/Wi-Fi/ja_Grove-UART_Wifi_V2',
              ],
            },
            {
              type: 'category',
              label: 'NFC',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/NFC/ja_Grove_NFC_ST25',
                'Sensor/Grove/Grove_Sensors_Network/NFC/ja_Grove_NFC',
                'Sensor/Grove/Grove_Sensors_Network/NFC/ja_Grove_NFC_Tag',
              ],
            },
            {
              type: 'category',
              label: 'GPS',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/GPS/ja_Grove-GPS',
                'Sensor/Grove/Grove_Sensors_Network/GPS/ja_Grove-GPS-Air530',
              ],
            },
            {
              type: 'category',
              label: 'RF',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/RF/ja_Grove-125KHz_RFID_Reader',
                'Sensor/Grove/Grove_Sensors_Network/RF/ja_Grove-315MHz_RF_Kit',
                'Sensor/Grove/Grove_Sensors_Network/RF/ja_Grove-433MHz_Simple_RF_Link_Kit',
                'Sensor/Grove/Grove_Sensors_Network/RF/ja_Grove_LoRa_Radio',
                'Sensor/Grove/Grove_Sensors_Network/RF/ja_Grove-Serial_RF_Pro',
              ],
            },
            {
              type: 'category',
              label: '標準プロトコル',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/ja_Grove-DMX512',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/ja_Grove-I2C_ADC',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/ja_Grove-I2C_FM_Receiver',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/ja_Grove-I2C_FM_Receiver_v1.1',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/ja_Grove-Protoshield',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/ja_Grove-RJ45_Adapter',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/ja_Grove-Node',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Groveアクセサリー',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/Grove/Grove_Accessories/ja_Grove_Accessories_Intro"
          },
          items: [
            {
              type: 'category',
              label: 'アクチュエーター',
              items: [
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-2-Coil_Latching_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Buzzer',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Passive-Buzzer',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Chainable_RGB_LED',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Dry-Reed_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-EL_Driver',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Haptic_Motor',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-I2C_Motor_Driver',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-I2C_Motor_Driver_V1.2',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-I2C_Motor_Driver_V1.3',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-I2C-Motor-Driver-L298P',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Infrared_Emitter',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-LED_Matrix_Driver_v1.0',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-MP3_v2.0',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-MP3-v3',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-mp3-v4',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Mini_Fan',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Mini_I2C_Motor_Driver_v1.0',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove_Recorder',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Recorder_v3.0',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-4-Channel_SPDT_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-2-Channel_SPDT_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Solid_State_Relay_V2',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-2-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-4-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-8-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Optocoupler_Relay-M281',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Serial_MP3_Player',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Servo',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Speaker',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Speaker-Plus',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Variable_Color_LED',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Vibration_Motor',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Water_Atomization',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-16-Channel_PWM_Driver-PCA9685',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-I2C_Motor_Driver-TB6612FNG',
                'Sensor/Grove/Grove_Accessories/Actuator/ja_Grove-Voltage_Divider',
              ],
            },
            {
              type: 'category',
              label: '時間',
              items: [
                'Sensor/Grove/Grove_Accessories/Time/ja_Grove-RTC',
                'Sensor/Grove/Grove_Accessories/Time/ja_Grove_High_Precision_RTC',
              ],
            },
            {
              type: 'category',
              label: '電流',
              items: [
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-10A_DC_Current_Sensor-ACS725',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-5A_DC_AC_Current_Sensor-ACS70331',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-2.5A-DC-Current-Sensor-ACS70331',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-Electricity_Sensor',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-Coulomb_Counter_3.3V_to_5V-LTC2941',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-MOSFET',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-SPDT_Relay_30A',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-Screw_Terminal',
                'Sensor/Grove/Grove_Accessories/Current/ja_Grove-Electromagnet',
              ],
            },
            {
              type: 'category',
              label: 'LED',
              items: [
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-Red_LED',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-Circular_LED',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-LED_Bar',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-RGB_LED_Stick-10-WS2813_Mini',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-LED_ring',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-LED_Socket_Kit',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-LED_String_Light',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-LED_Strip_Driver',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-RGB_LED_Matrix_w-Driver',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-LED_Matrix_Driver-HT16K33',
                'Sensor/Grove/Grove_Accessories/LED/ja_Grove-Red_LED_Matrix_w_Driver',
              ],
            },
            {
              type: 'category',
              label: 'スイッチ・ボタン',
              items: [
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-6-Position_DIP_Switch',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-Button',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-Switch-P',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-LED_Button',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-Dual-Button',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-5-Way_Switch',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-Mech_Keycap',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-Thumb_Joystick',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-Magnetic_Switch',
                'Sensor/Grove/Grove_Accessories/Switch&Button/ja_Grove-Joint_v2.0',
              ],
            },
            {
              type: 'category',
              label: '入出力',
              items: [
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-Differential_Amplifier_v1.2',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-I2C_Hub',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-I2C-Hub-6Port',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-AND',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-OR',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-DC_Jack_Power',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-Qwiic-Hub',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-NunChuck',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-PS_2_Adapter',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-Mini_Camera',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-Serial_Camera',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-16-bit-ADC-ADS1115',
                'Sensor/Grove/Grove_Accessories/Input_Output/ja_Grove-NOT',
              ],
            },
            {
              type: 'category',
              label: 'ケース',
              items: [
                'Sensor/Grove/Grove_Accessories/Case/ja_Grove-Wrapper',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SenseCAP',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "Sensor/SenseCAP/ja_Industrial-IoT-SenseCAP-Introduction",
      },
      items: [
        {
          type: 'category',
          label: 'SenseCAP T1000 Tracker',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_T1000_Tracker/ja_SenseCAP_T1000_intro',
          },
          items: [
            'Sensor/SenseCAP/SenseCAP_T1000_Tracker/ja_SenseCAP_T1000_Tracker_Introduction',
            {
              type: 'category',
              label: 'ユーザーガイド',
              items: [
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/ja_Get_Started',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/ja_Payload',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/ja_Tracker_WiFi_Geolocation',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/ja_BC01_Indoor_Bluetooth_Beacon',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/ja_Indoor_Positioning_Guide',
              ],
            },
            {
              type: 'category',
              label: 'LoRaWANネットワークサーバーとの統合',
              items: [
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_Connect_to_Helium',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_Connect_to_The_Things_Network',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_Connect_to_Loriot',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_AWS_Service',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_TTN_Mapper',
              ],
            },
            {
              type: 'category',
              label: '人気ダッシュボードとの統合',
              items: [
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_Datacake_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_Ubidots_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_thingsboard_integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_Ubidots_Integrated_Helium',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_Qubitro_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_TagoIO_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_InfluxDB_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_Akenza_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_Trackpac_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/ja_sensecap_t1000_tracker_wialon',
              ],
            },
            'Sensor/SenseCAP/SenseCAP_T1000_Tracker/ja_FAQ',
            'Sensor/SenseCAP/SenseCAP_T1000_Tracker/ja_Firmware_release_note',
          ],
        },
        {
          type: 'category',
          //label: 'LoRaWAN Tracker',
          label: 'LoRaWAN 用 SenseCAP T1000-E トラッカー',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Sensor/SenseCAP/LoRaWAN_Tracker',
            },
          ]
        },
        {
          type: 'category',
          label: 'SenseCAP T2000 Tracker',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_T2000_Tracker/ja_SenseCAP_T2000_intro',
          },
          items: [
            'Sensor/SenseCAP/SenseCAP_T2000_Tracker/ja_SenseCAP_T2000_Tracker_Introduction',
            {
              type: 'category',
              label: 'ユーザーガイド',
              items: [
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/User_Guide/ja_Quick_Start',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/User_Guide/ja_Payload_Format',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/User_Guide/ja_FAQ',
              ],
            },
            {
              type: 'category',
              label: 'LoRaWAN ネットワークサーバーとの統合',
              items: [
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_Connect_to_The_Things_Network',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_Connect_to_Helium',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/Integrated_with_LoRaWAN_Network_Server/ja_Connect_to_AWS_IoT_Core'
              ],
            }
          ],
        },
        {
          type: 'category',
          label: 'SenseCAP Bluetoothビーコン',
          collapsed: true,
          collapsible: true,
          items: [
            'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/ja_BC01_Indoor_Bluetooth_Beacon',
            'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/ja_BC02_Outdoor_Bluetooth_Beacon',
            {
              type: 'category',
              label: 'BC03 屋内Bluetoothビーコン',
              items: [
                'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/BC03_Indoor_Bluetooth_Beacon/ja_BC03_Indoor_Bluetooth_Beacon_Introduction',
                'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/BC03_Indoor_Bluetooth_Beacon/ja_BC03_Indoor_Bluetooth_Beacon_User_Guide',
              ],
            }
          ],
        },
        {
          type: 'category',
          label: 'SenseCAPセンサー',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/SenseCAP/SenseCAP_Intro/ja_SenseCAP_Sensor_Intro",
          },
          items: [
            {
              type: 'category',
              label: 'SenseCAP LoRaWANセンサー',
              items: [
                {
                  type: 'category',
                  label: 'SenseCAP S210Xシリーズ',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/ja_SenseCAP_LoRaWAN_S210X_Series_Sensor',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/ja_SenseCAP_S2107',
                    {
                      type: 'category',
                      label: 'チュートリアル',
                      items: [
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/ja_Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central',
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/ja_How-to-Connect-SenseCAP-S210X-to-Helium-Network',
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/ja_How-to-Connect-SenseCAP-S210X-to-The-Things-Network',
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/ja_How_to_Connect_SenseCAP_S210X_to_Datacake_via_TTN',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'SenseCAP S2120 8-in-1 LoRaWAN Weather Sensor',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/ja_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/ja_Tutorials-Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor',
                  ],
                },
                {
                  type: 'category',
                  label: 'SenseCAP A1101',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/ja_SenseCAP-Vision-AI-Get-Started',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/ja_Train-Deploy-AI-Model-A1101',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/ja_One-Stop-Model-Training-with-Edge-Impulse',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/ja_Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101',
                    //                 'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/Train_and_Deploy_Your_Own_AI_Model_with_Edge_Impulse_into_A1101',
                  ],
                },
                {
                  type: 'category',
                  label: 'SenseCAP A1102',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1102',
                    },
                  ],
                },
                // {
                //   type: 'category',
                //   label: 'SenseCAP A1102',
                //   items: [
                //     'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1102/Getting_Start_With_A1102',
                //     'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1102/TrainAI_With_A1102',
                //   ],
                // },
              ],
            },
            {
              type: 'category',
              label: ' SenseCAP ONE Weather Sensor',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ja_ONE_intro",
              },
              items: [
                'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ja_ORCH-S4-Weather-Station',
                'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ja_SenseCAP-One-Series-Meteorological-Sensors',
                {
                  type: 'category',
                  label: 'SenseCAP One Compact Weather Station',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/ja_Introduction',
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/ja_Tutorials-Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor',
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/ja_Benchmark_Labs_Forecast_Integration_for_Seeed_Weather_Stations',
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/ja_Firmware_Update',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'SenseCAPセンサープローブ',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "Sensor/SenseCAP/SenseCAP_Probe/ja_Probe_intro",
              },
              items: [
                'Sensor/SenseCAP/SenseCAP_Probe/ja_SenseCAP_Sensor_Probes_Product_Catalogue',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_Total_Solar_Radiation_Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_Liquid-Level-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_Water-Leak-Detector',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_Industrial-ph-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor_S-THP-01A',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_Soil-Moisture-Temperature-EC-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_Soil-Moisture-Temperature-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_RS485_500cm_Ultrasonic_Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/ja_RS485_750cm_Ultrasonic_Sensor-1',
                'Sensor/SenseCAP/Accessories/ja_Industrial-Grade-Optical-Rain-Gauge-RG-15',
                'Sensor/SenseCAP/Accessories/ja_Optical-Rain-Gauge-RG-9',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: ' SenseCAP Sensor Builder',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_Sensor_Builder/ja_Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger',
          },
          items: [
            'Sensor/SenseCAP/SenseCAP_Sensor_Builder/ja_SenseCAP_Builder_build_LoRaWAN_Sensors',
            'Sensor/SenseCAP/SenseCAP_Sensor_Builder/ja_list_of_seeed_grove_for_builder',
          ],
        },
        {
          type: 'category',
          label: ' SenseCAP Data Logger',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_Intro/ja_SenseCAP_Data_Logger_Intro',
          },
          items: [
            {
              type: 'category',
              label: 'SenseCAP Combo 5-in-1 4Gセンサー',
              items: [
                'Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP_Combo/ja_SenseCAP_Combo_Introduction',
                'Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP_Combo/ja_Get_Started_with_SenseCAP_Combo',
              ],
            },
            'Sensor/SenseCAP/SenseCAP_Data_Logger/ja_SenseCAP-Sensor-Hub-Data-Logger',
            'Sensor/SenseCAP/SenseCAP_Data_Logger/ja_Data_Logger',
            {
              type: 'category',
              label: 'チュートリアル',
              items: [
                'Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/ja_How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger',
                'Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/ja_How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger',
                'Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/ja_How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger',
              ],
            },
          ],
        },
        'Sensor/SenseCAP/ja_SenseCAP_Decoder',
        {
          type: 'category',
          label: 'アプリケーション',
          items: [
            'Sensor/SenseCAP/Applications/ja_Home_Assistant_X_SenseCAP_LoRaWAN_Sensors',
            'Sensor/SenseCAP/Applications/ja_Develop_an_Industrial_LoRaWAN_Sensor',
          ],
        },
        {
          type: 'category',
          label: '学習',
          items: [
            'Sensor/SenseCAP/Learn/ja_How_to_Select_the_LoRaWAN_Network',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'SenseCAP Indicator',
    //   collapsed: true,
    //   collapsible: true,
    //   link: {
    //     type: "doc",
    //     id: 'Sensor/SenseCAP/SenseCAP_Indicator/ja_Introduction',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'Sensor/SenseCAP/SenseCAP_Indicator',
    //     },
    //   ]
    // },
    {
      type: 'category',
      label: 'SenseCAP Watcher',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Sensor/SenseCAP/SenseCAP_Watcher/ja_watcher_main_page',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Sensor/SenseCAP/SenseCAP_Watcher',
        },
      ]
    },
    {
      type: 'category',
      label: 'mmWaveレーダーセンサー',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Sensor/mmWave_radar_sensor/ja_mmwave_radar_Intro',
      },
      items: [
        {
          type: 'category',
          label: 'XIAO用mmWave',
          items: [
            'Sensor/mmWave_radar_sensor/mmwave-for-XIAO/ja_mmwave-for-xiao',
            'Sensor/mmWave_radar_sensor/mmwave-for-XIAO/ja_mmwave-for-xiao_arduino',
            'Sensor/mmWave_radar_sensor/mmwave-for-XIAO/ja_mmwave-for-xiao-connect-to-HA',
          ],
        },
        {
          type: 'category',
          label: 'MR60FDA2 mmWave kit',
          items: [
            'Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/ja_getting_started_with_mr60fda2',
            'Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/ja_ha_with_mr60fda2',
          ],
        },
        {
          type: 'category',
          label: 'MR60BHA2 mmWave kit',
          items: [
            'Sensor/mmWave_radar_sensor/mr60bha2-mmwave-kit/ja_getting_started_with_mr60bha2',
            'Sensor/mmWave_radar_sensor/mr60bha2-mmwave-kit/ja_ha_with_mr60bha2',
          ],
        },
        {
          type: 'category',
          label: 'MR24HPC1 mmWave kit',
          items: [
            'Sensor/mmWave_radar_sensor/mr24hpc1-mmwave-kit/ja_mr24hpc1-mmwave_human_kit',
            'Sensor/mmWave_radar_sensor/mr24hpc1-mmwave-kit/ja_mr24hpc1-mmWave_Kit_And_Grove_Connect_To_ESPHome',
          ],
        },
        'Sensor/mmWave_radar_sensor/ja_Radar_MR24HPC1',
        'Sensor/mmWave_radar_sensor/ja_Radar_MR60BHA1',
        'Sensor/mmWave_radar_sensor/ja_Radar_MR60FDA1',
        'Sensor/mmWave_radar_sensor/ja_Radar_MR24BSD1',
        'Sensor/mmWave_radar_sensor/ja_Radar_MR24HPB1',
        'Sensor/mmWave_radar_sensor/ja_Radar_MR24FDB1',
      ],
    },
    {
      type: 'category',
      label: 'XIAO',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Sensor/SeeedStudio_XIAO/ja_SeeedStudio_XIAO_Series_Introduction',
      },
      items: [
        'Sensor/SeeedStudio_XIAO/ja_SeeedStudio_XIAO_Series_Projects',
        {
          type: 'category',
          label: 'XIAO SAMD21 シリーズ',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_Seeeduino-XIAO',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_XIAO-SAMD21-Zephyr-RTOS',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_XIAO_SAMD21_with_PlatformIO',
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_Seeeduino-XIAO-by-Nanase',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_Seeeduino-XIAO-CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_XIAO-SAMD21-MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_MicroBlocks_XIAO_SAMD21',
              ],
            },
            {
              type: 'category',
              label: '組み込みML',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Embedded_ML/ja_Seeeduino-XIAO-TinyML',
              ],
            },
            {
              type: 'category',
              label: 'チュートリアル',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_Seeeduino-XIAO-TinyUSB',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/ja_XIAO-SPI-Communication-Interface',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/ja_Seeeduino-XIAO-DAPLink',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/ja_How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI',
              ],
            },
          ],
        },
        {
          // XIAO RA4M1
          type: 'category',
          label: 'XIAO RA4M1',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RA4M1',
            }
          ],
        },
        {
          type: 'category',
          label: 'XIAO MG24',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_MG24',
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO RP2040 シリーズ',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_XIAO-RP2040',
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_XIAO-RP2040-with-Arduino',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_XIAO-RP2040-with-MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_XIAO-RP2040-with-CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_MicroBlocks_XIAO_RP2040',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_XIAO-RP2040-with-NuttX-RTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_XIAO-RP2040-Zephyr-RTOS',
              ],
            },
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/ja_XIAO_RP2040_with_PlatformIO',
            {
              type: 'category',
              label: '組み込みML',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/Embedded_ML/ja_XIAO-RP2040-EI',
              ],
            },
          ],
        },
        {
          // XIAO RP2350
          type: 'category',
          label: 'XIAO RP2350',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350',
            },
          ]
        },
        {
          type: 'category',
          label: 'XIAO nRF52840シリーズ',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO_BLE',
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-nRF52840-NuttX-RTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-nRF52840-Zephyr-RTOS',
              ],
            },
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-BLE_CircutPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_MicroBlocks_XIAO_nRF52840',
              ],
            },
            {
              type: 'category',
              label: 'プラットフォーム',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-nRF52840_PlatformIO',
              ],
            },
            {
              type: 'category',
              label: 'ハードウェア使用法',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-BLE-Sense-IMU-Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-BLE-Sense-PDM-Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-BLE_QSPI-Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-BLE-Sense-Pin-Multiplexing',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/ja_XIAO-BLE-Sense-NFC-Usage',
              ],
            },
            {
              type: 'category',
              label: 'Bluetoothライブラリ',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth_Libraries/ja_XIAO-BLE-Sense-Bluetooth_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth_Libraries/ja_XIAO-BLE-Sense-Bluetooth-Usage',
              ],
            },
            {
              type: 'category',
              label: '組み込みML',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded_ML/ja_XIAOEI',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded_ML/ja_XIAO-BLE-Sense-TFLite-Getting-Started',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded_ML/ja_XIAO-BLE-Sense-TFLite-Mic',
              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Application/ja_XIAO-BLE-sidewalk',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Application/ja_XIAO_BLE_HA',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO nRF54L15シリーズ',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Pin_Multiplexing',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Built-in-Sensor',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Power_Consumptions',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_MicroPython',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Arduino',
            {
              type: 'category',
              label: 'ワイヤレス接続',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Bluetooth_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Matter_Use',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_Zigbee',
              ],
            },
            {
              type: 'category',
              label: 'プラットフォーム',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/ja_XIAO_nRF54L15-Sense_PlatformIO',
              ],
            },
            // {
            //   type: 'category',
            //   label: 'Application',
            //   items: [
            //     'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/XIAO_nRF54L15-Sense_WiFi_Usage',
            //     'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/XIAO_nRF54L15-Sense_Bluetooth_Usage',
            //   ],
            // },
          ],
        },
        {
          type: 'category',
          label: 'XIAO nRF54LM20Aシリーズ',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/ja_XIAO_nRF54LM20A-Sense_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/ja_XIAO_nRF54LM20A-Sense_NCS',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/ja_XIAO_nRF54LM20A-Sense_Pin_Multiplexing',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/ja_XIAO_nRF54LM20A-Sense_Built-in-Sensor',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/ja_XIAO_nRF54LM20A-Sense_Low_Power',
            {
              type: 'category',
              label: 'ワイヤレス接続',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Wireless_Connection/ja_XIAO_nRF54LM20A-Sense_Bluetooth_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Wireless_Connection/ja_XIAO_nRF54LM20A_Matter_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Wireless_Connection/ja_XIAO_nRF54LM20A_NFC_Usage',
              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Application/ja_XIAO_nRF54LM20A_with_epaper_and_sdcard',
              ],
            },
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/ja_XIAO_nRF54LM20A-Sense_with_MicroPython',
              ],
            },
            {
              type: 'category',
              label: 'プラットフォーム',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/ja_XIAO_nRF54LM20A-Sense_with_Arduino',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO ESP32C3',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO_ESP32C3_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO_ESP32C3_Pin_Multiplexing',
            //       'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_MicroPython',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO-ESP32C3-NuttX',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO-ESP32C3-Zephyr',
            {
              type: 'category',
              label: 'ワイヤレス接続',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO_ESP32C3_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO_ESP32C3_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO_ESP32C3_with_CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_XIAO_ESP32C3_with_MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/ja_MicroBlocks_XIAO_ESP32_C3',
              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_xiao-esp32c3-esphome',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_xiao-esp32c3-prism-display',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_xiaoesp32c3-chatgpt',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_ESP32C3_Smart_Thermostat',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_xiaoesp32c3-flash-storage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_XIAO-ESP32C3-for-ESPHome-Support',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_Xiao_C3_Ibeacon',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/ja_XIAO_ESP32C3_ESPresense',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO ESP32C5',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/ja_XIAO_ESP32C5_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/ja_XIAO_ESP32C5_Pin_Multiplexing',
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/ja_XIAO_ESP32C5_with_PlatformIO',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/ja_XIAO_ESP32C5_with_MicroPython',

              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/ja_XIAO_ESP32C5_ESP-Mesh_Audio',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/ja_XIAO_ESP32C5_HomeAssistant',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/ja_XIAO_ESP32C5_WiFi_Throughput_tester',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/ja_XIAO_ESP32_Series_CSI_Espectre',
              ],
            },
            {
              type: 'category',
              label: 'Zigbee',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Zigbee/ja_XIAO_ESP32C5_Zigbee_idf',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Zigbee/ja_XIAO_ESP32C5_Zigbee_arduino',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Zigbee/ja_XIAO_ESP32C5_Zigbee_homeassistant',
              ],
            },
            {
              type: 'category',
              label: 'ワイヤレス接続',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Wireless_Connection/ja_XIAO_ESP32C5_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Wireless_Connection/ja_XIAO_ESP32C5_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/RTOS/ja_XIAO_ESP32C5_With_FreeRTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/RTOS/ja_XIAO_ESP32C5_With_Zephyr',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO ESP32C6',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_Pin_Multiplexing',
            {
              type: 'category',
              label: 'ワイヤレス接続',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_Embedded_Swift',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_with_CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_with_MicroPython',
              ],
            },
            {
              type: 'category',
              label: 'プラットフォーム',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO_ESP32C6_with_PlatformIO',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/ja_XIAO-ESP32C6-NuttX',
              ],
            },
            {
              type: 'category',
              label: 'Zigbee',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/ja_xiao_esp32c6_zigbee',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/ja_xiao_esp32c6_zigbee_arduino',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/ja_xiaoc6_zigbee_led_ha',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/ja_use_cursor_create_zigbee_prj',
              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Application/ja_xiao_esp32c6_aws_iot',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Application/ja_xiao_esp32c6_kafka',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO ESP32S3シリーズ',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_Pin_Multiplexing',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_Sense_Consumption',
            {
              type: 'category',
              label: 'ワイヤレス接続',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'プログラミング言語',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_with_MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_MicroBlocks_XIAO_ESP32_S3',
                // 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_Micropython',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO-ESP32S3-Zephyr-RTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO-ESP32S3-FreeRTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO-ESP32S3-NuttX-RTOS',
              ],
            },
            {
              type: 'category',
              label: 'ハードウェア使用法',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/ja_XIAO_ESP32S3_Sense_mic',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/ja_XIAO_ESP32S3_Sense_tf_and_filesystem',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/ja_XIAO_ESP32S3_Sense_camera',
              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                {
                  type: 'category',
                  label: 'Edge Impulse',
                  collapsed: true,
                  collapsible: true,
                  link: {
                    type: "doc",
                    id: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/ja_EdgeImpulse',
                  },
                  items: [
                    'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/ja_Key_Word_Spotting',
                    'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/ja_Image_classification_project',
                  ],
                },
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/ja_XIAO_ESP32S3_Speech2chatgpt',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/ja_XIAO_ESP32S3_EdgeLab',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/ja_XIAO_ESP32S3_Geolocation',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/ja_XIAO_ESP32S3_ESPHome',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/ja_XIAO_ESP32S3_SSCMA',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/ja_XIAO_ESP32S3_Voice_Pomodoro',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/ja_XIAO_ESP32S3_GPIO_Viewer',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO デバッグメイト',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SeeedStudio_XIAO/xiao_debug_mate/ja_Getting_Started_with_XIAO_Debug_Mate',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'Sensor/SeeedStudio_XIAO/xiao_debug_mate',
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO用拡張ボード',
          items: [
            {
              type: 'category',
              label: 'XIAO用GPSモジュール',
              // link: {
              //   type: "doc",
              //   id: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Introduction',
              // },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/GPS_Module_For_XIAO',
                },
              ]
            },
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_Seeeduino-XIAO-Expansion-Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_XIAO-CAN-Bus-Expansion-Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_xiao-rgb-matrix',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_gpio_expander_for_xiao',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_XIAO-RS485-Expansion-Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_Bus_Servo_Driver_Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_LED_Driver_Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/ja_COB_LED_Driver_Board',
          ],
        },
        {
          type: 'category',
          label: 'XIAO + ESP-IDF + ESP-Matter',
          items: [
            'Sensor/SeeedStudio_XIAO/Matter/ja_xiao_esp32_idf_env',
            'Sensor/SeeedStudio_XIAO/Matter/ja_getting_started_with_matter',
            'Sensor/SeeedStudio_XIAO/Matter/ja_xiao_esp32_matter_env',
            'Sensor/SeeedStudio_XIAO/Matter/ja_matter_development_framework_overview',
          ],
        },
        'Sensor/SeeedStudio_XIAO/ja_XIAO_ESPNOW',
        'Sensor/SeeedStudio_XIAO/ja_PCB_Design_XIAO',
        {
          type: 'category',
          label: 'コース付きキット',
          items: [
            'Sensor/SeeedStudio_XIAO/Kit_with_Courses/ja_XIAO-Kit-Courses',
          ],
        },
        'Sensor/SeeedStudio_XIAO/ja_XIAO_FAQ',
      ],
    },
    {
      type: 'category',
      label: 'XIAOガジェット',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Sensor/SeeedStudio_XIAO_Gadgets',
        },
      ],
    },
    {
      type: 'category',
      label: '電子ペーパーディスプレイ',
      collapsible: true,
      link: {
        type: "doc",
        id: "Sensor/ePaper_Displays/ja_seeed_epaper_displays",
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Sensor/ePaper_Displays',
        },
      ],
    },
    {
      type: 'category',
      label: 'LCDディスプレイ（液晶ディスプレイ）',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Sensor/LCD_Displays',
        },
      ],
    },
    {
      type: 'category',
      label: 'Wio Terminal',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Sensor/Wio_Terminal/ja_Wio_Terminal_Intro',
      },
      items: [
        'Sensor/Wio_Terminal/ja_Wio-Terminal-Getting-Started',
        'Sensor/Wio_Terminal/ja_Wio-Terminal-CircuitPython',
        'Sensor/Wio_Terminal/ja_Software-FreeRTOS',
        'Sensor/Wio_Terminal/ja_wio_terminal_faq',
        // {
        //   type: 'category',
        //   label: 'ArduPy with Wio Terminal',
        //   collapsed: true,
        //   collapsible: true,
        //   link: {
        //     type: "doc",
        //     id: 'Sensor/Wio_Terminal/ArduPy/ArduPy',
        //   },
        //   items: [
        //     'Sensor/Wio_Terminal/ArduPy/ArduPy-LCD',
        //     'Sensor/Wio_Terminal/ArduPy/ArduPy-Libraries',
        //   ],
        // },
        {
          type: 'category',
          label: 'ハードウェア概要',
          items: [
            {
              type: 'category',
              label: 'LCD使用方法',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Basic',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Graphics',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Fonts',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Anti-aliased-Fonts',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Loading-Image',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Linecharts',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-Histogram',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LCD-APIs',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/ja_Wio-Terminal-LVGL',
              ],
            },
            {
              type: 'category',
              label: '入出力',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/ja_Wio-Terminal-IO-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/ja_Wio-Terminal-IO-Analog',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/ja_Wio-Terminal-IO-Digital',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/ja_Wio-Terminal-IO-I2C',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/ja_Wio-Terminal-IO-SPI',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/ja_Wio-Terminal-Grove',
              ],
            },
            {
              type: 'category',
              label: 'IMU使用方法',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/IMU/ja_Wio-Terminal-IMU-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/IMU/ja_Wio-Terminal-IMU-Basic',
                'Sensor/Wio_Terminal/Hardware_Overview/IMU/ja_Wio-Terminal-IMU-Tapping',
              ],
            },
            {
              type: 'category',
              label: 'SDカード',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/SD_Card/ja_Wio-Terminal-FS-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/SD_Card/ja_Wio-Terminal-FS-ReadWrite',
              ],
            },
            {
              type: 'category',
              label: 'Wi-Fi',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/ja_Wio-Terminal-Network-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/ja_Wio-Terminal-Wi-Fi',
                'Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/ja_Wio-Terminal-Advanced-Wi-Fi',
              ],
            },
            {
              type: 'category',
              label: 'Bluetooth',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/ja_Wio-Terminal-Bluetooth-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/ja_Wio-terminal-BLE-introduction',
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/ja_Wio-Terminal-Web-Bluetooth',
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/ja_BLE-ibeacon-using-Wio-terminal',
              ],
            },
            {
              type: 'category',
              label: 'RTC',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/RTC/ja_Wio-Terminal-RTC',
              ],
            },
            {
              type: 'category',
              label: 'ボタン',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Buttons/ja_Wio-Terminal-Buttons',
              ],
            },
            {
              type: 'category',
              label: '5方向スイッチ',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/five_Way_Switch/ja_Wio-Terminal-Switch',
              ],
            },
            {
              type: 'category',
              label: '光センサー',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Light_Sensor/ja_Wio-Terminal-Light',
              ],
            },
            {
              type: 'category',
              label: '赤外線エミッター',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/ja_Wio-Terminal-Infrared-Emitter',
              ],
            },
            {
              type: 'category',
              label: 'マイクロフォン',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Microphone/ja_Wio-Terminal-Mic',
              ],
            },
            {
              type: 'category',
              label: 'ブザー',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Buzzer/ja_Wio-Terminal-Buzzer',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'アプリケーション',
          items: [
            {
              type: 'category',
              label: 'Easy IoT',
              items: [
                'Sensor/Wio_Terminal/Application/Easy_IoT/ja_Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central',
                'Sensor/Wio_Terminal/Application/Easy_IoT/ja_Wio-Terminal-Azure-IOT',
                'Sensor/Wio_Terminal/Application/Easy_IoT/ja_Connect-Wio-Terminal-to-Google-Cloud-IoT-Core',
                'Sensor/Wio_Terminal/Application/Easy_IoT/ja_Get-Started-with-Wio-Terminal-and-Wappsto-IoT',
                'Sensor/Wio_Terminal/Application/Easy_IoT/ja_CyberDeck_Wio-Terminal',
              ],
            },
            {
              type: 'category',
              label: '組み込みML ',
              items: [
                {
                  type: 'category',
                  label: 'Edge Impulseベースのプロジェクト ',
                  items: [
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/ja_Wio-Terminal-TinyML-EI-1',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/ja_Wio-Terminal-TinyML-EI-2',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/ja_Wio-Terminal-TinyML-EI-3',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/ja_Wio-Terminal-TinyML-EI-4',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/ja_Wio-Terminal-TinyML-EI-5',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/ja_Wio-Terminal-TinyML-EI-6',
                  ],
                },
                {
                  type: 'category',
                  label: 'TensorFlow Liteベースのプロジェクト',
                  items: [
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/ja_Wio-Terminal-TinyML-TFLM-1',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/ja_Wio-Terminal-TinyML-TFLM-2',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/ja_Wio-Terminal-TinyML-TFLM-3',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/ja_Wio-Terminal-Gesture-Recognition',
                  ],
                },
                'Sensor/Wio_Terminal/Application/Embedded_ML/ja_AIoTs_GPS_state_tester',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '拡張ボード',
          items: [
            'Sensor/Wio_Terminal/Extension_Board/ja_Wio-Terminal-Battery-Chassis',
            'Sensor/Wio_Terminal/Extension_Board/ja_Wio-Terminal-Chassis-Battery_650mAh',
            'Sensor/Wio_Terminal/Extension_Board/ja_Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915',
            'Sensor/Wio_Terminal/Extension_Board/ja_Wio-Terminal-Ethernet',
            {
              type: 'category',
              label: 'オーディオ拡張ボード',
              items: [
                'Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/ja_Wio-Terminal-Audio-Overview',
                'Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/ja_Wio-Terminal-Audio-Play-Record',
                'Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/ja_Wio-Terminal-Audio-GUI',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'コース付きキット',
          items: [
            'Sensor/Wio_Terminal/Kit_with_Courses/ja_Wio-Terminal-TinyML-Kit-Course',
            'Sensor/Wio_Terminal/Kit_with_Courses/ja_Wio-Terminal-TinyML',
            'Sensor/Wio_Terminal/Kit_with_Courses/ja_Introduction_to_Artificial_Intelligence_for_Makers',
          ],
        },
        {
          type: 'category',
          label: 'チュートリアル',
          items: [
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Firmware',
            'Sensor/Wio_Terminal/Tutorial/ja_Azure_IoT_CC',
            {
              type: 'category',
              label: 'Blynk for Wio Terminal',
              items: [
                'Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/ja_Wio-Terminal-Blynk',
                'Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/ja_Blynk-wireless-OTA-functionality-to-Wio-Terminal',
              ],
            },
            {
              type: 'category',
              label: 'Wio Terminal USB Host',
              items: [
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/ja_Wio-Terminal-USBH-Overview',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/ja_Wio-Terminal-USBH-Keyboard',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/ja_Wio-Terminal-USBH-Mouse',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/ja_Wio-Terminal-USBH-Xbox',
              ],
            },
            {
              type: 'category',
              label: 'Wio Terminal USB Client',
              items: [
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/ja_Wio-Terminal-USBCLIENT-Overview',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/ja_Wio-Terminal-USBCLIENT-Keyboard',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/ja_Wio-Terminal-USBCLIENT-Mouse',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/ja_Wio-Terminal-USBCLIENT-MIDI',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/ja_Wio-Terminal-HMI-Usermode-SDK',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/ja_Wio-Terminal-DAPLink',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/ja_Wio-Terminal-Reading-Raspberry-Pi',
              ],
            },
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Displaying-Gyro',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Storting-Analog-Data',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Displaying-Photos',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Interactive-Face',
            'Sensor/Wio_Terminal/Tutorial/ja_Barometric-Pressure-sensor-using-the-Wio-terminal',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Reading-COVID19',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Thermal-Camera',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-HMI',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Sound-Meter',
            'Sensor/Wio_Terminal/Tutorial/ja_Getting_started_wizard',
            'Sensor/Wio_Terminal/Tutorial/ja_Edge-Impulse-Tuner',
            'Sensor/Wio_Terminal/Tutorial/ja_Wio-Terminal-Reading-Github',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'SenseCAP Indicator',
    //   collapsed: true,
    //   collapsible: true,
    //   link: {
    //     type: "doc",
    //     id: 'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Introduction',
    //   },
    //   items: [
    //     'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Introduction',
    //     {
    //       type: 'category',
    //       label: 'Setup Guide',
    //       items: [
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Native_Firmware',
    //         {
    //           type: 'category',
    //           label: 'OpenAI X SenseCAP Indicator',
    //           // link: {
    //           //   type: "doc",
    //           //   id: 'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/Overview',
    //           // },
    //           items: [
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/Overview',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/How_to_Set_the_API_Key',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/ChatGPT_Indicator',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/DALL·E_AI_Picture_Generator',
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Development Tutorial',
    //       items: [
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/How_to_Create_your_own_UI',
    //         {
    //           type: 'category',
    //           label: 'Develop with ESP32-S3',
    //           items: [
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Four-inch_Touch_Screen',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Wi-Fi',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/BLE',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Button',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/LoRa',
    //           ],
    //         },
    //         {
    //           type: 'category',
    //           label: 'Develop with RP2040',
    //           items: [
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/CO2_Sensor_Built-in',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/tVOC_Sensor_Built-in',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Buzzer',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Micro_SD',
    //             {
    //               type: 'category',
    //               label: 'Grove',
    //               items: [
    //                 'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/Grove_ADC',
    //                 'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/Grove_IIC',
    //               ],
    //             },
    //           ],
    //         },
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/SenseCAP_Indicator_Arduino',
    //       ],
    //     },
    //     'Sensor/SenseCAP/SenseCAP_Indicator/How_To_Flash_The_Default_Firmware',
    //     {
    //       type: 'category',
    //       label: 'Application',
    //       items: [
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/OpenAI',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/Home_Assistant',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/LoRa',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/Matter',
    //       ],
    //     },
    //   ],
    // },
    {
      type: 'category',
      label: 'reSpeaker',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_ReSpeaker',
      },
      items: [
        {
          type: 'category',
          label: 'reSpeaker XVF 3800',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf3800_usb_4_mic_array',
          },
          items: [
            {
              type: 'category',
              label: 'reSpeaker XVF 3800 with XIAO 紹介',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'doc',
                id: 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf3800_with_xiao_intro',
              },
              items: [
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_i2c_list',
                {
                  type: 'category',
                  label: '再生と録音',
                  items: [
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf3800_i2s_test',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_record_playback',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_volume',
                  ],
                },
                {
                  type: 'category',
                  label: 'ストリーミング',
                  items: [
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_udp_streaming',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_http',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_mqtt_stream',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_websockets',
                  ],
                },
                {
                  type: 'category',
                  label: 'デバイス制御',
                  items: [
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_rgb_test',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_gpio',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_doa_vad',
                  ],
                },
              ],
            },
            'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_python_sdk',
          ],
        },
        {
          type: 'category',
          label: 'reSpeaker Flex',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/reSpeaker_flex/ja_reSpeaker_flex_intro',
          },
          items: [
            {
              type: 'category',
              label: 'XIAO対応 reSpeaker Flex',
              link: {
                type: 'doc',
                id: 'Sensor/reSpeaker_flex/ja_reSpeaker_flex_xiao',
              },
              items: [
                {
                  type: 'category',
                  label: '再生と録音',
                  items: [
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_i2s_test',
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_xiao_playback_record',
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_volume_xiao',
                  ],
                },
                {
                  type: 'category',
                  label: 'オーディオストリーミング',
                  items: [
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_xiao_udp_stream',
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_xiao_http_stream',
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_xiao_mqtt',
                  ],
                },
                {
                  type: 'category',
                  label: 'デバイス制御',
                  items: [
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_gpio',
                    'Sensor/reSpeaker_flex/ja_reSpeaker_flex_doa',
                  ],
                },
              ],
            },
            'Sensor/reSpeaker_flex/ja_reSpeaker_flex_python_control',
            //'Sensor/Sound_event_sensor/sound_event_sensor_intro_ha',
            // add sub-docs here later
            // 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/setup',
            // 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/configuration',
          ],
        },
        {
          type: 'category',
          label: 'reSpeaker Lite',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/ReSpeaker_Lite/ja_reSpeaker_lite_introduction',
          },
          items: [
            {
              type: 'category',
              label: 'reSpeaker Lite with XIAO ESP32S3',
              link: {
                type: 'doc',
                id: 'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_xiao_respeaker',
              },
              items: [
                {
                  type: 'category',
                  label: '再生と録音',
                  items: [
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_i2s_test',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_record_and_play',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_volume',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_player_spiffs',
                  ],
                },
                {
                  type: 'category',
                  label: 'ストリーミング',
                  items: [
                    {
                      type: 'doc',
                      id: 'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_streams_generator',
                      label: 'Streams Generator',
                    },
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_streams_print',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_streams_memory',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_streams_mqtt',
                  ],
                },
                {
                  type: 'category',
                  label: 'デバイス制御',
                  items: [
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_rgb_test',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_button',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                // 'Sensor/ReSpeaker_Lite/Application/ja_respeaker_lite_ha',
                'Sensor/ReSpeaker_Lite/Application/ja_respeaker_lite_pi5',
              ],
            },
            'Sensor/ReSpeaker_Lite/ja_respeaker_enclosure',
          ],
        },
        {
          type: 'category',
          label: 'reSpeaker XVF 3000',
          collapsed: true,
          collapsible: true,
          items: [
            'Seeed_Elderly/reSpeaker/Extension_Board/ja_ReSpeaker_Mic_Array_v3.0',
            'Seeed_Elderly/reSpeaker/Extension_Board/ja_ReSpeaker_Mic_Array_v2.0',
            'Seeed_Elderly/reSpeaker/ja_ReSpeaker-USB-Mic-Array',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'reSpeaker 2-Mics Pi HAT',
          link: {
            type: 'doc',
            id: 'Sensor/ReSpeaker_2-Mics_Pi_HAT/ja_ReSpeaker_2_Mics_Pi_HAT',
          },
          items: [
            {
              type: 'category',
              label: 'v1ユーザー向け（非推奨）',
              items: [
                'Sensor/ReSpeaker_2-Mics_Pi_HAT/v1-deprecated/ja_ReSpeaker_2_Mics_Pi_HAT_Raspberry',
                'Sensor/ReSpeaker_2-Mics_Pi_HAT/v1-deprecated/ja_ReSpeaker_2_Mics_Pi_HAT_Jetson',
              ],
            },
            {
              type: 'category',
              label: 'v2ユーザー向け',
              items: [
                'Sensor/ReSpeaker_2-Mics_Pi_HAT/v2/ja_ReSpeaker_2_Mics_Pi_HAT_Raspberry_v2',
                // 'Sensor/ReSpeaker_2-Mics_Pi_HAT/v2/ja_ReSpeaker_2_Mics_Pi_Hat_v2_Speech_Recognition',
              ],
            },
            'Sensor/ReSpeaker_2-Mics_Pi_HAT/ja_ReSpeaker_2_Mics_Pi_HAT-Hardware-Revisions',
          ],
        },
        {
          type: 'category',
          label: '音響イベント検出モジュール',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/Sound_event_sensor/ja_sound_event_sensor_intro',
          },
          items: [
            // 'Sensor/Sound_event_sensor/ja_sound_event_sensor_intro_ha',
            // add sub-docs here later
            // 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/setup',
            // 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/configuration',
          ],
        },
        {
          type: 'category',
          label: 'reSpeaker Clip',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/reSpeaker_clip/ja_respeaker_clip_getting_started',
          },
          items: [
            'Sensor/reSpeaker_clip/ja_respeaker_clip_getting_started',
            'Sensor/reSpeaker_clip/ja_respeaker_clip_basic_sdk_guide',
            'Sensor/reSpeaker_clip/ja_respeaker_clip_rtc_streaming',
            'Sensor/reSpeaker_clip/ja_respeaker_clip_service_integration',
            'Sensor/reSpeaker_clip/ja_respeaker_clip_sensecraft_voice_sdk',
            {
              type: 'category',
              label: 'ファームウェア SDK',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'doc',
                  id: 'Sensor/reSpeaker_clip/ja_respeaker_clip_firmware_quick_start',
                  label: 'はじめに',
                },
                {
                  type: 'doc',
                  id: 'Sensor/reSpeaker_clip/ja_respeaker_clip_firmware_development_guide',
                  label: '開発ガイド',
                },
                {
                  type: 'doc',
                  id: 'Sensor/reSpeaker_clip/ja_respeaker_clip_customization_at_command',
                  label: 'カスタム AT コマンド',
                },
              ],
            },
          ],
        },
        ...(hasReSpeakerFaq ? [{
          type: 'category',
          label: 'よくある質問',
          collapsed: true,
          collapsible: true,
          link: { type: 'doc', id: 'FAQ/respeaker/ja_respeaker_faq' },
          items: [
            'FAQ/respeaker/ja_xvf3800_usb_4_mic_faq', 'FAQ/respeaker/ja_flex_xvf3800_faq',
            'FAQ/respeaker/ja_respeaker_lite_faq', 'FAQ/respeaker/ja_xvf3000_faq',
            'FAQ/respeaker/ja_respeaker_2_mics_pi_hat_faq', 'FAQ/respeaker/ja_respeaker_clip_faq',
          ],
        }] : []),
        {
          type: 'category',
          label: 'アプリケーション',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'Home Assistant',
              items: [
                'Sensor/Sound_event_sensor/ja_sound_event_sensor_intro_ha',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_ha',
                'Sensor/ReSpeaker_Lite/Application/ja_respeaker_lite_ha',
              ],
            },
            {
              type: 'category',
              label: 'ロボティクス',
              items: [
                'Sensor/reSpeaker_flex/ja_reSpeaker_flex_lekiwi',
                'Sensor/reSpeaker_flex/ja_reSpeaker_flex_lerobot_soarm',
                'Sensor/reSpeaker_flex/ja_reSpeaker_flex_rebot_arm',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_arm',
                'Sensor/reSpeaker_flex/ja_reSpeaker_flex_ros',
              ],
            },
            {
              type: 'category',
              label: '音声認識',
              items: [
                {
                type: 'category',
                label: 'TensorFlow',
                items: [
                  'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/ja_respeaker_streams_i2s_tflite',
                  'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_tflm',
                  'Sensor/ReSpeaker_2-Mics_Pi_HAT/v2/ja_ReSpeaker_2_Mics_Pi_Hat_v2_Speech_Recognition',
                ],
              },
              'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_edgeimpulse',                
              'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_picovoice',
              'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_sensecraft',
              ],
            },
            {
              type: 'category',
              label: '会話型AI',
              items: [
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_voice_agent',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_xiaozhi',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_agora',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_agora_ten_framework',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/ja_respeaker_xvf_3800_openclaw',
                'Sensor/reSpeaker_clip/ja_respeaker_clip_python_usage_stt_llm_transcribe',
                'Sensor/reSpeaker_clip/ja_respeaker_clip_python_usage_stt_llm_transcribe_memory',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'その他のセンシングモジュール',
      items: [
        {
          type: 'category',
          label: 'センサー',
          items: [
            'Sensor/Beyond_Grove/Sensors/ja_Ultra_Sonic_range_measurement_module',
            'Sensor/Beyond_Grove/Sensors/ja_Water-Flow-Sensor',
            'Sensor/Beyond_Grove/Sensors/ja_Weight_Sensor_Load_Cell_0-500g',
            'Sensor/Beyond_Grove/Sensors/ja_G1_Water_Flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/ja_G1_and_2_inch_Water_Flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/ja_G1-8_Water_Flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/ja_G3-4_Water_Flow_sensor',
            'Sensor/Beyond_Grove/Sensors/ja_M11_1.25_Water_flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/ja_PIR_Motion_Sensor_Large_Lens_version',
            'Sensor/Beyond_Grove/Sensors/ja_Photo_Reflective_Sensor',
            'Sensor/Beyond_Grove/Sensors/ja_Photo_interrupter_OS25B10',
            'Sensor/Beyond_Grove/Sensors/ja_Piezo_Sensor-MiniSense_100',
            'Sensor/Beyond_Grove/Sensors/ja_RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz',
            'Sensor/Beyond_Grove/Sensors/ja_Gear_Stepper_Motor_Driver_Pack',
            'Seeed_Elderly/Radar_Sensor/ja_Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11',
          ],
        },
        {
          type: 'category',
          label: 'センサーネットワーク',
          items: [
            'Sensor/Beyond_Grove/Sensor_Network/ja_2KM_Long_Range_RF_link_kits_w_encoder_and_decoder',
            'Sensor/Beyond_Grove/Sensor_Network/ja_315Mhz_RF_link_kit',
            'Sensor/Beyond_Grove/Sensor_Network/ja_315MHz_Simple_RF_Link_Kit',
            'Sensor/Beyond_Grove/Sensor_Network/ja_315Mhz_Wireless_car_key_fob_with_key_chain',
            'Sensor/Beyond_Grove/Sensor_Network/ja_315Mhz_remote_relay_switch_kits-2_channels',
            'Sensor/Beyond_Grove/Sensor_Network/ja_433Mhz_RF_Link_Kit',
            'Sensor/Beyond_Grove/Sensor_Network/ja_SDLogger-Open_Hardware_Data_Logger',
            'Sensor/Beyond_Grove/Sensor_Network/ja_WiFi_Serial_Transceiver_Module',
            'Sensor/Beyond_Grove/Sensor_Network/ja_Wireless_Sensor_Node-Solar_Kit',
          ],
        },
        {
          type: 'category',
          label: 'EcoEye Vision Camera',
          items: [
            'Sensor/Beyond_Grove/EcoEye_Embedded_Vison_Camera/ja_Get_Started_with_EcoEye',
          ],
        },
        {
          type: 'category',
          label: 'AIアシスタント',
          items: [
            'Sensor/Beyond_Grove/AI_Assistant/ja_ai_assistant_getting_started',
          ],
        },
        {
          type: 'category',
          label: 'アクセサリー',
          items: [
            {
              type: 'category',
              label: '充電',
              items: [
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Essentials',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Lipo_Rider_Pro',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Lipo-Rider-Plus',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Lipo_Rider_V1.3',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_DC_framework_miniature_solenoid_VL-0063',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_DC_framework_solenoid_HCNE1-0520',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_DC_framework_solenoid_HCNE1-0630',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_0.5w_Solar_Panel_55x70',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_1.5W_Solar_Panel_81x137',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_1w_Solar_Panel_80x100',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_2.5W_Solar_Panel_116x160',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_3W_Solar_Panel_138x160',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_3.6V_Micro_hydro_generator',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Bicycle_Dynamo_With_Bracket-6V_3W',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Battery_kit_3.7V_520_mAh',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Logic_DC_Jack',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Qi_Wireless_Charger_Transmitter',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Lipo_Rider',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_Lipo_Rider_V1.1',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_5V-3.3V_Breadboard_Power_Supply',
                'Sensor/Beyond_Grove/Accessories/Charge/ja_5V-3.3V_Breadboard_Power_Supply_v1.1',
              ],
            },
            {
              type: 'category',
              label: '入出力',
              items: [
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_USB_To_Uart_5V_3V3',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_125Khz_RFID_module-UART',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_13.56Mhz_RFID_module-IOS-IEC_14443_type_a',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_AVR_USB_Programmer',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_Scream_out_loud-110dBA_fixed_tone_Siren',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_2.8inch-TFT_Touch_Shield_V1.0',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_USB_To_Uart_3V3',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_USB_To_Uart_5V',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_Bus_Pirate_v3_assembled',
                'Sensor/Beyond_Grove/Accessories/Input_Output/ja_Codec-Adaptive_Wireless_Relay',
              ],
            },
            {
              type: 'category',
              label: '電流',
              items: [
                'Sensor/Beyond_Grove/Accessories/Current/ja_Adjustable_DC_DC_Power_Converter_1V-12V-1.5A',
                'Sensor/Beyond_Grove/Accessories/Current/ja_Capacitance_Meter_Kit',
                'Sensor/Beyond_Grove/Accessories/Current/ja_RS-232_To_TTL_Conveter-MAX3232IDR',
              ],
            },
            {
              type: 'category',
              label: 'ケース',
              items: [
                'Sensor/Beyond_Grove/Accessories/Case/ja_Bracket_for_Infrared_Proximity_Sensor',
                'Sensor/Beyond_Grove/Accessories/Case/ja_Shield-MaTrix-V0.9b',
              ],
            },
            {
              type: 'category',
              label: 'LED',
              items: [
                'Sensor/Beyond_Grove/Accessories/LED/ja_FSM-55',
              ],
            },
            {
              type: 'category',
              label: 'ツール',
              items: [
                'Sensor/Beyond_Grove/Accessories/Tools/ja_Bluetooth_Multimeter',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Nano',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_Dfu-util',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_Replacement_LCD_Screen_for_DSO_nano',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Nano_v3',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Nano-Development',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Nano-OpenOCD_gdb',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Nano-Qemu_gdb',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Nano-gcc',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Quad',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Quad_Manual_by_the_community',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Quad-Beta_HW',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Quad-Building_Firmware',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_DSO_Quad-Calibration',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_Mini_Soldering_Iron',
                'Sensor/Beyond_Grove/Accessories/Tools/ja_RF_Explorer_Software',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'その他のマイクロコントローラー',
      items: [
        {
          type: 'category',
          label: 'Wioシリーズ',
          items: [
            'Sensor/Wio_Series/ja_Wio',
            // {
            //   type: 'category',
            //   label: 'Wio-E5',
            //   items: [
            //     'Sensor/Wio_Series/Wio-E5/LoRa_E5_mini',
            //     'Sensor/Wio_Series/Wio-E5/LoRa_E5_Dev_Board',
            //     'Sensor/Wio_Series/Wio-E5/LoRa-E5_STM32WLE5JC_Module',
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Wio-SX1262',
            //   items: [
            //     'Sensor/Wio_Series/Wio_SX1262/Introduction',
            //     //'Sensor/Wio_Series/Wio_SX1262/How_to_build_a_lora_sensor',
            //     {
            //       type: 'category',
            //       label: 'Wio SX1262 with XIAO ESP32S3 Kit',
            //       items: [
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Introduction',
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Get_Started_meshtastic',
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Single_Channel_LoRaWAN_Gateway',
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/LoRaWAN_Sensor_Node',
            //         {
            //           type: 'category',
            //           label: 'LoRaWAN Network Server',
            //           items: [
            //             'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Lorawan_network_server/TTN',
            //             'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Lorawan_network_server/Chirpstack',
            //           ],
            //         },
            //       ],
            //     },
            //   ],
            // },
            //             {
            //   type: 'category',
            //   label: 'Wio Tracker 1110 Dev Board',
            //   items: [
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Introduction',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_to_TTN',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/LoRa_Locator',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_1110_to_HA',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/change_antenna_path',
            //     {
            //       type: 'category',
            //       label: 'Development Tutorial',
            //       items: [
            //         'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Development_Tutorial/Setup_toolchain',
            //       ],
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Wio WM1110 Dev Kit',
            //   items: [
            //     'Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Introduction',
            //     'Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit',
            //     {
            //       type: 'category',
            //       label: 'Development Tutorial',
            //       items: [
            //         'Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Development_Tutorial/Hardware_Overview',
            //       ],
            //     },
            //   ],
            // },
            {
              type: 'category',
              label: 'LPWAN Dev Kit for Sidewalk',
              items: [
                'Sensor/Wio_Series/LPWAN_Dev_Kit_for_Sidewalk/ja_LPWAN_Dev_Kit_for_Sidewalk',
                'Sensor/Wio_Series/LPWAN_Dev_Kit_for_Sidewalk/ja_Switch_to_Wio_Tracker',
              ],
            },
            // {
            //   type: 'category',
            //   label: 'Wio WM1302',
            //   items: [
            //     'Sensor/Wio_Series/Wio_WM1302/WM1302_module',
            //     'Sensor/Wio_Series/Wio_WM1302/WM1302_Pi_HAT',
            //   ],
            // },
            {
              type: 'category',
              label: 'Wio RP2040',
              items: [
                {
                  type: 'category',
                  label: 'Wio RP2040 Module',
                  items: [
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_Module/ja_Wio_RP2040_Module_Build-in_Wireless_2.4G',
                  ],
                },
                {
                  type: 'category',
                  label: 'Wio RP2040 mini Dev Board',
                  items: [
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/ja_Wio_RP2040_mini_Dev_Board-Onboard_Wifi',
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/ja_Wio-RP2040-with-Arduino-WIFI',
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/ja_LAN_Communications',
                    {
                      type: 'category',
                      label: 'アプリケーション',
                      items: [
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/ja_Use_MQTT_to_remotely_light_up_LED_lights',
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/ja_Use_Socket_to_connect_to_the_forum',
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/ja_Wireless-Fall-Detection-Device',
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/ja_Wireless-desktop-atmosphere-lamp',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Wio Link',
              items: [
                'Sensor/Wio_Series/Wio_Link/ja_Wio_Link',
                'Sensor/Wio_Series/Wio_Link/ja_Wio_Link_Bootcamp_Kit',
                'Sensor/Wio_Series/Wio_Link/ja_Wio_Link_Deluxe_Kit',
                'Sensor/Wio_Series/Wio_Link/ja_Wio_Link_Deluxe_Plus_Kit',
                'Sensor/Wio_Series/Wio_Link/ja_Wio_Link_Environment_Kit',
                'Sensor/Wio_Series/Wio_Link/ja_Wio_Link_Event_Kit',
                'Sensor/Wio_Series/Wio_Link/ja_Wio_Link_Starter_Kit',
              ],
            },
            {
              type: 'category',
              label: 'Wio Tracker',
              items: [
                'Sensor/Wio_Series/Wio_Tracker/ja_Wio_Tracker',
                'Sensor/Wio_Series/Wio_Tracker/ja_Wio_LTE_Cat.1',
                'Sensor/Wio_Series/Wio_Tracker/ja_wio_gps_board',
                'Sensor/Wio_Series/Wio_Tracker/ja_LTE_Cat_1_Pi_HAT',
                'Sensor/Wio_Series/Wio_Tracker/ja_Wio_LTE_Cat_M1_NB-IoT_Tracker',
                'Sensor/Wio_Series/Wio_Tracker/ja_Wio-Extension-RTC',
                'Sensor/Wio_Series/Wio_Tracker/ja_Grove_Starter_Kit_for_Wio_LTE',
              ],
            },
            {
              type: 'category',
              label: 'Wio Lite',
              items: [
                'Sensor/Wio_Series/Wio_Lite/ja_Wio-Lite-AI-Getting-Started',
                'Sensor/Wio_Series/Wio_Lite/ja_Wio-Lite-W600',
                'Sensor/Wio_Series/Wio_Lite/ja_Wio-Lite-MG126',
                'Sensor/Wio_Series/Wio_Lite/ja_Wio_Lite_RISC_V_GD32VF103_with_ESP8266',
                'Sensor/Wio_Series/Wio_Lite/ja_Grove-Shield-for-Wio-Lite',
                'Sensor/Wio_Series/Wio_Lite/ja_Grove_Base_Shield_for_NodeMCU_V1.0',
              ],
            },
            {
              type: 'category',
              label: 'Wio Node',
              items: [
                'Sensor/Wio_Series/Wio_Node/ja_Wio_Node',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Seeeduinoシリーズ',
          items: [
            'Sensor/Seeeduino_Series/ja_Getting_Started_with_Seeeduino',
            'Sensor/Seeeduino_Series/ja_Seeed_Arduino_Boards',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Buying_Guide',
            {
              type: 'category',
              label: 'Seeeduino',
              items: [
                'Sensor/Seeeduino_Series/Seeeduino/ja_Seeeduino_v4.2',
                'Sensor/Seeeduino_Series/Seeeduino/ja_Seeeduino_v4.0',
                'Sensor/Seeeduino_Series/Seeeduino/ja_Seeeduino_V2.2_Atmega-168P',
                'Sensor/Seeeduino_Series/Seeeduino/ja_Seeeduino_V2.2',
                'Sensor/Seeeduino_Series/Seeeduino/ja_Seeeduino_v2.21',
                'Sensor/Seeeduino_Series/Seeeduino/ja_Seeeduino_v3.0',
                'Sensor/Seeeduino_Series/Seeeduino/ja_Seeeduino',
              ],
            },
            'Sensor/Seeeduino_Series/ja_Seeeduino_Cloud',
            'Sensor/Seeeduino_Series/ja_Seeeduino-Cortex-M0',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Ethernet',
            'Sensor/Seeeduino_Series/ja_Seeeduino_GPRS',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Lite',
            'Sensor/Seeeduino_Series/ja_Seeeduino_LoRAWAN',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Lotus',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Lotus_Cortex-M0-',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Mega',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Mega_Protoshield_Kit',
            'Sensor/Seeeduino_Series/ja_Seeeduino-Nano',
            {
              type: 'category',
              label: 'Seeeduino Stalker',
              items: [
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/ja_Seeeduino_Stalker_V3-Waterproof_Solar_Kit',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/ja_Seeeduino_Stalker_V3.1',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/ja_Seeeduino_Stalker_v3_enclosure',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/ja_Seeeduino_Stalker_v1.0',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/ja_Seeeduino_Stalker_v2.3',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/ja_Seeeduino_Stalker',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/ja_Seeeduino-Stalker_v3',
              ],
            },
            'Sensor/Seeeduino_Series/ja_SeeedStudio-GD32-RISC-V-Dev-Board',
            'Sensor/Seeeduino_Series/ja_Seeeduino-Crypto-ATmega4809-ECC608',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Arch',
            'Sensor/Seeeduino_Series/ja_Seeeduino_Arch_V1.0',
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Sensor/Seeeduino_Series/Application/ja_Driver_for_Seeeduino',
                'Sensor/Seeeduino_Series/Application/ja_FM_Receiver',
                'Sensor/Seeeduino_Series/Application/ja_Grove-SGP41-with-AHT20',
              ],
            },
            {
              type: 'category',
              label: 'コース付きキット',
              items: [
                'Sensor/Seeeduino_Series/Kit_with_Courses/ja_Grove_IoT_Starter_Kits_Powered_by_AWS',
                'Sensor/Seeeduino_Series/Kit_with_Courses/ja_Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'LinkIt',
          items: [
            'Seeed_Elderly/LinkIt/ja_LinkIt',
            'Seeed_Elderly/LinkIt/ja_LinkIt_Smart_7688',
            'Seeed_Elderly/LinkIt/ja_LinkIt_Smart_7688_Duo',
            'Seeed_Elderly/LinkIt/ja_Linkit_Connect_7681',
            'Seeed_Elderly/LinkIt/ja_Breakout_for_LinkIt_Smart_7688',
            'Seeed_Elderly/LinkIt/ja_Breakout_for_LinkIt_Smart_7688_v2.0',
            'Seeed_Elderly/LinkIt/ja_Arduino_Breakout_for_LinkIt_Smart_7688_Duo',
            'Seeed_Elderly/LinkIt/ja_Grove_Breakout_for_LinkIt_Smart_7688_Duo',
            'Seeed_Elderly/LinkIt/ja_Grove_Starter_kit_for_LinkIt_Smart7688_Duo',
            {
              type: 'category',
              label: 'Linklt ONE',
              items: [
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-Analog_Interface',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-Colorful_World',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-Get_temperature_with_Webpage',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-Hello_World',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-Light-Sensor',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-Marquee',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt-ONE-Tutorial---Mini-Servo',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-Push_Button',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-SMS_control_the_LED',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_LinkIt_ONE_Tutorial-The_Basics',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_Sidekick_Basic_Kit_for_LinkIt_ONE',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_Grove-Starter_Kit_for_LinkIt_ONE',
                'Seeed_Elderly/LinkIt/Linklt_ONE/ja_Secret_Box',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Arch',
          items: [
            'Sensor/Arch/ja_Arch_Mix',
            'Sensor/Arch/ja_Arch_V1.1',
            'Sensor/Arch/ja_Arch_Pro',
            'Sensor/Arch/ja_Arch_BLE',
            'Sensor/Arch/ja_Arch_Link',
            'Sensor/Arch/ja_Arch_GPRS',
            'Sensor/Arch/ja_Arch_GPRS_V2',
            'Sensor/Arch/ja_Arch_Max',
            'Sensor/Arch/ja_Arch_Max_v1.1',
            'Sensor/Arch/ja_Heart-Sound_Sensor',
            'Sensor/Arch/ja_Grove-Starter_Kit_for_mbed',
          ],
        },
        {
          type: 'category',
          label: 'Azure Sphere MT3620',
          items: [
            'Sensor/Azure_Sphere_MT3620/ja_Azure_Sphere_MT3620_Development_Kit',
            'Sensor/Azure_Sphere_MT3620/ja_Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit',
            'Sensor/Azure_Sphere_MT3620/ja_MT3620_Ethernet_Shield_v1.0',
            'Sensor/Azure_Sphere_MT3620/ja_MT3620_Mini_Dev_Board',
            'Sensor/Azure_Sphere_MT3620/ja_MT3620_Grove_Breakout',
          ],
        },
        {
          type: 'category',
          label: 'Seeed Studio IoT Botton',
          items: [
            'Sensor/IOT_Button_for_ESPHOME/ja_getting_started_with_iot_button',
            'Sensor/IOT_Button_for_ESPHOME/ja_SEEED_IOT_BOTTON_FOR_ESPHOME',
            'Sensor/IOT_Button_for_ESPHOME/ja_seeed_iot_button_with_zigbee',
            'Sensor/IOT_Button_for_ESPHOME/ja_seeed_iot_button_with_seeed_discovery',
          ],
        },
        {
          type: 'category',
          label: 'IOT Button for AWS',
          items: [
            'Sensor/IOT_Button_For_AWS/ja_SEEED-IOT-BUTTON-FOR-AWS',
          ],
        },
        {
          type: 'category',
          label: 'Pi Pico',
          items: [
            'Sensor/Pi_Pico/ja_Grove-Starter-Kit-for-Raspberry-Pi-Pico',
          ],
        },
      ],
    },
    // {
    //   type: 'doc',
    //   label: '--Network--',
    //   id: 'Sensor_Network',
    // },
    // {
    //   type: 'html',
    //   value: `
    // <style>
    //   .sub_item {
    //     width: 275px;
    //     display:inline-block;
    //     text-align:center;
    //     font-size:20px;
    //     margin-top: 10px;
    //   }
    // </style>
    // <div style="width:100px;text-align:center">
    //   <div class="sub_item"><strong> Network </strong></div>
    // </div>
    // `,
    // },
    {
      type: 'doc',
      id: 'ja_Network',
      label: 'ネットワーク',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Meshtastic Network',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Network/Meshtastic_Network/ja_meshtastic_intro',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Network/Meshtastic_Network',
        },
      ]
    },
    // {
    //   type: 'category',
    //   label: 'Meshtastic Network',
    //   collapsed: true,
    //   collapsible: true,
    //   link: {
    //     type: "doc",
    //     id: 'Network/Meshtastic_Network/meshtastic_intro',
    //   },
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'T1000-E Tracker',
    //       items: [
    //         'Network/Meshtastic_Network/T1000-E/t1000_e_intro',
    //         {
    //           type: 'doc',
    //           id: 'Network/Meshtastic_Network/T1000-E/sensecap_t1000_e',
    //           label: 'Get Started with T1000-E',
    //         },
    //       ],
    //     },
    //         {
    //           type: 'category',
    //           label: 'SenseCAP Indicator for Meshtastic',
    //           items: [
    //             'Network/Meshtastic_Network/SenseCAP_Indicator/sensecap_indicator_meshtastic',
    //           ],
    //         },
    //         {
    //           type: 'category',
    //           label: 'Wio Tracker 1110 Meshtastic Kit',
    //           items: [
    //             'Network/Meshtastic_Network/wio_tracker_kit/meshtastic_kit_wio_tracker_1110',
    //             {
    //               type: 'doc', 
    //               id:'Network/Meshtastic_Network/wio_tracker_kit/flash_meshtastic_kit',
    //               label: 'Flash Firmware', 
    //             },
    //           ],
    //         },
    //         {
    //           type: 'category',
    //           label: 'XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic',
    //           items: [
    //             'Network/Meshtastic_Network/XIAO_ESP32S3_&_SX1262_Kit/Get_Started_meshtastic',
    //           ],
    //         },
    //       ],
    // },
    {
      type: 'category',
      label: 'LoRa Wioシリーズ',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Network/LoRa_Wio_Series',
        },
      ]
    },
    {
      type: 'category',
      label: 'SenseCAP Gateway',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Network/SenseCAP_Network/ja_SenseCAP_Gateway_Intro',
      },
      items: [
        {
          type: 'category',
          label: 'reComputer R1225 LoRaWAN Gateway',
          items: [
            'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/ja_R1225_introduction',
            'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/ja_R1225_Quick_Start',
            {
              type: 'category',
              label: 'Cloud Platform Integration',
              items: [
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/CloudPlatform_Connection_Guide/ja_Connecting_R1225_to_ChirpStack',
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/CloudPlatform_Connection_Guide/ja_Connecting_R1225_to_TTN',
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/CloudPlatform_Connection_Guide/ja_Connecting_R1225_to_AWS_IoT',
              ],
            },
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/Application/ja_How_to_use_modbus_rs485',
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/Application/ja_How_to_use_bacnet_ms_tp',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'SenseCAP M2 Multi-Platform Gateway',
          items: [
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/ja_SenseCAP_M2_Multi_Platform_Overview',
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/ja_SenseCAP_M2_MP_Gateway_LNS_Configuration',
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/ja_Quick_Start',
            {
              type: 'category',
              label: 'チュートリアル',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/ja_Connect-M2-Multi-Platform-Gateway-to-AWS-IoT',
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/ja_Connect-M2-Multi-Platform-Gateway-to-The-Things-Network',
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/ja_Connect-M2-Multi-Platform-Gateway-to-ChirpStack',
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/ja_traffic_saving_config',
              ],
            },
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/ja_flash_opensource_firmware_to_m2_gateway'
          ],
        },
        {
          type: 'category',
          label: 'Helium Gateway',
          items: [
            {
              type: 'category',
              label: 'SenseCAP M1 Gateway',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/ja_SenseCAP_M1_Overview',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/ja_SenseCAP_M1_Quick_Start',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/ja_SenseCAP_M1_Local_Console',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/ja_SenseCAP_M1_FAQ',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/ja_SenseCAP_M1_Troubleshooting',
              ],
            },
            {
              type: 'category',
              label: 'SenseCAP M2 Data Only',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/ja_SenseCAP_M2_Data_Only_Overview',
                'Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/ja_SenseCAP_M2_Data_Only_Quick_Start',
                'Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/ja_M2_Local_Console',
              ],
            },
            {
              type: 'category',
              label: 'SenseCAP M2 Light Gateway',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/ja_SenseCAP_M2_Light_Gateway_Overview',
                'Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/ja_SenseCAP_M2_Light_Gateway_Quick_Start',
                'Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/ja_SenseCAP_M2_Light_Gateway_FAQ',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Flux Gateway',
          items: [
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/ja_SenseCAP_M4_Overview',
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/ja_SenseCAP_M4_Quick_Start',
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/ja_SenseCAP_M4_FAQ',
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/ja_Install_Ubuntu_on_SenseCAP_M4',
          ],
        },
        {
          type: 'category',
          label: '屋外ゲートウェイ',
          items: [
            'Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/ja_SenseCAP_LoRaWAN_Outdoor_Gateway_Overview',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SenseCAP K1100',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Network/SenseCAP_K1100/ja_SenseCAP_K1100_Intro',
      },
      items: [
        'Network/SenseCAP_K1100/ja_K1100-quickstart',
        'Network/SenseCAP_K1100/ja_K1100_Getting_Started',
        {
          type: 'category',
          label: 'LoRaWAN-ネットワークアプリケーション',
          items: [
            {
              type: 'category',
              label: 'Arduinoでのセンサー基本使用方法',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/ja_K1100-Light-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/ja_K1100-IMU-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/ja_K1100-Soil-Moisture-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/ja_K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/ja_K1100-Temp-Humi-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/ja_K1100-Vision-AI-Module-Grove-LoRa-E5',
              ],
            },
            {
              type: 'category',
              label: 'Helium Cloud Services',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/ja_Helium-Introduction',
                {
                  type: 'category',
                  label: 'Helium Connected & Azure Integrated',
                  items: [
                    'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/ja_Connecting-to-Helium',
                    'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/ja_Integrate-into-Azure-IoT-Hub',
                    'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/ja_Configuring-Web-APP-Visualization',
                  ],
                },
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/ja_Integrate_into_Google_Sheets_via_Helium',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/ja_Connect_AWS_via_helium',
              ],
            },
            {
              type: 'category',
              label: 'TTN Cloud Services',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/TTN_Cloud_Services/ja_TTN-Introduction',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/TTN_Cloud_Services/ja_Connecting-to-TTN',
              ],
            },
            {
              type: 'category',
              label: 'SenseCAP & Node-Red for Cloud Services',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/ja_K1100_sensecap_node-red',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/ja_K1100_SenseCAP_to_Azure_IoT_Central',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/ja_K1100_SenseCAP_to_PowerBI',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/ja_K1100_SenseCAP_to_influxdb',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/ja_K1100_SenseCAP_to_twilio',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/ja_K1100_SenseCAP_to_datacake',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/ja_K1100_SenseCAP_to_grafana',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Wi-Fi-ネットワークアプリケーション',
          items: [
            'Network/SenseCAP_K1100/Wi-Fi-Network_Application/ja_Wio-Terminal-Advanced-WiFi',
            {
              type: 'category',
              label: 'クラウドサービス',
              items: [
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Cloud_Service/ja_Getting_started_with_Ubidots',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Cloud_Service/ja_Quick-Start-to-using-Blynk',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Cloud_Service/ja_Connect-Wio-Terminal-to-Google-Cloud',
              ],
            },
            {
              type: 'category',
              label: 'Azure IoTプラットフォーム使用方法',
              items: [
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/ja_Connect-Wio-Terminal-to-Azure-IoT-Central',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/ja_Develop-in-Microsoft-Azure-IoT-Central',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/ja_K1100_Azure_to_PowerBI',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '組み込みMLアプリケーション',
          items: [
            'Network/SenseCAP_K1100/Embedded_ML_Application/ja_K1111-Edge-Impulse',
            'Network/SenseCAP_K1100/Embedded_ML_Application/ja_Vision_AI_with_Customizable_Models',
          ],
        },
        {
          type: 'category',
          label: 'コントリビュータープロジェクト',
          items: [
            'Network/SenseCAP_K1100/Contributors_Project/ja_IoT-into-the-wild-contest',
            'Network/SenseCAP_K1100/Contributors_Project/ja_K1111-Quick-Start-Guide',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'SenseCAP LoRaWAN Starter Kit',
    //   items: [
    //     'Network/SenseCAP_LoRaWAN_Starter_Kit/M2_Kit_Getting_Started',
    //   ],
    // },
    {
      type: 'category',
      label: 'SenseCAP LoRaWAN Starter Kit',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Network/SenseCAP_LoRaWAN_Starter_Kit',
        },
      ]
    },
    // {
    // 有问题
    //   type: 'category',
    //   label: 'LinkStar',
    //   items: [
    //     'Network/LinkStar/Linkstar_Datasheet',
    //     'Network/LinkStar/linkstar-install-system',
    //     ],
    // },
    {
      type: 'category',
      label: 'Raspberry Piソリューション',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'reRouter',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Network/RaspberryPi_Devices/reRouter/ja_reRouter_Intro',
          },
          items: [
            'Network/RaspberryPi_Devices/reRouter/ja_Raspberry-OpenWrt-Getting-Started',
            'Network/RaspberryPi_Devices/reRouter/ja_Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4',
            'Network/RaspberryPi_Devices/reRouter/ja_FAQs_For_openWrt',
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Network/RaspberryPi_Devices/reRouter/Application/ja_OpenWrt-Getting-Started',
                'Network/RaspberryPi_Devices/reRouter/Application/ja_OpenWrt-Plex-Media-Server-on-Docker',
                'Network/RaspberryPi_Devices/reRouter/Application/ja_Mender-Client-dual-GbE-CM4',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: ' Raspberry Pi 4G LTE Hat',
          collapsed: true,
          collapsible: true,
          items: [
            'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/ja_Getting_Started_LTE_CAT_4_EG25-GL_4G_Hat_for_rpi',
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                {
                  type: 'category',
                  label: 'Windowsネットワーク設定',
                  items: [
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_4g_lte_rpi_hat_rndis',
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_4g_lte_rpi_hat_mbim',
                  ],
                },
                {
                  type: 'category',
                  label: 'Raspberry Pi OSネットワーク設定',
                  items: [
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_mobile_internet_for_your_pi_ecm_set_up',
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_4g_lte_rpi_hat_qmi',
                  ],
                },
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_send_text_massages_lte_cat_hat_for_rpi',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_getting_start_with_raspberry_pi_4g_hat_and_quectel_gnss',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_4g_lte_hotspot_on_rpi_os',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_ftp_on_rpi_4g_lte_hat',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_mqtt_on_rpi_4g_lte_hat',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_tcp_ip_rpi_4g_lte_hat',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/ja_4g_lte_rpi_hat_openwrt',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Rockchipソリューション',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Network/RK_Devices/ja_RK_intro',
      },
      items: [
        {
          type: 'category',
          label: 'LinkStar-H68K',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Network/RK_Devices/LinkStar/ja_Linkstar_Intro',
          },
          items: [
            'Network/RK_Devices/LinkStar/ja_Linkstar_Datasheet',
            'Network/RK_Devices/LinkStar/ja_linkstar-install-system',
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Network/RK_Devices/LinkStar/Application/ja_h68k-ha-esphome',
                'Network/RK_Devices/LinkStar/Application/ja_plex_media_server',
                'Network/RK_Devices/LinkStar/Application/ja_wordpress_linkstar',
                'Network/RK_Devices/LinkStar/Application/ja_grocy-bookstack-linkstar',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'LinkStar-H68K-V2',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Network/RK_Devices/H68K_V2/ja_H68KV2_Datasheet',
          },
          items: [
            'Network/RK_Devices/H68K_V2/ja_H68KV2_Datasheet',
            'Network/RK_Devices/H68K_V2/ja_H68KV2_install_system',
          ],
        },
        {
          type: 'category',
          label: 'LinkStar-H28K',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Network/RK_Devices/H28K/ja_H28K_Datasheet',
          },
          items: [
            'Network/RK_Devices/H28K/ja_H28K_Datasheet',
            'Network/RK_Devices/H28K/ja_H28K-install-system',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'その他のネットワークデバイス',
      items: [
        'Network/TTN_Gateway/ja_The-Things-Indoor-Gateway',
        'Network/ja_LoRa_Antenna_Selection_Guide',
        {
          type: 'category',
          label: 'Wio-WM6108 WiFi-Halow Devices',
          items: [
            'Network/WiFi-Halow/ja_wifi-halow-module-for-xiao',
            'Network/WiFi-Halow/ja_wifi-halow-mini-pcie-module',
          ],
        },
      ],
    },
    // {
    //   type: 'html',
    //   value: `
    // <style>
    //   .sub_item {
    //     width: 275px;
    //     display:inline-block;
    //     text-align:center;
    //     font-size:20px;
    //     margin-top: 10px;
    //   }
    // </style>
    // <div style="width:100px;text-align:center">
    //   <div class="sub_item"><strong> Edge </strong></div>
    // </div>
    // `,
    // },
    {
      type: 'doc',
      id: 'ja_Edge_Computing',
      label: 'エッジコンピューティング',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'RK デバイス',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'アプリケーション',
          collapsed: true,
          collapsible: true,
          items: [
            'Edge/RockChip_Devices/Application/ja_object_detection_with_yolov11_on_recomputer_rk'
            ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Raspberry Piデバイス',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Edge/Raspberry_Pi_Devices/ja_RpiDevices',
      },
      items: [
        {
          type: 'category',
          label: 'エッジAIコンピューター',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'reComputer-AI-R2000',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_R2000/ja_reComputer_AI_R2000_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_R2000/ja_reComputer_AI_R2000_getting_start',
              ]
            },
            {
              type: 'category',
              label: 'reComputer-AI-Industrial-R2000',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_Industrial_R2000/ja_reComputer_AI_Industrial_R2135_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_Industrial_R2000/ja_reComputer_AI_Industrial_R2135_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_Industrial_R2000/ja_reComputer_AI_Industrial_R2000_Flash_OS',
              ]
            },
            {
              type: 'category',
              label: 'reComputer-Industrial-R20xx',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/ja_reComputer_Industrial_R20xx_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/ja_reComputer_Industrial_R20xx_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/ja_reComputer_Industrial_R20xx_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/ja_reComputer_Industrial_R20xx_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/ja_reComputer_Industrial_R20xx_assembly_guide'
              ]
            },
            {
              type: 'category',
              label: 'reComputer-Industrial-R21xx',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/ja_reComputer_Industrial_R21xx_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/ja_reComputer_Industrial_R21xx_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/ja_reComputer_Industrial_R21xx_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/ja_reComputer_Industrial_R21xx_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/ja_reComputer_Industrial_R21xx_assembly_guide'
              ]
            },
            {
              type: 'category',
              label: 'reComputer-Industrial-R22xx',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/ja_reComputer_Industrial_R22xx_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/ja_reComputer_Industrial_R22xx_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/ja_reComputer_Industrial_R22xx_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/ja_reComputer_Industrial_R22xx_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/ja_reComputer_Industrial_R22xx_assembly_guide'
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'HMI',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'reTerminal',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/HMI/reTerminal/ja_reTerminal_Intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/ja_reTerminal',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/ja_reTerminal-hardware-interfaces-usage',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/ja_reTerminal-piCam',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/ja_reTerminal-FAQ',
                {
                  type: 'category',
                  label: 'OS インストール',
                  items: [
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/OS_Installation/ja_reTerminal-Buildroot-SDK',
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/OS_Installation/ja_reTerminal-Yocto',
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/OS_Installation/ja_Streampi_OBS_On_reTerminal',
                    // 'Edge/reTerminal/OS_Installation/',
                  ],
                },
                {
                  type: 'category',
                  label: '拡張ボード',
                  items: [
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/Extension_Board/ja_reTerminalBridge',
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/Extension_Board/ja_reTerminal_Mount_Options',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'reTerminal DM',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/ja_reTerminal-dm_Intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/ja_reterminal-dm',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/ja_reterminal-dm-flash-OS',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/ja_reterminal-dm-warranty',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/ja_reterminal-dm-hardware-guide',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Edge Controller',
          collapsed: true,
          collapsible: true,
          // link: {
          // type: "doc",
          // id: 'Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Edge_Box_intro',
          // },
          items: [
            {
              type: 'category',
              label: 'EdgeBox-RPI-200',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_Controller/Edge_Box_RPi_200/ja_Edge_Box_intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_Controller/Edge_Box_RPi_200/ja_Edgebox_rpi_200_Introduction',
              ],
            },
            {
              type: 'category',
              label: 'reComputer-R1000',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r1000_intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r1000_pcn',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r1000_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r1000_assembly_guide',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r1000_warranty',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r1000_how_to_use_rs485_modbus',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_recomputer_r1000_use_bacnet_mstp',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/ja_reComputer_R1000_FAQ',
              ],
            },
            {
              type: 'category',
              label: 'reComputer R1100',
              collapsed: true,
              collapsible: true,
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/ja_reComputer_R1100',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/ja_recomputer_r1100_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/ja_recomputer_r1100_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/ja_recomputer_r1100_assembly_guide',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Hat',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'M.2 Hat',
              items: [
                'Edge/Raspberry_Pi_Devices/M_2_Hat/ja_m_2_hat_start_with_pi5',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'アプリケーション',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'AIoT',
              items: [
                {
                  type: 'category',
                  label: 'BalenaOS',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/BalenaOS/ja_recomputer_r1000_build_seeed_balena_image',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/BalenaOS/ja_recomputer_r1000_balena',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/BalenaOS/ja_recomuter_ai_box_balena'
                  ]
                },
                {
                  type: 'category',
                  label: 'クラウドソリューション',
                  items: [
                    {
                      type: 'category',
                      label: 'AWS IoT Core Integration (R1000 / reTerminal DM)',
                      items: [
                        'Edge/Raspberry_Pi_Devices/Application/AIoT/Cloud_Solution/AWS_IoT_Core_Integration_R1000_reTerminal-DM/ja_recomputer_r1000_aws',
                        'Edge/Raspberry_Pi_Devices/Application/AIoT/Cloud_Solution/AWS_IoT_Core_Integration_R1000_reTerminal-DM/ja_reTerminal-DM_AWS_first',
                      ]
                    },
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Cloud_Solution/ja_reTerminal-DM_Azure_IoT',
                  ]
                },
                {
                  type: 'category',
                  label: 'Fin',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/ja_recomputer_r1000_install_fin',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/ja_recomputer_r1000_with_fin_create_equip_graphic',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/ja_recomputer_r1000_with_fin_create_site_graphic',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/ja_recomputer_r1000_with_fin_top_level_graphic',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/ja_recomputer_r1000_with_fin_use_modbus',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/ja_recomputer_r1000_with-_fin_use_logic_to_alarm',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/ja_recomputer_r1000_with-fin_create_floor_graphic',
                  ]
                },
                {
                  type: 'category',
                  label: 'Fuxa',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/ja_recomputer_r1000_with_fuxa_to_achieve_SCADA',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/ja_recomputer_r1000_with_fuxa_use_modbus',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/ja_recomputer_r1000_with_fuxa_use_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/ja_recomputer_r1000_with_fuxa_use_opcua',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/ja_recomputer_r1000_with_fuxa_use_webapi',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/ja_reTerminal-DM_intro_FUXA',
                  ]
                },
                {
                  type: 'category',
                  label: 'Home Assistant',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/ja_recomputer-r1000-home-assistant',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/ja_recomputer-r1000-modbus-home-assistant',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/ja_reTerminal_Home_Assistant',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/ja_reTerminal-Home-Assistant-Customize',
                  ]
                },
                {
                  type: 'category',
                  label: 'N3uron',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_Edgebox-rpi-200-n3uron-aws',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_Edgebox-rpi-200-n3uron-bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_Edgebox-rpi-200-n3uron-modbus-mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_Edgebox-rpi-200-n3uron',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_recomputer_r1000_n3uron_aws',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_recomputer_r1000_n3uron_bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_recomputer_r1000_n3uron_getting_started',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_recomputer_r1000_n3uron_modbus_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_reTerminal_DM_N3uron_AWS',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_reTerminal_DM_N3uron_Historian',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_reTerminal_DM_N3uron_modbus_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/ja_reTerminalDM_N3uron_Get_Start',
                  ]
                },
                {
                  type: 'category',
                  label: 'Node Red',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_Edge_box_rpi_200_grafana',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_Edge_Box_rpi_200_Node_red_Bacnet_tcp',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_Edge_Box_rpi_200_Node_red_getting_started',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_Edge_Box_rpi_200_Node_red_influxdb',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_Edge_Box_rpi_200_Node_red_Modbus_rtu',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_Edge_Box_rpi_200_Node_red_Modbus_tcp',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_Edge_Box_rpi_200_Node_red_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_neqto_engine_for_linux_reTerminal',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_recomputer_r1000_nodered_modbustcp',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_recomputer_r1000_nodered_opcua_server',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_recomputer_r1000_nodered_s7',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_recomputer_r1000_with_node_red_and_bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_recomputer_r1000-grafana',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_recomputer-r1000-nodered-getting-start',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_reTerminal-DM-Node-Red-Bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_reTerminal-DM-Node-Red-canbus',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_reTerminal-DM-Node-Red-grafana',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_reTerminal-DM-Node-Red-influxdb',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_reTerminal-DM-Node-Red-Modbus-TCP',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_reTerminal-DM-Node-Red-mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/ja_reTerminal-DM-Node-Red-RS485',
                  ]
                },
                {
                  type: 'category',
                  label: 'UI デザイン',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/ja_reTerminal-build-UI-using-Electron',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/ja_reTerminal-build-UI-using-Flutter',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/ja_reTerminal-build-UI-using-LVGL',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/ja_weather-dashboard-with-Grafana-reTerminal',
                  ]
                },
                {
                  type: 'category',
                  label: 'Edge Impulse Object Detection',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Edge_Impulse_Object_Detection/ja_reTerminal_ML_Edgeimpulse',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Edge_Impulse_Object_Detection/ja_reTerminal-DM-edgeimpulse',
                  ]
                },
                {
                  type: 'category',
                  label: 'Ignition Edge (reComputer R1000 / reTerminal DM)',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Ignition_Edge_reComputer-R1000_reTerminal-DM/ja_Edgebox-rpi-200-ignition-edge',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Ignition_Edge_reComputer-R1000_reTerminal-DM/ja_reTerminal-DM-Getting-Started-with-Ignition-Edge',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Ignition_Edge_reComputer-R1000_reTerminal-DM/ja_reTerminal-DM-Ignition-Edge-Panel-Builder',
                  ]
                },
                {
                  type: 'category',
                  label: 'ThingsBoard Integration',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/ThingsBoard_Integration/ja_recomputer_r1000_thingsboard_ce',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/ThingsBoard_Integration/ja_recomputer_r1000_thingsboard_dashboard',
                  ]
                },
                {
                  type: 'category',
                  label: 'CODESYS with Modbus on R1000',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/CODESYS_with_Modbus_on_R1000/ja_recomputer_r1000_install_codesys',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/CODESYS_with_Modbus_on_R1000/ja_recomputer_r1000_with_codesys_use_modbus_rtu',
                  ]
                },
                {
                  type: 'category',
                  label: 'Chirpstack',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Chirpstack/ja_recomputer_r1x_chirpstack',
                  ]
                },
                {
                  type: 'category',
                  label: 'OpenRemote',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/openremote/ja_recomputer_r1x_openremote',
                  ]
                },
                {
                  type: 'category',
                  label: 'その他',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/ja_Mender-Client-reTerminal',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/ja_recomputer_r1000_flowfuse_getting_start',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/ja_reTerminal-DM_intro_machinechat_jedi',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/ja_reterminal-dm-sensecraft-edge-os-intro',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/ja_recomputer_use_ups',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/ja_reComputer-RS485-test'
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: '音声認識',
              items: [
                'Edge/Raspberry_Pi_Devices/Application/Speech_Recognition/ja_deploy_whisper_on_raspberry_pi_ai_box',
              ]
            },
            {
              type: 'category',
              label: 'コンピュータビジョン',
              items: [
                {
                  type: 'category',
                  label: 'ベンチマーク',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Benchmark/ja_benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Benchmark/ja_benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit',
                  ]
                },
                {
                  type: 'category',
                  label: 'OpenCV Demos (reTerminal & Pi Camera)',
                  items: [
                    {
                      type: 'category',
                      label: 'オブジェクト/顔/色/形状検出',
                      items: [
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/ja_reTerminal_DM_Color_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/ja_reTerminal_DM_Face_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/ja_reTerminal_DM_Object_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/ja_reTerminal_DM_Shape_detection',
                      ]
                    },
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/ja_reTerminal_DM_opencv',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/ja_reTerminal_DM-tracking',
                  ]
                },
                {
                  type: 'category',
                  label: 'YOLO ベースアプリケーション',
                  items: [
                    {
                      type: 'category',
                      label: 'YOLOv8 オブジェクト検出 (Pi 5 / R1000 / AI Box)',
                      items: [
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/YOLOv8_Object_Detection_Pi-5_R1000_AI-Box/ja_Using_YOLOv8_and_AI_Box_for_fall_climbing_and_tracking_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/YOLOv8_Object_Detection_Pi-5_R1000_AI-Box/ja_yolov8_object_detection_on_recomputer_r1000_with_hailo_8l',
                      ]
                    },
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/ja_reTerminal-DM-Yolo5',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/ja_yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/ja_yolov11_for_speed_estimation_and_loitering_detection_on_recomputer'
                  ]
                },
                {
                  type: 'category',
                  label: 'NVR',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_gun_detection_with_frigate_nvr_on_r2000',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_frigate_home_assistant_recomputer_r2000',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_frigate_nvr_with_raspberrypi_5',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_reterminal_frigate',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_reterminal-DM-Frigate',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_zoneminder_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_go2rtc_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_moonfire_nvr_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_ispy_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/ja_viseron_on_recomputer'
                  ]
                },
                {
                  type: 'category',
                  label: 'その他の AI アプリケーション',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_clip_application_on_rpi_with_ai_kit',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_convert_model_to_edge_tpu_tflite_format_for_google_coral',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_install_m.2_coral_to_rpi5',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_pose_based_light_control_with_nodered_and_rpi_with_aikit',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_real-time-ocr',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_reTerminal_ML_TFLite',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/ja_facial_recognition_on_the_recomputer'
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: '大規模言語モデル',
              items: [
                'Edge/Raspberry_Pi_Devices/Application/Large_language_Model/ja_deploy_deepseek_on_raspberry_pi_ai_box',
                'Edge/Raspberry_Pi_Devices/Application/Large_language_Model/ja_distributed_inference_of_deepseek_model_on_raspberrypi',
              ]
            },
            {
              type: 'category',
              label: 'Agent',
              items: [
                {
                  type: 'category',
                  label: 'openClaw',
                  items: [
                        'Edge/Raspberry_Pi_Devices/Application/Agent/openClaw/ja_getting_started_with_openclaw_on_recomputer'
                      ]
                },
              ]
            },
            {
              type: 'category',
              label: 'ツール',
              items: [
                'Edge/Raspberry_Pi_Devices/Application/Development_Tools/ja_recomputer_use_uv_to_build_package',
                'Edge/Raspberry_Pi_Devices/Application/Development_Tools/ja_recomputer_use_docker',
                'Edge/Raspberry_Pi_Devices/Application/Development_Tools/ja_recomputer_use_sqlite',
              ]
            }
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'NVIDIA® Jetson™',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Edge/NVIDIA_Jetson/ja_RecomputerPage',
      },
      items: [
        // Getting Started
        {
          type: 'category',
          label: 'はじめに',
          items: [
            // Carrier Boards
            {
              type: 'category',
              label: 'キャリアボード',
              items: [
                'Edge/NVIDIA_Jetson/Carrier_Boards/J101/ja_reComputer_J1010_J101_Flash_Jetpack',
                'Edge/NVIDIA_Jetson/Carrier_Boards/J202/ja_reComputer_J2021_J202_Flash_Jetpack',
                {
                  type: 'category',
                  label: 'J401キャリアボード',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J401/ja_reComputer_J4012_Flash_Jetpack',
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J401/ja_J401_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'J401-Mini キャリアボード',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Mini_J401/ja_reComputer_Mini_J4012_Flash_Jetpack',
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Mini_J401/ja_J401_Mini_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'J501 キャリアボード',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J501/ja_reServer_Industrial_J501_Getting_Started',
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J501/ja_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'J501-Mini キャリアボード',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J501_Mini/ja_Robotics_J501_Mini_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'J401-Robotics キャリアボード',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Robotics_J401/ja_Robotics_J401_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'J601-Robotics キャリアボード',
                  items: [
                    {
                      type: 'doc',
                      id: 'Edge/NVIDIA_Jetson/Carrier_Boards/Robotics_J601/ja_reComputer_Robotics_J601_Getting_Started',
                      label: 'Flash Jetpack',
                    },
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Robotics_J601/ja_Robotics_J601_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                'Edge/NVIDIA_Jetson/Carrier_Boards/A203v2/ja_reComputer_A203_Flash_System',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A205/ja_reComputer_A205_Flash_System',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A603/ja_A603_Flash_JetPack',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A607/ja_A607_Flash_JetPack',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A608/ja_A608_Flash_JetPack',
              ],
            },
            // reComputer Jetson Series
            {
              type: 'category',
              label: 'reComputer Jetson',
              link: {
                type: "doc",
                id: 'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/ja_reComputer_Intro',
              },
              items: [
                {
                  type: 'category',
                  label: 'reComputer J10',
                  link: {
                    type: "doc",
                    id: 'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/ja_reComputer_Jetson_Series_Introduction',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'reComputer J1010',
                      items: [
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/ja_reComputer_J1010_with_Jetson_getting_start',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/ja_J101_Enable_SD_Card',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/ja_J1010_Boot_From_SD_Card',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/ja_reComputer_Jetson_GPIO',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/ja_reComputer_Jetson_Memory_Expansion',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/ja_reComputer_Jetson_Series_Hardware_Layout',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/ja_reComputer_Jetson_Series_Initiation',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'reComputer J1020',
                      items: [
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1020v2/ja_reComputer_J1020v2_with_Jetson_getting_start',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1020v2/ja_reComputer_J1020_A206_Flash_JetPack',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer J20',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J20/ja_reComputer_J20_with_Jetson_getting_start',
                  ]
                },
                {
                  type: 'category',
                  label: 'reComputer J30/40',
                  // link: {
                  //   type: "doc",
                  //   id: 'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J30_40',
                  // },
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J30_40/ja_reComputer_J30_40_with_Jetson_getting_start',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J30_40/ja_reComputer_Jetson_with_Infineon_Wi-Fi_Module',
                  ]
                },
                {
                  type: 'category',
                  label: 'reComputer 工業用',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/ja_reComputer_Industrial_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/ja_reComputer_Industrial_J20_Hardware_Interfaces_Usage',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/ja_reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Mini',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/ja_reComputer_Mini_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/ja_reComputer_Mini_Hardware_Interfaces_Usage',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/ja_reComputer_Mini_J501_WiFi_Module_Installation',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Rugged J40',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Rugged_J40/ja_reComputer_Rugged_J40_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Rugged_J40/ja_reComputer_Rugged_J401_hardware_and_interface_usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Robotics J40',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Robotics_J40/ja_reComputer_Robotics_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Robotics_J40/ja_reComputer_Robotics_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Robotics J50',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Robotics_J50/ja_reComputer_Robotics_J501_Getting_Started',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Classic J50',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Classic_J50/ja_Seeed_AGX_Orin_Dev_Kit_Getting_Started',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer J401B',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J401B/ja_recomputer_j401b_getting_start',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J401B/ja_recomputer_j401b_interfaces_usage',
                  ]
                },
                {
                  type: 'category',
                  label: 'reComputer Super',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/ja_reComputer_Super_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/ja_reComputer_Super_Hardware_Interfaces_Usage',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/ja_reComputer_Super_vs_Classic_Next-Gen_AI_Performance_in_Edge_Inferencing',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/ja_Replace_the_Thermal_Conductive_Paste_for_reComputer',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/ja_reComputer_Antenna_Installation'
                  ],
                },
              ]
            },
            // reServer Jetson Series
            {
              type: 'category',
              label: 'reServer Jetson',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_Getting_Started',
              // },
              items: [
                //'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/reServer_Industrial_Getting_Started',
                {
                  type: 'category',
                  label: 'reServer Industrial J30/40',
                  items: [
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/ja_reServer_Industrial_Getting_Started',
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/ja_reServer_Industrial_Hardware_Interface_Usage',
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/ja_reServer_Industrial_POE_Camera_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'reServer J2032',
                  items: [
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_J2032/ja_reServer_J2032_Flash_Jetpack',
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_J2032/ja_reServer_J2032_Getting_Started',
                  ],
                },
              ]
            },
            // Other Devices
            {
              type: 'category',
              label: 'その他のデバイス',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/Other_Devices',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Other_Devices/ja_reBot_Arm_Jetson_Bundle',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_How_to_Update_Orin_Nano_Developer_Kit_to_Super_Kit',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_RTL8822CE_Wireless_Module_for_Jetson',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_RTL8852BE_Wireless_Module_for_Jetson',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_RM520N_Module_for_Jetson',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_EM12-G_GNSS_Module_for_reComputer_Robotics_J3011',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_Jetson_AGX_Orin_32GB_H01_Flash_Jetpack',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_Jetson_Xavier_AGX_H01_Driver_Installation',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_Jetson-Mate',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_Mini_AI_Computer_T906',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_reComputer_A203E_Flash_System',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_reComputer_A205E_Flash_System',
                'Edge/NVIDIA_Jetson/Other_Devices/ja_reComputer_Jetson_Series_GPIO_Grove',
              ]
            },
            //flashing jetpack page
            'Edge/NVIDIA_Jetson/ja_Flash_Jetpack',
            'Edge/NVIDIA_Jetson/ja_Jetson_Debug_Guide',
          ]
        },
        // Applications
        {
          type: 'category',
          label: 'アプリケーション',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application',
          // },
          items: [
            // Computer Vision
            {
              type: 'category',
              label: 'コンピュータビジョン',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/Application/Computer_Vision',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_DashCamNet-with-Jetson-Xavier-NX-Multicamera',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_How_to_Train_and_Deploy_YOLOv8_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Jetson-Nano-MaskCam',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Security_Scan',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_reComputer_Jetson_Series_Projects',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Traffic-Management-DeepStream-SDK',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_YOLOv5-Object-Detection-Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_YOLOv8-DeepStream-TRT-Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_YOLOv8-TRT-Jetson',
                // 'Edge/NVIDIA_Jetson/Application/Computer_Vision/reComputer_Jetson_Series_Tutorials_Exercise',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_YOLOv8_custom_classification_model',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Multi-GMSL_Cameras_for_Real-Time_Object_Detection_and_3D_Reconstruction_on_Jetson_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_YOLOv11_With_Depth_Camera_For_Distance_Measurement',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Efficient_Multi-Task_Vision_Inference_Engine_Deployment_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_deploy_frigate_on_jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_AI-NVR_with_Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Deploy_Depth_Anything_V3_ON_Jetson_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Deploy_NVBLOX_ON_Jetson_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_YOLOv26_Dual_USB_Camera_Image_Processing_System_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Build_a_Four_Camera_Fisheye_Surround_View_Demo_on_Jetson_AGX_Thor',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_industrial_vision_monitoring_on_industrial',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/ja_Streaming_Vision_Agent_on_Jetson',
              ]
            },
            // Generative AI
            {
              type: 'category',
              label: '生成 AI',
              link: {
                type: "doc",
                id: 'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Generative_AI_Intro',
              },
              items: [
                // Models
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Finetune_LLM_by_Llama_Factory_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Quantized_Llama2_7B_with_MLC_LLM_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_How_to_run_local_llm_text_to_image_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Whisper_on_Jetson_for_Real_Time_Speech_to_Text',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Local_RAG_based_on_Jetson_with_LlamaIndex',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_How_to_run_zero_shot_detection_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_How_to_run_VLM_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson',
                // Projects
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Deploy_JoyAI_VL_Interaction_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Local_OpenClaw(Clawdbot)_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Deploy_Live_VLM_WebUI_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Deploy_Riva_and_Llama2_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Real_Time_Subtitle_Recoder_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Deploy_Ollama_and_AnythingLLM_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Quickly_Deploy_DeepSeek_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Deploy_DeepSeek_on_reComputer_Jetson_with_MLC',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_GPT_OSS_Running_Live_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/ja_Control_Motor_by_Voice_LLM_on_Jetson',
              ]
            },
            {
              type: 'category',
              label: 'マルチモーダル AI',
              items: [
                // Models
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/ja_Local_Voice_LLM_for_Reachy_Mini',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/ja_Speech_vlm',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/ja_use_vlm_guard_warehouse',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/ja_Local_Chatbot_reComputer',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/ja_llm_interface_control_jetson',
              ]
            },
            {
              type: 'category',
              label: 'エンボディド AI',
              items: [
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Multiple_Reachy_Mini_Robots_with_a_Fleet_Dance_Console_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Local_Chatbot_reComputer',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Local_Voice_LLM_for_Reachy_Mini',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Getting_Started_with_Jetson_Claw_on_Orin_Nano_NX_8GB',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Fine_tune_GR00T_N1.6_for_LeRobot_SO_Arm_and_Deploy_on_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Fine_tune_GR00T_N1.7_for_reBot_Arm_and_Deploy_on_Robotics_J601',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_J501_Mini_StarAI_Viola_Fruit_Sorting',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Control_SoArm_by_OpenClaw_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Control_reBot_Arm_by_NemoClaw_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_Voice_Control_reBot_Arm_B601_by_Nvidia_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/ja_reBot_Arm_B601_DM_GraspNet_Visual_Grasping',
              ]
            },
            // Managed Services
            {
              type: 'category',
              label: 'マネージドサービス',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/Application/Managed_Services',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Application/Managed_Services/ja_Allxon-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Managed_Services/ja_neqto_engine_for_linux_recomputer',
                'Edge/NVIDIA_Jetson/Application/Managed_Services/ja_Scailable-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Managed_Services/ja_Update-Jetson-Linux-OTA-Using-Allxon',
              ]
            },
            // Developer Tools
            {
              type: 'category',
              label: '開発者ツール',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/Application/Developer_Tools',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Build_and_Flash_Yocto_for_reComputer_Super',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Develop_reComputer_Jetson_using_Clawdbot',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Gapi-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_alwaysAI-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Cochl.Sense-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_CVEDIA-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_DeciAI-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_HardHat',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Jetson-AI-developer-tools',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_jetson-docker-getting-started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Lumeo-Jetson-Getting-Started',
                // 'Edge/NVIDIA_Jetson/Application/Developer_Tools/No-code-Edge-AI-Tool',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_reComputer_Jetson_Series_Resource',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_NVStreamer_Getting_Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Roboflow-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Install_torch_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_vnc_for_reComputer',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Implement_Ethercat_communication_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Distributed_llama_cpp_RPC_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Deploy_TensorRT_Edge-LLM_on_Jetpack6.2',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Jetson_SPI_Getting_Start',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Flash_PREEMPT_RT_Kernel_on_reComputer_Jetson_JetPack_6_2_1',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/ja_Rapid_Prototyping_on_Jetson_with_NVIDIA_Skills',
              ]
            },
          ]
        },
        // JetPack 7.2
        {
          type: 'category',
          label: 'JetPack 7.2',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Edge/NVIDIA_Jetson/JetPack_7_2/ja_JetPack_7_2_Overview',
          },
          items: [
            {
              type: 'category',
              label: 'フラッシュと OTA',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/ja_JetPack72_Deep_Dive_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Flashing_OTA/ja_Flash_and_OTA_JetPack_7_2',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Migration/ja_JetPack_6_to_7_Migration_Playbook',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/ja_JetPack_7_2_Unified_Platform_ISO_SBSA',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/ja_JetPack_7_2_MAXN_SUPER_and_MIG',
              ],
            },
            {
              type: 'category',
              label: 'カーネルとマルチメディア',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Drivers/ja_JetPack72_AX210_AX200_WiFi_Setup_Guide_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Drivers/ja_JetPack_7_2_Camera_and_Multimedia_Compatibility',
              ],
            },
            {
              type: 'category',
              label: 'エージェント型 AI とスキル',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Agentic_AI/ja_Rapid_Prototyping_on_Jetson_with_NVIDIA_Skills_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Agentic_AI/ja_Control_reBot_Arm_by_NemoClaw_on_Jetson_Thor_bk',
              ],
            },
            {
              type: 'category',
              label: 'メモリ最適化',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Optimization/ja_JetPack_7_2_Memory_Optimization',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Optimization/ja_JetPack_7_2_Memory_Optimization_Deep_Dive',
              ],
            },
            {
              type: 'category',
              label: 'Yocto',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/ja_Build_and_Flash_Yocto_for_reComputer_Super_bk',
              ],
            },
            {
              type: 'category',
              label: 'AI のデプロイとアプリケーション',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/ja_Deploy_TensorRT_Edge-LLM_on_Jetpack7.2',
                'Edge/NVIDIA_Jetson/JetPack_7_2/AI_Inference/ja_industrial_vision_monitoring_on_industrial_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/AI_Inference/ja_JetPack_7_2_DeepStream',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Application/ja_Deploy_Full_Weight_GR00T_N1_7_TensorRT_on_AGX_Orin',
              ],
            },
          ],
        },
        // Seeed Jetson DevelopTool
        {
          type: 'category',
          label: 'Seeed Jetson DevelopTool',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Overview',
          },
          items: [
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Supported_Devices',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Installation',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Connect_Device',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Flash_Firmware',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Device_Management',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_App_Market',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Skills',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_Remote_Development',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/ja_Jetson_DevelopTool_FAQ',
          ],
        },
        // FAQs
        {
          type: 'category',
          label: 'よくある質問',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/FAQs',
          // },
          items: [
            'Edge/NVIDIA_Jetson/FAQs/ja_jetson_FAQ',
            'Edge/NVIDIA_Jetson/FAQs/ja_Create_Backup_and_Restore_on_reComputer',
            'Edge/NVIDIA_Jetson/FAQs/ja_Migrate_Home_Data_from_Jetson_Orin_Nano_Developer_Kit_to_reComputer',
            'Edge/NVIDIA_Jetson/FAQs/ja_Deploy_OTA_ON_reComputer',
            'Edge/NVIDIA_Jetson/FAQs/ja_Headless_Setup_and_Recovery_for_A603',
            // 'Edge/NVIDIA_Jetson/FAQs/Updating_Jetpack_with_OTA',
            'Edge/NVIDIA_Jetson/FAQs/ja_Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera',
            'Edge/NVIDIA_Jetson/FAQs/ja_How_to_use_Camera_IMX219',
            'Edge/NVIDIA_Jetson/FAQs/ja_Use_IMX477_Camera_with_A603',
            'Edge/NVIDIA_Jetson/FAQs/ja_Use_Arducam_OV9281_Camera_with_A603',
            'Edge/NVIDIA_Jetson/FAQs/ja_Differences_of_L4T_Between_Seeed_and_NVIDIA',
            'Edge/NVIDIA_Jetson/FAQs/ja_Overview_of_the_Relationship_Between_JetPack_and_Jetson',
            'Edge/NVIDIA_Jetson/FAQs/ja_How_to_Establish_the_Ethercat_on_Jetson',
            'Edge/NVIDIA_Jetson/FAQs/ja_Make_DIY_BSP_for_Jetson',
            'Edge/NVIDIA_Jetson/FAQs/ja_Make_DIY_BSP_from_Orin_Nano_DevKit_to_reComputer_Classic_And_Super',
            'Edge/NVIDIA_Jetson/FAQs/ja_How_to_Build_and_Flash_BSP_Source_for_Jetson_Thor',
            'Edge/NVIDIA_Jetson/FAQs/ja_Weston_EGL_NOT_INITIALIZED_on_Jetson_Cold_Boot',
            'Edge/NVIDIA_Jetson/FAQs/ja_Flash_JetPack_with_WSL2',
            'Edge/NVIDIA_Jetson/FAQs/ja_Jetson_Initrd_Flash_Fails_with_ZFS_Host',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'ESP デバイス',
      collapsed: true,
      collapsible: true,
      //link: {
      //type: "doc",
      //id: 'Edge/Edge_Series/Edge_series_Intro',
      // },
      items: [
        {
          type: 'category',
          label: 'EdgeBox-ESP-100',
          items: [
            'Edge/Edge_Series/Edge_Box_ESP_100/ja_Edgebox-ESP-100-Arduino',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'BeagleBone®',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Edge/Beagle_Bone/ja_BeagleBone',
      },
      items: [
        'Edge/Beagle_Bone/ja_BeagleBone_Blue',
        'Edge/Beagle_Bone/ja_BeagleBone_Green',
        'Edge/Beagle_Bone/ja_BeagleBone_Green_Wireless',
        'Edge/Beagle_Bone/ja_BeagleBone_Green_Eco',
        'Edge/Beagle_Bone/ja_BeagleBone-Green-Gateway',
        'Edge/Beagle_Bone/ja_Beaglebone_Case',
        {
          type: 'category',
          label: 'アプリケーション',
          items: [
            'Edge/Beagle_Bone/Application/ja_BeagleBone_Solutions',
            'Edge/Beagle_Bone/Application/ja_ChatGPT_and_BeagleBone',
          ],
        },
        {
          type: 'category',
          label: '拡張ボード',
          items: [
            'Edge/Beagle_Bone/Extension_Board/ja_Grove_Cape_for_BeagleBone_Series',
            'Edge/Beagle_Bone/Extension_Board/ja_Grove_Base_Cape_for_BeagleBone_v2',
            'Edge/Beagle_Bone/Extension_Board/ja_Motor_Bridge_Cape_v1.0',
            'Edge/Beagle_Bone/Extension_Board/ja_Skeleton_box_for_Beaglebone',
            'Edge/Beagle_Bone/Extension_Board/ja_BeagleBone_Green_HDMI_Cape',
            'Edge/Beagle_Bone/Extension_Board/ja_Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch',
          ],
        },
        {
          type: 'category',
          label: 'コース付きキット',
          items: [
            'Edge/Beagle_Bone/Kit_with_Courses/ja_Grove_Starter_Kit_for_BeagleBone_Green',
            'Edge/Beagle_Bone/Kit_with_Courses/ja_Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ODYSSEY',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Edge/ODYSSEY/ja_ODYSSEY_Intro',
      },
      items: [
        //  'Edge/ODYSSEY/ODYSSEY_Getting_Started',
        {
          type: 'category',
          label: 'ODYSSEY STM32MP135D',
          items: [
            'Edge/ODYSSEY/ODYSSEY_STM32MP135D/ja_ODYSSEY_STM32MP135D',
          ],
        },
        {
          type: 'category',
          label: 'ODYSSEY X86J4105',
          items: [
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ja_ODYSSEY-X86J4105',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ja_ODYSSEY-X86J4105-GPIO',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ja_ODYSSEY-X86J4105-Accessories',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ja_Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ja_ODYSSEY-X86J4105-LTE-Module',
            'Edge/ODYSSEY/ja_ODYSSEY_FAQ',
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                {
                  type: 'category',
                  label: 'Home Assistant for ODYSSEY',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/ja_ODYSSEY-X86-Home-Assistant',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/ja_ODYSSEY-Home-Assistant-Customize',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/ja_Connect-Grove-to-Home-Assistant-ESPHome',
                  ],
                },
                {
                  type: 'category',
                  label: 'Azure IoT for ODYSSEY',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Azure_IoT_for_ODYSSEY/ja_ODYSSEY-X86J4105-AzureIOT',
                  ],
                },
                {
                  type: 'category',
                  label: 'Mender for ODYSSEY',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/ja_Mender-Client-ODYSSEY-X86',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/ja_Mender-Server-ODYSSEY-X86',
                  ],
                },
                {
                  type: 'category',
                  label: 'コンピュータバージョン',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ja_ODYSSEY-X86J4105-Intel-OpenVINO',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ja_ODYSSEY-X86J4105-NCS2',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ja_ODYSSEY-X86J4105-Frigate',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'OS インストール',
              items: [
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86J4105-Installing-OS',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86J4105-Updating-Firmware',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_Jellyfin-on-Docker-Ubuntu-X86',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86J4105-Installing-openwrt',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86-OPNsense',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86J4105-pfSense',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86-TrueNAS',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86J4105-Installing-Android',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_ODYSSEY-X86J4105-Installing-FreeNAS',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ja_BalenaOS-X86-Getting-Started',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'ODYSSEY STM32MP157C',
          items: [
            'Edge/ODYSSEY/ODYSSEY_STM32MP157C/ja_ODYSSEY-STM32MP157C',
            'Edge/ODYSSEY/ODYSSEY_STM32MP157C/ja_SEEED-SOM-STM32MP157C',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'reCamera',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Edge/reCamera/ja_ReCameraPage',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Edge/reCamera',
        },
      ]
    },
    {
      type: 'category',
      label: 'その他のエッジデバイス',
      items: [
        {
          type: 'category',
          label: 'reServer X86',
          items: [
            'Edge/reServer/reServer_X86/ja_reServer-Getting-Started',
            'Edge/reServer/reServer_X86/ja_reServer-Update-BIOS-Install-Drivers',
          ],
        },
        'Edge/Quantum_Development_Board/ja_Quantum-Mini-Linux-Development-Kit',
      ],
    },
    {
      type: 'doc',
      id: 'ja_Edge_Robotics',
      label: 'ロボティクスページ',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'ロボットキット',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Lerobot',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            //'Robotics/Robot_Kits/Lerobot/En_Hackathon_Thor',
            'Robotics/Robot_Kits/Lerobot/ja_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_Starai_Arm',
            'Robotics/Robot_Kits/Lerobot/ja_Starai_Arm_ROS2_Moveit',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_SO100Arm_New',
            'Robotics/Robot_Kits/Lerobot/ja_SOARM101_XIAO_MicroROS_Wireless_Teleoperation',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_SO_ARM101_DAMO',
            'Robotics/Robot_Kits/Lerobot/ja_SOARM_AMAZINGHAND_TELEOP',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_Dataset_Tool',
            'Robotics/Robot_Kits/Lerobot/ja_Steering_Gear_Debugging_Tool',
            'Robotics/Robot_Kits/Lerobot/ja_Complete_Guide_to_Double-Arm_SO-ARM_Training',
            //'Robotics/Robot_Kits/Lerobot/Lerobot_SO100Arm',
            'Robotics/Robot_Kits/Lerobot/ja_Lerobot_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/ja_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi',
          ]
        },
        {
          type: 'category',
          label: 'エンドエフェクタ',
          items: [
            'Robotics/Robot_Kits/End_Effectors/ja_DM_Gripper',
          ]
        },
        {
          type: 'category',
          label: 'reBotアーム',
          items: [
            {
              type: 'category',
              label: 'B601-DM',
              items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/ja_reBot_Arm_B601_DM_isaacsim',
              ]
            },
            {
              type: 'category',
              label: 'B601-RS',
              items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_isaacsim',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/ja_reBot_Arm_B601_RS_control_mit'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'ハンド',
          items: [
            'Robotics/Robot_Kits/Hand/ja_AmazingHand',
          ]
        },
        {
          type: 'category',
          label: 'ReachyMini',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ja_intro',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ja_ReachyMini_Getting_Started',
              label: 'はじめに',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ja_AGENTS',
              label: 'AIエージェントガイド',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/ja_vibe-code-with-your-agent',
              label: 'エージェントとVibe Coding',
            },
            {
              type: 'category',
              label: '開発事例',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/ja_home_assistant',
                  label: 'Home Assistant 連携',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/ja_reachymini_voice_control_soarm',
                  label: 'SO-ARM用Reachy Mini音声制御',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini (Wireless)',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_get_started',
                  label: 'Getting Started',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_usage',
                  label: 'Usage',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_media_advanced_controls',
                  label: 'Media Advanced Controls',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_reset',
                  label: 'Reset',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_install_daemon_from_branch',
                  label: 'Install Daemon from Branch',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_development_workflow',
                  label: 'Development Workflow',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/ja_reflash_the_rpi_ISO',
                  label: 'Reflash the ISO',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini Lite',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_get_started',
                  label: 'Getting Started',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_usage',
                  label: 'Usage',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_media_advanced_controls',
                  label: 'Media Advanced Controls',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/ja_wizard',
                  label: 'Wizard',
                },
              ],
            },
            {
              type: 'category',
              label: 'Simulation',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/simulation/ja_get_started',
                  label: 'Getting Started',
                },
              ],
            },
            {
              type: 'category',
              label: 'SDK Guide',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_readme',
                  label: 'SDK Overview',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_installation',
                  label: 'Installation',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_quickstart',
                  label: 'Quickstart',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_python-sdk',
                  label: 'Python SDK',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_javascript-sdk',
                  label: 'JavaScript SDK',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_integration',
                  label: 'AI Integrations',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_core-concept',
                  label: 'Core Concepts',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_media-architecture',
                  label: 'Media Architecture',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/ja_gstreamer-installation',
                  label: 'GStreamer Installation',
                },
              ],
            },
            {
              type: 'category',
              label: 'Help & Troubleshooting',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/ja_troubleshooting',
                  label: 'Troubleshooting',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/ja_motors_diagnosis',
                  label: 'Motors Diagnosis',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/ja_change_mic_fpc_cable',
                  label: 'Change Mic FPC Cable',
                },
              ],
            },
            {
              type: 'category',
              label: 'Examples',
              collapsible: true,
              collapsed: true,
              items: [
                { type: 'autogenerated', dirName: 'Robotics/Robot_Kits/ReachyMini/examples' },
              ],
            },
            {
              type: 'category',
              label: 'API Reference',
              collapsible: true,
              collapsed: true,
              items: [
                { type: 'autogenerated', dirName: 'Robotics/Robot_Kits/ReachyMini/API' },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Stackforce',
          items: [
            'Robotics/Robot_Kits/StackForce/ja_StackForce_Giant_Bipedal_Wheeled_Robot',
            'Robotics/Robot_Kits/StackForce/ja_StackForce_Mini_Wheeled_Legged_Robot',
          ]
        },
        {
          type: 'category',
          label: 'ヒューマノイド',
          items: [
            {
              type: 'category',
              label: 'Atom-S',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-S/ja_Atom-S',
              ]
            },
            {
              type: 'category',
              label: 'Atom-X',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-X/ja_Atom-X',
              ]
            },

          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'アクチュエーター',
      // link: {
      //   type: "doc",
      //   id: 'Edge/NVIDIA_Jetson/Application',
      // },
      items: [
        {
          type: 'category',
          label: '高トルク',
          items: [
            'Robotics/Robot_Actuator/HighTorque/ja_HighTorque',
            'Robotics/Robot_Actuator/HighTorque/ja_HighTorque_Getting_Started',
            'Robotics/Robot_Actuator/HighTorque/ja_HighTorque_Control',
          ]
        },
        'Robotics/Robot_Actuator/ja_Feetech_Servo',
        'Robotics/Robot_Actuator/ja_FashionStar_Servo',
        'Robotics/Robot_Actuator/ja_Stackforce_Series',
        'Robotics/Robot_Actuator/ja_Myactuator_Series',
        'Robotics/Robot_Actuator/ja_Damiao_Series',
        'Robotics/Robot_Actuator/ja_RobStride_Control',
      ]
    },
    {
      type: 'category',
      label: 'センサー',
      // link: {
      //   type: "doc",
      //   id: 'Edge/NVIDIA_Jetson/Application',
      // },
      items: [
        {
          type: 'category',
          label: 'Lidar',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/Lidar/ja_Robosense_Lidar',
            'Robotics/Robot_Sensor/Lidar/ja_MID360',
            'Robotics/Robot_Sensor/Lidar/ja_A_Loam',
            'Robotics/Robot_Sensor/Lidar/ja_SLAMTEC',
          ]
        },
        {
          type: 'category',
          label: 'カメラ',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/Camera/ja_Getting_Start_with_AC1',
            'Robotics/Robot_Sensor/Camera/ja_Getting_Start_with_Orbbec_Gemini2_3D_Camera',
            'Robotics/Robot_Sensor/Camera/ja_Getting_Start_with_Orbbec_Gemini_336',
            'Robotics/Robot_Sensor/Camera/ja_Orbbec_Depth_Camera',
            'Robotics/Robot_Sensor/Camera/ja_realsense_3D_seg',
            'Robotics/Robot_Sensor/Camera/ja_ORB_SLAM3_with_Orbbec_Gemini2',
            'Robotics/Robot_Sensor/Camera/ja_Pycuvslam_On_reComputer',
            'Robotics/Robot_Sensor/Camera/ja_Orbbec_Gemini_335Lg',
            'Robotics/Robot_Sensor/Camera/ja_Sensing_GMSL_Camera',
            'Robotics/Robot_Sensor/Camera/ja_CSI_Camera',
          ]
        },
        {
          type: 'category',
          label: 'IMU',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/IMU/ja_Hexfellow_Y200',
            'Robotics/Robot_Sensor/IMU/ja_WHEELTEC_IMU',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'ソフトウェア',
      items: [
        {
          type: 'category',
          label: 'ROS',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            "Robotics/Robot_Software/ROS/ja_Installing_ROS1",
            "Robotics/Robot_Software/ROS/ja_Install_IsaacROS",
            "Robotics/Robot_Software/ROS/ja_Install_ROS2_Humble",
            "Robotics/Robot_Software/ROS/ja_Isaac_ROS_AprilTag",
            "Robotics/Robot_Software/ROS/ja_Isaac_ROS_Visual_SLAM",
          ]
        },
        {
          type: 'category',
          label: 'Isaac Lab',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            'Robotics/Robot_Software/Isaac_Lab/ja_Install_Isaac_lab',
            'Robotics/Robot_Software/Isaac_Lab/ja_Simulate_SoArm101_by_LeIsaac',
            'Robotics/Robot_Software/Isaac_Lab/ja_Training_SoARM101_Policy_with_IsaacLab',
          ]
        },
        {
          type: 'category',
          label: 'PX4',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/Robotics',
          // },
          items: [
            "Robotics/Robot_Software/PX4/ja_Control_PX4_with_reComputer_Jetson",
            "Robotics/Robot_Software/PX4/ja_Object_Tracking_with_reComputer_Jetson_and_PX4",
          ]
        },
        'Robotics/Robot_Software/VLA/ja_control_robotic_arm_via_gr00t',
        'Robotics/Robot_Software/ja_control_robotic_arm_via_phospho',
      ]
    },
    {
      type: 'doc',
      id: 'ja_Cloud',
      label: 'SenseCraft & Cloud',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'SenseCraft AI',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Cloud_Chain/SenseCraft_AI',
        },
      ],
    },
    {
      type: 'category',
      label: 'CodeCraft',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'Cloud_Chain/CodeCraft/ja_0-codecraft-overview',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Cloud_Chain/CodeCraft',
        },
      ],
    },
    {
      type: 'category',
      label: 'SenseCraft APP',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Cloud_Chain/SenseCraft_APP',
        },
      ],
    },
    {
      type: 'category',
      label: 'SenseCraft Data Platform',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Cloud_Chain/SenseCraft_Data_Platform',
        },
      ],
    },
    {
      type: 'category',
      label: 'SenseCraft HMI',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Cloud_Chain/SenseCraft_HMI/ja_sensecraft_hmi_overview',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Cloud_Chain/SenseCraft_HMI',
        },
      ],
    },
    {
      type: 'category',
      label: 'SenseCraft Blockchain',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'Cloud_Chain/SenseCraft_Blockchain',
        },
      ],
    },
    // START OF Seeed SOLUTION
    {
      type: 'link',
      label: 'ソリューション',
      href: 'https://www.seeed.cc/category/solutions',
      className: 'sideboard_calss',
    },
    {
      type: 'autogenerated',
      dirName: 'Solutions',
    },
    // END OF Solution
    {
      type: 'doc',
      id: 'Topics/ja_Topic_introduction',
      label: '技術トピック',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Home Assistant',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Topics/Home_Assistant/ja_Home_Assistant_Topic',
      },
      items: [
        'Topics/Home_Assistant/Home_Assistant_Tutorials/ja_home_assistant_sensecap',
        'Topics/Home_Assistant/Home_Assistant_Tutorials/ja_Extend_Home_Assistant_with_LoRaWAN_device',
        'Topics/Home_Assistant/Home_Assistant_Tutorials/ja_sensecraft_homeassistant_userguide',
      ],
    },
    {
      type: 'category',
      label: 'TinyML',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Topics/TinyML/ja_TinyML_Topic',
      },
      items: [
        {
          type: 'category',
          label: 'AI ワークショップ',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Topics/TinyML/TinyML_Workshop/ja_TinyML_workshop_course',
          },
          items: [
            'Topics/TinyML/TinyML_Workshop/ja_sscma',
            'Topics/TinyML/TinyML_Workshop/ja_TrainModel',
          ],
        },
        {
          type: 'category',
          label: 'ModelAssistant',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'はじめに',
              collapsed: false,
              items: [
                'Topics/TinyML/ModelAssistant/introduction/ja_overview',
                'Topics/TinyML/ModelAssistant/introduction/ja_quick_start',
                'Topics/TinyML/ModelAssistant/introduction/ja_installation',
              ]
            },
            {
              type: 'category',
              label: 'チュートリアル',
              collapsed: false,
              items: [
                'Topics/TinyML/ModelAssistant/tutorials/ja_config',
                'Topics/TinyML/ModelAssistant/tutorials/ja_datasets',
                {
                  type: 'category',
                  label: 'トレーニング',
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: 'Topics/TinyML/ModelAssistant/tutorials/training/ja_overview',
                  },
                  items: [
                    'Topics/TinyML/ModelAssistant/tutorials/training/ja_yolo',
                    'Topics/TinyML/ModelAssistant/tutorials/training/ja_fomo',
                    'Topics/TinyML/ModelAssistant/tutorials/training/ja_pfld',
                  ]
                },
                {
                  type: 'category',
                  label: 'エクスポート',
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: 'Topics/TinyML/ModelAssistant/tutorials/export/ja_overview',
                  },
                  items: [
                    'Topics/TinyML/ModelAssistant/tutorials/export/ja_pytorch_2_onnx',
                    'Topics/TinyML/ModelAssistant/tutorials/export/ja_pytorch_2_tflite',
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'デプロイメント',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Topics/TinyML/ModelAssistant/deploy/ja_overview',
              },
              items: [
                'Topics/TinyML/ModelAssistant/deploy/ja_ma_deploy_yolov5',
                'Topics/TinyML/ModelAssistant/deploy/ja_ma_deploy_yolov8',
                'Topics/TinyML/ModelAssistant/deploy/ja_ma_deploy_yolov8_pose',
                'Topics/TinyML/ModelAssistant/deploy/ja_ma_deploy_yolov26',
              ]
            },
          ],
        },
      ],
    },
    'Topics/Open_Source/ja_Open_Source_Topic',
    'Topics/Edge_AI/ja_Edge_AI_Topic',
    /*
      {
      type: 'doc',
      id: 'Topics/Edge_AI/Edge_AI_Topic',
      label: 'Edge AI',
      className: 'sideboard_calss',
      },
*/
    {
      type: 'doc',
      id: 'ja_Contributor',
      label: 'コントリビューション',
      className: 'sideboard_calss',
    },
    // {
    //       type: 'category',
    //       label: 'Fusion Service',
    //       items: [
    //         'Contribution/Fusion/Service_for_Fusion_PCB',
    //         'Contribution/Fusion/Galileo_Case',
    //         'Contribution/Fusion/Unibody_box_for_Galileo_Gen2',
    //         'Contribution/Fusion/Starter_bundle_harness_V1',
    //       ]
    // },
    {
      type: 'category',
      label: 'Github コントリビューションガイド',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Contribution/Contributors/Contribution-Guide/ja_Contribution-Guide',
      },
      items: [
        'Contribution/Contributors/Deploy_Page_Locally/ja_Deploy_Page_Locally',
        'Contribution/Contributors/Contribution-Guide/ja_full_steps_pull_request',
        'Contribution/Contributors/Contribution-Guide/ja_quick_pull_request',
      ],
    },
    'Contribution/Contributors/ja_Scale-up-Your-Creation-with-Fusion',
    {
      type: 'doc',
      id: 'Top_Brand/ja_PopularPlatforms',
      label: '人気プラットフォーム',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Arduino',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Top_Brand/Arduino/ja_Arduino',
      },
      items: [
        'Top_Brand/Arduino/ja_Getting_Started_with_Arduino',
        {
          type: 'category',
          label: 'シールド',
          items: [
            'Top_Brand/Arduino/shield/ja_Shield',
            'Top_Brand/Arduino/shield/ja_2.8inch_TFT_Touch_Shield_v2.0',
            'Top_Brand/Arduino/shield/ja_4A_Motor_Shield',
            'Top_Brand/Arduino/shield/ja_Base_Shield_V2',
            //   'Top_Brand/Arduino/shield/Bluetooth_Shield_V2',
            'Top_Brand/Arduino/shield/ja_CAN-BUS_Shield_V2.0',
            'Top_Brand/Arduino/shield/ja_Camera_Shield',
            'Top_Brand/Arduino/shield/ja_Energy_Shield',
            'Top_Brand/Arduino/shield/ja_Motor_Shield_V2.0',
            'Top_Brand/Arduino/shield/ja_Brushless_Motor_Shield_TB6605FTG',
            'Top_Brand/Arduino/shield/ja_Music_Shield_V2.2',
            'Top_Brand/Arduino/shield/ja_NFC_Shield_V2.0',
            'Top_Brand/Arduino/shield/ja_Grove-Mega_Shield',
            'Top_Brand/Arduino/shield/ja_Protoshield_Kit_for_Arduino',
            'Top_Brand/Arduino/shield/ja_RS232_Shield',
            'Top_Brand/Arduino/shield/ja_Relay_Shield_v3',
            'Top_Brand/Arduino/shield/ja_SD_Card_shield_V4.0',
            'Top_Brand/Arduino/shield/ja_Solar_Charger_Shield_V2.2',
            'Top_Brand/Arduino/shield/ja_Spartan_Edge_Accelerator_Board',
            'Top_Brand/Arduino/shield/ja_W5500_Ethernet_Shield_v1.0',
            'Top_Brand/Arduino/shield/ja_Grove_Shield_for_Arduino_Nano',
            'Top_Brand/Arduino/shield/ja_RGBW_Stripe_WireLess_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_Renbotics_ServoShield_Rev',
            'Top_Brand/Arduino/shield/ja_WireLess_Gate_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_2.7inch-Triple-Color-E-Ink-Shield-for-Arduino',
            'Top_Brand/Arduino/shield/ja_Bluetooth_Shield',
            'Top_Brand/Arduino/shield/ja_Motor_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_Motor_Shield',
            'Top_Brand/Arduino/shield/ja_NFC_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_NFC_Shield',
            'Top_Brand/Arduino/shield/ja_Energy_Monitor_Shield_V0.9b',
            'Top_Brand/Arduino/shield/ja_Ethernet_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_Ethernet_Shield_V2.0',
            'Top_Brand/Arduino/shield/ja_Ethernet_Shield',
            'Top_Brand/Arduino/shield/ja_GPRS-Shield',
            'Top_Brand/Arduino/shield/ja_GPRS_Shield_v1.0',
            'Top_Brand/Arduino/shield/ja_GPRS_Shield_V2.0',
            'Top_Brand/Arduino/shield/ja_GPRS_Shield_V3.0',
            'Top_Brand/Arduino/shield/ja_Music_Shield',
            'Top_Brand/Arduino/shield/ja_Music_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_Relay_Shield',
            'Top_Brand/Arduino/shield/ja_Relay_Shield_V1',
            'Top_Brand/Arduino/shield/ja_Relay_Shield_V2',
            'Top_Brand/Arduino/shield/ja_SD_Card_Shield',
            'Top_Brand/Arduino/shield/ja_SD_Card_Shield_V3.0',
            'Top_Brand/Arduino/shield/ja_Small_e-Paper_Shield',
            'Top_Brand/Arduino/shield/ja_Solar_Charger_Shield',
            'Top_Brand/Arduino/shield/ja_Starter_Shield_EN',
            'Top_Brand/Arduino/shield/ja_TFT_Touch_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_Wifi_Shield',
            'Top_Brand/Arduino/shield/ja_Wifi_Shield_V1.0',
            'Top_Brand/Arduino/shield/ja_Wifi_Shield_V1.1',
            'Top_Brand/Arduino/shield/ja_Wifi_Shield_V1.2',
            'Top_Brand/Arduino/shield/ja_Wifi_Shield_Fi250_V1.1',
            'Top_Brand/Arduino/shield/ja_Wifi_Shield_V2.0',
            'Top_Brand/Arduino/shield/ja_Shield_Bot_V1.1',
            'Top_Brand/Arduino/shield/ja_Shield_Bot_V1.2',
            'Top_Brand/Arduino/shield/ja_CAN-BUS_Shield_V1.2',
            'Top_Brand/Arduino/shield/ja_EL_Shield',
            'Top_Brand/Arduino/shield/ja_Seeed_BLE_Shield',
            'Top_Brand/Arduino/shield/ja_Small_e-Paper_Shield_V2',
          ],
        },
        {
          type: 'category',
          label: 'チュートリアル',
          items: [
            {
              type: 'category',
              label: 'Arduino 基本的な使用方法',
              items: [
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Download-Arduino-and-install-Arduino_Driver',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_A_Handy_Serial_Library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_How_to_install_Arduino_Library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_How_to_use_and_write_a_library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Upload_Code',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Use_External_Editor',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_How_To_Use_Sketchbook',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Sketchbook_of_Sidekick_Advanced_Kit',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Guide_to_use_demos_downloaded_from_Seeed-s_Github',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Software-Serial',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Arduino_Software_I2C_user_guide',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Software-SPI',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Software-Static-Library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Arduino_Common_Error',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_How-to-Choose-A-Gas-Sensor',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_A_Comparison_of_Different_Grove_Temperature_Sensors',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_GPS-Modules-Selection-Guide',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_How_to_detect_finger_touch',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Seeed_Relay_Page',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_Barometer-Selection-Guide',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/ja_How_To_Choose_The_Right_Cable',
              ],
            },
            {
              type: 'category',
              label: 'Arduino 拡張使用方法',
              items: [
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_Suli',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_Seeed_Arduino_Serial',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_I2C_And_I2C_Address_of_Seeed_Product',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_ODYSSEY-X86J4105-Firmata',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_Software-SWD',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_Arduino-AWS-IOT-Bridge',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_Arduino-DAPLink',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_Flashing-Arduino-Bootloader-DAPLink',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ja_Xadow_IO_pin_mapping',
              ],
            },
            {
              type: 'category',
              label: ' Arduino ボードプロジェクト',
              items: [
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_IR_Remote',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Joystick_Control_RGB_Led',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Light_Sensor_and_LED_Bar',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_LightView_201k_Digital_display_module',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_RFID_Control_LED',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Relay_Control_LED',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Sound_Sensor_And_LED_Bar',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_temperature_sensor',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_One-Blink',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_One-Double_Blink',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Two-Digital_Input',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Two-Digital_Input_v1.0b',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Three-Analog_Input_v1b',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Four-Noise_Maker',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Five-Relay_Control',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Six-LCD_Demonstration',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Seven-Temperature',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/ja_Project_Eight-Thermostat',
              ],
            },
            {
              type: 'category',
              label: 'コンパイルプラットフォーム',
              items: [
                'Top_Brand/Arduino/Tutorials/Compiling_Platform/ja_Compiling_MicroPython_for_embedded_devices',
                'Top_Brand/Arduino/Tutorials/Compiling_Platform/ja_Software-PlatformIO',
                {
                  type: 'category',
                  label: 'コンパイルプラットフォーム',
                  items: [
                    'Top_Brand/Arduino/Tutorials/Compiling_Platform/Codecraft_Platform_for_Arduino/ja_Guide_for_Codecraft_using_Arduino',
                    'Top_Brand/Arduino/Tutorials/Compiling_Platform/Codecraft_Platform_for_Arduino/ja_Codecraft_Grove_Compatible_List',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'コース付きキット',
          items: [
            {
              type: 'category',
              label: 'Grove 初心者向けキット for Arduino',
              items: [
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/ja_Grove-Beginner-Kit-For-Arduino',
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/ja_Grove-Beginner-Kit-for-Arduino-education-pack',
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/ja_Grove-Beginner-Kit-for-Arduino-Upverter-Guide',
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/ja_Grove_Beginner_Kit_for_Arduino',
              ],
            },
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove_Speech_Recognizer_Kit_for_Arduino',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Sidekick_Basic_Kit_for_Arduino_V2',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove_Starter_kit_for_Arduino_101',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
            'Top_Brand/Arduino/Kit_with_Courses/ja_LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove_Indoor_Environment_Kit_for_Edison',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove_Smart_Plant_Care_Kit',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Techbox_Tricks',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove_Starter_Kit_Plus',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove_Starter_Kit_v3',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove-Creator-Kit-1',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove-Mixer_Pack_V2',
            'Top_Brand/Arduino/Kit_with_Courses/ja_Grove-Toy_Kit',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Raspberry Pi',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Top_Brand/Raspberry_Pi/ja_Raspberry_Pi',
      },
      items: [
        {
          type: 'category',
          label: '公式 Raspberry Pi ボード',
          items: [
            'Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/ja_Raspberry_Pi_3_Model_B',
            'Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/ja_remote_connect',
          ],
        },
        {
          type: 'category',
          label: '公式 Raspberry Pi モジュール',
          items: [
            'Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Module/ja_Raspberry_pi_CM4_update_eeprom',
          ],
        },
        {
          type: 'category',
          label: 'Pi HAT',
          items: [
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Grove_Base_Hat_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Grove_Base_Hat_for_Raspberry_Pi_Zero',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Grove_Base_HAT',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_GrovePi_Plus',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Raspberry_Pi_Breakout_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Raspberry_Pi_Motor_Driver_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Pi_RTC-DS1307',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_High_Accuracy_Pi_RTC-DS3231',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Raspberry_Pi_R232_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Raspberry_Pi_Relay_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_four-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_eight-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_RS-485_Shield_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_Grove_AI_HAT_for_Edge_Computing',
            'Top_Brand/Raspberry_Pi/Pi_HAT/ja_two-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi',
          ],
        },
        {
          type: 'category',
          label: 'アクセサリー',
          items: [
            'Top_Brand/Raspberry_Pi/Accessories/ja_Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit',
            'Top_Brand/Raspberry_Pi/Accessories/ja_Skeleton_box_for_Rasberry_Pi',
            'Top_Brand/Raspberry_Pi/Accessories/ja_Raspberry_PI_Bplus_Case',
          ],
        },
        {
          type: 'category',
          label: 'クーラー装置',
          items: [
            'Top_Brand/Raspberry_Pi/Cooler_Device/ja_Water_Cooling_Kit',
          ],
        },
        {
          type: 'category',
          label: 'コース付きキット',
          items: [
            'Top_Brand/Raspberry_Pi/Kit/ja_Grove_Base_Kit_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Kit/ja_LoRa_LoRaWan_Gateway_Kit',
            'Top_Brand/Raspberry_Pi/Kit/ja_Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi',
          ],
        },
        {
          type: 'category',
          label: 'アプリケーション',
          items: [
            'Top_Brand/Raspberry_Pi/Application/ja_Raspberry_Pi_as_a_NAS',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Micro:bit',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Top_Brand/Micro_bit/ja_microbit_wiki_page',
      },
      items: [
        'Top_Brand/Micro_bit/ja_Grove_Inventor_Kit_for_microbit',
        'Top_Brand/Micro_bit/ja_Microsoft_MakeCode',
        {
          type: 'category',
          label: '拡張ボード',
          items: [
            'Top_Brand/Micro_bit/expansion_board/ja_BitWear',
            'Top_Brand/Micro_bit/expansion_board/ja_BitMaker',
            'Top_Brand/Micro_bit/expansion_board/ja_BitMaker_Lite',
            'Top_Brand/Micro_bit/expansion_board/ja_BitPlayer',
            'Top_Brand/Micro_bit/expansion_board/ja_BitCar',
          ],
        },
      ],
    },
    // 'Contribution/Home_Assistant/Home_Assistant_Topic',
    /*
    {
      type: 'html',
      value: `
    <style>
      .sub_item {
        width: 275px;
        display:inline-block;
        text-align:center;
        font-size:20px;
        margin-top: 10px;
      }
    </style>
    <div style="width:100px;text-align:center">
      <div class="sub_item"><strong> Contribution </strong></div>
    </div>
    `,
    },
*/
    /*
    {
      type: 'html',
      value: `
    <style>
      .sub_item {
        width: 275px;
        display:inline-block;
        text-align:center;
        font-size:20px;
        margin-top: 10px;
      }
    </style>
    <div style="width:100px;text-align:center">
      <div class="sub_item"><strong> Discontinued Product </strong></div>
    </div>
    `,
    },
    */
    {
      type: 'doc',
      id: 'Seeed_Elderly/ja_DiscontinuedProducts',
      label: '廃止製品',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: '製品リスト',
      items: [
        {
          type: 'category',
          label: 'reSpeaker',
          items: [
            //'Seeed_Elderly/reSpeaker/reSpeaker_Getting_Started',
            //'Seeed_Elderly/reSpeaker/ReSpeaker',
            'Seeed_Elderly/reSpeaker/ja_ReSpeaker_Product_Guide',
            {
              type: 'category',
              label: 'アプリケーション',
              items: [
                'Seeed_Elderly/reSpeaker/Application/ja_ReSpeaker_Solutions',
                'Seeed_Elderly/reSpeaker/Application/ja_Google_Assistant',
                'Seeed_Elderly/reSpeaker/Application/ja_Voice_Interaction',
                'Seeed_Elderly/reSpeaker/Application/ja_ReSpeaker_Core_V2_&_Wio_Link',
              ],
            },
            {
              type: 'category',
              label: '拡張ボード',
              items: [
                'Seeed_Elderly/reSpeaker/Extension_Board/ja_ReSpeaker_Drive_Unit',
                //'Seeed_Elderly/reSpeaker/Extension Board/ReSpeaker_Mic_Array_v2.0',
                'Seeed_Elderly/reSpeaker/Extension_Board/ja_ReSpeaker_Mic_Array',
              ],
            },
            'Seeed_Elderly/reSpeaker/ja_ReSpeaker_4_Mic_Array_for_Raspberry_Pi',
            'Seeed_Elderly/reSpeaker/ja_ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi',
            'Seeed_Elderly/reSpeaker/ja_ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi',
            'Seeed_Elderly/reSpeaker/ja_ReSpeaker_Core',
            'Seeed_Elderly/reSpeaker/ja_ReSpeaker_Core_v2.0',
            //'Seeed_Elderly/reSpeaker/ReSpeaker-USB-Mic-Array',
          ],
        },
        {
          type: 'category',
          label: 'rePhone',
          items: [
            'Seeed_Elderly/rePhone/ja_RePhone',
            'Seeed_Elderly/rePhone/ja_RePhone_Geo_Kit',
            'Seeed_Elderly/rePhone/ja_RePhone_Lumi_Kit',
            'Seeed_Elderly/rePhone/ja_RePhone_Strap_Kit_for_Pebble',
            'Seeed_Elderly/rePhone/ja_RePhone_core_2G-Atmel32u4',
            'Seeed_Elderly/rePhone/ja_Rephone_core_2G-AtmelSAMD21',
            'Seeed_Elderly/rePhone/ja_Retro_Phone_Kit',
            {
              type: 'category',
              label: 'rePhone でのプログラミング',
              items: [
                'Seeed_Elderly/rePhone/Program_with_rePhone/ja_Arduino_IDE_for_RePhone_Kit',
                'Seeed_Elderly/rePhone/Program_with_rePhone/ja_Eclipse_IDE_for_RePhone_Kit',
                'Seeed_Elderly/rePhone/Program_with_rePhone/ja_JavaScript_for_RePhone',
                'Seeed_Elderly/rePhone/Program_with_rePhone/ja_Lua_for_RePhone',
                'Seeed_Elderly/rePhone/Program_with_rePhone/ja_RePhone_APIs-Audio',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Bee',
          items: [
            'Seeed_Elderly/Bee/ja_Mesh_Bee',
            'Seeed_Elderly/Bee/ja_RFbee_V1.1-Wireless_Arduino_compatible_node',
            'Seeed_Elderly/Bee/ja_Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products',
            'Seeed_Elderly/Bee/ja_Bees_Shield',
            'Seeed_Elderly/Bee/ja_UartSBee_V3.1',
            'Seeed_Elderly/Bee/ja_UartSBee_V4',
            'Seeed_Elderly/Bee/ja_UartSBee_v5',
            'Seeed_Elderly/Bee/ja_BLE_Bee',
            'Seeed_Elderly/Bee/ja_BLE_dual_Bee_v1.0',
            'Seeed_Elderly/Bee/ja_Bluetooth_Bee_v2.0',
            'Seeed_Elderly/Bee/ja_Bluetooth_Bee_Standalone',
            'Seeed_Elderly/Bee/ja_Bluetooth_Bee',
            'Seeed_Elderly/Bee/ja_Wifi_Bee',
            'Seeed_Elderly/Bee/ja_Wifi_Bee_v2.0',
            'Seeed_Elderly/Bee/ja_XBee_Shield',
            'Seeed_Elderly/Bee/ja_XBee_Shield_V2.0',
            'Seeed_Elderly/Bee/ja_Atom_Node',
            'Seeed_Elderly/Bee/ja_Bluetooth_V4.0_HM_11_BLE_Module',
            'Seeed_Elderly/Bee/ja_GPS_Bee_kit',
            'Seeed_Elderly/Bee/ja_Grove-XBee_Carrier',
            'Seeed_Elderly/Bee/ja_Grove-Bee_Socket',
          ],
        },
        {
          type: 'category',
          label: 'Xadow',
          items: [
            'Seeed_Elderly/Xadow/ja_Xadow_3_Aixs_Accelerometer',
            'Seeed_Elderly/Xadow/ja_Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g',
            'Seeed_Elderly/Xadow/ja_Xadow_BLE_Dual_Model_V1.0',
            'Seeed_Elderly/Xadow/ja_Xadow_BLE_Slave',
            'Seeed_Elderly/Xadow/ja_Xadow_Breakout',
            'Seeed_Elderly/Xadow/ja_Xadow_Buzzer',
            'Seeed_Elderly/Xadow/ja_Xadow_Compass',
            'Seeed_Elderly/Xadow/ja_Xadow_Edison_Kit',
            'Seeed_Elderly/Xadow/ja_Xadow_GPS',
            'Seeed_Elderly/Xadow/ja_Xadow_GPS_V2',
            'Seeed_Elderly/Xadow/ja_Xadow_Gesture_v1.0',
            'Seeed_Elderly/Xadow/ja_Xadow_Grove_Adaptor',
            'Seeed_Elderly/Xadow/ja_Xadow_IMU_6DOF',
            'Seeed_Elderly/Xadow/ja_Xadow_IMU_9DOF',
            'Seeed_Elderly/Xadow/ja_Xadow_IMU_10DOF',
            'Seeed_Elderly/Xadow/ja_Xadow_LED_5x7',
            'Seeed_Elderly/Xadow/ja_Xadow_LED_5_multiply_7_v1.0',
            'Seeed_Elderly/Xadow/ja_Xadow_M0',
            'Seeed_Elderly/Xadow/ja_Xadow_Main_Board',
            'Seeed_Elderly/Xadow/ja_Xadow_Multichannel_Gas_Sensor',
            'Seeed_Elderly/Xadow/ja_Xado_OLED_128multiply64',
            'Seeed_Elderly/Xadow/ja_Xadow_RGB_OLED_96multiply64',
            'Seeed_Elderly/Xadow/ja_Xadow_RTC',
            'Seeed_Elderly/Xadow/ja_Xadow_Storage',
            'Seeed_Elderly/Xadow/ja_Xadow_UV_Sensor',
            'Seeed_Elderly/Xadow/ja_Xadow_Vibrator_Motor',
            'Seeed_Elderly/Xadow/ja_Xadow_1.54_inch_Touchscreen',
            'Seeed_Elderly/Xadow/ja_Xadow_Audio',
            'Seeed_Elderly/Xadow/ja_Xadow_BLE',
            'Seeed_Elderly/Xadow/ja_Xadow_Barometer',
            'Seeed_Elderly/Xadow/ja_Xadow_Barometer_BMP180',
            'Seeed_Elderly/Xadow/ja_Xadow_Basic_Sensors',
            'Seeed_Elderly/Xadow/ja_Xadow_Duino',
            'Seeed_Elderly/Xadow/ja_Xadow_GSM_Breakout',
            'Seeed_Elderly/Xadow/ja_Xadow_GSMPlusBLE',
            'Seeed_Elderly/Xadow/ja_Xadow_Metal_Frame',
            'Seeed_Elderly/Xadow/ja_Xadow_NFC',
            'Seeed_Elderly/Xadow/ja_Xadow_NFC_tag',
            'Seeed_Elderly/Xadow/ja_Xadow_NFC_v2',
            'Seeed_Elderly/Xadow/ja_Xadow_Pebble_Time_Adapter',
            'Seeed_Elderly/Xadow/ja_Xadow_Q_Touch_Sensor',
            'Seeed_Elderly/Xadow/ja_Xadow_Tutorial_Acceleration_Detector',
            'Seeed_Elderly/Xadow/ja_Xadow_Tutorial_Communicate_via_BLE',
            'Seeed_Elderly/Xadow/ja_Xadow_Tutorial_Shaking_Shaking',
            'Seeed_Elderly/Xadow/ja_Xadow_Wearable_Kit_For_Edison',
            'Seeed_Elderly/Xadow/ja_Xadow_Motor_Driver',
          ],
        },
        {
          type: 'category',
          label: 'Rainbowduino',
          items: [
            'Seeed_Elderly/Rainbowduino/ja_Rainbowduino_v3.0',
            'Seeed_Elderly/Rainbowduino/ja_Rainbowduino_Extension_Board_v0.9b',
            'Seeed_Elderly/Rainbowduino/ja_Rainbow_Cube_Kit_Acrylic_Harness',
            'Seeed_Elderly/Rainbowduino/ja_Rainbowduino_LED_driver_platform-ATmega328',
            'Seeed_Elderly/Rainbowduino/ja_Rainbowduino',
          ],
        },
        {
          type: 'category',
          label: 'reComputer Alpha',
          items: [
            'Seeed_Elderly/reComputer_Alpha/ja_How-to-build-a-home-soft-router-and-NAS-With-ReComputer',
          ],
        },
        {
          type: 'category',
          label: 'Air シリアル',
          items: [
            'Seeed_Elderly/Air_Serial/ja_Air602_WiFi_Development_Board',
            'Seeed_Elderly/Air_Serial/ja_Air602_Firmware_Programming_Manual',
          ],
        },
        {
          type: 'category',
          label: 'NPi-i',
          items: [
            'Seeed_Elderly/NPi-i/ja_NPi-i.MX6ULL-Dev-Board-Linux-SBC',
          ],
        },
        {
          type: 'category',
          label: 'W600',
          items: [
            'Seeed_Elderly/W600/ja_W600_Module',
          ],
        },
        {
          type: 'category',
          label: 'Artik',
          items: [
            'Seeed_Elderly/Artik/ja_Artik',
            'Seeed_Elderly/Artik/ja_Eagleye_530s',
          ],
        },
        {
          type: 'category',
          label: 'その他',
          items: [
            'Seeed_Elderly/Discrete_Product/ja_ESP32_Breakout_Kit',
            'Seeed_Elderly/Discrete_Product/ja_UartSB_Frame',
            'Seeed_Elderly/Discrete_Product/ja_IoT_Fast_Prototyping_Kit_S5D9',
            'Seeed_Elderly/Discrete_Product/ja_Grove_IoT_Developer_Kit-Microsoft_Azure_Edition',
            'Seeed_Elderly/Discrete_Product/ja_Atmel_AVRISP_STK500_USB_ISP_Programmer',
            'Seeed_Elderly/Discrete_Product/ja_AT_Command_Tester',
            'Seeed_Elderly/Discrete_Product/ja_AT_Command_Tester_Application',
            'Seeed_Elderly/Discrete_Product/ja_Tiny_BLE',
            'Seeed_Elderly/Discrete_Product/ja_Edison_4WD_Auto_Robotic_Platform_2.0',
            'Seeed_Elderly/Discrete_Product/ja_Edison_4WD_Auto_Robotic_Platform',
            'Seeed_Elderly/Discrete_Product/ja_Mini_GSM_GPRS_GPS_Breakout_SIM808',
            'Seeed_Elderly/Discrete_Product/ja_Nose_LED_Kit',
            'Seeed_Elderly/Discrete_Product/ja_Serial_port_bluetooth_module_Master-Slave',
            'Seeed_Elderly/Discrete_Product/ja_Sidekick_Advanced_Kit',
            'Seeed_Elderly/Discrete_Product/ja_Stepper_Motor_Driver',
            'Seeed_Elderly/Discrete_Product/ja_Stepper_Motor_Driver_v2.3',
            'Seeed_Elderly/Discrete_Product/ja_4WD_Driver_Platform_V1.0',
            'Seeed_Elderly/Discrete_Product/ja_4WD_Mecanum_Wheel_Robot_Kit_Series',
            'Seeed_Elderly/Discrete_Product/ja_Hercules_Dual_15A_6-20V_Motor_Controller',
            'Seeed_Elderly/Discrete_Product/ja_Basic_Fastener_Kit',
            'Seeed_Elderly/Discrete_Product/ja_Sidekick_Basic_Kit_for_TI_LaunchPad',
            'Seeed_Elderly/Discrete_Product/ja_Grove_Maker_Kit_for_Intel_Joule',
            'Seeed_Elderly/Discrete_Product/ja_Grove_Shield_for_Intel_Joule',
            'Seeed_Elderly/Discrete_Product/ja_Grove_Base_BoosterPack',
            'Seeed_Elderly/Discrete_Product/ja_Grove_Base_Shield_for_Photon',
            'Seeed_Elderly/Discrete_Product/ja_Tricycle_Bot',
            'Seeed_Elderly/Discrete_Product/ja_mbed_Shield',
            'Seeed_Elderly/Discrete_Product/ja_BLE_Carbon',
            'Seeed_Elderly/Discrete_Product/ja_BLE_Micro',
            'Seeed_Elderly/Discrete_Product/ja_BLE_Nitrogen',
            'Seeed_Elderly/Discrete_Product/ja_Fubarino_SD',
            'Seeed_Elderly/Discrete_Product/ja_LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout',
            'Seeed_Elderly/Discrete_Product/ja_Matrix_Clock',
            'Seeed_Elderly/Discrete_Product/ja_Bugduino',
            'Seeed_Elderly/Discrete_Product/ja_CUI32Stem',
            'Seeed_Elderly/Discrete_Product/ja_Danger_Shield_Complete_Kits',
            'Seeed_Elderly/Discrete_Product/ja_FST-01',
            'Seeed_Elderly/Discrete_Product/ja_Grove-Base_Shield_for_IOIO-OTG',
          ],
        },
      ],
    },
    'ja_About',
    'ja_License',
  ]
};

module.exports = sidebars;
