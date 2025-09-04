// 语言切换器 - 生产环境优化版本
// 生成时间: 2025-09-03 17:18:56 (北京时间)
// 多语言页面: 1995 个

(function() {
  'use strict';

  const DEBUG = false; // 生产环境关闭调试
  
  function log(...args) {
    if (DEBUG) {
      console.log('🔄 [生产优化版]', new Date().toISOString().slice(11, 23), ...args);
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
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecraft-ai/application/application-for-homeassistant": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/overview": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/sensecraft-ai-main": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection": [
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-training-classification": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/grove-vision-ai-v2-workspace": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/nvidia-jetson-workspace": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-jetson": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-libraries-xiao": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-ai/xiao-esp32s3-workspace": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-app/overview": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-app/tutorials/event-management": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/blockchain-dashboard/dashboard-basics": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/blockchain-dashboard/dashboard-registration": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/blockchain-dashboard/hotspot-registration": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/app-settings": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/deeplink_helium_wallet": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/download-app": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/faq": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/forget-wifi-profile": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-management": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-onboarding": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/remote-reboot": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/sensecap_hotspot_app": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/update_antenna": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/update_hotspot_location": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform-api/appendix/list_of_device_status_ids": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/api/appendix/list_of_error_code": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/api/appendix/list_of_measurement_ids": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/api/appendix/list_of_sensor_types": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/api/http-api/http-api-access-guide": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/api/http-api/quick-start": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/applications/ai-advisor": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/applications/planting-advice": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-fee/sensecraft-cloud-fee": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-fee/sensecraft-data-platform-api-pricing": [
    "cn",
    "en",
    "es"
  ],
  "/cloud/sensecraft-data/sensecraft-data-platform/overview": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/tutorials/dashboard": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/tutorials/data-management": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft-data-platform/tutorials/device-management": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft_hmi_ai_generation": [
    "en",
    "es"
  ],
  "/sensecraft_hmi_canvas": [
    "en",
    "es"
  ],
  "/sensecraft_hmi_gallery": [
    "en",
    "es"
  ],
  "/sensecraft_hmi_overview": [
    "cn",
    "en",
    "es"
  ],
  "/sensecraft_hmi_rss": [
    "en",
    "es"
  ],
  "/sensecraft_hmi_web": [
    "en",
    "es"
  ],
  "/Embedded-World-Seeed-Studio-Presentation-BeagleBone": [
    "cn",
    "en",
    "es"
  ],
  "/Embedded-World-Seeed-Studio-Presentation-Edge-Series": [
    "cn",
    "en",
    "es"
  ],
  "/Embedded-World-Seeed-Studio-Presentation-Jetson-Family": [
    "cn",
    "en",
    "es"
  ],
  "/Embedded-World-Seeed-Studio-Presentation-reComputer": [
    "cn",
    "en",
    "es"
  ],
  "/Embedded-World-Seeed-Studio-Presentation-SenseCAP": [
    "cn",
    "en",
    "es"
  ],
  "/Embedded-World-Seeed-Studio-Presentation-Wio-Series": [
    "cn",
    "en",
    "es"
  ],
  "/Embedded-World-Seeed-Studio-Presentation-XIAO": [
    "cn",
    "en",
    "es"
  ],
  "/community_sourced_projects": [
    "cn",
    "en",
    "es"
  ],
  "/Contribution-Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/full_steps_pull_request": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/quick_pull_request": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Deploy_Page_Locally": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Honorary-Contributors": [
    "cn",
    "en",
    "es"
  ],
  "/How_To_Edit_A_Document": [
    "cn",
    "en",
    "es"
  ],
  "/Scale-up-Your-Creation-with-Fusion": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Things_We_Make": [
    "cn",
    "en",
    "es"
  ],
  "/Galileo_Case": [
    "cn",
    "en",
    "es"
  ],
  "/Service_for_Fusion_PCB": [
    "cn",
    "en",
    "es"
  ],
  "/Starter_bundle_harness_V1": [
    "cn",
    "en",
    "es"
  ],
  "/Unibody_box_for_Galileo_Gen2": [
    "cn",
    "en",
    "es"
  ],
  "/Contributor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BeagleBone_Solutions": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_lite_beagley-ai_chatgpt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BeagleBone-Green-Gateway": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BeagleBone": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BeagleBone_Blue": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Beaglebone_Case": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BeagleBone_Green": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BeagleBone_Green_Wireless": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BeagleBone_Green_HDMI_Cape": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_Cape_for_BeagleBone_v2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Cape_for_BeagleBone_Series": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Motor_Bridge_Cape_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Skeleton_box_for_Beaglebone": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_Kit_for_BeagleBone_Green": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edgebox-ESP-100-Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edge_series_Intro": [
    "cn",
    "en",
    "es",
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
  "/multiple_cameras_with_jetson": [
    "cn",
    "en",
    "es"
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
  "/yolov11_with_depth_camera": [
    "cn",
    "en",
    "es"
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
  "/install_torch_on_recomputer": [
    "cn",
    "en",
    "es"
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
  "/control_motor_by_voice_llm_on_jetson": [
    "en",
    "es"
  ],
  "/deploy_deepseek_on_jetson_with_mlc": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/deploy_dia_on_jetson": [
    "cn",
    "en",
    "es"
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
  "/deploy_gptoss_on_jetson": [
    "en",
    "es"
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
    "es",
    "ja"
  ],
  "/Real Time Subtitle Recoder on Nvidia Jetson": [
    "cn",
    "en",
    "es",
    "ja"
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
    "es",
    "ja"
  ],
  "/recomputer_mini_j401_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_jetson_robotics_j401_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/create_backup_and_restore_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/differences_of_l4t_between_seeed_and_nvidia": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/enable_spi_interface_on_jetsonnano": [
    "cn",
    "en",
    "es"
  ],
  "/get_the_system_log_of_recomputer_j30_and_j40": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/how_to_build_the_source_code_project_for_seeed_jetson_bsp": [
    "en",
    "es"
  ],
  "/upgrade_software_packages_for_jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/issue_of_jetpack5_failing_to_boot_from_certain_ssd": [
    "en",
    "es"
  ],
  "/Jetson_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/overview_of_the_relationship_between_jetpack_and_jetson": [
    "cn",
    "en",
    "es"
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
    "es",
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
  "/flash/jetpack_to_selected_product": [
    "cn",
    "en",
    "es"
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
    "es",
    "ja"
  ],
  "/recomputer_j401b_interfaces_usage": [
    "cn",
    "en",
    "es",
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
  "/recomputer_robotics_j401_getting_started": [
    "en",
    "es"
  ],
  "/recomputer_robotics_j401_hardware_interfaces_usage": [
    "en",
    "es"
  ],
  "/recomputer_jetson_super_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_jetson_super_hardware_interfaces_usage": [
    "cn",
    "en",
    "es"
  ],
  "/recomputer_jetson_super_performance": [
    "cn",
    "en",
    "es"
  ],
  "/replace_the_thermal_conductive_paste_for_recomputer": [
    "cn",
    "en",
    "es"
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
    "es",
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
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-STM32MP135D": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-STM32MP157C": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SEEED-SOM-STM32MP157C": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-AzureIOT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Frigate": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Intel-OpenVINO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-NCS2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Connect-Grove-to-Home-Assistant-ESPHome": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-Home-Assistant-Customize": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86-Home-Assistant": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mender-Client-ODYSSEY-X86": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mender-Server-ODYSSEY-X86": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Coral-Mini-PCIe-Accelerator-x86": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Accessories": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-GPIO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-LTE-Module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BalenaOS-X86-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Jellyfin-on-Docker-Ubuntu-X86": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86-OPNsense": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86-TrueNAS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-Android": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-FreeNAS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-openwrt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Installing-OS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-pfSense": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Updating-Firmware": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Quantum-Mini-Linux-Development-Kit": [
    "cn",
    "en",
    "es",
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
    "es",
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
    "es",
    "ja"
  ],
  "/reComputer_r1000_fin_site_gaphic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reComputer_r1000_fin_top_level_gaphic": [
    "cn",
    "en",
    "es",
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
    "es",
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
    "cn",
    "en",
    "es",
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
  "/firearm_detection_with_frigate_nvr_on_r2000": [
    "en",
    "es"
  ],
  "/r2000_series_frigate_and_home_assistant": [
    "cn",
    "en",
    "es"
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
  "/real-time-ocr": [
    "cn",
    "en",
    "es"
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
    "es",
    "ja"
  ],
  "/reTerminal_ML_Edgeimpulse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_ML_MediaPipe": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reTerminal_ML_TFLite": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/yolov8_on_ai_box_for_fall_climbing_tracking": [
    "cn",
    "en",
    "es"
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
  "/use_docekr_on_recomputer": [
    "cn",
    "en",
    "es"
  ],
  "/use_uv_to_build_package_on_recomputer": [
    "cn",
    "en",
    "es"
  ],
  "/deploy_deepseek_on_raspberry_pi_ai_box": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/distributed_inference_of_deepseek_model_on_raspberrypi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_ai_industrial_r2000_flash_os": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_ai_industrial_r2135_getting_start": [
    "cn",
    "en",
    "es",
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
    "es",
    "ja"
  ],
  "/recomputer_r1100_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1100_configure_system": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recomputer_r1100_flash_os": [
    "cn",
    "en",
    "es",
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
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_on_device_models": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_network_connection": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_hardware_and_specs": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_warranty": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_gimbal_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/gimbal_development_c": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_gimbal_node_red": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_gimbal_hardware_and_specs": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_pid_adjustment": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_develop_with_c_cpp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_develop_with_node-red": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_linux_fundamentals": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/make_the_cpp_program_auto_start_on_boot": [
    "cn",
    "en",
    "es"
  ],
  "/recamera_os_structure": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/recamera_os_version_control": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/real_time_yolo_object_detection_using_recamera_based_on_cpp": [
    "cn",
    "en",
    "es"
  ],
  "/recamera_connects_to_xiao_via_http": [
    "cn",
    "en",
    "es"
  ],
  "/reServer-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reServer-Update-BIOS-Install-Drivers": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal_e10xx_with_arduino": [
    "en",
    "es"
  ],
  "/reterminal_e10xx_with_esphome": [
    "cn",
    "en",
    "es"
  ],
  "/reterminal_e10xx_with_esphome_advanced": [
    "cn",
    "en",
    "es"
  ],
  "/reterminal_e10xx_trmnl": [
    "cn",
    "en",
    "es"
  ],
  "/getting_started_with_reterminal_e1001": [
    "cn",
    "en",
    "es"
  ],
  "/getting_started_with_reterminal_e1002": [
    "cn",
    "en",
    "es"
  ],
  "/reterminal_e10xx_firmware": [
    "cn",
    "en",
    "es"
  ],
  "/reterminal_e10xx_main_page": [
    "cn",
    "en",
    "es"
  ],
  "/Edge_Computing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/robotics_page": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/solution_of_insufficient_space": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Troubleshooting_Installation": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Fan_Pinout": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/not_recognize-onboard-microcontroller": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Power_button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/power_up": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reinstall_the_Original_Windows": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/TPM": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Troubleshooting_BIOS-Related_Issues": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Turn_on_the_Fan": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/change_default_gateway_IP": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/fix_device_ReadOnlyRootFilesystem": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/set_up_Rclone_from_web_UI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/use_a_CM4_witout_eMMC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/R1000_default_username_password": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/black_glue_around_CM4": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Boot_OS_from_USB_flash_drive": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/buzzer-leds-not-work_by_drivers": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/check_Encryption_Chip": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/disable_screen_rotation_on_reTerminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/flashing_os_on_non-eMMC_CM4_replacement": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/flash_different_os_to_emmc": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Incorrect_screen_orientation_on_RPiOS_Bullseye": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/install-ubuntu-on-reterminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Logging_in_OS_using_USB_to_serial_converter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/log_rpios_use_ssh_over_wifi_ethernet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reterminal_black_screen": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/screen_refresh_rate_low": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/troubleshooting-touch-screen-inaccuracy": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/upgrade-rpiOS_installed-packages": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wakeup_reTerminal_LCD_after_sleep": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Program_loss_by_repeated_power": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/battery_charging_considerations": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/bat_5vNo_OUTPUT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/check_battery_voltage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DO_NOT_display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/error_when_use_XIAOnRF52840": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/error_when_using_the_code": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/exp32c3_d9_d6_d8": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/in_other_microcontrollers_or_development_boards": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/limitations_on_the_maximum_cable_length": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/multiple_in_the_same_CAN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/noport_upload_fails": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/not_being_flush": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/pin_definition_error": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reflash_the_bootloader": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/TFT_or_LVGL_program": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/the_maximum_baud_rate": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/troubleshoot_CAN_communication_issues": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/two_TF_card": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/uploading_while_an_error-rp2040": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Getting_Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/License": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LoRa-E5_STM32WLE5JC_Module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LoRa_E5_Dev_Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LoRa_E5_mini": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-WM1110_Dev_Kit_Hardware_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Get_Started_with_Wio-WM1110_Dev_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-WM1110_Dev_Kit/Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/4_layer_sandwich_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262_with_xiao_esp32s3_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_LNS_Chirpstack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_LNS_TTN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_for_lora_sensor_node": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_sx1262_xiao_esp32s3_for_single_channel_gateway": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/change_antenna_path": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/configure_param_for_wio_tracker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_tracker_home_assistant": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/connect_wio_tracker_to_TTN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/development_tutorial_for_Wio-trakcer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/setup_toolchain_for_wio_tracker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_tracker_dual_stack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Get_Started_with_Wio-Trakcer_1110": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Tracker_Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/connect_wio_tracker_to_locator": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/WM1302_module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/WM1302_Pi_HAT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/meshtastic_introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecap_indicator_meshtastic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/get_started_with_meshtastic_solar_node": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/meshtastic_solar_node": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecap_t1000_e": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/t1000_e_intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/get_started_with_meshtastic_wio_tracker_l1": [
    "cn",
    "en",
    "es"
  ],
  "/wio_tracker_l1_node": [
    "cn",
    "en",
    "es"
  ],
  "/flash_meshtastic_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/meshtastic_kit_wio_tracker_1110": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_nrf52840&_wio_SX1262_kit_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/4g_lte_hotspot_on_raspberry_pi_os": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/4g_lte_hat_and_raspberry_pi_router_with_openwrt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/raspberry_pi_4g_lte_hat_qmi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/raspberry_pi_4g_lte_hat_rndis": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ftp_with_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/raspberry_pi_4g_hat_gnss_functionlities": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/raspberry_pi_4g_hat_ecm_mobile_internet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mqtt_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/send_receive_sms_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/tcp_ip_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mender-Client-dual-GbE-CM4": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/OpenWrt-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/OpenWrt-Plex-Media-Server-on-Docker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/FAQs_For_openWrt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry-OpenWrt-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reRouter_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/H28K-install-system": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/H28K_Datasheet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/h68kv2_datasheet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/H68KV2_install_system": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grocy-bookstack-linkstar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/h68k-ha-esphome": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/plex_media_server": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wordpress_linkstar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/linkstar-install-system": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Linkstar_Datasheet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Linkstar_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Rockchip_network_solutions": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/IoT-into-the-wild-contest": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1111-Quick-Start-Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1111-Edge-Impulse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Vision_AI_with_Customizable_Models": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-quickstart": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-Getting-Started": [
    "en",
    "es"
  ],
  "/Connect_AWS_via_helium": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Helium-Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Configuring-Web-APP-Visualization": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Connecting-to-Helium": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Integrate-into-Azure-IoT-Hub": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Integrate_into_Google_Sheets_via_Helium": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_sensecap_node-red": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_SenseCAP_to_Azure_IoT_Central": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_SenseCAP_to_datacake": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_SenseCAP_to_grafana": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_SenseCAP_to_influxdb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_SenseCAP_to_PowerBI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_SenseCAP_to_twilio": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-IMU-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-Light-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-Temp-Humi-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-Vision-AI-Module-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Connecting-to-TTN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/TTN-Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_K1100_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Develop-in-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/K1100_Azure_to_PowerBI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Google-Cloud": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Getting_started_with_Ubidots": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Quick-Start-to-using-Blynk": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Advanced-WiFi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/platformio_wio_e5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/M2_Kit_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/Troubleshooting": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/M2_Local_Console": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_Gateway_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Local_Console": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/flash_opensource_firmware_to_m2_gateway": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_m2_LNS_config": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/quick_start_with_M2_MP": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/traffic_saving_config": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/The-Things-Indoor-Gateway": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_wifi_halow_mini_pcie_module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_wifi_halow_module_for_xiao": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Network": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/damiao_series": [
    "cn",
    "en",
    "es"
  ],
  "/feetech_servo": [
    "cn",
    "en",
    "es"
  ],
  "/hightorque_series": [
    "cn",
    "en",
    "es"
  ],
  "/myactuator_series": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/lerobot_lekiwi": [
    "cn",
    "en",
    "es",
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
  "/lerobot_so100m_new": [
    "cn",
    "en",
    "es"
  ],
  "/lerobot_starai_arm": [
    "cn",
    "en",
    "es"
  ],
  "/sound_follow_robot": [
    "cn",
    "en",
    "es"
  ],
  "/starai_arm_ros_moveit": [
    "cn",
    "en",
    "es"
  ],
  "/csi_camera_on_ros": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/orbbec_gemini2": [
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
  "/orbbec_gemini_335lg": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/orb_slam3_orbbec_gemini2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensing_gmsl_cameras": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/hexfellow_y200": [
    "cn",
    "en",
    "es"
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
  "/slamtec": [
    "cn",
    "en",
    "es"
  ],
  "/control_robotic_arm_via_phospho": [
    "cn",
    "en",
    "es"
  ],
  "/install_isaaclab": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/simulate_soarm101_by_leisaac": [
    "cn",
    "en",
    "es"
  ],
  "/control_px4_with_recomputer_jetson": [
    "en",
    "es"
  ],
  "/object_tracking_with_reComputer_jetson_and_pX4": [
    "en",
    "es"
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
    "es",
    "ja"
  ],
  "/install_ros2_humble": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/isaac_ros_apriltag": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/isaac_ros_visual_slam": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/control_robotic_arm_via_gr00t": [
    "en",
    "es"
  ],
  "/Air602_Firmware_Programming_Manual": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Air602_WiFi_Development_Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Artik": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Eagleye_530s": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Atom_Node": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bees_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BLE_Bee": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BLE_dual_Bee_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bluetooth_Bee": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bluetooth_Bee_Standalone": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bluetooth_Bee_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bluetooth_V4.0_HM_11_BLE_Module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/GPS_Bee_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Bee_Socket": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-XBee_Carrier": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mesh_Bee": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RFbee_V1.1-Wireless_Arduino_compatible_node": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/UartSBee_V3.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/UartSBee_V4": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/UartSBee_v5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Bee": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Bee_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XBee_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/XBee_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/discontinuedproducts": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/4WD_Driver_Platform_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/4WD_Mecanum_Wheel_Robot_Kit_Series": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Atmel_AVRISP_STK500_USB_ISP_Programmer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/AT_Command_Tester": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/AT_Command_Tester_Application": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Basic_Fastener_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BLE_Carbon": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BLE_Micro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BLE_Nitrogen": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bugduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/CUI32Stem": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Danger_Shield_Complete_Kits": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edison_4WD_Auto_Robotic_Platform": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edison_4WD_Auto_Robotic_Platform_2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ESP32_Breakout_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/FST-01": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Fubarino_SD": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove Maker Kit for Intel Joule": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Base_Shield_for_IOIO-OTG": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_BoosterPack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_Shield_for_Photon": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_IoT_Developer_Kit-Microsoft_Azure_Edition": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Shield_for_Intel_Joule": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Hercules_Dual_15A_6-20V_Motor_Controller": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/IoT_Fast_Prototyping_Kit S5D9": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Matrix_Clock": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mbed_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mini_GSM_GPRS_GPS_Breakout_SIM808": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Nose_LED_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Serial_port_bluetooth_module_Master-Slave": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sidekick_Advanced_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sidekick_Basic_Kit_for_TI_LaunchPad": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Stepper_Motor_Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Stepper_Motor_Driver_v2.3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Tiny_BLE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Tricycle_Bot": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/UartSB_Frame": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arduino_Breakout_for_LinkIt_Smart_7688_Duo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Breakout_for_LinkIt_Smart_7688": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Breakout_for_LinkIt_Smart_7688_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Breakout_for_LinkIt_Smart_7688_Duo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_kit_for_LinkIt_Smart7688_Duo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Linkit_Connect_7681": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_Smart_7688": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_Smart_7688_Duo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Starter_Kit_for_LinkIt_ONE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt-ONE-Tutorial---Mini-Servo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Analog_Interface": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Colorful_World": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Hello_World": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Light-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Marquee": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-Push_Button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-SMS_control_the_LED": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIt_ONE_Tutorial-The_Basics": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Secret_Box": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sidekick_Basic_Kit_for_LinkIt_ONE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_Elderly/Navigation/Edge_Computing_4.7": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_Elderly/Navigation/Sensor_Network_4.7": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/NPi-i.MX6ULL-Dev-Board-Linux-SBC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Rainbowduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Rainbowduino_Extension_Board_v0.9b": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Rainbowduino_LED_driver_platform-ATmega328": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Rainbowduino_v3.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_Elderly/Rainbowduino/Rainbow_Cube_Kit_Acrylic_Harness": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How-to-build-a-home-soft-router-and-NAS-With-ReComputer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arduino_IDE_for_RePhone_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Eclipse_IDE_for_RePhone_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/JavaScript_for_RePhone": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Lua_for_RePhone": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RePhone_APIs-Audio": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RePhone": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RePhone_core_2G-Atmel32u4": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Rephone_core_2G-AtmelSAMD21": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RePhone_Geo_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RePhone_Lumi_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RePhone_Strap_Kit_for_Pebble": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Retro Phone Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Google_Assistant": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Core_V2_&_Wio_Link": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Solutions": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Voice_Interaction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Drive_Unit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Mic_Array": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Mic_Array_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_mic_array_v3.0": [
    "en",
    "es"
  ],
  "/ReSpeaker-USB-Mic-Array": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_4_Mic_Array_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Core": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Core_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_Product_Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Skeleton_Bot-4WD_hercules_mobile_robotic_platform": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Skeleton_Box": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Skeleton_Box_10x7_10x10_17x10": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/W600_Module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_1.54_inch_Touchscreen": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_3_Aixs_Accelerometer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Audio": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Barometer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Barometer_BMP180": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Basic_Sensors": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_BLE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_BLE_Dual_Model_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_BLE_Slave": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Breakout": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Buzzer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Compass": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Duino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Edison_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Gesture_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_GPS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_GPS_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Grove_Adaptor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_GSMPlusBLE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_GSM_Breakout": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_IMU_10DOF": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_IMU_6DOF": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_IMU_9DOF": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_LED_5x7": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_LED_5_multiply_7_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_M0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Main_Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Metal_Frame": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Motor_Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Multichannel_Gas_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_NFC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_NFC_tag": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_NFC_v2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Pebble_Time_Adapter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Q_Touch_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_RGB_OLED_96multiply64": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_RTC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Storage": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Tutorial_Acceleration_Detector": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Tutorial_Communicate_via_BLE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Tutorial_Shaking_Shaking": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_UV_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Vibrator_Motor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_Wearable_Kit_For_Edison": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xado_OLED_128multiply64": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_BLE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_GPRS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_GPRS_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_Link": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_Max": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_Max_v1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_Mix": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_Pro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arch_V1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Starter_Kit_for_mbed": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Heart-Sound_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Azure_Sphere_MT3620_Development_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/MT3620_Ethernet_Shield_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/MT3620_Grove_Breakout": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/MT3620_Mini_Dev_Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bracket_for_Infrared_Proximity_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Shield-MaTrix-V0.9b": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/0.5w_Solar_Panel_55x70": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/1.5W_Solar_Panel_81x137": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/1w_Solar_Panel_80x100": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2.5W_Solar_Panel_116x160": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/3.6V_Micro_hydro_generator": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/3W_Solar_Panel_138x160": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/5V-3.3V_Breadboard_Power_Supply": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/5V-3.3V_Breadboard_Power_Supply_v1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Battery_kit_3.7V_520_mAh": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bicycle_Dynamo_With_Bracket-6V_3W": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DC_framework_miniature_solenoid_VL-0063": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DC_framework_solenoid_HCNE1-0520": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DC_framework_solenoid_HCNE1-0630": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Essentials": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Lipo-Rider-Plus": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Lipo_Rider": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Lipo_Rider_Pro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Lipo_Rider_V1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Lipo_Rider_V1.3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Logic_DC_Jack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Qi_Wireless_Charger_Transmitter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Adjustable_DC_DC_Power_Converter_1V-12V-1.5A": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Capacitance_Meter_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RS-232_To_TTL_Conveter-MAX3232IDR": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/1-47inch_lcd_spi_display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/1-69inch_lcd_spi_display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LCD_16-2_Characters-Green_Yellow_back_light": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LCD_8-2_Characters-Blue_back_light": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/125Khz_RFID_module-UART": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/13.56Mhz_RFID_module-IOS-IEC_14443_type_a": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2.8inch-TFT_Touch_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/AVR_USB_Programmer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bus_Pirate_v3_assembled": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Codec-Adaptive_Wireless_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Scream_out_loud-110dBA_fixed_tone_Siren": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/USB_To_Uart_3V3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/USB_To_Uart_5V": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/USB_To_Uart_5V_3V3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/FSM-55": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bluetooth_Multimeter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Dfu-util": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Nano-Development": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Nano-gcc": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Nano-OpenOCD_gdb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Nano-Qemu_gdb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Nano": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Nano_v3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Quad-Beta_HW": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Quad-Building_Firmware": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Quad-Calibration": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Quad": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/DSO_Quad_Manual_by_the_community": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Mini_Soldering_Iron": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Replacement_LCD_Screen_for_DSO_nano": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RF_Explorer_Software": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ai_assistant_getting_started": [
    "en",
    "es"
  ],
  "/Get_Started_with_EcoEye_Embedded_Vision_Camera": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/G1-8_Water_Flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/G1_and_2_inch_Water_Flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/G1_Water_Flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/G3-4_Water_Flow_sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Gear_Stepper_Motor_Driver_Pack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/M11_1.25_Water_flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Photo_interrupter_OS25B10": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Photo_Reflective_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Piezo_Sensor-MiniSense_100": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/PIR_Motion_Sensor_Large_Lens_version": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Ultra_Sonic_range_measurement_module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Water-Flow-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Weight_Sensor_Load_Cell_0-500g": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2KM_Long_Range_RF_link_kits_w_encoder_and_decoder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/315Mhz_remote_relay_switch_kits-2_channels": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/315Mhz_RF_link_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/315MHz_Simple_RF_Link_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/315Mhz_Wireless_car_key_fob_with_key_chain": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/433Mhz_RF_Link_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SDLogger-Open_Hardware_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/WiFi_Serial_Transceiver_Module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wireless_Sensor_Node-Solar_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-16-Channel_PWM_Driver-PCA9685": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-2-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-2-Channel_SPDT_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-2-Coil_Latching_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-4-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-4-Channel_SPDT_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-8-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Buzzer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Chainable_RGB_LED": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Dry-Reed_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-EL_Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Hall_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Haptic_Motor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C-Motor-Driver-L298P": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver-TB6612FNG": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver_V1.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Motor_Driver_V1.3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Infrared_Emitter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_Matrix_Driver_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mini_Fan": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mini_I2C_Motor_Driver_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-MP3-v3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_mp3_v4": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-MP3_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Optocoupler_Relay-M281": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Passive-Buzzer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Recorder_v3.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Serial_MP3_Player": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Servo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Solid_State_Relay_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Speaker-Plus": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Speaker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Variable_Color_LED": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Vibration_Motor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Voltage_Divider": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Water_Atomization": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Recorder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Wrapper": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-10A_DC_Current_Sensor-ACS725": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-2.5A-DC-Current-Sensor-ACS70331": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-5A_DC_AC_Current_Sensor-ACS70331": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Electricity_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Electromagnet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-MOSFET": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Screw_Terminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-SPDT_Relay_30A": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-0.54_inch_Red_Dual_Alphanumeric_Display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-0.54_inch_Red_Quad_Alphanumeric_Display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_1.2inch_ips_display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-16x2_LCD_Series": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-4-Digit_Display": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-BlinkM": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LCD_RGB_Backlight": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-OLED-Display-0.66-SSD1306_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-OLED-Display-0.96-SSD1315": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-OLED-Display-1.12-SH1107_V3.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-OLED_Display_0.96inch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-OLED_Display_1.12inch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Serial_Camera_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Serial_LCD_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Triple_Color_E-Ink_Display_1_54": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Triple_Color_E-Ink_Display_2_13": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/I2C_LCD": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Accessories_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-16-bit-ADC-ADS1115": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-AND": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-DC_Jack_Power": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Differential_Amplifier_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Differential_Amplifier_v1.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-FM_Receiver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C-Hub-6Port": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Hub": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mini_Camera": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-NOT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-NunChuck": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-OR": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-PS_2_Adapter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Qwiic-Hub": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-RS232": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-RS485": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Serial_Camera": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Circular_LED": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_Bar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_Matrix_Driver-HT16K33": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_ring": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_Socket_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_String_Light": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_Strip_Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Red_LED": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Red_LED_Matrix_w_Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-RGB_LED_Matrix_w-Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-RGB_LED_Stick-10-WS2813_Mini": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-5-Way_Switch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-6-Position_DIP_Switch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Dual-Button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Joint_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-LED_Button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Magnetic_Switch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mech_Keycap": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Switch-P": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Thumb_Joystick": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-RTC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_High_Precision_RTC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Analog_Accelerometer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Compass_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-1.5g": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-16g": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-400g": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digital_Gyro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-3-Axis_Digitial_Compass_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-6-Axis_Accelerometer&Gyroscope_BMI088": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-6-Axis_AccelerometerAndCompass_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-6-Axis_AccelerometerAndGyroscope": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove-d7s-vibration-sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-IMU_10DOF": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-IMU_10DOF_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-IMU_9DOF-lcm20600+AK09918": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-IMU_9DOF_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Single_Axis_Analog_Gyro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_accelerometer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/edge-impulse-vision-ai": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/gesture_control_music_application": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_gesture_paj7660": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Vision-AI-Module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_demo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/connect_vision_ai_v2_to_sensecap_mate": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_telegram": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_webcamera": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/vision_ai_v2_crowd_heat_map": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_himax_sdk": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_at": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-vision-ai-v2-camera-supported": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_software_support": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_rs485": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2_sscma": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_vision_ai_v2a": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Train-Deploy-AI-Model-Grove-Vision-AI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Air_Quality_Sensor_v1.3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Dust_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Formaldehyde-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Laser_PM2.5_Sensor-HM3301": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-CO2_Temperature_Humidity_Sensor-SCD30": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_SEN5X_All_in_One": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Barometer-High-Accuracy": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Barometer_Sensor-BME280": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Barometer_Sensor-BMP180": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Barometer_Sensor-BMP280": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_barometer_sensor_spa06_003": [
    "cn",
    "en",
    "es"
  ],
  "/Grove-Barometer_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Integrated-Pressure-Sensor-Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_barometer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Capacitive-Fingerprint-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Chest_Strap_Heart_Rate_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Ear-clip_Heart_Rate_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-EMG_Detector": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Finger-clip_Heart_Rate_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Finger-clip_Heart_Rate_Sensor_with_shell": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Fingerprint_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-GSR_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Human_Presence_Sensor-AK9753": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_biomedicine": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Alcohol_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-CO2_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gas_Sensor-MQ9": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gas_Sensor-O2-MIX8410": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gas_Sensor-O2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gas_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-HCHO_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Multichannel-Gas-Sensor-V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Multichannel_Gas_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Oxygen-Sensor-Pro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove-smart-air-quality-sensor-sgp41": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-VOC_and_eCO2_Gas_Sensor-SGP30": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_voc_gas_sensor_sgp40": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_Gas_Sensor_Selection_Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Sensor_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Digital_Light_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Flame_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Heelight_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Color_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_UV_Sensor-VEML6070": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Infrared_Receiver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Infrared_Reflective_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_line_follower": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove-lightning-sensor-as3935": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Light_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Line_Finder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Luminance_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Sunlight_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-UV_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_color_sensor_v3_0_iic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_light": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/G1-1-4_Water_Flow_sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-EC-Sensor-kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-ORP-Sensor-kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-ORP-Sensor-Pro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-PH-Sensor-kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-PH_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-TDS-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Water-Level-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Water_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_liquid": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Collision_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Digital-PIR-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Encoder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mini_Track_Ball": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mouse_Encoder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Optical_Rotary_Encoder-TCUT1600X01": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Piezo_Vibration_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-PIR_Motion_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Slide_Potentiometer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Step_Counter-BMA456": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Tilt_Switch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Vibration_Sensor_SW-420": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_motion": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-80cm_Infrared_Proximity_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Adjustable_PIR_Motion_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Doppler-Radar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Gesture_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-IR_Distance_Interrupter_v1.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-TF_Mini_LiDAR": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Time_of_Flight_Distance_Sensor-VL53L0X": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Ultrasonic_Ranger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_ultrasonic_sensor_sms812": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_distance": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Moisture_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Analog-Microphone": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Loudness_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Offline-Voice-Recognition": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Recorder_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Sound_Recorder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Sound_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Speech_Recognizer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_sound": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_High_Accuracy_Temp%26Humi_Sensor-SHT35": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-SHT4x": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-TempAndHumi_Sensor-SHT31": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Temperature-Humidity-Sensor-DH20": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-TemperatureAndHumidity_Sensor-HDC1000": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-TemperatureAndHumidity_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Temperature_and_Humidity_Sensor_Pro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Digital_Infrared_Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-High_Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Thermocouple_Amplifier-MCP9600": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Infrared_Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Infrared_Temperature_Sensor_Array-AMG8833": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Temperature_Sensor_V1.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Thermal-Imaging-Camera-IR-Array": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/One-Wire-Temperature-Sensor-DS18B20": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-2_Channel_Inductive_Sensor-LDC1612": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_Touch_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Rotary_Angle_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Round_Force_Sensor_FSR402": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Touch_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove_adc_for_load_cell_hx711": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-BLE-dual_model-v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-BLE_v1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Serial_Bluetooth": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Serial_Bluetooth_v3.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-GPS-Air530": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-GPS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_network_module_intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Wio_E5_Helium_Demo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Wio_E5_Helium_tinyML_Demo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Wio_E5_P2P": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Wio_E5_SenseCAP_Cloud_Demo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Wio_E5_TTN_Demo": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_LoRa_E5_New_Version": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_NFC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove-nfc-st25dv64": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_NFC_Tag": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-125KHz_RFID_Reader": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-315MHz_RF_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-433MHz_Simple_RF_Link_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Serial_RF_Pro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_LoRa_Radio": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-DMX512": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_ADC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_FM_Receiver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-I2C_FM_Receiver_v1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Node": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Protoshield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-RJ45_Adapter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-UART_Wifi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-UART_Wifi_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_System": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SEEED-IOT-BUTTON-FOR-AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_seeed_iot_button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/iot_button_for_esphome": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/seeed_iot_button_with_zigbee": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mmwave_for_xiao_to_ha_bt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mmwave_for_xiao": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mmwave_for_xiao_arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mmwave_radar_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mmwave_human_detection_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/mmWave_Kit_And_Grove_Connect_To_ESPHome": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_mr60bha2_mmwave_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ha_with_mr60bha2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_mr60fda2_mmwave_kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ha_with_mr60fda2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Radar_MR24BSD1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Radar_MR24FDB1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Radar_MR24HPB1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Radar_MR24HPC1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Radar_MR60BHA1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Radar_MR60FDA1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Starter-Kit-for-Raspberry-Pi-Pico": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT_Jetson": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT_Raspberry": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_2_mics_pi_hat_raspberry_v2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_2_mics_pi_hat_v2_speech_recognition": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_lite_ha": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_lite_pi5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_enclosure": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/reSpeaker_usb_v3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_i2s_rgb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_i2s_test": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_player_spiffs": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_record_and_play": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_rgb_test": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_streams_generator": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_streams_i2s_tflite": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_streams_memory": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_steams_mqtt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_streams_print": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker_volume": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_respeaker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/respeaker": [
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_i2s": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_introduction": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_getting_started": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_edge_impulse": [
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_gpio": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_home_assistant": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_mqtt_audio_stream": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_record_playback": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_rgb": [
    "cn",
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_udp_audio_stream": [
    "en",
    "es"
  ],
  "/respeaker_xvf3800_xiao_volume": [
    "cn",
    "en",
    "es"
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
    "es",
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
    "es",
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
    "es",
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
    "es",
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
    "es",
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
    "es",
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
    "es",
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
    "es",
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
    "en",
    "es"
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
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_mg24_bluetooth": [
    "cn",
    "en",
    "es",
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
    "es",
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
    "es",
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
  "/xiao_nrf54l15_sense_bluetooth_usage": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_nrf54l15_sense_built_in_sensor": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_nrf54l15_sense_getting_started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_nrf54l15_sense_pin_multiplexing": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_nrf54l15_with_platform_io": [
    "cn",
    "en",
    "es"
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
    "es",
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
    "es",
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
    "es",
    "ja"
  ],
  "/xiao_rp2350_nuttx": [
    "cn",
    "en",
    "es",
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
    "es",
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
    "es",
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
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2_channel_wifi_ac_relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/6_channel_wifi_relay": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/relay_add_on_module_for_xiao": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_rs485_vision_ai_cam": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/trmnl_7inch5_diy_kit_main_page": [
    "cn",
    "en",
    "es"
  ],
  "/ogdiy_kit_works_with_arduino": [
    "en",
    "es"
  ],
  "/ogdiy_kit_works_with_esphome": [
    "en",
    "es"
  ],
  "/ogdiy_kit_works_with_trmnl": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_075inch_epaper_panel_arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/xiao_075inch_epaper_panel_esphome": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_7_5_inch_epaper_panel_with_trmnl": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_7_5_inch_epaper_panel_main_page": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_bus_servo_adapter": [
    "cn",
    "en",
    "es"
  ],
  "/XIAO_IR_Mate_Smart_IR_Remote": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_midi_synthesizer": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_soil_moisture_sensor": [
    "cn",
    "en",
    "es"
  ],
  "/xiao_w5500_ethernet_adapter": [
    "cn",
    "en",
    "es"
  ],
  "/Driver_for_Seeeduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/FM_Receiver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/grove-sgp41-with-aht20": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Getting_Started_with_Seeeduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_IoT_Starter_Kits_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SeeedStudio-GD32-RISC-V-Dev-Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_V2.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_v2.21": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_V2.2_Atmega-168P": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_v3.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_v4.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_v4.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-Stalker_v3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Stalker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Stalker_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Stalker_v2.3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Stalker_V3-Waterproof_Solar_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Stalker_V3.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Stalker_v3_enclosure": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-Cortex-M0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-Crypto-ATmega4809-ECC608": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino-Nano": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_ADK_Main_Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Arch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Arch_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Buying_Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Cloud": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Ethernet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_GPRS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Lite": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_LoRAWAN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Lotus": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Lotus_Cortex-M0-": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Mega": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeeduino_Mega_Protoshield_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_Arduino_Boards": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/iot_botton_connect_to_esphome": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/Accessories/Industrial-Grade-Optical-Rain-Gauge-RG-15": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/Accessories/Optical-Rain-Gauge-RG-9": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/develop_an_industrial_lorawan_sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/home_assistant_with_sensecap_lorawan_sensors": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/select_lorawan_network": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/get_started_with_lorawan_tracker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/open_source_lorawan": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/t1000_e_arduino_examples": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/tracker_at_command": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Decoder": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_Home_Assistant": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_LoRa": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_LoRaWAN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_Matter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_Application_ChatGPT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_Single_Channel_Gateway": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecap_indicator_project": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_BLE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_Button": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_LoRa": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_Wi-Fi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_Buzzer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_CO2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_Grove_ADC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_Grove_IIC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_MicroSD": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_RP2040_tVOC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_Dive_into_the_Hardware": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_How_to_Create_your_own_UI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_ESP32_Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_Native_Firmware": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_ChatGPT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_DALL·E": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Indicator_OpenAI_X_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Data_Logger_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Sensor_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP-SOLO-CO2-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/One-Stop-Model-Training-with-Edge-Impulse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP-Vision-AI-Get-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Train-Deploy-AI-Model-A1101": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecap_a1102": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/train_ai_with_a1102": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_LoRaWAN_S210X_Series_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_S2107": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/how_to_connect_sensecap_s210x_to_datacake_via_ttn": [
    "cn",
    "en",
    "es"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_ONE_weather_sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ORCH-S4-Weather-Station": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/benchmark_labs_forecast_integration_for_seeed_weather_stations": [
    "cn",
    "en",
    "es"
  ],
  "/SenseCAP-ONE-Compact-Weather-Station-Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Industrial-ph-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_probes_intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RS485_750cm_Ultrasonic_Sensor-1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Sensor_Probes_Product_Catalogue": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Soil-Moisture-Temperature-EC-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Soil-Moisture-Temperature-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/total_solar_radiation_sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Water-Leak-Detector": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/list_of_supported_grove_n_adding_more": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_Builder_build_LoRaWAN_Sensors": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/get_started_with_t1000_p": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/faq_for_SenseCAP_T1000": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/fm_release_for_SenseCAP_T1000": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_Tracker_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Helium": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_Tracker_Loriot": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_TTN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ttn_mapper_for_SenseCAP_T1000": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_Tracker_Akenza": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Datacake_TTS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_InfluxDB_TTS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Qubitro_TTS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Wialon": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_TagoIO_TTS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/thingsboard_integrated": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_trackpac": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Ubidots_Helium": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker_Ubidots_TTS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/location_lambda_code": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecap_t1000_tracker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SenseCAP_T1000_tracker/Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/bluetooth_beacon_for_SenseCAP_Traker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Get_Started_with_SenseCAP_T1000_tracker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/IPS_For_SenseCAP_T1000_Traker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/T1000_payload": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Tracker_WiFi_Geolocation": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/training_model_for_watcher": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/use_case": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/device_network_setup": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/flash_watcher_agent_firmware": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_web_control_panel": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_software_framework": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_function_module_development_guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/build_watcher_development_environment": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_ui_integration_guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_to_node_red": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_ifttt": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_kafka": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_open_interpreter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_p5js": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_telegram": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_twilio": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_discord": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_mongodb": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_node_red_to_whatsapp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/integrate_watcher_to_ha": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/uart_output": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_watcher_task": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_hardware_overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_operation_guideline": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/getting_started_with_watcher": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_price": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecap_app_introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_local_deploy": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher_software_service_framework": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/watcher": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_tracker_for_sidewalk": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/flash_to_wio_tracker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Link": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Link_Bootcamp_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Link_Deluxe_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Link_Deluxe_Plus_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Link_Environment_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Link_Event_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Link_Starter_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Shield-for-Wio-Lite": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_Shield_for_NodeMCU_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Lite-AI-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Lite-MG126": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Lite-W600": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Lite_RISC_V_GD32VF103_with_ESP8266": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Node": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Use_MQTT_to_remotely_light_up_LED_lights": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Use_Socket_to_connect_to_the_forum": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wireless-desktop-atmosphere-lamp": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wireless-Fall-Detection-Device": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LAN_Communications": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-RP2040-with-Arduino-WIFI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_RP2040_mini_Dev_Board-Onboard_Wifi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_RP2040_Module_Build-in_Wireless_2.4G": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_Kit_for_Wio_LTE": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LTE_Cat_1_Pi_HAT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Extension-RTC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_gps_board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_LTE_Cat.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_LTE_Cat_M1_NB-IoT_Tracker": [
    "cn",
    "en",
    "es"
  ],
  "/Wio_Tracker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/CyberDeck_Wio-Terminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Get-Started-with-Wio-Terminal-and-Wappsto-IoT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Azure-IOT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/AIoTs_GPS_state_tester": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-4": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-EI-6": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Gesture-Recognition": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-TFLM-1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-TFLM-2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-TFLM-3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ArduPy-LCD": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ArduPy-Libraries": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ArduPy": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Audio-GUI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Audio-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Audio-Play-Record": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Battery-Chassis": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Chassis-Battery_650mAh": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Ethernet": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BLE-ibeacon-using-Wio-terminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-terminal-BLE-introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Bluetooth-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Web-Bluetooth": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Buttons": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Buzzer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Switch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IMU-Basic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IMU-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IMU-Tapping": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Infrared-Emitter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Grove": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IO-Analog": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IO-Digital": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IO-I2C": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IO-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-IO-SPI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Anti-aliased-Fonts": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-APIs": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Basic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Fonts": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Graphics": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Histogram": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Linecharts": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Loading-Image": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LCD-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-LVGL": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Light": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Mic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-RTC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-FS-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-FS-ReadWrite": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Advanced-Wi-Fi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Network-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Wi-Fi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Introduction_to_Artificial_Intelligence_for_Makers": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML-Kit-Course": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-TinyML": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Software-FreeRTOS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Azure_IoT_CC": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Barometric-Pressure-sensor-using-the-Wio-terminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Blynk-wireless-OTA-functionality-to-Wio-Terminal": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Blynk": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Edge-Impulse-Tuner": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Getting_started_wizard": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-8720-dev": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Displaying-Gyro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Displaying-Photos": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Firmware": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-HMI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Interactive-Face": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Reading-COVID19": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Reading-Github": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Sound-Meter": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Storting-Analog-Data": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Thermal-Camera": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-DAPLink": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-HMI-Usermode-SDK": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Reading-Raspberry-Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-Keyboard": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-MIDI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-Mouse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBCLIENT-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBH-Keyboard": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBH-Mouse": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBH-Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-USBH-Xbox": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-CircuitPython": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio-Terminal-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/wio_terminal_faq": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wio_Terminal_Intro": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sensor_Network": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/solutions/jetson-crowd-tracking": [
    "cn",
    "en",
    "es"
  ],
  "/mission_pack_features_v3": [
    "cn",
    "en",
    "es"
  ],
  "/mission_pack_intro_v3": [
    "cn",
    "en",
    "es"
  ],
  "/non_invasive_ct_energy_consumption": [
    "cn",
    "en",
    "es"
  ],
  "/ha_dify_watcher_llms": [
    "cn",
    "en",
    "es"
  ],
  "/Solutions": [
    "en",
    "es",
    "ja"
  ],
  "/edge_ai_topic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/home_assistant_topic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ha_xiao_esp32": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/home_assistant_sensecap": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sensecraft_homeassistant_userguide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/open_source_topic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ma_deploy_yolov5": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ma_deploy_yolov8": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ma_deploy_yolov8_pose": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Deploy_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Introduce_Installation": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Introduce_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Introduce_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Config": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Datasets": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Export_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_FOMO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_Overview": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_PFLD": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ModelAssistant_Tutorials_Training_YOLO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/tinyml_topic": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/sscma": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/tinyml_workshop_course_new": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/train_and_deploy_model": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/topicintroduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Getting_Started_with_Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Beginner-Kit-for-Arduino-education-pack": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Beginner-Kit-for-Arduino-Upverter-Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Beginner-Kit-For-Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Beginner_Kit_for_Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Creator-Kit-1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mixer_Pack_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Toy_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Indoor_Environment_Kit_for_Edison": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Smart_Plant_Care_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Speech_Recognizer_Kit_for_Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_kit_for_Arduino_101": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_Kit_Plus": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_Kit_v3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sidekick_Basic_Kit_for_Arduino_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Techbox_Tricks": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2.8inch_TFT_Touch_Shield_v2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/4A_Motor_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Base_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bluetooth_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bluetooth_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Brushless_Motor_Shield_TB6605FTG": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Camera_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/CAN-BUS_Shield_V1.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/CAN-BUS_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/EL_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Energy_Monitor_Shield_V0.9b": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Energy_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Ethernet_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Ethernet_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Ethernet_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/GPRS-Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/GPRS_Shield_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/GPRS_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/GPRS_Shield_V3.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove-Mega_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Shield_for_Arduino_Nano": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Motor_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Motor_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Motor_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Music_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Music_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Music_Shield_V2.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/NFC_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/NFC_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/NFC_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Protoshield_Kit_for_Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Relay_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Relay_Shield_V1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Relay_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Relay_Shield_v3": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Renbotics_ServoShield_Rev": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RGBW_Stripe_WireLess_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RS232_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SD_Card_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SD_Card_Shield_V3.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/SD_Card_shield_V4.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_BLE_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Shield_Bot_V1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Shield_Bot_V1.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Shield_Introduction": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Small_e-Paper_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Small_e-Paper_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Solar_Charger_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Solar_Charger_Shield_V2.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Spartan-Edge-Accelerator-Board": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Starter_Shield_EN": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/TFT_Touch_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/W5500_Ethernet_Shield_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Shield": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Shield_Fi250_V1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Shield_V1.1": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Shield_V1.2": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Wifi_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/WireLess_Gate_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arduino_Common_Error": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arduino_Software_I2C_user_guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/A_Comparison_of_Different_Grove_Temperature_Sensors": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/A_Handy_Serial_Library": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Barometer-Selection-Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Download-Arduino-and-install-Arduino_Driver": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/GPS-Modules-Selection-Guide": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Guide_to_use_demos_downloaded_from_Seeed-s_Github": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How-to-Choose-A-Gas-Sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_To_Choose_The_Right_Cable": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_to_detect_finger_touch": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_to_install_Arduino_Library": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_to_use_and_write_a_library": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/How_To_Use_Sketchbook": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_Relay_Page": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sketchbook_of_Sidekick_Advanced_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Software-Serial": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Software-SPI": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Software-Static-Library": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Upload_Code": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Use_External_Editor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/IR_Remote": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Joystick_Control_RGB_Led": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LightView_201k_Digital_display_module": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Light_Sensor_and_LED_Bar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Eight-Thermostat": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Five-Relay_Control": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Four-Noise_Maker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_One-Blink": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_One-Double_Blink": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Seven-Temperature": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Six-LCD_Demonstration": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Three-Analog_Input_v1b": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Two-Digital_Input": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Project_Two-Digital_Input_v1.0b": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Relay_Control_LED": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RFID_Control_LED": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Sound_Sensor_And_LED_Bar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/temperature_sensor": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arduino-AWS-IOT-Bridge": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Arduino-DAPLink": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Flashing-Arduino-Bootloader-DAPLink": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/I2C_And_I2C_Address_of_Seeed_Product": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/ODYSSEY-X86J4105-Firmata": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Seeed_Arduino_Serial": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Software-SWD": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Suli": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Xadow_IO_pin_mapping": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Codecraft_Grove_Compatible_List": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Guide_for_Codecraft_using_Arduino": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Compiling_MicroPython_for_embedded_devices": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Software-PlatformIO": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Bitcar": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BitMaker": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BitMaker_lite": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BitPlayer": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/BitWear": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Inventor_Kit_for_microbit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/microbit_wiki_page": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Microsoft_MakeCode": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/popularplatforms": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_PI_Bplus_Case": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Skeleton_box_for_Rasberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_Pi_as_a_NAS": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Cooler_Device": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_Kit_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/LoRa_LoRaWan_Gateway_Kit": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_Pi_3_Model_B": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/remote_connect": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_pi_CM4_update_eeprom": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/GrovePi_Plus": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_AI_HAT_for_Edge_Computing": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_HAT": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_Hat_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Grove_Base_Hat_for_Raspberry_Pi_Zero": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/High_Accuracy_Pi_RTC-DS3231": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Pi_RTC-DS1307": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_Pi_Breakout_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_Pi_Motor_Driver_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_Pi_R232_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_Pi_Relay_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/RS-485_Shield_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "/Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja"
  ],
  "_About/": [
    "cn",
    "es",
    "ja"
  ],
  "/ABC": [
    "cn",
    "ja"
  ],
  "/ReSpeaker": [
    "cn",
    "ja"
  ]
};

  // 生产环境优化的状态管理
  let isInitialized = false;
  let currentPageInfo = null;
  let observerConnected = false;
  
  // 监控间隔ID
  let primaryCheckInterval = null;
  let backupCheckInterval = null;

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
      '<div class="navbar__item dropdown dropdown--hoverable navbar-language-switcher navbar_dorp_items" data-page-path="' + basePath + '" data-current-lang="' + currentLanguage + '">',
      '  <a href="#" class="navbar__link" aria-haspopup="true" aria-expanded="false" role="button">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label">' + currentLangConfig.label + '</span>',
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
    
    return switcherHTML;
  }

  function injectOrUpdateSwitcher() {
    const navbar = document.querySelector('.navbar__items--right') || 
                   document.querySelector('.navbar__items') ||
                   document.querySelector('.navbar');
    
    if (!navbar) {
      log('⏳ 导航栏未找到');
      return false;
    }

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    const existingSwitcher = document.querySelector('.navbar-language-switcher');
    
    // 更新当前页面信息
    currentPageInfo = {
      basePath: basePath,
      currentLanguage: currentLanguage,
      availableLanguages: availableLanguages,
      timestamp: Date.now()
    };
    
    // 情况1：不需要切换器
    if (availableLanguages.length <= 1) {
      if (existingSwitcher) {
        existingSwitcher.remove();
        log('🗑️ 移除切换器（单语言页面）');
      }
      return true;
    }
    
    // 情况2：需要切换器但不存在 - 创建
    if (!existingSwitcher) {
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
        } else {
          navbar.insertAdjacentHTML('beforeend', switcherHTML);
        }
        
        const switcherElement = navbar.querySelector('.navbar-language-switcher');
        if (switcherElement) {
          const switcherButton = switcherElement.querySelector('.navbar__link');
          if (switcherButton) {
            switcherButton.addEventListener('click', function(e) {
              e.preventDefault();
            });
          }
        }
        
        log('✅ 创建新的语言切换器');
        return true;
      }
    }
    
    // 情况3：切换器存在 - 检查是否需要更新
    if (existingSwitcher) {
      const currentPagePath = existingSwitcher.getAttribute('data-page-path');
      const currentLang = existingSwitcher.getAttribute('data-current-lang');
      
      // 如果页面路径或当前语言发生变化，则更新
      if (currentPagePath !== basePath || currentLang !== currentLanguage) {
        log('🔄 检测到页面变化，更新切换器');
        log('   从: ' + (currentPagePath || '未知') + ' (' + (currentLang || '未知') + ')');
        log('   到: ' + basePath + ' (' + currentLanguage + ')');
        
        existingSwitcher.remove();
        return injectOrUpdateSwitcher(); // 递归调用重新创建
      }
    }
    
    return true;
  }

  // 生产环境优化的监控策略
  function startProductionMonitoring() {
    // 清除可能存在的监控
    if (primaryCheckInterval) clearInterval(primaryCheckInterval);
    if (backupCheckInterval) clearInterval(backupCheckInterval);
    
    // 主要监控：每200ms检查一次（针对生产环境优化）
    primaryCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      
      // 检查页面是否发生变化
      if (!currentPageInfo || 
          currentPageInfo.basePath !== basePath || 
          currentPageInfo.currentLanguage !== currentLanguage) {
        
        log('🔄 检测到页面变化，执行更新');
        injectOrUpdateSwitcher();
      }
    }, 200);
    
    // 备用监控：每2秒进行完整检查
    backupCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      const existingSwitcher = document.querySelector('.navbar-language-switcher');
      
      // 完整性检查
      if (availableLanguages.length > 1 && !existingSwitcher) {
        log('🚨 备用监控发现切换器丢失，重新创建');
        injectOrUpdateSwitcher();
      } else if (availableLanguages.length <= 1 && existingSwitcher) {
        log('🚨 备用监控发现多余切换器，移除');
        existingSwitcher.remove();
        currentPageInfo = null;
      }
    }, 2000);
    
    log('🔧 启动生产环境监控机制');
  }

  // 强化的路由变化检测（专为生产环境设计）
  function setupProductionRouteDetection() {
    let lastPathname = location.pathname;
    let lastHref = location.href;
    
    // 方法1：历史记录变化
    function handleHistoryChange(source) {
      setTimeout(function() {
        if (location.pathname !== lastPathname || location.href !== lastHref) {
          log('🔄 路由变化 [' + source + ']: ' + lastPathname + ' -> ' + location.pathname);
          lastPathname = location.pathname;
          lastHref = location.href;
          
          // 强制更新
          setTimeout(function() {
            injectOrUpdateSwitcher();
          }, 100);
        }
      }, 50);
    }
    
    window.addEventListener('popstate', function() {
      handleHistoryChange('popstate');
    });
    
    // 拦截pushState和replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function() {
      originalPushState.apply(this, arguments);
      handleHistoryChange('pushState');
    };
    
    history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      handleHistoryChange('replaceState');
    };
    
    // 方法2：全局点击监听（捕获所有内部链接）
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href]');
      if (link && link.href) {
        try {
          const url = new URL(link.href);
          if (url.origin === window.location.origin && url.pathname !== lastPathname) {
            setTimeout(function() {
              handleHistoryChange('click');
            }, 150);
          }
        } catch (err) {
          // 忽略无效URL
        }
      }
    }, true);
    
    // 方法3：定期URL检查（生产环境备用方案）
    setInterval(function() {
      if (location.pathname !== lastPathname || location.href !== lastHref) {
        handleHistoryChange('periodic');
      }
    }, 1000);
    
    log('🔧 启动生产环境路由检测');
  }

  function productionInitialization() {
    log('🚀 初始化生产环境优化版语言切换器');
    
    // 等待DOM完全稳定
    function attemptInitialization() {
      const navbar = document.querySelector('.navbar__items--right') || 
                     document.querySelector('.navbar__items');
      
      if (navbar) {
        log('✅ 导航栏就绪，开始初始化');
        
        // 立即执行一次注入
        injectOrUpdateSwitcher();
        
        // 启动监控机制
        setTimeout(function() {
          startProductionMonitoring();
          setupProductionRouteDetection();
        }, 500);
        
      } else {
        log('⏳ 等待导航栏加载...');
        setTimeout(attemptInitialization, 300);
      }
    }
    
    attemptInitialization();
  }

  function init() {
    if (isInitialized) {
      return;
    }
    
    log('🚀 启动生产环境优化版语言切换器');
    log('📊 映射数据包含 ' + Object.keys(languageMapping).length + ' 个多语言页面');
    
    isInitialized = true;
    
    // 延迟初始化以确保生产环境稳定性
    setTimeout(productionInitialization, 800);
  }

  // 多重初始化策略
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
  
  // 确保初始化的备用机制
  setTimeout(function() {
    if (!isInitialized) {
      log('🔄 备用初始化触发');
      init();
    }
  }, 2000);

})();