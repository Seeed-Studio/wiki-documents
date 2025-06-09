// 语言切换器 - 诊断和修复版本
// 生成时间: 2025-06-09T01:19:23.894Z
// 多语言页面: 1864 个

(function() {
  'use strict';

  const DEBUG = true; // 默认开启调试，帮助诊断问题
  
  function log(...args) {
    if (DEBUG) {
      console.log('🔄 [诊断版]', new Date().toISOString().slice(11, 23), ...args);
    }
  }

  // 语言配置
  const languages = {
    en: { label: 'English', flag: '🇺🇸', prefix: '' },
    cn: { label: '简体中文', flag: '🇨🇳', prefix: '/cn' },
    ja: { label: '日本語', flag: '🇯🇵', prefix: '/ja' },
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' }
  };

  // 内嵌的语言映射数据
  const languageMapping = {
  "/Cloud": [
    "en",
    "ja"
  ],
  "/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP": [
    "en",
    "ja"
  ],
  "/xiao_esp32c3_sensecapai": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/API_pricing": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/Appendix/List_of_Device_Status_IDs": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/Appendix/List_of_Error_Code": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/Appendix/List_of_Measurement_IDs": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/Appendix/List_of_Sensor_Types": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Registration": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Dashboard/Hotspot_Registration": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/APP_settings": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/Deeplink_Helium_Wallet": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/Download_APP": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/FAQ": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/forget-wifi-profile": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Onboarding": [
    "en",
    "ja"
  ],
  "/SenseCAP_Hotspot_APP": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/Remote Reboot": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/Update_antenna": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Hotspot_APP/Update_Hotspot_Location": [
    "en",
    "ja"
  ],
  "/sensecap_mate_app_event": [
    "en",
    "ja"
  ],
  "/sensecraft_app": [
    "en",
    "ja"
  ],
  "/sensecraft_cloud_fee": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management": [
    "en",
    "ja"
  ],
  "/Cloud_Chain/SenseCAP_Portal/QuickStart": [
    "en",
    "ja"
  ],
  "/connect_vision_ai_v2_to_ha": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_workspace": [
    "en",
    "ja"
  ],
  "/nvidia_jetson_workspace": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_jetson": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_output_grove_visionai": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_output_gpio_xiao": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_output_libraries_xiao": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_output_mqtt_xiao": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_sscmacore_library": [
    "en",
    "ja"
  ],
  "/sensecraft_deploy_model_to_jetson": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_pretrained_models_for_grove_visionai_v2": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_pretrained_models_for_watcher": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_pretrained_models_for_xiao": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_main": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_overview": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_training_classification": [
    "en",
    "ja"
  ],
  "/sensecraft_ai_training_object_detection": [
    "en",
    "ja"
  ],
  "/xiao_esp32s3_workspace": [
    "en",
    "ja"
  ],
  "/Contribution-Guide": [
    "en",
    "ja"
  ],
  "/full_steps_pull_request": [
    "en",
    "ja"
  ],
  "/quick_pull_request": [
    "en",
    "ja"
  ],
  "/Deploy_Page_Locally": [
    "en",
    "ja"
  ],
  "/Scale-up-Your-Creation-with-Fusion": [
    "en",
    "ja"
  ],
  "/Contributor": [
    "en",
    "ja"
  ],
  "/BeagleBone_Solutions": [
    "en",
    "ja"
  ],
  "/respeaker_lite_beagley-ai_chatgpt": [
    "en",
    "ja"
  ],
  "/BeagleBone-Green-Gateway": [
    "en",
    "ja"
  ],
  "/BeagleBone": [
    "en",
    "ja"
  ],
  "/BeagleBone_Blue": [
    "en",
    "ja"
  ],
  "/Beaglebone_Case": [
    "en",
    "ja"
  ],
  "/BeagleBone_Green": [
    "en",
    "ja"
  ],
  "/BeagleBone_Green_Wireless": [
    "en",
    "ja"
  ],
  "/BeagleBone_Green_HDMI_Cape": [
    "en",
    "ja"
  ],
  "/Grove_Base_Cape_for_BeagleBone_v2": [
    "en",
    "ja"
  ],
  "/Grove_Cape_for_BeagleBone_Series": [
    "en",
    "ja"
  ],
  "/Motor_Bridge_Cape_v1.0": [
    "en",
    "ja"
  ],
  "/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch": [
    "en",
    "ja"
  ],
  "/Skeleton_box_for_Beaglebone": [
    "en",
    "ja"
  ],
  "/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "en",
    "ja"
  ],
  "/Grove_Starter_Kit_for_BeagleBone_Green": [
    "en",
    "ja"
  ],
  "/Edgebox-ESP-100-Arduino": [
    "en",
    "ja"
  ],
  "/Edge_series_Intro": [
    "en",
    "ja"
  ],
  "/ai_nvr_with_jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DashCamNet-with-Jetson-Xavier-NX-Multicamera": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/deploy_frigate_on_jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_to_Train_and_Deploy_YOLOv8_on_reComputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Jetson-Nano-MaskCam": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Series_Projects": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Series_Tutorials_Exercise": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Security_Scan": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Traffic-Management-DeepStream-SDK": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/YOLOv5-Object-Detection-Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/YOLOv8-DeepStream-TRT-Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/YOLOv8-TRT-Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/train_and_deploy_a_custom_classification_model_with_yolov8": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/alwaysAI-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Cochl.Sense-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/CVEDIA-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DeciAI-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/gapi_getting_started-with_jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/HardHat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Jetson-AI-developer-tools": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/jetson-docker-getting-started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Lumeo-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/No-code-Edge-AI-Tool": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_nvstreamer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Series_Resource": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Roboflow-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/vnc_for_recomputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/deploy_deepseek_on_jetson_with_mlc": [
    "cn",
    "en",
    "ja"
  ],
  "/local_ai_ssistant": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Local_Voice_Chatbot": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Finetune_LLM_on_Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Generative_AI_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_to_run_local_llm_text_to_image_on_reComputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/run_vlm_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/run_zero_shot_detection_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Local_RAG_based_on_Jetson_with_LlamaIndex": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/deploy_deepseek_on_jetson": [
    "cn",
    "en",
    "ja"
  ],
  "/Real Time Subtitle Recoder on Nvidia Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Whisper_on_Jetson_for_Real_Time_Speech_to_Text": [
    "en",
    "es"
  ],
  "/Allxon-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/neqto_engine_for_linux_recomputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Scailable-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Update-Jetson-Linux-OTA-Using-Allxon": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/speech_vlm": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_A203_Flash_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_A205_Flash_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_A603_Flash_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_A607_Flash_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_A608_Flash_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_J1010_J101_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_J2021_J202_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/J401_carrierboard_Hardware_Interfaces_Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_J4012_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/j501_carrier_board_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reserver_j501_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/j401_mini_carrierboard_hardware_interfaces_usage": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_mini_j401_getting_started": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_jetson_robotics_j401_getting_started": [
    "cn",
    "en",
    "ja"
  ],
  "/create_backup_and_restore_on_recomputer": [
    "cn",
    "en",
    "ja"
  ],
  "/differences_of_l4t_between_seeed_and_nvidia": [
    "cn",
    "en",
    "ja"
  ],
  "/get_the_system_log_of_recomputer_j30_and_j40": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/upgrade_software_packages_for_jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Jetson_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/updating_jetpack_with_ota": [
    "cn",
    "en",
    "ja"
  ],
  "/usb_timeout_during_flash": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/update_orin_nano_developer_kit_to_super_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Jetson-Mate": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Jetson_Xavier_AGX_H01_Driver_Installation": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mini_AI_Computer_T906": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_A203E_Flash_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_A205E_Flash_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Series_GPIO_Grove": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/rtl8822ce_wireless_module_for_jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/NVIDIA_Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Industrial_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Industrial_J20_Hardware_Interfaces_Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/J1010_Boot_From_SD_Card": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/J101_Enable_SD_Card": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_J1010_with_Jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_GPIO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Memory_Expansion": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Series_Hardware_Layout": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Series_Initiation": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_J1020v2_with_Jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_J1020_A206_Flash_JetPack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_Jetson_Series_Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_j20_with_jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_J30_40_with_Jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Use_Infineon_Wifi_Module_on_reComputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_j401b_getting_start": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_j401b_interfaces_usage": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_jetson_mini_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_jetson_mini_hardware_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_jetson_super_getting_started": [
    "cn",
    "en",
    "ja"
  ],
  "/reServer_Industrial_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reserver_industrial_hardware_interface_usage": [
    "cn",
    "en",
    "ja"
  ],
  "/reServer_J2032_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reServer_J2032_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY_FAQ": [
    "en",
    "ja"
  ],
  "/ODYSSEY_Getting_Started": [
    "en",
    "ja"
  ],
  "/ODYSSEY_Intro": [
    "en",
    "ja"
  ],
  "/ODYSSEY-STM32MP135D": [
    "en",
    "ja"
  ],
  "/ODYSSEY-STM32MP157C": [
    "en",
    "ja"
  ],
  "/SEEED-SOM-STM32MP157C": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-AzureIOT": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Frigate": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Intel-OpenVINO": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-NCS2": [
    "en",
    "ja"
  ],
  "/Connect-Grove-to-Home-Assistant-ESPHome": [
    "en",
    "ja"
  ],
  "/ODYSSEY-Home-Assistant-Customize": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86-Home-Assistant": [
    "en",
    "ja"
  ],
  "/Mender-Client-ODYSSEY-X86": [
    "en",
    "ja"
  ],
  "/Mender-Server-ODYSSEY-X86": [
    "en",
    "ja"
  ],
  "/Coral-Mini-PCIe-Accelerator-x86": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Accessories": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-GPIO": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-LTE-Module": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105": [
    "en",
    "ja"
  ],
  "/BalenaOS-X86-Getting-Started": [
    "en",
    "ja"
  ],
  "/Jellyfin-on-Docker-Ubuntu-X86": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86-OPNsense": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86-TrueNAS": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-Android": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-FreeNAS": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-openwrt": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-OS": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-pfSense": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Updating-Firmware": [
    "en",
    "ja"
  ],
  "/Quantum-Mini-Linux-Development-Kit": [
    "cn",
    "en",
    "ja"
  ],
  "/reComputer_r1000_balena": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/build_balenaOS_for_reComputer_r1000": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_aws": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM_AWS_first": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM_Azure_IoT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_install_fin": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fin_floor_gaphic": [
    "cn",
    "en",
    "ja"
  ],
  "/reComputer_r1000_fin_logic_builder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fin_equip_gaphic": [
    "cn",
    "en",
    "ja"
  ],
  "/reComputer_r1000_fin_site_gaphic": [
    "cn",
    "en",
    "ja"
  ],
  "/reComputer_r1000_fin_top_level_gaphic": [
    "cn",
    "en",
    "ja"
  ],
  "/reComputer_r1000_fin_modbus_tcp_and_rtu": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fuxa_achieve_scada": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fuxa_modbus_rtu_and_tcp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fuxa_mqtt_client": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fuxa_opc_ua": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fuxa_web_api": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM_intro_FUXA": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_home_automation": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_home_assistant_modbus": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-Home-Assistant-Customize": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_Home_Assistant": [
    "cn",
    "en",
    "ja"
  ],
  "/Edgebox-Rpi-200_N3uron_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edgebox_rpi_200_n3uron_bacnet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edgebox_rpi_200_N3uron_modbus_mqtt_aws": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edgebox-rpi-200-n3uron": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_n3uron_aws": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_n3uron_bacnet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_n3uron": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_n3uron_modbus_mqtt_aws": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminalDM_N3uron_Get_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminalDM_N3uron_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminalDM_N3uron_Historian": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminalDM_N3uron_modbus_mqtt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edgebox_rpi_200_grafana": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edge_box_rpi_200_node_red_bacnet_tcp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edge-Box-Getting-Started-with-Node-Red": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edge_box_rpi_200_node_red_influxdb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edge_box_rpi_200_node_red_modbus_rs485": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edge_box_rpi_200_node_red_modbus_tcp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edge-Box-Node-Red-MQTT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/neqto_engine_for_linux_reTerminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_getting_started_node_red": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_node_red_influxdb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_nodered_mqtt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_grafana": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_node_red_modbus_tcp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_nodered_opcua_server": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_nodered_s7": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_node_red_bacnet_ip": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM-Getting-Started-with-Node-Red": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal_dm_rpi_200_node_red_bacnet_tcp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM-Node-Red-canbus": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal_dm_grafana": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal_dm_200_node_red_influxdb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal_dm_node_red_modbus_tcp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM-Node-Red-mqtt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM-Node-Red-RS485": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edgebox-rpi-200-ignition-edge": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mender-Client-reTerminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_flow_fuse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_install_codesys": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_thingsboard_ce": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_thingsboard_dashboard": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_use_modbus_rtu_with_codesys": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_use_ups": [
    "en",
    "ja"
  ],
  "/reTerminal-DM-Getting-Started-with-Ignition-Edge": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM-Ignition-Edge-Panel-Builder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal-dm-sensecraft-edge-os-intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminalDM_Introduction_Jedi_MachineChat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-build-UI-using-Electron": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-build-UI-using-Flutter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-build-UI-using-LVGL": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-build-UI-using-Qt-for-Python": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/weather-dashboard-with-Grafana-reTerminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/clip_application_on_rpi5_with_ai_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/convert_model_to_edge_tpu_tflite_format_for_google_coral": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/frigate_nvr_with_raspberrypi_5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/install_m2_coral_to_rpi5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_DM_Face-tracking": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_DM_Color_detection": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_DM_Face_detection": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_DM_Object_detection": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_DM_opencv": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_DM_Shape_detection": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/pose_based_light_control_with_nodered_and_rpi_with_aikit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM-edgeimpulse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal-DM-Frigate": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-DM-Yolo5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal_frigate": [
    "cn",
    "en",
    "ja"
  ],
  "/reTerminal_ML_Edgeimpulse": [
    "cn",
    "en",
    "ja"
  ],
  "/reTerminal_ML_MediaPipe": [
    "cn",
    "en",
    "ja"
  ],
  "/reTerminal_ML_TFLite": [
    "cn",
    "en",
    "ja"
  ],
  "/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/deploy_deepseek_on_raspberry_pi_ai_box": [
    "cn",
    "en",
    "ja"
  ],
  "/distributed_inference_of_deepseek_model_on_raspberrypi": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_ai_industrial_r2000_flash_os": [
    "en",
    "ja"
  ],
  "/recomputer_ai_industrial_r2135_getting_start": [
    "en",
    "ja"
  ],
  "/r2000_series_getting_start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edgebox-rpi-200-AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edgebox-rpi-200-balena-OS-setup": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edgebox-rpi-200-codesys": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edge_Box_introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edge_Box_intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/NEQTO_Engine_for_Linux_EdgeBox-RPI-200": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/EdgeBox-RPi-200-boot-from-external-media": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/EdgeBox-rpi-200-with-LoRaWAN-module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_R1000_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_flash_OS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_use_rs485_modbus_rtu": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_v1_1_description": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_use_bacnet_mstp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1000_warranty": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1100_intro": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_r1100_assembly_guide": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_r1100_configure_system": [
    "cn",
    "en",
    "ja"
  ],
  "/recomputer_r1100_flash_os": [
    "cn",
    "en",
    "ja"
  ],
  "/reTerminalBridge": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_Mount_Options": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-Buildroot-SDK": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-Yocto": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Streampi_OBS_On_reTerminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-new_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-hardware-interfaces-usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-piCam": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal-dm-flash-OS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal-dm-hardware-guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal-dm-warranty": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal-dm": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal-dm_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/raspberry_pi_5_uses_pcie_hat_dual_hat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/raspberry-pi-devices": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_model_conversion": [
    "en",
    "ja"
  ],
  "/recamera_on_device_models": [
    "en",
    "ja"
  ],
  "/recamera_network_connection": [
    "en",
    "ja"
  ],
  "/recamera_hardware_and_specs": [
    "en",
    "ja"
  ],
  "/recamera_getting_started": [
    "cn",
    "en",
    "ja"
  ],
  "/recamera_warranty": [
    "en",
    "ja"
  ],
  "/recamera_gimbal_getting_started": [
    "en",
    "ja"
  ],
  "/gimbal_development_c": [
    "en",
    "ja"
  ],
  "/recamera_gimbal_node_red": [
    "en",
    "ja"
  ],
  "/recamera_gimbal_hardware_and_specs": [
    "en",
    "ja"
  ],
  "/recamera_pid_adjustment": [
    "en",
    "ja"
  ],
  "/recamera_develop_with_c_cpp": [
    "en",
    "ja"
  ],
  "/recamera_develop_with_node-red": [
    "cn",
    "en",
    "ja"
  ],
  "/recamera_linux_fundamentals": [
    "en",
    "ja"
  ],
  "/recamera_os_structure": [
    "en",
    "ja"
  ],
  "/recamera_os_version_control": [
    "en",
    "ja"
  ],
  "/reServer-Getting-Started": [
    "en",
    "ja"
  ],
  "/reServer-Update-BIOS-Install-Drivers": [
    "en",
    "ja"
  ],
  "/Edge_Computing": [
    "en",
    "ja"
  ],
  "/robotics_page": [
    "cn",
    "en",
    "ja"
  ],
  "/Getting_Started": [
    "cn",
    "en",
    "ja"
  ],
  "/License": [
    "en",
    "ja"
  ],
  "/LoRa-E5_STM32WLE5JC_Module": [
    "cn",
    "en",
    "ja"
  ],
  "/LoRa_E5_Dev_Board": [
    "cn",
    "en",
    "ja"
  ],
  "/LoRa_E5_mini": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-WM1110_Dev_Kit_Hardware_Overview": [
    "en",
    "ja"
  ],
  "/Get_Started_with_Wio-WM1110_Dev_Kit": [
    "en",
    "ja"
  ],
  "/Wio-WM1110_Dev_Kit/Introduction": [
    "en",
    "ja"
  ],
  "/wio_sx1262": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide": [
    "cn",
    "en",
    "ja"
  ],
  "/4_layer_sandwich_for_meshtastic": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_for_meshtastic": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_sx1262_with_xiao_esp32s3_kit": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_LNS_Chirpstack": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_LNS_TTN": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_for_lora_sensor_node": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_for_single_channel_gateway": [
    "cn",
    "en",
    "ja"
  ],
  "/change_antenna_path": [
    "en",
    "ja"
  ],
  "/configure_param_for_wio_tracker": [
    "en",
    "ja"
  ],
  "/wio_tracker_home_assistant": [
    "en",
    "ja"
  ],
  "/connect_wio_tracker_to_TTN": [
    "en",
    "ja"
  ],
  "/development_tutorial_for_Wio-trakcer": [
    "en",
    "ja"
  ],
  "/setup_toolchain_for_wio_tracker": [
    "en",
    "ja"
  ],
  "/wio_tracker_dual_stack": [
    "en",
    "ja"
  ],
  "/Get_Started_with_Wio-Trakcer_1110": [
    "en",
    "ja"
  ],
  "/Wio-Tracker_Introduction": [
    "en",
    "ja"
  ],
  "/connect_wio_tracker_to_locator": [
    "en",
    "ja"
  ],
  "/WM1302_module": [
    "cn",
    "en",
    "ja"
  ],
  "/WM1302_Pi_HAT": [
    "cn",
    "en",
    "ja"
  ],
  "/meshtastic_introduction": [
    "cn",
    "en",
    "ja"
  ],
  "/sensecap_indicator_meshtastic": [
    "cn",
    "en",
    "ja"
  ],
  "/get_started_with_meshtastic_solar_node": [
    "en",
    "ja"
  ],
  "/meshtastic_solar_node": [
    "cn",
    "en",
    "ja"
  ],
  "/sensecap_t1000_e": [
    "cn",
    "en",
    "ja"
  ],
  "/t1000_e_intro": [
    "cn",
    "en",
    "ja"
  ],
  "/flash_meshtastic_kit": [
    "en",
    "ja"
  ],
  "/meshtastic_kit_wio_tracker_1110": [
    "en",
    "ja"
  ],
  "/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic": [
    "en",
    "ja"
  ],
  "/xiao_nrf52840&_wio_SX1262_kit_for_meshtastic": [
    "en",
    "ja"
  ],
  "/4g_lte_hotspot_on_raspberry_pi_os": [
    "en",
    "ja"
  ],
  "/raspberry_pi_4g_lte_hat_mbim": [
    "en",
    "ja"
  ],
  "/4g_lte_hat_and_raspberry_pi_router_with_openwrt": [
    "en",
    "ja"
  ],
  "/raspberry_pi_4g_lte_hat_qmi": [
    "en",
    "ja"
  ],
  "/raspberry_pi_4g_lte_hat_rndis": [
    "en",
    "ja"
  ],
  "/ftp_with_raspberry_pi_4g_lte_hat": [
    "en",
    "ja"
  ],
  "/raspberry_pi_4g_hat_gnss_functionlities": [
    "en",
    "ja"
  ],
  "/raspberry_pi_4g_hat_ecm_mobile_internet": [
    "en",
    "ja"
  ],
  "/mqtt_raspberry_pi_4g_lte_hat": [
    "en",
    "ja"
  ],
  "/send_receive_sms_raspberry_pi_4g_lte_hat": [
    "en",
    "ja"
  ],
  "/tcp_ip_raspberry_pi_4g_lte_hat": [
    "en",
    "ja"
  ],
  "/getting_started_raspberry_pi_4g_lte_hat": [
    "en",
    "ja"
  ],
  "/Mender-Client-dual-GbE-CM4": [
    "en",
    "ja"
  ],
  "/OpenWrt-Getting-Started": [
    "en",
    "ja"
  ],
  "/OpenWrt-Plex-Media-Server-on-Docker": [
    "en",
    "ja"
  ],
  "/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4": [
    "en",
    "ja"
  ],
  "/FAQs_For_openWrt": [
    "en",
    "ja"
  ],
  "/Raspberry-OpenWrt-Getting-Started": [
    "en",
    "ja"
  ],
  "/reRouter_Intro": [
    "en",
    "ja"
  ],
  "/H28K-install-system": [
    "en",
    "ja"
  ],
  "/H28K_Datasheet": [
    "en",
    "ja"
  ],
  "/h68kv2_datasheet": [
    "en",
    "ja"
  ],
  "/H68KV2_install_system": [
    "en",
    "ja"
  ],
  "/grocy-bookstack-linkstar": [
    "en",
    "ja"
  ],
  "/h68k-ha-esphome": [
    "en",
    "ja"
  ],
  "/plex_media_server": [
    "en",
    "ja"
  ],
  "/wordpress_linkstar": [
    "en",
    "ja"
  ],
  "/linkstar-install-system": [
    "en",
    "ja"
  ],
  "/Linkstar_Datasheet": [
    "en",
    "ja"
  ],
  "/Linkstar_Intro": [
    "en",
    "ja"
  ],
  "/Rockchip_network_solutions": [
    "en",
    "ja"
  ],
  "/IoT-into-the-wild-contest": [
    "en",
    "ja"
  ],
  "/K1111-Quick-Start-Guide": [
    "en",
    "ja"
  ],
  "/K1111-Edge-Impulse": [
    "en",
    "ja"
  ],
  "/Vision_AI_with_Customizable_Models": [
    "en",
    "ja"
  ],
  "/K1100-quickstart": [
    "en",
    "ja"
  ],
  "/Connect_AWS_via_helium": [
    "en",
    "ja"
  ],
  "/Helium-Introduction": [
    "en",
    "ja"
  ],
  "/Configuring-Web-APP-Visualization": [
    "en",
    "ja"
  ],
  "/Connecting-to-Helium": [
    "en",
    "ja"
  ],
  "/Integrate-into-Azure-IoT-Hub": [
    "en",
    "ja"
  ],
  "/Integrate_into_Google_Sheets_via_Helium": [
    "en",
    "ja"
  ],
  "/K1100_sensecap_node-red": [
    "en",
    "ja"
  ],
  "/K1100_SenseCAP_to_Azure_IoT_Central": [
    "en",
    "ja"
  ],
  "/K1100_SenseCAP_to_datacake": [
    "en",
    "ja"
  ],
  "/K1100_SenseCAP_to_grafana": [
    "en",
    "ja"
  ],
  "/K1100_SenseCAP_to_influxdb": [
    "en",
    "ja"
  ],
  "/K1100_SenseCAP_to_PowerBI": [
    "en",
    "ja"
  ],
  "/K1100_SenseCAP_to_twilio": [
    "en",
    "ja"
  ],
  "/K1100-IMU-Sensor-Grove-LoRa-E5": [
    "en",
    "ja"
  ],
  "/K1100-Light-Sensor-Grove-LoRa-E5": [
    "en",
    "ja"
  ],
  "/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5": [
    "en",
    "ja"
  ],
  "/K1100-Temp-Humi-Sensor-Grove-LoRa-E5": [
    "en",
    "ja"
  ],
  "/K1100-Vision-AI-Module-Grove-LoRa-E5": [
    "en",
    "ja"
  ],
  "/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5": [
    "en",
    "ja"
  ],
  "/Connecting-to-TTN": [
    "en",
    "ja"
  ],
  "/TTN-Introduction": [
    "en",
    "ja"
  ],
  "/SenseCAP_K1100_Intro": [
    "en",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Azure-IoT-Central": [
    "en",
    "ja"
  ],
  "/Develop-in-Microsoft-Azure-IoT-Central": [
    "en",
    "ja"
  ],
  "/K1100_Azure_to_PowerBI": [
    "en",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Google-Cloud": [
    "en",
    "ja"
  ],
  "/Getting_started_with_Ubidots": [
    "en",
    "ja"
  ],
  "/Quick-Start-to-using-Blynk": [
    "en",
    "ja"
  ],
  "/Wio-Terminal-Advanced-WiFi": [
    "en",
    "ja"
  ],
  "/platformio_wio_e5": [
    "en",
    "ja"
  ],
  "/M2_Kit_Getting_Started": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/Troubleshooting": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/M2_Local_Console": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_Gateway_Intro": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Local_Console": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Quick_Start": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Quick_Start": [
    "en",
    "ja"
  ],
  "/flash_opensource_firmware_to_m2_gateway": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Introduction": [
    "en",
    "ja"
  ],
  "/SenseCAP_m2_LNS_config": [
    "en",
    "ja"
  ],
  "/quick_start_with_M2_MP": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview": [
    "en",
    "ja"
  ],
  "/traffic_saving_config": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview": [
    "en",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start": [
    "en",
    "ja"
  ],
  "/The-Things-Indoor-Gateway": [
    "en",
    "ja"
  ],
  "/getting_started_with_wifi_halow_mini_pcie_module": [
    "en",
    "ja"
  ],
  "/getting_started_with_wifi_halow_module_for_xiao": [
    "en",
    "ja"
  ],
  "/Network": [
    "en",
    "ja"
  ],
  "/myactuator_series": [
    "cn",
    "en",
    "ja"
  ],
  "/lerobot_lekiwi": [
    "cn",
    "en",
    "ja"
  ],
  "/lerobot_so100m": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/lerobot_so100m_isaacsim": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/csi_camera_on_ros": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/orbbec_depth_camera_on_ros": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/a_loam": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mid360": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/robosense_lidar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/install_isaaclab": [
    "cn",
    "en",
    "ja"
  ],
  "/installing_ros1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/install_isaacros": [
    "cn",
    "en",
    "ja"
  ],
  "/install_ros2_humble": [
    "cn",
    "en",
    "ja"
  ],
  "/isaac_ros_apriltag": [
    "cn",
    "en",
    "ja"
  ],
  "/isaac_ros_visual_slam": [
    "cn",
    "en",
    "ja"
  ],
  "/Air602_Firmware_Programming_Manual": [
    "en",
    "ja"
  ],
  "/Air602_WiFi_Development_Board": [
    "en",
    "ja"
  ],
  "/Artik": [
    "en",
    "ja"
  ],
  "/Eagleye_530s": [
    "en",
    "ja"
  ],
  "/Atom_Node": [
    "en",
    "ja"
  ],
  "/Bees_Shield": [
    "en",
    "ja"
  ],
  "/BLE_Bee": [
    "en",
    "ja"
  ],
  "/BLE_dual_Bee_v1.0": [
    "en",
    "ja"
  ],
  "/Bluetooth_Bee": [
    "en",
    "ja"
  ],
  "/Bluetooth_Bee_Standalone": [
    "en",
    "ja"
  ],
  "/Bluetooth_Bee_v2.0": [
    "en",
    "ja"
  ],
  "/Bluetooth_V4.0_HM_11_BLE_Module": [
    "en",
    "ja"
  ],
  "/GPS_Bee_kit": [
    "en",
    "ja"
  ],
  "/Grove-Bee_Socket": [
    "en",
    "ja"
  ],
  "/Grove-XBee_Carrier": [
    "en",
    "ja"
  ],
  "/Mesh_Bee": [
    "en",
    "ja"
  ],
  "/RFbee_V1.1-Wireless_Arduino_compatible_node": [
    "en",
    "ja"
  ],
  "/UartSBee_V3.1": [
    "en",
    "ja"
  ],
  "/UartSBee_V4": [
    "en",
    "ja"
  ],
  "/UartSBee_v5": [
    "en",
    "ja"
  ],
  "/Wifi_Bee": [
    "en",
    "ja"
  ],
  "/Wifi_Bee_v2.0": [
    "en",
    "ja"
  ],
  "/XBee_Shield": [
    "en",
    "ja"
  ],
  "/XBee_Shield_V2.0": [
    "en",
    "ja"
  ],
  "/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products": [
    "en",
    "ja"
  ],
  "/discontinuedproducts": [
    "en",
    "ja"
  ],
  "/4WD_Driver_Platform_V1.0": [
    "en",
    "ja"
  ],
  "/4WD_Mecanum_Wheel_Robot_Kit_Series": [
    "en",
    "ja"
  ],
  "/Atmel_AVRISP_STK500_USB_ISP_Programmer": [
    "en",
    "ja"
  ],
  "/AT_Command_Tester": [
    "en",
    "ja"
  ],
  "/AT_Command_Tester_Application": [
    "en",
    "ja"
  ],
  "/Basic_Fastener_Kit": [
    "en",
    "ja"
  ],
  "/BLE_Carbon": [
    "en",
    "ja"
  ],
  "/BLE_Micro": [
    "en",
    "ja"
  ],
  "/BLE_Nitrogen": [
    "en",
    "ja"
  ],
  "/Bugduino": [
    "en",
    "ja"
  ],
  "/CUI32Stem": [
    "en",
    "ja"
  ],
  "/Danger_Shield_Complete_Kits": [
    "en",
    "ja"
  ],
  "/Edison_4WD_Auto_Robotic_Platform": [
    "en",
    "ja"
  ],
  "/Edison_4WD_Auto_Robotic_Platform_2.0": [
    "en",
    "ja"
  ],
  "/ESP32_Breakout_Kit": [
    "en",
    "ja"
  ],
  "/FST-01": [
    "en",
    "ja"
  ],
  "/Fubarino_SD": [
    "en",
    "ja"
  ],
  "/Grove Maker Kit for Intel Joule": [
    "en",
    "ja"
  ],
  "/Grove-Base_Shield_for_IOIO-OTG": [
    "en",
    "ja"
  ],
  "/Grove_Base_BoosterPack": [
    "en",
    "ja"
  ],
  "/Grove_Base_Shield_for_Photon": [
    "en",
    "ja"
  ],
  "/Grove_IoT_Developer_Kit-Microsoft_Azure_Edition": [
    "en",
    "ja"
  ],
  "/Grove_Shield_for_Intel_Joule": [
    "en",
    "ja"
  ],
  "/Hercules_Dual_15A_6-20V_Motor_Controller": [
    "en",
    "ja"
  ],
  "/IoT_Fast_Prototyping_Kit S5D9": [
    "en",
    "ja"
  ],
  "/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout": [
    "en",
    "ja"
  ],
  "/Matrix_Clock": [
    "en",
    "ja"
  ],
  "/mbed_Shield": [
    "en",
    "ja"
  ],
  "/Mini_GSM_GPRS_GPS_Breakout_SIM808": [
    "en",
    "ja"
  ],
  "/Nose_LED_Kit": [
    "en",
    "ja"
  ],
  "/Serial_port_bluetooth_module_Master-Slave": [
    "en",
    "ja"
  ],
  "/Sidekick_Advanced_Kit": [
    "en",
    "ja"
  ],
  "/Sidekick_Basic_Kit_for_TI_LaunchPad": [
    "en",
    "ja"
  ],
  "/Stepper_Motor_Driver": [
    "en",
    "ja"
  ],
  "/Stepper_Motor_Driver_v2.3": [
    "en",
    "ja"
  ],
  "/Tiny_BLE": [
    "en",
    "ja"
  ],
  "/Tricycle_Bot": [
    "en",
    "ja"
  ],
  "/UartSB_Frame": [
    "en",
    "ja"
  ],
  "/Arduino_Breakout_for_LinkIt_Smart_7688_Duo": [
    "en",
    "ja"
  ],
  "/Breakout_for_LinkIt_Smart_7688": [
    "en",
    "ja"
  ],
  "/Breakout_for_LinkIt_Smart_7688_v2.0": [
    "en",
    "ja"
  ],
  "/Grove_Breakout_for_LinkIt_Smart_7688_Duo": [
    "en",
    "ja"
  ],
  "/Grove_Starter_kit_for_LinkIt_Smart7688_Duo": [
    "en",
    "ja"
  ],
  "/LinkIt": [
    "en",
    "ja"
  ],
  "/Linkit_Connect_7681": [
    "en",
    "ja"
  ],
  "/LinkIt_Smart_7688": [
    "en",
    "ja"
  ],
  "/LinkIt_Smart_7688_Duo": [
    "en",
    "ja"
  ],
  "/Grove-Starter_Kit_for_LinkIt_ONE": [
    "en",
    "ja"
  ],
  "/LinkIt-ONE-Tutorial---Mini-Servo": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Analog_Interface": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Colorful_World": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Hello_World": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Light-Sensor": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Marquee": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Push_Button": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-SMS_control_the_LED": [
    "en",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-The_Basics": [
    "en",
    "ja"
  ],
  "/Secret_Box": [
    "en",
    "ja"
  ],
  "/Sidekick_Basic_Kit_for_LinkIt_ONE": [
    "en",
    "ja"
  ],
  "/Seeed_Elderly/Navigation/Edge_Computing_4.7": [
    "en",
    "ja"
  ],
  "/Seeed_Elderly/Navigation/Sensor_Network_4.7": [
    "en",
    "ja"
  ],
  "/NPi-i.MX6ULL-Dev-Board-Linux-SBC": [
    "en",
    "ja"
  ],
  "/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11": [
    "en",
    "ja"
  ],
  "/Rainbowduino": [
    "en",
    "ja"
  ],
  "/Rainbowduino_Extension_Board_v0.9b": [
    "en",
    "ja"
  ],
  "/Rainbowduino_LED_driver_platform-ATmega328": [
    "en",
    "ja"
  ],
  "/Rainbowduino_v3.0": [
    "en",
    "ja"
  ],
  "/Seeed_Elderly/Rainbowduino/Rainbow_Cube_Kit_Acrylic_Harness": [
    "en",
    "ja"
  ],
  "/How-to-build-a-home-soft-router-and-NAS-With-ReComputer": [
    "en",
    "ja"
  ],
  "/Arduino_IDE_for_RePhone_Kit": [
    "en",
    "ja"
  ],
  "/Eclipse_IDE_for_RePhone_Kit": [
    "en",
    "ja"
  ],
  "/JavaScript_for_RePhone": [
    "en",
    "ja"
  ],
  "/Lua_for_RePhone": [
    "en",
    "ja"
  ],
  "/RePhone_APIs-Audio": [
    "en",
    "ja"
  ],
  "/RePhone": [
    "en",
    "ja"
  ],
  "/RePhone_core_2G-Atmel32u4": [
    "en",
    "ja"
  ],
  "/Rephone_core_2G-AtmelSAMD21": [
    "en",
    "ja"
  ],
  "/RePhone_Geo_Kit": [
    "en",
    "ja"
  ],
  "/RePhone_Lumi_Kit": [
    "en",
    "ja"
  ],
  "/RePhone_Strap_Kit_for_Pebble": [
    "en",
    "ja"
  ],
  "/Retro Phone Kit": [
    "en",
    "ja"
  ],
  "/Google_Assistant": [
    "en",
    "ja"
  ],
  "/ReSpeaker_Core_V2_&_Wio_Link": [
    "en",
    "ja"
  ],
  "/ReSpeaker_Solutions": [
    "en",
    "ja"
  ],
  "/Voice_Interaction": [
    "en",
    "ja"
  ],
  "/ReSpeaker_Drive_Unit": [
    "en",
    "ja"
  ],
  "/ReSpeaker_Mic_Array": [
    "en",
    "ja"
  ],
  "/ReSpeaker_Mic_Array_v2.0": [
    "cn",
    "en",
    "ja"
  ],
  "/ReSpeaker-USB-Mic-Array": [
    "en",
    "ja"
  ],
  "/ReSpeaker": [
    "en",
    "ja"
  ],
  "/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi": [
    "en",
    "ja"
  ],
  "/ReSpeaker_4_Mic_Array_for_Raspberry_Pi": [
    "en",
    "ja"
  ],
  "/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi": [
    "cn",
    "en",
    "ja"
  ],
  "/ReSpeaker_Core": [
    "en",
    "ja"
  ],
  "/ReSpeaker_Core_v2.0": [
    "en",
    "ja"
  ],
  "/ReSpeaker_Product_Guide": [
    "en",
    "ja"
  ],
  "/Skeleton_Bot-4WD_hercules_mobile_robotic_platform": [
    "en",
    "ja"
  ],
  "/Skeleton_Box": [
    "en",
    "ja"
  ],
  "/Skeleton_Box_10x7_10x10_17x10": [
    "en",
    "ja"
  ],
  "/W600_Module": [
    "en",
    "ja"
  ],
  "/Xadow_1.54_inch_Touchscreen": [
    "en",
    "ja"
  ],
  "/Xadow_3_Aixs_Accelerometer": [
    "en",
    "ja"
  ],
  "/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g": [
    "en",
    "ja"
  ],
  "/Xadow_Audio": [
    "en",
    "ja"
  ],
  "/Xadow_Barometer": [
    "en",
    "ja"
  ],
  "/Xadow_Barometer_BMP180": [
    "en",
    "ja"
  ],
  "/Xadow_Basic_Sensors": [
    "en",
    "ja"
  ],
  "/Xadow_BLE": [
    "en",
    "ja"
  ],
  "/Xadow_BLE_Dual_Model_V1.0": [
    "en",
    "ja"
  ],
  "/Xadow_BLE_Slave": [
    "en",
    "ja"
  ],
  "/Xadow_Breakout": [
    "en",
    "ja"
  ],
  "/Xadow_Buzzer": [
    "en",
    "ja"
  ],
  "/Xadow_Compass": [
    "en",
    "ja"
  ],
  "/Xadow_Duino": [
    "en",
    "ja"
  ],
  "/Xadow_Edison_Kit": [
    "en",
    "ja"
  ],
  "/Xadow_Gesture_v1.0": [
    "en",
    "ja"
  ],
  "/Xadow_GPS": [
    "en",
    "ja"
  ],
  "/Xadow_GPS_V2": [
    "en",
    "ja"
  ],
  "/Xadow_Grove_Adaptor": [
    "en",
    "ja"
  ],
  "/Xadow_GSMPlusBLE": [
    "en",
    "ja"
  ],
  "/Xadow_GSM_Breakout": [
    "en",
    "ja"
  ],
  "/Xadow_IMU_10DOF": [
    "en",
    "ja"
  ],
  "/Xadow_IMU_6DOF": [
    "en",
    "ja"
  ],
  "/Xadow_IMU_9DOF": [
    "en",
    "ja"
  ],
  "/Xadow_LED_5x7": [
    "en",
    "ja"
  ],
  "/Xadow_LED_5_multiply_7_v1.0": [
    "en",
    "ja"
  ],
  "/Xadow_M0": [
    "en",
    "ja"
  ],
  "/Xadow_Main_Board": [
    "en",
    "ja"
  ],
  "/Xadow_Metal_Frame": [
    "en",
    "ja"
  ],
  "/Xadow_Motor_Driver": [
    "en",
    "ja"
  ],
  "/Xadow_Multichannel_Gas_Sensor": [
    "en",
    "ja"
  ],
  "/Xadow_NFC": [
    "en",
    "ja"
  ],
  "/Xadow_NFC_tag": [
    "en",
    "ja"
  ],
  "/Xadow_NFC_v2": [
    "en",
    "ja"
  ],
  "/Xadow_Pebble_Time_Adapter": [
    "en",
    "ja"
  ],
  "/Xadow_Q_Touch_Sensor": [
    "en",
    "ja"
  ],
  "/Xadow_RGB_OLED_96multiply64": [
    "en",
    "ja"
  ],
  "/Xadow_RTC": [
    "en",
    "ja"
  ],
  "/Xadow_Storage": [
    "en",
    "ja"
  ],
  "/Xadow_Tutorial_Acceleration_Detector": [
    "en",
    "ja"
  ],
  "/Xadow_Tutorial_Communicate_via_BLE": [
    "en",
    "ja"
  ],
  "/Xadow_Tutorial_Shaking_Shaking": [
    "en",
    "ja"
  ],
  "/Xadow_UV_Sensor": [
    "en",
    "ja"
  ],
  "/Xadow_Vibrator_Motor": [
    "en",
    "ja"
  ],
  "/Xadow_Wearable_Kit_For_Edison": [
    "en",
    "ja"
  ],
  "/Xado_OLED_128multiply64": [
    "en",
    "ja"
  ],
  "/Arch_BLE": [
    "en",
    "ja"
  ],
  "/Arch_GPRS": [
    "en",
    "ja"
  ],
  "/Arch_GPRS_V2": [
    "en",
    "ja"
  ],
  "/Arch_Link": [
    "en",
    "ja"
  ],
  "/Arch_Max": [
    "en",
    "ja"
  ],
  "/Arch_Max_v1.1": [
    "en",
    "ja"
  ],
  "/Arch_Mix": [
    "en",
    "ja"
  ],
  "/Arch_Pro": [
    "en",
    "ja"
  ],
  "/Arch_V1.1": [
    "en",
    "ja"
  ],
  "/Grove-Starter_Kit_for_mbed": [
    "en",
    "ja"
  ],
  "/Heart-Sound_Sensor": [
    "en",
    "ja"
  ],
  "/Azure_Sphere_MT3620_Development_Kit": [
    "en",
    "ja"
  ],
  "/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit": [
    "en",
    "ja"
  ],
  "/MT3620_Ethernet_Shield_v1.0": [
    "en",
    "ja"
  ],
  "/MT3620_Grove_Breakout": [
    "en",
    "ja"
  ],
  "/MT3620_Mini_Dev_Board": [
    "en",
    "ja"
  ],
  "/Bracket_for_Infrared_Proximity_Sensor": [
    "en",
    "ja"
  ],
  "/Shield-MaTrix-V0.9b": [
    "en",
    "ja"
  ],
  "/0.5w_Solar_Panel_55x70": [
    "en",
    "ja"
  ],
  "/1.5W_Solar_Panel_81x137": [
    "en",
    "ja"
  ],
  "/1w_Solar_Panel_80x100": [
    "en",
    "ja"
  ],
  "/2.5W_Solar_Panel_116x160": [
    "en",
    "ja"
  ],
  "/3.6V_Micro_hydro_generator": [
    "en",
    "ja"
  ],
  "/3W_Solar_Panel_138x160": [
    "en",
    "ja"
  ],
  "/5V-3.3V_Breadboard_Power_Supply": [
    "en",
    "ja"
  ],
  "/5V-3.3V_Breadboard_Power_Supply_v1.1": [
    "en",
    "ja"
  ],
  "/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V": [
    "en",
    "ja"
  ],
  "/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V": [
    "en",
    "ja"
  ],
  "/Battery_kit_3.7V_520_mAh": [
    "en",
    "ja"
  ],
  "/Bicycle_Dynamo_With_Bracket-6V_3W": [
    "en",
    "ja"
  ],
  "/DC_framework_miniature_solenoid_VL-0063": [
    "en",
    "ja"
  ],
  "/DC_framework_solenoid_HCNE1-0520": [
    "en",
    "ja"
  ],
  "/DC_framework_solenoid_HCNE1-0630": [
    "en",
    "ja"
  ],
  "/Essentials": [
    "en",
    "ja"
  ],
  "/Lipo-Rider-Plus": [
    "en",
    "ja"
  ],
  "/Lipo_Rider": [
    "en",
    "ja"
  ],
  "/Lipo_Rider_Pro": [
    "en",
    "ja"
  ],
  "/Lipo_Rider_V1.1": [
    "en",
    "ja"
  ],
  "/Lipo_Rider_V1.3": [
    "en",
    "ja"
  ],
  "/Logic_DC_Jack": [
    "en",
    "ja"
  ],
  "/Qi_Wireless_Charger_Transmitter": [
    "en",
    "ja"
  ],
  "/Adjustable_DC_DC_Power_Converter_1V-12V-1.5A": [
    "en",
    "ja"
  ],
  "/Capacitance_Meter_Kit": [
    "en",
    "ja"
  ],
  "/RS-232_To_TTL_Conveter-MAX3232IDR": [
    "en",
    "ja"
  ],
  "/1-47inch_lcd_spi_display": [
    "en",
    "ja"
  ],
  "/1-69inch_lcd_spi_display": [
    "en",
    "ja"
  ],
  "/LCD_16-2_Characters-Green_Yellow_back_light": [
    "en",
    "ja"
  ],
  "/LCD_8-2_Characters-Blue_back_light": [
    "en",
    "ja"
  ],
  "/125Khz_RFID_module-UART": [
    "en",
    "ja"
  ],
  "/13.56Mhz_RFID_module-IOS-IEC_14443_type_a": [
    "en",
    "ja"
  ],
  "/2.8inch-TFT_Touch_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/AVR_USB_Programmer": [
    "en",
    "ja"
  ],
  "/Bus_Pirate_v3_assembled": [
    "en",
    "ja"
  ],
  "/Codec-Adaptive_Wireless_Relay": [
    "en",
    "ja"
  ],
  "/Scream_out_loud-110dBA_fixed_tone_Siren": [
    "en",
    "ja"
  ],
  "/USB_To_Uart_3V3": [
    "en",
    "ja"
  ],
  "/USB_To_Uart_5V": [
    "en",
    "ja"
  ],
  "/USB_To_Uart_5V_3V3": [
    "en",
    "ja"
  ],
  "/FSM-55": [
    "en",
    "ja"
  ],
  "/Bluetooth_Multimeter": [
    "en",
    "ja"
  ],
  "/Dfu-util": [
    "en",
    "ja"
  ],
  "/DSO_Nano-Development": [
    "en",
    "ja"
  ],
  "/DSO_Nano-gcc": [
    "en",
    "ja"
  ],
  "/DSO_Nano-OpenOCD_gdb": [
    "en",
    "ja"
  ],
  "/DSO_Nano-Qemu_gdb": [
    "en",
    "ja"
  ],
  "/DSO_Nano": [
    "en",
    "ja"
  ],
  "/DSO_Nano_v3": [
    "en",
    "ja"
  ],
  "/DSO_Quad-Beta_HW": [
    "en",
    "ja"
  ],
  "/DSO_Quad-Building_Firmware": [
    "en",
    "ja"
  ],
  "/DSO_Quad-Calibration": [
    "en",
    "ja"
  ],
  "/DSO_Quad": [
    "en",
    "ja"
  ],
  "/DSO_Quad_Manual_by_the_community": [
    "en",
    "ja"
  ],
  "/Mini_Soldering_Iron": [
    "en",
    "ja"
  ],
  "/Replacement_LCD_Screen_for_DSO_nano": [
    "en",
    "ja"
  ],
  "/RF_Explorer_Software": [
    "en",
    "ja"
  ],
  "/Get_Started_with_EcoEye_Embedded_Vision_Camera": [
    "en",
    "ja"
  ],
  "/G1-8_Water_Flow_Sensor": [
    "en",
    "ja"
  ],
  "/G1_and_2_inch_Water_Flow_Sensor": [
    "en",
    "ja"
  ],
  "/G1_Water_Flow_Sensor": [
    "en",
    "ja"
  ],
  "/G3-4_Water_Flow_sensor": [
    "en",
    "ja"
  ],
  "/Gear_Stepper_Motor_Driver_Pack": [
    "en",
    "ja"
  ],
  "/M11_1.25_Water_flow_Sensor": [
    "en",
    "ja"
  ],
  "/Photo_interrupter_OS25B10": [
    "en",
    "ja"
  ],
  "/Photo_Reflective_Sensor": [
    "en",
    "ja"
  ],
  "/Piezo_Sensor-MiniSense_100": [
    "en",
    "ja"
  ],
  "/PIR_Motion_Sensor_Large_Lens_version": [
    "en",
    "ja"
  ],
  "/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz": [
    "en",
    "ja"
  ],
  "/Ultra_Sonic_range_measurement_module": [
    "en",
    "ja"
  ],
  "/Water-Flow-Sensor": [
    "en",
    "ja"
  ],
  "/Weight_Sensor_Load_Cell_0-500g": [
    "en",
    "ja"
  ],
  "/2KM_Long_Range_RF_link_kits_w_encoder_and_decoder": [
    "en",
    "ja"
  ],
  "/315Mhz_remote_relay_switch_kits-2_channels": [
    "en",
    "ja"
  ],
  "/315Mhz_RF_link_kit": [
    "en",
    "ja"
  ],
  "/315MHz_Simple_RF_Link_Kit": [
    "en",
    "ja"
  ],
  "/315Mhz_Wireless_car_key_fob_with_key_chain": [
    "en",
    "ja"
  ],
  "/433Mhz_RF_Link_Kit": [
    "en",
    "ja"
  ],
  "/SDLogger-Open_Hardware_Data_Logger": [
    "en",
    "ja"
  ],
  "/WiFi_Serial_Transceiver_Module": [
    "en",
    "ja"
  ],
  "/Wireless_Sensor_Node-Solar_Kit": [
    "en",
    "ja"
  ],
  "/Grove-16-Channel_PWM_Driver-PCA9685": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-2-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-2-Channel_SPDT_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-2-Coil_Latching_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-4-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-4-Channel_SPDT_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-8-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Buzzer": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Chainable_RGB_LED": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Dry-Reed_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-EL_Driver": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Hall_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Haptic_Motor": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-I2C-Motor-Driver-L298P": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver-TB6612FNG": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver_V1.2": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver_V1.3": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Infrared_Emitter": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-LED_Matrix_Driver_v1.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Mini_Fan": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Mini_I2C_Motor_Driver_v1.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-MP3-v3": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_mp3_v4": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-MP3_v2.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Optocoupler_Relay-M281": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Passive-Buzzer": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Recorder_v3.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Serial_MP3_Player": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Servo": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Solid_State_Relay": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Solid_State_Relay_V2": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Speaker-Plus": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Speaker": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Variable_Color_LED": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Vibration_Motor": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Voltage_Divider": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Water_Atomization": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove_Recorder": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Wrapper": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-10A_DC_Current_Sensor-ACS725": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-2.5A-DC-Current-Sensor-ACS70331": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-5A_DC_AC_Current_Sensor-ACS70331": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Electricity_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Electromagnet": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-MOSFET": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Screw_Terminal": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-SPDT_Relay_30A": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-0.54_inch_Red_Dual_Alphanumeric_Display": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-0.54_inch_Red_Quad_Alphanumeric_Display": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_1.2inch_ips_display": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-16x2_LCD_Series": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-4-Digit_Display": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-BlinkM": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-LCD_RGB_Backlight": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-OLED-Display-0.66-SSD1306_v1.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-OLED-Display-0.96-SSD1315": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-OLED-Display-1.12-SH1107_V3.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-OLED_Display_0.96inch": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-OLED_Display_1.12inch": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Serial_Camera_Kit": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Serial_LCD_V1.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Triple_Color_E-Ink_Display_1_54": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Triple_Color_E-Ink_Display_2_13": [
    "cn",
    "en",
    "ja"
  ],
  "/I2C_LCD": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove_Accessories_Intro": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-16-bit-ADC-ADS1115": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-AND": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-DC_Jack_Power": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Differential_Amplifier_v1.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Differential_Amplifier_v1.2": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-FM_Receiver": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-I2C-Hub-6Port": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-I2C_Hub": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Mini_Camera": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-NOT": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-NunChuck": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-OR": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-PS_2_Adapter": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Qwiic-Hub": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-RS232": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-RS485": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Serial_Camera": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Circular_LED": [
    "en",
    "ja"
  ],
  "/Grove-LED_Bar": [
    "en",
    "ja"
  ],
  "/Grove-LED_Matrix_Driver-HT16K33": [
    "en",
    "ja"
  ],
  "/Grove-LED_ring": [
    "en",
    "ja"
  ],
  "/Grove-LED_Socket_Kit": [
    "en",
    "ja"
  ],
  "/Grove-LED_String_Light": [
    "en",
    "ja"
  ],
  "/Grove-LED_Strip_Driver": [
    "en",
    "ja"
  ],
  "/Grove-Red_LED": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Red_LED_Matrix_w_Driver": [
    "en",
    "ja"
  ],
  "/Grove-RGB_LED_Matrix_w-Driver": [
    "en",
    "ja"
  ],
  "/Grove-RGB_LED_Stick-10-WS2813_Mini": [
    "en",
    "ja"
  ],
  "/Grove-5-Way_Switch": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-6-Position_DIP_Switch": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Button": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Dual-Button": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Joint_v2.0": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-LED_Button": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Magnetic_Switch": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Mech_Keycap": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Switch-P": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Thumb_Joystick": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-RTC": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove_High_Precision_RTC": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Analog_Accelerometer": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Compass_V1.0": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-1.5g": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-16g": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-400g": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Gyro": [
    "en",
    "ja"
  ],
  "/Grove-3-Axis_Digitial_Compass_v2.0": [
    "en",
    "ja"
  ],
  "/Grove-6-Axis_Accelerometer&Gyroscope_BMI088": [
    "en",
    "ja"
  ],
  "/Grove-6-Axis_AccelerometerAndCompass_V2.0": [
    "en",
    "ja"
  ],
  "/Grove-6-Axis_AccelerometerAndGyroscope": [
    "en",
    "ja"
  ],
  "/grove-d7s-vibration-sensor": [
    "en",
    "ja"
  ],
  "/Grove-IMU_10DOF": [
    "en",
    "ja"
  ],
  "/Grove-IMU_10DOF_v2.0": [
    "en",
    "ja"
  ],
  "/Grove-IMU_9DOF-lcm20600+AK09918": [
    "en",
    "ja"
  ],
  "/Grove-IMU_9DOF_v2.0": [
    "en",
    "ja"
  ],
  "/Grove-Single_Axis_Analog_Gyro": [
    "en",
    "ja"
  ],
  "/Sensor_accelerometer": [
    "en",
    "ja"
  ],
  "/edge-impulse-vision-ai": [
    "cn",
    "en",
    "ja"
  ],
  "/gesture_control_music_application": [
    "en",
    "ja"
  ],
  "/grove_gesture_paj7660": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Vision-AI-Module": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_demo": [
    "en",
    "ja"
  ],
  "/connect_vision_ai_v2_to_sensecap_mate": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_telegram": [
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_webcamera": [
    "en",
    "ja"
  ],
  "/vision_ai_v2_crowd_heat_map": [
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_himax_sdk": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_at": [
    "en",
    "ja"
  ],
  "/Grove-vision-ai-v2-camera-supported": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_software_support": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2": [
    "cn",
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_rs485": [
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2_sscma": [
    "en",
    "ja"
  ],
  "/grove_vision_ai_v2a": [
    "cn",
    "en",
    "ja"
  ],
  "/Train-Deploy-AI-Model-Grove-Vision-AI": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Air_Quality_Sensor_v1.3": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Dust_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Formaldehyde-Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Laser_PM2.5_Sensor-HM3301": [
    "en",
    "ja"
  ],
  "/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41": [
    "en",
    "ja"
  ],
  "/Grove-CO2_Temperature_Humidity_Sensor-SCD30": [
    "en",
    "ja"
  ],
  "/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931": [
    "en",
    "ja"
  ],
  "/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680": [
    "en",
    "ja"
  ],
  "/Grove_SEN5X_All_in_One": [
    "en",
    "ja"
  ],
  "/Grove-Barometer-High-Accuracy": [
    "en",
    "ja"
  ],
  "/Grove-Barometer_Sensor-BME280": [
    "en",
    "ja"
  ],
  "/Grove-Barometer_Sensor-BMP180": [
    "en",
    "ja"
  ],
  "/Grove-Barometer_Sensor-BMP280": [
    "en",
    "ja"
  ],
  "/Grove-Barometer_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310": [
    "en",
    "ja"
  ],
  "/Grove-Integrated-Pressure-Sensor-Kit": [
    "en",
    "ja"
  ],
  "/Sensor_barometer": [
    "en",
    "ja"
  ],
  "/Grove-Capacitive-Fingerprint-Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Chest_Strap_Heart_Rate_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Ear-clip_Heart_Rate_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-EMG_Detector": [
    "en",
    "ja"
  ],
  "/Grove-Finger-clip_Heart_Rate_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Finger-clip_Heart_Rate_Sensor_with_shell": [
    "en",
    "ja"
  ],
  "/Grove-Fingerprint_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-GSR_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Human_Presence_Sensor-AK9753": [
    "en",
    "ja"
  ],
  "/Sensor_biomedicine": [
    "en",
    "ja"
  ],
  "/Grove-Alcohol_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-CO2_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ2": [
    "en",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ3": [
    "en",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ5": [
    "en",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ9": [
    "en",
    "ja"
  ],
  "/Grove-Gas_Sensor-O2-MIX8410": [
    "en",
    "ja"
  ],
  "/Grove-Gas_Sensor-O2": [
    "en",
    "ja"
  ],
  "/Grove-Gas_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-HCHO_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Multichannel-Gas-Sensor-V2": [
    "en",
    "ja"
  ],
  "/Grove-Multichannel_Gas_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Oxygen-Sensor-Pro": [
    "en",
    "ja"
  ],
  "/grove-smart-air-quality-sensor-sgp41": [
    "en",
    "ja"
  ],
  "/Grove-VOC_and_eCO2_Gas_Sensor-SGP30": [
    "en",
    "ja"
  ],
  "/grove_voc_gas_sensor_sgp40": [
    "en",
    "ja"
  ],
  "/Seeed_Gas_Sensor_Selection_Guide": [
    "en",
    "ja"
  ],
  "/Grove_Sensor_Intro": [
    "en",
    "ja"
  ],
  "/Grove-Digital_Light_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Flame_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Heelight_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-I2C_Color_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-I2C_UV_Sensor-VEML6070": [
    "en",
    "ja"
  ],
  "/Grove-Infrared_Receiver": [
    "en",
    "ja"
  ],
  "/Grove-Infrared_Reflective_Sensor": [
    "en",
    "ja"
  ],
  "/grove_line_follower": [
    "en",
    "ja"
  ],
  "/grove-lightning-sensor-as3935": [
    "en",
    "ja"
  ],
  "/Grove-Light_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Line_Finder": [
    "en",
    "ja"
  ],
  "/Grove-Luminance_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Sunlight_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-UV_Sensor": [
    "en",
    "ja"
  ],
  "/grove_color_sensor_v3_0_iic": [
    "en",
    "ja"
  ],
  "/Sensor_light": [
    "en",
    "ja"
  ],
  "/G1-1-4_Water_Flow_sensor": [
    "en",
    "ja"
  ],
  "/Grove-EC-Sensor-kit": [
    "en",
    "ja"
  ],
  "/Grove-ORP-Sensor-kit": [
    "en",
    "ja"
  ],
  "/Grove-ORP-Sensor-Pro": [
    "en",
    "ja"
  ],
  "/Grove-PH-Sensor-kit": [
    "en",
    "ja"
  ],
  "/Grove-PH_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-TDS-Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0": [
    "en",
    "ja"
  ],
  "/Grove-Water-Level-Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Water_Sensor": [
    "en",
    "ja"
  ],
  "/Sensor_liquid": [
    "en",
    "ja"
  ],
  "/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600": [
    "en",
    "ja"
  ],
  "/Grove-Collision_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Digital-PIR-Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Encoder": [
    "en",
    "ja"
  ],
  "/Grove-Mini_Track_Ball": [
    "en",
    "ja"
  ],
  "/Grove-Mouse_Encoder": [
    "en",
    "ja"
  ],
  "/Grove-Optical_Rotary_Encoder-TCUT1600X01": [
    "en",
    "ja"
  ],
  "/Grove-Piezo_Vibration_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-PIR_Motion_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Slide_Potentiometer": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Step_Counter-BMA456": [
    "en",
    "ja"
  ],
  "/Grove-Tilt_Switch": [
    "en",
    "ja"
  ],
  "/Grove-Vibration_Sensor_SW-420": [
    "en",
    "ja"
  ],
  "/Sensor_motion": [
    "en",
    "ja"
  ],
  "/Grove-80cm_Infrared_Proximity_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Adjustable_PIR_Motion_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F": [
    "en",
    "ja"
  ],
  "/Grove-Doppler-Radar": [
    "en",
    "ja"
  ],
  "/Grove-Gesture_v1.0": [
    "en",
    "ja"
  ],
  "/Grove-IR_Distance_Interrupter_v1.2": [
    "en",
    "ja"
  ],
  "/Grove-TF_Mini_LiDAR": [
    "en",
    "ja"
  ],
  "/Grove-Time_of_Flight_Distance_Sensor-VL53L0X": [
    "en",
    "ja"
  ],
  "/Grove-Ultrasonic_Ranger": [
    "en",
    "ja"
  ],
  "/grove_ultrasonic_sensor_sms812": [
    "en",
    "ja"
  ],
  "/Sensor_distance": [
    "en",
    "ja"
  ],
  "/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant": [
    "en",
    "ja"
  ],
  "/Grove-Moisture_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Analog-Microphone": [
    "en",
    "ja"
  ],
  "/Grove-Loudness_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Offline-Voice-Recognition": [
    "en",
    "ja"
  ],
  "/Grove-Recorder_v2.0": [
    "en",
    "ja"
  ],
  "/Grove-Sound_Recorder": [
    "en",
    "ja"
  ],
  "/Grove-Sound_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Speech_Recognizer": [
    "en",
    "ja"
  ],
  "/Sensor_sound": [
    "en",
    "ja"
  ],
  "/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor": [
    "en",
    "ja"
  ],
  "/Grove-I2C_High_Accuracy_Temp%26Humi_Sensor-SHT35": [
    "en",
    "ja"
  ],
  "/Grove-SHT4x": [
    "en",
    "ja"
  ],
  "/Grove-TempAndHumi_Sensor-SHT31": [
    "en",
    "ja"
  ],
  "/Grove-Temperature-Humidity-Sensor-DH20": [
    "en",
    "ja"
  ],
  "/Grove-TemperatureAndHumidity_Sensor-HDC1000": [
    "en",
    "ja"
  ],
  "/Grove-TemperatureAndHumidity_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Temperature_and_Humidity_Sensor_Pro": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0": [
    "en",
    "ja"
  ],
  "/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K": [
    "en",
    "ja"
  ],
  "/Grove-Digital_Infrared_Temperature_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-High_Temperature_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808": [
    "en",
    "ja"
  ],
  "/Grove-I2C_Thermocouple_Amplifier-MCP9600": [
    "en",
    "ja"
  ],
  "/Grove-Infrared_Temperature_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Infrared_Temperature_Sensor_Array-AMG8833": [
    "en",
    "ja"
  ],
  "/Grove-Temperature_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Temperature_Sensor_V1.2": [
    "en",
    "ja"
  ],
  "/Grove-Thermal-Imaging-Camera-IR-Array": [
    "en",
    "ja"
  ],
  "/One-Wire-Temperature-Sensor-DS18B20": [
    "en",
    "ja"
  ],
  "/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-": [
    "en",
    "ja"
  ],
  "/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121": [
    "en",
    "ja"
  ],
  "/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121": [
    "en",
    "ja"
  ],
  "/Grove-2_Channel_Inductive_Sensor-LDC1612": [
    "en",
    "ja"
  ],
  "/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI": [
    "en",
    "ja"
  ],
  "/Grove-I2C_Touch_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Rotary_Angle_Sensor": [
    "en",
    "ja"
  ],
  "/Grove-Round_Force_Sensor_FSR402": [
    "en",
    "ja"
  ],
  "/Grove-Touch_Sensor": [
    "en",
    "ja"
  ],
  "/grove_adc_for_load_cell_hx711": [
    "en",
    "ja"
  ],
  "/Grove-BLE-dual_model-v1.0": [
    "en",
    "ja"
  ],
  "/Grove-BLE_v1": [
    "en",
    "ja"
  ],
  "/Grove-Serial_Bluetooth": [
    "en",
    "ja"
  ],
  "/Grove-Serial_Bluetooth_v3.0": [
    "en",
    "ja"
  ],
  "/Grove-GPS-Air530": [
    "en",
    "ja"
  ],
  "/Grove-GPS": [
    "en",
    "ja"
  ],
  "/Grove_network_module_intro": [
    "en",
    "ja"
  ],
  "/Grove_Wio_E5_Helium_Demo": [
    "en",
    "ja"
  ],
  "/Grove_Wio_E5_Helium_tinyML_Demo": [
    "en",
    "ja"
  ],
  "/Grove_Wio_E5_P2P": [
    "en",
    "ja"
  ],
  "/Grove_Wio_E5_SenseCAP_Cloud_Demo": [
    "en",
    "ja"
  ],
  "/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3": [
    "en",
    "ja"
  ],
  "/Grove_Wio_E5_TTN_Demo": [
    "en",
    "ja"
  ],
  "/Grove_LoRa_E5_New_Version": [
    "en",
    "ja"
  ],
  "/Grove_NFC": [
    "en",
    "ja"
  ],
  "/grove-nfc-st25dv64": [
    "en",
    "ja"
  ],
  "/Grove_NFC_Tag": [
    "en",
    "ja"
  ],
  "/Grove-125KHz_RFID_Reader": [
    "en",
    "ja"
  ],
  "/Grove-315MHz_RF_Kit": [
    "en",
    "ja"
  ],
  "/Grove-433MHz_Simple_RF_Link_Kit": [
    "en",
    "ja"
  ],
  "/Grove-Serial_RF_Pro": [
    "en",
    "ja"
  ],
  "/Grove_LoRa_Radio": [
    "en",
    "ja"
  ],
  "/Grove-DMX512": [
    "en",
    "ja"
  ],
  "/Grove-I2C_ADC": [
    "en",
    "ja"
  ],
  "/Grove-I2C_FM_Receiver": [
    "en",
    "ja"
  ],
  "/Grove-I2C_FM_Receiver_v1.1": [
    "en",
    "ja"
  ],
  "/Grove-Node": [
    "en",
    "ja"
  ],
  "/Grove-Protoshield": [
    "en",
    "ja"
  ],
  "/Grove-RJ45_Adapter": [
    "en",
    "ja"
  ],
  "/Grove-UART_Wifi": [
    "en",
    "ja"
  ],
  "/Grove-UART_Wifi_V2": [
    "en",
    "ja"
  ],
  "/Grove_System": [
    "cn",
    "en",
    "ja"
  ],
  "/SEEED-IOT-BUTTON-FOR-AWS": [
    "en",
    "ja"
  ],
  "/getting_started_with_seeed_iot_button": [
    "en",
    "ja"
  ],
  "/iot_button_for_esphome": [
    "en",
    "ja"
  ],
  "/seeed_iot_button_with_zigbee": [
    "en",
    "ja"
  ],
  "/mmwave_for_xiao_to_ha_bt": [
    "cn",
    "en",
    "ja"
  ],
  "/mmwave_for_xiao": [
    "cn",
    "en",
    "ja"
  ],
  "/mmwave_for_xiao_arduino": [
    "cn",
    "en",
    "ja"
  ],
  "/mmwave_radar_Intro": [
    "cn",
    "en",
    "ja"
  ],
  "/mmwave_human_detection_kit": [
    "cn",
    "en",
    "ja"
  ],
  "/mmWave_Kit_And_Grove_Connect_To_ESPHome": [
    "cn",
    "en",
    "ja"
  ],
  "/getting_started_with_mr60bha2_mmwave_kit": [
    "en",
    "ja"
  ],
  "/ha_with_mr60bha2": [
    "en",
    "ja"
  ],
  "/getting_started_with_mr60fda2_mmwave_kit": [
    "en",
    "ja"
  ],
  "/ha_with_mr60fda2": [
    "en",
    "ja"
  ],
  "/Radar_MR24BSD1": [
    "cn",
    "en",
    "ja"
  ],
  "/Radar_MR24FDB1": [
    "cn",
    "en",
    "ja"
  ],
  "/Radar_MR24HPB1": [
    "cn",
    "en",
    "ja"
  ],
  "/Radar_MR24HPC1": [
    "cn",
    "en",
    "ja"
  ],
  "/Radar_MR60BHA1": [
    "cn",
    "en",
    "ja"
  ],
  "/Radar_MR60FDA1": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove-Starter-Kit-for-Raspberry-Pi-Pico": [
    "en",
    "ja"
  ],
  "/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions": [
    "en",
    "ja"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT": [
    "cn",
    "en",
    "ja"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT_Jetson": [
    "en",
    "ja"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT_Raspberry": [
    "en",
    "ja"
  ],
  "/respeaker_2_mics_pi_hat_raspberry_v2": [
    "en",
    "ja"
  ],
  "/respeaker_2_mics_pi_hat_v2_speech_recognition": [
    "en",
    "ja"
  ],
  "/respeaker_lite_ha": [
    "en",
    "ja"
  ],
  "/respeaker_lite_pi5": [
    "en",
    "ja"
  ],
  "/respeaker_enclosure": [
    "en",
    "ja"
  ],
  "/reSpeaker_usb_v3": [
    "en",
    "ja"
  ],
  "/respeaker_button": [
    "en",
    "ja"
  ],
  "/respeaker_i2s_rgb": [
    "en",
    "ja"
  ],
  "/respeaker_i2s_test": [
    "en",
    "ja"
  ],
  "/respeaker_player_spiffs": [
    "en",
    "ja"
  ],
  "/respeaker_record_and_play": [
    "en",
    "ja"
  ],
  "/respeaker_rgb_test": [
    "en",
    "ja"
  ],
  "/respeaker_streams_generator": [
    "en",
    "ja"
  ],
  "/respeaker_streams_i2s_tflite": [
    "en",
    "ja"
  ],
  "/respeaker_streams_memory": [
    "en",
    "ja"
  ],
  "/respeaker_steams_mqtt": [
    "en",
    "ja"
  ],
  "/respeaker_streams_print": [
    "en",
    "ja"
  ],
  "/respeaker_volume": [
    "en",
    "ja"
  ],
  "/xiao_respeaker": [
    "en",
    "ja"
  ],
  "/XIAO-Kit-Courses": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_matter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/matter_development_framework": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_idf": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32_matter_env": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/PCB_Design_XIAO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/esp32c3_smart_thermostat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-esp32c3-esphome": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-ESP32C3-for-ESPHome-Support": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-esp32c3-prism-display": [
    "cn",
    "en",
    "ja"
  ],
  "/xiaoesp32c3-chatgpt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiaoesp32c3-flash-storage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-c3-ibeacon": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao_esp32c3_espnow": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c3_nuttx": [
    "cn",
    "en",
    "ja"
  ],
  "/XIAO-ESP32C3-Zephyr": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32C3_Bluetooth_Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32C3_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32C3_MicroPython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32C3_Pin_Multiplexing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32C3_WiFi_Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c3_with_circuitpython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c3_with_micropython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_aws_iot": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_espnow": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_kafka": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_nuttx": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao_esp32c6_bluetooth": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-esp32-swift": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_pin_multiplexing_esp33c6": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_wifi_usage_esp32c6": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_with_circuitpython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_micropython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/use_cursor_create_zigbee_prj": [
    "cn",
    "en",
    "ja"
  ],
  "/xiaoc6_zigbee_led_ha": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_zigbee": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32c6_zigbee_arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edgeimpulse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/tinyml_course_Image_classification_project": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/tinyml_course_Key_Word_Spotting": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32S3_esphome": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_espnow": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/geolocation_tracker_with_XIAO_ESP32S3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_keyword_spotting": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_speech2chatgpt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_sscma": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_voice_pomodoro": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao-esp32s3-freertos": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_nuttx": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao_esp32s3_zephyr_rtos": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_bluetooth": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_project_circuitpython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_edgelab": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32S3_Micropython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_ESP32S3_Consumption": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_wifi_usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_with_micropython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_camera_usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_sense_mic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_sense_filesystem": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/bus_servo_driver_board": [
    "cn",
    "en",
    "ja"
  ],
  "/gnss_for_xiao": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/io_expander_for_xiao": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/get_start_l76k_gnss": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/L76K_Path_Tracking_on_Ubidots": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/led_driver_board": [
    "cn",
    "en"
  ],
  "/round_display_christmas_ball": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/using_lvgl_and_tft_on_round_display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/seeedstudio_round_display_usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/get_start_round_display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-XIAO-Expansion-Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-can-bus-expansion": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-eInk-Expansion-Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/rgb_matrix_for_xiao": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-RS485-Expansion-Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_eink_expansion_board_v2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_mg24_sense_built_in_sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_mg24_matter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_mg24_ha_openthread": [
    "en",
    "ja"
  ],
  "/xiao_mg24_bluetooth": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao_mg24_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_mg24_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_mg24_with_platform_io": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao-ble-sidewalk": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_BLE_HA": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-Bluetooth-Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-Bluetooth_Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-PDM-EI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-TFLite-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-TFLite-Mic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAOEI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-IMU-Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-NFC-Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-PDM-Usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE-Sense-Pin-Multiplexing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-BLE_CircutPython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-ble-qspi-flash-usage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_nrf52840_nuttx": [
    "cn",
    "en",
    "ja"
  ],
  "/XIAO-nRF52840-Zephyr-RTOS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_nrf52840_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_BLE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_ra4m1_clock": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_ra4m1_mouse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_ra4m1_nuttx": [
    "cn",
    "en",
    "ja"
  ],
  "/getting_started_xiao_ra4m1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_ra4m1_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_ra4m1_with_platform_io": [
    "cn",
    "en",
    "ja"
  ],
  "/XIAO-RP2040-EI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-RP2040-with-Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-RP2040-with-CircuitPython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-RP2040-with-MicroPython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-rp2040-with-nuttx": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-RP2040-Zephyr-RTOS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-RP2040": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_rp2040_with_platform_io": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao_rp2350_nuttx": [
    "cn",
    "en",
    "ja"
  ],
  "/xiao_rp2350_arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao-rp2350-c-cpp-sdk": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting-started-xiao-rp2350": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_RP2350_Pin_Multiplexing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_rp2350_with_platform_io": [
    "cn",
    "en",
    "ja"
  ],
  "/Seeeduino-XIAO-TinyML": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-XIAO-by-Nanase": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-XIAO-CircuitPython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-XIAO-TinyUSB": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-XIAO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-XIAO-DAPLink": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-SAMD21-MicroPython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-SAMD21-Zephyr-RTOS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO-SPI-Communication-Interface": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_samd21_with_platform_io": [
    "cn",
    "en",
    "ja"
  ],
  "/SeeedStudio_XIAO_Series_Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_topic_page": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_espnow": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XIAO_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2_channel_wifi_ac_energy_meter": [
    "en",
    "ja"
  ],
  "/2_channel_wifi_ac_relay": [
    "en",
    "ja"
  ],
  "/6_channel_wifi_relay": [
    "en",
    "ja"
  ],
  "/relay_add_on_module_for_xiao": [
    "en",
    "ja"
  ],
  "/getting_started_with_rs485_vision_ai_cam": [
    "en",
    "ja"
  ],
  "/xiao_075inch_epaper_panel_arduino": [
    "en",
    "ja"
  ],
  "/xiao_075inch_epaper_panel": [
    "en",
    "ja"
  ],
  "/Driver_for_Seeeduino": [
    "en",
    "ja"
  ],
  "/FM_Receiver": [
    "en",
    "ja"
  ],
  "/grove-sgp41-with-aht20": [
    "en",
    "ja"
  ],
  "/Getting_Started_with_Seeeduino": [
    "en",
    "ja"
  ],
  "/Grove_IoT_Starter_Kits_Powered_by_AWS": [
    "en",
    "ja"
  ],
  "/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "en",
    "ja"
  ],
  "/SeeedStudio-GD32-RISC-V-Dev-Board": [
    "en",
    "ja"
  ],
  "/Seeeduino": [
    "en",
    "ja"
  ],
  "/Seeeduino_V2.2": [
    "en",
    "ja"
  ],
  "/Seeeduino_v2.21": [
    "en",
    "ja"
  ],
  "/Seeeduino_V2.2_Atmega-168P": [
    "en",
    "ja"
  ],
  "/Seeeduino_v3.0": [
    "en",
    "ja"
  ],
  "/Seeeduino_v4.0": [
    "en",
    "ja"
  ],
  "/Seeeduino_v4.2": [
    "en",
    "ja"
  ],
  "/Seeeduino-Stalker_v3": [
    "en",
    "ja"
  ],
  "/Seeeduino_Stalker": [
    "en",
    "ja"
  ],
  "/Seeeduino_Stalker_v1.0": [
    "en",
    "ja"
  ],
  "/Seeeduino_Stalker_v2.3": [
    "en",
    "ja"
  ],
  "/Seeeduino_Stalker_V3-Waterproof_Solar_Kit": [
    "en",
    "ja"
  ],
  "/Seeeduino_Stalker_V3.1": [
    "en",
    "ja"
  ],
  "/Seeeduino_Stalker_v3_enclosure": [
    "en",
    "ja"
  ],
  "/Seeeduino-Cortex-M0": [
    "en",
    "ja"
  ],
  "/Seeeduino-Crypto-ATmega4809-ECC608": [
    "en",
    "ja"
  ],
  "/Seeeduino-Nano": [
    "en",
    "ja"
  ],
  "/Seeeduino_ADK_Main_Board": [
    "en",
    "ja"
  ],
  "/Seeeduino_Arch": [
    "en",
    "ja"
  ],
  "/Seeeduino_Arch_V1.0": [
    "en",
    "ja"
  ],
  "/Seeeduino_Buying_Guide": [
    "en",
    "ja"
  ],
  "/Seeeduino_Cloud": [
    "en",
    "ja"
  ],
  "/Seeeduino_Ethernet": [
    "en",
    "ja"
  ],
  "/Seeeduino_GPRS": [
    "en",
    "ja"
  ],
  "/Seeeduino_Lite": [
    "en",
    "ja"
  ],
  "/Seeeduino_LoRAWAN": [
    "en",
    "ja"
  ],
  "/Seeeduino_Lotus": [
    "en",
    "ja"
  ],
  "/Seeeduino_Lotus_Cortex-M0-": [
    "en",
    "ja"
  ],
  "/Seeeduino_Mega": [
    "en",
    "ja"
  ],
  "/Seeeduino_Mega_Protoshield_Kit": [
    "en",
    "ja"
  ],
  "/Seeed_Arduino_Boards": [
    "en",
    "ja"
  ],
  "/iot_botton_connect_to_esphome": [
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/Accessories/Industrial-Grade-Optical-Rain-Gauge-RG-15": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/Accessories/Optical-Rain-Gauge-RG-9": [
    "cn",
    "en",
    "ja"
  ],
  "/develop_an_industrial_lorawan_sensor": [
    "en",
    "ja"
  ],
  "/home_assistant_with_sensecap_lorawan_sensors": [
    "en",
    "ja"
  ],
  "/SenseCAP_introduction": [
    "cn",
    "en",
    "ja"
  ],
  "/select_lorawan_network": [
    "en",
    "ja"
  ],
  "/get_started_with_lorawan_tracker": [
    "cn",
    "en",
    "ja"
  ],
  "/open_source_lorawan": [
    "cn",
    "en",
    "ja"
  ],
  "/t1000_e_arduino_examples": [
    "cn",
    "en",
    "ja"
  ],
  "/tracker_at_command": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger": [
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger": [
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger": [
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger": [
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger": [
    "en",
    "ja"
  ],
  "/SenseCAP_Decoder": [
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_Home_Assistant": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_LoRa": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_LoRaWAN": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_Matter": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_ChatGPT": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_Single_Channel_Gateway": [
    "cn",
    "en",
    "ja"
  ],
  "/sensecap_indicator_project": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_BLE": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_Button": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_LoRa": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_Wi-Fi": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_Buzzer": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_CO2": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_Grove_ADC": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_Grove_IIC": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_MicroSD": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_tVOC": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_Dive_into_the_Hardware": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_How_to_Create_your_own_UI": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_Arduino": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_Native_Firmware": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_ChatGPT": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_DALL·E": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Indicator_OpenAI_X_Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Data_Logger_Intro": [
    "en",
    "ja"
  ],
  "/SenseCAP_Sensor_Intro": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP-SOLO-CO2-Sensor": [
    "en",
    "ja"
  ],
  "/One-Stop-Model-Training-with-Edge-Impulse": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP-Vision-AI-Get-Started": [
    "cn",
    "en",
    "ja"
  ],
  "/Train-Deploy-AI-Model-A1101": [
    "cn",
    "en",
    "ja"
  ],
  "/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101": [
    "cn",
    "en",
    "ja"
  ],
  "/sensecap_a1102": [
    "cn",
    "en",
    "ja"
  ],
  "/train_ai_with_a1102": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_LoRaWAN_S210X_Series_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_S2107": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction": [
    "cn",
    "en",
    "ja"
  ],
  "/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_ONE_weather_sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ORCH-S4-Weather-Station": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP-ONE-Compact-Weather-Station-Introduction": [
    "cn",
    "en",
    "ja"
  ],
  "/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Industrial-ph-Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_probes_intro": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/RS485_750cm_Ultrasonic_Sensor-1": [
    "cn",
    "en",
    "ja"
  ],
  "/RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_Sensor_Probes_Product_Catalogue": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Soil-Moisture-Temperature-EC-Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Soil-Moisture-Temperature-Sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/total_solar_radiation_sensor": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Water-Leak-Detector": [
    "cn",
    "en",
    "ja"
  ],
  "/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger": [
    "en",
    "ja"
  ],
  "/list_of_supported_grove_n_adding_more": [
    "en",
    "ja"
  ],
  "/SenseCAP_Builder_build_LoRaWAN_Sensors": [
    "en",
    "ja"
  ],
  "/get_started_with_t1000_p": [
    "en",
    "ja"
  ],
  "/faq_for_SenseCAP_T1000": [
    "cn",
    "en",
    "ja"
  ],
  "/fm_release_for_SenseCAP_T1000": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_Tracker_AWS": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Helium": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_Tracker_Loriot": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_TTN": [
    "cn",
    "en",
    "ja"
  ],
  "/ttn_mapper_for_SenseCAP_T1000": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_Tracker_Akenza": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Datacake_TTS": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_InfluxDB_TTS": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Qubitro_TTS": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Wialon": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_TagoIO_TTS": [
    "cn",
    "en",
    "ja"
  ],
  "/thingsboard_integrated": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_trackpac": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Ubidots_Helium": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Ubidots_TTS": [
    "cn",
    "en",
    "ja"
  ],
  "/location_lambda_code": [
    "cn",
    "en",
    "ja"
  ],
  "/sensecap_t1000_tracker": [
    "cn",
    "en",
    "ja"
  ],
  "/SenseCAP_T1000_tracker/Introduction": [
    "cn",
    "en",
    "ja"
  ],
  "/bluetooth_beacon_for_SenseCAP_Traker": [
    "cn",
    "en",
    "ja"
  ],
  "/Get_Started_with_SenseCAP_T1000_tracker": [
    "cn",
    "en",
    "ja"
  ],
  "/IPS_For_SenseCAP_T1000_Traker": [
    "cn",
    "en",
    "ja"
  ],
  "/T1000_payload": [
    "cn",
    "en",
    "ja"
  ],
  "/Tracker_WiFi_Geolocation": [
    "cn",
    "en",
    "ja"
  ],
  "/training_model_for_watcher": [
    "cn",
    "en",
    "ja"
  ],
  "/use_case": [
    "cn",
    "en",
    "ja"
  ],
  "/device_network_setup": [
    "en",
    "ja"
  ],
  "/flash_watcher_agent_firmware": [
    "en",
    "ja"
  ],
  "/watcher_web_control_panel": [
    "en",
    "ja"
  ],
  "/watcher_software_framework": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_function_module_development_guide": [
    "cn",
    "en",
    "ja"
  ],
  "/build_watcher_development_environment": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_ui_integration_guide": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_to_node_red": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_ifttt": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_kafka": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_open_interpreter": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_p5js": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_telegram": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_twilio": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_discord": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_mongodb": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_node_red_to_whatsapp": [
    "cn",
    "en",
    "ja"
  ],
  "/integrate_watcher_to_ha": [
    "cn",
    "en",
    "ja"
  ],
  "/uart_output": [
    "cn",
    "en",
    "ja"
  ],
  "/getting_started_with_watcher_task": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_hardware_overview": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_operation_guideline": [
    "cn",
    "en",
    "ja"
  ],
  "/getting_started_with_watcher": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_price": [
    "cn",
    "en",
    "ja"
  ],
  "/sensecap_app_introduction": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_local_deploy": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher_software_service_framework": [
    "cn",
    "en",
    "ja"
  ],
  "/watcher": [
    "cn",
    "en",
    "ja"
  ],
  "/wio_tracker_for_sidewalk": [
    "en",
    "ja"
  ],
  "/flash_to_wio_tracker": [
    "en",
    "ja"
  ],
  "/Wio": [
    "en",
    "ja"
  ],
  "/Wio_Link": [
    "en",
    "ja"
  ],
  "/Wio_Link_Bootcamp_Kit": [
    "en",
    "ja"
  ],
  "/Wio_Link_Deluxe_Kit": [
    "en",
    "ja"
  ],
  "/Wio_Link_Deluxe_Plus_Kit": [
    "en",
    "ja"
  ],
  "/Wio_Link_Environment_Kit": [
    "en",
    "ja"
  ],
  "/Wio_Link_Event_Kit": [
    "en",
    "ja"
  ],
  "/Wio_Link_Starter_Kit": [
    "en",
    "ja"
  ],
  "/Grove-Shield-for-Wio-Lite": [
    "en",
    "ja"
  ],
  "/Grove_Base_Shield_for_NodeMCU_V1.0": [
    "en",
    "ja"
  ],
  "/Wio-Lite-AI-Getting-Started": [
    "en",
    "ja"
  ],
  "/Wio-Lite-MG126": [
    "en",
    "ja"
  ],
  "/Wio-Lite-W600": [
    "en",
    "ja"
  ],
  "/Wio_Lite_RISC_V_GD32VF103_with_ESP8266": [
    "en",
    "ja"
  ],
  "/Wio_Node": [
    "en",
    "ja"
  ],
  "/Use_MQTT_to_remotely_light_up_LED_lights": [
    "en",
    "ja"
  ],
  "/Use_Socket_to_connect_to_the_forum": [
    "en",
    "ja"
  ],
  "/Wireless-desktop-atmosphere-lamp": [
    "en",
    "ja"
  ],
  "/Wireless-Fall-Detection-Device": [
    "en",
    "ja"
  ],
  "/LAN_Communications": [
    "en",
    "ja"
  ],
  "/Wio-RP2040-with-Arduino-WIFI": [
    "en",
    "ja"
  ],
  "/Wio_RP2040_mini_Dev_Board-Onboard_Wifi": [
    "en",
    "ja"
  ],
  "/Wio_RP2040_Module_Build-in_Wireless_2.4G": [
    "en",
    "ja"
  ],
  "/Grove_Starter_Kit_for_Wio_LTE": [
    "en",
    "ja"
  ],
  "/LTE_Cat_1_Pi_HAT": [
    "en",
    "ja"
  ],
  "/Wio-Extension-RTC": [
    "en",
    "ja"
  ],
  "/wio_gps_board": [
    "en",
    "ja"
  ],
  "/Wio_LTE_Cat.1": [
    "en",
    "ja"
  ],
  "/Wio_Tracker": [
    "en",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core": [
    "cn",
    "en",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "ja"
  ],
  "/CyberDeck_Wio-Terminal": [
    "cn",
    "en",
    "ja"
  ],
  "/Get-Started-with-Wio-Terminal-and-Wappsto-IoT": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Azure-IOT": [
    "cn",
    "en",
    "ja"
  ],
  "/AIoTs_GPS_state_tester": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-1": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-2": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-3": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-4": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-5": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-6": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Gesture-Recognition": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-TFLM-1": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-TFLM-2": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-TFLM-3": [
    "cn",
    "en",
    "ja"
  ],
  "/ArduPy-LCD": [
    "cn",
    "en",
    "ja"
  ],
  "/ArduPy-Libraries": [
    "cn",
    "en",
    "ja"
  ],
  "/ArduPy": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Audio-GUI": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Audio-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Audio-Play-Record": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Battery-Chassis": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Chassis-Battery_650mAh": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Ethernet": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915": [
    "cn",
    "en",
    "ja"
  ],
  "/BLE-ibeacon-using-Wio-terminal": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-terminal-BLE-introduction": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Bluetooth-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Web-Bluetooth": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Buttons": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Buzzer": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Switch": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IMU-Basic": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IMU-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IMU-Tapping": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Infrared-Emitter": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Grove": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IO-Analog": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IO-Digital": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IO-I2C": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IO-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-IO-SPI": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Anti-aliased-Fonts": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-APIs": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Basic": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Fonts": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Graphics": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Histogram": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Linecharts": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Loading-Image": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LCD-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-LVGL": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Light": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Mic": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-RTC": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-FS-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-FS-ReadWrite": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Advanced-Wi-Fi": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Network-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Wi-Fi": [
    "cn",
    "en",
    "ja"
  ],
  "/Introduction_to_Artificial_Intelligence_for_Makers": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML-Kit-Course": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-TinyML": [
    "cn",
    "en",
    "ja"
  ],
  "/Software-FreeRTOS": [
    "cn",
    "en",
    "ja"
  ],
  "/Azure_IoT_CC": [
    "cn",
    "en",
    "ja"
  ],
  "/Barometric-Pressure-sensor-using-the-Wio-terminal": [
    "cn",
    "en",
    "ja"
  ],
  "/Blynk-wireless-OTA-functionality-to-Wio-Terminal": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Blynk": [
    "cn",
    "en",
    "ja"
  ],
  "/Edge-Impulse-Tuner": [
    "cn",
    "en",
    "ja"
  ],
  "/Getting_started_wizard": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-8720-dev": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Displaying-Gyro": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Displaying-Photos": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Firmware": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-HMI": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Interactive-Face": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Reading-COVID19": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Reading-Github": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Sound-Meter": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Storting-Analog-Data": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Thermal-Camera": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-DAPLink": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-HMI-Usermode-SDK": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Reading-Raspberry-Pi": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-Keyboard": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-MIDI": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-Mouse": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBH-Keyboard": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBH-Mouse": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBH-Overview": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-USBH-Xbox": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-CircuitPython": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio-Terminal-Getting-Started": [
    "en",
    "ja"
  ],
  "/wio_terminal_faq": [
    "cn",
    "en",
    "ja"
  ],
  "/Wio_Terminal_Intro": [
    "cn",
    "en",
    "ja"
  ],
  "/Sensor_Network": [
    "en",
    "ja"
  ],
  "/Solutions": [
    "en",
    "ja"
  ],
  "/Grove-Buzzer_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Hall_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Infrared_Emiter_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Relay_Spanish.md": [
    "en",
    "es"
  ],
  "/Grove-Speaker_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Vibration_Motor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-16x2_LCD_Series_Spanish": [
    "en",
    "es"
  ],
  "/Grove-4-Digit_Display_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Rotary_Angle_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Chainable_RGB_LED_Spanish": [
    "en",
    "es"
  ],
  "/Grove-LED_Bar_Spanish": [
    "en",
    "es"
  ],
  "/Grove-RGB_LED_Stick-10-WS2813_Mini_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Button_Spanish": [
    "en",
    "es"
  ],
  "/Grove-LED_Button_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Magnetic_Switch_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Switch-P_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Thumb_Joystick_Spanish": [
    "en",
    "es"
  ],
  "/Grove-3-Axis_Digital_Accelerometer": [
    "en",
    "es"
  ],
  "/Grove-Flame_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Infrared_Receiver_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Light_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Line_Finder_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Water_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-PIR_Motion_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Tilit_Switch_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Vibration_Sensor_SW-420_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Ultrasonic_Ranger_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Moisture_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Loudness_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-TemperatureAndHumidity_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Temperature_Sensor_V1.2_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Touch_Sensor_Spanish": [
    "en",
    "es"
  ],
  "/Grove-Beginner-Kit-For-Arduino_Español": [
    "en",
    "es"
  ],
  "/Grove-Creator-Kit-Wiki-landing_Español": [
    "en",
    "es"
  ],
  "/edge_ai_topic": [
    "en",
    "ja"
  ],
  "/home_assistant_topic": [
    "en",
    "ja"
  ],
  "/ha_xiao_esp32": [
    "en",
    "ja"
  ],
  "/home_assistant_sensecap": [
    "en",
    "ja"
  ],
  "/sensecraft_homeassistant_userguide": [
    "en",
    "ja"
  ],
  "/open_source_topic": [
    "en",
    "ja"
  ],
  "/ma_deploy_yolov5": [
    "en",
    "ja"
  ],
  "/ma_deploy_yolov8": [
    "cn",
    "en",
    "ja"
  ],
  "/ma_deploy_yolov8_pose": [
    "cn",
    "en",
    "ja"
  ],
  "/ModelAssistant_Deploy_Overview": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Introduce_Installation": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Introduce_Overview": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Introduce_Quick_Start": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Config": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Datasets": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Export_Overview": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_FOMO": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_Overview": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_PFLD": [
    "en",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_YOLO": [
    "en",
    "ja"
  ],
  "/tinyml_topic": [
    "en",
    "ja"
  ],
  "/sscma": [
    "en",
    "ja"
  ],
  "/tinyml_workshop_course_new": [
    "en",
    "ja"
  ],
  "/train_and_deploy_model": [
    "en",
    "ja"
  ],
  "/topicintroduction": [
    "en",
    "ja"
  ],
  "/Arduino": [
    "en",
    "ja"
  ],
  "/Getting_Started_with_Arduino": [
    "en",
    "ja"
  ],
  "/Grove-Beginner-Kit-for-Arduino-education-pack": [
    "en",
    "ja"
  ],
  "/Grove-Beginner-Kit-for-Arduino-Upverter-Guide": [
    "en",
    "ja"
  ],
  "/Grove-Beginner-Kit-For-Arduino": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove_Beginner_Kit_for_Arduino": [
    "en",
    "ja"
  ],
  "/Grove-Creator-Kit-1": [
    "en",
    "ja"
  ],
  "/Grove-Mixer_Pack_V2": [
    "en",
    "ja"
  ],
  "/Grove-Toy_Kit": [
    "en",
    "ja"
  ],
  "/Grove_Indoor_Environment_Kit_for_Edison": [
    "en",
    "ja"
  ],
  "/Grove_Smart_Plant_Care_Kit": [
    "en",
    "ja"
  ],
  "/Grove_Speech_Recognizer_Kit_for_Arduino": [
    "en",
    "ja"
  ],
  "/Grove_Starter_kit_for_Arduino_101": [
    "en",
    "ja"
  ],
  "/Grove_Starter_Kit_Plus": [
    "en",
    "ja"
  ],
  "/Grove_Starter_Kit_v3": [
    "en",
    "ja"
  ],
  "/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "en",
    "ja"
  ],
  "/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "en",
    "ja"
  ],
  "/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible": [
    "en",
    "ja"
  ],
  "/Sidekick_Basic_Kit_for_Arduino_V2": [
    "en",
    "ja"
  ],
  "/Techbox_Tricks": [
    "en",
    "ja"
  ],
  "/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino": [
    "en",
    "ja"
  ],
  "/2.8inch_TFT_Touch_Shield_v2.0": [
    "en",
    "ja"
  ],
  "/4A_Motor_Shield": [
    "en",
    "ja"
  ],
  "/Base_Shield_V2": [
    "en",
    "ja"
  ],
  "/Bluetooth_Shield": [
    "en",
    "ja"
  ],
  "/Bluetooth_Shield_V2": [
    "en",
    "ja"
  ],
  "/Brushless_Motor_Shield_TB6605FTG": [
    "en",
    "ja"
  ],
  "/Camera_Shield": [
    "en",
    "ja"
  ],
  "/CAN-BUS_Shield_V1.2": [
    "en",
    "ja"
  ],
  "/CAN-BUS_Shield_V2.0": [
    "en",
    "ja"
  ],
  "/EL_Shield": [
    "en",
    "ja"
  ],
  "/Energy_Monitor_Shield_V0.9b": [
    "en",
    "ja"
  ],
  "/Energy_Shield": [
    "en",
    "ja"
  ],
  "/Ethernet_Shield": [
    "en",
    "ja"
  ],
  "/Ethernet_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/Ethernet_Shield_V2.0": [
    "en",
    "ja"
  ],
  "/GPRS-Shield": [
    "en",
    "ja"
  ],
  "/GPRS_Shield_v1.0": [
    "en",
    "ja"
  ],
  "/GPRS_Shield_V2.0": [
    "en",
    "ja"
  ],
  "/GPRS_Shield_V3.0": [
    "en",
    "ja"
  ],
  "/Grove-Mega_Shield": [
    "en",
    "ja"
  ],
  "/Grove_Shield_for_Arduino_Nano": [
    "en",
    "ja"
  ],
  "/Motor_Shield": [
    "en",
    "ja"
  ],
  "/Motor_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/Motor_Shield_V2.0": [
    "en",
    "ja"
  ],
  "/Music_Shield": [
    "en",
    "ja"
  ],
  "/Music_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/Music_Shield_V2.2": [
    "en",
    "ja"
  ],
  "/NFC_Shield": [
    "en",
    "ja"
  ],
  "/NFC_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/NFC_Shield_V2.0": [
    "en",
    "ja"
  ],
  "/Protoshield_Kit_for_Arduino": [
    "en",
    "ja"
  ],
  "/Relay_Shield": [
    "en",
    "ja"
  ],
  "/Relay_Shield_V1": [
    "en",
    "ja"
  ],
  "/Relay_Shield_V2": [
    "en",
    "ja"
  ],
  "/Relay_Shield_v3": [
    "en",
    "ja"
  ],
  "/Renbotics_ServoShield_Rev": [
    "en",
    "ja"
  ],
  "/RGBW_Stripe_WireLess_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/RS232_Shield": [
    "en",
    "ja"
  ],
  "/SD_Card_Shield": [
    "en",
    "ja"
  ],
  "/SD_Card_Shield_V3.0": [
    "en",
    "ja"
  ],
  "/SD_Card_shield_V4.0": [
    "en",
    "ja"
  ],
  "/Seeed_BLE_Shield": [
    "en",
    "ja"
  ],
  "/Shield": [
    "en",
    "ja"
  ],
  "/Shield_Bot_V1.1": [
    "en",
    "ja"
  ],
  "/Shield_Bot_V1.2": [
    "en",
    "ja"
  ],
  "/Shield_Introduction": [
    "en",
    "ja"
  ],
  "/Small_e-Paper_Shield": [
    "en",
    "ja"
  ],
  "/Small_e-Paper_Shield_V2": [
    "en",
    "ja"
  ],
  "/Solar_Charger_Shield": [
    "en",
    "ja"
  ],
  "/Solar_Charger_Shield_V2.2": [
    "en",
    "ja"
  ],
  "/Spartan-Edge-Accelerator-Board": [
    "en",
    "ja"
  ],
  "/Starter_Shield_EN": [
    "en",
    "ja"
  ],
  "/TFT_Touch_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/W5500_Ethernet_Shield_v1.0": [
    "en",
    "ja"
  ],
  "/Wifi_Shield": [
    "en",
    "ja"
  ],
  "/Wifi_Shield_Fi250_V1.1": [
    "en",
    "ja"
  ],
  "/Wifi_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/Wifi_Shield_V1.1": [
    "en",
    "ja"
  ],
  "/Wifi_Shield_V1.2": [
    "en",
    "ja"
  ],
  "/Wifi_Shield_V2.0": [
    "en",
    "ja"
  ],
  "/WireLess_Gate_Shield_V1.0": [
    "en",
    "ja"
  ],
  "/Arduino_Common_Error": [
    "en",
    "ja"
  ],
  "/Arduino_Software_I2C_user_guide": [
    "en",
    "ja"
  ],
  "/A_Comparison_of_Different_Grove_Temperature_Sensors": [
    "en",
    "ja"
  ],
  "/A_Handy_Serial_Library": [
    "en",
    "ja"
  ],
  "/Barometer-Selection-Guide": [
    "en",
    "ja"
  ],
  "/Download-Arduino-and-install-Arduino_Driver": [
    "en",
    "ja"
  ],
  "/GPS-Modules-Selection-Guide": [
    "en",
    "ja"
  ],
  "/Guide_to_use_demos_downloaded_from_Seeed-s_Github": [
    "en",
    "ja"
  ],
  "/How-to-Choose-A-Gas-Sensor": [
    "en",
    "ja"
  ],
  "/How_To_Choose_The_Right_Cable": [
    "en",
    "ja"
  ],
  "/How_to_detect_finger_touch": [
    "en",
    "ja"
  ],
  "/How_to_install_Arduino_Library": [
    "en",
    "ja"
  ],
  "/How_to_use_and_write_a_library": [
    "en",
    "ja"
  ],
  "/How_To_Use_Sketchbook": [
    "en",
    "ja"
  ],
  "/Seeed_Relay_Page": [
    "en",
    "ja"
  ],
  "/Sketchbook_of_Sidekick_Advanced_Kit": [
    "en",
    "ja"
  ],
  "/Software-Serial": [
    "en",
    "ja"
  ],
  "/Software-SPI": [
    "en",
    "ja"
  ],
  "/Software-Static-Library": [
    "en",
    "ja"
  ],
  "/Upload_Code": [
    "en",
    "ja"
  ],
  "/Use_External_Editor": [
    "en",
    "ja"
  ],
  "/IR_Remote": [
    "en",
    "ja"
  ],
  "/Joystick_Control_RGB_Led": [
    "en",
    "ja"
  ],
  "/LightView_201k_Digital_display_module": [
    "en",
    "ja"
  ],
  "/Light_Sensor_and_LED_Bar": [
    "en",
    "ja"
  ],
  "/Project_Eight-Thermostat": [
    "en",
    "ja"
  ],
  "/Project_Five-Relay_Control": [
    "en",
    "ja"
  ],
  "/Project_Four-Noise_Maker": [
    "en",
    "ja"
  ],
  "/Project_One-Blink": [
    "en",
    "ja"
  ],
  "/Project_One-Double_Blink": [
    "en",
    "ja"
  ],
  "/Project_Seven-Temperature": [
    "en",
    "ja"
  ],
  "/Project_Six-LCD_Demonstration": [
    "en",
    "ja"
  ],
  "/Project_Three-Analog_Input_v1b": [
    "en",
    "ja"
  ],
  "/Project_Two-Digital_Input": [
    "en",
    "ja"
  ],
  "/Project_Two-Digital_Input_v1.0b": [
    "en",
    "ja"
  ],
  "/Relay_Control_LED": [
    "en",
    "ja"
  ],
  "/RFID_Control_LED": [
    "en",
    "ja"
  ],
  "/Sound_Sensor_And_LED_Bar": [
    "en",
    "ja"
  ],
  "/temperature_sensor": [
    "en",
    "ja"
  ],
  "/Arduino-AWS-IOT-Bridge": [
    "en",
    "ja"
  ],
  "/Arduino-DAPLink": [
    "en",
    "ja"
  ],
  "/Flashing-Arduino-Bootloader-DAPLink": [
    "en",
    "ja"
  ],
  "/I2C_And_I2C_Address_of_Seeed_Product": [
    "en",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Firmata": [
    "en",
    "ja"
  ],
  "/Seeed_Arduino_Serial": [
    "en",
    "ja"
  ],
  "/Software-SWD": [
    "en",
    "ja"
  ],
  "/Suli": [
    "en",
    "ja"
  ],
  "/Xadow_IO_pin_mapping": [
    "en",
    "ja"
  ],
  "/Codecraft_Grove_Compatible_List": [
    "en",
    "ja"
  ],
  "/Guide_for_Codecraft_using_Arduino": [
    "en",
    "ja"
  ],
  "/Compiling_MicroPython_for_embedded_devices": [
    "en",
    "ja"
  ],
  "/Software-PlatformIO": [
    "en",
    "ja"
  ],
  "/Bitcar": [
    "en",
    "ja"
  ],
  "/BitMaker": [
    "en",
    "ja"
  ],
  "/BitMaker_lite": [
    "en",
    "ja"
  ],
  "/BitPlayer": [
    "en",
    "ja"
  ],
  "/BitWear": [
    "en",
    "ja"
  ],
  "/Grove_Inventor_Kit_for_microbit": [
    "en",
    "ja"
  ],
  "/microbit_wiki_page": [
    "en",
    "ja"
  ],
  "/Microsoft_MakeCode": [
    "en",
    "ja"
  ],
  "/popularplatforms": [
    "en",
    "ja"
  ],
  "/Raspberry_PI_Bplus_Case": [
    "en",
    "ja"
  ],
  "/Skeleton_box_for_Rasberry_Pi": [
    "en",
    "ja"
  ],
  "/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit": [
    "en",
    "ja"
  ],
  "/Raspberry_Pi_as_a_NAS": [
    "en",
    "ja"
  ],
  "/Cooler_Device": [
    "en",
    "ja"
  ],
  "/Grove_Base_Kit_for_Raspberry_Pi": [
    "en",
    "ja"
  ],
  "/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi": [
    "en",
    "ja"
  ],
  "/LoRa_LoRaWan_Gateway_Kit": [
    "en",
    "ja"
  ],
  "/Raspberry_Pi_3_Model_B": [
    "en",
    "ja"
  ],
  "/remote_connect": [
    "en",
    "ja"
  ],
  "/Raspberry_pi_CM4_update_eeprom": [
    "en",
    "ja"
  ],
  "/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130": [
    "en",
    "ja"
  ],
  "/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030": [
    "en",
    "ja"
  ],
  "/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115": [
    "en",
    "ja"
  ],
  "/GrovePi_Plus": [
    "en",
    "ja"
  ],
  "/Grove_AI_HAT_for_Edge_Computing": [
    "en",
    "ja"
  ],
  "/Grove_Base_HAT": [
    "en",
    "ja"
  ],
  "/Grove_Base_Hat_for_Raspberry_Pi": [
    "cn",
    "en",
    "ja"
  ],
  "/Grove_Base_Hat_for_Raspberry_Pi_Zero": [
    "en",
    "ja"
  ],
  "/High_Accuracy_Pi_RTC-DS3231": [
    "en",
    "ja"
  ],
  "/Pi_RTC-DS1307": [
    "en",
    "ja"
  ],
  "/Raspberry_Pi_Breakout_Board_v1.0": [
    "en",
    "ja"
  ],
  "/Raspberry_Pi_Motor_Driver_Board_v1.0": [
    "en",
    "ja"
  ],
  "/Raspberry_Pi_R232_Board_v1.0": [
    "en",
    "ja"
  ],
  "/Raspberry_Pi_Relay_Board_v1.0": [
    "en",
    "ja"
  ],
  "/RS-485_Shield_for_Raspberry_Pi": [
    "en",
    "ja"
  ],
  "/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi": [
    "en",
    "ja"
  ],
  "/Raspberry_Pi": [
    "en",
    "ja"
  ],
  "/CN/TinyML/ModelAssistant/Deploy/Deploy_YOLOv8_Pose": [
    "cn",
    "en"
  ]
};

  // 状态管理变量
  let isInitialized = false;
  let retryCount = 0;
  const MAX_RETRIES = 3; // 减少重试次数
  const RETRY_INTERVAL = 200;
  
  // 诊断变量
  let injectionCount = 0;
  let removalCount = 0;
  let lastRemovalReason = '';
  let watchdogInterval = null;

  function getCurrentLanguageAndPath() {
    const currentPath = window.location.pathname;
    let detectedLanguage = 'en';
    let basePath = currentPath;
    
    if (currentPath.startsWith('/cn/')) {
      detectedLanguage = 'cn';
      basePath = currentPath.replace('/cn', '') || '/';
    } else if (currentPath.startsWith('/ja/')) {
      detectedLanguage = 'ja';
      basePath = currentPath.replace('/ja', '') || '/';
    } else if (currentPath.startsWith('/es/')) {
      detectedLanguage = 'es';
      basePath = currentPath.replace('/es', '') || '/';
    }
    
    if (!basePath.startsWith('/')) {
      basePath = '/' + basePath;
    }
    
    log('路径解析:', { currentPath, detectedLanguage, basePath });
    return { currentLanguage: detectedLanguage, basePath };
  }

  function findAvailableLanguages(basePath, currentLanguage) {
    const pathsToTry = [
      basePath,
      basePath.replace(/\/$/, ''),
      basePath + (basePath.endsWith('/') ? '' : '/'),
    ];
    
    for (const tryPath of pathsToTry) {
      if (languageMapping[tryPath]) {
        const availableLanguages = languageMapping[tryPath];
        log('🌐 找到多语言页面 ' + tryPath + ':', availableLanguages);
        return availableLanguages;
      }
    }
    
    log('ℹ️ 单语言页面: ' + basePath);
    return [currentLanguage];
  }

  function createLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) {
      log('⚪ 单语言，跳过切换器');
      return null;
    }

    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3 };
    const sortedLanguages = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });
    
    const switcherHTML = [
      '<div class="navbar__item dropdown dropdown--hoverable navbar-language-switcher navbar_dorp_items" data-injected-at="' + Date.now() + '">',
      '  <a href="#" class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label">' + currentLangConfig.label + '</span>',
      '    <svg width="8" height="8" class="lang-arrow" aria-hidden="true">',
      '      <path d="M1 2l3 3 3-3" stroke="currentColor" stroke-width="1.5" fill="none"></path>',
      '    </svg>',
      '  </a>',
      '  <ul class="dropdown__menu">',
      sortedLanguages.map(langCode => {
        const lang = languages[langCode];
        const langPath = lang.prefix + basePath;
        const isActive = langCode === currentLanguage;
        
        return [
          '    <li>',
          '      <a class="dropdown__link ' + (isActive ? 'dropdown__link--active' : '') + '"',
          '         href="' + langPath + '"',
          '         title="切换到 ' + lang.label + '"',
          (isActive ? '         aria-current="page">' : '>'),
          '        <span class="lang-flag">' + lang.flag + '</span>',
          '        <span class="lang-label">' + lang.label + '</span>',
          (isActive ? '        <span class="lang-check">✓</span>' : ''),
          '      </a>',
          '    </li>'
        ].join('\n');
      }).join('\n'),
      '  </ul>',
      '</div>'
    ].join('\n');
    
    log('🎨 创建切换器HTML');
    return switcherHTML;
  }

  function injectLanguageSwitcher() {
    const startTime = Date.now();
    injectionCount++;
    
    log('🔧 开始注入切换器... (#' + injectionCount + ', 尝试 ' + (retryCount + 1) + '/' + MAX_RETRIES + ')');
    
    let navbar = document.querySelector('.navbar__items--right') || 
                 document.querySelector('.navbar__items') ||
                 document.querySelector('.navbar');
    
    if (!navbar) {
      log('⏳ 导航栏未找到');
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(injectLanguageSwitcher, RETRY_INTERVAL);
        return;
      } else {
        log('❌ 达到最大重试次数，放弃注入');
        return;
      }
    }

    // 严格检查是否已存在
    const existingSwitcher = document.querySelector('.navbar-language-switcher');
    if (existingSwitcher) {
      const injectedAt = existingSwitcher.getAttribute('data-injected-at');
      log('⚠️ 切换器已存在，注入时间: ' + (injectedAt || '未知'));
      return;
    }

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    
    try {
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      const switcherHTML = createLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      
      if (switcherHTML) {
        let insertPosition = null;
        const positionSelectors = [
          'a[href*="seeedstudio.com"]',
          '.header-github-link', 
          '.navbar__item:last-child'
        ];
        
        for (const selector of positionSelectors) {
          const element = navbar.querySelector(selector);
          if (element) {
            insertPosition = element;
            break;
          }
        }
        
        if (insertPosition) {
          insertPosition.insertAdjacentHTML('beforebegin', switcherHTML);
          log('✅ 插入到 ' + insertPosition.tagName + ' 前面');
        } else {
          navbar.insertAdjacentHTML('beforeend', switcherHTML);
          log('✅ 插入到导航栏末尾');
        }
        
        // 防止默认链接行为
        const switcherElement = navbar.querySelector('.navbar-language-switcher');
        if (switcherElement) {
          const switcherButton = switcherElement.querySelector('.navbar__link');
          if (switcherButton) {
            switcherButton.addEventListener('click', function(e) {
              e.preventDefault();
            });
          }
        }
        
        const injectTime = Date.now() - startTime;
        log('🎉 切换器注入成功! (#' + injectionCount + ', 用时' + injectTime + 'ms)');
        log('🌐 支持语言: ' + availableLanguages.join(', '));
        
        retryCount = 0;
        
      } else {
        log('⚪ 单语言页面，无需切换器');
      }
    } catch (error) {
      log('❌ 注入失败:', error);
      
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(injectLanguageSwitcher, RETRY_INTERVAL);
      }
    }
  }

  // 看门狗：定期检查切换器是否还存在
  function startWatchdog() {
    if (watchdogInterval) {
      clearInterval(watchdogInterval);
    }
    
    watchdogInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      
      // 如果应该有切换器但不存在，重新注入
      if (availableLanguages.length > 1) {
        const existingSwitcher = document.querySelector('.navbar-language-switcher');
        if (!existingSwitcher) {
          log('🚨 看门狗发现切换器丢失，重新注入...');
          injectLanguageSwitcher();
        }
      }
    }, 2000); // 每2秒检查一次
    
    log('🐕 看门狗启动，每2秒检查一次');
  }

  // 极简化的路由监听 - 只监听最关键的事件
  function observeRouteChanges() {
    let currentPathname = location.pathname;
    
    function handleRouteChange(source) {
      if (location.pathname !== currentPathname) {
        log('🔄 路由变化 [' + source + ']: ' + currentPathname + ' -> ' + location.pathname);
        currentPathname = location.pathname;
        
        const oldSwitcher = document.querySelector('.navbar-language-switcher');
        if (oldSwitcher) {
          removalCount++;
          lastRemovalReason = source;
          const injectedAt = oldSwitcher.getAttribute('data-injected-at');
          const lifespan = injectedAt ? (Date.now() - parseInt(injectedAt)) : '未知';
          
          oldSwitcher.remove();
          log('🗑️ 移除旧切换器 (#' + removalCount + ', 存在时间: ' + lifespan + 'ms, 原因: ' + source + ')');
        }
        
        retryCount = 0;
        setTimeout(injectLanguageSwitcher, 100);
      }
    }

    // 只监听真正的路由变化
    window.addEventListener('popstate', function() {
      handleRouteChange('popstate');
    });
    
    // 禁用MutationObserver，因为它太敏感了
    log('⚠️ 禁用MutationObserver，只监听popstate事件');
  }

  function init() {
    if (isInitialized) {
      log('⚠️ 已初始化，跳过');
      return;
    }
    
    log('🚀 初始化诊断版语言切换器...');
    log('📊 包含 ' + Object.keys(languageMapping).length + ' 个多语言页面');
    log('📍 当前页面: ' + location.pathname);
    
    isInitialized = true;
    
    // 启动极简路由监听
    observeRouteChanges();
    
    // 立即注入
    injectLanguageSwitcher();
    
    // 启动看门狗
    setTimeout(startWatchdog, 3000); // 3秒后启动看门狗
    
    // 诊断信息
    setTimeout(function() {
      log('📊 诊断统计:');
      log('   注入次数: ' + injectionCount);
      log('   移除次数: ' + removalCount);
      log('   最后移除原因: ' + (lastRemovalReason || '无'));
      
      const currentSwitcher = document.querySelector('.navbar-language-switcher');
      if (currentSwitcher) {
        const injectedAt = currentSwitcher.getAttribute('data-injected-at');
        const age = injectedAt ? (Date.now() - parseInt(injectedAt)) : '未知';
        log('   当前切换器存在，年龄: ' + age + 'ms');
      } else {
        log('   当前无切换器');
      }
    }, 5000);
  }

  // 立即初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }

})();