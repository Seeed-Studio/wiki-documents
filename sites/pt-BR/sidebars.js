// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ptBRSidebar: [
    // 'Sensing_test',
    {
      type: 'doc',
      id: 'pt_Getting_Started',
      label: 'Primeiros passos',
      className: 'sideboard_calss',
    },
    // {
    //   type: 'category',
    //   label: 'TinyML',
    //   collapsed: true,
    //   collapsible: true,
    //   link: {
    //     type: "doc",
    //     id: "TinyML/pt_TinyML_Topic",
    //   },
    //   items: [
    //     'TinyML/pt_TinyML_workshop_course',
    //   ]
    // },
    // 'Getting_Started_test',
    {
      type: 'doc',
      id: 'pt_Sensor',
      label: 'Detecção',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Grove',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "Sensor/Grove/pt_Grove_System"
      },
      items: [
        {
          type: 'category',
          label: 'Sensor Grove',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/Grove/Grove_Sensors/pt_Grove_Sensor_Intro"
          },
          items: [
            {
              type: 'category',
              label: 'Múltiplos em um',
              items: [
                'Sensor/Grove/Grove_Sensors/All_in_one/pt_Grove_SEN5X_All_in_One',
                'Sensor/Grove/Grove_Sensors/All_in_one/pt_Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680',
                'Sensor/Grove/Grove_Sensors/All_in_one/pt_Grove-CO2&Temperature&HumiditySensor-SCD41',
                'Sensor/Grove/Grove_Sensors/All_in_one/pt_Grove-CO2_Temperature_Humidity_Sensor-SCD30',
                'Sensor/Grove/Grove_Sensors/All_in_one/pt_Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931',
              ],
            },
            {
              type: 'category',
              label: 'Com IA',
              items: [
                {
                  type: 'category',
                  label: 'Grove Vision AI',
                  collapsed: true,
                  collapsible: true,
                  link: {
                    type: "doc",
                    id: "Sensor/Grove/Grove_Sensors/AI-powered/pt_Grove-Vision-AI-Module"
                  },
                  items: [
                    'Sensor/Grove/Grove_Sensors/AI-powered/pt_Train-Deploy-AI-Model-Grove-Vision-AI',
                    'Sensor/Grove/Grove_Sensors/AI-powered/pt_edge-impulse-vision-ai',
                  ],
                },
                {
                  type: 'category',
                  label: 'Grove Vision AI V2',
                  collapsed: true,
                  collapsible: true,
                  link: {
                    type: "doc",
                    id: "Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/pt_Grove-vision-ai-v2"
                  },
                  items: [
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/pt_Grove-vision-ai-v2-software-supported',
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/pt_Grove-vision-ai-v2-camera-supported',
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/pt_grove_vision_ai_v2_sscma',
                    'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/pt_Grove_vision_ai_v2_RS485',
                    {
                      type: 'category',
                      label: 'Desenvolvimento',
                      items: [
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Development/pt_grove-vision-ai-v2-himax-sdk',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Development/pt_grove_vision_ai_v2_at_library',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Aplicação',
                      items: [
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/pt_grove-vision-ai-v2-sensecap-app',
                        // 'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/pt_grove-vision-ai-v2-ha',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/pt_grove-vision-ai-v2-demo',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/pt_grove_vision_ai_v2_webcamera',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/pt_vision_ai_v2_crowd_heat_map',
                        'Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/pt_grove_vision_ai_v2_telegram',
                      ],
                    },
                  ],
                },
                'Sensor/Grove/Grove_Sensors/AI-powered/pt_Grove-Gesture_sensor_paj7660',
                // 'Sensor/Grove/Grove_Sensors/AI-powered/pt_Gesture_control_music_application',
              ],
            },
            {
              type: 'category',
              label: 'Temperatura e umidade',
              items: [
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-TempAndHumi_Sensor-SHT31',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-I2C_High_Accuracy_Temp&Humi_Sensor-SHT35',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-Temperature_and_Humidity_Sensor_Pro',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-TemperatureAndHumidity_Sensor',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-Temperature-Humidity-Sensor-DH20',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-TemperatureAndHumidity_Sensor-HDC1000',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/pt_Grove-SHT4x',
              ],
            },
            {
              type: 'category',
              label: 'Temperatura',
              items: [
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-1-Wire_Thermocouple_Amplifier-MAX31850K',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-I2C_Thermocouple_Amplifier-MCP9600',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_One-Wire-Temperature-Sensor-DS18B20',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-High_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-Thermal-Imaging-Camera-IR-Array',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-Digital_Infrared_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-Infrared_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-Infrared_Temperature_Sensor_Array-AMG8833',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-Temperature_Sensor_V1.2',
                'Sensor/Grove/Grove_Sensors/Temperature/pt_Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808',
                // 'Sensor/Grove/Grove_Sensors/Temperature/pt_Sensor_temperature',
              ],
            },
            {
              type: 'category',
              label: 'Umidade do solo',
              items: [
                'Sensor/Grove/Grove_Sensors/Soli_Humidity/pt_Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant',
                'Sensor/Grove/Grove_Sensors/Soli_Humidity/pt_Grove-Moisture_Sensor',
              ],
            },
            {
              type: 'category',
              label: 'Proximidade',
              items: [
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Ultrasonic_Sensor_SMS812',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Sensor_distance',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Ultrasonic_Ranger',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-IR_Distance_Interrupter_v1.2',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-TF_Mini_LiDAR',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Doppler-Radar',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Time_of_Flight_Distance_Sensor-VL53L0X',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-80cm_Infrared_Proximity_Sensor',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Gesture_v1.0',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Adjustable_PIR_Motion_Sensor',
                'Sensor/Grove/Grove_Sensors/Proximity/pt_Grove-Hall_Sensor',
              ],
            },
            {
              type: 'category',
              label: 'Qualidade do ar',
              items: [
                'Sensor/Grove/Grove_Sensors/Air_Quality/pt_Grove-Laser_PM2.5_Sensor-HM3301',
                'Sensor/Grove/Grove_Sensors/Air_Quality/pt_Grove-Dust_Sensor',
                'Sensor/Grove/Grove_Sensors/Air_Quality/pt_Grove-Air_Quality_Sensor_v1.3',
                'Sensor/Grove/Grove_Sensors/Air_Quality/pt_Grove-Formaldehyde-Sensor',
              ],
            },
            {
              type: 'category',
              label: 'Gás',
              items: [
                'Sensor/Grove/Grove_Sensors/Gas/pt_Sensor_gas',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Gas_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Multichannel-Gas-Sensor-V2',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Gas_Sensor-MQ2',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Gas_Sensor-MQ3',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Gas_Sensor-MQ5',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Gas_Sensor-MQ9',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Gas_Sensor-O2',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Gas_Sensor-O2-MIX8410',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Oxygen-Sensor-Pro',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Alcohol_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-CO2_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-smart_air_quality_sensor',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-VOC_and_eCO2_Gas_Sensor-SGP30',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-VOC_Gas_Sensor-SGP40',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-HCHO_Sensor',
                'Sensor/Grove/Grove_Sensors/Gas/pt_Grove-Multichannel_Gas_Sensor',
              ],
            },
            {
              type: 'category',
              label: 'Barômetro',
              items: [
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Sensor_barometer',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-Barometer-High-Accuracy',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-Barometer_Sensor',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-Barometer_Sensor-BME280',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-Barometer_Sensor-BMP180',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-Barometer_Sensor-BMP280',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-Barometer_Sensor-SPA06-003',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-High-Precision-Barometric-Pressure-Sensor-DPS310',
                'Sensor/Grove/Grove_Sensors/Barometer/pt_Grove-Integrated-Pressure-Sensor-Kit',
              ],
            },
            {
              type: 'category',
              label: 'Acelerômetro',
              items: [
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-D7S-Vibration-Sensor',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Sensor_accelerometer',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digital_Accelerometer-16g',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Analog_Accelerometer',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Compass_V1.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digitial_Compass_v2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digital_Accelerometer-1.5g',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digital_Accelerometer-400g',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis-Digital-Accelerometer-LIS3DHTR',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digital_Accelerometer_40g-ADXL357',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digital_Accelerometer_200g-ADXL372',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digital_Gyro',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-6-Axis_AccelerometerAndCompass_V2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-6-Axis_AccelerometerAndGyroscope',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-6-Axis_Accelerometer&Gyroscope_BMI088',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-IMU_10DOF',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-IMU_10DOF_v2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-IMU_9DOF_v2.0',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-IMU_9DOF-lcm20600+AK09918',
                'Sensor/Grove/Grove_Sensors/Accelerometer/pt_Grove-Single_Axis_Analog_Gyro',
              ],
            },
            {
              type: 'category',
              label: 'Luz',
              items: [
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Lightning-Sensor-AS3935',
                'Sensor/Grove/Grove_Sensors/Light/pt_Sensor_light',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Digital_Light_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Heelight_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Light_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Sunlight_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-UV_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-I2C_UV_Sensor-VEML6070',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Luminance_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Infrared_Receiver',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Line_Finder',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-IR_Line_Follower_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Flame_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-Infrared_Reflective_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove-I2C_Color_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/pt_Grove_Color_Sensor',
              ],
            },
            {
              type: 'category',
              label: 'Biométrico',
              items: [
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Sensor_biomedicine',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-Finger-clip_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-Finger-clip_Heart_Rate_Sensor_with_shell',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-EMG_Detector',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-Ear-clip_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-Chest_Strap_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-Capacitive-Fingerprint-Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-Fingerprint_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-GSR_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/pt_Grove-Human_Presence_Sensor-AK9753',
              ],
            },
            {
              type: 'category',
              label: 'Som',
              items: [
                'Sensor/Grove/Grove_Sensors/Sound/pt_Sensor_sound',
                'Sensor/Grove/Grove_Sensors/Sound/pt_Grove-Sound_Sensor',
                'Sensor/Grove/Grove_Sensors/Sound/pt_Grove-Loudness_Sensor',
                'Sensor/Grove/Grove_Sensors/Sound/pt_Grove-Speech_Recognizer',
                'Sensor/Grove/Grove_Sensors/Sound/pt_Grove-Sound_Recorder',
                'Sensor/Grove/Grove_Sensors/Sound/pt_Grove-Analog-Microphone',
                'Sensor/Grove/Grove_Sensors/Sound/pt_Grove-Recorder_v2.0',
                'Sensor/Grove/Grove_Sensors/Sound/pt_Grove-Offline-Voice-Recognition',
              ],
            },
            {
              type: 'category',
              label: 'Toque',
              items: [
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-Touch_Sensor',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-Rotary_Angle_Sensor',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-Round_Force_Sensor_FSR402',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-2_Channel_Inductive_Sensor-LDC1612',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI',
                'Sensor/Grove/Grove_Sensors/Touch/pt_Grove-I2C_Touch_Sensor',
              ],
            },
            {
              type: 'category',
              label: 'Líquido',
              items: [
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Sensor_liquid',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-ORP-Sensor-Pro',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-Water_Sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-Water-Level-Sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_G1-1-4_Water_Flow_sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-PH-Sensor-kit',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-EC-Sensor-kit',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-TDS-Sensor',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-ORP-Sensor-kit',
                'Sensor/Grove/Grove_Sensors/Liquid/pt_Grove-PH_Sensor',
              ],
            },
            {
              type: 'category',
              label: 'Movimento',
              items: [
                'Sensor/Grove/Grove_Sensors/Motion/pt_Sensor_motion',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-PIR_Motion_Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Digital-PIR-Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Collision_Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Tilt_Switch',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Mini_Track_Ball',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Mouse_Encoder',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Piezo_Vibration_Sensor',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Slide_Potentiometer',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Optical_Rotary_Encoder-TCUT1600X01',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Vibration_Sensor_SW-420',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Encoder',
                'Sensor/Grove/Grove_Sensors/Motion/pt_Grove-Step_Counter-BMA456',
              ],
            },
            {
              type: 'category',
              label: 'Peso',
              items: [
                'Sensor/Grove/Grove_Sensors/Weight/pt_Grove-ADC_for_Load_Cell-HX711',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Módulo de rede Grove',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/Grove/Grove_Sensors_Network/pt_Grove_network_module_intro"
          },
          items: [
            {
              type: 'category',
              label: 'LoRa',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "Sensor/Grove/Grove_Sensors_Network/LoRa/pt_Grove_LoRa_E5_New_Version"
              },
              items: [
                'Sensor/Grove/Grove_Sensors_Network/LoRa/pt_Grove_LoRa_E5_New_Version',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/pt_Grove_Wio_E5_P2P',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/pt_Grove_Wio_E5_TTN_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/pt_Grove_Wio_E5_Helium_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/pt_Grove_Wio_E5_Helium_tinyML_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/pt_Grove_Wio_E5_SenseCAP_Cloud_Demo',
                'Sensor/Grove/Grove_Sensors_Network/LoRa/demo/pt_Grove_Wio_E5_SenseCAP_XIAO_ESP32S3',
              ],
            },
            {
              type: 'category',
              label: 'Bluetooth',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/pt_Grove-BLE-dual_model-v1.0',
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/pt_Grove-Serial_Bluetooth_v3.0',
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/pt_Grove-BLE_v1',
                'Sensor/Grove/Grove_Sensors_Network/Bluetooth/pt_Grove-Serial_Bluetooth',
              ],
            },
            {
              type: 'category',
              label: 'Wi-Fi',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/Wi-Fi/pt_Grove-UART_Wifi',
                'Sensor/Grove/Grove_Sensors_Network/Wi-Fi/pt_Grove-UART_Wifi_V2',
              ],
            },
            {
              type: 'category',
              label: 'NFC',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/NFC/pt_Grove_NFC_ST25',
                'Sensor/Grove/Grove_Sensors_Network/NFC/pt_Grove_NFC',
                'Sensor/Grove/Grove_Sensors_Network/NFC/pt_Grove_NFC_Tag',
              ],
            },
            {
              type: 'category',
              label: 'GPS',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/GPS/pt_Grove-GPS',
                'Sensor/Grove/Grove_Sensors_Network/GPS/pt_Grove-GPS-Air530',
              ],
            },
            {
              type: 'category',
              label: 'RF',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/RF/pt_Grove-125KHz_RFID_Reader',
                'Sensor/Grove/Grove_Sensors_Network/RF/pt_Grove-315MHz_RF_Kit',
                'Sensor/Grove/Grove_Sensors_Network/RF/pt_Grove-433MHz_Simple_RF_Link_Kit',
                'Sensor/Grove/Grove_Sensors_Network/RF/pt_Grove_LoRa_Radio',
                'Sensor/Grove/Grove_Sensors_Network/RF/pt_Grove-Serial_RF_Pro',
              ],
            },
            {
              type: 'category',
              label: 'Protocolo padrão',
              items: [
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/pt_Grove-DMX512',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/pt_Grove-I2C_ADC',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/pt_Grove-I2C_FM_Receiver',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/pt_Grove-I2C_FM_Receiver_v1.1',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/pt_Grove-Protoshield',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/pt_Grove-RJ45_Adapter',
                'Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/pt_Grove-Node',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Acessórios Grove',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/Grove/Grove_Accessories/pt_Grove_Accessories_Intro"
          },
          items: [
            {
              type: 'category',
              label: 'Atuador',
              items: [
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-2-Coil_Latching_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Buzzer',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Passive-Buzzer',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Chainable_RGB_LED',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Dry-Reed_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-EL_Driver',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Haptic_Motor',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-I2C_Motor_Driver',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-I2C_Motor_Driver_V1.2',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-I2C_Motor_Driver_V1.3',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-I2C-Motor-Driver-L298P',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Infrared_Emitter',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-LED_Matrix_Driver_v1.0',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-MP3_v2.0',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-MP3-v3',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-mp3-v4',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Mini_Fan',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Mini_I2C_Motor_Driver_v1.0',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove_Recorder',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Recorder_v3.0',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-4-Channel_SPDT_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-2-Channel_SPDT_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Solid_State_Relay_V2',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-2-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-4-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-8-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Optocoupler_Relay-M281',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Serial_MP3_Player',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Servo',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Speaker',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Speaker-Plus',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Variable_Color_LED',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Vibration_Motor',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Water_Atomization',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-16-Channel_PWM_Driver-PCA9685',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-I2C_Motor_Driver-TB6612FNG',
                'Sensor/Grove/Grove_Accessories/Actuator/pt_Grove-Voltage_Divider',
              ],
            },
            {
              type: 'category',
              label: 'Tempo',
              items: [
                'Sensor/Grove/Grove_Accessories/Time/pt_Grove-RTC',
                'Sensor/Grove/Grove_Accessories/Time/pt_Grove_High_Precision_RTC',
              ],
            },
            {
              type: 'category',
              label: 'Corrente',
              items: [
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-10A_DC_Current_Sensor-ACS725',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-5A_DC_AC_Current_Sensor-ACS70331',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-2.5A-DC-Current-Sensor-ACS70331',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-Electricity_Sensor',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-Coulomb_Counter_3.3V_to_5V-LTC2941',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-MOSFET',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-SPDT_Relay_30A',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-Screw_Terminal',
                'Sensor/Grove/Grove_Accessories/Current/pt_Grove-Electromagnet',
              ],
            },
            {
              type: 'category',
              label: 'LED',
              items: [
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-Red_LED',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-Circular_LED',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-LED_Bar',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-RGB_LED_Stick-10-WS2813_Mini',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-LED_ring',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-LED_Socket_Kit',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-LED_String_Light',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-LED_Strip_Driver',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-RGB_LED_Matrix_w-Driver',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-LED_Matrix_Driver-HT16K33',
                'Sensor/Grove/Grove_Accessories/LED/pt_Grove-Red_LED_Matrix_w_Driver',
              ],
            },
            {
              type: 'category',
              label: 'Chave e botão',
              items: [
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-6-Position_DIP_Switch',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-Button',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-Switch-P',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-LED_Button',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-Dual-Button',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-5-Way_Switch',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-Mech_Keycap',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-Thumb_Joystick',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-Magnetic_Switch',
                'Sensor/Grove/Grove_Accessories/Switch&Button/pt_Grove-Joint_v2.0',
              ],
            },
            {
              type: 'category',
              label: 'Entrada e saída',
              items: [
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-Differential_Amplifier_v1.2',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-I2C_Hub',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-I2C-Hub-6Port',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-AND',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-OR',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-DC_Jack_Power',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-Qwiic-Hub',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-NunChuck',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-PS_2_Adapter',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-Mini_Camera',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-Serial_Camera',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-16-bit-ADC-ADS1115',
                'Sensor/Grove/Grove_Accessories/Input_Output/pt_Grove-NOT',
              ],
            },
            {
              type: 'category',
              label: 'Case',
              items: [
                'Sensor/Grove/Grove_Accessories/Case/pt_Grove-Wrapper'
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
        id: "Sensor/SenseCAP/pt_Industrial-IoT-SenseCAP-Introduction",
      },
      items: [
        {
          type: 'category',
          label: 'Rastreador SenseCAP T1000',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_T1000_Tracker/pt_SenseCAP_T1000_intro',
          },
          items: [
            'Sensor/SenseCAP/SenseCAP_T1000_Tracker/pt_SenseCAP_T1000_Tracker_Introduction',
            {
              type: 'category',
              label: 'Guia do usuário',
              items: [
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/pt_Get_Started',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/pt_Payload',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/pt_Tracker_WiFi_Geolocation',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/pt_BC01_Indoor_Bluetooth_Beacon',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/pt_Indoor_Positioning_Guide',
              ],
            },
            {
              type: 'category',
              label: 'Integrado ao servidor de rede LoRaWAN',
              items: [
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_Connect_to_Helium',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_Connect_to_The_Things_Network',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_Connect_to_Loriot',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_AWS_Service',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_TTN_Mapper',
              ],
            },
            {
              type: 'category',
              label: 'Integrado a dashboards populares',
              items: [
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_Datacake_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_Ubidots_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_thingsboard_integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_Ubidots_Integrated_Helium',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_Qubitro_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_TagoIO_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_InfluxDB_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_Akenza_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_Trackpac_Integrated',
                'Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/pt_sensecap_t1000_tracker_wialon',
              ],
            },
            'Sensor/SenseCAP/SenseCAP_T1000_Tracker/pt_FAQ',
            'Sensor/SenseCAP/SenseCAP_T1000_Tracker/pt_Firmware_release_note',
          ],
        },
        {
          type: 'category',
          //label: 'Rastreador LoRaWAN',
          label: 'SenseCAP T1000-E para LoRaWAN',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Sensor/SenseCAP/LoRaWAN_Tracker',
            },
          ]
        },
        {
          type: 'category',
          label: 'Rastreador SenseCAP T2000',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_T2000_Tracker/pt_SenseCAP_T2000_intro',
          },
          items: [
            'Sensor/SenseCAP/SenseCAP_T2000_Tracker/pt_SenseCAP_T2000_Tracker_Introduction',
            {
              type: 'category',
              label: 'Guia do usuário',
              items: [
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/User_Guide/pt_Quick_Start',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/User_Guide/pt_Payload_Format',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/User_Guide/pt_FAQ',
              ],
            },
            {
              type: 'category',
              label: 'Integrado ao servidor de rede LoRaWAN',
              items: [
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_Connect_to_The_Things_Network',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_Connect_to_Helium',
                'Sensor/SenseCAP/SenseCAP_T2000_Tracker/Integrated_with_LoRaWAN_Network_Server/pt_Connect_to_AWS_IoT_Core'
              ],
            }
          ],
        },
        {
          type: 'category',
          label: 'Beacon Bluetooth SenseCAP',
          collapsed: true,
          collapsible: true,
          items: [
            'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/pt_BC01_Indoor_Bluetooth_Beacon',
            'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/pt_BC02_Outdoor_Bluetooth_Beacon',
            {
              type: 'category',
              label: 'BC03 Beacon Bluetooth para ambientes internos',
              items: [
                'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/BC03_Indoor_Bluetooth_Beacon/pt_BC03_Indoor_Bluetooth_Beacon_Introduction',
                'Sensor/SenseCAP/SenseCAP_Bluetooth_Beacon/BC03_Indoor_Bluetooth_Beacon/pt_BC03_Indoor_Bluetooth_Beacon_User_Guide',
              ],
            }
          ],
        },
        {
          type: 'category',
          label: 'Sensor SenseCAP',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "Sensor/SenseCAP/SenseCAP_Intro/pt_SenseCAP_Sensor_Intro",
          },
          items: [
            {
              type: 'category',
              label: 'Sensor LoRaWAN SenseCAP',
              items: [
                {
                  type: 'category',
                  label: 'Série SenseCAP S210X',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/pt_SenseCAP_LoRaWAN_S210X_Series_Sensor',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/pt_SenseCAP_S2107',
                    {
                      type: 'category',
                      label: 'Tutoriais',
                      items: [
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/pt_Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central',
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/pt_How-to-Connect-SenseCAP-S210X-to-Helium-Network',
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/pt_How-to-Connect-SenseCAP-S210X-to-The-Things-Network',
                        'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/pt_How_to_Connect_SenseCAP_S210X_to_Datacake_via_TTN',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Sensor meteorológico 8-em-1 LoRaWAN SenseCAP S2120',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/pt_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/pt_Tutorials-Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor',
                  ],
                },
                {
                  type: 'category',
                  label: 'SenseCAP A1101',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/pt_SenseCAP-Vision-AI-Get-Started',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/pt_Train-Deploy-AI-Model-A1101',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/pt_One-Stop-Model-Training-with-Edge-Impulse',
                    'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/pt_Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101',
                    //                 'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/pt_Train_and_Deploy_Your_Own_AI_Model_with_Edge_Impulse_into_A1101',
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
                //     'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1102/pt_Getting_Start_With_A1102',
                //     'Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1102/pt_TrainAI_With_A1102',
                //   ],
                // },
              ],
            },
            {
              type: 'category',
              label: 'Sensor meteorológico SenseCAP ONE',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/pt_ONE_intro",
              },
              items: [
                'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/pt_ORCH-S4-Weather-Station',
                'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/pt_SenseCAP-One-Series-Meteorological-Sensors',
                {
                  type: 'category',
                  label: 'Estação meteorológica compacta SenseCAP One',
                  items: [
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/pt_Introduction',
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/pt_Tutorials-Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor',
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/pt_Benchmark_Labs_Forecast_Integration_for_Seeed_Weather_Stations',
                    'Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/pt_Firmware_Update',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Sonda de sensor SenseCAP',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "Sensor/SenseCAP/SenseCAP_Probe/pt_Probe_intro",
              },
              items: [
                'Sensor/SenseCAP/SenseCAP_Probe/pt_SenseCAP_Sensor_Probes_Product_Catalogue',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_Total_Solar_Radiation_Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_Liquid-Level-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_Water-Leak-Detector',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_Industrial-ph-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor_S-THP-01A',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_Soil-Moisture-Temperature-EC-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_Soil-Moisture-Temperature-Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_RS485_500cm_Ultrasonic_Sensor',
                'Sensor/SenseCAP/SenseCAP_Probe/pt_RS485_750cm_Ultrasonic_Sensor-1',
                'Sensor/SenseCAP/Accessories/pt_Industrial-Grade-Optical-Rain-Gauge-RG-15',
                'Sensor/SenseCAP/Accessories/pt_Optical-Rain-Gauge-RG-9',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Criador de sensores SenseCAP',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_Sensor_Builder/pt_Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger',
          },
          items: [
            'Sensor/SenseCAP/SenseCAP_Sensor_Builder/pt_SenseCAP_Builder_build_LoRaWAN_Sensors',
            'Sensor/SenseCAP/SenseCAP_Sensor_Builder/pt_list_of_seeed_grove_for_builder',
          ],
        },
        {
          type: 'category',
          label: 'Data logger SenseCAP',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SenseCAP/SenseCAP_Intro/pt_SenseCAP_Data_Logger_Intro',
          },
          items: [
            {
              type: 'category',
              label: 'Sensor SenseCAP Combo 5 em 1 com 4G',
              items: [
                'Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP_Combo/pt_SenseCAP_Combo_Introduction',
                'Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP_Combo/pt_Get_Started_with_SenseCAP_Combo',
              ],
            },
            'Sensor/SenseCAP/SenseCAP_Data_Logger/pt_SenseCAP-Sensor-Hub-Data-Logger',
            'Sensor/SenseCAP/SenseCAP_Data_Logger/pt_Data_Logger',
            {
              type: 'category',
              label: 'Tutorial',
              items: [
                'Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/pt_How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger',
                'Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/pt_How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger',
                'Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/pt_How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger',
              ],
            },
          ],
        },
        'Sensor/SenseCAP/pt_SenseCAP_Decoder',
        {
          type: 'category',
          label: 'Aplicações',
          items: [
            'Sensor/SenseCAP/Applications/pt_Home_Assistant_X_SenseCAP_LoRaWAN_Sensors',
            'Sensor/SenseCAP/Applications/pt_Develop_an_Industrial_LoRaWAN_Sensor',
          ],
        },
        {
          type: 'category',
          label: 'Aprender',
          items: [
            'Sensor/SenseCAP/Learn/pt_How_to_Select_the_LoRaWAN_Network',
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
    //     id: 'Sensor/SenseCAP/SenseCAP_Indicator/pt_Introduction',
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
        id: 'Sensor/SenseCAP/SenseCAP_Watcher/pt_watcher_main_page',
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
      label: 'Sensor de radar mmWave',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Sensor/mmWave_radar_sensor/pt_mmwave_radar_Intro',
      },
      items: [
        {
          type: 'category',
          label: 'mmWave para XIAO',
          items: [
            'Sensor/mmWave_radar_sensor/mmwave-for-XIAO/pt_mmwave-for-xiao',
            'Sensor/mmWave_radar_sensor/mmwave-for-XIAO/pt_mmwave-for-xiao_arduino',
            'Sensor/mmWave_radar_sensor/mmwave-for-XIAO/pt_mmwave-for-xiao-connect-to-HA',
          ],
        },
        {
          type: 'category',
          label: 'Kit mmWave MR60FDA2',
          items: [
            'Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/pt_getting_started_with_mr60fda2',
            'Sensor/mmWave_radar_sensor/mr60fda2-mmwave-kit/pt_ha_with_mr60fda2',
          ],
        },
        {
          type: 'category',
          label: 'Kit mmWave MR60BHA2',
          items: [
            'Sensor/mmWave_radar_sensor/mr60bha2-mmwave-kit/pt_getting_started_with_mr60bha2',
            'Sensor/mmWave_radar_sensor/mr60bha2-mmwave-kit/pt_ha_with_mr60bha2',
          ],
        },
        {
          type: 'category',
          label: 'Kit mmWave MR24HPC1',
          items: [
            'Sensor/mmWave_radar_sensor/mr24hpc1-mmwave-kit/pt_mr24hpc1-mmwave_human_kit',
            'Sensor/mmWave_radar_sensor/mr24hpc1-mmwave-kit/pt_mr24hpc1-mmWave_Kit_And_Grove_Connect_To_ESPHome',
          ],
        },
        'Sensor/mmWave_radar_sensor/pt_Radar_MR24HPC1',
        'Sensor/mmWave_radar_sensor/pt_Radar_MR60BHA1',
        'Sensor/mmWave_radar_sensor/pt_Radar_MR60FDA1',
        'Sensor/mmWave_radar_sensor/pt_Radar_MR24BSD1',
        'Sensor/mmWave_radar_sensor/pt_Radar_MR24HPB1',
        'Sensor/mmWave_radar_sensor/pt_Radar_MR24FDB1',
      ],
    },
    {
      type: 'category',
      label: 'XIAO',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Sensor/SeeedStudio_XIAO/pt_SeeedStudio_XIAO_Series_Introduction',
      },
      items: [
        'Sensor/SeeedStudio_XIAO/pt_SeeedStudio_XIAO_Series_Projects',
        {
          type: 'category',
          label: 'Série XIAO SAMD21',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_Seeeduino-XIAO',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_XIAO-SAMD21-Zephyr-RTOS',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_XIAO_SAMD21_with_PlatformIO',
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_Seeeduino-XIAO-by-Nanase',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_Seeeduino-XIAO-CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_XIAO-SAMD21-MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_MicroBlocks_XIAO_SAMD21',
              ],
            },
            {
              type: 'category',
              label: 'ML embarcado',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Embedded_ML/pt_Seeeduino-XIAO-TinyML',
              ],
            },
            {
              type: 'category',
              label: 'Tutorial',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_Seeeduino-XIAO-TinyUSB',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/pt_XIAO-SPI-Communication-Interface',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/pt_Seeeduino-XIAO-DAPLink',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/pt_How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI',
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
          label: 'Série XIAO RP2040',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_XIAO-RP2040',
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_XIAO-RP2040-with-Arduino',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_XIAO-RP2040-with-MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_XIAO-RP2040-with-CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_MicroBlocks_XIAO_RP2040',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_XIAO-RP2040-with-NuttX-RTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_XIAO-RP2040-Zephyr-RTOS',
              ],
            },
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/pt_XIAO_RP2040_with_PlatformIO',
            {
              type: 'category',
              label: 'ML embarcado',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/Embedded_ML/pt_XIAO-RP2040-EI',
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
          label: 'Série XIAO nRF52840',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO_BLE',
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-nRF52840-NuttX-RTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-nRF52840-Zephyr-RTOS',
              ],
            },
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-BLE_CircutPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_MicroBlocks_XIAO_nRF52840',
              ],
            },
            {
              type: 'category',
              label: 'Plataforma',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-nRF52840_PlatformIO',
              ],
            },
            {
              type: 'category',
              label: 'Uso de hardware',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-BLE-Sense-IMU-Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-BLE-Sense-PDM-Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-BLE_QSPI-Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-BLE-Sense-Pin-Multiplexing',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/pt_XIAO-BLE-Sense-NFC-Usage',
              ],
            },
            {
              type: 'category',
              label: 'Bibliotecas Bluetooth',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth_Libraries/pt_XIAO-BLE-Sense-Bluetooth_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth_Libraries/pt_XIAO-BLE-Sense-Bluetooth-Usage',
              ],
            },
            {
              type: 'category',
              label: 'ML embarcado',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded_ML/pt_XIAOEI',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded_ML/pt_XIAO-BLE-Sense-TFLite-Getting-Started',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded_ML/pt_XIAO-BLE-Sense-TFLite-Mic',
              ],
            },
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Application/pt_XIAO-BLE-sidewalk',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Application/pt_XIAO_BLE_HA',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Série XIAO nRF54L15',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Pin_Multiplexing',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Built-in-Sensor',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Power_Consumptions',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_MicroPython',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Arduino',
            {
              type: 'category',
              label: 'Conexão sem fio',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Bluetooth_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Matter_Use',
                 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Zigbee',
              ],
            },
            {
              type: 'category',
              label: 'Plataforma',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_PlatformIO',
              ],
            },
            // {
            //   type: 'category',
            //   label: 'Aplicação',
            //   items: [
            //     'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_WiFi_Usage',
            //     'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54L15-Sense/pt_XIAO_nRF54L15-Sense_Bluetooth_Usage',
            //   ],
            // },
          ],
        },
        {
          type: 'category',
          label: 'Série XIAO nRF54LM20A',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/pt_XIAO_nRF54LM20A-Sense_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/pt_XIAO_nRF54LM20A-Sense_NCS',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/pt_XIAO_nRF54LM20A-Sense_Pin_Multiplexing',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/pt_XIAO_nRF54LM20A-Sense_Built-in-Sensor',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/pt_XIAO_nRF54LM20A-Sense_Low_Power',
            {
              type: 'category',
              label: 'Conexão sem fio',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Wireless_Connection/pt_XIAO_nRF54LM20A-Sense_Bluetooth_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Wireless_Connection/pt_XIAO_nRF54LM20A_Matter_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Wireless_Connection/pt_XIAO_nRF54LM20A_NFC_Usage',
              ],
            },
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/Application/pt_XIAO_nRF54LM20A_with_epaper_and_sdcard',
              ],
            },
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/pt_XIAO_nRF54LM20A-Sense_with_MicroPython',
              ],
            },
            {
              type: 'category',
              label: 'Plataforma',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF54LM20A-Sense/pt_XIAO_nRF54LM20A-Sense_with_Arduino',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO ESP32C3',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO_ESP32C3_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO_ESP32C3_Pin_Multiplexing',
            //       'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO_ESP32C3_MicroPython',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO-ESP32C3-NuttX',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO-ESP32C3-Zephyr',
            {
              type: 'category',
              label: 'Conexão sem fio',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO_ESP32C3_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO_ESP32C3_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO_ESP32C3_with_CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_XIAO_ESP32C3_with_MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/pt_MicroBlocks_XIAO_ESP32_C3',
              ],
            },
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_xiao-esp32c3-esphome',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_xiao-esp32c3-prism-display',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_xiaoesp32c3-chatgpt',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_ESP32C3_Smart_Thermostat',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_xiaoesp32c3-flash-storage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_XIAO-ESP32C3-for-ESPHome-Support',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_Xiao_C3_Ibeacon',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/Application/pt_XIAO_ESP32C3_ESPresense',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO ESP32C5',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/pt_XIAO_ESP32C5_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/pt_XIAO_ESP32C5_Pin_Multiplexing',
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/pt_XIAO_ESP32C5_with_PlatformIO',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/pt_XIAO_ESP32C5_with_MicroPython',
              ],
            },
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/pt_XIAO_ESP32C5_ESP-Mesh_Audio',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/pt_XIAO_ESP32C5_HomeAssistant',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/pt_XIAO_ESP32C5_WiFi_Throughput_tester',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Application/pt_XIAO_ESP32_Series_CSI_Espectre',
              ],
            },
            {
              type: 'category',
              label: 'Zigbee',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Zigbee/pt_XIAO_ESP32C5_Zigbee_idf',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Zigbee/pt_XIAO_ESP32C5_Zigbee_arduino',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Zigbee/pt_XIAO_ESP32C5_Zigbee_homeassistant',
              ],
            },
            {
              type: 'category',
              label: 'Conexão sem fio',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Wireless_Connection/pt_XIAO_ESP32C5_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/Wireless_Connection/pt_XIAO_ESP32C5_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/RTOS/pt_XIAO_ESP32C5_With_FreeRTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C5/RTOS/pt_XIAO_ESP32C5_With_Zephyr',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO ESP32C6',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_Pin_Multiplexing',
            {
              type: 'category',
              label: 'Conexão sem fio',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_Embedded_Swift',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_with_CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_with_MicroPython',
              ],
            },
            {
              type: 'category',
              label: 'Plataforma',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO_ESP32C6_with_PlatformIO',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/pt_XIAO-ESP32C6-NuttX',
              ],
            },
            {
              type: 'category',
              label: 'Zigbee',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/pt_xiao_esp32c6_zigbee',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/pt_xiao_esp32c6_zigbee_arduino',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/pt_xiaoc6_zigbee_led_ha',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Zigbee/pt_use_cursor_create_zigbee_prj',
              ],
            },
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Application/pt_xiao_esp32c6_aws_iot',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C6/Application/pt_xiao_esp32c6_kafka',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Série XIAO ESP32S3',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_Getting_Started',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_Pin_Multiplexing',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_Sense_Consumption',
            {
              type: 'category',
              label: 'Conexão sem fio',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_WiFi_Usage',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_Bluetooth_Usage',
              ],
            },
            {
              type: 'category',
              label: 'Linguagem de programação',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_with_MicroPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_CircuitPython',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_MicroBlocks_XIAO_ESP32_S3',
                // 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_Micropython',
              ],
            },
            {
              type: 'category',
              label: 'RTOS',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO-ESP32S3-Zephyr-RTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO-ESP32S3-FreeRTOS',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO-ESP32S3-NuttX-RTOS',
              ],
            },
            {
              type: 'category',
              label: 'Uso de hardware',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/pt_XIAO_ESP32S3_Sense_mic',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/pt_XIAO_ESP32S3_Sense_tf_and_filesystem',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/pt_XIAO_ESP32S3_Sense_camera',
              ],
            },
            {
              type: 'category',
              label: 'Aplicações',
              items: [
                {
                  type: 'category',
                  label: 'Edge Impulse',
                  collapsed: true,
                  collapsible: true,
                  link: {
                    type: "doc",
                    id: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/pt_EdgeImpulse',
                  },
                  items: [
                    'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/pt_Key_Word_Spotting',
                    'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/Edgeimpulse/pt_Image_classification_project',
                  ],
                },
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/pt_XIAO_ESP32S3_Speech2chatgpt',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/pt_XIAO_ESP32S3_EdgeLab',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/pt_XIAO_ESP32S3_Geolocation',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/pt_XIAO_ESP32S3_ESPHome',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/pt_XIAO_ESP32S3_SSCMA',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/pt_XIAO_ESP32S3_Voice_Pomodoro',
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/Application/pt_XIAO_ESP32S3_GPIO_Viewer',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'XIAO Debug Mate',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Sensor/SeeedStudio_XIAO/xiao_debug_mate/pt_Getting_Started_with_XIAO_Debug_Mate',
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
          label: 'Placas de expansão para XIAO',
          items: [
            {
              type: 'category',
              label: 'Módulo GPS para XIAO',
              // link: {
              //   type: "doc",
              //   id: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_Introduction',
              // },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/GPS_Module_For_XIAO',
                },
              ]
            },
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_Seeeduino-XIAO-Expansion-Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_XIAO-CAN-Bus-Expansion-Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_xiao-rgb-matrix',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_gpio_expander_for_xiao',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_XIAO-RS485-Expansion-Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_Bus_Servo_Driver_Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_LED_Driver_Board',
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/pt_COB_LED_Driver_Board',
          ],
        },
        {
          type: 'category',
          label: 'XIAO + ESP-IDF + ESP-Matter',
          items: [
            'Sensor/SeeedStudio_XIAO/Matter/pt_xiao_esp32_idf_env',
            'Sensor/SeeedStudio_XIAO/Matter/pt_getting_started_with_matter',
            'Sensor/SeeedStudio_XIAO/Matter/pt_xiao_esp32_matter_env',
            'Sensor/SeeedStudio_XIAO/Matter/pt_matter_development_framework_overview',
          ],
        },
        'Sensor/SeeedStudio_XIAO/pt_XIAO_ESPNOW',
        'Sensor/SeeedStudio_XIAO/pt_PCB_Design_XIAO',
        {
          type: 'category',
          label: 'Kit com cursos',
          items: [
            'Sensor/SeeedStudio_XIAO/Kit_with_Courses/pt_XIAO-Kit-Courses'
          ],
        },
        'Sensor/SeeedStudio_XIAO/pt_XIAO_FAQ',
      ],
    },
    {
      type: 'category',
      label: 'XIAO Gadgets',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Sensor/SeeedStudio_XIAO_Gadgets',
        },
      ],
    },
    {
      type: 'category',
      label: 'Displays de tinta eletrônica',
      collapsible: true,
      link: {
        type: "doc",
        id: "Sensor/ePaper_Displays/pt_seeed_epaper_displays",
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
      label: 'Displays LCD',
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
        id: 'Sensor/Wio_Terminal/pt_Wio_Terminal_Intro',
      },
      items: [
        'Sensor/Wio_Terminal/pt_Wio-Terminal-Getting-Started',
        'Sensor/Wio_Terminal/pt_Wio-Terminal-CircuitPython',
        'Sensor/Wio_Terminal/pt_Software-FreeRTOS',
        'Sensor/Wio_Terminal/pt_wio_terminal_faq',
        // {
        //   type: 'category',
        //   label: 'ArduPy com Wio Terminal',
        //   collapsed: true,
        //   collapsible: true,
        //   link: {
        //     type: "doc",
        //     id: 'Sensor/Wio_Terminal/ArduPy/pt_ArduPy',
        //   },
        //   items: [
        //     'Sensor/Wio_Terminal/ArduPy/pt_ArduPy-LCD',
        //     'Sensor/Wio_Terminal/ArduPy/pt_ArduPy-Libraries',
        //   ],
        // },
        {
          type: 'category',
          label: 'Visão geral de hardware',
          items: [
            {
              type: 'category',
              label: 'Uso do LCD',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Basic',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Graphics',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Fonts',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Anti-aliased-Fonts',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Loading-Image',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Linecharts',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-Histogram',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LCD-APIs',
                'Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/pt_Wio-Terminal-LVGL',
              ],
            },
            {
              type: 'category',
              label: 'Entrada/saída',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/pt_Wio-Terminal-IO-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/pt_Wio-Terminal-IO-Analog',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/pt_Wio-Terminal-IO-Digital',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/pt_Wio-Terminal-IO-I2C',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/pt_Wio-Terminal-IO-SPI',
                'Sensor/Wio_Terminal/Hardware_Overview/Input&Output/pt_Wio-Terminal-Grove',
              ],
            },
            {
              type: 'category',
              label: 'Uso da IMU',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/IMU/pt_Wio-Terminal-IMU-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/IMU/pt_Wio-Terminal-IMU-Basic',
                'Sensor/Wio_Terminal/Hardware_Overview/IMU/pt_Wio-Terminal-IMU-Tapping',
              ],
            },
            {
              type: 'category',
              label: 'Cartão SD',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/SD_Card/pt_Wio-Terminal-FS-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/SD_Card/pt_Wio-Terminal-FS-ReadWrite',
              ],
            },
            {
              type: 'category',
              label: 'Wi-Fi',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/pt_Wio-Terminal-Network-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/pt_Wio-Terminal-Wi-Fi',
                'Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/pt_Wio-Terminal-Advanced-Wi-Fi',
              ],
            },
            {
              type: 'category',
              label: 'Bluetooth',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/pt_Wio-Terminal-Bluetooth-Overview',
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/pt_Wio-terminal-BLE-introduction',
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/pt_Wio-Terminal-Web-Bluetooth',
                'Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/pt_BLE-ibeacon-using-Wio-terminal',
              ],
            },
            {
              type: 'category',
              label: 'RTC',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/RTC/pt_Wio-Terminal-RTC',
              ],
            },
            {
              type: 'category',
              label: 'Botões',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Buttons/pt_Wio-Terminal-Buttons',
              ],
            },
            {
              type: 'category',
              label: 'Chave de 5 vias',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/five_Way_Switch/pt_Wio-Terminal-Switch',
              ],
            },
            {
              type: 'category',
              label: 'Sensor de luz',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Light_Sensor/pt_Wio-Terminal-Light',
              ],
            },
            {
              type: 'category',
              label: 'Emissor infravermelho',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/pt_Wio-Terminal-Infrared-Emitter',
              ],
            },
            {
              type: 'category',
              label: 'Microfone',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Microphone/pt_Wio-Terminal-Mic',
              ],
            },
            {
              type: 'category',
              label: 'Buzzer',
              items: [
                'Sensor/Wio_Terminal/Hardware_Overview/Buzzer/pt_Wio-Terminal-Buzzer',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Aplicação',
          items: [
            {
              type: 'category',
              label: 'IoT fácil',
              items: [
                'Sensor/Wio_Terminal/Application/Easy_IoT/pt_Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central',
                'Sensor/Wio_Terminal/Application/Easy_IoT/pt_Wio-Terminal-Azure-IOT',
                'Sensor/Wio_Terminal/Application/Easy_IoT/pt_Connect-Wio-Terminal-to-Google-Cloud-IoT-Core',
                'Sensor/Wio_Terminal/Application/Easy_IoT/pt_Get-Started-with-Wio-Terminal-and-Wappsto-IoT',
                'Sensor/Wio_Terminal/Application/Easy_IoT/pt_CyberDeck_Wio-Terminal',
              ],
            },
            {
              type: 'category',
              label: 'ML embarcado',
              items: [
                {
                  type: 'category',
                  label: 'Projetos com Edge Impulse',
                  items: [
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/pt_Wio-Terminal-TinyML-EI-1',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/pt_Wio-Terminal-TinyML-EI-2',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/pt_Wio-Terminal-TinyML-EI-3',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/pt_Wio-Terminal-TinyML-EI-4',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/pt_Wio-Terminal-TinyML-EI-5',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/pt_Wio-Terminal-TinyML-EI-6',
                  ],
                },
                {
                  type: 'category',
                  label: 'Projetos com TensorFlow Lite',
                  items: [
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/pt_Wio-Terminal-TinyML-TFLM-1',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/pt_Wio-Terminal-TinyML-TFLM-2',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/pt_Wio-Terminal-TinyML-TFLM-3',
                    'Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/pt_Wio-Terminal-Gesture-Recognition',
                  ],
                },
                'Sensor/Wio_Terminal/Application/Embedded_ML/pt_AIoTs_GPS_state_tester',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Placa de extensão',
          items: [
            'Sensor/Wio_Terminal/Extension_Board/pt_Wio-Terminal-Battery-Chassis',
            'Sensor/Wio_Terminal/Extension_Board/pt_Wio-Terminal-Chassis-Battery_650mAh',
            'Sensor/Wio_Terminal/Extension_Board/pt_Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915',
            'Sensor/Wio_Terminal/Extension_Board/pt_Wio-Terminal-Ethernet',
            {
              type: 'category',
              label: 'Placa de extensão de áudio',
              items: [
                'Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/pt_Wio-Terminal-Audio-Overview',
                'Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/pt_Wio-Terminal-Audio-Play-Record',
                'Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/pt_Wio-Terminal-Audio-GUI',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Kit com cursos',
          items: [
            'Sensor/Wio_Terminal/Kit_with_Courses/pt_Wio-Terminal-TinyML-Kit-Course',
            'Sensor/Wio_Terminal/Kit_with_Courses/pt_Wio-Terminal-TinyML',
            'Sensor/Wio_Terminal/Kit_with_Courses/pt_Introduction_to_Artificial_Intelligence_for_Makers',
          ],
        },
        {
          type: 'category',
          label: 'Tutorial',
          items: [
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Firmware',
            'Sensor/Wio_Terminal/Tutorial/pt_Azure_IoT_CC',
            {
              type: 'category',
              label: 'Blynk para Wio Terminal',
              items: [
                'Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/pt_Wio-Terminal-Blynk',
                'Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/pt_Blynk-wireless-OTA-functionality-to-Wio-Terminal',
              ],
            },
            {
              type: 'category',
              label: 'Host USB Wio Terminal',
              items: [
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/pt_Wio-Terminal-USBH-Overview',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/pt_Wio-Terminal-USBH-Keyboard',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/pt_Wio-Terminal-USBH-Mouse',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/pt_Wio-Terminal-USBH-Xbox',
              ],
            },
            {
              type: 'category',
              label: 'Cliente USB Wio Terminal',
              items: [
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/pt_Wio-Terminal-USBCLIENT-Overview',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/pt_Wio-Terminal-USBCLIENT-Keyboard',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/pt_Wio-Terminal-USBCLIENT-Mouse',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/pt_Wio-Terminal-USBCLIENT-MIDI',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/pt_Wio-Terminal-HMI-Usermode-SDK',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/pt_Wio-Terminal-DAPLink',
                'Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/pt_Wio-Terminal-Reading-Raspberry-Pi',
              ],
            },
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Displaying-Gyro',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Storting-Analog-Data',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Displaying-Photos',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Interactive-Face',
            'Sensor/Wio_Terminal/Tutorial/pt_Barometric-Pressure-sensor-using-the-Wio-terminal',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Reading-COVID19',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Thermal-Camera',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-HMI',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Sound-Meter',
            'Sensor/Wio_Terminal/Tutorial/pt_Getting_started_wizard',
            'Sensor/Wio_Terminal/Tutorial/pt_Edge-Impulse-Tuner',
            'Sensor/Wio_Terminal/Tutorial/pt_Wio-Terminal-Reading-Github',
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
    //     id: 'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/pt_Introduction',
    //   },
    //   items: [
    //     'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/pt_Introduction',
    //     {
    //       type: 'category',
    //       label: 'Guia de configuração',
    //       items: [
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/pt_Native_Firmware',
    //         {
    //           type: 'category',
    //           label: 'OpenAI X SenseCAP Indicator',
    //           // link: {
    //           //   type: "doc",
    //           //   id: 'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/pt_Overview',
    //           // },
    //           items: [
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/pt_Overview',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/pt_How_to_Set_the_API_Key',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/pt_ChatGPT_Indicator',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/OpenAI_X_SenseCAP_Indicator/DALL·E_AI_Picture_Generator',
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Tutorial de desenvolvimento',
    //       items: [
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/pt_Dive_into_the_Hardware',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/pt_How_to_Create_your_own_UI',
    //         {
    //           type: 'category',
    //           label: 'Desenvolver com ESP32-S3',
    //           items: [
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/pt_Four-inch_Touch_Screen',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/pt_Wi-Fi',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/pt_BLE',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/pt_Button',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/pt_LoRa',
    //           ],
    //         },
    //         {
    //           type: 'category',
    //           label: 'Desenvolver com RP2040',
    //           items: [
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/pt_CO2_Sensor_Built-in',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/pt_tVOC_Sensor_Built-in',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/pt_Buzzer',
    //             'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/pt_Micro_SD',
    //             {
    //               type: 'category',
    //               label: 'Grove',
    //               items: [
    //                 'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/pt_Grove_ADC',
    //                 'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/pt_Grove_IIC',
    //               ],
    //             },
    //           ],
    //         },
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/pt_SenseCAP_Indicator_Arduino',
    //       ],
    //     },
    //     'Sensor/SenseCAP/SenseCAP_Indicator/pt_How_To_Flash_The_Default_Firmware',
    //     {
    //       type: 'category',
    //       label: 'Aplicação',
    //       items: [
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/pt_OpenAI',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/pt_Home_Assistant',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/pt_LoRa',
    //         'Sensor/SenseCAP/SenseCAP_Indicator/Application/pt_Matter',
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
        id: 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_ReSpeaker',
      },
      items: [
        {
          type: 'category',
          label: 'reSpeaker XVF 3800',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf3800_usb_4_mic_array',
          },
          items: [
            {
              type: 'category',
              label: 'Introdução reSpeaker XVF 3800 com XIAO',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'doc',
                id: 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf3800_with_xiao_intro',
              },
              items: [
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_i2c_list',
                {
                  type: 'category',
                  label: 'Reprodução e gravação',
                  items: [
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf3800_i2s_test',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_record_playback',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_volume',
                  ],
                },
                {
                  type: 'category',
                  label: 'Streaming',
                  items: [
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_udp_streaming',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_http',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_mqtt_stream',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_websockets',
                  ],
                },
                {
                  type: 'category',
                  label: 'Controle do dispositivo',
                  items: [
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_rgb_test',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_gpio',
                    'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_doa_vad',
                  ],
                },
              ],
            },
            'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_python_sdk',
          ],
        },
        {
          type: 'category',
          label: 'reSpeaker Flex',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/reSpeaker_flex/pt_reSpeaker_flex_intro',
          },
          items: [
            {
              type: 'category',
              label: 'reSpeaker Flex com XIAO',
              link: {
                type: 'doc',
                id: 'Sensor/reSpeaker_flex/pt_reSpeaker_flex_xiao',
              },
              items: [
                {
                  type: 'category',
                  label: 'Reprodução e gravação',
                  items: [
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_i2s_test',
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_xiao_playback_record',
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_volume_xiao',
                  ],
                },
                {
                  type: 'category',
                  label: 'Streaming de áudio',
                  items: [
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_xiao_udp_stream',
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_xiao_http_stream',
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_xiao_mqtt',
                  ],
                },
                {
                  type: 'category',
                  label: 'Controle do dispositivo',
                  items: [
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_gpio',
                    'Sensor/reSpeaker_flex/pt_reSpeaker_flex_doa',
                  ],
                },
              ],
            },
            'Sensor/reSpeaker_flex/pt_reSpeaker_flex_python_control',
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
            id: 'Sensor/ReSpeaker_Lite/pt_reSpeaker_lite_introduction',
          },
          items: [
            {
              type: 'category',
              label: 'reSpeaker Lite com XIAO ESP32S3',
              link: {
                type: 'doc',
                id: 'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_xiao_respeaker',
              },
              items: [
                {
                  type: 'category',
                  label: 'Reprodução e gravação',
                  items: [
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_i2s_test',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_record_and_play',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_volume',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_player_spiffs',
                  ],
                },
                {
                  type: 'category',
                  label: 'Streaming',
                  items: [
                    {
                      type: 'doc',
                      id: 'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_streams_generator',
                      label: 'Streams Generator',
                    },
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_streams_print',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_streams_memory',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_streams_mqtt',
                  ],
                },
                {
                  type: 'category',
                  label: 'Controle do dispositivo',
                  items: [
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_rgb_test',
                    'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_button',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                // 'Sensor/ReSpeaker_Lite/Application/pt_respeaker_lite_ha',
                'Sensor/ReSpeaker_Lite/Application/pt_respeaker_lite_pi5',
              ],
            },
            'Sensor/ReSpeaker_Lite/pt_respeaker_enclosure',
          ],
        },
        {
          type: 'category',
          label: 'reSpeaker XVF 3000',
          collapsed: true,
          collapsible: true,
          items: [
            'Seeed_Elderly/reSpeaker/Extension_Board/pt_ReSpeaker_Mic_Array_v3.0',
            'Seeed_Elderly/reSpeaker/Extension_Board/pt_ReSpeaker_Mic_Array_v2.0',
            'Seeed_Elderly/reSpeaker/pt_ReSpeaker-USB-Mic-Array',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          collapsible: true,
          label: 'reSpeaker 2-Mics Pi HAT',
          link: {
            type: 'doc',
            id: 'Sensor/ReSpeaker_2-Mics_Pi_HAT/pt_ReSpeaker_2_Mics_Pi_HAT',
          },
          items: [
            {
              type: 'category',
              label: 'Para usuários da v1 (obsoleto)',
              items: [
                'Sensor/ReSpeaker_2-Mics_Pi_HAT/v1-deprecated/pt_ReSpeaker_2_Mics_Pi_HAT_Raspberry',
                'Sensor/ReSpeaker_2-Mics_Pi_HAT/v1-deprecated/pt_ReSpeaker_2_Mics_Pi_HAT_Jetson',
              ],
            },
            {
              type: 'category',
              label: 'Para usuários da v2',
              items: [
                'Sensor/ReSpeaker_2-Mics_Pi_HAT/v2/pt_ReSpeaker_2_Mics_Pi_HAT_Raspberry_v2',
                // 'Sensor/ReSpeaker_2-Mics_Pi_HAT/v2/pt_ReSpeaker_2_Mics_Pi_Hat_v2_Speech_Recognition',
              ],
            },
            'Sensor/ReSpeaker_2-Mics_Pi_HAT/pt_ReSpeaker_2_Mics_Pi_HAT-Hardware-Revisions',
          ],
        },
        {
          type: 'category',
          label: 'Módulo de detecção de eventos sonoros',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/Sound_event_sensor/pt_sound_event_sensor_intro',
          },
          items: [
            // 'Sensor/Sound_event_sensor/pt_sound_event_sensor_intro_ha',
            // add sub-docs here later
            // 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_setup',
            // 'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_configuration',
          ],
        },
        {
          type: 'category',
          label: 'reSpeaker Clip',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/reSpeaker_clip/pt_respeaker_clip_getting_started',
          },
          items: [
            'Sensor/reSpeaker_clip/pt_respeaker_clip_getting_started',
            'Sensor/reSpeaker_clip/pt_respeaker_clip_basic_sdk_guide',
            'Sensor/reSpeaker_clip/pt_respeaker_clip_rtc_streaming',
            'Sensor/reSpeaker_clip/pt_respeaker_clip_service_integration',
            'Sensor/reSpeaker_clip/pt_respeaker_clip_sensecraft_voice_sdk',
            {
              type: 'category',
              label: 'SDK de firmware',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'doc',
                  id: 'Sensor/reSpeaker_clip/pt_respeaker_clip_firmware_quick_start',
                  label: 'Primeiros passos',
                },
                {
                  type: 'doc',
                  id: 'Sensor/reSpeaker_clip/pt_respeaker_clip_firmware_development_guide',
                  label: 'Guia de desenvolvimento',
                },
                {
                  type: 'doc',
                  id: 'Sensor/reSpeaker_clip/pt_respeaker_clip_customization_at_command',
                  label: 'Comando AT personalizado',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Perguntas frequentes',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'FAQ/respeaker/pt_respeaker_faq',
          },
          items: [
            'FAQ/respeaker/pt_xvf3800_usb_4_mic_faq',
            'FAQ/respeaker/pt_flex_xvf3800_faq',
            'FAQ/respeaker/pt_respeaker_lite_faq',
            'FAQ/respeaker/pt_xvf3000_faq',
            'FAQ/respeaker/pt_respeaker_2_mics_pi_hat_faq',
            'FAQ/respeaker/pt_respeaker_clip_faq',
          ],
        },
        {
          type: 'category',
          label: 'Aplicações',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'Home Assistant',
              items: [
                'Sensor/Sound_event_sensor/pt_sound_event_sensor_intro_ha',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_ha',
                'Sensor/ReSpeaker_Lite/Application/pt_respeaker_lite_ha',
              ],
            },
            {
              type: 'category',
              label: 'Robótica',
              items: [
                'Sensor/reSpeaker_flex/pt_reSpeaker_flex_lekiwi',
                'Sensor/reSpeaker_flex/pt_reSpeaker_flex_lerobot_soarm',
                'Sensor/reSpeaker_flex/pt_reSpeaker_flex_rebot_arm',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_arm',
                'Sensor/reSpeaker_flex/pt_reSpeaker_flex_ros',
              ],
            },
            {
              type: 'category',
              label: 'Reconhecimento de fala',
              items: [
                {
                type: 'category',
                label: 'TensorFlow',
                items: [
                  'Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/pt_respeaker_streams_i2s_tflite',
                  'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_tflm',
                  'Sensor/ReSpeaker_2-Mics_Pi_HAT/v2/pt_ReSpeaker_2_Mics_Pi_Hat_v2_Speech_Recognition',
                ],
              },
              'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_edgeimpulse',                
              'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_picovoice',
              'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_sensecraft',
              ],
            },
            {
              type: 'category',
              label: 'IA conversacional',
              items: [
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_voice_agent',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_xiaozhi',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_agora',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_agora_ten_framework',
                'Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/pt_respeaker_xvf_3800_openclaw',
                'Sensor/reSpeaker_clip/pt_respeaker_clip_python_usage_stt_llm_transcribe',
                'Sensor/reSpeaker_clip/pt_respeaker_clip_python_usage_stt_llm_transcribe_memory',
                'Sensor/reSpeaker_clip/pt_respeaker_clip_chat_architecture',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Outros módulos de detecção',
      items: [
        {
          type: 'category',
          label: 'Sensores',
          items: [
            'Sensor/Beyond_Grove/Sensors/pt_Ultra_Sonic_range_measurement_module',
            'Sensor/Beyond_Grove/Sensors/pt_Water-Flow-Sensor',
            'Sensor/Beyond_Grove/Sensors/pt_Weight_Sensor_Load_Cell_0-500g',
            'Sensor/Beyond_Grove/Sensors/pt_G1_Water_Flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/pt_G1_and_2_inch_Water_Flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/pt_G1-8_Water_Flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/pt_G3-4_Water_Flow_sensor',
            'Sensor/Beyond_Grove/Sensors/pt_M11_1.25_Water_flow_Sensor',
            'Sensor/Beyond_Grove/Sensors/pt_PIR_Motion_Sensor_Large_Lens_version',
            'Sensor/Beyond_Grove/Sensors/pt_Photo_Reflective_Sensor',
            'Sensor/Beyond_Grove/Sensors/pt_Photo_interrupter_OS25B10',
            'Sensor/Beyond_Grove/Sensors/pt_Piezo_Sensor-MiniSense_100',
            'Sensor/Beyond_Grove/Sensors/pt_RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz',
            'Sensor/Beyond_Grove/Sensors/pt_Gear_Stepper_Motor_Driver_Pack',
            'Seeed_Elderly/Radar_Sensor/pt_Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11',
          ],
        },
        {
          type: 'category',
          label: 'Rede de sensores',
          items: [
            'Sensor/Beyond_Grove/Sensor_Network/pt_2KM_Long_Range_RF_link_kits_w_encoder_and_decoder',
            'Sensor/Beyond_Grove/Sensor_Network/pt_315Mhz_RF_link_kit',
            'Sensor/Beyond_Grove/Sensor_Network/pt_315MHz_Simple_RF_Link_Kit',
            'Sensor/Beyond_Grove/Sensor_Network/pt_315Mhz_Wireless_car_key_fob_with_key_chain',
            'Sensor/Beyond_Grove/Sensor_Network/pt_315Mhz_remote_relay_switch_kits-2_channels',
            'Sensor/Beyond_Grove/Sensor_Network/pt_433Mhz_RF_Link_Kit',
            'Sensor/Beyond_Grove/Sensor_Network/pt_SDLogger-Open_Hardware_Data_Logger',
            'Sensor/Beyond_Grove/Sensor_Network/pt_WiFi_Serial_Transceiver_Module',
            'Sensor/Beyond_Grove/Sensor_Network/pt_Wireless_Sensor_Node-Solar_Kit',
          ],
        },
        {
          type: 'category',
          label: 'Câmera EcoEye Vision',
          items: [
            'Sensor/Beyond_Grove/EcoEye_Embedded_Vison_Camera/pt_Get_Started_with_EcoEye',
          ],
        },
        {
          type: 'category',
          label: 'Assistente de IA',
          items: [
            'Sensor/Beyond_Grove/AI_Assistant/pt_ai_assistant_getting_started'
          ],
        },
        {
          type: 'category',
          label: 'Acessórios',
          items: [
            {
              type: 'category',
              label: 'Carregamento',
              items: [
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Essentials',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Lipo_Rider_Pro',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Lipo-Rider-Plus',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Lipo_Rider_V1.3',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_DC_framework_miniature_solenoid_VL-0063',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_DC_framework_solenoid_HCNE1-0520',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_DC_framework_solenoid_HCNE1-0630',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_0.5w_Solar_Panel_55x70',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_1.5W_Solar_Panel_81x137',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_1w_Solar_Panel_80x100',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_2.5W_Solar_Panel_116x160',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_3W_Solar_Panel_138x160',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_3.6V_Micro_hydro_generator',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Bicycle_Dynamo_With_Bracket-6V_3W',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Battery_kit_3.7V_520_mAh',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Logic_DC_Jack',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Qi_Wireless_Charger_Transmitter',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Lipo_Rider',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_Lipo_Rider_V1.1',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_5V-3.3V_Breadboard_Power_Supply',
                'Sensor/Beyond_Grove/Accessories/Charge/pt_5V-3.3V_Breadboard_Power_Supply_v1.1',
              ],
            },
            {
              type: 'category',
              label: 'Entrada/saída',
              items: [
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_USB_To_Uart_5V_3V3',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_125Khz_RFID_module-UART',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_13.56Mhz_RFID_module-IOS-IEC_14443_type_a',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_AVR_USB_Programmer',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_Scream_out_loud-110dBA_fixed_tone_Siren',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_2.8inch-TFT_Touch_Shield_V1.0',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_USB_To_Uart_3V3',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_USB_To_Uart_5V',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_Bus_Pirate_v3_assembled',
                'Sensor/Beyond_Grove/Accessories/Input_Output/pt_Codec-Adaptive_Wireless_Relay',
              ],
            },
            {
              type: 'category',
              label: 'Corrente',
              items: [
                'Sensor/Beyond_Grove/Accessories/Current/pt_Adjustable_DC_DC_Power_Converter_1V-12V-1.5A',
                'Sensor/Beyond_Grove/Accessories/Current/pt_Capacitance_Meter_Kit',
                'Sensor/Beyond_Grove/Accessories/Current/pt_RS-232_To_TTL_Conveter-MAX3232IDR',
              ],
            },
            {
              type: 'category',
              label: 'Case',
              items: [
                'Sensor/Beyond_Grove/Accessories/Case/pt_Bracket_for_Infrared_Proximity_Sensor',
                'Sensor/Beyond_Grove/Accessories/Case/pt_Shield-MaTrix-V0.9b',
              ],
            },
            {
              type: 'category',
              label: 'LED',
              items: [
                'Sensor/Beyond_Grove/Accessories/LED/pt_FSM-55'
              ],
            },
            {
              type: 'category',
              label: 'Ferramentas',
              items: [
                'Sensor/Beyond_Grove/Accessories/Tools/pt_Bluetooth_Multimeter',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Nano',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_Dfu-util',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_Replacement_LCD_Screen_for_DSO_nano',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Nano_v3',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Nano-Development',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Nano-OpenOCD_gdb',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Nano-Qemu_gdb',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Nano-gcc',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Quad',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Quad_Manual_by_the_community',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Quad-Beta_HW',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Quad-Building_Firmware',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_DSO_Quad-Calibration',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_Mini_Soldering_Iron',
                'Sensor/Beyond_Grove/Accessories/Tools/pt_RF_Explorer_Software',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Outros microcontroladores',
      items: [
        {
          type: 'category',
          label: 'Série Wio',
          items: [
            'Sensor/Wio_Series/pt_Wio',
            // {
            //   type: 'category',
            //   label: 'Wio-E5',
            //   items: [
            //     'Sensor/Wio_Series/Wio-E5/pt_LoRa_E5_mini',
            //     'Sensor/Wio_Series/Wio-E5/pt_LoRa_E5_Dev_Board',
            //     'Sensor/Wio_Series/Wio-E5/pt_LoRa-E5_STM32WLE5JC_Module',
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Wio-SX1262',
            //   items: [
            //     'Sensor/Wio_Series/Wio_SX1262/pt_Introduction',
            //     //'Sensor/Wio_Series/Wio_SX1262/pt_How_to_build_a_lora_sensor',
            //     {
            //       type: 'category',
            //       label: 'Kit Wio SX1262 com XIAO ESP32S3',
            //       items: [
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/pt_Introduction',
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/pt_Get_Started_meshtastic',
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/pt_Single_Channel_LoRaWAN_Gateway',
            //         'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/pt_LoRaWAN_Sensor_Node',
            //         {
            //           type: 'category',
            //           label: 'Servidor de rede LoRaWAN',
            //           items: [
            //             'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Lorawan_network_server/pt_TTN',
            //             'Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Lorawan_network_server/pt_Chirpstack',
            //           ],
            //         },
            //       ],
            //     },
            //   ],
            // },
            //             {
            //   type: 'category',
            //   label: 'Placa de desenvolvimento Wio Tracker 1110',
            //   items: [
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/pt_Introduction',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/pt_Get_Started',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/pt_Connect_to_TTN',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/pt_LoRa_Locator',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/pt_Connect_1110_to_HA',
            //     'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/pt_change_antenna_path',
            //     {
            //       type: 'category',
            //       label: 'Tutorial de desenvolvimento',
            //       items: [
            //         'Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Development_Tutorial/pt_Setup_toolchain',
            //       ],
            //     },
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Kit de desenvolvimento Wio WM1110',
            //   items: [
            //     'Sensor/Wio_Series/Wio-WM1110_Dev_Kit/pt_Introduction',
            //     'Sensor/Wio_Series/Wio-WM1110_Dev_Kit/pt_Get_Started_with_Wio-WM1110_Dev_Kit',
            //     {
            //       type: 'category',
            //       label: 'Tutorial de desenvolvimento',
            //       items: [
            //         'Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Development_Tutorial/pt_Hardware_Overview',
            //       ],
            //     },
            //   ],
            // },
            {
              type: 'category',
              label: 'Kit de desenvolvimento LPWAN para Sidewalk',
              items: [
                'Sensor/Wio_Series/LPWAN_Dev_Kit_for_Sidewalk/pt_LPWAN_Dev_Kit_for_Sidewalk',
                'Sensor/Wio_Series/LPWAN_Dev_Kit_for_Sidewalk/pt_Switch_to_Wio_Tracker',
              ],
            },
            // {
            //   type: 'category',
            //   label: 'Wio WM1302',
            //   items: [
            //     'Sensor/Wio_Series/Wio_WM1302/pt_WM1302_module',
            //     'Sensor/Wio_Series/Wio_WM1302/pt_WM1302_Pi_HAT',
            //   ],
            // },
            {
              type: 'category',
              label: 'Wio RP2040',
              items: [
                {
                  type: 'category',
                  label: 'Módulo Wio RP2040',
                  items: [
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_Module/pt_Wio_RP2040_Module_Build-in_Wireless_2.4G',
                  ],
                },
                {
                  type: 'category',
                  label: 'Placa de desenvolvimento Wio RP2040 mini',
                  items: [
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/pt_Wio_RP2040_mini_Dev_Board-Onboard_Wifi',
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/pt_Wio-RP2040-with-Arduino-WIFI',
                    'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/pt_LAN_Communications',
                    {
                      type: 'category',
                      label: 'Aplicação',
                      items: [
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/pt_Use_MQTT_to_remotely_light_up_LED_lights',
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/pt_Use_Socket_to_connect_to_the_forum',
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/pt_Wireless-Fall-Detection-Device',
                        'Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/pt_Wireless-desktop-atmosphere-lamp',
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
                'Sensor/Wio_Series/Wio_Link/pt_Wio_Link',
                'Sensor/Wio_Series/Wio_Link/pt_Wio_Link_Bootcamp_Kit',
                'Sensor/Wio_Series/Wio_Link/pt_Wio_Link_Deluxe_Kit',
                'Sensor/Wio_Series/Wio_Link/pt_Wio_Link_Deluxe_Plus_Kit',
                'Sensor/Wio_Series/Wio_Link/pt_Wio_Link_Environment_Kit',
                'Sensor/Wio_Series/Wio_Link/pt_Wio_Link_Event_Kit',
                'Sensor/Wio_Series/Wio_Link/pt_Wio_Link_Starter_Kit',
              ],
            },
            {
              type: 'category',
              label: 'Wio Tracker',
              items: [
                'Sensor/Wio_Series/Wio_Tracker/pt_Wio_Tracker',
                'Sensor/Wio_Series/Wio_Tracker/pt_Wio_LTE_Cat.1',
                'Sensor/Wio_Series/Wio_Tracker/pt_wio_gps_board',
                'Sensor/Wio_Series/Wio_Tracker/pt_LTE_Cat_1_Pi_HAT',
                'Sensor/Wio_Series/Wio_Tracker/pt_Wio_LTE_Cat_M1_NB-IoT_Tracker',
                'Sensor/Wio_Series/Wio_Tracker/pt_Wio-Extension-RTC',
                'Sensor/Wio_Series/Wio_Tracker/pt_Grove_Starter_Kit_for_Wio_LTE',
              ],
            },
            {
              type: 'category',
              label: 'Wio Lite',
              items: [
                'Sensor/Wio_Series/Wio_Lite/pt_Wio-Lite-AI-Getting-Started',
                'Sensor/Wio_Series/Wio_Lite/pt_Wio-Lite-W600',
                'Sensor/Wio_Series/Wio_Lite/pt_Wio-Lite-MG126',
                'Sensor/Wio_Series/Wio_Lite/pt_Wio_Lite_RISC_V_GD32VF103_with_ESP8266',
                'Sensor/Wio_Series/Wio_Lite/pt_Grove-Shield-for-Wio-Lite',
                'Sensor/Wio_Series/Wio_Lite/pt_Grove_Base_Shield_for_NodeMCU_V1.0',
              ],
            },
            {
              type: 'category',
              label: 'Wio Node',
              items: [
                'Sensor/Wio_Series/Wio_Node/pt_Wio_Node'
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Série Seeeduino',
          items: [
            'Sensor/Seeeduino_Series/pt_Getting_Started_with_Seeeduino',
            'Sensor/Seeeduino_Series/pt_Seeed_Arduino_Boards',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Buying_Guide',
            {
              type: 'category',
              label: 'Seeeduino',
              items: [
                'Sensor/Seeeduino_Series/Seeeduino/pt_Seeeduino_v4.2',
                'Sensor/Seeeduino_Series/Seeeduino/pt_Seeeduino_v4.0',
                'Sensor/Seeeduino_Series/Seeeduino/pt_Seeeduino_V2.2_Atmega-168P',
                'Sensor/Seeeduino_Series/Seeeduino/pt_Seeeduino_V2.2',
                'Sensor/Seeeduino_Series/Seeeduino/pt_Seeeduino_v2.21',
                'Sensor/Seeeduino_Series/Seeeduino/pt_Seeeduino_v3.0',
                'Sensor/Seeeduino_Series/Seeeduino/pt_Seeeduino',
              ],
            },
            'Sensor/Seeeduino_Series/pt_Seeeduino_Cloud',
            'Sensor/Seeeduino_Series/pt_Seeeduino-Cortex-M0',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Ethernet',
            'Sensor/Seeeduino_Series/pt_Seeeduino_GPRS',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Lite',
            'Sensor/Seeeduino_Series/pt_Seeeduino_LoRAWAN',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Lotus',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Lotus_Cortex-M0-',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Mega',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Mega_Protoshield_Kit',
            'Sensor/Seeeduino_Series/pt_Seeeduino-Nano',
            {
              type: 'category',
              label: 'Seeeduino Stalker',
              items: [
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/pt_Seeeduino_Stalker_V3-Waterproof_Solar_Kit',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/pt_Seeeduino_Stalker_V3.1',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/pt_Seeeduino_Stalker_v3_enclosure',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/pt_Seeeduino_Stalker_v1.0',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/pt_Seeeduino_Stalker_v2.3',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/pt_Seeeduino_Stalker',
                'Sensor/Seeeduino_Series/Seeeduino_Stalker/pt_Seeeduino-Stalker_v3',
              ],
            },
            'Sensor/Seeeduino_Series/pt_SeeedStudio-GD32-RISC-V-Dev-Board',
            'Sensor/Seeeduino_Series/pt_Seeeduino-Crypto-ATmega4809-ECC608',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Arch',
            'Sensor/Seeeduino_Series/pt_Seeeduino_Arch_V1.0',
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Sensor/Seeeduino_Series/Application/pt_Driver_for_Seeeduino',
                'Sensor/Seeeduino_Series/Application/pt_FM_Receiver',
                'Sensor/Seeeduino_Series/Application/pt_Grove-SGP41-with-AHT20'
              ],
            },
            {
              type: 'category',
              label: 'Kit com cursos',
              items: [
                'Sensor/Seeeduino_Series/Kit_with_Courses/pt_Grove_IoT_Starter_Kits_Powered_by_AWS',
                'Sensor/Seeeduino_Series/Kit_with_Courses/pt_Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'LinkIt',
          items: [
            'Seeed_Elderly/LinkIt/pt_LinkIt',
            'Seeed_Elderly/LinkIt/pt_LinkIt_Smart_7688',
            'Seeed_Elderly/LinkIt/pt_LinkIt_Smart_7688_Duo',
            'Seeed_Elderly/LinkIt/pt_Linkit_Connect_7681',
            'Seeed_Elderly/LinkIt/pt_Breakout_for_LinkIt_Smart_7688',
            'Seeed_Elderly/LinkIt/pt_Breakout_for_LinkIt_Smart_7688_v2.0',
            'Seeed_Elderly/LinkIt/pt_Arduino_Breakout_for_LinkIt_Smart_7688_Duo',
            'Seeed_Elderly/LinkIt/pt_Grove_Breakout_for_LinkIt_Smart_7688_Duo',
            'Seeed_Elderly/LinkIt/pt_Grove_Starter_kit_for_LinkIt_Smart7688_Duo',
            {
              type: 'category',
              label: 'LinkIt ONE',
              items: [
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-Analog_Interface',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-Colorful_World',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-Get_temperature_with_Webpage',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-Hello_World',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-Light-Sensor',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-Marquee',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt-ONE-Tutorial---Mini-Servo',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-Push_Button',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-SMS_control_the_LED',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_LinkIt_ONE_Tutorial-The_Basics',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_Sidekick_Basic_Kit_for_LinkIt_ONE',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_Grove-Starter_Kit_for_LinkIt_ONE',
                'Seeed_Elderly/LinkIt/Linklt_ONE/pt_Secret_Box',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Arch',
          items: [
            'Sensor/Arch/pt_Arch_Mix',
            'Sensor/Arch/pt_Arch_V1.1',
            'Sensor/Arch/pt_Arch_Pro',
            'Sensor/Arch/pt_Arch_BLE',
            'Sensor/Arch/pt_Arch_Link',
            'Sensor/Arch/pt_Arch_GPRS',
            'Sensor/Arch/pt_Arch_GPRS_V2',
            'Sensor/Arch/pt_Arch_Max',
            'Sensor/Arch/pt_Arch_Max_v1.1',
            'Sensor/Arch/pt_Heart-Sound_Sensor',
            'Sensor/Arch/pt_Grove-Starter_Kit_for_mbed',
          ],
        },
        {
          type: 'category',
          label: 'Azure Sphere MT3620',
          items: [
            'Sensor/Azure_Sphere_MT3620/pt_Azure_Sphere_MT3620_Development_Kit',
            'Sensor/Azure_Sphere_MT3620/pt_Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit',
            'Sensor/Azure_Sphere_MT3620/pt_MT3620_Ethernet_Shield_v1.0',
            'Sensor/Azure_Sphere_MT3620/pt_MT3620_Mini_Dev_Board',
            'Sensor/Azure_Sphere_MT3620/pt_MT3620_Grove_Breakout',
          ],
        },
        {
          type: 'category',
          label: 'Seeed Studio IoT Button',
          items: [
            'Sensor/IOT_Button_for_ESPHOME/pt_getting_started_with_iot_button',
            'Sensor/IOT_Button_for_ESPHOME/pt_SEEED_IOT_BOTTON_FOR_ESPHOME',
            'Sensor/IOT_Button_for_ESPHOME/pt_seeed_iot_button_with_zigbee',
            'Sensor/IOT_Button_for_ESPHOME/pt_seeed_iot_button_with_seeed_discovery',
          ],
        },
        {
          type: 'category',
          label: 'Botão IoT para AWS',
          items: [
            'Sensor/IOT_Button_For_AWS/pt_SEEED-IOT-BUTTON-FOR-AWS'
          ],
        },
        {
          type: 'category',
          label: 'Pi Pico',
          items: [
            'Sensor/Pi_Pico/pt_Grove-Starter-Kit-for-Raspberry-Pi-Pico'
          ],
        },
      ],
    },
    // {
    //   type: 'doc',
    //   label: '--Rede--',
    //   id: 'pt_Sensor_Network',
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
      id: 'pt_Network',
      label: 'Rede',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Rede Meshtastic',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Network/Meshtastic_Network/pt_meshtastic_intro',
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
    //   label: 'Rede Meshtastic',
    //   collapsed: true,
    //   collapsible: true,
    //   link: {
    //     type: "doc",
    //     id: 'Network/Meshtastic_Network/pt_meshtastic_intro',
    //   },
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'Rastreador T1000-E',
    //       items: [
    //         'Network/Meshtastic_Network/T1000-E/pt_t1000_e_intro',
    //         {
    //           type: 'doc',
    //           id: 'Network/Meshtastic_Network/T1000-E/pt_sensecap_t1000_e',
    //           label: 'Primeiros passos com T1000-E',
    //         },
    //       ],
    //     },
    //         {
    //           type: 'category',
    //           label: 'SenseCAP Indicator para Meshtastic',
    //           items: [
    //             'Network/Meshtastic_Network/SenseCAP_Indicator/pt_sensecap_indicator_meshtastic',
    //           ],
    //         },
    //         {
    //           type: 'category',
    //           label: 'Kit Meshtastic Wio Tracker 1110',
    //           items: [
    //             'Network/Meshtastic_Network/wio_tracker_kit/pt_meshtastic_kit_wio_tracker_1110',
    //             {
    //               type: 'doc', 
    //               id:'Network/Meshtastic_Network/wio_tracker_kit/pt_flash_meshtastic_kit',
    //               label: 'Gravar firmware', 
    //             },
    //           ],
    //         },
    //         {
    //           type: 'category',
    //           label: 'Kit XIAO ESP32S3 e Wio-SX1262 para Meshtastic',
    //           items: [
    //             'Network/Meshtastic_Network/XIAO_ESP32S3_&_SX1262_Kit/pt_Get_Started_meshtastic',
    //           ],
    //         },
    //       ],
    // },
    {
      type: 'category',
      label: 'Série LoRa Wio',
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
      label: 'Gateway SenseCAP',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Network/SenseCAP_Network/pt_SenseCAP_Gateway_Intro',
      },
      items: [
        {
          type: 'category',
          label: 'Gateway LoRaWAN reComputer R1225',
          items: [
            'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/pt_R1225_introduction',
            'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/pt_R1225_Quick_Start',
            {
              type: 'category',
              label: 'Cloud Platform Integration',
              items: [
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/CloudPlatform_Connection_Guide/pt_Connecting_R1225_to_ChirpStack',
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/CloudPlatform_Connection_Guide/pt_Connecting_R1225_to_TTN',
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/CloudPlatform_Connection_Guide/pt_Connecting_R1225_to_AWS_IoT',
              ],
            },
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/Application/pt_How_to_use_modbus_rs485',
                'Network/SenseCAP_Network/reComputer_R1225_LoRaWAN_Gateway/Application/pt_How_to_use_bacnet_ms_tp',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Gateway multi-plataforma SenseCAP M2',
          items: [
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/pt_SenseCAP_M2_Multi_Platform_Overview',
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/pt_SenseCAP_M2_MP_Gateway_LNS_Configuration',
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/pt_Quick_Start',
            {
              type: 'category',
              label: 'Tutorial',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/pt_Connect-M2-Multi-Platform-Gateway-to-AWS-IoT',
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/pt_Connect-M2-Multi-Platform-Gateway-to-The-Things-Network',
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/pt_Connect-M2-Multi-Platform-Gateway-to-ChirpStack',
                'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/pt_traffic_saving_config',
              ],
            },
            'Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/pt_flash_opensource_firmware_to_m2_gateway'
          ],
        },
        {
          type: 'category',
          label: 'Gateway Helium',
          items: [
            {
              type: 'category',
              label: 'Gateway SenseCAP M1',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/pt_SenseCAP_M1_Overview',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/pt_SenseCAP_M1_Quick_Start',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/pt_SenseCAP_M1_Local_Console',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/pt_SenseCAP_M1_FAQ',
                'Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/pt_SenseCAP_M1_Troubleshooting',
              ],
            },
            {
              type: 'category',
              label: 'SenseCAP M2 apenas dados',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/pt_SenseCAP_M2_Data_Only_Overview',
                'Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/pt_SenseCAP_M2_Data_Only_Quick_Start',
                'Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/pt_M2_Local_Console',
              ],
            },
            {
              type: 'category',
              label: 'Gateway SenseCAP M2 Light',
              items: [
                'Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/pt_SenseCAP_M2_Light_Gateway_Overview',
                'Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/pt_SenseCAP_M2_Light_Gateway_Quick_Start',
                'Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/pt_SenseCAP_M2_Light_Gateway_FAQ',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Flux Gateway',
          items: [
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/pt_SenseCAP_M4_Overview',
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/pt_SenseCAP_M4_Quick_Start',
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/pt_SenseCAP_M4_FAQ',
            'Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/pt_Install_Ubuntu_on_SenseCAP_M4',
          ],
        },
        {
          type: 'category',
          label: 'Gateway outdoor',
          items: [
            'Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/pt_SenseCAP_LoRaWAN_Outdoor_Gateway_Overview',
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
        id: 'Network/SenseCAP_K1100/pt_SenseCAP_K1100_Intro',
      },
      items: [
        'Network/SenseCAP_K1100/pt_K1100-quickstart',
        'Network/SenseCAP_K1100/pt_K1100_Getting_Started',
        {
          type: 'category',
          label: 'Aplicação de rede LoRaWAN',
          items: [
            {
              type: 'category',
              label: 'Uso básico de sensores com Arduino',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/pt_K1100-Light-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/pt_K1100-IMU-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/pt_K1100-Soil-Moisture-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/pt_K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/pt_K1100-Temp-Humi-Sensor-Grove-LoRa-E5',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/pt_K1100-Vision-AI-Module-Grove-LoRa-E5',
              ],
            },
            {
              type: 'category',
              label: 'Serviços em nuvem Helium',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/pt_Helium-Introduction',
                {
                  type: 'category',
                  label: 'Helium conectado e Azure integrado',
                  items: [
                    'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/pt_Connecting-to-Helium',
                    'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/pt_Integrate-into-Azure-IoT-Hub',
                    'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/Helium_Connected&Azure_Integrated/pt_Configuring-Web-APP-Visualization',
                  ],
                },
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/pt_Integrate_into_Google_Sheets_via_Helium',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/Helium_Cloud_Services/pt_Connect_AWS_via_helium',
              ],
            },
            {
              type: 'category',
              label: 'Serviços em nuvem TTN',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/TTN_Cloud_Services/pt_TTN-Introduction',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/TTN_Cloud_Services/pt_Connecting-to-TTN',
              ],
            },
            {
              type: 'category',
              label: 'SenseCAP e Node-RED para serviços em nuvem',
              items: [
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/pt_K1100_sensecap_node-red',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/pt_K1100_SenseCAP_to_Azure_IoT_Central',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/pt_K1100_SenseCAP_to_PowerBI',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/pt_K1100_SenseCAP_to_influxdb',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/pt_K1100_SenseCAP_to_twilio',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/pt_K1100_SenseCAP_to_datacake',
                'Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/pt_K1100_SenseCAP_to_grafana',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Aplicação de rede Wi-Fi',
          items: [
            'Network/SenseCAP_K1100/Wi-Fi-Network_Application/pt_Wio-Terminal-Advanced-WiFi',
            {
              type: 'category',
              label: 'Serviço em nuvem',
              items: [
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Cloud_Service/pt_Getting_started_with_Ubidots',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Cloud_Service/pt_Quick-Start-to-using-Blynk',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Cloud_Service/pt_Connect-Wio-Terminal-to-Google-Cloud',
              ],
            },
            {
              type: 'category',
              label: 'Uso da plataforma Azure IoT',
              items: [
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/pt_Connect-Wio-Terminal-to-Azure-IoT-Central',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/pt_Develop-in-Microsoft-Azure-IoT-Central',
                'Network/SenseCAP_K1100/Wi-Fi-Network_Application/Azure_IoT_Platform_Usage/pt_K1100_Azure_to_PowerBI',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Aplicação de ML embarcado',
          items: [
            'Network/SenseCAP_K1100/Embedded_ML_Application/pt_K1111-Edge-Impulse',
            'Network/SenseCAP_K1100/Embedded_ML_Application/pt_Vision_AI_with_Customizable_Models',
          ],
        },
        {
          type: 'category',
          label: 'Projeto de contribuidores',
          items: [
            'Network/SenseCAP_K1100/Contributors_Project/pt_IoT-into-the-wild-contest',
            'Network/SenseCAP_K1100/Contributors_Project/pt_K1111-Quick-Start-Guide',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Kit inicial LoRaWAN SenseCAP',
    //   items: [
    //     'Network/SenseCAP_LoRaWAN_Starter_Kit/pt_M2_Kit_Getting_Started',
    //   ],
    // },
    {
      type: 'category',
      label: 'Kit inicial LoRaWAN SenseCAP',
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
    //     'Network/LinkStar/pt_Linkstar_Datasheet',
    //     'Network/LinkStar/pt_linkstar-install-system',
    //     ],
    // },
    {
      type: 'category',
      label: 'Soluções Raspberry Pi',
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
            id: 'Network/RaspberryPi_Devices/reRouter/pt_reRouter_Intro',
          },
          items: [
            'Network/RaspberryPi_Devices/reRouter/pt_Raspberry-OpenWrt-Getting-Started',
            'Network/RaspberryPi_Devices/reRouter/pt_Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4',
            'Network/RaspberryPi_Devices/reRouter/pt_FAQs_For_openWrt',
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Network/RaspberryPi_Devices/reRouter/Application/pt_OpenWrt-Getting-Started',
                'Network/RaspberryPi_Devices/reRouter/Application/pt_OpenWrt-Plex-Media-Server-on-Docker',
                'Network/RaspberryPi_Devices/reRouter/Application/pt_Mender-Client-dual-GbE-CM4',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Hat 4G LTE para Raspberry Pi',
          collapsed: true,
          collapsible: true,
          items: [
            'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/pt_Getting_Started_LTE_CAT_4_EG25-GL_4G_Hat_for_rpi',
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                {
                  type: 'category',
                  label: 'Configuração de rede no Windows',
                  items: [
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_4g_lte_rpi_hat_rndis',
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_4g_lte_rpi_hat_mbim',
                  ],
                },
                {
                  type: 'category',
                  label: 'Configuração de rede no Raspberry Pi OS',
                  items: [
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_mobile_internet_for_your_pi_ecm_set_up',
                    'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_4g_lte_rpi_hat_qmi',
                  ],
                },
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_send_text_massages_lte_cat_hat_for_rpi',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_getting_start_with_raspberry_pi_4g_hat_and_quectel_gnss',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_4g_lte_hotspot_on_rpi_os',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_ftp_on_rpi_4g_lte_hat',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_mqtt_on_rpi_4g_lte_hat',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_tcp_ip_rpi_4g_lte_hat',
                'Network/RaspberryPi_Devices/LTE_CAT_4_EG25_GL_4G_HAT_for_Raspberry_Pi/Applications/pt_4g_lte_rpi_hat_openwrt',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Soluções Rockchip',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Network/RK_Devices/pt_RK_intro',
      },
      items: [
        {
          type: 'category',
          label: 'LinkStar-H68K',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Network/RK_Devices/LinkStar/pt_Linkstar_Intro',
          },
          items: [
            'Network/RK_Devices/LinkStar/pt_Linkstar_Datasheet',
            'Network/RK_Devices/LinkStar/pt_linkstar-install-system',
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Network/RK_Devices/LinkStar/Application/pt_h68k-ha-esphome',
                'Network/RK_Devices/LinkStar/Application/pt_plex_media_server',
                'Network/RK_Devices/LinkStar/Application/pt_wordpress_linkstar',
                'Network/RK_Devices/LinkStar/Application/pt_grocy-bookstack-linkstar',
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
            id: 'Network/RK_Devices/H68K_V2/pt_H68KV2_Datasheet',
          },
          items: [
            'Network/RK_Devices/H68K_V2/pt_H68KV2_Datasheet',
            'Network/RK_Devices/H68K_V2/pt_H68KV2_install_system',
          ],
        },
        {
          type: 'category',
          label: 'LinkStar-H28K',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Network/RK_Devices/H28K/pt_H28K_Datasheet',
          },
          items: [
            'Network/RK_Devices/H28K/pt_H28K_Datasheet',
            'Network/RK_Devices/H28K/pt_H28K-install-system',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Outros dispositivos de rede',
      items: [
        'Network/TTN_Gateway/pt_The-Things-Indoor-Gateway',
        'Network/pt_LoRa_Antenna_Selection_Guide',
        {
          type: 'category',
          label: 'Dispositivos Wio-WM6108 WiFi-HaLow',
          items: [
            'Network/WiFi-Halow/pt_wifi-halow-module-for-xiao',
            'Network/WiFi-Halow/pt_wifi-halow-mini-pcie-module',
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
      id: 'pt_Edge_Computing',
      label: 'Computação de borda',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Dispositivos RK',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Aplicação',
          collapsed: true,
          collapsible: true,
          items: [
            'Edge/RockChip_Devices/Application/pt_object_detection_with_yolov11_on_recomputer_rk'
            ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Dispositivos Raspberry Pi',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Edge/Raspberry_Pi_Devices/pt_RpiDevices',
      },
      items: [
        {
          type: 'category',
          label: 'Computador de IA de borda',
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
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_R2000/pt_reComputer_AI_R2000_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_R2000/pt_reComputer_AI_R2000_getting_start'
              ]
            },
            {
              type: 'category',
              label: 'reComputer-AI-Industrial-R2000',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_Industrial_R2000/pt_reComputer_AI_Industrial_R2135_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_Industrial_R2000/pt_reComputer_AI_Industrial_R2135_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_AI_Industrial_R2000/pt_reComputer_AI_Industrial_R2000_Flash_OS'
              ]
            },
            {
              type: 'category',
              label: 'reComputer-Industrial-R20xx',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/pt_reComputer_Industrial_R20xx_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/pt_reComputer_Industrial_R20xx_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/pt_reComputer_Industrial_R20xx_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/pt_reComputer_Industrial_R20xx_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R20xx/pt_reComputer_Industrial_R20xx_assembly_guide'
              ]
            },
            {
              type: 'category',
              label: 'reComputer-Industrial-R21xx',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/pt_reComputer_Industrial_R21xx_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/pt_reComputer_Industrial_R21xx_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/pt_reComputer_Industrial_R21xx_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/pt_reComputer_Industrial_R21xx_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R21xx/pt_reComputer_Industrial_R21xx_assembly_guide'
              ]
            },
            {
              type: 'category',
              label: 'reComputer-Industrial-R22xx',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/pt_reComputer_Industrial_R22xx_getting_start'
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/pt_reComputer_Industrial_R22xx_getting_start',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/pt_reComputer_Industrial_R22xx_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/pt_reComputer_Industrial_R22xx_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_AI_Computer/reComputer_Industrial_R22xx/pt_reComputer_Industrial_R22xx_assembly_guide'
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
                id: 'Edge/Raspberry_Pi_Devices/HMI/reTerminal/pt_reTerminal_Intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/pt_reTerminal',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/pt_reTerminal-hardware-interfaces-usage',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/pt_reTerminal-piCam',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal/pt_reTerminal-FAQ',
                {
                  type: 'category',
                  label: 'Instalação do sistema',
                  items: [
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/OS_Installation/pt_reTerminal-Buildroot-SDK',
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/OS_Installation/pt_reTerminal-Yocto',
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/OS_Installation/pt_Streampi_OBS_On_reTerminal',
                    // 'Edge/reTerminal/OS_Installation/',
                  ],
                },
                {
                  type: 'category',
                  label: 'Placa de extensão',
                  items: [
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/Extension_Board/pt_reTerminalBridge',
                    'Edge/Raspberry_Pi_Devices/HMI/reTerminal/Extension_Board/pt_reTerminal_Mount_Options',
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
                id: 'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/pt_reTerminal-dm_Intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/pt_reterminal-dm',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/pt_reterminal-dm-flash-OS',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/pt_reterminal-dm-warranty',
                'Edge/Raspberry_Pi_Devices/HMI/reTerminal-DM/pt_reterminal-dm-hardware-guide',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Controlador de borda',
          collapsed: true,
          collapsible: true,
          // link: {
          // type: "doc",
          // id: 'Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/pt_Edge_Box_intro',
          // },
          items: [
            {
              type: 'category',
              label: 'EdgeBox-RPI-200',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_Controller/Edge_Box_RPi_200/pt_Edge_Box_intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_Controller/Edge_Box_RPi_200/pt_Edgebox_rpi_200_Introduction',
              ],
            },
            {
              type: 'category',
              label: 'reComputer-R1000',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r1000_intro',
              },
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r1000_pcn',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r1000_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r1000_assembly_guide',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r1000_warranty',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r1000_how_to_use_rs485_modbus',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_recomputer_r1000_use_bacnet_mstp',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1000/pt_reComputer_R1000_FAQ',
              ],
            },
            {
              type: 'category',
              label: 'reComputer R1100',
              collapsed: true,
              collapsible: true,
              items: [
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/pt_reComputer_R1100',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/pt_recomputer_r1100_flash_os',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/pt_recomputer_r1100_configure_system',
                'Edge/Raspberry_Pi_Devices/Edge_Controller/reComputer_R1100/pt_recomputer_r1100_assembly_guide',
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
              label: 'Hat M.2',
              items: [
                'Edge/Raspberry_Pi_Devices/M_2_Hat/pt_m_2_hat_start_with_pi5',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Aplicação',
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
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/BalenaOS/pt_recomputer_r1000_build_seeed_balena_image',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/BalenaOS/pt_recomputer_r1000_balena',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/BalenaOS/pt_recomuter_ai_box_balena'
                  ]
                },
                {
                  type: 'category',
                  label: 'Solução em nuvem',
                  items: [
                    {
                      type: 'category',
                      label: 'Integração com AWS IoT Core (R1000 / reTerminal DM)',
                      items: [
                        'Edge/Raspberry_Pi_Devices/Application/AIoT/Cloud_Solution/AWS_IoT_Core_Integration_R1000_reTerminal-DM/pt_recomputer_r1000_aws',
                        'Edge/Raspberry_Pi_Devices/Application/AIoT/Cloud_Solution/AWS_IoT_Core_Integration_R1000_reTerminal-DM/pt_reTerminal-DM_AWS_first',
                      ]
                    },
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Cloud_Solution/pt_reTerminal-DM_Azure_IoT',
                  ]
                },
                {
                  type: 'category',
                  label: 'Fin',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/pt_recomputer_r1000_install_fin',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/pt_recomputer_r1000_with_fin_create_equip_graphic',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/pt_recomputer_r1000_with_fin_create_site_graphic',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/pt_recomputer_r1000_with_fin_top_level_graphic',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/pt_recomputer_r1000_with_fin_use_modbus',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/pt_recomputer_r1000_with-_fin_use_logic_to_alarm',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fin/pt_recomputer_r1000_with-fin_create_floor_graphic',
                  ]
                },
                {
                  type: 'category',
                  label: 'Fuxa',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/pt_recomputer_r1000_with_fuxa_to_achieve_SCADA',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/pt_recomputer_r1000_with_fuxa_use_modbus',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/pt_recomputer_r1000_with_fuxa_use_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/pt_recomputer_r1000_with_fuxa_use_opcua',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/pt_recomputer_r1000_with_fuxa_use_webapi',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Fuxa/pt_reTerminal-DM_intro_FUXA',
                  ]
                },
                {
                  type: 'category',
                  label: 'Home Assistant',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/pt_recomputer-r1000-home-assistant',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/pt_recomputer-r1000-modbus-home-assistant',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/pt_reTerminal_Home_Assistant',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Home-Assistant/pt_reTerminal-Home-Assistant-Customize',
                  ]
                },
                {
                  type: 'category',
                  label: 'N3uron',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_Edgebox-rpi-200-n3uron-aws',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_Edgebox-rpi-200-n3uron-bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_Edgebox-rpi-200-n3uron-modbus-mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_Edgebox-rpi-200-n3uron',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_recomputer_r1000_n3uron_aws',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_recomputer_r1000_n3uron_bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_recomputer_r1000_n3uron_getting_started',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_recomputer_r1000_n3uron_modbus_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_reTerminal_DM_N3uron_AWS',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_reTerminal_DM_N3uron_Historian',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_reTerminal_DM_N3uron_modbus_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/N3uron/pt_reTerminalDM_N3uron_Get_Start',
                  ]
                },
                {
                  type: 'category',
                  label: 'Node-RED',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_Edge_box_rpi_200_grafana',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_Edge_Box_rpi_200_Node_red_Bacnet_tcp',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_Edge_Box_rpi_200_Node_red_getting_started',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_Edge_Box_rpi_200_Node_red_influxdb',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_Edge_Box_rpi_200_Node_red_Modbus_rtu',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_Edge_Box_rpi_200_Node_red_Modbus_tcp',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_Edge_Box_rpi_200_Node_red_mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_neqto_engine_for_linux_reTerminal',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_recomputer_r1000_nodered_modbustcp',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_recomputer_r1000_nodered_opcua_server',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_recomputer_r1000_nodered_s7',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_recomputer_r1000_with_node_red_and_bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_recomputer_r1000-grafana',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_recomputer-r1000-nodered-getting-start',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_reTerminal-DM-Node-Red-Bacnet',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_reTerminal-DM-Node-Red-canbus',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_reTerminal-DM-Node-Red-grafana',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_reTerminal-DM-Node-Red-influxdb',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_reTerminal-DM-Node-Red-Modbus-TCP',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_reTerminal-DM-Node-Red-mqtt',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Node-Red/pt_reTerminal-DM-Node-Red-RS485',
                  ]
                },
                {
                  type: 'category',
                  label: 'Design de interface',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/pt_reTerminal-build-UI-using-Electron',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/pt_reTerminal-build-UI-using-Flutter',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/pt_reTerminal-build-UI-using-LVGL',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/UI_design/pt_weather-dashboard-with-Grafana-reTerminal',
                  ]
                },
                {
                  type: 'category',
                  label: 'Detecção de objetos com Edge Impulse',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Edge_Impulse_Object_Detection/pt_reTerminal_ML_Edgeimpulse',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Edge_Impulse_Object_Detection/pt_reTerminal-DM-edgeimpulse',
                  ]
                },
                {
                  type: 'category',
                  label: 'Ignition Edge (reComputer R1000 / reTerminal DM)',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Ignition_Edge_reComputer-R1000_reTerminal-DM/pt_Edgebox-rpi-200-ignition-edge',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Ignition_Edge_reComputer-R1000_reTerminal-DM/pt_reTerminal-DM-Getting-Started-with-Ignition-Edge',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Ignition_Edge_reComputer-R1000_reTerminal-DM/pt_reTerminal-DM-Ignition-Edge-Panel-Builder',
                  ]
                },
                {
                  type: 'category',
                  label: 'Integração com ThingsBoard',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/ThingsBoard_Integration/pt_recomputer_r1000_thingsboard_ce',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/ThingsBoard_Integration/pt_recomputer_r1000_thingsboard_dashboard',
                  ]
                },
                {
                  type: 'category',
                  label: 'CODESYS com Modbus no R1000',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/CODESYS_with_Modbus_on_R1000/pt_recomputer_r1000_install_codesys',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/CODESYS_with_Modbus_on_R1000/pt_recomputer_r1000_with_codesys_use_modbus_rtu',
                  ]
                },
                {
                  type: 'category',
                  label: 'Chirpstack',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Chirpstack/pt_recomputer_r1x_chirpstack',
                  ]
                },
                {
                  type: 'category',
                  label: 'OpenRemote',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/openremote/pt_recomputer_r1x_openremote',
                  ]
                },
                {
                  type: 'category',
                  label: 'Outros',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/pt_Mender-Client-reTerminal',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/pt_recomputer_r1000_flowfuse_getting_start',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/pt_reTerminal-DM_intro_machinechat_jedi',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/pt_reterminal-dm-sensecraft-edge-os-intro',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/pt_recomputer_use_ups',
                    'Edge/Raspberry_Pi_Devices/Application/AIoT/Others/pt_reComputer-RS485-test'
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Reconhecimento de fala',
              items: [
                'Edge/Raspberry_Pi_Devices/Application/Speech_Recognition/pt_deploy_whisper_on_raspberry_pi_ai_box',
              ]
            },
            {
              type: 'category',
              label: 'Visão computacional',
              items: [
                {
                  type: 'category',
                  label: 'Benchmark',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Benchmark/pt_benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Benchmark/pt_benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit',
                  ]
                },
                {
                  type: 'category',
                  label: 'Demos OpenCV (reTerminal e Pi Camera)',
                  items: [
                    {
                      type: 'category',
                      label: 'Detecção de objeto/rosto/cor/forma',
                      items: [
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/pt_reTerminal_DM_Color_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/pt_reTerminal_DM_Face_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/pt_reTerminal_DM_Object_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/Object_Face_Color_Shape-Detection/pt_reTerminal_DM_Shape_detection',
                      ]
                    },
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/pt_reTerminal_DM_opencv',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/OpenCV_Demos_reTerminal_and_Pi-Camera/pt_reTerminal_DM-tracking',
                  ]
                },
                {
                  type: 'category',
                  label: 'Aplicações baseadas em YOLO',
                  items: [
                    {
                      type: 'category',
                      label: 'Detecção de objetos YOLOv8 (Pi 5 / R1000 / AI Box)',
                      items: [
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/YOLOv8_Object_Detection_Pi-5_R1000_AI-Box/pt_Using_YOLOv8_and_AI_Box_for_fall_climbing_and_tracking_detection',
                        'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/YOLOv8_Object_Detection_Pi-5_R1000_AI-Box/pt_yolov8_object_detection_on_recomputer_r1000_with_hailo_8l',
                      ]
                    },
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/pt_reTerminal-DM-Yolo5',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/pt_yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/YOLO-based_Applications/pt_yolov11_for_speed_estimation_and_loitering_detection_on_recomputer'
                  ]
                },
                {
                  type: 'category',
                  label: 'NVR',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_gun_detection_with_frigate_nvr_on_r2000',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_frigate_home_assistant_recomputer_r2000',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_frigate_nvr_with_raspberrypi_5',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_reterminal_frigate',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_reterminal-DM-Frigate',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_zoneminder_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_go2rtc_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_moonfire_nvr_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_ispy_on_recomputer',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/NVR/pt_viseron_on_recomputer'
                  ]
                },
                {
                  type: 'category',
                  label: 'Outras aplicações de IA',
                  items: [
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_clip_application_on_rpi_with_ai_kit',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_convert_model_to_edge_tpu_tflite_format_for_google_coral',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_install_m.2_coral_to_rpi5',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_pose_based_light_control_with_nodered_and_rpi_with_aikit',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_real-time-ocr',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_reTerminal_ML_TFLite',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection',
                    'Edge/Raspberry_Pi_Devices/Application/Computer_Vision/Other_AI_Applications/pt_facial_recognition_on_the_recomputer'
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Modelo de linguagem grande',
              items: [
                'Edge/Raspberry_Pi_Devices/Application/Large_language_Model/pt_deploy_deepseek_on_raspberry_pi_ai_box',
                'Edge/Raspberry_Pi_Devices/Application/Large_language_Model/pt_distributed_inference_of_deepseek_model_on_raspberrypi'
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
                        'Edge/Raspberry_Pi_Devices/Application/Agent/openClaw/pt_getting_started_with_openclaw_on_recomputer'
                      ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Ferramentas',
              items: [
                'Edge/Raspberry_Pi_Devices/Application/Development_Tools/pt_recomputer_use_uv_to_build_package',
                'Edge/Raspberry_Pi_Devices/Application/Development_Tools/pt_recomputer_use_docker',
                'Edge/Raspberry_Pi_Devices/Application/Development_Tools/pt_recomputer_use_sqlite',
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
        id: 'Edge/NVIDIA_Jetson/pt_RecomputerPage',
      },
      items: [
        // Getting Started
        {
          type: 'category',
          label: 'Primeiros passos',
          items: [
            'Edge/NVIDIA_Jetson/pt_Jetson_Product_Selection_Guide',
            // Carrier Boards
            {
              type: 'category',
              label: 'Placas carrier',
              items: [
                'Edge/NVIDIA_Jetson/Carrier_Boards/J101/pt_reComputer_J1010_J101_Flash_Jetpack',
                'Edge/NVIDIA_Jetson/Carrier_Boards/J202/pt_reComputer_J2021_J202_Flash_Jetpack',
                {
                  type: 'category',
                  label: 'Placa carrier J401',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J401/pt_reComputer_J4012_Flash_Jetpack',
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J401/pt_J401_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'Placa carrier J401-Mini',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Mini_J401/pt_reComputer_Mini_J4012_Flash_Jetpack',
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Mini_J401/pt_J401_Mini_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'Placa carrier reServer J501',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J501/pt_reServer_Industrial_J501_Getting_Started',
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J501/pt_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'Placa carrier J501-Mini',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/J501_Mini/pt_Robotics_J501_Mini_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'Placa carrier J401-Robotics',
                  items: [
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Robotics_J401/pt_Robotics_J401_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'Placa carrier J601-Robotics',
                  items: [
                    {
                      type: 'doc',
                      id: 'Edge/NVIDIA_Jetson/Carrier_Boards/Robotics_J601/pt_reComputer_Robotics_J601_Getting_Started',
                      label: 'Flash Jetpack',
                    },
                    'Edge/NVIDIA_Jetson/Carrier_Boards/Robotics_J601/pt_Robotics_J601_carrierboard_Hardware_Interfaces_Usage',
                  ],
                },
                'Edge/NVIDIA_Jetson/Carrier_Boards/A203v2/pt_reComputer_A203_Flash_System',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A205/pt_reComputer_A205_Flash_System',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A603/pt_A603_Flash_JetPack',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A607/pt_A607_Flash_JetPack',
                'Edge/NVIDIA_Jetson/Carrier_Boards/A608/pt_A608_Flash_JetPack',
              ],
            },
            // reComputer Jetson Series
            {
              type: 'category',
              label: 'reComputer Jetson',
              link: {
                type: "doc",
                id: 'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/pt_reComputer_Intro',
              },
              items: [
                {
                  type: 'category',
                  label: 'reComputer J10',
                  link: {
                    type: "doc",
                    id: 'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/pt_reComputer_Jetson_Series_Introduction',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'reComputer J1010',
                      items: [
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/pt_reComputer_J1010_with_Jetson_getting_start',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/pt_J101_Enable_SD_Card',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/pt_J1010_Boot_From_SD_Card',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/pt_reComputer_Jetson_GPIO',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/pt_reComputer_Jetson_Memory_Expansion',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/pt_reComputer_Jetson_Series_Hardware_Layout',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/pt_reComputer_Jetson_Series_Initiation',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'reComputer J1020',
                      items: [
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1020v2/pt_reComputer_J1020v2_with_Jetson_getting_start',
                        'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1020v2/pt_reComputer_J1020_A206_Flash_JetPack',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer J20',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J20/pt_reComputer_J20_with_Jetson_getting_start',
                  ]
                },
                {
                  type: 'category',
                  label: 'reComputer J30/40',
                  // link: {
                  //   type: "doc",
                  //   id: 'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/pt_reComputer_J30_40',
                  // },
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J30_40/pt_reComputer_J30_40_with_Jetson_getting_start',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J30_40/pt_reComputer_Jetson_with_Infineon_Wi-Fi_Module'
                  ]
                },
                {
                  type: 'category',
                  label: 'reComputer Industrial',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/pt_reComputer_Industrial_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/pt_reComputer_Industrial_J20_Hardware_Interfaces_Usage',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Industrial/pt_reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage'
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Mini',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/pt_reComputer_Mini_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/pt_reComputer_Mini_Hardware_Interfaces_Usage',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Mini/pt_reComputer_Mini_J501_WiFi_Module_Installation',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Rugged J40',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Rugged_J40/pt_reComputer_Rugged_J40_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Rugged_J40/pt_reComputer_Rugged_J401_hardware_and_interface_usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Robotics J40',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Robotics_J40/pt_reComputer_Robotics_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Robotics_J40/pt_reComputer_Robotics_Hardware_Interfaces_Usage'
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Robotics J50',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Robotics_J50/pt_reComputer_Robotics_J501_Getting_Started',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer Classic J50',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Classic_J50/pt_Seeed_AGX_Orin_Dev_Kit_Getting_Started',
                  ],
                },
                {
                  type: 'category',
                  label: 'reComputer J401B',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J401B/pt_recomputer_j401b_getting_start',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J401B/pt_recomputer_j401b_interfaces_usage'
                  ]
                },
                {
                  type: 'category',
                  label: 'reComputer Super',
                  items: [
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/pt_reComputer_Super_Getting_Started',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/pt_reComputer_Super_Hardware_Interfaces_Usage',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/pt_reComputer_Super_vs_Classic_Next-Gen_AI_Performance_in_Edge_Inferencing',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/pt_Replace_the_Thermal_Conductive_Paste_for_reComputer',
                    'Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_Super/pt_reComputer_Antenna_Installation'
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
              //   id: 'Edge/NVIDIA_Jetson/reServer_Jetson_Series/pt_reServer_Industrial_Getting_Started',
              // },
              items: [
                //'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/pt_reServer_Industrial_Getting_Started',
                {
                  type: 'category',
                  label: 'reServer Industrial J30/40',
                  items: [
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/pt_reServer_Industrial_Getting_Started',
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/pt_reServer_Industrial_Hardware_Interface_Usage',
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_Industrial_J30_J40/pt_reServer_Industrial_POE_Camera_Usage',
                  ],
                },
                {
                  type: 'category',
                  label: 'reServer J2032',
                  items: [
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_J2032/pt_reServer_J2032_Flash_Jetpack',
                    'Edge/NVIDIA_Jetson/reServer_Jetson_Series/reServer_J2032/pt_reServer_J2032_Getting_Started'
                  ],
                },
              ]
            },
            // Other Devices
            {
              type: 'category',
              label: 'Outros dispositivos',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/pt_Other_Devices',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Other_Devices/pt_reBot_Arm_Jetson_Bundle',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_How_to_Update_Orin_Nano_Developer_Kit_to_Super_Kit',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_RTL8822CE_Wireless_Module_for_Jetson',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_RTL8852BE_Wireless_Module_for_Jetson',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_RM520N_Module_for_Jetson',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_EM12-G_GNSS_Module_for_reComputer_Robotics_J3011',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_Jetson_AGX_Orin_32GB_H01_Flash_Jetpack',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_Jetson_Xavier_AGX_H01_Driver_Installation',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_Jetson-Mate',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_Mini_AI_Computer_T906',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_reComputer_A203E_Flash_System',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_reComputer_A205E_Flash_System',
                'Edge/NVIDIA_Jetson/Other_Devices/pt_reComputer_Jetson_Series_GPIO_Grove'
              ]
            },
            //flashing jetpack page
            'Edge/NVIDIA_Jetson/pt_Flash_Jetpack',
            'Edge/NVIDIA_Jetson/pt_Jetson_Debug_Guide',
          ]
        },
        // Applications
        {
          type: 'category',
          label: 'Aplicações',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/pt_Application',
          // },
          items: [
            // Computer Vision
            {
              type: 'category',
              label: 'Visão computacional',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/Application/pt_Computer_Vision',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_DashCamNet-with-Jetson-Xavier-NX-Multicamera',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_How_to_Train_and_Deploy_YOLOv8_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Jetson-Nano-MaskCam',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Security_Scan',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_reComputer_Jetson_Series_Projects',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Traffic-Management-DeepStream-SDK',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_YOLOv5-Object-Detection-Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_YOLOv8-DeepStream-TRT-Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_YOLOv8-TRT-Jetson',
                // 'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_reComputer_Jetson_Series_Tutorials_Exercise',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_YOLOv8_custom_classification_model',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Multi-GMSL_Cameras_for_Real-Time_Object_Detection_and_3D_Reconstruction_on_Jetson_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_YOLOv11_With_Depth_Camera_For_Distance_Measurement',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Efficient_Multi-Task_Vision_Inference_Engine_Deployment_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_deploy_frigate_on_jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_AI-NVR_with_Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Deploy_Depth_Anything_V3_ON_Jetson_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Deploy_NVBLOX_ON_Jetson_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_YOLOv26_Dual_USB_Camera_Image_Processing_System_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Build_a_Four_Camera_Fisheye_Surround_View_Demo_on_Jetson_AGX_Thor',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_industrial_vision_monitoring_on_industrial',
                'Edge/NVIDIA_Jetson/Application/Computer_Vision/pt_Streaming_Vision_Agent_on_Jetson',
              ]
            },
            // Generative AI
            {
              type: 'category',
              label: 'IA generativa',
              link: {
                type: "doc",
                id: 'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Generative_AI_Intro',
              },
              items: [
                // Models
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Finetune_LLM_by_Llama_Factory_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Quantized_Llama2_7B_with_MLC_LLM_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_How_to_run_local_llm_text_to_image_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Whisper_on_Jetson_for_Real_Time_Speech_to_Text',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Local_RAG_based_on_Jetson_with_LlamaIndex',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_How_to_run_zero_shot_detection_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_How_to_run_VLM_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson',
                // Projects
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Deploy_JoyAI_VL_Interaction_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Local_OpenClaw(Clawdbot)_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Deploy_Live_VLM_WebUI_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Deploy_Riva_and_Llama2_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Real_Time_Subtitle_Recoder_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Deploy_Ollama_and_AnythingLLM_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Quickly_Deploy_DeepSeek_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Deploy_DeepSeek_on_reComputer_Jetson_with_MLC',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_GPT_OSS_Running_Live_on_reComputer_Jetson',
                'Edge/NVIDIA_Jetson/Application/Generative_AI/pt_Control_Motor_by_Voice_LLM_on_Jetson',
              ]
            },
            {
              type: 'category',
              label: 'IA multimodal',
              items: [
                // Models
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/pt_Local_Voice_LLM_for_Reachy_Mini',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/pt_Speech_vlm',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/pt_use_vlm_guard_warehouse',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/pt_Local_Chatbot_reComputer',
                'Edge/NVIDIA_Jetson/Application/Multimodal_AI/pt_llm_interface_control_jetson',
              ]
            },
            {
              type: 'category',
              label: 'IA física',
              items: [
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Multiple_Reachy_Mini_Robots_with_a_Fleet_Dance_Console_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Local_Chatbot_reComputer',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Local_Voice_LLM_for_Reachy_Mini',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Getting_Started_with_Jetson_Claw_on_Orin_Nano_NX_8GB',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Fine_tune_GR00T_N1.6_for_LeRobot_SO_Arm_and_Deploy_on_AGX_Orin',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Fine_tune_GR00T_N1.7_for_reBot_Arm_and_Deploy_on_Robotics_J601',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_J501_Mini_StarAI_Viola_Fruit_Sorting',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Control_SoArm_by_OpenClaw_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Control_reBot_Arm_by_NemoClaw_on_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_Voice_Control_reBot_Arm_B601_by_Nvidia_Jetson_Thor',
                'Edge/NVIDIA_Jetson/Application/Physical_AI/pt_reBot_Arm_B601_DM_GraspNet_Visual_Grasping',
              ]
            },
            // Managed Services
            {
              type: 'category',
              label: 'Serviços gerenciados',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/Application/pt_Managed_Services',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Application/Managed_Services/pt_Allxon-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Managed_Services/pt_neqto_engine_for_linux_recomputer',
                'Edge/NVIDIA_Jetson/Application/Managed_Services/pt_Scailable-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Managed_Services/pt_Update-Jetson-Linux-OTA-Using-Allxon'
              ]
            },
            // Developer Tools
            {
              type: 'category',
              label: 'Ferramentas de desenvolvimento',
              // link: {
              //   type: "doc",
              //   id: 'Edge/NVIDIA_Jetson/Application/pt_Developer_Tools',
              // },
              items: [
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Build_and_Flash_Yocto_for_reComputer_Super',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Develop_reComputer_Jetson_using_Clawdbot',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Gapi-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_alwaysAI-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Cochl.Sense-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_CVEDIA-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_DeciAI-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_HardHat',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Jetson-AI-developer-tools',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_jetson-docker-getting-started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Lumeo-Jetson-Getting-Started',
                // 'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_No-code-Edge-AI-Tool',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_reComputer_Jetson_Series_Resource',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_NVStreamer_Getting_Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Roboflow-Jetson-Getting-Started',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Install_torch_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_vnc_for_reComputer',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Implement_Ethercat_communication_on_reComputer',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Distributed_llama_cpp_RPC_on_Jetson',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Deploy_TensorRT_Edge-LLM_on_Jetpack6.2',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Jetson_SPI_Getting_Start',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Flash_PREEMPT_RT_Kernel_on_reComputer_Jetson_JetPack_6_2_1',
                'Edge/NVIDIA_Jetson/Application/Developer_Tools/pt_Rapid_Prototyping_on_Jetson_with_NVIDIA_Skills',
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
            id: 'Edge/NVIDIA_Jetson/JetPack_7_2/pt_JetPack_7_2_Overview',
          },
          items: [
            {
              type: 'category',
              label: 'Gravação flash e OTA',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/pt_JetPack72_Deep_Dive_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Flashing_OTA/pt_Flash_and_OTA_JetPack_7_2',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Migration/pt_JetPack_6_to_7_Migration_Playbook',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/pt_JetPack_7_2_Unified_Platform_ISO_SBSA',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/pt_JetPack_7_2_MAXN_SUPER_and_MIG',
              ],
            },
            {
              type: 'category',
              label: 'Kernel e multimídia',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Drivers/pt_JetPack72_AX210_AX200_WiFi_Setup_Guide_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Drivers/pt_JetPack_7_2_Camera_and_Multimedia_Compatibility',
              ],
            },
            {
              type: 'category',
              label: 'IA agêntica e habilidades',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Agentic_AI/pt_Rapid_Prototyping_on_Jetson_with_NVIDIA_Skills_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Agentic_AI/pt_Control_reBot_Arm_by_NemoClaw_on_Jetson_Thor_bk',
              ],
            },
            {
              type: 'category',
              label: 'Otimização de memória',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Optimization/pt_JetPack_7_2_Memory_Optimization',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Optimization/pt_JetPack_7_2_Memory_Optimization_Deep_Dive',
              ],
            },
            {
              type: 'category',
              label: 'Yocto',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/Platform/pt_Build_and_Flash_Yocto_for_reComputer_Super_bk',
              ],
            },
            {
              type: 'category',
              label: 'Implantação e aplicações de IA',
              items: [
                'Edge/NVIDIA_Jetson/JetPack_7_2/pt_Deploy_TensorRT_Edge-LLM_on_Jetpack7.2',
                'Edge/NVIDIA_Jetson/JetPack_7_2/AI_Inference/pt_industrial_vision_monitoring_on_industrial_bk',
                'Edge/NVIDIA_Jetson/JetPack_7_2/AI_Inference/pt_JetPack_7_2_DeepStream',
                'Edge/NVIDIA_Jetson/JetPack_7_2/Application/pt_Deploy_Full_Weight_GR00T_N1_7_TensorRT_on_AGX_Orin',
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
            id: 'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Overview',
          },
          items: [
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Supported_Devices',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Installation',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Connect_Device',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Flash_Firmware',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Device_Management',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_App_Market',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Skills',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_Remote_Development',
            'Edge/NVIDIA_Jetson/Jetson_DevelopTool/pt_Jetson_DevelopTool_FAQ',
          ],
        },
        // FAQs
        {
          type: 'category',
          label: 'Perguntas frequentes',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/pt_FAQs',
          // },
          items: [
            'Edge/NVIDIA_Jetson/FAQs/pt_jetson_FAQ',
            'Edge/NVIDIA_Jetson/FAQs/pt_Create_Backup_and_Restore_on_reComputer',
            'Edge/NVIDIA_Jetson/FAQs/pt_Migrate_Home_Data_from_Jetson_Orin_Nano_Developer_Kit_to_reComputer',
            'Edge/NVIDIA_Jetson/FAQs/pt_Deploy_OTA_ON_reComputer',
            'Edge/NVIDIA_Jetson/FAQs/pt_Headless_Setup_and_Recovery_for_A603',
            // 'Edge/NVIDIA_Jetson/FAQs/pt_Updating_Jetpack_with_OTA',
            'Edge/NVIDIA_Jetson/FAQs/pt_Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera',
            'Edge/NVIDIA_Jetson/FAQs/pt_How_to_use_Camera_IMX219',
            'Edge/NVIDIA_Jetson/FAQs/pt_Use_IMX477_Camera_with_A603',
            'Edge/NVIDIA_Jetson/FAQs/pt_Use_Arducam_OV9281_Camera_with_A603',
            'Edge/NVIDIA_Jetson/FAQs/pt_Differences_of_L4T_Between_Seeed_and_NVIDIA',
            'Edge/NVIDIA_Jetson/FAQs/pt_Overview_of_the_Relationship_Between_JetPack_and_Jetson',
            'Edge/NVIDIA_Jetson/FAQs/pt_How_to_Establish_the_Ethercat_on_Jetson',
            'Edge/NVIDIA_Jetson/FAQs/pt_Make_DIY_BSP_for_Jetson',
            'Edge/NVIDIA_Jetson/FAQs/pt_Make_DIY_BSP_from_Orin_Nano_DevKit_to_reComputer_Classic_And_Super',
            'Edge/NVIDIA_Jetson/FAQs/pt_How_to_Build_and_Flash_BSP_Source_for_Jetson_Thor',
            'Edge/NVIDIA_Jetson/FAQs/pt_Weston_EGL_NOT_INITIALIZED_on_Jetson_Cold_Boot',
            'Edge/NVIDIA_Jetson/FAQs/pt_Flash_JetPack_with_WSL2',
            'Edge/NVIDIA_Jetson/FAQs/pt_Jetson_Initrd_Flash_Fails_with_ZFS_Host',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Dispositivos ESP',
      collapsed: true,
      collapsible: true,
      //link: {
      //type: "doc",
      //id: 'Edge/Edge_Series/pt_Edge_series_Intro',
      // },
      items: [
        {
          type: 'category',
          label: 'EdgeBox-ESP-100',
          items: [
            'Edge/Edge_Series/Edge_Box_ESP_100/pt_Edgebox-ESP-100-Arduino'
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
        id: 'Edge/Beagle_Bone/pt_BeagleBone',
      },
      items: [
        'Edge/Beagle_Bone/pt_BeagleBone_Blue',
        'Edge/Beagle_Bone/pt_BeagleBone_Green',
        'Edge/Beagle_Bone/pt_BeagleBone_Green_Wireless',
        'Edge/Beagle_Bone/pt_BeagleBone_Green_Eco',
        'Edge/Beagle_Bone/pt_BeagleBone-Green-Gateway',
        'Edge/Beagle_Bone/pt_Beaglebone_Case',
        {
          type: 'category',
          label: 'Aplicação',
          items: [
            'Edge/Beagle_Bone/Application/pt_BeagleBone_Solutions',
            'Edge/Beagle_Bone/Application/pt_ChatGPT_and_BeagleBone',
          ],
        },
        {
          type: 'category',
          label: 'Placa de extensão',
          items: [
            'Edge/Beagle_Bone/Extension_Board/pt_Grove_Cape_for_BeagleBone_Series',
            'Edge/Beagle_Bone/Extension_Board/pt_Grove_Base_Cape_for_BeagleBone_v2',
            'Edge/Beagle_Bone/Extension_Board/pt_Motor_Bridge_Cape_v1.0',
            'Edge/Beagle_Bone/Extension_Board/pt_Skeleton_box_for_Beaglebone',
            'Edge/Beagle_Bone/Extension_Board/pt_BeagleBone_Green_HDMI_Cape',
            'Edge/Beagle_Bone/Extension_Board/pt_Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch',
          ],
        },
        {
          type: 'category',
          label: 'Kit com cursos',
          items: [
            'Edge/Beagle_Bone/Kit_with_Courses/pt_Grove_Starter_Kit_for_BeagleBone_Green',
            'Edge/Beagle_Bone/Kit_with_Courses/pt_Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
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
        id: 'Edge/ODYSSEY/pt_ODYSSEY_Intro',
      },
      items: [
        //  'Edge/ODYSSEY/pt_ODYSSEY_Getting_Started',
        {
          type: 'category',
          label: 'ODYSSEY STM32MP135D',
          items: [
            'Edge/ODYSSEY/ODYSSEY_STM32MP135D/pt_ODYSSEY_STM32MP135D',
          ],
        },
        {
          type: 'category',
          label: 'ODYSSEY X86J4105',
          items: [
            'Edge/ODYSSEY/ODYSSEY_X86J4105/pt_ODYSSEY-X86J4105',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/pt_ODYSSEY-X86J4105-GPIO',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/pt_ODYSSEY-X86J4105-Accessories',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/pt_Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/pt_ODYSSEY-X86J4105-LTE-Module',
            'Edge/ODYSSEY/pt_ODYSSEY_FAQ',
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                {
                  type: 'category',
                  label: 'Home Assistant para ODYSSEY',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/pt_ODYSSEY-X86-Home-Assistant',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/pt_ODYSSEY-Home-Assistant-Customize',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/pt_Connect-Grove-to-Home-Assistant-ESPHome',
                  ],
                },
                {
                  type: 'category',
                  label: 'Azure IoT para ODYSSEY',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Azure_IoT_for_ODYSSEY/pt_ODYSSEY-X86J4105-AzureIOT',
                  ],
                },
                {
                  type: 'category',
                  label: 'Mender para ODYSSEY',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/pt_Mender-Client-ODYSSEY-X86',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/pt_Mender-Server-ODYSSEY-X86',
                  ],
                },
                {
                  type: 'category',
                  label: 'Versão para computador',
                  items: [
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/pt_ODYSSEY-X86J4105-Intel-OpenVINO',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/pt_ODYSSEY-X86J4105-NCS2',
                    'Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/pt_ODYSSEY-X86J4105-Frigate',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Instalação do sistema',
              items: [
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86J4105-Installing-OS',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86J4105-Updating-Firmware',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_Jellyfin-on-Docker-Ubuntu-X86',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86J4105-Installing-openwrt',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86-OPNsense',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86J4105-pfSense',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86-TrueNAS',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86J4105-Installing-Android',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_ODYSSEY-X86J4105-Installing-FreeNAS',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/pt_BalenaOS-X86-Getting-Started',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'ODYSSEY STM32MP157C',
          items: [
            'Edge/ODYSSEY/ODYSSEY_STM32MP157C/pt_ODYSSEY-STM32MP157C',
            'Edge/ODYSSEY/ODYSSEY_STM32MP157C/pt_SEEED-SOM-STM32MP157C',
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
        id: 'Edge/reCamera/pt_ReCameraPage',
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
      label: 'Outros dispositivos de borda',
      items: [
        {
          type: 'category',
          label: 'reServer X86',
          items: [
            'Edge/reServer/reServer_X86/pt_reServer-Getting-Started',
            'Edge/reServer/reServer_X86/pt_reServer-Update-BIOS-Install-Drivers',
          ],
        },
        'Edge/Quantum_Development_Board/pt_Quantum-Mini-Linux-Development-Kit',
      ],
    },
    {
      type: 'doc',
      id: 'pt_Edge_Robotics',
      label: 'Página de robótica',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Kits de robô',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Lerobot',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/pt_Robotics',
          // },
          items: [
            //'Robotics/Robot_Kits/Lerobot/pt_En_Hackathon_Thor',
            'Robotics/Robot_Kits/Lerobot/pt_Fine_tune_GR00T_N1.5_for_LeRobot_SO_Arm_and_Deploy_on_Jetson_Thor',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_Starai_Arm',
            'Robotics/Robot_Kits/Lerobot/pt_Starai_Arm_ROS2_Moveit',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_SO100Arm_New',
            'Robotics/Robot_Kits/Lerobot/pt_SOARM101_XIAO_MicroROS_Wireless_Teleoperation',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_SO_ARM101_DAMO',
            'Robotics/Robot_Kits/Lerobot/pt_SOARM_AMAZINGHAND_TELEOP',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_Dataset_Tool',
            'Robotics/Robot_Kits/Lerobot/pt_Steering_Gear_Debugging_Tool',
            'Robotics/Robot_Kits/Lerobot/pt_Complete_Guide_to_Double-Arm_SO-ARM_Training',
            //'Robotics/Robot_Kits/Lerobot/pt_Lerobot_SO100Arm',
            'Robotics/Robot_Kits/Lerobot/pt_Lerobot_Lekiwi',
            'Robotics/Robot_Kits/Lerobot/pt_Sound_Follow_Robot_Powered_by_reSpeaker_and_Lekiwi',
          ]
        },
        {
          type: 'category',
          label: 'Efetuadores finais',
          items: [
            'Robotics/Robot_Kits/End_Effectors/pt_DM_Gripper',
          ]
        },
        {
          type: 'category',
          label: 'Braço reBot',
          items: [
            {
              type: 'category',
              label: 'B601-DM',
              items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_DM/pt_reBot_Arm_B601_DM_isaacsim',
              ]
            },
            {
              type: 'category',
              label: 'B601-RS',
              items: [
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Getting_Started',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Lerobot',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_Grasping_Demo',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_ROS2_Integration',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_pinocchio',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_isaacsim',
                'Robotics/Robot_Kits/reBot_Arm/B601_RS/pt_reBot_Arm_B601_RS_control_mit'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Mão',
          items: [
            'Robotics/Robot_Kits/Hand/pt_AmazingHand',
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
              id: 'Robotics/Robot_Kits/ReachyMini/pt_intro',
              label: 'Introdução',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/pt_ReachyMini_Getting_Started',
              label: 'Primeiros passos',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/pt_AGENTS',
              label: 'Guia do agente de IA',
            },
            {
              type: 'doc',
              id: 'Robotics/Robot_Kits/ReachyMini/pt_vibe-code-with-your-agent',
              label: 'Programe com seu agente',
            },
            {
              type: 'category',
              label: 'Casos de desenvolvimento',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/pt_home_assistant',
                  label: 'Integração com Home Assistant',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/development_cases/pt_reachymini_voice_control_soarm',
                  label: 'Controle por voz do Reachy Mini para o SO-ARM',
                },
              ],
            },
            {
              type: 'category',
              label: 'Reachy Mini (sem fio)',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_get_started',
                  label: 'Primeiros passos',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_usage',
                  label: 'Uso',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_media_advanced_controls',
                  label: 'Controles avançados de mídia',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_reset',
                  label: 'Resetar',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_install_daemon_from_branch',
                  label: 'Instalar daemon a partir de branch',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_development_workflow',
                  label: 'Fluxo de trabalho de desenvolvimento',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini/pt_reflash_the_rpi_ISO',
                  label: 'Regravar a ISO',
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
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_get_started',
                  label: 'Primeiros passos',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_usage',
                  label: 'Uso',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_hardware',
                  label: 'Hardware',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_media_advanced_controls',
                  label: 'Controles avançados de mídia',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/reachy_mini_lite/pt_wizard',
                  label: 'Assistente',
                },
              ],
            },
            {
              type: 'category',
              label: 'Simulação',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/platforms/simulation/pt_get_started',
                  label: 'Primeiros passos',
                },
              ],
            },
            {
              type: 'category',
              label: 'Guia do SDK',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_readme',
                  label: 'Visão geral do SDK',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_installation',
                  label: 'Instalação',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_quickstart',
                  label: 'Início rápido',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_python-sdk',
                  label: 'SDK Python',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_javascript-sdk',
                  label: 'SDK JavaScript',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_integration',
                  label: 'Integrações de IA',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_core-concept',
                  label: 'Conceitos básicos',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_media-architecture',
                  label: 'Arquitetura de mídia',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/SDK/pt_gstreamer-installation',
                  label: 'Instalação do GStreamer',
                },
              ],
            },
            {
              type: 'category',
              label: 'Ajuda e solução de problemas',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/pt_troubleshooting',
                  label: 'Solução de problemas',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/pt_motors_diagnosis',
                  label: 'Diagnóstico de motores',
                },
                {
                  type: 'doc',
                  id: 'Robotics/Robot_Kits/ReachyMini/troubleshooting/pt_change_mic_fpc_cable',
                  label: 'Trocar cabo FPC do microfone',
                },
              ],
            },
            {
              type: 'category',
              label: 'Exemplos',
              collapsible: true,
              collapsed: true,
              items: [
                { type: 'autogenerated', dirName: 'Robotics/Robot_Kits/ReachyMini/examples' },
              ],
            },
            {
              type: 'category',
              label: 'Referência da API',
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
            'Robotics/Robot_Kits/StackForce/pt_StackForce_Giant_Bipedal_Wheeled_Robot',
            'Robotics/Robot_Kits/StackForce/pt_StackForce_Mini_Wheeled_Legged_Robot',
          ]
        },
        {
          type: 'category',
          label: 'Humanoide',
          items: [
            {
              type: 'category',
              label: 'Atom-S',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-S/pt_Atom-S',
              ]
            },
            {
              type: 'category',
              label: 'Atom-X',
              items: [
                'Robotics/Robot_Kits/Humanoid/Atom-X/pt_Atom-X',
              ]
            },

          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Atuador',
      // link: {
      //   type: "doc",
      //   id: 'Edge/NVIDIA_Jetson/pt_Application',
      // },
      items: [
        {
          type: 'category',
          label: 'HighTorque',
          items: [
            'Robotics/Robot_Actuator/HighTorque/pt_HighTorque',
            'Robotics/Robot_Actuator/HighTorque/pt_HighTorque_Getting_Started',
            'Robotics/Robot_Actuator/HighTorque/pt_HighTorque_Control',
          ]
        },
        'Robotics/Robot_Actuator/pt_Feetech_Servo',
        'Robotics/Robot_Actuator/pt_FashionStar_Servo',
        'Robotics/Robot_Actuator/pt_Stackforce_Series',
        'Robotics/Robot_Actuator/pt_Myactuator_Series',
        'Robotics/Robot_Actuator/pt_Damiao_Series',
        'Robotics/Robot_Actuator/pt_RobStride_Control',
      ]
    },
    {
      type: 'category',
      label: 'Sensor',
      // link: {
      //   type: "doc",
      //   id: 'Edge/NVIDIA_Jetson/pt_Application',
      // },
      items: [
        {
          type: 'category',
          label: 'Lidar',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/pt_Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/Lidar/pt_Robosense_Lidar',
            'Robotics/Robot_Sensor/Lidar/pt_MID360',
            'Robotics/Robot_Sensor/Lidar/pt_A_Loam',
            'Robotics/Robot_Sensor/Lidar/pt_SLAMTEC',
          ]
        },
        {
          type: 'category',
          label: 'Câmera',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/pt_Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/Camera/pt_Getting_Start_with_AC1',
            'Robotics/Robot_Sensor/Camera/pt_Getting_Start_with_Orbbec_Gemini2_3D_Camera',
            'Robotics/Robot_Sensor/Camera/pt_Getting_Start_with_Orbbec_Gemini_336',
            'Robotics/Robot_Sensor/Camera/pt_Orbbec_Depth_Camera',
            'Robotics/Robot_Sensor/Camera/pt_realsense_3D_seg',
            'Robotics/Robot_Sensor/Camera/pt_ORB_SLAM3_with_Orbbec_Gemini2',
            'Robotics/Robot_Sensor/Camera/pt_Pycuvslam_On_reComputer',
            'Robotics/Robot_Sensor/Camera/pt_Orbbec_Gemini_335Lg',
            'Robotics/Robot_Sensor/Camera/pt_Sensing_GMSL_Camera',
            'Robotics/Robot_Sensor/Camera/pt_CSI_Camera'
          ]
        },
        {
          type: 'category',
          label: 'IMU',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/pt_Robotics',
          // },
          items: [
            'Robotics/Robot_Sensor/IMU/pt_Hexfellow_Y200',
            'Robotics/Robot_Sensor/IMU/pt_WHEELTEC_IMU',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Software',
      items: [
        {
          type: 'category',
          label: 'ROS',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/pt_Robotics',
          // },
          items: [
            "Robotics/Robot_Software/ROS/pt_Installing_ROS1",
            "Robotics/Robot_Software/ROS/pt_Install_IsaacROS",
            "Robotics/Robot_Software/ROS/pt_Install_ROS2_Humble",
            "Robotics/Robot_Software/ROS/pt_Isaac_ROS_AprilTag",
            "Robotics/Robot_Software/ROS/pt_Isaac_ROS_Visual_SLAM",
          ]
        },
        {
          type: 'category',
          label: 'Isaac Lab',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/pt_Robotics',
          // },
          items: [
            'Robotics/Robot_Software/Isaac_Lab/pt_Install_Isaac_lab',
            'Robotics/Robot_Software/Isaac_Lab/pt_Simulate_SoArm101_by_LeIsaac',
            'Robotics/Robot_Software/Isaac_Lab/pt_Training_SoARM101_Policy_with_IsaacLab',
          ]
        },
        {
          type: 'category',
          label: 'PX4',
          // link: {
          //   type: "doc",
          //   id: 'Edge/NVIDIA_Jetson/Application/pt_Robotics',
          // },
          items: [
            "Robotics/Robot_Software/PX4/pt_Control_PX4_with_reComputer_Jetson",
            "Robotics/Robot_Software/PX4/pt_Object_Tracking_with_reComputer_Jetson_and_PX4"
          ]
        },
        'Robotics/Robot_Software/VLA/pt_control_robotic_arm_via_gr00t',
        'Robotics/Robot_Software/pt_control_robotic_arm_via_phospho',
      ]
    },
    {
      type: 'doc',
      id: 'pt_Cloud',
      label: 'SenseCraft e nuvem',
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
        id: 'Cloud_Chain/CodeCraft/pt_0-codecraft-overview',
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
      label: 'Plataforma de dados SenseCraft',
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
        id: 'Cloud_Chain/SenseCraft_HMI/pt_sensecraft_hmi_overview',
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
      label: 'Soluções',
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
      id: 'Topics/pt_Topic_introduction',
      label: 'Tópicos de tecnologia',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Home Assistant',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Topics/Home_Assistant/pt_Home_Assistant_Topic',
      },
      items: [
        'Topics/Home_Assistant/Home_Assistant_Tutorials/pt_home_assistant_sensecap',
        'Topics/Home_Assistant/Home_Assistant_Tutorials/pt_Extend_Home_Assistant_with_LoRaWAN_device',
        'Topics/Home_Assistant/Home_Assistant_Tutorials/pt_sensecraft_homeassistant_userguide',
      ],
    },
    {
      type: 'category',
      label: 'TinyML',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Topics/TinyML/pt_TinyML_Topic',
      },
      items: [
        {
          type: 'category',
          label: 'Oficina de IA',
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'Topics/TinyML/TinyML_Workshop/pt_TinyML_workshop_course',
          },
          items: [
            'Topics/TinyML/TinyML_Workshop/pt_sscma',
            'Topics/TinyML/TinyML_Workshop/pt_TrainModel',
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
              label: 'Introdução',
              collapsed: false,
              items: [
                'Topics/TinyML/ModelAssistant/introduction/pt_overview',
                'Topics/TinyML/ModelAssistant/introduction/pt_quick_start',
                'Topics/TinyML/ModelAssistant/introduction/pt_installation',
              ]
            },
            {
              type: 'category',
              label: 'Tutoriais',
              collapsed: false,
              items: [
                'Topics/TinyML/ModelAssistant/tutorials/pt_config',
                'Topics/TinyML/ModelAssistant/tutorials/pt_datasets',
                {
                  type: 'category',
                  label: 'Treinamento',
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: 'Topics/TinyML/ModelAssistant/tutorials/training/pt_overview',
                  },
                  items: [
                    'Topics/TinyML/ModelAssistant/tutorials/training/pt_yolo',
                    'Topics/TinyML/ModelAssistant/tutorials/training/pt_fomo',
                    'Topics/TinyML/ModelAssistant/tutorials/training/pt_pfld',
                  ]
                },
                {
                  type: 'category',
                  label: 'Exportar',
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: 'Topics/TinyML/ModelAssistant/tutorials/export/pt_overview',
                  },
                  items: [
                    'Topics/TinyML/ModelAssistant/tutorials/export/pt_pytorch_2_onnx',
                    'Topics/TinyML/ModelAssistant/tutorials/export/pt_pytorch_2_tflite',
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Implantação',
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: 'Topics/TinyML/ModelAssistant/deploy/pt_overview',
              },
              items: [
                'Topics/TinyML/ModelAssistant/deploy/pt_ma_deploy_yolov5',
                'Topics/TinyML/ModelAssistant/deploy/pt_ma_deploy_yolov8',
                'Topics/TinyML/ModelAssistant/deploy/pt_ma_deploy_yolov8_pose',
                'Topics/TinyML/ModelAssistant/deploy/pt_ma_deploy_yolov26',
              ]
            },
          ],
        },
      ],
    },
    'Topics/Open_Source/pt_Open_Source_Topic',
    'Topics/Edge_AI/pt_Edge_AI_Topic',
    /*
      {
      type: 'doc',
      id: 'Topics/Edge_AI/pt_Edge_AI_Topic',
      label: 'IA de borda',
      className: 'sideboard_calss',
      },
*/
    {
      type: 'doc',
      id: 'pt_Contributor',
      label: 'Contribuições',
      className: 'sideboard_calss',
    },
    // {
    //       type: 'category',
    //       label: 'Serviço Fusion',
    //       items: [
    //         'Contribution/Fusion/pt_Service_for_Fusion_PCB',
    //         'Contribution/Fusion/pt_Galileo_Case',
    //         'Contribution/Fusion/pt_Unibody_box_for_Galileo_Gen2',
    //         'Contribution/Fusion/pt_Starter_bundle_harness_V1',
    //       ]
    // },
    {
      type: 'category',
      label: 'Guia de contribuições no GitHub',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Contribution/Contributors/Contribution-Guide/pt_Contribution-Guide',
      },
      items: [
        'Contribution/Contributors/Deploy_Page_Locally/pt_Deploy_Page_Locally',
        'Contribution/Contributors/Contribution-Guide/pt_full_steps_pull_request',
        'Contribution/Contributors/Contribution-Guide/pt_quick_pull_request',
      ],
    },
    'Contribution/Contributors/pt_Scale-up-Your-Creation-with-Fusion',
    {
      type: 'doc',
      id: 'Top_Brand/pt_PopularPlatforms',
      label: 'Plataformas populares',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Arduino',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: 'Top_Brand/Arduino/pt_Arduino',
      },
      items: [
        'Top_Brand/Arduino/pt_Getting_Started_with_Arduino',
        {
          type: 'category',
          label: 'Shield',
          items: [
            'Top_Brand/Arduino/shield/pt_Shield',
            'Top_Brand/Arduino/shield/pt_2.8inch_TFT_Touch_Shield_v2.0',
            'Top_Brand/Arduino/shield/pt_4A_Motor_Shield',
            'Top_Brand/Arduino/shield/pt_Base_Shield_V2',
            //   'Top_Brand/Arduino/shield/pt_Bluetooth_Shield_V2',
            'Top_Brand/Arduino/shield/pt_CAN-BUS_Shield_V2.0',
            'Top_Brand/Arduino/shield/pt_Camera_Shield',
            'Top_Brand/Arduino/shield/pt_Energy_Shield',
            'Top_Brand/Arduino/shield/pt_Motor_Shield_V2.0',
            'Top_Brand/Arduino/shield/pt_Brushless_Motor_Shield_TB6605FTG',
            'Top_Brand/Arduino/shield/pt_Music_Shield_V2.2',
            'Top_Brand/Arduino/shield/pt_NFC_Shield_V2.0',
            'Top_Brand/Arduino/shield/pt_Grove-Mega_Shield',
            'Top_Brand/Arduino/shield/pt_Protoshield_Kit_for_Arduino',
            'Top_Brand/Arduino/shield/pt_RS232_Shield',
            'Top_Brand/Arduino/shield/pt_Relay_Shield_v3',
            'Top_Brand/Arduino/shield/pt_SD_Card_shield_V4.0',
            'Top_Brand/Arduino/shield/pt_Solar_Charger_Shield_V2.2',
            'Top_Brand/Arduino/shield/pt_Spartan_Edge_Accelerator_Board',
            'Top_Brand/Arduino/shield/pt_W5500_Ethernet_Shield_v1.0',
            'Top_Brand/Arduino/shield/pt_Grove_Shield_for_Arduino_Nano',
            'Top_Brand/Arduino/shield/pt_RGBW_Stripe_WireLess_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_Renbotics_ServoShield_Rev',
            'Top_Brand/Arduino/shield/pt_WireLess_Gate_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_2.7inch-Triple-Color-E-Ink-Shield-for-Arduino',
            'Top_Brand/Arduino/shield/pt_Bluetooth_Shield',
            'Top_Brand/Arduino/shield/pt_Motor_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_Motor_Shield',
            'Top_Brand/Arduino/shield/pt_NFC_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_NFC_Shield',
            'Top_Brand/Arduino/shield/pt_Energy_Monitor_Shield_V0.9b',
            'Top_Brand/Arduino/shield/pt_Ethernet_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_Ethernet_Shield_V2.0',
            'Top_Brand/Arduino/shield/pt_Ethernet_Shield',
            'Top_Brand/Arduino/shield/pt_GPRS-Shield',
            'Top_Brand/Arduino/shield/pt_GPRS_Shield_v1.0',
            'Top_Brand/Arduino/shield/pt_GPRS_Shield_V2.0',
            'Top_Brand/Arduino/shield/pt_GPRS_Shield_V3.0',
            'Top_Brand/Arduino/shield/pt_Music_Shield',
            'Top_Brand/Arduino/shield/pt_Music_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_Relay_Shield',
            'Top_Brand/Arduino/shield/pt_Relay_Shield_V1',
            'Top_Brand/Arduino/shield/pt_Relay_Shield_V2',
            'Top_Brand/Arduino/shield/pt_SD_Card_Shield',
            'Top_Brand/Arduino/shield/pt_SD_Card_Shield_V3.0',
            'Top_Brand/Arduino/shield/pt_Small_e-Paper_Shield',
            'Top_Brand/Arduino/shield/pt_Solar_Charger_Shield',
            'Top_Brand/Arduino/shield/pt_Starter_Shield_EN',
            'Top_Brand/Arduino/shield/pt_TFT_Touch_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_Wifi_Shield',
            'Top_Brand/Arduino/shield/pt_Wifi_Shield_V1.0',
            'Top_Brand/Arduino/shield/pt_Wifi_Shield_V1.1',
            'Top_Brand/Arduino/shield/pt_Wifi_Shield_V1.2',
            'Top_Brand/Arduino/shield/pt_Wifi_Shield_Fi250_V1.1',
            'Top_Brand/Arduino/shield/pt_Wifi_Shield_V2.0',
            'Top_Brand/Arduino/shield/pt_Shield_Bot_V1.1',
            'Top_Brand/Arduino/shield/pt_Shield_Bot_V1.2',
            'Top_Brand/Arduino/shield/pt_CAN-BUS_Shield_V1.2',
            'Top_Brand/Arduino/shield/pt_EL_Shield',
            'Top_Brand/Arduino/shield/pt_Seeed_BLE_Shield',
            'Top_Brand/Arduino/shield/pt_Small_e-Paper_Shield_V2',
          ],
        },
        {
          type: 'category',
          label: 'Tutoriais',
          items: [
            {
              type: 'category',
              label: 'Uso básico com Arduino',
              items: [
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Download-Arduino-and-install-Arduino_Driver',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_A_Handy_Serial_Library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_How_to_install_Arduino_Library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_How_to_use_and_write_a_library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Upload_Code',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Use_External_Editor',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_How_To_Use_Sketchbook',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Sketchbook_of_Sidekick_Advanced_Kit',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Guide_to_use_demos_downloaded_from_Seeed-s_Github',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Software-Serial',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Arduino_Software_I2C_user_guide',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Software-SPI',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Software-Static-Library',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Arduino_Common_Error',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_How-to-Choose-A-Gas-Sensor',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_A_Comparison_of_Different_Grove_Temperature_Sensors',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_GPS-Modules-Selection-Guide',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_How_to_detect_finger_touch',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Seeed_Relay_Page',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_Barometer-Selection-Guide',
                'Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/pt_How_To_Choose_The_Right_Cable',
              ],
            },
            {
              type: 'category',
              label: 'Uso avançado com Arduino',
              items: [
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_Suli',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_Seeed_Arduino_Serial',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_I2C_And_I2C_Address_of_Seeed_Product',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_ODYSSEY-X86J4105-Firmata',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_Software-SWD',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_Arduino-AWS-IOT-Bridge',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_Arduino-DAPLink',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_Flashing-Arduino-Bootloader-DAPLink',
                'Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/pt_Xadow_IO_pin_mapping',
              ],
            },
            {
              type: 'category',
              label: 'Projetos com placas Arduino',
              items: [
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_IR_Remote',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Joystick_Control_RGB_Led',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Light_Sensor_and_LED_Bar',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_LightView_201k_Digital_display_module',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_RFID_Control_LED',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Relay_Control_LED',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Sound_Sensor_And_LED_Bar',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_temperature_sensor',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_One-Blink',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_One-Double_Blink',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Two-Digital_Input',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Two-Digital_Input_v1.0b',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Three-Analog_Input_v1b',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Four-Noise_Maker',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Five-Relay_Control',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Six-LCD_Demonstration',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Seven-Temperature',
                'Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/pt_Project_Eight-Thermostat',
              ],
            },
            {
              type: 'category',
              label: 'Plataforma de compilação',
              items: [
                'Top_Brand/Arduino/Tutorials/Compiling_Platform/pt_Compiling_MicroPython_for_embedded_devices',
                'Top_Brand/Arduino/Tutorials/Compiling_Platform/pt_Software-PlatformIO',
                {
                  type: 'category',
                  label: 'Plataforma de compilação',
                  items: [
                    'Top_Brand/Arduino/Tutorials/Compiling_Platform/Codecraft_Platform_for_Arduino/pt_Guide_for_Codecraft_using_Arduino',
                    'Top_Brand/Arduino/Tutorials/Compiling_Platform/Codecraft_Platform_for_Arduino/pt_Codecraft_Grove_Compatible_List',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Kit com cursos',
          items: [
            {
              type: 'category',
              label: 'Grove Beginner Kit para Arduino',
              items: [
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/pt_Grove-Beginner-Kit-For-Arduino',
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/pt_Grove-Beginner-Kit-for-Arduino-education-pack',
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/pt_Grove-Beginner-Kit-for-Arduino-Upverter-Guide',
                'Top_Brand/Arduino/Kit_with_Courses/Grove_Beginner_Kit_for_Arduino/pt_Grove_Beginner_Kit_for_Arduino',
              ],
            },
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove_Speech_Recognizer_Kit_for_Arduino',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Sidekick_Basic_Kit_for_Arduino_V2',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove_Starter_kit_for_Arduino_101',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
            'Top_Brand/Arduino/Kit_with_Courses/pt_LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove_Indoor_Environment_Kit_for_Edison',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove_Smart_Plant_Care_Kit',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Techbox_Tricks',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove_Starter_Kit_Plus',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove_Starter_Kit_v3',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove-Creator-Kit-1',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove-Mixer_Pack_V2',
            'Top_Brand/Arduino/Kit_with_Courses/pt_Grove-Toy_Kit',
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
        id: 'Top_Brand/Raspberry_Pi/pt_Raspberry_Pi',
      },
      items: [
        {
          type: 'category',
          label: 'Placa oficial Raspberry Pi',
          items: [
            'Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/pt_Raspberry_Pi_3_Model_B',
            'Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/pt_remote_connect',
          ],
        },
        {
          type: 'category',
          label: 'Módulo oficial Raspberry Pi',
          items: [
            'Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Module/pt_Raspberry_pi_CM4_update_eeprom',
          ],
        },
        {
          type: 'category',
          label: 'Pi HAT',
          items: [
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Grove_Base_Hat_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Grove_Base_Hat_for_Raspberry_Pi_Zero',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Grove_Base_HAT',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_GrovePi_Plus',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Raspberry_Pi_Breakout_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Raspberry_Pi_Motor_Driver_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Pi_RTC-DS1307',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_High_Accuracy_Pi_RTC-DS3231',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Raspberry_Pi_R232_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Raspberry_Pi_Relay_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_four-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_eight-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_RS-485_Shield_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_Grove_AI_HAT_for_Edge_Computing',
            'Top_Brand/Raspberry_Pi/Pi_HAT/pt_two-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi',
          ],
        },
        {
          type: 'category',
          label: 'Acessórios',
          items: [
            'Top_Brand/Raspberry_Pi/Accessories/pt_Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit',
            'Top_Brand/Raspberry_Pi/Accessories/pt_Skeleton_box_for_Rasberry_Pi',
            'Top_Brand/Raspberry_Pi/Accessories/pt_Raspberry_PI_Bplus_Case',
          ],
        },
        {
          type: 'category',
          label: 'Dispositivo de refrigeração',
          items: [
            'Top_Brand/Raspberry_Pi/Cooler_Device/pt_Water_Cooling_Kit',
          ],
        },
        {
          type: 'category',
          label: 'Kit com cursos',
          items: [
            'Top_Brand/Raspberry_Pi/Kit/pt_Grove_Base_Kit_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Kit/pt_LoRa_LoRaWan_Gateway_Kit',
            'Top_Brand/Raspberry_Pi/Kit/pt_Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi',
          ],
        },
        {
          type: 'category',
          label: 'Aplicação',
          items: [
            'Top_Brand/Raspberry_Pi/Application/pt_Raspberry_Pi_as_a_NAS',
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
        id: 'Top_Brand/Micro_bit/pt_microbit_wiki_page',
      },
      items: [
        'Top_Brand/Micro_bit/pt_Grove_Inventor_Kit_for_microbit',
        'Top_Brand/Micro_bit/pt_Microsoft_MakeCode',
        {
          type: 'category',
          label: 'Placa de expansão',
          items: [
            'Top_Brand/Micro_bit/expansion_board/pt_BitWear',
            'Top_Brand/Micro_bit/expansion_board/pt_BitMaker',
            'Top_Brand/Micro_bit/expansion_board/pt_BitMaker_Lite',
            'Top_Brand/Micro_bit/expansion_board/pt_BitPlayer',
            'Top_Brand/Micro_bit/expansion_board/pt_BitCar',
          ],
        },
      ],
    },
    // 'Contribution/Home_Assistant/pt_Home_Assistant_Topic',
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
      id: 'Seeed_Elderly/pt_DiscontinuedProducts',
      label: 'Produtos descontinuados',
      className: 'sideboard_calss',
    },
    {
      type: 'category',
      label: 'Lista de produtos',
      items: [
        {
          type: 'category',
          label: 'reSpeaker',
          items: [
            //'Seeed_Elderly/reSpeaker/pt_reSpeaker_Getting_Started',
            //'Seeed_Elderly/reSpeaker/pt_ReSpeaker',
            'Seeed_Elderly/reSpeaker/pt_ReSpeaker_Product_Guide',
            {
              type: 'category',
              label: 'Aplicação',
              items: [
                'Seeed_Elderly/reSpeaker/Application/pt_ReSpeaker_Solutions',
                'Seeed_Elderly/reSpeaker/Application/pt_Google_Assistant',
                'Seeed_Elderly/reSpeaker/Application/pt_Voice_Interaction',
                'Seeed_Elderly/reSpeaker/Application/pt_ReSpeaker_Core_V2_&_Wio_Link',
              ],
            },
            {
              type: 'category',
              label: 'Placa de extensão',
              items: [
                'Seeed_Elderly/reSpeaker/Extension_Board/pt_ReSpeaker_Drive_Unit',
                //'Seeed_Elderly/reSpeaker/Extension Board/ReSpeaker_Mic_Array_v2.0',
                'Seeed_Elderly/reSpeaker/Extension_Board/pt_ReSpeaker_Mic_Array',
              ],
            },
            'Seeed_Elderly/reSpeaker/pt_ReSpeaker_4_Mic_Array_for_Raspberry_Pi',
            'Seeed_Elderly/reSpeaker/pt_ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi',
            'Seeed_Elderly/reSpeaker/pt_ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi',
            'Seeed_Elderly/reSpeaker/pt_ReSpeaker_Core',
            'Seeed_Elderly/reSpeaker/pt_ReSpeaker_Core_v2.0',
            //'Seeed_Elderly/reSpeaker/pt_ReSpeaker-USB-Mic-Array',
          ],
        },
        {
          type: 'category',
          label: 'rePhone',
          items: [
            'Seeed_Elderly/rePhone/pt_RePhone',
            'Seeed_Elderly/rePhone/pt_RePhone_Geo_Kit',
            'Seeed_Elderly/rePhone/pt_RePhone_Lumi_Kit',
            'Seeed_Elderly/rePhone/pt_RePhone_Strap_Kit_for_Pebble',
            'Seeed_Elderly/rePhone/pt_RePhone_core_2G-Atmel32u4',
            'Seeed_Elderly/rePhone/pt_Rephone_core_2G-AtmelSAMD21',
            'Seeed_Elderly/rePhone/pt_Retro_Phone_Kit',
            {
              type: 'category',
              label: 'Programar com rePhone',
              items: [
                'Seeed_Elderly/rePhone/Program_with_rePhone/pt_Arduino_IDE_for_RePhone_Kit',
                'Seeed_Elderly/rePhone/Program_with_rePhone/pt_Eclipse_IDE_for_RePhone_Kit',
                'Seeed_Elderly/rePhone/Program_with_rePhone/pt_JavaScript_for_RePhone',
                'Seeed_Elderly/rePhone/Program_with_rePhone/pt_Lua_for_RePhone',
                'Seeed_Elderly/rePhone/Program_with_rePhone/pt_RePhone_APIs-Audio',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Bee',
          items: [
            'Seeed_Elderly/Bee/pt_Mesh_Bee',
            'Seeed_Elderly/Bee/pt_RFbee_V1.1-Wireless_Arduino_compatible_node',
            'Seeed_Elderly/Bee/pt_Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products',
            'Seeed_Elderly/Bee/pt_Bees_Shield',
            'Seeed_Elderly/Bee/pt_UartSBee_V3.1',
            'Seeed_Elderly/Bee/pt_UartSBee_V4',
            'Seeed_Elderly/Bee/pt_UartSBee_v5',
            'Seeed_Elderly/Bee/pt_BLE_Bee',
            'Seeed_Elderly/Bee/pt_BLE_dual_Bee_v1.0',
            'Seeed_Elderly/Bee/pt_Bluetooth_Bee_v2.0',
            'Seeed_Elderly/Bee/pt_Bluetooth_Bee_Standalone',
            'Seeed_Elderly/Bee/pt_Bluetooth_Bee',
            'Seeed_Elderly/Bee/pt_Wifi_Bee',
            'Seeed_Elderly/Bee/pt_Wifi_Bee_v2.0',
            'Seeed_Elderly/Bee/pt_XBee_Shield',
            'Seeed_Elderly/Bee/pt_XBee_Shield_V2.0',
            'Seeed_Elderly/Bee/pt_Atom_Node',
            'Seeed_Elderly/Bee/pt_Bluetooth_V4.0_HM_11_BLE_Module',
            'Seeed_Elderly/Bee/pt_GPS_Bee_kit',
            'Seeed_Elderly/Bee/pt_Grove-XBee_Carrier',
            'Seeed_Elderly/Bee/pt_Grove-Bee_Socket',
          ],
        },
        {
          type: 'category',
          label: 'Xadow',
          items: [
            'Seeed_Elderly/Xadow/pt_Xadow_3_Aixs_Accelerometer',
            'Seeed_Elderly/Xadow/pt_Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g',
            'Seeed_Elderly/Xadow/pt_Xadow_BLE_Dual_Model_V1.0',
            'Seeed_Elderly/Xadow/pt_Xadow_BLE_Slave',
            'Seeed_Elderly/Xadow/pt_Xadow_Breakout',
            'Seeed_Elderly/Xadow/pt_Xadow_Buzzer',
            'Seeed_Elderly/Xadow/pt_Xadow_Compass',
            'Seeed_Elderly/Xadow/pt_Xadow_Edison_Kit',
            'Seeed_Elderly/Xadow/pt_Xadow_GPS',
            'Seeed_Elderly/Xadow/pt_Xadow_GPS_V2',
            'Seeed_Elderly/Xadow/pt_Xadow_Gesture_v1.0',
            'Seeed_Elderly/Xadow/pt_Xadow_Grove_Adaptor',
            'Seeed_Elderly/Xadow/pt_Xadow_IMU_6DOF',
            'Seeed_Elderly/Xadow/pt_Xadow_IMU_9DOF',
            'Seeed_Elderly/Xadow/pt_Xadow_IMU_10DOF',
            'Seeed_Elderly/Xadow/pt_Xadow_LED_5x7',
            'Seeed_Elderly/Xadow/pt_Xadow_LED_5_multiply_7_v1.0',
            'Seeed_Elderly/Xadow/pt_Xadow_M0',
            'Seeed_Elderly/Xadow/pt_Xadow_Main_Board',
            'Seeed_Elderly/Xadow/pt_Xadow_Multichannel_Gas_Sensor',
            'Seeed_Elderly/Xadow/pt_Xado_OLED_128multiply64',
            'Seeed_Elderly/Xadow/pt_Xadow_RGB_OLED_96multiply64',
            'Seeed_Elderly/Xadow/pt_Xadow_RTC',
            'Seeed_Elderly/Xadow/pt_Xadow_Storage',
            'Seeed_Elderly/Xadow/pt_Xadow_UV_Sensor',
            'Seeed_Elderly/Xadow/pt_Xadow_Vibrator_Motor',
            'Seeed_Elderly/Xadow/pt_Xadow_1.54_inch_Touchscreen',
            'Seeed_Elderly/Xadow/pt_Xadow_Audio',
            'Seeed_Elderly/Xadow/pt_Xadow_BLE',
            'Seeed_Elderly/Xadow/pt_Xadow_Barometer',
            'Seeed_Elderly/Xadow/pt_Xadow_Barometer_BMP180',
            'Seeed_Elderly/Xadow/pt_Xadow_Basic_Sensors',
            'Seeed_Elderly/Xadow/pt_Xadow_Duino',
            'Seeed_Elderly/Xadow/pt_Xadow_GSM_Breakout',
            'Seeed_Elderly/Xadow/pt_Xadow_GSMPlusBLE',
            'Seeed_Elderly/Xadow/pt_Xadow_Metal_Frame',
            'Seeed_Elderly/Xadow/pt_Xadow_NFC',
            'Seeed_Elderly/Xadow/pt_Xadow_NFC_tag',
            'Seeed_Elderly/Xadow/pt_Xadow_NFC_v2',
            'Seeed_Elderly/Xadow/pt_Xadow_Pebble_Time_Adapter',
            'Seeed_Elderly/Xadow/pt_Xadow_Q_Touch_Sensor',
            'Seeed_Elderly/Xadow/pt_Xadow_Tutorial_Acceleration_Detector',
            'Seeed_Elderly/Xadow/pt_Xadow_Tutorial_Communicate_via_BLE',
            'Seeed_Elderly/Xadow/pt_Xadow_Tutorial_Shaking_Shaking',
            'Seeed_Elderly/Xadow/pt_Xadow_Wearable_Kit_For_Edison',
            'Seeed_Elderly/Xadow/pt_Xadow_Motor_Driver',
          ],
        },
        {
          type: 'category',
          label: 'Rainbowduino',
          items: [
            'Seeed_Elderly/Rainbowduino/pt_Rainbowduino_v3.0',
            'Seeed_Elderly/Rainbowduino/pt_Rainbowduino_Extension_Board_v0.9b',
            'Seeed_Elderly/Rainbowduino/pt_Rainbow_Cube_Kit_Acrylic_Harness',
            'Seeed_Elderly/Rainbowduino/pt_Rainbowduino_LED_driver_platform-ATmega328',
            'Seeed_Elderly/Rainbowduino/pt_Rainbowduino',
          ],
        },
        {
          type: 'category',
          label: 'reComputer Alpha',
          items: [
            'Seeed_Elderly/reComputer_Alpha/pt_How-to-build-a-home-soft-router-and-NAS-With-ReComputer',
          ],
        },
        {
          type: 'category',
          label: 'Air Serial',
          items: [
            'Seeed_Elderly/Air_Serial/pt_Air602_WiFi_Development_Board',
            'Seeed_Elderly/Air_Serial/pt_Air602_Firmware_Programming_Manual',
          ],
        },
        {
          type: 'category',
          label: 'NPi-i',
          items: [
            'Seeed_Elderly/NPi-i/pt_NPi-i.MX6ULL-Dev-Board-Linux-SBC'
          ],
        },
        {
          type: 'category',
          label: 'W600',
          items: [
            'Seeed_Elderly/W600/pt_W600_Module'
          ],
        },
        {
          type: 'category',
          label: 'Artik',
          items: [
            'Seeed_Elderly/Artik/pt_Artik',
            'Seeed_Elderly/Artik/pt_Eagleye_530s',
          ],
        },
        {
          type: 'category',
          label: 'Outros',
          items: [
            'Seeed_Elderly/Discrete_Product/pt_ESP32_Breakout_Kit',
            'Seeed_Elderly/Discrete_Product/pt_UartSB_Frame',
            'Seeed_Elderly/Discrete_Product/pt_IoT_Fast_Prototyping_Kit_S5D9',
            'Seeed_Elderly/Discrete_Product/pt_Grove_IoT_Developer_Kit-Microsoft_Azure_Edition',
            'Seeed_Elderly/Discrete_Product/pt_Atmel_AVRISP_STK500_USB_ISP_Programmer',
            'Seeed_Elderly/Discrete_Product/pt_AT_Command_Tester',
            'Seeed_Elderly/Discrete_Product/pt_AT_Command_Tester_Application',
            'Seeed_Elderly/Discrete_Product/pt_Tiny_BLE',
            'Seeed_Elderly/Discrete_Product/pt_Edison_4WD_Auto_Robotic_Platform_2.0',
            'Seeed_Elderly/Discrete_Product/pt_Edison_4WD_Auto_Robotic_Platform',
            'Seeed_Elderly/Discrete_Product/pt_Mini_GSM_GPRS_GPS_Breakout_SIM808',
            'Seeed_Elderly/Discrete_Product/pt_Nose_LED_Kit',
            'Seeed_Elderly/Discrete_Product/pt_Serial_port_bluetooth_module_Master-Slave',
            'Seeed_Elderly/Discrete_Product/pt_Sidekick_Advanced_Kit',
            'Seeed_Elderly/Discrete_Product/pt_Stepper_Motor_Driver',
            'Seeed_Elderly/Discrete_Product/pt_Stepper_Motor_Driver_v2.3',
            'Seeed_Elderly/Discrete_Product/pt_4WD_Driver_Platform_V1.0',
            'Seeed_Elderly/Discrete_Product/pt_4WD_Mecanum_Wheel_Robot_Kit_Series',
            'Seeed_Elderly/Discrete_Product/pt_Hercules_Dual_15A_6-20V_Motor_Controller',
            'Seeed_Elderly/Discrete_Product/pt_Basic_Fastener_Kit',
            'Seeed_Elderly/Discrete_Product/pt_Sidekick_Basic_Kit_for_TI_LaunchPad',
            'Seeed_Elderly/Discrete_Product/pt_Grove_Maker_Kit_for_Intel_Joule',
            'Seeed_Elderly/Discrete_Product/pt_Grove_Shield_for_Intel_Joule',
            'Seeed_Elderly/Discrete_Product/pt_Grove_Base_BoosterPack',
            'Seeed_Elderly/Discrete_Product/pt_Grove_Base_Shield_for_Photon',
            'Seeed_Elderly/Discrete_Product/pt_Tricycle_Bot',
            'Seeed_Elderly/Discrete_Product/pt_mbed_Shield',
            'Seeed_Elderly/Discrete_Product/pt_BLE_Carbon',
            'Seeed_Elderly/Discrete_Product/pt_BLE_Micro',
            'Seeed_Elderly/Discrete_Product/pt_BLE_Nitrogen',
            'Seeed_Elderly/Discrete_Product/pt_Fubarino_SD',
            'Seeed_Elderly/Discrete_Product/pt_LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout',
            'Seeed_Elderly/Discrete_Product/pt_Matrix_Clock',
            'Seeed_Elderly/Discrete_Product/pt_Bugduino',
            'Seeed_Elderly/Discrete_Product/pt_CUI32Stem',
            'Seeed_Elderly/Discrete_Product/pt_Danger_Shield_Complete_Kits',
            'Seeed_Elderly/Discrete_Product/pt_FST-01',
            'Seeed_Elderly/Discrete_Product/pt_Grove-Base_Shield_for_IOIO-OTG',
          ],
        },
      ],
    },
    'pt_About',
    'pt_License',
  ],
};

module.exports = sidebars;
