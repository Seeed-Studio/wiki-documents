const CAMERA_MOUNTS_BASE = 'https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/';

const LABELS = {
  en: {public: 'Public resources', camera: 'Camera mount', collection: 'Data collection camera mount', adapter: 'Mount adapter', environment: 'Data collection environment'},
  cn: {public: '公共资源', camera: '相机支架', collection: '数据采集相机支架', adapter: '支架适配件', environment: '数据采集环境'},
  ja: {public: '共有リソース', camera: 'カメラマウント', collection: 'データ収集カメラマウント', adapter: 'マウントアダプター', environment: 'データ収集環境'},
  es: {public: 'Recursos compartidos', camera: 'Soporte de cámara', collection: 'Soporte de cámara para recopilación de datos', adapter: 'Adaptador de soporte', environment: 'Entorno de recopilación de datos'},
  'pt-br': {public: 'Recursos compartilhados', camera: 'Suporte de câmera', collection: 'Suporte de câmera para coleta de dados', adapter: 'Adaptador de suporte', environment: 'Ambiente de coleta de dados'},
};

// Resource names and paths follow hardware/camera-mounts/README.md and README_zh.md.
const MODELS = [
  {name: 'D405 / 305', kind: 'camera', file: 'b601-camera-mounts/D405_305_Mount.step', keywords: 'D405 Gemini 305 B601 RS DM rebot'},
  {name: 'D435 / Gemini 2', kind: 'camera', file: 'b601-camera-mounts/D435_Gemini2_Mount.step', keywords: 'D435 D435i Gemini2 Gemini 2 B601 RS DM rebot'},
  {name: 'D455f', kind: 'camera', file: 'b601-camera-mounts/D455f_Mount.step', keywords: 'B601 RS DM rebot'},
  {name: 'UVC32', kind: 'camera', file: 'b601-camera-mounts/UVC32_mount.step', keywords: 'B601 RS DM rebot'},
  {name: 'V1 #1', kind: 'collection', file: 'data-collection-camera-mounts/V1/mount-1.stp'},
  {name: 'V1 #2', kind: 'collection', file: 'data-collection-camera-mounts/V1/mount-2.stp'},
  {name: 'V1 #3', kind: 'collection', file: 'data-collection-camera-mounts/V1/mount-3.stp'},
  {name: 'V1 #4', kind: 'collection', file: 'data-collection-camera-mounts/V1/mount-4.stp'},
  {name: 'V1 #1 reBot', kind: 'adapter', file: 'data-collection-camera-mounts/V1/mount-1-rebot-adapter.stp'},
  {name: 'V1 #1 SO-ARM', kind: 'adapter', file: 'data-collection-camera-mounts/V1/mount-1-soarm-adapter.stp'},
  {name: 'V1 #2 SO-ARM', kind: 'adapter', file: 'data-collection-camera-mounts/V1/mount-2-soarm-adapter.stp'},
  {name: 'V1 #3 / #4', kind: 'adapter', file: 'data-collection-camera-mounts/V1/mount-3-4-adapter.stp'},
  {name: 'V2', kind: 'collection', file: 'data-collection-camera-mounts/data-collection-camera-mount-v2.stp', keywords: '铝型材 aluminum profile'},
  {name: 'box', kind: 'environment', file: 'data-collection-environment/box.usdz', keywords: '箱体 环境 environment'},
];

const PUBLIC_KEYWORDS = 'public resources open source 开源资料 公共资源 CAD';

export function isCameraMountCollection(href) {
  return /^https:\/\/github\.com\/Seeed-Projects\/reBot-DevArm\/(?:blob|tree)\/main\/hardware\/camera-mounts(?:\/(?:README(?:_zh)?\.md)?)?$/.test(href);
}

export function getCameraMountSearchItems(locale) {
  const labels = LABELS[locale] || LABELS.en;
  return MODELS.map((model) => {
    const format = model.file.split('.').pop().toUpperCase();
    const keywords = `${PUBLIC_KEYWORDS} ${model.keywords || ''} ${format} ${model.kind === 'environment' ? '' : 'camera mount 摄像头 相机 支架 data collection 数据采集'}`;
    return {
      title: `${model.name} · ${labels[model.kind]}`,
      description: `${labels.public} · ${format}`,
      keywords,
      href: `${CAMERA_MOUNTS_BASE}${model.file}`,
      target: '_blank',
    };
  });
}

export function getCameraMountCollectionKeywords() {
  return `${PUBLIC_KEYWORDS} camera mounts 摄像头 相机 支架 data collection 数据采集 ${MODELS.map((model) => `${model.name} ${model.keywords || ''}`).join(' ')}`;
}
