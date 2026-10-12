// Shared by the Jetson and camera selectors. English is the fallback.
// Match only the first URL segment so paths such as /connection stay English.
export const LANGS = ["en", "zh", "ja", "es", "pt"];

const PREFIX = { en: "", zh: "/cn", ja: "/ja", es: "/es", pt: "/pt-br" };

export function getLangFromPathname(pathname = "/") {
  const firstSegment =
    String(pathname).split("/").filter(Boolean)[0]?.toLowerCase() || "";
  if (firstSegment === "cn" || firstSegment === "zh" || firstSegment === "zh-cn")
    return "zh";
  if (firstSegment === "ja") return "ja";
  if (firstSegment === "es") return "es";
  if (firstSegment === "pt-br" || firstSegment === "pt") return "pt";
  return "en";
}

export function interpolate(template, vars) {
  if (!vars) return template;
  return String(template).replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] == null ? "" : String(vars[name]),
  );
}

export function createT(catalog, lang) {
  const pack = LANGS.includes(lang) && lang !== "en" ? catalog[lang] : null;
  const english = catalog.en;
  return function t(key, vars) {
    const template = pack?.[key] ?? english[key];
    if (template == null) return key;
    return vars ? interpolate(template, vars) : template;
  };
}

export function translatePhrase(phrases, lang, text) {
  if (text == null || text === "" || !lang || lang === "en") return text;
  return phrases[text]?.[lang] ?? text;
}

// Slugs used by these selectors that also exist in another language.
// The site-wide map lives inside static/js/language-switcher.js as a browser
// script, so it cannot be imported here. A slug missing from this list keeps
// the unprefixed English path instead of guessing a language prefix.

const ALL = ["zh", "ja", "es", "pt"];
const WIKI_EXCEPTIONS = {
  "/ai_roboticsyolov26_dual_camera_system/": ["zh", "ja", "pt"],
  "/rebot_physical_ai_course_chapter_3/": ["ja", "es", "pt"],
};
const WIKI_TRANSLATED = new Set([
  "/DashCamNet-with-Jetson-Xavier-NX-Multicamera/",
  "/J401_carrierboard_Hardware_Interfaces_Usage/",
  "/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board/",
  "/ai_robotics_recomputer_j501_robotics_getting_started/",
  "/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/",
  "/ai_robotics_recomputer_rugged_j40_getting_started/",
  "/ai_robotics_seeed_agx_orin_dev_kit_getting_started/",
  "/ai_roboticsyolov26_dual_camera_system/",
  "/control_robotic_arm_via_gr00t/",
  "/csi_camera_on_ros/",
  "/deploy_joyai_vl_interaction_on_jetson_thor/",
  "/deploy_live_vlm_webui_on_jetson/",
  "/deploy_nvblox_jetson_agx_orin/",
  "/deploy_visual_perception_engine_recomputer/",
  "/develop_recomputer_jetson_using_clawdbot/",
  "/flash/jetpack_to_selected_product/",
  "/how_to_use_camera_imx219/",
  "/j501_carrier_board_interfaces_usage/",
  "/jetson/camera-selection-guide/",
  "/jetson_fisheye_surround_view_demo/",
  "/lerobot_so100m/",
  "/lerobot_so100m_new/",
  "/lerobot_starai_arm/",
  "/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/",
  "/multiple_cameras_with_jetson/",
  "/object_tracking_with_reComputer_jetson_and_pX4/",
  "/orb_slam3_orbbec_gemini2/",
  "/orbbec_depth_camera_on_ros/",
  "/orbbec_gemini2/",
  "/orbbec_gemini336/",
  "/orbbec_gemini_335lg/",
  "/pycuvslam_recomputer_robotics/",
  "/reComputer_A203_Flash_System/",
  "/reComputer_A205E_Flash_System/",
  "/reComputer_A205_Flash_System/",
  "/reComputer_A603_Flash_System/",
  "/reComputer_A607_Flash_System/",
  "/reComputer_A608_Flash_System/",
  "/reComputer_Industrial_Getting_Started/",
  "/reComputer_Industrial_J20_Hardware_Interfaces_Usage/",
  "/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/",
  "/reComputer_J1010_J101_Flash_Jetpack/",
  "/reComputer_J1010_with_Jetson_getting_start/",
  "/reComputer_J1020v2_with_Jetson_getting_start/",
  "/reComputer_J2021_J202_Flash_Jetpack/",
  "/reComputer_J30_40_with_Jetson_getting_start/",
  "/reServer_Industrial_Getting_Started/",
  "/reServer_J2032_Getting_Started/",
  "/realsense_3d_seg/",
  "/rebot_arm_b601_dm_grasping_demo/",
  "/rebot_arm_b601_dm_graspnet_visual_grasping/",
  "/rebot_arm_b601_dm_lerobot/",
  "/rebot_arm_b601_rs_grasping_demo/",
  "/rebot_arm_b601_rs_lerobot/",
  "/rebot_physical_ai_course_chapter_3/",
  "/recomputer_j20_with_jetson_getting_start/",
  "/recomputer_j401b_getting_start/",
  "/recomputer_j401b_interfaces_usage/",
  "/recomputer_j501_mini_getting_started/",
  "/recomputer_jetson_mini_getting_started/",
  "/recomputer_jetson_robotics_j401_getting_started/",
  "/recomputer_jetson_robotics_j601_interfaces_usage/",
  "/recomputer_jetson_super_getting_started/",
  "/recomputer_mini_j401_getting_started/",
  "/recomputer_robotics_j401_getting_started/",
  "/reserver_j501_getting_started/",
  "/sensing_gmsl_cameras/",
  "/voice_control_rebot_arm/",
  "/wrc_demo_tutorial/",
  "/yolov11_with_depth_camera/",
  "/zed_x_gmsl_cameras_on_recomputer_robotics/",
]);

export function wikiLanguages(path) {
  return WIKI_EXCEPTIONS[path] || (WIKI_TRANSLATED.has(path) ? ALL : []);
}

// External and purchase links are returned unchanged.
// A missing translation stays on the unprefixed English path.
export function localizeWikiHref(url, lang = "en") {
  if (!url || /^https?:/i.test(url)) return url;
  const hashAt = url.indexOf("#");
  const hash = hashAt >= 0 ? url.slice(hashAt) : "";
  let path = hashAt >= 0 ? url.slice(0, hashAt) : url;
  if (!path.startsWith("/")) return url;
  if (!path.endsWith("/")) path += "/";
  const prefix = PREFIX[lang] || "";
  if (prefix && wikiLanguages(path).includes(lang)) return `${prefix}${path}${hash}`;
  return `${path}${hash}`;
}

// Docusaurus Link prepends the site baseUrl. Pass the bare slug when the
// translation exists, and a root anchor when it does not.
export function jetsonDocTarget(url, lang = "en") {
  if (!url || /^https?:/i.test(url)) return { kind: "link", href: url };
  const localized = localizeWikiHref(url, lang);
  const prefix = PREFIX[lang] || "";
  if (prefix && localized.startsWith(`${prefix}/`)) {
    return { kind: "link", href: localized.slice(prefix.length) };
  }
  if (lang !== "en") return { kind: "anchor", href: localized };
  return { kind: "link", href: localized };
}
