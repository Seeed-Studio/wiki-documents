import {test} from 'node:test';
import assert from 'node:assert/strict';
import {searchRoboticsItems} from '../../../src/components/robotics/roboticsSearch.mjs';
import {getCameraMountSearchItems, getCameraMountCollectionKeywords} from '../../../src/components/robotics/roboticsSearchResources.mjs';

test('RS excludes conversation and sensors while retaining model names and slugs', () => {
  const rs = {title: 'reBot-RS 快速入门', href: '/cn/rebot_b601_rs_getting_started/'};
  const slugMatch = {title: 'Motor SDK', href: '/rebot_b601_rs_motor_sdk/'};
  const unrelated = [
    {title: 'Reachy Mini 豆包语音对话应用', href: '/cn/reachymini_conversation/'},
    {title: 'Sensors', href: '/sensors/'},
    {title: 'Other quick start', href: '/sensors_get_started/'},
    {title: 'Miscellaneous', description: 'conversation', href: '/misc/'},
  ];
  for (const query of ['RS', 'rs', '  Rs  ']) {
    assert.deepEqual(searchRoboticsItems([...unrelated, slugMatch, rs], query), [rs, slugMatch]);
  }
});

test('short names match standalone title and description terms across scripts', () => {
  const dm = {title: 'reBot-DM 教程', href: '/motor/'};
  const ai = {title: '机器人', description: 'AI语音应用', href: '/voice/'};
  assert.deepEqual(searchRoboticsItems([dm, ai], 'DM'), [dm]);
  assert.deepEqual(searchRoboticsItems([dm, ai], 'ai'), [ai]);
});

test('normalized titles rank above incidental URL matches', () => {
  const byUrl = {title: 'Other', href: '/reachy_project/'};
  const byTitle = {title: 'Reachy Mini', href: '/robot/'};
  assert.deepEqual(searchRoboticsItems([byUrl, byTitle], 'REACHY'), [byTitle, byUrl]);
});

test('longer prefixes, localized text, and technical names remain searchable', () => {
  const reachy = {title: 'Reachy Mini 豆包语音对话应用', href: '/cn/reachymini_conversation/'};
  const isaac = {title: 'SO Arm 101 与 Isaac Sim', href: '/simulate_soarm101_by_leisaac/'};
  for (const query of ['reachy', '豆包', '语音', 'conversation']) {
    assert.deepEqual(searchRoboticsItems([reachy, isaac], query), [reachy]);
  }
  for (const query of ['Isaac Sim', 'soarm101', '  SO   Arm 101 ']) {
    assert.deepEqual(searchRoboticsItems([reachy, isaac], query), [isaac]);
  }
});

test('blank and unmatched searches stay empty and equal scores retain source order', () => {
  const items = Array.from({length: 15}, (_, index) => ({title: `RS 教程 ${index}`, href: `/tutorial-${index}/`}));
  assert.deepEqual(searchRoboticsItems(items, '  '), []);
  assert.deepEqual(searchRoboticsItems(items, 'unknown'), []);
  assert.deepEqual(searchRoboticsItems(items, 'rs'), items.slice(0, 12));
});

test('model and tutorial terms can match separately and in either order', () => {
  const sdk = {title: 'reBot-RS 电机 SDK', href: '/cn/rebot_b601_rs_motor_sdk/'};
  const dm = {title: 'reBot-DM SDK', href: '/cn/rebot_b601_dm_motor_sdk/'};
  for (const query of ['RS SDK', 'sdk rs', 'rebot rs SDK', 'ＲＳ ＳＤＫ']) {
    assert.deepEqual(searchRoboticsItems([dm, sdk], query), [sdk]);
  }
  assert.deepEqual(searchRoboticsItems([sdk, dm], 'RS nonexistent'), []);
});

test('SO Arm spelling variants and model context find generic tutorials', () => {
  const dataset = {title: 'SO-Arm 数据集工具', keywords: 'soarm SO100 / SO101 机械臂', href: '/cn/lerobot_dataset_tool/'};
  const simulator = {title: 'LeIsaac 仿真', keywords: 'soarm SO100 / SO101 机械臂', href: '/cn/simulate_soarm101_by_leisaac/'};
  const unrelated = {title: '其他数据集工具', href: '/dataset/'};
  for (const query of ['SO Arm 数据集', 'so-arm 数据集', 'SO–Arm 数据集', 'soarm 数据集', 'SO101 数据集']) {
    assert.deepEqual(searchRoboticsItems([unrelated, simulator, dataset], query), [dataset]);
  }
  assert.deepEqual(searchRoboticsItems([dataset, simulator], 'SO100 仿真'), [simulator]);
});

test('product context finds tutorials whose labels omit the product name', () => {
  const home = {title: 'Home Assistant 集成', description: 'Reachy Mini', keywords: 'reachy', href: '/cn/reachymini_home_assistant/'};
  const other = {title: 'Home Assistant', href: '/other_robot/'};
  assert.deepEqual(searchRoboticsItems([other, home], 'reachy mini assistant'), [home]);
});

test('duplicate URLs return only the best matching label, before applying the limit', () => {
  const generic = {title: 'LeIsaac 仿真', keywords: 'SO Arm', href: '/simulate_soarm101_by_leisaac/'};
  const specific = {title: 'SO Arm 101 机械臂与 Isaac Sim', href: generic.href};
  const next = {title: 'SO Arm 安装', href: '/install/'};
  assert.deepEqual(searchRoboticsItems([generic, specific, next], 'SO Arm', 2), [specific, next]);
});

test('tracking parameters do not introduce unrelated model matches', () => {
  assert.deepEqual(searchRoboticsItems([{title: 'Reachy Mini', href: '/reachymini/?source=rs'}], 'RS'), []);
});

test('spaced model and ROS version names match compact names', () => {
  const ros = {title: 'reBot-RS 与 ROS2', href: '/rs_ros2/'};
  const arm = {title: 'SO101 快速开始', href: '/soarm/'};
  assert.deepEqual(searchRoboticsItems([ros, arm], 'RS ROS 2'), [ros]);
  assert.deepEqual(searchRoboticsItems([ros, arm], 'SO 101'), [arm]);
});

test('D405, shared models, and collection searches find specific public resources', () => {
  const items = getCameraMountSearchItems('cn');
  const collection = {title: '相机支架合集', href: '/mounts/', keywords: getCameraMountCollectionKeywords()};
  for (const query of ['D405', 'D405相机支架', '相机支架D405', 'RS D405', 'DM D405']) {
    const results = searchRoboticsItems([...items, collection], query);
    assert(results[0].href.endsWith('/D405_305_Mount.step'));
    assert(results.some((item) => item === collection));
  }
  assert(searchRoboticsItems(items, 'D435i')[0].href.endsWith('/D435_Gemini2_Mount.step'));
  assert(searchRoboticsItems(items, 'V2 支架')[0].href.endsWith('/data-collection-camera-mount-v2.stp'));
  assert(searchRoboticsItems(items, '箱体')[0].href.endsWith('/box.usdz'));
  assert.deepEqual(searchRoboticsItems(items, 'Reachy D405'), []);
});

test('resource titles are localized, URLs are unique, and CAD formats stay accurate', () => {
  for (const [locale,word] of [['en','Camera mount'],['cn','相机支架'],['ja','カメラマウント'],['es','Soporte de cámara'],['pt-br','Suporte de câmera']]) {
    const items = getCameraMountSearchItems(locale);
    assert.equal(items.length, 14);
    assert.equal(new Set(items.map((item) => item.href)).size, 14);
    assert(items[0].title.includes(word));
    assert(items.every((item) => item.target === '_blank'));
    assert(searchRoboticsItems(items, 'USDZ')[0].href.endsWith('/box.usdz'));
    assert(!searchRoboticsItems(items, 'STEP').some((item) => item.href.endsWith('.usdz')));
  }
});
