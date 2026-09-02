// 语言切换器 - 生产环境优化版本
// 生成时间: 2026-08-27 10:02:05 (北京时间)
// 多语言页面: 2457 个

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
    es: { label: 'Español', flag: '🇪🇸', prefix: '/es' },
    pt: { label: 'Português (Brasil)', flag: '🇧🇷', prefix: '/pt-br' }
  };

  // 内嵌的语言映射数据
  const languageMapping = {
  "/Cloud": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/codecraft/codecraft-overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/codecraft/quick-start-and-support": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/codecraft/creation-and-platform": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/codecraft/community-and-publishing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/codecraft/codecraft-for-education": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/application/application-for-homeassistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/application/create-new-application": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/application/tool-blocks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/sensecraft-ai-main": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-gpio-xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-training-classification": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/grove-vision-ai-v2-workspace": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/nvidia-jetson-workspace": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/tutorials/sensecraft-ai-output-libraries-xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-ai/xiao-esp32s3-workspace": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-app/overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-app/tutorials/event-management": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/blockchain-dashboard/dashboard-basics": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/blockchain-dashboard/dashboard-registration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/blockchain-dashboard/hotspot-registration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/app-settings": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/deeplink_helium_wallet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/download-app": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/faq": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/forget-wifi-profile": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-management": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-onboarding": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/remote-reboot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/sensecap_hotspot_app": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/update_antenna": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-blockchain/sensecraft-hotspot-app/update_hotspot_location": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform-api/appendix/list_of_device_status_ids": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/api/appendix/list_of_error_code": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/api/appendix/list_of_measurement_ids": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/api/appendix/list_of_sensor_types": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/api/http-api/http-api-access-guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/api/http-api/quick-start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/applications/ai-advisor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/applications/planting-advice": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-fee/sensecraft-cloud-fee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-fee/sensecraft-data-platform-api-pricing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/cloud/sensecraft-data/sensecraft-data-platform/overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/tutorials/dashboard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/tutorials/data-management": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft-data-platform/tutorials/device-management": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft_hmi_overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Contribution-Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/full_steps_pull_request": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/quick_pull_request": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Deploy_Page_Locally": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Scale-up-Your-Creation-with-Fusion": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Galileo_Case": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Service_for_Fusion_PCB": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Starter_bundle_harness_V1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Unibody_box_for_Galileo_Gen2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Contributor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BeagleBone_Solutions": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_lite_beagley-ai_chatgpt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BeagleBone-Green-Gateway": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BeagleBone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BeagleBone_Blue": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Beaglebone_Case": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BeagleBone_Green": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_seeedstudio_beaglebone_green_eco": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BeagleBone_Green_Wireless": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BeagleBone_Green_HDMI_Cape": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_Cape_for_BeagleBone_v2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Cape_for_BeagleBone_Series": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Motor_Bridge_Cape_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Skeleton_box_for_Beaglebone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_Kit_for_BeagleBone_Green": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox-ESP-100-Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edge_series_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_nvr_with_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_fisheye_surround_view_demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DashCamNet-with-Jetson-Xavier-NX-Multicamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_depth_anything_v3_jetson_agx_orin": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_frigate_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_nvblox_jetson_agx_orin": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_visual_perception_engine_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_to_Train_and_Deploy_YOLOv8_on_reComputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/industrial_vision_monitoring_on_industrial": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Jetson-Nano-MaskCam": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/multiple_cameras_with_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Series_Projects": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Series_Tutorials_Exercise": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Security_Scan": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/streaming_vision_agent_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Traffic-Management-DeepStream-SDK": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/yolov11_with_depth_camera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_roboticsyolov26_dual_camera_system": [
    "cn",
    "en",
    "ja",
    "pt"
  ],
  "/YOLOv5-Object-Detection-Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/YOLOv8-DeepStream-TRT-Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/YOLOv8-TRT-Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/train_and_deploy_a_custom_classification_model_with_yolov8": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/alwaysAI-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/build_and_flash_yocto_for_recomputer_super": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Cochl.Sense-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/CVEDIA-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DeciAI-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_tensorrt_edge_llm_on_jetpack6.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/develop_recomputer_jetson_using_clawdbot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_distributed_llama_cpp_rpc_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/gapi_getting_started-with_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/HardHat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_ethercat_communication": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/install_torch_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Jetson-AI-developer-tools": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson-docker-getting-started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_spi_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Lumeo-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/No-code-Edge-AI-Tool": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_nvstreamer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rapid_prototyping_on_jetson_with_nvidia_skills": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Series_Resource": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Roboflow-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/vnc_for_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/control_motor_by_voice_llm_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_deepseek_on_jetson_with_mlc": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_dia_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_joyai_vl_interaction_on_jetson_thor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_live_vlm_webui_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/local_ai_ssistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Local_Voice_Chatbot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Finetune_LLM_on_Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Generative_AI_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_gptoss_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_to_run_local_llm_text_to_image_on_reComputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/run_vlm_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/run_zero_shot_detection_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/local_openclaw_on_recomputer_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Local_RAG_based_on_Jetson_with_LlamaIndex": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_deepseek_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Real_Time_Subtitle_Recoder_on_Nvidia_Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Whisper_on_Jetson_for_Real_Time_Speech_to_Text": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Allxon-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/neqto_engine_for_linux_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Scailable-Jetson-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Update-Jetson-Linux-OTA-Using-Allxon": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/llm_interface_control_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/local_chatbot_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/local_voice_llm_on_recomputer_jetson_for_reachy_mini": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/speech_vlm": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/vlm": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_control_soarm_by_openclaw_on_jetson_thor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_jetson_claw_on_orin_nano_nx_8gb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/j501_mini_starai_viola_fruit_sorting": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/local_chatbot_recomputer_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/local_voice_llm_on_recomputer_jetson_for_reachy_mini_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_reachy_fleet_dance": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_dm_graspnet_visual_grasping": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/voice_control_rebot_arm": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_A203_Flash_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_A205_Flash_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_A603_Flash_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_A607_Flash_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_A608_Flash_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_J1010_J101_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_J2021_J202_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/J401_carrierboard_Hardware_Interfaces_Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_J4012_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/j501_carrier_board_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reserver_j501_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_j501_mini_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/j401_mini_carrierboard_hardware_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_mini_j401_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_jetson_robotics_j401_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_jetson_robotics_j601_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/create_backup_and_restore_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_ota_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/differences_of_l4t_between_seeed_and_nvidia": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/enable_spi_interface_on_jetsonnano": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_flash_jetpack_with_wsl2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_the_system_log_of_recomputer_j30_and_j40": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/headless_setup_and_recovery_for_a603": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_build_and_flash_bsp_source_for_jetson_thor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_build_the_ko_module_for_seeed_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_build_the_source_code_project_for_seeed_jetson_bsp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deal_the_issue_of_UUID": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_encrypt_the_disk_for_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_establish_the_ethercat_on_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/upgrade_software_packages_for_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_use_camera_imx219": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/issue_of_jetpack5_failing_to_boot_from_certain_ssd": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack72_ax210_ax200_wifi_setup_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack72_deep_dive": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Jetson_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_initrd_flash_zfs_host_limitation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/make_diy_bsp_for_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/overview_of_the_relationship_between_jetpack_and_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/updating_jetpack_with_ota": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/usb_timeout_during_flash": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_arducam_ov9281_camera_with_a603_jetson_carrier_board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/weston_egl_not_initialized_jetson_cold_boot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash/jetpack_to_selected_product": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rapid_prototyping_on_jetson_with_nvidia_skills_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/industrial_vision_monitoring_on_industrial_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack_7_2_deepstream": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_tensorrt_edge_llm_on_jetpack7.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack72_ax210_ax200_wifi_setup_guide_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack_7_2_camera_multimedia_compatibility": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash_and_ota_jetpack_7.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack_7_2_resource_hub": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack_6_to_7_2_migration_playbook": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack_7_2_memory_optimization": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/build_and_flash_yocto_for_seeed_jetson_carrier_boards": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack72_deep_dive_bk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack_7_2_maxn_super_and_mig": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetpack_7_2_unified_platform_iso_sbsa": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_debug_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_app_market": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_connect_device": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_device_management": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_faq": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_flash_firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_remote_development": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_skills": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/jetson_developtool_supported_devices": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/em12_g_gnss_module_for_recomputer_robotics_j3011": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/update_orin_nano_developer_kit_to_super_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Jetson-Mate": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Jetson_Xavier_AGX_H01_Driver_Installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mini_AI_Computer_T906": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_jetson_bundle": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_A203E_Flash_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_A205E_Flash_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Series_GPIO_Grove": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rm520n_module_for_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rtl8822ce_wireless_module_for_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rtl8852be_wireless_module_for_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/NVIDIA_Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_seeed_agx_orin_dev_kit_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Industrial_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Industrial_J20_Hardware_Interfaces_Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/J1010_Boot_From_SD_Card": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/J101_Enable_SD_Card": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_J1010_with_Jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_GPIO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Memory_Expansion": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Series_Hardware_Layout": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Series_Initiation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_J1020v2_with_Jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_J1020_A206_Flash_JetPack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_Jetson_Series_Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_j20_with_jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_J30_40_with_Jetson_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Use_Infineon_Wifi_Module_on_reComputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_j401b_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_j401b_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_jetson_mini_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_jetson_mini_hardware_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_mini_j501_wifi_module_installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_robotics_j401_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_robotics_j401_hardware_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_recomputer_j501_robotics_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_robotics_j50_mini_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_robotics_recomputer_rugged_j40_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_antenna_installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_jetson_super_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_jetson_super_hardware_interfaces_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_jetson_super_performance": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/replace_the_thermal_conductive_paste_for_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reServer_Industrial_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reserver_industrial_hardware_interface_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reserver_industrial_poe_camera_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reServer_J2032_Flash_Jetpack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reServer_J2032_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-STM32MP135D": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-STM32MP157C": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SEEED-SOM-STM32MP157C": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-AzureIOT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Frigate": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Intel-OpenVINO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-NCS2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connect-Grove-to-Home-Assistant-ESPHome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-Home-Assistant-Customize": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86-Home-Assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mender-Client-ODYSSEY-X86": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mender-Server-ODYSSEY-X86": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Coral-Mini-PCIe-Accelerator-x86": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Accessories": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-GPIO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-LTE-Module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BalenaOS-X86-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Jellyfin-on-Docker-Ubuntu-X86": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86-OPNsense": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86-TrueNAS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Installing-Android": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Installing-FreeNAS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Installing-openwrt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Installing-OS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-pfSense": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Updating-Firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Quantum-Mini-Linux-Development-Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_openclaw_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_balena": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/build_balenaOS_for_reComputer_r1000": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_ai_r2140_balena": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/chirpstack_lora_gateway_r1x00": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_aws": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM_AWS_first": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM_Azure_IoT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_install_codesys": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_use_modbus_rtu_with_codesys": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-edgeimpulse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_ML_Edgeimpulse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_install_fin": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fin_floor_gaphic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fin_logic_builder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fin_equip_gaphic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fin_site_gaphic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fin_top_level_gaphic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fin_modbus_tcp_and_rtu": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fuxa_achieve_scada": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fuxa_modbus_rtu_and_tcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fuxa_mqtt_client": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fuxa_opc_ua": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_fuxa_web_api": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM_intro_FUXA": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_home_automation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_home_assistant_modbus": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-Home-Assistant-Customize": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_Home_Assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox-rpi-200-ignition-edge": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-Getting-Started-with-Ignition-Edge": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-Ignition-Edge-Panel-Builder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox-Rpi-200_N3uron_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edgebox_rpi_200_n3uron_bacnet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox_rpi_200_N3uron_modbus_mqtt_aws": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox-rpi-200-n3uron": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_n3uron_aws": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_n3uron_bacnet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_n3uron": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_n3uron_modbus_mqtt_aws": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminalDM_N3uron_Get_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminalDM_N3uron_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminalDM_N3uron_Historian": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminalDM_N3uron_modbus_mqtt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edgebox_rpi_200_grafana": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edge_box_rpi_200_node_red_bacnet_tcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edge-Box-Getting-Started-with-Node-Red": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edge_box_rpi_200_node_red_influxdb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edge_box_rpi_200_node_red_modbus_rs485": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edge_box_rpi_200_node_red_modbus_tcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edge-Box-Node-Red-MQTT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/neqto_engine_for_linux_reTerminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_getting_started_node_red": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_node_red_influxdb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_nodered_mqtt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_grafana": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_node_red_modbus_tcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_nodered_opcua_server": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_nodered_s7": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_node_red_bacnet_ip": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-Getting-Started-with-Node-Red": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_dm_rpi_200_node_red_bacnet_tcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-Node-Red-canbus": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_dm_grafana": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_dm_200_node_red_influxdb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_dm_node_red_modbus_tcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-Node-Red-mqtt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-Node-Red-RS485": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/openremote_r1x00": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mender-Client-reTerminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_rs485_loopback_test": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_flow_fuse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_use_ups": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal-dm-sensecraft-edge-os-intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminalDM_Introduction_Jedi_MachineChat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_thingsboard_ce": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_thingsboard_dashboard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-build-UI-using-Electron": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-build-UI-using-Flutter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-build-UI-using-LVGL": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-build-UI-using-Qt-for-Python": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/weather-dashboard-with-Grafana-reTerminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/r2000_series_frigate_and_home_assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/frigate_nvr_with_raspberrypi_5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/go2rtc_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/gun_detection_with_frigate_nvr_on_r2000": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ispy_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/moonfire_nvr_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal-DM-Frigate": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_frigate": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/viseron_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/zoneminder_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_DM_Color_detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_DM_Face_detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_DM_Object_detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_DM_Shape_detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_DM_Face-tracking": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_DM_opencv": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/clip_application_on_rpi5_with_ai_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/convert_model_to_edge_tpu_tflite_format_for_google_coral": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/facial_recognition_on_the_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/install_m2_coral_to_rpi5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/pose_based_light_control_with_nodered_and_rpi_with_aikit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/real-time-ocr": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_ML_TFLite": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_ML_MediaPipe": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-DM-Yolo5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/yolov11_for_speed_estimation_and_loitering_detection_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/yolov8_on_ai_box_for_fall_climbing_tracking": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_docekr_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_sqlite_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_uv_to_build_package_on_recomputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_deepseek_on_raspberry_pi_ai_box": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/distributed_inference_of_deepseek_model_on_raspberrypi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_whisper_on_raspberry_pi_ai_box": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_ai_industrial_r2000_flash_os": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_ai_industrial_r2135_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/r2000_series_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r20xx_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r20xx_configure_system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r2000_flash_os": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r20xx_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_R21xx_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_R21xx_configure_system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r21xx_flash_os": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_R21xx_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r22xx_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r22xx_configure_system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r22xx_flash_os": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_industrial_r22xx_getting_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox-rpi-200-AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox-rpi-200-balena-OS-setup": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edgebox-rpi-200-codesys": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edge_Box_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edge_Box_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/NEQTO_Engine_for_Linux_EdgeBox-RPI-200": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/EdgeBox-RPi-200-boot-from-external-media": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/EdgeBox-rpi-200-with-LoRaWAN-module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_R1000_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_flash_OS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_use_rs485_modbus_rtu": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_v1_1_description": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reComputer_r1000_use_bacnet_mstp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1000_warranty": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1100_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1100_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1100_configure_system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recomputer_r1100_flash_os": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminalBridge": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_Mount_Options": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-Buildroot-SDK": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-Yocto": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Streampi_OBS_On_reTerminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-new_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-hardware-interfaces-usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-piCam": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal-dm-flash-OS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal-dm-hardware-guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal-dm-warranty": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal-dm": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reTerminal-dm_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/raspberry_pi_5_uses_pcie_hat_dual_hat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/raspberry-pi-devices": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wifi_halow_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_model_conversion": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/model_conversion_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_model_export_online": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_on_device_models": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_human_detection_meshtastic_broadcast": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_remote_wireless_monitor_system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_voice_assitant_with_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_parking_slot_monitoring_demo_with_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_deploy_monocular_depth": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_for_home_assistant_with_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_for_n8n_with_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_in_Telegram_work_with_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_in_Wechat_work_with_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_hand_gesture": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/integration_of_real-time_heat_map_with_grafana_data_dashboard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_cpenclaw_to_control_the_recamera_gimbal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_picoclaw": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_qrcode_udp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_jetson_vlm_gateway": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_meshtastic_ha_security_system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_motion_detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sound_source_localization_of_recamera_gimbal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rtsp_to_webrtc_with_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_udp_face_analysis": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_the_motion-sensing_function_of_recamera_to_play_games": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/using_stream_deck_to_control_recamera_gimbal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_benchmarking": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_network_connection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_warranty": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/gimbal_development_c": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_gimbal_node_red": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pid_adjustment": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_gimbal_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_hq_poe_microscope_demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_hq_poe_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_2002_series_hardware_and_specs": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_gimbal_hardware_and_specs": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reCamera_hq_poe_hardware_and_specs": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/configure_static_ip_on_recamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_develop_with_c_cpp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_develop_with_node-red": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_linux_fundamentals": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/make_the_cpp_program_auto_start_on_boot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_os_structure": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_os_version_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/real_time_yolo_object_detection_using_recamera_based_on_cpp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_connects_to_xiao_via_http": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/train_classification_model_online": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_ha_sound_alert": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_imu_tilt_shake_detection": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_visual_wake_stt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_faqs": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_hardware_specifications": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_gpio_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_imu_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_mipi_dsi_screen_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_speaker_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_uart_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_device-and-system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_network": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_authentication": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_common_conventions": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_error_codes": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_faq": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_api_quick_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_development_cpp_skill": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_ai_inference": [
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_device_info": [
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_live_preview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_live_view": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_record_settings": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_terminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/recamera_pro_acoustic_lab_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reServer-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reServer-Update-BIOS-Install-Drivers": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/object_detection_with_yolov11_on_recomputer_rk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rockchip-devices": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edge_Computing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/robotics_page": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/solution_of_insufficient_space": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Troubleshooting_Installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Fan_Pinout": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/not_recognize-onboard-microcontroller": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Power_button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/power_up": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reinstall_the_Original_Windows": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/TPM": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Troubleshooting_BIOS-Related_Issues": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Turn_on_the_Fan": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/change_default_gateway_IP": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/fix_device_ReadOnlyRootFilesystem": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/set_up_Rclone_from_web_UI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_a_CM4_witout_eMMC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/R1000_default_username_password": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/black_glue_around_CM4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Boot_OS_from_USB_flash_drive": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/buzzer-leds-not-work_by_drivers": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/check_Encryption_Chip": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/disable_screen_rotation_on_reTerminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flashing_os_on_non-eMMC_CM4_replacement": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash_different_os_to_emmc": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Incorrect_screen_orientation_on_RPiOS_Bullseye": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/install-ubuntu-on-reterminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Logging_in_OS_using_USB_to_serial_converter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/log_rpios_use_ssh_over_wifi_ethernet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_black_screen": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/screen_refresh_rate_low": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/troubleshooting-touch-screen-inaccuracy": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/upgrade-rpiOS_installed-packages": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wakeup_reTerminal_LCD_after_sleep": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Program_loss_by_repeated_power": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/battery_charging_considerations": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bat_5vNo_OUTPUT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/check_battery_voltage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DO_NOT_display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/error_when_use_XIAOnRF52840": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/error_when_using_the_code": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/exp32c3_d9_d6_d8": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/in_other_microcontrollers_or_development_boards": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/limitations_on_the_maximum_cable_length": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/multiple_in_the_same_CAN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/noport_upload_fails": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/not_being_flush": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/pin_definition_error": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reflash_the_bootloader": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/TFT_or_LVGL_program": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/the_maximum_baud_rate": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/troubleshoot_CAN_communication_issues": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/two_TF_card": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/uploading_while_an_error-rp2040": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Getting_Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/License": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lora_antenna_selection_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/semtech_lr2021_evk_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LoRa-E5_STM32WLE5JC_Module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LoRa_E5_Dev_Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LoRa_E5_mini": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lora-e5_relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio-s3_wireless_module_command_list": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio-s3_wireless_module_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-WM1110_Dev_Kit_Hardware_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Get_Started_with_Wio-WM1110_Dev_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-WM1110_Dev_Kit/Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_lr2021_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_lr2021_pcb_design_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/4_layer_sandwich_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262_xiao_esp32s3_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262_with_xiao_esp32s3_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262_xiao_esp32s3_LNS_Chirpstack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262_xiao_esp32s3_LNS_TTN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262_xiao_esp32s3_for_lora_sensor_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_sx1262_xiao_esp32s3_for_single_channel_gateway": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/change_antenna_path": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/configure_param_for_wio_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_tracker_home_assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/connect_wio_tracker_to_TTN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/development_tutorial_for_Wio-trakcer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/setup_toolchain_for_wio_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_tracker_dual_stack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Get_Started_with_Wio-Trakcer_1110": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Tracker_Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/connect_wio_tracker_to_locator": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/update_internal_lr1110_firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/WM1302_module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/WM1302_Pi_HAT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_node_map_meshtracker_x1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_node_map_x1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_source_code_practical_tutorial_meshtracker_x1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_source_code_pratical_tutorial_meshtracker_x1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/x1_get_started_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_meshtracker_x1_meshcore": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtracker_x1_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_indicator_meshtastic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_node_map_solar_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_node_map_solar_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_source_code_pratical_tutorial_solar_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_source_code_practical_tutorial_solar_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_meshtastic_solar_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_meshcore_solar_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_solar_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_node_map_t1000e": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_node_map_t1000_e": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_source_code_practical_tutorial_t1000_e": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_source_code_pratical_tutorial_t1000_e": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_t1000_e_meshcore": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_t1000_e": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/t1000_e_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash_meshtastic_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_kit_wio_tracker_1110": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_tracker_l1_3d_enclosure": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_node_map_l1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_node_map_l1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_source_code_practical_tutorial": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshcore_source_code_pratical_tutorial_l1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_meshtastic_wio_tracker_l1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_other_mesh_firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_tracker_l1_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_meshcore_remote_terminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_&_wio_sx1262_kit_meshmonitor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/meshtastic_node_map_esp32s3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_&_wio_sx1262_kit_mqtt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_esp32s3_meshcore": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf52840&_wio_SX1262_kit_for_meshtastic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/4g_lte_hotspot_on_raspberry_pi_os": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/raspberry_pi_4g_lte_hat_mbim": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/4g_lte_hat_and_raspberry_pi_router_with_openwrt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/raspberry_pi_4g_lte_hat_qmi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/raspberry_pi_4g_lte_hat_rndis": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ftp_with_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/raspberry_pi_4g_hat_gnss_functionlities": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/raspberry_pi_4g_hat_ecm_mobile_internet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mqtt_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/send_receive_sms_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/tcp_ip_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_raspberry_pi_4g_lte_hat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mender-Client-dual-GbE-CM4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/OpenWrt-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/OpenWrt-Plex-Media-Server-on-Docker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/FAQs_For_openWrt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry-OpenWrt-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reRouter_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/H28K-install-system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/H28K_Datasheet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/h68kv2_datasheet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/H68KV2_install_system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grocy-bookstack-linkstar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/h68k-ha-esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/plex_media_server": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wordpress_linkstar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/linkstar-install-system": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Linkstar_Datasheet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Linkstar_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Rockchip_network_solutions": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/IoT-into-the-wild-contest": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1111-Quick-Start-Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1111-Edge-Impulse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Vision_AI_with_Customizable_Models": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-quickstart": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connect_AWS_via_helium": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Helium-Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Configuring-Web-APP-Visualization": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connecting-to-Helium": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Integrate-into-Azure-IoT-Hub": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Integrate_into_Google_Sheets_via_Helium": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_sensecap_node-red": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_SenseCAP_to_Azure_IoT_Central": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_SenseCAP_to_datacake": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_SenseCAP_to_grafana": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_SenseCAP_to_influxdb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_SenseCAP_to_PowerBI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_SenseCAP_to_twilio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-IMU-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-Light-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-Temp-Humi-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-Vision-AI-Module-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connecting-to-TTN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/TTN-Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_K1100_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connect-Wio-Terminal-to-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Develop-in-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/K1100_Azure_to_PowerBI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connect-Wio-Terminal-to-Google-Cloud": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Getting_started_with_Ubidots": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Quick-Start-to-using-Blynk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Advanced-WiFi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/platformio_wio_e5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/M2_Kit_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_use_bacnet_ms_tp_with_r1225": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_use_modbus_rs485_with_r1225": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/connecting_r1225_to_aws_iot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/connecting_r1225_to_chirpstack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/connecting_r1225_to_ttn": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/r1225_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/r1225_quick_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/Troubleshooting": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/M2_Local_Console": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_Gateway_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Local_Console": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bulk_configuration_chirpstack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash_opensource_firmware_to_m2_gateway": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_m2_LNS_config": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/quick_start_with_M2_MP": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/traffic_saving_config": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/install_ubuntu_on_sensecap_m4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/The-Things-Indoor-Gateway": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_wifi_halow_mini_pcie_module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_wifi_halow_module_for_xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Network": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/damiao_series": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/fashionstar_servo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/feetech_servo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/hightorque_series": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/hightorque_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/hightorque_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/myactuator_series": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/robstride_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/stackforce_series": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/dm_gripper": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/hand_amazinghand": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/atom_s": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/atom_x": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_double_arm_so_arm_training": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_dataset_tool": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_lekiwi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_so100m": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_so100m_isaacsim": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_so100m_new": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_soarm101_Rynnbot_Developer_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_starai_arm": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/soarm101_xiao_microros_wireless_teleoperation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/soarm_amazinghand_teleop": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sound_follow_robot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/starai_arm_ros_moveit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/lerobot_steering_gear_debugging_tool": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_agents": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_apps": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_daemon": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_media": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_motion": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_reachymini": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_rest-api": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_tools": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_api_utils": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_development_cases_home_assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_development_cases_gripper_voice_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_custom_media_manager": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_goto_interpolation_playground": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_imu": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_joy_controller": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_look_at": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_minimal_demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_mini_head_position_gui": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_reachy_compliant_demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_recorded_moves": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_rerun_viewer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_sequence": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_sound_doa": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_sound_play": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_sound_record": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_examples_take_picture": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_development_workflow": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_get_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_hardware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_install_daemon_from_branch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_media_advanced_controls": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_reflash_the_rpi_iso": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_reset": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_lite_get_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_lite_hardware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_lite_media_advanced_controls": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_lite_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_reachy_mini_lite_wizard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_platforms_simulation_get_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_apps": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_core-concept": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_gstreamer-installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_integration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_javascript-sdk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_media-architecture": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_python-sdk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_quickstart": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_sdk_readme": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_troubleshooting_change_mic_fpc_cable": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_troubleshooting_motors_diagnosis": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_troubleshooting_roadmap": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_troubleshooting_spherical_joints_maintenance": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_troubleshooting": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reachymini_vibe-code-with-your-agent": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_b601_dm_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_dm_grasping_demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_dm_isaacsim": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_dm_lerobot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_dm_pinocchio_meshcat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_dm_ros2_integration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_dm_web_simulator_developer_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_rs_mit_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_b601_rs_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_rs_grasping_demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_rs_isaacsim": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_rs_lerobot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_rs_pinocchio_meshcat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_rs_ros2_integration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rebot_arm_b601_rs_web_simulator_developer_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/stackforce_giant_bipedal_wheeled_robot": [
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/stackforce_mini_wheeled_legged_robot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/csi_camera_on_ros": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ac1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/orbbec_gemini2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/orbbec_gemini336": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/orbbec_depth_camera_on_ros": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/orbbec_gemini_335lg": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/orb_slam3_orbbec_gemini2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/pycuvslam_recomputer_robotics": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/realsense_3d_seg": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensing_gmsl_cameras": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/hexfellow_y200": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wheeltec_imu": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/a_loam": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mid360": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/robosense_lidar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/slamtec": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/control_robotic_arm_via_phospho": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/install_isaaclab": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/simulate_soarm101_by_leisaac": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/training_soarm101_policy_with_isaacLab": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/control_px4_with_recomputer_jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/object_tracking_with_reComputer_jetson_and_pX4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/installing_ros1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/install_isaacros": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/install_ros2_humble": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/isaac_ros_apriltag": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/isaac_ros_visual_slam": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/control_robotic_arm_via_gr00t": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Air602_Firmware_Programming_Manual": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Air602_WiFi_Development_Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Artik": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Eagleye_530s": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Atom_Node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bees_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BLE_Bee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BLE_dual_Bee_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bluetooth_Bee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bluetooth_Bee_Standalone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bluetooth_Bee_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bluetooth_V4.0_HM_11_BLE_Module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/GPS_Bee_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Bee_Socket": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-XBee_Carrier": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mesh_Bee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RFbee_V1.1-Wireless_Arduino_compatible_node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/UartSBee_V3.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/UartSBee_V4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/UartSBee_v5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Bee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Bee_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XBee_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XBee_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/discontinuedproducts": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/4WD_Driver_Platform_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/4WD_Mecanum_Wheel_Robot_Kit_Series": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Atmel_AVRISP_STK500_USB_ISP_Programmer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/AT_Command_Tester": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/AT_Command_Tester_Application": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Basic_Fastener_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BLE_Carbon": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BLE_Micro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BLE_Nitrogen": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bugduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/CUI32Stem": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Danger_Shield_Complete_Kits": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edison_4WD_Auto_Robotic_Platform": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edison_4WD_Auto_Robotic_Platform_2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ESP32_Breakout_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/FST-01": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Fubarino_SD": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Base_Shield_for_IOIO-OTG": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_BoosterPack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_Shield_for_Photon": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_IoT_Developer_Kit-Microsoft_Azure_Edition": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Maker_Kit_for_Intel_Joule": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Shield_for_Intel_Joule": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Hercules_Dual_15A_6-20V_Motor_Controller": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/IoT_Fast_Prototyping_Kit_S5D9": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Matrix_Clock": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mbed_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mini_GSM_GPRS_GPS_Breakout_SIM808": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Nose_LED_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Serial_port_bluetooth_module_Master-Slave": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sidekick_Advanced_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sidekick_Basic_Kit_for_TI_LaunchPad": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Stepper_Motor_Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Stepper_Motor_Driver_v2.3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Tiny_BLE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Tricycle_Bot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/UartSB_Frame": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arduino_Breakout_for_LinkIt_Smart_7688_Duo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Breakout_for_LinkIt_Smart_7688": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Breakout_for_LinkIt_Smart_7688_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Breakout_for_LinkIt_Smart_7688_Duo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_kit_for_LinkIt_Smart7688_Duo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Linkit_Connect_7681": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_Smart_7688": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_Smart_7688_Duo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Starter_Kit_for_LinkIt_ONE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt-ONE-Tutorial---Mini-Servo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-Analog_Interface": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-Colorful_World": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-Hello_World": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-Light-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-Marquee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-Push_Button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-SMS_control_the_LED": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIt_ONE_Tutorial-The_Basics": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Secret_Box": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sidekick_Basic_Kit_for_LinkIt_ONE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_Elderly/Navigation/Edge_Computing_4.7": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_Elderly/Navigation/Sensor_Network_4.7": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/NPi-i.MX6ULL-Dev-Board-Linux-SBC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Rainbowduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Rainbowduino_Extension_Board_v0.9b": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Rainbowduino_LED_driver_platform-ATmega328": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Rainbowduino_v3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_Elderly/Rainbowduino/Rainbow_Cube_Kit_Acrylic_Harness": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How-to-build-a-home-soft-router-and-NAS-With-ReComputer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arduino_IDE_for_RePhone_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Eclipse_IDE_for_RePhone_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/JavaScript_for_RePhone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Lua_for_RePhone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RePhone_APIs-Audio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RePhone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RePhone_core_2G-Atmel32u4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Rephone_core_2G-AtmelSAMD21": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RePhone_Geo_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RePhone_Lumi_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RePhone_Strap_Kit_for_Pebble": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Retro_Phone_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Google_Assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Core_V2_&_Wio_Link": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Solutions": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Voice_Interaction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Drive_Unit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Mic_Array": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Mic_Array_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_mic_array_v3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker-USB-Mic-Array": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_4_Mic_Array_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Core": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Core_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_Product_Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Skeleton_Bot-4WD_hercules_mobile_robotic_platform": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Skeleton_Box": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Skeleton_Box_10x7_10x10_17x10": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/W600_Module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_1.54_inch_Touchscreen": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_3_Aixs_Accelerometer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Audio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Barometer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Barometer_BMP180": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Basic_Sensors": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_BLE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_BLE_Dual_Model_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_BLE_Slave": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Breakout": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Buzzer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Compass": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Duino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Edison_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Gesture_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_GPS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_GPS_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Grove_Adaptor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_GSMPlusBLE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_GSM_Breakout": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_IMU_10DOF": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_IMU_6DOF": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_IMU_9DOF": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_LED_5x7": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_LED_5_multiply_7_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_M0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Main_Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Metal_Frame": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Motor_Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Multichannel_Gas_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_NFC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_NFC_tag": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_NFC_v2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Pebble_Time_Adapter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Q_Touch_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_RGB_OLED_96multiply64": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_RTC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Storage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Tutorial_Acceleration_Detector": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Tutorial_Communicate_via_BLE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Tutorial_Shaking_Shaking": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_UV_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Vibrator_Motor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_Wearable_Kit_For_Edison": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xado_OLED_128multiply64": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_BLE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_GPRS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_GPRS_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_Link": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_Max": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_Max_v1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_Mix": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_Pro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arch_V1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Starter_Kit_for_mbed": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Heart-Sound_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Azure_Sphere_MT3620_Development_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/MT3620_Ethernet_Shield_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/MT3620_Grove_Breakout": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/MT3620_Mini_Dev_Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bracket_for_Infrared_Proximity_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Shield-MaTrix-V0.9b": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/0.5w_Solar_Panel_55x70": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/1.5W_Solar_Panel_81x137": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/1w_Solar_Panel_80x100": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2.5W_Solar_Panel_116x160": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/3.6V_Micro_hydro_generator": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/3W_Solar_Panel_138x160": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/5V-3.3V_Breadboard_Power_Supply": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/5V-3.3V_Breadboard_Power_Supply_v1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Battery_kit_3.7V_520_mAh": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bicycle_Dynamo_With_Bracket-6V_3W": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DC_framework_miniature_solenoid_VL-0063": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DC_framework_solenoid_HCNE1-0520": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DC_framework_solenoid_HCNE1-0630": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Essentials": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Lipo-Rider-Plus": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Lipo_Rider": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Lipo_Rider_Pro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Lipo_Rider_V1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Lipo_Rider_V1.3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Logic_DC_Jack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Qi_Wireless_Charger_Transmitter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Adjustable_DC_DC_Power_Converter_1V-12V-1.5A": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Capacitance_Meter_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RS-232_To_TTL_Conveter-MAX3232IDR": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/125Khz_RFID_module-UART": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/13.56Mhz_RFID_module-IOS-IEC_14443_type_a": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2.8inch-TFT_Touch_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/AVR_USB_Programmer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bus_Pirate_v3_assembled": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Codec-Adaptive_Wireless_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Scream_out_loud-110dBA_fixed_tone_Siren": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/USB_To_Uart_3V3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/USB_To_Uart_5V": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/USB_To_Uart_5V_3V3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/FSM-55": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bluetooth_Multimeter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Dfu-util": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Nano-Development": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Nano-gcc": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Nano-OpenOCD_gdb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Nano-Qemu_gdb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Nano": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Nano_v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Quad-Beta_HW": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Quad-Building_Firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Quad-Calibration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Quad": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/DSO_Quad_Manual_by_the_community": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Mini_Soldering_Iron": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Replacement_LCD_Screen_for_DSO_nano": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RF_Explorer_Software": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ai_assistant_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Get_Started_with_EcoEye_Embedded_Vision_Camera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/G1-8_Water_Flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/G1_and_2_inch_Water_Flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/G1_Water_Flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/G3-4_Water_Flow_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Gear_Stepper_Motor_Driver_Pack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/M11_1.25_Water_flow_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Photo_interrupter_OS25B10": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Photo_Reflective_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Piezo_Sensor-MiniSense_100": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/PIR_Motion_Sensor_Large_Lens_version": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Ultra_Sonic_range_measurement_module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Water-Flow-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Weight_Sensor_Load_Cell_0-500g": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2KM_Long_Range_RF_link_kits_w_encoder_and_decoder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/315Mhz_remote_relay_switch_kits-2_channels": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/315Mhz_RF_link_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/315MHz_Simple_RF_Link_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/315Mhz_Wireless_car_key_fob_with_key_chain": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/433Mhz_RF_Link_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SDLogger-Open_Hardware_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/WiFi_Serial_Transceiver_Module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wireless_Sensor_Node-Solar_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_work_with_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_eezstudio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_work_with_esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_lopaka": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_work_with_lvgl": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/EN04_opendisplay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_work_with_platformio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/EE04_with_hmi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_squareline_vision": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_trmnl": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_work_with_zephyr": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_epaper_display_board_overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/EE04_with_esphome_advanced": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ee04_with_platformio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_ee02": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_ee03": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_ee04": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_ee05": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-eInk-Expansion-Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_eink_expansion_board_v2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_EN04": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/epaper_en05": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_arduino_peripherals": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_arduino_peripherals_2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_esphome_advanced": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_with_esphome_rtc_sd_microphone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_reterminal_e1001": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_reterminal_e1002": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_reterminal_e1003": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_reterminal_e1004": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_e10xx_main_page": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/seeed_epaper_displays": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ogdiy_kit_works_with_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ogdiy_kit_works_with_esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/trmnl_7inch5_diy_kit_main_page": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_075inch_epaper_panel_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_075inch_epaper_panel_esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_075inch_epaper_panel": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-16-Channel_PWM_Driver-PCA9685": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-2-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-2-Channel_SPDT_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-2-Coil_Latching_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-4-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-4-Channel_SPDT_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-8-Channel_Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Buzzer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Chainable_RGB_LED": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Dry-Reed_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-EL_Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Haptic_Motor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C-Motor-Driver-L298P": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Motor_Driver-TB6612FNG": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Motor_Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Motor_Driver_V1.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Motor_Driver_V1.3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Infrared_Emitter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_Matrix_Driver_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mini_Fan": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mini_I2C_Motor_Driver_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-MP3-v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_mp3_v4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-MP3_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Optocoupler_Relay-M281": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Passive-Buzzer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Recorder_v3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Serial_MP3_Player": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Servo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Solid_State_Relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Solid_State_Relay_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Speaker-Plus": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Speaker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Variable_Color_LED": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Vibration_Motor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Voltage_Divider": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Water_Atomization": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Recorder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Wrapper": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-10A_DC_Current_Sensor-ACS725": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-2.5A-DC-Current-Sensor-ACS70331": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-5A_DC_AC_Current_Sensor-ACS70331": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Electricity_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Electromagnet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-MOSFET": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Screw_Terminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-SPDT_Relay_30A": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Accessories_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-16-bit-ADC-ADS1115": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-AND": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-DC_Jack_Power": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Differential_Amplifier_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Differential_Amplifier_v1.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-FM_Receiver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C-Hub-6Port": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Hub": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mini_Camera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-NOT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-NunChuck": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-OR": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-PS_2_Adapter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Qwiic-Hub": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-RS232": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-RS485": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Serial_Camera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Circular_LED": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_Bar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_Matrix_Driver-HT16K33": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_ring": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_Socket_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_String_Light": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_Strip_Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Red_LED": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Red_LED_Matrix_w_Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-RGB_LED_Matrix_w-Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-RGB_LED_Stick-10-WS2813_Mini": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-5-Way_Switch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-6-Position_DIP_Switch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Dual-Button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Joint_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LED_Button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Magnetic_Switch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mech_Keycap": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Switch-P": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Thumb_Joystick": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-RTC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_High_Precision_RTC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Analog_Accelerometer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Compass_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-1.5g": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-16g": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digital_Accelerometer-400g": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digital_Gyro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-3-Axis_Digitial_Compass_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-6-Axis_Accelerometer&Gyroscope_BMI088": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-6-Axis_AccelerometerAndCompass_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-6-Axis_AccelerometerAndGyroscope": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove-d7s-vibration-sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-IMU_10DOF": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-IMU_10DOF_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-IMU_9DOF-lcm20600+AK09918": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-IMU_9DOF_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Single_Axis_Analog_Gyro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_accelerometer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edge-impulse-vision-ai": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/gesture_control_music_application": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_gesture_paj7660": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Vision-AI-Module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/connect_vision_ai_v2_to_sensecap_mate": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_telegram": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_webcamera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/vision_ai_v2_crowd_heat_map": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_himax_sdk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_at": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-vision-ai-v2-camera-supported": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_software_support": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_rs485": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2_sscma": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_vision_ai_v2a": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Train-Deploy-AI-Model-Grove-Vision-AI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Air_Quality_Sensor_v1.3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Dust_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Formaldehyde-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Laser_PM2.5_Sensor-HM3301": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-CO2_Temperature_Humidity_Sensor-SCD30": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_SEN5X_All_in_One": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Barometer-High-Accuracy": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Barometer_Sensor-BME280": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Barometer_Sensor-BMP180": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Barometer_Sensor-BMP280": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_barometer_sensor_spa06_003": [
    "cn",
    "en",
    "es",
    "pt"
  ],
  "/Grove-Barometer_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Integrated-Pressure-Sensor-Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_barometer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Capacitive-Fingerprint-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Chest_Strap_Heart_Rate_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Ear-clip_Heart_Rate_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-EMG_Detector": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Finger-clip_Heart_Rate_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Finger-clip_Heart_Rate_Sensor_with_shell": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Fingerprint_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-GSR_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Human_Presence_Sensor-AK9753": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_biomedicine": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Alcohol_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-CO2_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gas_Sensor-MQ2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gas_Sensor-MQ3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gas_Sensor-MQ5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gas_Sensor-MQ9": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gas_Sensor-O2-MIX8410": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gas_Sensor-O2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gas_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-HCHO_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Multichannel-Gas-Sensor-V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Multichannel_Gas_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Oxygen-Sensor-Pro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove-smart-air-quality-sensor-sgp41": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-VOC_and_eCO2_Gas_Sensor-SGP30": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_voc_gas_sensor_sgp40": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_Gas_Sensor_Selection_Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Sensor_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Digital_Light_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Flame_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Heelight_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Color_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_UV_Sensor-VEML6070": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Infrared_Receiver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Infrared_Reflective_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_line_follower": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove-lightning-sensor-as3935": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Light_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Line_Finder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Luminance_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Sunlight_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-UV_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_color_sensor_v3_0_iic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_light": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/G1-1-4_Water_Flow_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-EC-Sensor-kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-ORP-Sensor-kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-ORP-Sensor-Pro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-PH-Sensor-kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-PH_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-TDS-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Water-Level-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Water_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_liquid": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Collision_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Digital-PIR-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Encoder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mini_Track_Ball": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mouse_Encoder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Optical_Rotary_Encoder-TCUT1600X01": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Piezo_Vibration_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-PIR_Motion_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Slide_Potentiometer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Step_Counter-BMA456": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Tilt_Switch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Vibration_Sensor_SW-420": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_motion": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-80cm_Infrared_Proximity_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Adjustable_PIR_Motion_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Doppler-Radar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Gesture_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Hall_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-IR_Distance_Interrupter_v1.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-TF_Mini_LiDAR": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Time_of_Flight_Distance_Sensor-VL53L0X": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Ultrasonic_Ranger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_ultrasonic_sensor_sms812": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_distance": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Moisture_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Analog-Microphone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Loudness_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Offline-Voice-Recognition": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Recorder_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Sound_Recorder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Sound_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Speech_Recognizer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_sound": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-SHT4x": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-TempAndHumi_Sensor-SHT31": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Temperature-Humidity-Sensor-DH20": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-TemperatureAndHumidity_Sensor-HDC1000": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-TemperatureAndHumidity_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Temperature_and_Humidity_Sensor_Pro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Digital_Infrared_Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-High_Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Thermocouple_Amplifier-MCP9600": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Infrared_Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Infrared_Temperature_Sensor_Array-AMG8833": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Temperature_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Temperature_Sensor_V1.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Thermal-Imaging-Camera-IR-Array": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/One-Wire-Temperature-Sensor-DS18B20": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-2_Channel_Inductive_Sensor-LDC1612": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_Touch_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Rotary_Angle_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Round_Force_Sensor_FSR402": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Touch_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_adc_for_load_cell_hx711": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-BLE-dual_model-v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-BLE_v1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Serial_Bluetooth": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Serial_Bluetooth_v3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-GPS-Air530": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-GPS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_network_module_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Wio_E5_Helium_Demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Wio_E5_Helium_tinyML_Demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Wio_E5_P2P": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Wio_E5_SenseCAP_Cloud_Demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Wio_E5_TTN_Demo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_LoRa_E5_New_Version": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_NFC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove-nfc-st25dv64": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_NFC_Tag": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-125KHz_RFID_Reader": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-315MHz_RF_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-433MHz_Simple_RF_Link_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Serial_RF_Pro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_LoRa_Radio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-DMX512": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_ADC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_FM_Receiver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-I2C_FM_Receiver_v1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Protoshield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-RJ45_Adapter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-UART_Wifi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-UART_Wifi_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_System": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SEEED-IOT-BUTTON-FOR-AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_seeed_iot_button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/iot_button_for_esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/iot_button_v2_ha_discovery": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/seeed_iot_button_with_zigbee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/1-47inch_lcd_spi_display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/1-69inch_lcd_spi_display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/round_display_animation_workshop": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/round_display_christmas_ball": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/using_lvgl_and_tft_on_round_display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/seeedstudio_round_display_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_start_round_display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-0.54_inch_Red_Dual_Alphanumeric_Display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-0.54_inch_Red_Quad_Alphanumeric_Display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove_1.2inch_ips_display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-16x2_LCD_Series": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-4-Digit_Display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-BlinkM": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-LCD_RGB_Backlight": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-OLED-Display-0.66-SSD1306_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-OLED-Display-0.96-SSD1315": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-OLED-Display-1.12-SH1107_V3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-OLED_Display_0.96inch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-OLED_Display_1.12inch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Serial_Camera_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Serial_LCD_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Triple_Color_E-Ink_Display_1_54": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Triple_Color_E-Ink_Display_2_13": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/I2C_LCD": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LCD_16-2_Characters-Green_Yellow_back_light": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LCD_8-2_Characters-Blue_back_light": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/driving_reterminal_d1001_speaker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/driving_reterminal_d1001_microphone": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_reterminal_d1001": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reterminal_d10xx_main_page": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_Application_Home_Assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_LoRa": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_Application_LoRaWAN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_Application_Matter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_Application_ChatGPT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_Single_Channel_Gateway": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_indicator_project": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_ESP32_BLE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_ESP32_Button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_ESP32_LoRa": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_ESP32_Wi-Fi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_RP2040_Buzzer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_RP2040_CO2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_RP2040_Grove_ADC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_RP2040_Grove_IIC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_RP2040_MicroSD": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_RP2040_tVOC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_Dive_into_the_Hardware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_How_to_Create_your_own_UI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_ESP32_Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_Native_Firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_ChatGPT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_DALL-E": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Indicator_OpenAI_X_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mmwave_for_xiao_to_ha_bt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mmwave_for_xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mmwave_for_xiao_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mmwave_radar_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mmwave_human_detection_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mmWave_Kit_And_Grove_Connect_To_ESPHome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_mr60bha2_mmwave_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ha_with_mr60bha2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_mr60fda2_mmwave_kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ha_with_mr60fda2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Radar_MR24BSD1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Radar_MR24FDB1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Radar_MR24HPB1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Radar_MR24HPC1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Radar_MR60BHA1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Radar_MR60FDA1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Starter-Kit-for-Raspberry-Pi-Pico": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT_Jetson": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ReSpeaker_2_Mics_Pi_HAT_Raspberry": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_2_mics_pi_hat_raspberry_v2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_2_mics_pi_hat_v2_speech_recognition": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_basic_sdk_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_customization_at_command": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_firmware_development_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_firmware_quick_start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_python_build_app": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_python_build_app_with_memory": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_sensecraft_voice_sdk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_clip_service_integration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_doa_vad": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_gpio_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_i2s": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_lekiwi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_soarm": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_picovoice_nlu_keyword_spotting": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_python_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/control_rebot_arm_using_voice_with_respeaker_flex": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_ros2_voice_pipeline": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_volume_control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_http_stream": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_mqtt_stream": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_record_playback": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_flex_xiao_udp_streaming": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_lite_ha": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_lite_pi5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_enclosure": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/reSpeaker_usb_v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_button": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_i2s_rgb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_i2s_test": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_player_spiffs": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_record_and_play": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_rgb_test": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_streams_generator": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_streams_i2s_tflite": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_streams_memory": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_steams_mqtt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_streams_print": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_volume": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_respeaker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_i2s": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_agora_convo_client": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_agora_ten_framework_client": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf_3800_arm": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_doa_vad": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_edge_impulse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_gpio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_home_assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_http_audio_stream": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf_3800_i2c_list": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_mqtt_audio_stream": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf_3800_openclaw": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_picovoice": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_python_sdk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_record_playback": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_rgb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_ros2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_ros2_voice_pipeline": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_sensecraft": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_tensorflow": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_udp_audio_stream": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_voice_assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_volume": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf3800_xiao_websocket_audio_stream": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/respeaker_xvf_3800_xiaozhi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-Kit-Courses": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_matter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/matter_development_framework": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_idf": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32_matter_env": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/PCB_Design_XIAO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/esp32c3_smart_thermostat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-esp32c3-esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-ESP32C3-for-ESPHome-Support": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-esp32c3-prism-display": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiaoesp32c3-chatgpt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiaoesp32c3-flash-storage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-c3-ibeacon": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c3_espnow": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-esp32c3-espresense": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c3_microblocks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c3_nuttx": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-ESP32C3-Zephyr": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32C3_Bluetooth_Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32C3_Getting_Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32C3_MicroPython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32C3_Pin_Multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32C3_WiFi_Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c3_with_circuitpython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c3_with_micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_esp-mesh_audio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_homeassistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xaio_esp32c5_wifi_throughput_tester": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-esp32--series-espresense": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_with_freertos": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_with_zephyr": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_bluetooth_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_wifi_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_with_micropyhton": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_with_platformio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_zigbee_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_zigbee_homeassistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c5_zigbee_idf": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_aws_iot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_espnow": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_kafka": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_nuttx": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_bluetooth": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-esp32-swift": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_pin_multiplexing_esp32c6": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_wifi_usage_esp32c6": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_with_circuitpython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_cursor_create_zigbee_prj": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiaoc6_zigbee_led_ha": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_zigbee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32c6_zigbee_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edgeimpulse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/tinyml_course_Image_classification_project": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/tinyml_course_Key_Word_Spotting": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32S3_esphome": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_espnow": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/geolocation_tracker_with_XIAO_ESP32S3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32S3_GPIO_Viewer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_keyword_spotting": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_speech2chatgpt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_sscma": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_voice_pomodoro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_microblocks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-esp32s3-freertos": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_nuttx": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_zephyr_rtos": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_bluetooth": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_project_circuitpython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_edgelab": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32S3_Micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_ESP32S3_Consumption": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_wifi_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_with_micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_camera_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_sense_mic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_esp32s3_sense_filesystem": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bus_servo_driver_board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_cob_led_dirver_board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/gnss_for_xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/io_expander_for_xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_start_l76k_gnss": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/L76K_Path_Tracking_on_Ubidots": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/led_driver_board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-XIAO-Expansion-Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-can-bus-expansion": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/rgb_matrix_for_xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-RS485-Expansion-Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_sense_built_in_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_matter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_ha_openthread": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_bluetooth": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_sense_micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_mg24_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-ble-sidewalk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_BLE_HA": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-Bluetooth-Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-Bluetooth_Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-PDM-EI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-TFLite-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-TFLite-Mic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAOEI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_ble_microblocks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-IMU-Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-NFC-Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-PDM-Usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE-Sense-Pin-Multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-BLE_CircutPython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-ble-qspi-flash-usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf52840_nuttx": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-nRF52840-Zephyr-RTOS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf52840_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_BLE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_bluetooth_usage": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_built_in_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_matter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_sense_power_consumptions": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54l15_zigbee": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_epaper_and_sdcard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_bluetooth_lowpower": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_matter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_nfc": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_onboard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_getting_started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_low_power": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_ncs": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_nrf54lm20a_with_micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_ra4m1_clock": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_ra4m1_mouse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_ra4m1_nuttx": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_xiao_ra4m1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_ra4m1_pin_multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_ra4m1_micropython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_ra4m1_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-RP2040-EI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_rp2040_microblocks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-RP2040-with-Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-RP2040-with-CircuitPython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-RP2040-with-MicroPython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-rp2040-with-nuttx": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-RP2040-Zephyr-RTOS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-RP2040": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_rp2040_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_rp2350_microblocks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting-started-xiao-rp2350": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_rp2350_nuttx": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_rp2350_arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao-rp2350-c-cpp-sdk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_RP2350_Pin_Multiplexing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_rp2350_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-XIAO-TinyML": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_samd21_microblocks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-XIAO-by-Nanase": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-XIAO-CircuitPython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-XIAO-TinyUSB": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-XIAO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-XIAO-DAPLink": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-SAMD21-MicroPython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-SAMD21-Zephyr-RTOS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO-SPI-Communication-Interface": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_samd21_with_platform_io": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SeeedStudio_XIAO_Series_Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_topic_page": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_xiao_debug_mate": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_debug_mate_debug": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_debug_mate_power": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_debug_mate_serial": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_espnow": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_FAQ": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2_channel_wifi_ac_energy_meter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2_channel_wifi_ac_relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/6_channel_wifi_relay": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/relay_add_on_module_for_xiao": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_rs485_vision_ai_cam": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_bus_servo_adapter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/XIAO_IR_Mate_Smart_IR_Remote": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_midi_synthesizer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_soil_moisture_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/esphome_xiao_w5500_ethernet_adapter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/xiao_w5500_ethernet_adapter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Driver_for_Seeeduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/FM_Receiver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/grove-sgp41-with-aht20": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Getting_Started_with_Seeeduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_IoT_Starter_Kits_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SeeedStudio-GD32-RISC-V-Dev-Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_V2.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_v2.21": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_V2.2_Atmega-168P": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_v3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_v4.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_v4.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-Cortex-M0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-Crypto-ATmega4809-ECC608": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-Nano": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_ADK_Main_Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Arch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Arch_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Buying_Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Cloud": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Ethernet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_GPRS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Lite": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_LoRAWAN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Lotus": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Lotus_Cortex-M0-": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Mega": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Mega_Protoshield_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino-Stalker_v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Stalker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Stalker_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Stalker_v2.3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Stalker_V3-Waterproof_Solar_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Stalker_V3.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeeduino_Stalker_v3_enclosure": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_Arduino_Boards": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/Accessories/Industrial-Grade-Optical-Rain-Gauge-RG-15": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/Accessories/Optical-Rain-Gauge-RG-9": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/develop_an_industrial_lorawan_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/home_assistant_with_sensecap_lorawan_sensors": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/select_lorawan_network": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_lorawan_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/t1000e_for_lorawan_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/open_source_lorawan": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/t1000_e_arduino_examples": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/tracker_at_command": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bluetooth_beacon01_for_sensecap_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bluetooth_beacon02_for_sensecap_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bluetooth_beacon03_for_tracker_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bluetooth_beacon03_for_tracker_user_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/get_started_with_sensecap_combo": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_combo_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Decoder": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Data_Logger_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Sensor_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP-SOLO-CO2-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/One-Stop-Model-Training-with-Edge-Impulse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP-Vision-AI-Get-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Train-Deploy-AI-Model-A1101": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/deploy_ai_with_a1102": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_a1102": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/setting_ai_with_a1102": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_LoRaWAN_S210X_Series_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_S2107": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/how_to_connect_sensecap_s210x_to_datacake_via_ttn": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_ONE_weather_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ORCH-S4-Weather-Station": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/benchmark_labs_forecast_integration_for_seeed_weather_stations": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/firmware_update": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP-ONE-Compact-Weather-Station-Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Industrial-ph-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_probes_intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RS485_750cm_Ultrasonic_Sensor-1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Sensor_Probes_Product_Catalogue": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Soil-Moisture-Temperature-EC-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Soil-Moisture-Temperature-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/total_solar_radiation_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor/SenseCAP/SenseCAP_Probe/Water-Leak-Detector": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/list_of_supported_grove_n_adding_more": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_Builder_build_LoRaWAN_Sensors": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/faq_for_SenseCAP_T1000": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/fm_release_for_SenseCAP_T1000": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_Tracker_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_Helium": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_Tracker_Loriot": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_TTN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ttn_mapper_for_SenseCAP_T1000": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_Tracker_Akenza": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_Datacake_TTS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_InfluxDB_TTS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_Qubitro_TTS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_Wialon": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_TagoIO_TTS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/thingsboard_integrated": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_trackpac": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_Ubidots_TTS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker_Ubidots_Helium": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/location_lambda_code": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_t1000_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T1000_tracker/Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/bluetooth_beacon_for_SenseCAP_Traker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Get_Started_with_SenseCAP_T1000_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/IPS_For_SenseCAP_T1000_Traker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/T1000_payload": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Tracker_WiFi_Geolocation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_t2000_tracker_aws": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_t2000_tracker_helium": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_t2000_tracker_ttn": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_t2000_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SenseCAP_T2000_tracker/Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/t2000_faq": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/t2000_payload_format": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Get_Started_with_SenseCAP_T2000_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/training_model_for_watcher": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/device_network_setup": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/extending_grove_with_mcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/face_regonition_with_mcp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mcp_endpoint": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/visual_trigger_and_ai_flash": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_web_control_panel": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash_watcher_agent_firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/use_case": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_software_framework": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_function_module_development_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/build_watcher_development_environment": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_ui_integration_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_to_node_red": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_ifttt": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_kafka": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_open_interpreter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_p5js": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_telegram": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_twilio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_discord": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_mongodb": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_node_red_to_whatsapp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/integrate_watcher_to_ha": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/uart_output": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_watcher_task": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_hardware_overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_operation_guideline": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/getting_started_with_watcher": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_price": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecap_app_introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_local_deploy": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher_software_service_framework": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/watcher": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sound_event_detection_module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sound_event_detection_module_home_assistant": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_tracker_for_sidewalk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/flash_to_wio_tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Link": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Link_Bootcamp_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Link_Deluxe_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Link_Deluxe_Plus_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Link_Environment_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Link_Event_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Link_Starter_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Shield-for-Wio-Lite": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_Shield_for_NodeMCU_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Lite-AI-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Lite-MG126": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Lite-W600": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Lite_RISC_V_GD32VF103_with_ESP8266": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Node": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Use_MQTT_to_remotely_light_up_LED_lights": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Use_Socket_to_connect_to_the_forum": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wireless-desktop-atmosphere-lamp": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wireless-Fall-Detection-Device": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LAN_Communications": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-RP2040-with-Arduino-WIFI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_RP2040_mini_Dev_Board-Onboard_Wifi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_RP2040_Module_Build-in_Wireless_2.4G": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_Kit_for_Wio_LTE": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LTE_Cat_1_Pi_HAT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Extension-RTC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_gps_board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_LTE_Cat.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_LTE_Cat_M1_NB-IoT_Tracker": [
    "cn",
    "en",
    "es",
    "pt"
  ],
  "/Wio_Tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/CyberDeck_Wio-Terminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Get-Started-with-Wio-Terminal-and-Wappsto-IoT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Azure-IOT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/AIoTs_GPS_state_tester": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-EI-1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-EI-2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-EI-3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-EI-4": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-EI-5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-EI-6": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Gesture-Recognition": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-TFLM-1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-TFLM-2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-TFLM-3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ArduPy-LCD": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ArduPy-Libraries": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ArduPy": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Audio-GUI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Audio-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Audio-Play-Record": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Battery-Chassis": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Chassis-Battery_650mAh": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Ethernet": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BLE-ibeacon-using-Wio-terminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-terminal-BLE-introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Bluetooth-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Web-Bluetooth": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Buttons": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Buzzer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Switch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IMU-Basic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IMU-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IMU-Tapping": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Infrared-Emitter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Grove": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IO-Analog": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IO-Digital": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IO-I2C": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IO-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-IO-SPI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Anti-aliased-Fonts": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-APIs": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Basic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Fonts": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Graphics": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Histogram": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Linecharts": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Loading-Image": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LCD-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-LVGL": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Light": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Mic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-RTC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-FS-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-FS-ReadWrite": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Advanced-Wi-Fi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Network-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Wi-Fi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Introduction_to_Artificial_Intelligence_for_Makers": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML-Kit-Course": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-TinyML": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Software-FreeRTOS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Azure_IoT_CC": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Barometric-Pressure-sensor-using-the-Wio-terminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Blynk-wireless-OTA-functionality-to-Wio-Terminal": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Blynk": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Edge-Impulse-Tuner": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Getting_started_wizard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-8720-dev": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Displaying-Gyro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Displaying-Photos": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Firmware": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-HMI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Interactive-Face": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Reading-COVID19": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Reading-Github": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Sound-Meter": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Storting-Analog-Data": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Thermal-Camera": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-DAPLink": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-HMI-Usermode-SDK": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Reading-Raspberry-Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBCLIENT-Keyboard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBCLIENT-MIDI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBCLIENT-Mouse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBCLIENT-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBH-Keyboard": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBH-Mouse": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBH-Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-USBH-Xbox": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-CircuitPython": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio-Terminal-Getting-Started": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/wio_terminal_faq": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wio_Terminal_Intro": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sensor_Network": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/solutions/hello_watcher_llms": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/solutions/smart-retail-voice-ai-solution-1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/crowd-flow-monitoring": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/solutions/frigate-on-jetson-nodered-gun-alerts": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/solutions/jetson-crowd-tracking": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ha_dify_watcher_llms": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/solutions/mcp-face-auth-integration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mcp_external_system_integration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/non_invasive_ct_energy_consumption": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mission_pack_features_v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/mission_pack_intro_v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/solutions/indoor-positioning-bluetooth-lorawan-tracker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Name_your_website": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/edge_ai_topic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/home_assistant_topic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ha_xiao_esp32": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/home_assistant_sensecap": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sensecraft_homeassistant_userguide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/open_source_topic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ma_deploy_yolov26": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ma_deploy_yolov5": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ma_deploy_yolov8": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ma_deploy_yolov8_pose": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Deploy_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Introduce_Installation": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Introduce_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Introduce_Quick_Start": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Config": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Datasets": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Export_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Training_FOMO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Training_Overview": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Training_PFLD": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ModelAssistant_Tutorials_Training_YOLO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/tinyml_topic": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/sscma": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/tinyml_workshop_course_new": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/train_and_deploy_model": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/topicintroduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Getting_Started_with_Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Creator-Kit-1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mixer_Pack_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Toy_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Beginner-Kit-for-Arduino-education-pack": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Beginner-Kit-for-Arduino-Upverter-Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Beginner-Kit-For-Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Beginner_Kit_for_Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Indoor_Environment_Kit_for_Edison": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Smart_Plant_Care_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Speech_Recognizer_Kit_for_Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_kit_for_Arduino_101": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_Kit_Plus": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_Kit_v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sidekick_Basic_Kit_for_Arduino_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Techbox_Tricks": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2.8inch_TFT_Touch_Shield_v2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/4A_Motor_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Base_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bluetooth_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bluetooth_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Brushless_Motor_Shield_TB6605FTG": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Camera_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/CAN-BUS_Shield_V1.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/CAN-BUS_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/EL_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Energy_Monitor_Shield_V0.9b": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Energy_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Ethernet_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Ethernet_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Ethernet_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/GPRS-Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/GPRS_Shield_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/GPRS_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/GPRS_Shield_V3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove-Mega_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Shield_for_Arduino_Nano": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Motor_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Motor_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Motor_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Music_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Music_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Music_Shield_V2.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/NFC_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/NFC_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/NFC_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Protoshield_Kit_for_Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Relay_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Relay_Shield_V1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Relay_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Relay_Shield_v3": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Renbotics_ServoShield_Rev": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RGBW_Stripe_WireLess_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RS232_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SD_Card_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SD_Card_Shield_V3.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/SD_Card_shield_V4.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_BLE_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Shield_Bot_V1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Shield_Bot_V1.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Shield_Introduction": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Small_e-Paper_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Small_e-Paper_Shield_V2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Solar_Charger_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Solar_Charger_Shield_V2.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Spartan-Edge-Accelerator-Board": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Starter_Shield_EN": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/TFT_Touch_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/W5500_Ethernet_Shield_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Shield": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Shield_Fi250_V1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Shield_V1.1": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Shield_V1.2": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Wifi_Shield_V2.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/WireLess_Gate_Shield_V1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arduino_Common_Error": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arduino_Software_I2C_user_guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/A_Comparison_of_Different_Grove_Temperature_Sensors": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/A_Handy_Serial_Library": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Barometer-Selection-Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Download-Arduino-and-install-Arduino_Driver": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/GPS-Modules-Selection-Guide": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Guide_to_use_demos_downloaded_from_Seeed-s_Github": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How-to-Choose-A-Gas-Sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_To_Choose_The_Right_Cable": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_to_detect_finger_touch": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_to_install_Arduino_Library": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_to_use_and_write_a_library": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/How_To_Use_Sketchbook": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_Relay_Page": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sketchbook_of_Sidekick_Advanced_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Software-Serial": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Software-SPI": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Software-Static-Library": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Upload_Code": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Use_External_Editor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/IR_Remote": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Joystick_Control_RGB_Led": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LightView_201k_Digital_display_module": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Light_Sensor_and_LED_Bar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Eight-Thermostat": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Five-Relay_Control": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Four-Noise_Maker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_One-Blink": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_One-Double_Blink": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Seven-Temperature": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Six-LCD_Demonstration": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Three-Analog_Input_v1b": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Two-Digital_Input": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Project_Two-Digital_Input_v1.0b": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Relay_Control_LED": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RFID_Control_LED": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Sound_Sensor_And_LED_Bar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/temperature_sensor": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arduino-AWS-IOT-Bridge": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Arduino-DAPLink": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Flashing-Arduino-Bootloader-DAPLink": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/I2C_And_I2C_Address_of_Seeed_Product": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/ODYSSEY-X86J4105-Firmata": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Seeed_Arduino_Serial": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Software-SWD": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Suli": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Xadow_IO_pin_mapping": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Codecraft_Grove_Compatible_List": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Guide_for_Codecraft_using_Arduino": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Compiling_MicroPython_for_embedded_devices": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Software-PlatformIO": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Bitcar": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BitMaker": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BitMaker_lite": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BitPlayer": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/BitWear": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Inventor_Kit_for_microbit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/microbit_wiki_page": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Microsoft_MakeCode": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/popularplatforms": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_PI_Bplus_Case": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Skeleton_box_for_Rasberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_Pi_as_a_NAS": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Cooler_Device": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_Kit_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/LoRa_LoRaWan_Gateway_Kit": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_Pi_3_Model_B": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/remote_connect": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_pi_CM4_update_eeprom": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/GrovePi_Plus": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_AI_HAT_for_Edge_Computing": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_HAT": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_Hat_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Grove_Base_Hat_for_Raspberry_Pi_Zero": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/High_Accuracy_Pi_RTC-DS3231": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Pi_RTC-DS1307": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_Pi_Breakout_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_Pi_Motor_Driver_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_Pi_R232_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_Pi_Relay_Board_v1.0": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/RS-485_Shield_for_Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/Raspberry_Pi": [
    "cn",
    "en",
    "es",
    "ja",
    "pt"
  ],
  "/": [
    "en",
    "cn",
    "ja",
    "es",
    "pt"
  ],
  "": [
    "en",
    "cn",
    "ja",
    "es",
    "pt"
  ],
  "/knowledgebase/": [
    "en",
    "cn",
    "ja",
    "es",
    "pt"
  ],
  "/knowledgebase": [
    "en",
    "cn",
    "ja",
    "es",
    "pt"
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
    } else if (currentPath.startsWith('/pt-br/')) {
      detectedLanguage = 'pt';
      basePath = currentPath.replace('/pt-br', '') || '/';
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
    const priority = { en: 0, cn: 1, ja: 2, es: 3, pt: 4 };
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

    // 情况2：需要切换器但不存在 - 创建（⚠️ 桌面端逻辑保持不变）
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

  // 移动端支持

  function createMobileLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) return null;

    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3, pt: 4 };
    const sortedLanguages = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });

    const header =
      '<button class="menu__link menu__link--sublist" aria-expanded="false" type="button">' +
      '<span class="lang-flag">' + currentLangConfig.flag + '</span>' +
      '<span class="lang-label" style="margin-left: .5rem;">' + currentLangConfig.label + '</span>' +
      '</button>';

    const listItems = sortedLanguages.map((code) => {
      const lang = languages[code];
      const langPath = lang.prefix + basePath;
      const isActive = code === currentLanguage;
      return (
        '<li class="menu__list-item">' +
        '  <a class="menu__link' + (isActive ? ' menu__link--active' : '') + '" href="' + langPath + '" data-lang="' + code + '">' +
        '    <span class="lang-flag">' + lang.flag + '</span>' +
        '    <span class="lang-label" style="margin-left: .5rem;">' + lang.label + '</span>' +
        (isActive ? '<span class="lang-check" style="margin-left:auto;">✓</span>' : '') +
        '  </a>' +
        '</li>'
      );
    }).join('');

    const html =
      '<li class="menu__list-item mobile-language-switcher" data-page-path="' + basePath + '" data-current-lang="' + currentLanguage + '">' +
      '  <div class="menu__list-item-collapsible">' +
      header +
      '    <ul class="menu__list" hidden>' + listItems + '</ul>' +
      '  </div>' +
      '</li>';

    return html;
  }

  function getSidebarMenuList() {
    const container = document.querySelector('.navbar-sidebar__items .menu__list');
    return container || null;
  }

  function bindMobileSwitcherBehavior(li) {
    const toggle = li.querySelector('.menu__link--sublist');
    const sublist = li.querySelector('.menu__list');
    if (toggle && sublist) {
      toggle.addEventListener('click', function () {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (expanded) {
          sublist.setAttribute('hidden', '');
        } else {
          sublist.removeAttribute('hidden');
        }
      });
    }

    li.querySelectorAll('a.menu__link').forEach((a) => {
      a.addEventListener('click', function () {
        setTimeout(() => {
          const body = document.querySelector('body');
          body && body.classList.remove('navbar-sidebar--show');
          const backdrop = document.querySelector('.navbar-sidebar__backdrop');
          backdrop && backdrop.click();
        }, 50);
      });
    });
  }

  function injectOrUpdateMobileSwitcher() {
    const sidebarList = getSidebarMenuList();
    if (!sidebarList) return false;

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
    const existing = sidebarList.querySelector('.mobile-language-switcher');

    if (availableLanguages.length <= 1) {
      if (existing) existing.remove();
      return true;
    }

    if (!existing) {
      const html = createMobileLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (html) {
        sidebarList.insertAdjacentHTML('beforeend', html);
        const li = sidebarList.querySelector('.mobile-language-switcher');
        if (li) bindMobileSwitcherBehavior(li);
        log('✅ 移动端语言切换器已插入（侧边栏）');
        return true;
      }
    }

    if (existing) {
      const curPath = existing.getAttribute('data-page-path');
      const curLang = existing.getAttribute('data-current-lang');
      if (curPath !== basePath || curLang !== currentLanguage) {
        existing.remove();
        return injectOrUpdateMobileSwitcher();
      }
    }

    return true;
  }

  function isMobileViewport() {
    return window.matchMedia && window.matchMedia('(max-width: 996px)').matches;
  }

  // 与 PC 端一致的 dropdown 结构（dropdown / dropdown__menu / dropdown__link / navbar__link）
  // 注意：容器不上 .navbar__item，避免被移动端样式隐藏；增加 position:relative 以定位菜单
  function createMobileTopbarLanguageSwitcher(availableLanguages, currentLanguage, basePath) {
    if (availableLanguages.length <= 1) return null;

    const currentLangConfig = languages[currentLanguage];
    const priority = { en: 0, cn: 1, ja: 2, es: 3, pt: 4 };
    const sorted = [...availableLanguages].sort((a, b) => {
      if (a === currentLanguage) return -1;
      if (b === currentLanguage) return 1;
      return (priority[a] || 999) - (priority[b] || 999);
    });

    const itemsHTML = sorted
      .map((code) => {
        const lang = languages[code];
        const langPath = lang.prefix + basePath;
        const isActive = code === currentLanguage;
        return [
          '<li>',
          '  <a class="dropdown__link ' + (isActive ? 'dropdown__link--active' : '') + '"',
          '     href="' + langPath + '"',
          '     data-lang="' + code + '"',
          '     title="切换到 ' + lang.label + '"' + (isActive ? ' aria-current="page"' : '') + '>',
          '    <span class="lang-flag">' + lang.flag + '</span>',
          '    <span class="lang-label" style="margin-left:.35rem;">' + lang.label + '</span>',
          (isActive ? '    <span class="lang-check" style="margin-left:auto;">✓</span>' : ''),
          '  </a>',
          '</li>',
        ].join('\n');
      })
      .join('\n');

    const switcherHTML = [
      '<div class="dropdown navbar_dorp_items lang-switcher-inline-mobile" data-page-path="' + basePath + '" data-current-lang="' + currentLanguage + '"',
      '     style="display:flex;align-items:center;margin-left:8px;position:relative;">',
      '  <a href="#" class="navbar__link lang-switcher-btn" role="button" aria-haspopup="true" aria-expanded="false"',
      '     style="display:flex;align-items:center;">',
      '    <span class="lang-flag">' + currentLangConfig.flag + '</span>',
      '    <span class="lang-label" style="margin-left:.35rem;">' + currentLangConfig.label + '</span>',
      '  </a>',
      '  <ul class="dropdown__menu" style="min-width: 180px;">',
           itemsHTML,
      '  </ul>',
      '</div>',
    ].join('\n');

    return switcherHTML;
  }

  // 点击展开/收起（移动端无 hover）：通过切换父容器类名 dropdown--show 来控制显示
  function bindMobileTopbarDropdown(container) {
    const btn = container.querySelector('.lang-switcher-btn');
    const menu = container.querySelector('.dropdown__menu');
    if (!btn || !menu) return;

    function closeMenu() {
      btn.setAttribute('aria-expanded', 'false');
      container.classList.remove('dropdown--show');
    }

    function openMenu() {
      btn.setAttribute('aria-expanded', 'true');
      container.classList.add('dropdown--show');
    }

    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    }

    // 点击/触摸触发
    btn.addEventListener('click', toggleMenu);
    btn.addEventListener('touchstart', function(e){ toggleMenu(e); }, {passive:false});

    // 外击关闭
    function outside(e) {
      if (!container.contains(e.target)) closeMenu();
    }
    document.addEventListener('click', outside);
    document.addEventListener('touchstart', outside, {passive:true});

    // 路由或尺寸变化关闭
    window.addEventListener('resize', closeMenu);
    window.addEventListener('orientationchange', closeMenu);
  }

  function injectOrUpdateMobileTopbarSwitcherLogo() {
    // 仅在移动端视口处理；切回桌面时自动移除
    const existing = document.querySelector('.lang-switcher-inline-mobile');
    if (!isMobileViewport()) {
      if (existing) existing.remove();
      return false;
    }

    // 找到 Logo 区域
    const brand = document.querySelector('.navbar__brand');
    if (!brand) return false;

    const { currentLanguage, basePath } = getCurrentLanguageAndPath();
    const availableLanguages = findAvailableLanguages(basePath, currentLanguage);

    // 不需要切换器
    if (availableLanguages.length <= 1) {
      if (existing) existing.remove();
      return true;
    }

    // 顶部栏优先显示，避免与侧边栏重复
    const sidebarList = (typeof getSidebarMenuList === 'function') && getSidebarMenuList();
    const mobileSidebarItem = sidebarList && sidebarList.querySelector('.mobile-language-switcher');
    if (mobileSidebarItem) mobileSidebarItem.remove();

    // 新建或更新
    if (!existing) {
      const html = createMobileTopbarLanguageSwitcher(availableLanguages, currentLanguage, basePath);
      if (html) {
        // 插到 Logo 的右侧
        brand.insertAdjacentHTML('afterend', html);
        const container = document.querySelector('.lang-switcher-inline-mobile');
        if (container) {
          bindMobileTopbarDropdown(container);
        }
        log('✅ 移动端顶部栏语言切换器已插入（Logo 右侧，PC 同款样式）');
        return true;
      }
    } else {
      const curPath = existing.getAttribute('data-page-path');
      const curLang = existing.getAttribute('data-current-lang');
      if (curPath !== basePath || curLang !== currentLanguage) {
        existing.remove();
        return injectOrUpdateMobileTopbarSwitcherLogo();
      }
    }
    return true;
  }

  // 生产环境优化的监控策略
  function startProductionMonitoring() {
    if (primaryCheckInterval) clearInterval(primaryCheckInterval);
    if (backupCheckInterval) clearInterval(backupCheckInterval);

    primaryCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();

      if (!currentPageInfo ||
          currentPageInfo.basePath !== basePath ||
          currentPageInfo.currentLanguage !== currentLanguage) {

        log('🔄 检测到页面变化，执行更新');
        injectOrUpdateSwitcher();                 // 桌面端（保持原样）
        injectOrUpdateMobileTopbarSwitcherLogo(); // 移动端顶部栏（Logo 右侧）
        // injectOrUpdateMobileSwitcher();        // 如需侧边栏也显示，可另行开启
      }
    }, 200);

    backupCheckInterval = setInterval(function() {
      const { currentLanguage, basePath } = getCurrentLanguageAndPath();
      const availableLanguages = findAvailableLanguages(basePath, currentLanguage);
      const existingSwitcher = document.querySelector('.navbar-language-switcher');
      const existingMobileTopbar = document.querySelector('.lang-switcher-inline-mobile');

      if (availableLanguages.length > 1) {
        if (!existingSwitcher) injectOrUpdateSwitcher();
        if (!existingMobileTopbar) injectOrUpdateMobileTopbarSwitcherLogo();
      } else {
        if (existingSwitcher) existingSwitcher.remove();
        if (existingMobileTopbar) existingMobileTopbar.remove();
        const sidebarList = (typeof getSidebarMenuList === 'function') && getSidebarMenuList();
        const mobileExists = sidebarList && sidebarList.querySelector('.mobile-language-switcher');
        if (mobileExists) mobileExists.remove();
        currentPageInfo = null;
      }
    }, 2000);

    log('🔧 启动生产环境监控机制');

    // 监听视口变化（横竖屏/缩放）
    let resizeTimer = null;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        injectOrUpdateMobileTopbarSwitcherLogo();
      }, 150);
    });
  }

  // 强化的路由变化检测（专为生产环境设计）
  function setupProductionRouteDetection() {
    let lastPathname = location.pathname;
    let lastHref = location.href;

    function handleHistoryChange(source) {
      setTimeout(function() {
        if (location.pathname !== lastPathname || location.href !== lastHref) {
          log('🔄 路由变化 [' + source + ']: ' + lastPathname + ' -> ' + location.pathname);
          lastPathname = location.pathname;
          lastHref = location.href;

          setTimeout(function() {
            injectOrUpdateSwitcher();
            injectOrUpdateMobileTopbarSwitcherLogo();
            // setTimeout(injectOrUpdateMobileSwitcher, 50); // 若要侧边栏也显示，可开启
          }, 100);
        }
      }, 50);
    }

    window.addEventListener('popstate', function() {
      handleHistoryChange('popstate');
    });

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

    setInterval(function() {
      if (location.pathname !== lastPathname || location.href !== lastHref) {
        handleHistoryChange('periodic');
      }
    }, 1000);

    log('🔧 启动生产环境路由检测');
  }

  function productionInitialization() {
    log('🚀 初始化生产环境优化版语言切换器');

    function attemptInitialization() {
      const navbar = document.querySelector('.navbar__items--right') ||
                     document.querySelector('.navbar__items');

      if (navbar) {
        log('✅ 导航栏就绪，开始初始化');

        // 立即执行一次注入
        injectOrUpdateSwitcher();                  // 桌面端（保持原样）
        injectOrUpdateMobileTopbarSwitcherLogo();  // 移动端顶部栏（Logo 右侧）
        // injectOrUpdateMobileSwitcher();          // 如需侧边栏也显示，可开启

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

    setTimeout(productionInitialization, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }

  setTimeout(function() {
    if (!isInitialized) {
      log('🔄 备用初始化触发');
      init();
    }
  }, 2000);

})();
