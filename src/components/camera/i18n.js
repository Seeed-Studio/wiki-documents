import { createT, localizeWikiHref, translatePhrase } from "../jetson/selection/locale.js";
import {
  comparisonInsights,
  compareDisabledReason,
  distanceExplanation,
  distanceMatch,
  formatDistance,
  formatFov,
  formatFrameRate,
  formatIdealRange,
  formatImage,
  formatWorkingRange,
  keyFact,
  parseDistanceDraft,
} from "./cameraModel.js";

const row = (en, zh, ja, es, pt) => ({ en, zh, ja, es, pt });
const text = (zh, ja, es, pt) => ({ zh, ja, es, pt });

const TABLE = {
  "scene.all": row("All applications", "全部应用场景", "すべての用途", "Todas las aplicaciones", "Todas as aplicações"),
  "scene.manipulation": row("Robot-arm control", "机械臂控制", "ロボットアーム制御", "Control de brazo robótico", "Controle de braço robótico"),
  "scene.manipulation.desc": row(
    "USB RGB cameras and USB depth cameras",
    "USB RGB 相机和 USB 深度相机",
    "USB RGB カメラと USB 深度カメラ",
    "Cámaras RGB USB y cámaras de profundidad USB",
    "Câmeras RGB USB e câmeras de profundidade USB",
  ),
  "scene.recognition": row(
    "Visual detection & recognition",
    "视觉检测与识别",
    "視覚検出と認識",
    "Detección y reconocimiento visual",
    "Detecção e reconhecimento visual",
  ),
  "scene.recognition.desc": row(
    "CSI and USB cameras, including depth models",
    "CSI 和 USB 相机，包括深度型号",
    "CSI と USB カメラ（深度モデルを含む）",
    "Cámaras CSI y USB, incluidos los modelos de profundidad",
    "Câmeras CSI e USB, incluindo modelos de profundidade",
  ),
  "scene.measurement": row("Visual measurement", "视觉测量", "視覚計測", "Medición visual", "Medição visual"),
  "scene.measurement.desc": row(
    "Cameras with a driver or SDK depth stream",
    "具备驱动或 SDK 深度流的相机",
    "ドライバーまたは SDK の深度ストリームがあるカメラ",
    "Cámaras con un flujo de profundidad por controlador o SDK",
    "Câmeras com fluxo de profundidade por driver ou SDK",
  ),
  "scene.driving": row("Intelligent driving", "智能驾驶", "インテリジェントドライビング", "Conducción inteligente", "Direção inteligente"),
  "scene.driving.desc": row(
    "GMSL, depth or built-in IR night-vision cameras",
    "GMSL、深度相机，或带内置红外夜视的相机",
    "GMSL、深度、または赤外線暗視を内蔵したカメラ",
    "Cámaras GMSL, de profundidad o con visión nocturna IR integrada",
    "Câmeras GMSL, de profundidade ou com visão noturna IR integrada",
  ),
  "connection.all": row("Any connection", "任意接口", "すべての接続", "Cualquier conexión", "Qualquer conexão"),
  "connection.csi": row("CSI", "CSI", "CSI", "CSI", "CSI"),
  "connection.usb": row("USB", "USB", "USB", "USB", "USB"),
  "connection.gmsl": row("GMSL2", "GMSL2", "GMSL2", "GMSL2", "GMSL2"),
  "output.all": row("Any output", "任意输出", "すべての出力", "Cualquier salida", "Qualquer saída"),
  "output.image": row("RGB image", "RGB 图像", "RGB 画像", "Imagen RGB", "Imagem RGB"),
  "output.depth": row("RGB + Depth image", "RGB + 深度图像", "RGB + 深度画像", "Imagen RGB + profundidad", "Imagem RGB + profundidade"),
  "resolution.all": row("Any resolution", "任意分辨率", "すべての解像度", "Cualquier resolución", "Qualquer resolução"),
  "resolution.720p": row("720p+", "720p+", "720p+", "720p+", "720p+"),
  "resolution.1080p": row("1080p+", "1080p+", "1080p+", "1080p+", "1080p+"),
  "resolution.8mp": row("8MP+", "8MP+", "8MP+", "8MP+", "8MP+"),
  "resolution.12mp": row("12MP+", "12MP+", "12MP+", "12MP+", "12MP+"),
  "coverage.all": row("Any view", "任意视场", "すべての画角", "Cualquier visión", "Qualquer visão"),
  "coverage.standard": row("Standard view", "标准视场", "標準画角", "Visión estándar", "Visão padrão"),
  "coverage.wide": row("Wide view", "广角", "広角", "Visión amplia", "Visão ampla"),
  "coverage.ultra": row("Ultra-wide / fisheye", "超广角 / 鱼眼", "超広角 / 魚眼", "Ultra gran angular / ojo de pez", "Ultrawide / olho de peixe"),
  "coverage.lens": row("Depends on lens", "取决于镜头", "レンズによる", "Depende del objetivo", "Depende da lente"),
  "coverage.unlisted": row(
    "FOV not fully specified",
    "视场角未完整标明",
    "FOV が完全には記載されていない",
    "FOV no especificado por completo",
    "FOV não totalmente especificado",
  ),
  "capability.stereo": row("Stereo cameras", "双目相机", "ステレオカメラ", "Cámaras estéreo", "Câmeras estéreo"),
  "capability.stereo.desc": row(
    "Two views (RGB or IR). Select RGB + Depth image if you need depth output.",
    "两个视角（RGB 或红外）。如果需要深度输出，请选择 RGB + 深度图像。",
    "2 つの視点（RGB または IR）。深度出力が必要な場合は RGB + 深度画像を選択します。",
    "Dos vistas (RGB o IR). Selecciona imagen RGB + profundidad si necesitas salida de profundidad.",
    "Duas vistas (RGB ou IR). Selecione imagem RGB + profundidade se precisar de saída de profundidade.",
  ),
  "capability.lens": row("Interchangeable lens", "可更换镜头", "交換レンズ", "Objetivo intercambiable", "Lente intercambiável"),
  "capability.lens.desc": row(
    "A replaceable lens mount. Field of view depends on the fitted lens.",
    "可更换镜头卡口。视场角取决于所安装的镜头。",
    "交換可能なレンズマウント。画角は装着したレンズによって異なります。",
    "Una montura de objetivo reemplazable. El campo de visión depende del objetivo instalado.",
    "Um encaixe de lente substituível. O campo de visão depende da lente instalada.",
  ),
  "capability.night": row("IR night-vision lighting", "红外夜视照明", "赤外線暗視照明", "Iluminación de visión nocturna IR", "Iluminação de visão noturna IR"),
  "capability.night.desc": row(
    "Built-in illumination for night-vision images, not an IR depth projector.",
    "用于夜视图像的内置照明，不是红外深度投射器。",
    "暗視画像用の内蔵照明であり、IR 深度プロジェクターではありません。",
    "Iluminación integrada para imágenes de visión nocturna, no un proyector IR de profundidad.",
    "Iluminação integrada para imagens de visão noturna, não um projetor IR de profundidade.",
  ),
  "link.all": row("Any link rate", "任意链路速率", "すべてのリンク速度", "Cualquier velocidad de enlace", "Qualquer taxa de enlace"),
  "link.3": row("3 Gbps", "3 Gbps", "3 Gbps", "3 Gbps", "3 Gbps"),
  "link.6": row("6 Gbps", "6 Gbps", "6 Gbps", "6 Gbps", "6 Gbps"),
  "hint.application": row(
    "Filter by the camera types shown below. Your series and other filters still apply; categories are not a guarantee of task performance.",
    "按下面列出的相机类型筛选。系列和其他筛选仍然生效；分类并不保证任务性能。",
    "下に示すカメラの種類で絞り込みます。シリーズとその他のフィルターも適用されます。分類はタスク性能を保証しません。",
    "Filtra por los tipos de cámara mostrados abajo. La serie y los demás filtros siguen aplicando; las categorías no garantizan el rendimiento de la tarea.",
    "Filtre pelos tipos de câmera abaixo. A série e os outros filtros continuam valendo; as categorias não garantem o desempenho da tarefa.",
  ),
  "hint.connection": row(
    "Camera connections available for the selected series and application in this guide. Check the cable and expansion board in Details.",
    "本指南中，所选系列和应用场景可用的相机接口。线缆和扩展板请查看详情。",
    "このガイドで、選択したシリーズと用途に使えるカメラ接続です。ケーブルと拡張ボードは詳細で確認してください。",
    "Conexiones de cámara disponibles para la serie y la aplicación seleccionadas en esta guía. Revisa el cable y la placa de expansión en Detalles.",
    "Conexões de câmera disponíveis para a série e a aplicação selecionadas neste guia. Confira o cabo e a placa de expansão em Detalhes.",
  ),
  "hint.output": row(
    "RGB image has no ready-made depth stream. RGB + Depth image includes depth with the required driver or SDK. RGB images can also be used by depth-estimation software. Those estimates are not included in this guide’s depth-range filter.",
    "RGB 图像没有现成的深度流。RGB + 深度图像会通过所需驱动或 SDK 提供深度。RGB 图像也可用于深度估计软件。这些估计值不包含在本指南的深度范围筛选中。",
    "RGB 画像には既製の深度ストリームがありません。RGB + 深度画像は、必要なドライバーまたは SDK による深度を含みます。RGB 画像は深度推定ソフトウェアでも使えます。その推定値はこのガイドの深度範囲フィルターには含まれません。",
    "La imagen RGB no tiene un flujo de profundidad listo. La imagen RGB + profundidad incluye profundidad con el controlador o SDK necesario. Las imágenes RGB también pueden usarse con software de estimación de profundidad. Esas estimaciones no entran en el filtro de rango de profundidad de esta guía.",
    "A imagem RGB não tem um fluxo de profundidade pronto. A imagem RGB + profundidade inclui profundidade com o driver ou SDK necessário. Imagens RGB também podem ser usadas por software de estimativa de profundidade. Essas estimativas não entram no filtro de faixa de profundidade deste guia.",
  ),
  "hint.resolution": row(
    "RGB resolution, per camera eye—not depth-map resolution. More pixels do not necessarily mean better image quality.",
    "RGB 分辨率按每只相机计算，不是深度图分辨率。像素更多并不一定意味着图像质量更好。",
    "RGB 解像度はカメラの眼ごとであり、深度マップの解像度ではありません。画素が多いことが画質の高さを意味するとは限りません。",
    "Resolución RGB por ojo de la cámara, no la resolución del mapa de profundidad. Más píxeles no significan necesariamente mejor calidad de imagen.",
    "Resolução RGB por olho da câmera, não a resolução do mapa de profundidade. Mais pixels não significam necessariamente melhor qualidade de imagem.",
  ),
  "hint.coverage": row(
    "Broad viewing categories, not shared angle thresholds. Exact angles and H/V/diagonal axes are shown on the cards.",
    "这是粗略的视场分类，不是统一的角度阈值。精确角度以及水平/垂直/对角线见卡片。",
    "大まかな画角の分類であり、共通の角度しきい値ではありません。正確な角度と水平/垂直/対角はカードに表示されます。",
    "Categorías amplias de visión, no umbrales de ángulo compartidos. Los ángulos exactos y los ejes H/V/diagonal aparecen en las tarjetas.",
    "Categorias amplas de visão, não limites de ângulo compartilhados. Os ângulos exatos e os eixos H/V/diagonal aparecem nos cartões.",
  ),
  findCamera: row("Find a camera", "查找相机", "カメラを探す", "Buscar una cámara", "Encontrar uma câmera"),
  findModel: row("Find a model", "查找型号", "モデルを検索", "Buscar un modelo", "Localizar um modelo"),
  searchCameras: row("Search cameras", "搜索相机", "カメラを検索", "Buscar cámaras", "Pesquisar câmeras"),
  searchPlaceholder: row("Model, sensor or SKU", "型号、传感器或 SKU", "モデル、センサー、SKU", "Modelo, sensor o SKU", "Modelo, sensor ou SKU"),
  application: row("Application", "应用场景", "用途", "Aplicación", "Aplicação"),
  connection: row("Connection", "接口", "接続", "Conexión", "Conexão"),
  cameraOutput: row("Camera output", "相机输出", "カメラ出力", "Salida de la cámara", "Saída da câmera"),
  minResolution: row("Minimum RGB resolution", "最低 RGB 分辨率", "最小 RGB 解像度", "Resolución RGB mínima", "Resolução RGB mínima"),
  fieldOfView: row("Field of view", "视场角", "視野角", "Campo de visión", "Campo de visão"),
  moreFilters: row("More filters", "更多筛选", "その他のフィルター", "Más filtros", "Mais filtros"),
  readingSpecs: row("Reading specs", "如何阅读规格", "仕様の読み方", "Cómo leer las especificaciones", "Como ler as especificações"),
  readingResolution: row(
    "RGB resolution is per eye, not the sum of two sensors or the depth-map resolution. More pixels do not guarantee better image quality.",
    "RGB 分辨率按每只眼计算，不是两颗传感器的像素之和，也不是深度图分辨率。像素更多不能保证图像质量更好。",
    "RGB 解像度は眼ごとであり、2 つのセンサーの合計でも深度マップの解像度でもありません。画素が多くても画質が良いとは限りません。",
    "La resolución RGB es por ojo, no la suma de dos sensores ni la resolución del mapa de profundidad. Más píxeles no garantizan mejor calidad de imagen.",
    "A resolução RGB é por olho, não a soma de dois sensores nem a resolução do mapa de profundidade. Mais pixels não garantem melhor qualidade de imagem.",
  ),
  readingFov: row(
    "Field of view (FOV) is horizontal (H), vertical (V) or diagonal. A wider view covers more of the scene, with fewer pixels on a small target.",
    "视场角（FOV）可以是水平（H）、垂直（V）或对角线。视场更宽能覆盖更多场景，但小目标上的像素会更少。",
    "視野角（FOV）は水平（H）、垂直（V）、または対角です。画角が広いとシーンをより広く捉えられますが、小さな対象の画素は少なくなります。",
    "El campo de visión (FOV) es horizontal (H), vertical (V) o diagonal. Una visión más amplia cubre más escena, con menos píxeles en un objetivo pequeño.",
    "O campo de visão (FOV) é horizontal (H), vertical (V) ou diagonal. Uma visão mais ampla cobre mais da cena, com menos pixels em um alvo pequeno.",
  ),
  readingLens: row(
    "Some angles depend on the fitted or ordered lens. “FOV not fully specified” means the angle or its axis is missing.",
    "有些角度取决于所安装或所订购的镜头。“视场角未完整标明”表示角度或其轴向缺失。",
    "角度には、装着または注文したレンズに依存するものがあります。「FOV が完全には記載されていない」は、角度またはその軸が不明であることを意味します。",
    "Algunos ángulos dependen del objetivo instalado o pedido. “FOV no especificado por completo” significa que falta el ángulo o su eje.",
    "Alguns ângulos dependem da lente instalada ou encomendada. “FOV não totalmente especificado” significa que o ângulo ou o eixo está ausente.",
  ),
  features: row("Features", "特性", "機能", "Características", "Recursos"),
  gmslRate: row("GMSL2 link rate", "GMSL2 链路速率", "GMSL2 リンク速度", "Velocidad de enlace GMSL2", "Taxa de enlace GMSL2"),
  gmslRateNote: row(
    "Only documented 3/6 Gbps modes match these options. Link speed is not a picture-quality rating.",
    "只有文档记载的 3/6 Gbps 模式会匹配这些选项。链路速率不是画质评级。",
    "記載された 3/6 Gbps モードだけがこれらの選択肢に一致します。リンク速度は画質の評価ではありません。",
    "Solo los modos documentados de 3/6 Gbps coinciden con estas opciones. La velocidad de enlace no es una calificación de calidad de imagen.",
    "Somente os modos documentados de 3/6 Gbps correspondem a estas opções. A velocidade do enlace não é uma classificação de qualidade de imagem.",
  ),
  nightNote: row(
    "Built-in lighting for night-vision images, not depth projectors such as Gemini 2’s.",
    "这是夜视图像的内置照明，不是 Gemini 2 那种深度投射器。",
    "暗視画像用の内蔵照明であり、Gemini 2 のような深度プロジェクターではありません。",
    "Iluminación integrada para imágenes de visión nocturna, no proyectores de profundidad como el de Gemini 2.",
    "Iluminação integrada para imagens de visão noturna, não projetores de profundidade como o da Gemini 2.",
  ),
  needDepth: row("Need depth instead?", "改为需要深度？", "代わりに深度が必要ですか？", "¿Necesitas profundidad?", "Precisa de profundidade?"),
  cameraOne: row("{n} camera", "{n} 款相机", "カメラ {n} 台", "{n} cámara", "{n} câmera"),
  cameraOther: row("{n} cameras", "{n} 款相机", "カメラ {n} 台", "{n} cámaras", "{n} câmeras"),
  clearFilters: row("Clear filters", "清除筛选", "フィルターをクリア", "Borrar filtros", "Limpar filtros"),
  clearFiltersTitle: row(
    "Reset all filters, including Application. Keep cameras selected for comparison.",
    "重置包括应用场景在内的全部筛选。保留已选入比较的相机。",
    "用途を含むすべてのフィルターをリセットします。比較用に選択したカメラは保持します。",
    "Restablece todos los filtros, incluida Aplicación. Conserva las cámaras seleccionadas para comparar.",
    "Redefine todos os filtros, inclusive Aplicação. Mantém as câmeras selecionadas para comparação.",
  ),
  selectedFilters: row("Selected filters", "已选筛选", "選択中のフィルター", "Filtros seleccionados", "Filtros selecionados"),
  removeLabel: row("Remove {label}", "移除 {label}", "{label} を解除", "Quitar {label}", "Remover {label}"),
  filterApplication: row("Application", "应用场景", "用途", "Aplicación", "Aplicação"),
  filterSeries: row("Series", "系列", "シリーズ", "Serie", "Série"),
  filterOutput: row("Output", "输出", "出力", "Salida", "Saída"),
  filterResolution: row("Min. RGB resolution", "最低 RGB 分辨率", "最小 RGB 解像度", "Resolución RGB mín.", "Resolução RGB mín."),
  filterCoverage: row("View", "视场", "画角", "Visión", "Visão"),
  filterLink: row("GMSL2 link", "GMSL2 链路", "GMSL2 リンク", "Enlace GMSL2", "Enlace GMSL2"),
  filterSearch: row("Search", "搜索", "検索", "Búsqueda", "Pesquisa"),
  chipValue: row("{name}: {value}", "{name}：{value}", "{name}: {value}", "{name}: {value}", "{name}: {value}"),
  workingDistanceChip: row(
    "Working distance: {distance}",
    "工作距离：{distance}",
    "動作距離: {distance}",
    "Distancia de trabajo: {distance}",
    "Distância de trabalho: {distance}",
  ),
  compareHelpEmpty: row(
    "Select Compare on two camera cards to view their specifications side by side. Choose either two RGB cameras or two RGB + Depth cameras.",
    "在两张相机卡片上选择“比较”，即可并排查看规格。请选择两款 RGB 相机，或两款 RGB + 深度相机。",
    "2 つのカメラカードで比較を選ぶと、仕様を並べて表示します。RGB カメラを 2 台、または RGB + 深度カメラを 2 台選んでください。",
    "Selecciona Comparar en dos tarjetas de cámara para ver sus especificaciones juntas. Elige dos cámaras RGB o dos cámaras RGB + profundidad.",
    "Selecione Comparar em dois cartões de câmera para ver as especificações lado a lado. Escolha duas câmeras RGB ou duas câmeras RGB + profundidade.",
  ),
  compareHelpFull: row(
    "{output} comparison · {n}/{limit} selected. Remove one to compare a different pair.",
    "{output}比较 · 已选 {n}/{limit}。移除一个后才能比较另一组。",
    "{output}の比較 · {n}/{limit} 件を選択。別の組み合わせにするには 1 台外してください。",
    "Comparación de {output} · {n}/{limit} seleccionadas. Quita una para comparar otro par.",
    "Comparação de {output} · {n}/{limit} selecionadas. Remova uma para comparar outro par.",
  ),
  compareHelpMore: row(
    "{output} comparison · {n}/{limit} selected. Choose one more camera with the same output type.",
    "{output}比较 · 已选 {n}/{limit}。请再选一款相同输出类型的相机。",
    "{output}の比較 · {n}/{limit} 件を選択。同じ出力タイプのカメラをもう 1 台選んでください。",
    "Comparación de {output} · {n}/{limit} seleccionadas. Elige una cámara más del mismo tipo de salida.",
    "Comparação de {output} · {n}/{limit} selecionadas. Escolha mais uma câmera com o mesmo tipo de saída.",
  ),
  connectionReset: row(
    "{connection} is unavailable for this series and Application. Connection changed to Any; other requirements kept.",
    "此系列和应用场景不提供 {connection}。接口已改为任意；其他条件保持不变。",
    "このシリーズと用途では {connection} を使えません。接続はすべてに変更しました。その他の条件は保持しています。",
    "{connection} no está disponible para esta serie y aplicación. La conexión pasó a Cualquiera; se mantienen los demás requisitos.",
    "{connection} não está disponível para esta série e aplicação. A conexão mudou para Qualquer; os outros requisitos foram mantidos.",
  ),
  cameraRemovedOne: row(
    "{n} camera removed from comparison: outside this series' camera options.",
    "已从比较中移除 {n} 款相机：不在此系列的相机选项内。",
    "比較からカメラを {n} 台外しました。このシリーズのカメラ選択肢に含まれません。",
    "Se quitó {n} cámara de la comparación: está fuera de las opciones de esta serie.",
    "{n} câmera foi removida da comparação: está fora das opções desta série.",
  ),
  cameraRemovedOther: row(
    "{n} cameras removed from comparison: outside this series' camera options.",
    "已从比较中移除 {n} 款相机：不在此系列的相机选项内。",
    "比較からカメラを {n} 台外しました。このシリーズのカメラ選択肢に含まれません。",
    "Se quitaron {n} cámaras de la comparación: están fuera de las opciones de esta serie.",
    "{n} câmeras foram removidas da comparação: estão fora das opções desta série.",
  ),
  filtersClearedKept: row(
    "Filters cleared. Your comparison selection is kept.",
    "已清除筛选。比较选择仍保留。",
    "フィルターをクリアしました。比較の選択は保持されています。",
    "Filtros borrados. Se mantiene tu selección de comparación.",
    "Filtros limpos. Sua seleção de comparação foi mantida.",
  ),
  filtersCleared: row("All filters cleared.", "已清除全部筛选。", "すべてのフィルターをクリアしました。", "Todos los filtros borrados.", "Todos os filtros foram limpos."),
  nightCleared: row(
    "Night-vision lighting cleared. Showing cameras with depth output; other requirements kept.",
    "已取消夜视照明筛选。正在显示有深度输出的相机；其他条件保持不变。",
    "暗視照明の条件を解除しました。深度出力のあるカメラを表示します。その他の条件は保持しています。",
    "Se quitó la iluminación de visión nocturna. Se muestran cámaras con salida de profundidad; se mantienen los demás requisitos.",
    "A iluminação de visão noturna foi removida. Mostrando câmeras com saída de profundidade; os outros requisitos foram mantidos.",
  ),
  emptyTitle: row("No cameras match this combination", "没有相机符合这一组合", "この組み合わせに一致するカメラはありません", "Ninguna cámara coincide con esta combinación", "Nenhuma câmera corresponde a esta combinação"),
  emptyRecover: row(
    "Each camera must match every filter. Remove one below to see candidates.",
    "每款相机都必须满足全部筛选。去掉下面的一项即可看到候选。",
    "各カメラはすべてのフィルターに一致する必要があります。下の 1 つを外すと候補が表示されます。",
    "Cada cámara debe cumplir todos los filtros. Quita uno de abajo para ver candidatas.",
    "Cada câmera precisa atender a todos os filtros. Remova um abaixo para ver candidatas.",
  ),
  emptyReset: row(
    "Each camera must match every filter. Reset requirements while keeping your series and connection.",
    "每款相机都必须满足全部筛选。可在保留系列和接口的同时重置其他条件。",
    "各カメラはすべてのフィルターに一致する必要があります。シリーズと接続を保持したまま条件をリセットできます。",
    "Cada cámara debe cumplir todos los filtros. Restablece los requisitos y conserva la serie y la conexión.",
    "Cada câmera precisa atender a todos os filtros. Redefina os requisitos e mantenha a série e a conexão.",
  ),
  clearDistance: row("Clear distance requirements", "清除距离条件", "距離条件をクリア", "Borrar requisitos de distancia", "Limpar requisitos de distância"),
  keepSeries: row(
    "Keep series & connection only",
    "仅保留系列和接口",
    "シリーズと接続だけを残す",
    "Conservar solo serie y conexión",
    "Manter apenas série e conexão",
  ),
  trayLabel: row("Camera comparison selection", "相机比较选择", "カメラ比較の選択", "Selección de comparación de cámaras", "Seleção de comparação de câmeras"),
  selectedCount: row("{n}/{limit} selected", "已选 {n}/{limit}", "{n}/{limit} 件を選択", "{n}/{limit} seleccionadas", "{n}/{limit} selecionadas"),
  outsideApplication: row("Outside Application filter", "不在应用场景筛选内", "用途フィルターの対象外", "Fuera del filtro de aplicación", "Fora do filtro de aplicação"),
  outsideDistance: row("Outside distance requirement", "不在距离条件内", "距離条件の対象外", "Fuera del requisito de distancia", "Fora do requisito de distância"),
  removeNamed: row("Remove {name} from comparison", "从比较中移除 {name}", "比較から {name} を外す", "Quitar {name} de la comparación", "Remover {name} da comparação"),
  clearSelection: row("Clear selection", "清空选择", "選択をクリア", "Borrar selección", "Limpar seleção"),
  chooseOneMore: row("Choose one more", "再选一款", "もう 1 台選ぶ", "Elegir una más", "Escolher mais uma"),
  compareCount: row("Compare ({n})", "比较 ({n})", "比較 ({n})", "Comparar ({n})", "Comparar ({n})"),
  imageUnavailable: row("Image unavailable", "图片不可用", "画像を表示できません", "Imagen no disponible", "Imagem indisponível"),
  imageUnavailableFor: row("Image unavailable for {name}", "{name} 的图片不可用", "{name} の画像を表示できません", "Imagen no disponible para {name}", "Imagem indisponível para {name}"),
  cameraAlt: row("{name} camera", "{name} 相机", "{name} カメラ", "Cámara {name}", "Câmera {name}"),
  compareNamed: row("Compare {name}", "比较 {name}", "{name} を比較", "Comparar {name}", "Comparar {name}"),
  selected: row("Selected", "已选", "選択済み", "Seleccionada", "Selecionada"),
  compare: row("Compare", "比较", "比較", "Comparar", "Comparar"),
  detailsFor: row("Details for {name}", "{name} 的详情", "{name} の詳細", "Detalles de {name}", "Detalhes de {name}"),
  details: row("Details", "详情", "詳細", "Detalles", "Detalhes"),
  idealRange: row("Ideal range", "理想范围", "理想範囲", "Rango ideal", "Faixa ideal"),
  rgbPerEye: row("RGB / eye", "RGB / 每眼", "RGB / 眼", "RGB / ojo", "RGB / olho"),
  rgbResolution: row("RGB resolution", "RGB 分辨率", "RGB 解像度", "Resolución RGB", "Resolução RGB"),
  depthFov: row("Depth FOV", "深度视场角", "深度 FOV", "FOV de profundidad", "FOV de profundidade"),
  imageFov: row("Image FOV", "图像视场角", "画像 FOV", "FOV de imagen", "FOV da imagem"),
  depthStream: row("Depth {image}", "深度 {image}", "深度 {image}", "Profundidad {image}", "Profundidade {image}"),
  rgbStream: row("RGB {image}", "RGB {image}", "RGB {image}", "RGB {image}", "RGB {image}"),
  notSpecified: row("Not specified", "未标明", "未記載", "No especificado", "Não especificado"),
  perEye: row(" / eye", " / 每眼", " / 眼", " / ojo", " / olho"),
  dependsOnLens: row("Depends on lens", "取决于镜头", "レンズによる", "Depende del objetivo", "Depende da lente"),
  fovDiagonal: row("{degrees}° diagonal", "{degrees}° 对角线", "{degrees}° 対角", "{degrees}° en diagonal", "{degrees}° na diagonal"),
  fovAxisUnspecified: row(
    "{degrees}° · axis unspecified",
    "{degrees}° · 轴向未标明",
    "{degrees}° · 軸は未記載",
    "{degrees}° · eje no especificado",
    "{degrees}° · eixo não especificado",
  ),
  distanceFar: row("{n} m target (farthest)", "最远目标 {n} m", "最遠目標 {n} m", "objetivo a {n} m (el más lejano)", "alvo a {n} m (o mais distante)"),
  distanceNear: row("{n} m target (nearest)", "最近目标 {n} m", "最近目標 {n} m", "objetivo a {n} m (el más cercano)", "alvo a {n} m (o mais próximo)"),
  distanceSpan: row("{span} m", "{span} m", "{span} m", "{span} m", "{span} m"),
  rangeUnknown: row(
    "Ideal range not documented for this configuration.",
    "此配置未记载理想范围。",
    "この構成の理想範囲は記載されていません。",
    "El rango ideal no está documentado para esta configuración.",
    "A faixa ideal não está documentada para esta configuração.",
  ),
  rangeCoversTarget: row("Ideal range covers {target}", "理想范围覆盖 {target}", "理想範囲は {target} を含みます", "El rango ideal cubre {target}", "A faixa ideal cobre {target}"),
  rangeCovers: row(
    "Ideal range covers your {requirement} requirement",
    "理想范围覆盖你的 {requirement} 需求",
    "理想範囲は {requirement} の要件を含みます",
    "El rango ideal cubre tu requisito de {requirement}",
    "A faixa ideal cobre seu requisito de {requirement}",
  ),
  rangeOutside: row(
    "Outside ideal range for your {requirement} requirement",
    "不在你的 {requirement} 需求所对应的理想范围内",
    "{requirement} の要件に対する理想範囲の外です",
    "Fuera del rango ideal para tu requisito de {requirement}",
    "Fora da faixa ideal para seu requisito de {requirement}",
  ),
  workingMinimum: row("Minimum {n} m{note}", "最近 {n} m{note}", "最小 {n} m{note}", "Mínimo {n} m{note}", "Mínimo {n} m{note}"),
  fpsUnspecified: row(
    "Not specified for this mode",
    "此模式未标明",
    "このモードでは未記載",
    "No especificado para este modo",
    "Não especificado para este modo",
  ),
  fpsAt: row("{fps} fps at {image}", "{image} 下 {fps} fps", "{image} で {fps} fps", "{fps} fps a {image}", "{fps} fps em {image}"),
  factIdeal: row("Ideal range {range}", "理想范围 {range}", "理想範囲 {range}", "Rango ideal {range}", "Faixa ideal {range}"),
  factNight: row("IR night-vision lighting", "红外夜视照明", "赤外線暗視照明", "Iluminación de visión nocturna IR", "Iluminação de visão noturna IR"),
  factStereo: row(
    "Stereo pair · depth processing required",
    "双目 · 需要深度处理",
    "ステレオペア · 深度処理が必要",
    "Par estéreo · requiere procesamiento de profundidad",
    "Par estéreo · processamento de profundidade necessário",
  ),
  factLens: row("{lens} lens mount", "{lens} 镜头卡口", "{lens} レンズマウント", "Montura {lens}", "Encaixe {lens}"),
  factMono: row("Monocular · global shutter", "单目 · 全局快门", "単眼 · グローバルシャッター", "Monocular · obturador global", "Monocular · obturador global"),
  factLink: row("{n} Gbps GMSL2 link", "{n} Gbps GMSL2 链路", "{n} Gbps GMSL2 リンク", "Enlace GMSL2 de {n} Gbps", "Enlace GMSL2 de {n} Gbps"),
  factFisheye: row("Fisheye coverage", "鱼眼覆盖", "魚眼の視野", "Cobertura de ojo de pez", "Cobertura olho de peixe"),
  factFixed: row("Fixed-lens imaging", "定焦成像", "固定レンズ撮影", "Imagen con objetivo fijo", "Imagem com lente fixa"),
  compareClearOutput: row(
    "Clear the selection to compare {output} cameras.",
    "请先清空选择，再比较 {output} 相机。",
    "{output} カメラを比較するには、選択をクリアしてください。",
    "Borra la selección para comparar cámaras de {output}.",
    "Limpe a seleção para comparar câmeras de {output}.",
  ),
  compareRemoveOne: row(
    "Remove one camera to compare a different pair (maximum 2).",
    "最多比较 2 款。请先移除一款，再比较另一组。",
    "別の組み合わせを比較するには 1 台外してください（最大 2 台）。",
    "Quita una cámara para comparar otro par (máximo 2).",
    "Remova uma câmera para comparar outro par (máximo 2).",
  ),
  noteCapture: row("Capture mode not fully specified", "采集模式未完整标明", "撮影モードが完全には記載されていません", "Modo de captura no especificado por completo", "Modo de captura não totalmente especificado"),
  noteModes: row("Different capture modes", "采集模式不同", "撮影モードが異なります", "Modos de captura distintos", "Modos de captura diferentes"),
  noteAngle: row(
    "Angle or axis not specified for every camera",
    "并非每款相机都标明了角度或轴向",
    "すべてのカメラで角度または軸が記載されているわけではありません",
    "El ángulo o el eje no está especificado en todas las cámaras",
    "O ângulo ou o eixo não está especificado em todas as câmeras",
  ),
  noteFov: row(
    "Different FOV axes or image streams",
    "视场角轴向或图像流不同",
    "FOV の軸または画像ストリームが異なります",
    "Ejes de FOV o flujos de imagen distintos",
    "Eixos de FOV ou fluxos de imagem diferentes",
  ),
  noteOpenMax: row(
    "Only minimum distance is ranked; open-ended (+) maxima are not compared.",
    "只比较最近距离；开放的（+）最远距离不参与比较。",
    "最小距離だけを順位付けします。上限なし（+）の最大距離は比較しません。",
    "Solo se ordena la distancia mínima; los máximos abiertos (+) no se comparan.",
    "Apenas a distância mínima é ordenada; máximos em aberto (+) não são comparados.",
  ),
  noteTied: row("Tied closest minimum: {n} m.", "最近距离并列：{n} m。", "最小距離が同値: {n} m。", "Mínimo más cercano empatado: {n} m.", "Mínimo mais próximo empatado: {n} m."),
  badgeImage: row("More image pixels", "图像像素更多", "画像の画素が多い", "Más píxeles de imagen", "Mais pixels de imagem"),
  badgeDepth: row("Denser depth map", "深度图更密", "深度マップがより密", "Mapa de profundidad más denso", "Mapa de profundidade mais denso"),
  badgeFps: row("Higher frame rate", "帧率更高", "フレームレートが高い", "Mayor frecuencia de imagen", "Taxa de quadros mais alta"),
  badgeWider: row("Wider view", "视场更宽", "画角が広い", "Visión más amplia", "Visão mais ampla"),
  badgeCloser: row("Closer minimum", "最近距离更近", "最小距離がより近い", "Mínimo más cercano", "Mínimo mais próximo"),
  badgeLonger: row("Longer ideal range", "理想范围更远", "理想範囲がより長い", "Rango ideal más largo", "Faixa ideal mais longa"),
  specIdeal: row("Ideal working range", "理想工作范围", "理想動作範囲", "Rango de trabajo ideal", "Faixa de trabalho ideal"),
  specRequirement: row("Your requirement: {distance}", "你的需求：{distance}", "要件: {distance}", "Tu requisito: {distance}", "Seu requisito: {distance}"),
  specDepthMap: row("Depth-map resolution", "深度图分辨率", "深度マップ解像度", "Resolución del mapa de profundidad", "Resolução do mapa de profundidade"),
  specDepthFps: row("Depth frame rate", "深度帧率", "深度フレームレート", "Frecuencia de profundidad", "Taxa de quadros de profundidade"),
  specRangeBasis: row("Range configuration", "范围配置", "範囲の構成", "Configuración del rango", "Configuração da faixa"),
  specDepthLimits: row("Depth sensing limits", "深度感知极限", "深度検出の限界", "Límites de detección de profundidad", "Limites de detecção de profundidade"),
  specImageFps: row("Image frame rate", "图像帧率", "画像フレームレート", "Frecuencia de imagen", "Taxa de quadros da imagem"),
  specLens: row("Lens / mount", "镜头 / 卡口", "レンズ / マウント", "Objetivo / montura", "Lente / encaixe"),
  specSensor: row("Sensor", "传感器", "センサー", "Sensor", "Sensor"),
  specVariant: row("Variant / mode notes", "型号 / 模式说明", "バリエーション / モードの注記", "Notas de variante / modo", "Notas de variante / modo"),
  specConnection: row("Connection", "接口", "接続", "Conexión", "Conexão"),
  specConnector: row("Cable / expansion", "线缆 / 扩展", "ケーブル / 拡張", "Cable / expansión", "Cabo / expansão"),
  specBandwidth: row("Link / bandwidth", "链路 / 带宽", "リンク / 帯域", "Enlace / ancho de banda", "Enlace / largura de banda"),
  gmslLink: row(
    "{n} Gbps GMSL2 link (not image throughput)",
    "{n} Gbps GMSL2 链路（不是图像吞吐）",
    "{n} Gbps GMSL2 リンク（画像スループットではありません）",
    "Enlace GMSL2 de {n} Gbps (no es el rendimiento de imagen)",
    "Enlace GMSL2 de {n} Gbps (não é a vazão da imagem)",
  ),
  specTitle: row("Specifications", "规格", "仕様", "Especificaciones", "Especificações"),
  specIntro: row(
    "RGB resolution is per eye for stereo cameras.",
    "双目相机的 RGB 分辨率按每只眼计算。",
    "ステレオカメラの RGB 解像度は眼ごとです。",
    "La resolución RGB es por ojo en las cámaras estéreo.",
    "A resolução RGB é por olho nas câmeras estéreo.",
  ),
  specIntroDepth: row(
    " Ideal working range is the recommended distance range, not the maximum sensing distance.",
    " 理想工作范围是建议距离，不是最大感知距离。",
    " 理想動作範囲は推奨距離であり、最大検出距離ではありません。",
    " El rango de trabajo ideal es la distancia recomendada, no la distancia máxima de detección.",
    " A faixa de trabalho ideal é a distância recomendada, não a distância máxima de detecção.",
  ),
  softwareTitle: row("Connection & software", "连接与软件", "接続とソフトウェア", "Conexión y software", "Conexão e software"),
  gmslPower: row(
    "Power off before connecting or disconnecting a GMSL camera.",
    "连接或断开 GMSL 相机前请先断电。",
    "GMSL カメラを接続または取り外す前に電源を切ってください。",
    "Apaga la alimentación antes de conectar o desconectar una cámara GMSL.",
    "Desligue a alimentação antes de conectar ou desconectar uma câmera GMSL.",
  ),
  software: row("Software", "软件", "ソフトウェア", "Software", "Software"),
  resources: row("Resources", "资料", "資料", "Recursos", "Recursos"),
  specification: row("Specification", "规格项", "仕様項目", "Especificación", "Especificação"),
  sideBySide: row("SIDE BY SIDE", "并排比较", "並べて比較", "EN PARALELO", "LADO A LADO"),
  compareCameras: row("Compare {n} cameras", "比较 {n} 款相机", "カメラ {n} 台を比較", "Comparar {n} cámaras", "Comparar {n} câmeras"),
  chooseCameras: row("Choose cameras to compare", "选择要比较的相机", "比較するカメラを選ぶ", "Elegir cámaras para comparar", "Escolher câmeras para comparar"),
  closeDialog: row("Close camera dialog", "关闭相机对话框", "カメラのダイアログを閉じる", "Cerrar el diálogo de la cámara", "Fechar o diálogo da câmera"),
  compareLegend: row(
    "Highlights show a numerical advantage, not an overall recommendation. More pixels or a wider view are not always better. Equal values and open-ended (+) maxima stay neutral.",
    "高亮表示数值上的优势，不是整体推荐。像素更多或视场更宽并不总是更好。相同的数值和开放的（+）上限保持中性。",
    "強調は数値上の優位であり、総合的なおすすめではありません。画素や画角が大きいことが常に良いとは限りません。同じ値と上限なし（+）の最大値は中立のままです。",
    "Los resaltes muestran una ventaja numérica, no una recomendación global. Más píxeles o una visión más amplia no siempre son mejores. Los valores iguales y los máximos abiertos (+) quedan neutros.",
    "Os destaques mostram uma vantagem numérica, não uma recomendação geral. Mais pixels ou uma visão mais ampla nem sempre são melhores. Valores iguais e máximos em aberto (+) ficam neutros.",
  ),
  compareDepthNote: row(
    "Ideal range coverage is a first check, not a guarantee of accuracy on your materials or in your lighting. Maximum sensing distance is not the ideal range.",
    "理想范围是否覆盖只是初步检查，不能保证在你的材质和光照下同样准确。最大感知距离不是理想范围。",
    "理想範囲に含まれるかは最初の確認であり、素材や照明での精度を保証しません。最大検出距離は理想範囲ではありません。",
    "Que el rango ideal cubra la distancia es una primera comprobación, no una garantía de precisión con tus materiales o tu iluminación. La distancia máxima de detección no es el rango ideal.",
    "A cobertura da faixa ideal é uma primeira verificação, não uma garantia de precisão nos seus materiais ou na sua iluminação. A distância máxima de detecção não é a faixa ideal.",
  ),
  comparisonRegion: row("Selected camera comparison", "所选相机比较", "選択したカメラの比較", "Comparación de las cámaras seleccionadas", "Comparação das câmeras selecionadas"),
  getOneNow: row("Get One Now", "立即购买", "今すぐ購入", "Consíguelo ahora", "Compre agora"),
  compareWith: row("Compare with…", "与其他相机比较…", "他のカメラと比較…", "Comparar con…", "Comparar com…"),
  clearComparisonSelection: row("Clear comparison selection", "清空比较选择", "比較の選択をクリア", "Borrar la selección de comparación", "Limpar a seleção de comparação"),
  manageComparison: row(
    "Manage comparison ({n}/{limit})",
    "管理比较 ({n}/{limit})",
    "比較を管理 ({n}/{limit})",
    "Gestionar comparación ({n}/{limit})",
    "Gerenciar comparação ({n}/{limit})",
  ),
  wikiJump: row("Wiki guides & examples", "Wiki 指南与示例", "Wiki ガイドと例", "Guías y ejemplos de la Wiki", "Guias e exemplos da Wiki"),
  wikiFor: row("Wiki guides for {name}", "{name} 的 Wiki 指南", "{name} の Wiki ガイド", "Guías de la Wiki para {name}", "Guias da Wiki para {name}"),
  wikiIntro: row(
    "Follow the hardware and software versions used in each guide. Links open in a new tab.",
    "请遵循每篇指南所用的硬件和软件版本。链接会在新标签页打开。",
    "各ガイドで使われているハードウェアとソフトウェアのバージョンに従ってください。リンクは新しいタブで開きます。",
    "Sigue las versiones de hardware y software usadas en cada guía. Los enlaces se abren en una pestaña nueva.",
    "Siga as versões de hardware e software usadas em cada guia. Os links abrem em uma nova aba.",
  ),
  "wiki.setup": row("Hardware & setup", "硬件与上手", "ハードウェアとセットアップ", "Hardware y puesta en marcha", "Hardware e introdução"),
  "wiki.applications": row("Application examples", "应用示例", "応用例", "Ejemplos de aplicación", "Exemplos de aplicação"),
  specLink: row("Specifications", "规格", "仕様", "Especificaciones", "Especificações"),
  idealSource: row("Ideal range source", "理想范围来源", "理想範囲の出典", "Fuente del rango ideal", "Fonte da faixa ideal"),
  pickerHelp: row(
    "Choose two {output} cameras. Your series and Application still apply; other page filters are ignored here.",
    "请选择两款 {output} 相机。系列和应用场景仍然生效；此处忽略页面上的其他筛选。",
    "{output} カメラを 2 台選びます。シリーズと用途は引き続き適用されます。ページの他のフィルターはここでは無視されます。",
    "Elige dos cámaras de {output}. La serie y la aplicación siguen aplicando; aquí se ignoran los demás filtros de la página.",
    "Escolha duas câmeras de {output}. A série e a aplicação continuam valendo; os outros filtros da página são ignorados aqui.",
  ),
  findToCompare: row("Find a camera to compare", "查找要比较的相机", "比較するカメラを検索", "Buscar una cámara para comparar", "Localizar uma câmera para comparar"),
  searchComparison: row("Search comparison cameras", "搜索比较相机", "比較するカメラを検索", "Buscar cámaras para comparar", "Pesquisar câmeras para comparação"),
  twoSelected: row(
    "Two selected. Remove one to choose a different camera.",
    "已选两款。移除一款后才能改选其他相机。",
    "2 台選択済みです。別のカメラを選ぶには 1 台外してください。",
    "Dos seleccionadas. Quita una para elegir otra cámara.",
    "Duas selecionadas. Remova uma para escolher outra câmera.",
  ),
  noPickerPrefix: row("No matching models. ", "没有匹配的型号。", "一致するモデルはありません。", "No hay modelos coincidentes. ", "Nenhum modelo correspondente. "),
  noPickerMatch: row(
    "No matching models. Change Application or series on the camera page to see other candidates.",
    "没有匹配的型号。请在相机页面更改应用场景或系列，以查看其他候选。",
    "一致するモデルはありません。他の候補を見るには、カメラページで用途またはシリーズを変更してください。",
    "No hay modelos coincidentes. Cambia la aplicación o la serie en la página de cámaras para ver otras candidatas.",
    "Nenhum modelo correspondente. Mude a aplicação ou a série na página de câmeras para ver outras candidatas.",
  ),
  clearSearch: row("Clear search", "清除搜索", "検索をクリア", "Borrar búsqueda", "Limpar pesquisa"),
  backToDetails: row("Back to details", "返回详情", "詳細に戻る", "Volver a los detalles", "Voltar aos detalhes"),
  chooseTwo: row("Choose two cameras", "请选择两款相机", "カメラを 2 台選んでください", "Elige dos cámaras", "Escolha duas câmeras"),
  chooseOneMoreCamera: row("Choose one more camera", "请再选一款相机", "カメラをもう 1 台選んでください", "Elige una cámara más", "Escolha mais uma câmera"),
  changeCameras: row("Change cameras", "更换相机", "カメラを変更", "Cambiar cámaras", "Trocar câmeras"),
  distanceTitle: row("Working distance", "工作距离", "動作距離", "Distancia de trabajo", "Distância de trabalho"),
  distanceHelp: row(
    "Optional. The published ideal range must cover your target distances.",
    "可选。公布的理想范围必须覆盖你的目标距离。",
    "任意です。公表された理想範囲が目標距離を含む必要があります。",
    "Opcional. El rango ideal publicado debe cubrir tus distancias objetivo.",
    "Opcional. A faixa ideal publicada precisa cobrir suas distâncias alvo.",
  ),
  nearestTarget: row("Nearest target (m)", "最近目标 (m)", "最近目標 (m)", "Objetivo más cercano (m)", "Alvo mais próximo (m)"),
  farthestTarget: row("Farthest target (m)", "最远目标 (m)", "最遠目標 (m)", "Objetivo más lejano (m)", "Alvo mais distante (m)"),
  optional: row("Optional", "可选", "任意", "Opcional", "Opcional"),
  distancePositive: row(
    "Enter a positive distance in metres, for example 0.3.",
    "请输入正的距离，单位为米，例如 0.3。",
    "メートル単位で正の距離を入力してください。例: 0.3。",
    "Introduce una distancia positiva en metros, por ejemplo 0.3.",
    "Informe uma distância positiva em metros, por exemplo 0.3.",
  ),
  distanceOrder: row(
    "Nearest target must not be farther than farthest target.",
    "最近目标不能远于最远目标。",
    "最近目標は最遠目標より遠くできません。",
    "El objetivo más cercano no puede estar más lejos que el más lejano.",
    "O alvo mais próximo não pode estar mais longe que o alvo mais distante.",
  ),
  distanceStill: row("Results still use {distance}.", "结果仍使用 {distance}。", "結果は引き続き {distance} を使用します。", "Los resultados siguen usando {distance}.", "Os resultados ainda usam {distance}."),
  distanceNoLimit: row(
    "Results still have no distance limit.",
    "结果仍然没有距离限制。",
    "結果には引き続き距離制限がありません。",
    "Los resultados siguen sin límite de distancia.",
    "Os resultados ainda não têm limite de distância.",
  ),
  distanceFoot: row(
    "Range coverage is a first check, not a guarantee of accuracy on your materials or in your lighting.",
    "范围覆盖只是初步检查，不能保证在你的材质和光照下同样准确。",
    "範囲に含まれるかは最初の確認であり、素材や照明での精度を保証しません。",
    "La cobertura del rango es una primera comprobación, no una garantía de precisión con tus materiales o tu iluminación.",
    "A cobertura da faixa é uma primeira verificação, não uma garantia de precisão nos seus materiais ou na sua iluminação.",
  ),
  seriesLabel: row("reComputer series", "reComputer 系列", "reComputer シリーズ", "Serie reComputer", "Série reComputer"),
  seriesAria: row("reComputer series: {label}", "reComputer 系列：{label}", "reComputer シリーズ: {label}", "Serie reComputer: {label}", "Série reComputer: {label}"),
  chooseSeries: row("Choose your series", "选择你的系列", "シリーズを選択", "Elige tu serie", "Escolha sua série"),
  closePicker: row("Close device picker", "关闭设备选择", "デバイス選択を閉じる", "Cerrar el selector de dispositivo", "Fechar o seletor de dispositivo"),
  browseAll: row("Browse all series", "浏览全部系列", "すべてのシリーズを見る", "Ver todas las series", "Ver todas as séries"),
  notSelected: row("Not selected", "未选择", "未選択", "No seleccionado", "Não selecionado"),
  selectSeries: row("Select {label}", "选择 {label}", "{label} を選択", "Seleccionar {label}", "Selecionar {label}"),
  compatibilityTitle: row("Compatibility Jetson", "兼容的 Jetson", "対応 Jetson", "Jetson compatible", "Jetson compatível"),
  compatibilityNote: row(
    "Series with a candidate connection in this guide. Support depends on the carrier, JetPack and camera driver; not every configuration has been tested.",
    "本指南中具备候选接口的系列。是否支持取决于载板、JetPack 和相机驱动；并非每种配置都经过测试。",
    "このガイドで候補となる接続があるシリーズです。対応はキャリアボード、JetPack、カメラドライバーによって異なり、すべての構成がテストされているわけではありません。",
    "Series con una conexión candidata en esta guía. La compatibilidad depende de la portadora, JetPack y el controlador de la cámara; no se ha probado cada configuración.",
    "Séries com uma conexão candidata neste guia. O suporte depende da portadora, do JetPack e do driver da câmera; nem toda configuração foi testada.",
  ),
  outsideSeries: row(
    "{name} is outside this camera’s connection options.",
    "{name} 不在此相机的接口选项内。",
    "{name} はこのカメラの接続選択肢に含まれません。",
    "{name} está fuera de las opciones de conexión de esta cámara.",
    "{name} está fora das opções de conexão desta câmera.",
  ),
  selectedSeries: row("Selected series", "当前系列", "選択中のシリーズ", "Serie seleccionada", "Série selecionada"),
  seriesGuides: row(
    "Series-specific guides & examples",
    "系列专用指南与示例",
    "シリーズ別のガイドと例",
    "Guías y ejemplos de la serie",
    "Guias e exemplos da série",
  ),
  noSeriesGuide: row(
    "No series-specific setup guide is linked for this camera.",
    "此相机没有关联的系列专用上手指南。",
    "このカメラにリンクされたシリーズ別セットアップガイドはありません。",
    "No hay una guía de puesta en marcha específica de la serie enlazada para esta cámara.",
    "Não há um guia de introdução específico da série vinculado a esta câmera.",
  ),
  usesTitle: row("Related application examples", "相关应用示例", "関連する応用例", "Ejemplos de aplicación relacionados", "Exemplos de aplicação relacionados"),
  usesNote: row(
    "These references show how this model has been used. Other cameras may support the same task with suitable software and calibration.",
    "这些资料说明该型号曾如何被使用。其他相机在合适的软件和标定下，也可能完成相同任务。",
    "これらの資料は、このモデルがどのように使われたかを示します。適切なソフトウェアとキャリブレーションがあれば、他のカメラでも同じタスクに使える場合があります。",
    "Estas referencias muestran cómo se ha usado este modelo. Otras cámaras pueden realizar la misma tarea con el software y la calibración adecuados.",
    "Estas referências mostram como este modelo foi usado. Outras câmeras podem executar a mesma tarefa com software e calibração adequados.",
  ),
  wikiExample: row("Wiki example", "Wiki 示例", "Wiki の例", "Ejemplo de la Wiki", "Exemplo da Wiki"),
  manufacturerGuidance: row("Manufacturer guidance", "厂商说明", "メーカー資料", "Orientación del fabricante", "Orientação do fabricante"),
  manufacturerNotes: row("Manufacturer application notes", "厂商应用说明", "メーカーの応用ノート", "Notas de aplicación del fabricante", "Notas de aplicação do fabricante"),
};

export const messages = Object.fromEntries(
  ["en", "zh", "ja", "es", "pt"].map((lang) => [
    lang,
    Object.fromEntries(Object.entries(TABLE).map(([key, value]) => [key, value[lang]])),
  ]),
);

export function cameraT(lang) {
  return createT(messages, lang);
}

export function localizeChoices(options, prefix, lang) {
  const t = cameraT(lang);
  if (!lang || lang === "en") {
    return options.map((option) => ({
      ...option,
      label: t(`${prefix}.${option.id}`),
      description: option.description ? t(`${prefix}.${option.id}.desc`) : option.description,
    }));
  }
  return options.map((option) => ({
    ...option,
    label: t(`${prefix}.${option.id}`),
    description: option.description ? t(`${prefix}.${option.id}.desc`) : option.description,
  }));
}

const phrase = text;
export const phrases = {
  Fixed: phrase("定焦", "固定", "Fijo", "Fixa"),
  "Fixed fisheye": phrase("定焦鱼眼", "固定魚眼", "Ojo de pez fijo", "Olho de peixe fixa"),
  "M12 / CS options": phrase("可选 M12 / CS", "M12 / CS を選択可能", "Opciones M12 / CS", "Opções M12 / CS"),
  "C / CS": phrase("C / CS", "C / CS", "C / CS", "C / CS"),
  M12: phrase("M12", "M12", "M12", "M12"),
  "CS; C adapter": phrase("CS；C 接口转接", "CS、C マウントアダプター", "CS; adaptador C", "CS; adaptador C"),
  "Factory-fixed; angle depends on ordered lens": phrase(
    "出厂固定；角度取决于所订镜头",
    "工場固定。角度は注文したレンズによって異なります",
    "Fijado de fábrica; el ángulo depende del objetivo pedido",
    "Fixada de fábrica; o ângulo depende da lente encomendada",
  ),
  "Wide 2.2 mm; narrow 4.6 mm option": phrase(
    "广角 2.2 mm；可选窄角 4.6 mm",
    "広角 2.2 mm、狭角 4.6 mm を選択可能",
    "Gran angular de 2.2 mm; opción estrecha de 4.6 mm",
    "Grande angular de 2.2 mm; opção estreita de 4.6 mm",
  ),
  "MIPI CSI-2; check the camera and host ribbon connectors": phrase(
    "MIPI CSI-2；请核对相机和主机的排线接口",
    "MIPI CSI-2。カメラとホストのリボンコネクタを確認してください",
    "MIPI CSI-2; comprueba los conectores de cinta de la cámara y del host",
    "MIPI CSI-2; confira os conectores de fita da câmera e do host",
  ),
  "Confirm the Seeed BSP, sensor driver, JetPack, and capture mode": phrase(
    "请确认 Seeed BSP、传感器驱动、JetPack 和采集模式",
    "Seeed BSP、センサードライバー、JetPack、撮影モードを確認してください",
    "Confirma el BSP de Seeed, el controlador del sensor, JetPack y el modo de captura",
    "Confirme o BSP da Seeed, o driver do sensor, o JetPack e o modo de captura",
  ),
  "Confirm for the selected mode": phrase("请按所选模式确认", "選択したモードで確認してください", "Confírmalo para el modo seleccionado", "Confirme para o modo selecionado"),
  "Confirm with the host and capture mode": phrase(
    "请结合主机和采集模式确认",
    "ホストと撮影モードに合わせて確認してください",
    "Confírmalo con el host y el modo de captura",
    "Confirme com o host e o modo de captura",
  ),
  "USB; verify host port, cable, and power budget": phrase(
    "USB；请核对主机接口、线缆和供电余量",
    "USB。ホストポート、ケーブル、電源容量を確認してください",
    "USB; verifica el puerto del host, el cable y el presupuesto de energía",
    "USB; verifique a porta do host, o cabo e a margem de energia",
  ),
  "Confirm UVC or vendor SDK on your JetPack/L4T release": phrase(
    "请在你的 JetPack/L4T 版本上确认 UVC 或厂商 SDK",
    "お使いの JetPack/L4T で UVC またはベンダー SDK を確認してください",
    "Confirma UVC o el SDK del fabricante en tu versión de JetPack/L4T",
    "Confirme UVC ou o SDK do fabricante na sua versão de JetPack/L4T",
  ),
  "Confirm selected stream/mode": phrase("请确认所选数据流/模式", "選択したストリーム/モードを確認してください", "Confirma el flujo/modo seleccionado", "Confirme o fluxo/modo selecionado"),
  "Confirm USB speed and simultaneous streams": phrase(
    "请确认 USB 速率和同时传输的数据流",
    "USB 速度と同時ストリームを確認してください",
    "Confirma la velocidad USB y los flujos simultáneos",
    "Confirme a velocidade USB e os fluxos simultâneos",
  ),
  "GMSL2 camera Fakra; matching coax harness and reComputer GMSL extension board": phrase(
    "GMSL2 相机 Fakra；需要匹配的同轴线束和 reComputer GMSL 扩展板",
    "GMSL2 カメラ Fakra。対応する同軸ハーネスと reComputer GMSL 拡張ボードが必要です",
    "Cámara GMSL2 Fakra; arnés coaxial compatible y placa de expansión GMSL de reComputer",
    "Câmera GMSL2 Fakra; chicote coaxial correspondente e placa de expansão GMSL do reComputer",
  ),
  "Seeed GMSL BSP/driver and matching 3G or 6G device-tree overlay": phrase(
    "Seeed GMSL BSP/驱动，以及匹配的 3G 或 6G 设备树 overlay",
    "Seeed GMSL BSP/ドライバーと、対応する 3G または 6G のデバイスツリー overlay",
    "BSP/controlador GMSL de Seeed y el overlay de device-tree 3G o 6G correspondiente",
    "BSP/driver GMSL da Seeed e o overlay de device-tree 3G ou 6G correspondente",
  ),
  "30 fps at listed resolution (Sensing specification)": phrase(
    "所列分辨率下 30 fps（Sensing 规格）",
    "記載解像度で 30 fps（Sensing の仕様）",
    "30 fps a la resolución indicada (especificación de Sensing)",
    "30 fps na resolução listada (especificação da Sensing)",
  ),
  "Not stated on Bazaar": phrase("Bazaar 未标明", "Bazaar に記載なし", "No indicado en Bazaar", "Não informado no Bazaar"),
  "1/2.7-inch color CMOS (model not stated)": phrase(
    "1/2.7 英寸彩色 CMOS（型号未标明）",
    "1/2.7 インチカラー CMOS（型番は未記載）",
    "CMOS de color de 1/2.7 pulgadas (modelo no indicado)",
    "CMOS color de 1/2.7 polegada (modelo não informado)",
  ),
  "USB 2.0; confirm camera cable and host connector": phrase(
    "USB 2.0；请确认相机线缆和主机接口",
    "USB 2.0。カメラケーブルとホストコネクタを確認してください",
    "USB 2.0; confirma el cable de la cámara y el conector del host",
    "USB 2.0; confirme o cabo da câmera e o conector do host",
  ),
  "USB plug-and-play per Bazaar; verify UVC capture on the target JetPack": phrase(
    "按 Bazaar 说明为 USB 即插即用；请在目标 JetPack 上验证 UVC 采集",
    "Bazaar では USB プラグアンドプレイ。対象の JetPack で UVC 取り込みを確認してください",
    "USB plug-and-play según Bazaar; verifica la captura UVC en el JetPack de destino",
    "USB plug-and-play segundo o Bazaar; verifique a captura UVC no JetPack de destino",
  ),
  "USB 3.0 Type-C; data and power": phrase("USB 3.0 Type-C；数据与供电", "USB 3.0 Type-C。データと電源", "USB 3.0 Type-C; datos y alimentación", "USB 3.0 Type-C; dados e energia"),
  "Orbbec SDK/pyorbbecsdk matching JetPack and ROS environment": phrase(
    "与 JetPack 和 ROS 环境匹配的 Orbbec SDK/pyorbbecsdk",
    "JetPack と ROS 環境に合った Orbbec SDK/pyorbbecsdk",
    "Orbbec SDK/pyorbbecsdk compatible con el entorno JetPack y ROS",
    "Orbbec SDK/pyorbbecsdk compatível com o ambiente JetPack e ROS",
  ),
  "Depth and RGB each up to 30 fps at their listed resolutions; verify simultaneous modes": phrase(
    "深度和 RGB 在各自所列分辨率下最高 30 fps；请验证同时输出模式",
    "深度と RGB はそれぞれの記載解像度で最大 30 fps。同時モードを確認してください",
    "Profundidad y RGB hasta 30 fps cada una en sus resoluciones indicadas; verifica los modos simultáneos",
    "Profundidade e RGB até 30 fps cada uma nas resoluções listadas; verifique os modos simultâneos",
  ),
  "Orbbec SDK; confirm ARM64 release, USB power and depth modes": phrase(
    "Orbbec SDK；请确认 ARM64 版本、USB 供电和深度模式",
    "Orbbec SDK。ARM64 版、USB 電源、深度モードを確認してください",
    "Orbbec SDK; confirma la versión ARM64, la alimentación USB y los modos de profundidad",
    "Orbbec SDK; confirme a versão ARM64, a alimentação USB e os modos de profundidade",
  ),
  "USB 3; confirm supplied cable and host connector": phrase(
    "USB 3；请确认随附线缆和主机接口",
    "USB 3。付属ケーブルとホストコネクタを確認してください",
    "USB 3; confirma el cable suministrado y el conector del host",
    "USB 3; confirme o cabo fornecido e o conector do host",
  ),
  "librealsense/ROS driver; check ARM64 and JetPack version": phrase(
    "librealsense/ROS 驱动；请核对 ARM64 和 JetPack 版本",
    "librealsense/ROS ドライバー。ARM64 と JetPack のバージョンを確認してください",
    "Controlador librealsense/ROS; comprueba ARM64 y la versión de JetPack",
    "Driver librealsense/ROS; confira ARM64 e a versão do JetPack",
  ),
  "USB; confirm speed, cable and host connector": phrase(
    "USB；请确认速率、线缆和主机接口",
    "USB。速度、ケーブル、ホストコネクタを確認してください",
    "USB; confirma la velocidad, el cable y el conector del host",
    "USB; confirme a velocidade, o cabo e o conector do host",
  ),
  "GMSL2 3Gbps; Fakra camera, Mini-Fakra extension-board harness": phrase(
    "GMSL2 3Gbps；Fakra 相机，Mini-Fakra 扩展板线束",
    "GMSL2 3Gbps。Fakra カメラ、Mini-Fakra 拡張ボードハーネス",
    "GMSL2 3Gbps; cámara Fakra, arnés Mini-Fakra de la placa de expansión",
    "GMSL2 3Gbps; câmera Fakra, chicote Mini-Fakra da placa de expansão",
  ),
  "GMSL2 6Gbps link (not image payload throughput)": phrase(
    "GMSL2 6Gbps 链路（不是图像有效载荷吞吐）",
    "GMSL2 6Gbps リンク（画像ペイロードのスループットではありません）",
    "Enlace GMSL2 de 6Gbps (no es el rendimiento útil de la imagen)",
    "Enlace GMSL2 de 6Gbps (não é a vazão útil da imagem)",
  ),
  "GMSL2 3Gbps link (not image payload throughput)": phrase(
    "GMSL2 3Gbps 链路（不是图像有效载荷吞吐）",
    "GMSL2 3Gbps リンク（画像ペイロードのスループットではありません）",
    "Enlace GMSL2 de 3Gbps (no es el rendimiento útil de la imagen)",
    "Enlace GMSL2 de 3Gbps (não é a vazão útil da imagem)",
  ),
  "1920 × 1080 @ 30 fps (product specification)": phrase(
    "1920 × 1080 @ 30 fps（产品规格）",
    "1920 × 1080 @ 30 fps（製品仕様）",
    "1920 × 1080 @ 30 fps (especificación del producto)",
    "1920 × 1080 @ 30 fps (especificação do produto)",
  ),
  "UVC camera; confirm host USB bandwidth and capture mode": phrase(
    "UVC 相机；请确认主机 USB 带宽和采集模式",
    "UVC カメラ。ホストの USB 帯域と撮影モードを確認してください",
    "Cámara UVC; confirma el ancho de banda USB del host y el modo de captura",
    "Câmera UVC; confirme a largura de banda USB do host e o modo de captura",
  ),
  "Not listed on Bazaar": phrase("Bazaar 未列出", "Bazaar に未掲載", "No aparece en Bazaar", "Não listado no Bazaar"),
  "SG3S family photo (F variant); H appearance not independently verified": phrase(
    "SG3S 系列照片（F 版本）；H 版本外观未经独立核实",
    "SG3S ファミリーの写真（F バリアント）。H の外観は独自には確認していません",
    "Foto de la familia SG3S (variante F); el aspecto de H no se ha verificado por separado",
    "Foto da família SG3S (variante F); a aparência da H não foi verificada de forma independente",
  ),
  "Sensing product-page image; external shell shared across variants": phrase(
    "Sensing 产品页图片；不同版本共用外壳",
    "Sensing 製品ページの画像。バリエーション間で外装を共用",
    "Imagen de la página de producto de Sensing; la carcasa externa se comparte entre variantes",
    "Imagem da página do produto Sensing; o invólucro externo é compartilhado entre variantes",
  ),
  "GMSL2 Fakra camera; matching Mini-Fakra harness and extension board": phrase(
    "GMSL2 Fakra 相机；需要匹配的 Mini-Fakra 线束和扩展板",
    "GMSL2 Fakra カメラ。対応する Mini-Fakra ハーネスと拡張ボードが必要です",
    "Cámara GMSL2 Fakra; arnés Mini-Fakra y placa de expansión compatibles",
    "Câmera GMSL2 Fakra; chicote Mini-Fakra e placa de expansão correspondentes",
  ),
  "Seeed GMSL BSP/overlay and Orbbec SDK; J4012 guide uses JetPack 6.2": phrase(
    "Seeed GMSL BSP/overlay 和 Orbbec SDK；J4012 指南使用 JetPack 6.2",
    "Seeed GMSL BSP/overlay と Orbbec SDK。J4012 ガイドは JetPack 6.2 を使用",
    "BSP/overlay GMSL de Seeed y Orbbec SDK; la guía de J4012 usa JetPack 6.2",
    "BSP/overlay GMSL da Seeed e Orbbec SDK; o guia do J4012 usa JetPack 6.2",
  ),
  "Depth up to 1280 × 800 @ 30 fps; RGB up to 1280 × 800 @ 60 fps; confirm simultaneous modes": phrase(
    "深度最高 1280 × 800 @ 30 fps；RGB 最高 1280 × 800 @ 60 fps；请确认同时输出模式",
    "深度は最大 1280 × 800 @ 30 fps、RGB は最大 1280 × 800 @ 60 fps。同時モードを確認してください",
    "Profundidad hasta 1280 × 800 @ 30 fps; RGB hasta 1280 × 800 @ 60 fps; confirma los modos simultáneos",
    "Profundidade até 1280 × 800 @ 30 fps; RGB até 1280 × 800 @ 60 fps; confirme os modos simultâneos",
  ),
  "Confirm GMSL2 serializer and board driver": phrase(
    "请确认 GMSL2 串行器和板卡驱动",
    "GMSL2 シリアライザーとボードドライバーを確認してください",
    "Confirma el serializador GMSL2 y el controlador de la placa",
    "Confirme o serializador GMSL2 e o driver da placa",
  ),
  "GMSL2 Fakra Z; confirm Mini-Fakra harness and extension board": phrase(
    "GMSL2 Fakra Z；请确认 Mini-Fakra 线束和扩展板",
    "GMSL2 Fakra Z。Mini-Fakra ハーネスと拡張ボードを確認してください",
    "GMSL2 Fakra Z; confirma el arnés Mini-Fakra y la placa de expansión",
    "GMSL2 Fakra Z; confirme o chicote Mini-Fakra e a placa de expansão",
  ),
  "Seeed BSP/driver and ZED SDK v4.0 or later; match JetPack/L4T": phrase(
    "Seeed BSP/驱动和 ZED SDK v4.0 或更高版本；需匹配 JetPack/L4T",
    "Seeed BSP/ドライバーと ZED SDK v4.0 以降。JetPack/L4T を合わせてください",
    "BSP/controlador de Seeed y ZED SDK v4.0 o posterior; debe coincidir con JetPack/L4T",
    "BSP/driver da Seeed e ZED SDK v4.0 ou posterior; deve corresponder ao JetPack/L4T",
  ),
  "2 × 1920 × 1200 at 15/30/60 fps; confirm simultaneous depth mode": phrase(
    "2 × 1920 × 1200，15/30/60 fps；请确认同时深度模式",
    "2 × 1920 × 1200、15/30/60 fps。同時深度モードを確認してください",
    "2 × 1920 × 1200 a 15/30/60 fps; confirma el modo de profundidad simultáneo",
    "2 × 1920 × 1200 a 15/30/60 fps; confirme o modo de profundidade simultâneo",
  ),
  "GMSL2; confirm board/link mode": phrase("GMSL2；请确认板卡/链路模式", "GMSL2。ボード/リンクモードを確認してください", "GMSL2; confirma el modo de placa/enlace", "GMSL2; confirme o modo da placa/enlace"),
  "ZED SDK v4.2 or later for One GS; confirm Seeed BSP/driver for the exact host": phrase(
    "One GS 需要 ZED SDK v4.2 或更高版本；请确认具体主机的 Seeed BSP/驱动",
    "One GS には ZED SDK v4.2 以降。対象ホストの Seeed BSP/ドライバーを確認してください",
    "ZED SDK v4.2 o posterior para One GS; confirma el BSP/controlador de Seeed del host exacto",
    "ZED SDK v4.2 ou posterior para One GS; confirme o BSP/driver da Seeed do host exato",
  ),
  "1920 × 1200 at 15/30/60 fps": phrase("1920 × 1200，15/30/60 fps", "1920 × 1200、15/30/60 fps", "1920 × 1200 a 15/30/60 fps", "1920 × 1200 a 15/30/60 fps"),
  "Depth 1280 × 800 @ 30 fps; RGB 1920 × 1080 @ 30 fps": phrase(
    "深度 1280 × 800 @ 30 fps；RGB 1920 × 1080 @ 30 fps",
    "深度 1280 × 800 @ 30 fps、RGB 1920 × 1080 @ 30 fps",
    "Profundidad 1280 × 800 @ 30 fps; RGB 1920 × 1080 @ 30 fps",
    "Profundidade 1280 × 800 @ 30 fps; RGB 1920 × 1080 @ 30 fps",
  ),
  "Depth up to 90 fps (mode-dependent); RGB 1920 × 1080 @ 30 fps": phrase(
    "深度最高 90 fps（取决于模式）；RGB 1920 × 1080 @ 30 fps",
    "深度は最大 90 fps（モードによる）、RGB 1920 × 1080 @ 30 fps",
    "Profundidad hasta 90 fps (según el modo); RGB 1920 × 1080 @ 30 fps",
    "Profundidade até 90 fps (depende do modo); RGB 1920 × 1080 @ 30 fps",
  ),
  "Depth up to 90 fps (mode-dependent); RGB 1280 × 720 @ 30 fps": phrase(
    "深度最高 90 fps（取决于模式）；RGB 1280 × 720 @ 30 fps",
    "深度は最大 90 fps（モードによる）、RGB 1280 × 720 @ 30 fps",
    "Profundidad hasta 90 fps (según el modo); RGB 1280 × 720 @ 30 fps",
    "Profundidade até 90 fps (depende do modo); RGB 1280 × 720 @ 30 fps",
  ),
  "Active stereo IR; RGB and IMU": phrase("主动红外立体；RGB 与 IMU", "アクティブ IR ステレオ、RGB と IMU", "Estéreo IR activo; RGB e IMU", "Estéreo IR ativo; RGB e IMU"),
  "Active stereo depth + RGB": phrase("主动立体深度 + RGB", "アクティブステレオ深度 + RGB", "Profundidad estéreo activa + RGB", "Profundidade estéreo ativa + RGB"),
  "Active stereo depth + RGB + IMU": phrase("主动立体深度 + RGB + IMU", "アクティブステレオ深度 + RGB + IMU", "Profundidad estéreo activa + RGB + IMU", "Profundidade estéreo ativa + RGB + IMU"),
  "Stereo global-shutter depth sensors": phrase("全局快门立体深度传感器", "グローバルシャッターのステレオ深度センサー", "Sensores de profundidad estéreo con obturador global", "Sensores de profundidade estéreo com obturador global"),
  "Dual Sony IMX219": phrase("双 Sony IMX219", "デュアル Sony IMX219", "Doble Sony IMX219", "Dois Sony IMX219"),
  "Dual 1/2.6-inch 2.3MP RGB global-shutter sensors": phrase(
    "双 1/2.6 英寸 2.3MP RGB 全局快门传感器",
    "デュアル 1/2.6 インチ 2.3MP RGB グローバルシャッターセンサー",
    "Dos sensores RGB de 1/2.6 pulgadas y 2.3MP con obturador global",
    "Dois sensores RGB de 1/2.6 polegada e 2.3MP com obturador global",
  ),
  "Sony IMX477 family": phrase("Sony IMX477 系列", "Sony IMX477 ファミリー", "Familia Sony IMX477", "Família Sony IMX477"),
  "onsemi AR0234 · 2.3MP RGB global shutter": phrase(
    "onsemi AR0234 · 2.3MP RGB 全局快门",
    "onsemi AR0234 · 2.3MP RGB グローバルシャッター",
    "onsemi AR0234 · RGB 2.3MP con obturador global",
    "onsemi AR0234 · RGB 2.3MP com obturador global",
  ),
  "at 480p": phrase("480p 时", "480p 時", "a 480p", "em 480p"),
  "Unbinned Dense / Sparse Default modes (not binned mode).": phrase(
    "未合并的 Dense / Sparse Default 模式（不是 binned 模式）。",
    "アンビンの Dense / Sparse Default モード（ビンニングモードではありません）。",
    "Modos Dense / Sparse Default sin binning (no el modo con binning).",
    "Modos Dense / Sparse Default sem binning (não o modo com binning).",
  ),
  "Gemini 336 model specification; published optimal range.": phrase(
    "Gemini 336 型号规格；公布的最佳范围。",
    "Gemini 336 のモデル仕様。公表された最適範囲。",
    "Especificación del modelo Gemini 336; rango óptimo publicado.",
    "Especificação do modelo Gemini 336; faixa ideal publicada.",
  ),
  "D435i model specification; published ideal range.": phrase(
    "D435i 型号规格；公布的理想范围。",
    "D435i のモデル仕様。公表された理想範囲。",
    "Especificación del modelo D435i; rango ideal publicado.",
    "Especificação do modelo D435i; faixa ideal publicada.",
  ),
  "Standard D405 ideal range: 7–50 cm. No extended software mode assumed.": phrase(
    "标准 D405 理想范围：7–50 cm。不假定扩展软件模式。",
    "標準的な D405 の理想範囲: 7–50 cm。拡張ソフトウェアモードは想定していません。",
    "Rango ideal estándar de D405: 7–50 cm. No se asume un modo de software ampliado.",
    "Faixa ideal padrão da D405: 7–50 cm. Nenhum modo de software estendido é presumido.",
  ),
  "Gemini 335Lg model specification; published optimal range.": phrase(
    "Gemini 335Lg 型号规格；公布的最佳范围。",
    "Gemini 335Lg のモデル仕様。公表された最適範囲。",
    "Especificación del modelo Gemini 335Lg; rango óptimo publicado.",
    "Especificação do modelo Gemini 335Lg; faixa ideal publicada.",
  ),
  "Wide 2.2 mm lens, ZED-311110; depth via ZED SDK. Not the narrow-lens variant.": phrase(
    "广角 2.2 mm 镜头，ZED-311110；深度由 ZED SDK 提供。不是窄角镜头版本。",
    "広角 2.2 mm レンズ、ZED-311110。深度は ZED SDK 経由。狭角レンズのバリアントではありません。",
    "Objetivo gran angular de 2.2 mm, ZED-311110; profundidad mediante ZED SDK. No es la variante de objetivo estrecho.",
    "Lente grande angular de 2.2 mm, ZED-311110; profundidade via ZED SDK. Não é a variante de lente estreita.",
  ),
  "Wide 2.2 mm lens, ZED-311210; depth via ZED SDK. Not the narrow-lens variant.": phrase(
    "广角 2.2 mm 镜头，ZED-311210；深度由 ZED SDK 提供。不是窄角镜头版本。",
    "広角 2.2 mm レンズ、ZED-311210。深度は ZED SDK 経由。狭角レンズのバリアントではありません。",
    "Objetivo gran angular de 2.2 mm, ZED-311210; profundidad mediante ZED SDK. No es la variante de objetivo estrecho.",
    "Lente grande angular de 2.2 mm, ZED-311210; profundidade via ZED SDK. Não é a variante de lente estreita.",
  ),
  "Shown: wide 2.2 mm, ZED-311110. Narrow 4.6 mm (ZED-312110): 73° H × 45° V; working depth 1–35 m, ideal 1–20 m.": phrase(
    "所示：广角 2.2 mm，ZED-311110。窄角 4.6 mm（ZED-312110）：73° H × 45° V；工作深度 1–35 m，理想 1–20 m。",
    "表示: 広角 2.2 mm、ZED-311110。狭角 4.6 mm（ZED-312110）: 73° H × 45° V。動作深度 1–35 m、理想 1–20 m。",
    "Mostrado: gran angular de 2.2 mm, ZED-311110. Estrecho de 4.6 mm (ZED-312110): 73° H × 45° V; profundidad de trabajo 1–35 m, ideal 1–20 m.",
    "Exibido: grande angular de 2.2 mm, ZED-311110. Estreita de 4.6 mm (ZED-312110): 73° H × 45° V; profundidade de trabalho 1–35 m, ideal 1–20 m.",
  ),
  "Shown: wide 2.2 mm, ZED-311210. Narrow 4.6 mm (ZED-312210): 73° H × 45° V; working depth 0.15–12 m, ideal 0.15–6 m.": phrase(
    "所示：广角 2.2 mm，ZED-311210。窄角 4.6 mm（ZED-312210）：73° H × 45° V；工作深度 0.15–12 m，理想 0.15–6 m。",
    "表示: 広角 2.2 mm、ZED-311210。狭角 4.6 mm（ZED-312210）: 73° H × 45° V。動作深度 0.15–12 m、理想 0.15–6 m。",
    "Mostrado: gran angular de 2.2 mm, ZED-311210. Estrecho de 4.6 mm (ZED-312210): 73° H × 45° V; profundidad de trabajo 0.15–12 m, ideal 0.15–6 m.",
    "Exibido: grande angular de 2.2 mm, ZED-311210. Estreita de 4.6 mm (ZED-312210): 73° H × 45° V; profundidade de trabalho 0.15–12 m, ideal 0.15–6 m.",
  ),
  "Shown: wide 2.2 mm, ZED-412010. Narrow 4.6 mm (ZED-413010): 73° H × 45° V. One camera provides monocular images.": phrase(
    "所示：广角 2.2 mm，ZED-412010。窄角 4.6 mm（ZED-413010）：73° H × 45° V。单台相机提供单目图像。",
    "表示: 広角 2.2 mm、ZED-412010。狭角 4.6 mm（ZED-413010）: 73° H × 45° V。カメラ 1 台では単眼画像です。",
    "Mostrado: gran angular de 2.2 mm, ZED-412010. Estrecho de 4.6 mm (ZED-413010): 73° H × 45° V. Una cámara proporciona imágenes monoculares.",
    "Exibido: grande angular de 2.2 mm, ZED-412010. Estreita de 4.6 mm (ZED-413010): 73° H × 45° V. Uma câmera fornece imagens monoculares.",
  ),
  "Wiki example": phrase("Wiki 示例", "Wiki の例", "Ejemplo de la Wiki", "Exemplo da Wiki"),
  "Manufacturer guidance": phrase("厂商说明", "メーカー資料", "Orientación del fabricante", "Orientação do fabricante"),
  "Manufacturer application notes": phrase("厂商应用说明", "メーカーの応用ノート", "Notas de aplicación del fabricante", "Notas de aplicação do fabricante"),
};

export function fieldText(lang, value) {
  return translatePhrase(phrases, lang, value);
}

export const bestForCopy = {
  "imx219-77": text(
    "当目标应比广角镜头占据更多画面时，适合作为通用视角。",
    "広角レンズより対象を大きく写したいときの汎用的な画角です。",
    "Una vista de uso general cuando el objetivo debe ocupar más imagen que con un gran angular.",
    "Uma visão de uso geral quando o alvo deve ocupar mais da imagem do que com uma lente ampla.",
  ),
  "imx219-77ir": text(
    "适合弱光下较集中的场景。请确认两颗红外 LED 能否覆盖实际工作距离。",
    "低照度で範囲を絞ったシーン向けです。2 つの IR LED が実際の動作距離をカバーするか確認してください。",
    "Una escena concentrada con poca luz. Comprueba si sus dos LED IR cubren la distancia de trabajo real.",
    "Uma cena concentrada com pouca luz. Confira se os dois LEDs IR cobrem a distância de trabalho real.",
  ),
  "imx219-130": text(
    "当标准镜头会错过路线边缘时，适合机器人或无人机的场景感知。",
    "標準レンズでは経路の端が欠ける場合の、ロボットやドローンの周囲把握に向きます。",
    "Percepción de escena para un robot o dron cuando un objetivo estándar deja fuera los bordes de la ruta.",
    "Percepção de cena para robô ou drone quando uma lente padrão perde as bordas do percurso.",
  ),
  "imx219-160": text(
    "单个安装点即可获得较宽覆盖；较小或较远的目标得到的像素更少。",
    "1 つの取り付け位置で広い範囲をカバーします。小さい、または遠い対象の画素は少なくなります。",
    "Cobertura amplia desde un solo punto de montaje; los objetivos pequeños o lejanos reciben menos píxeles.",
    "Cobertura ampla a partir de um único ponto de montagem; alvos pequenos ou distantes recebem menos pixels.",
  ),
  "imx219-160ir": text(
    "适合夜间宽覆盖；请同时测试图像边缘和中心的红外照射距离。",
    "夜間の広い範囲向けです。画像の端と中央の両方で IR の到達距離を確認してください。",
    "Cobertura nocturna amplia; prueba el alcance IR en los bordes de la imagen además del centro.",
    "Cobertura noturna ampla; teste o alcance IR nas bordas da imagem e também no centro.",
  ),
  "imx219-200": text(
    "接近全景的覆盖。如果几何或测量重要，需要为鱼眼校正预留处理。",
    "ほぼパノラマのカバー範囲です。形状や計測が重要な場合は魚眼補正を見込んでください。",
    "Cobertura casi panorámica. Reserva corrección de ojo de pez si importan la geometría o la medición.",
    "Cobertura quase panorâmica. Reserve correção olho de peixe se a geometria ou a medição importarem.",
  ),
  "camera-v2": text(
    "熟悉的标准视角模组，适合原型和固定位置成像。",
    "試作や固定位置の撮影に向いた、よく知られた標準画角モジュールです。",
    "Un módulo de visión estándar conocido, para prototipos e imagen en posición fija.",
    "Um módulo de visão padrão conhecido, para protótipos e imagem em posição fixa.",
  ),
  "imx219-mount": text(
    "适合自定义工作距离或视场角。下单前请确认随附的卡口和镜头。",
    "作業距離や画角をカスタムする場合向けです。注文前に付属マウントとレンズを確認してください。",
    "Para una distancia de trabajo o un ángulo de visión personalizados. Confirma la montura y el objetivo suministrados antes de pedir.",
    "Para uma distância de trabalho ou um ângulo de visão personalizados. Confirme o encaixe e a lente fornecidos antes de pedir.",
  ),
  "imx219-83": text(
    "提供两个视角用于立体实验；可用深度仍需要标定和处理流程。",
    "ステレオ実験用の 2 視点です。使える深度には、引き続きキャリブレーションと処理パイプラインが必要です。",
    "Dos vistas para experimentos estéreo; una profundidad utilizable sigue necesitando calibración y un proceso.",
    "Duas vistas para experimentos estéreo; uma profundidade utilizável ainda precisa de calibração e de um pipeline.",
  ),
  "pi-hq": text(
    "适合用可选镜头拍摄更高分辨率静帧；请让镜头匹配目标大小和距离。",
    "選択可能なレンズで高解像度の静止画を撮る用途です。レンズを対象の大きさと距離に合わせてください。",
    "Fotos de mayor resolución con un objetivo seleccionable; adapta el objetivo al tamaño y la distancia del objetivo.",
    "Fotos de maior resolução com uma lente selecionável; combine a lente com o tamanho e a distância do alvo.",
  ),
  "pi-hq-m12": text(
    "适合需要 M12 镜头和紧凑镜头组件来匹配外壳的高分辨率采集。",
    "筐体に合う M12 レンズとコンパクトなレンズ構成で高解像度撮影する場合向けです。",
    "Captura de alta resolución cuando un objetivo M12 y un conjunto compacto encajan en la carcasa.",
    "Captura de alta resolução quando uma lente M12 e um conjunto compacto cabem no invólucro.",
  ),
  "hq-cm-jetson": text(
    "适合带可更换镜头和 C 口转接选项的高分辨率 Jetson 方案。",
    "交換レンズと C マウントアダプターを使う高解像度の Jetson 構成向けです。",
    "Una configuración Jetson de alta resolución con objetivo reemplazable y opción de adaptador de montura C.",
    "Uma configuração Jetson de alta resolução com lente substituível e opção de adaptador de encaixe C.",
  ),
  "x10-usb": text(
    "适合采集或模型训练演示的简单 RGB 输入。请在主机上确认实际 UVC 模式、视场角和 USB 供电。",
    "取り込みやモデル学習デモ向けのシンプルな RGB 入力です。実際の UVC モード、FOV、USB 電源をホストで確認してください。",
    "Entrada RGB sencilla para captura o demos de entrenamiento. Confirma en el host el modo UVC, el FOV y la alimentación USB reales.",
    "Entrada RGB simples para captura ou demonstrações de treinamento. Confirme no host o modo UVC, o FOV e a alimentação USB reais.",
  ),
  "et-s231-90": text(
    "适合固定位置成像的 1080p UVC 模组，对角线视场为 90°。",
    "固定位置の撮影向け、対角 90° の 1080p UVC モジュールです。",
    "Un módulo UVC 1080p con visión diagonal de 90° para imagen en posición fija.",
    "Um módulo UVC 1080p com visão diagonal de 90° para imagem em posição fixa.",
  ),
  "et-s231-120": text(
    "视场更宽的 ET-S231，适合近处场景；远处目标所占像素少于 90° 版本。",
    "より広い ET-S231 で、近距離のシーン向けです。遠い対象が占める画素は 90° 版より少なくなります。",
    "La opción ET-S231 más amplia para escenas cercanas; un objetivo lejano ocupa menos píxeles que con la variante de 90°.",
    "A opção ET-S231 mais ampla para cenas próximas; um alvo distante ocupa menos pixels do que na variante de 90°.",
  ),
  "ov9732-usb": text(
    "紧凑的 USB 2.0 RGB 输入，适合近距离训练画面和小型机器人。",
    "近接した学習映像や小型ロボット向けの、コンパクトな USB 2.0 RGB 入力です。",
    "Entrada RGB USB 2.0 compacta para vistas de entrenamiento cercanas y robots pequeños.",
    "Entrada RGB USB 2.0 compacta para vistas de treinamento próximas e robôs pequenos.",
  ),
  "gemini-2": text(
    "用红外立体测量深度，用于导航和检测。可通过 Orbbec SDK 获得 RGB、红外和深度流；红外投射器用于深度感知，不是夜视照明。",
    "赤外線ステレオで深度を測り、ナビゲーションや検査に使います。RGB、IR、深度ストリームは Orbbec SDK から得られます。IR プロジェクターは深度検出用で、暗視照明ではありません。",
    "Usa estéreo infrarrojo para medir profundidad en navegación e inspección. RGB, IR y profundidad están disponibles con el SDK de Orbbec; el proyector IR es para profundidad, no para iluminación nocturna.",
    "Usa estéreo infravermelho para medir profundidade em navegação e inspeção. RGB, IR e profundidade ficam disponíveis pelo SDK Orbbec; o projetor IR é para profundidade, não para iluminação noturna.",
  ),
  "gemini-336": text(
    "适合光照变化下的机器人导航和检测深度感知。",
    "照明が変わる環境でのロボットナビゲーションと検査向けの深度検出です。",
    "Detección de profundidad para navegación e inspección de robots con iluminación variable.",
    "Detecção de profundidade para navegação e inspeção de robôs com iluminação variável.",
  ),
  d435i: text(
    "适合 RGB-D SLAM 以及带板载 IMU 的近中距离机器人感知。",
    "オンボード IMU を使った RGB-D SLAM と、近距離から中距離のロボット知覚向けです。",
    "SLAM RGB-D y percepción de robot de corto a medio alcance con una IMU integrada.",
    "SLAM RGB-D e percepção de robô de curto a médio alcance com uma IMU integrada.",
  ),
  d405: text(
    "适合 7–50 cm 的近距离操作和台面检测，不适合远距离导航。",
    "7–50 cm の近距離操作や卓上検査向けで、遠距離ナビゲーションには向きません。",
    "Manipulación de corto alcance e inspección de sobremesa a 7–50 cm, no navegación lejana.",
    "Manipulação de curto alcance e inspeção de mesa a 7–50 cm, não navegação distante.",
  ),
  "sg3s-f": text(
    "通过 3Gbps GMSL2 链路做大范围机器人视觉。请使用 Seeed 的 3G overlay；这不是 6G H 版本。",
    "3Gbps GMSL2 リンクによる広い範囲のロボットビジョンです。Seeed の 3G overlay を使ってください。6G の H バリアントではありません。",
    "Visión robótica de área amplia por un enlace GMSL2 de 3Gbps. Usa el overlay 3G de Seeed; no es la variante H de 6G.",
    "Visão robótica de área ampla por um enlace GMSL2 de 3Gbps. Use o overlay 3G da Seeed; esta não é a variante H de 6G.",
  ),
  "sg3s-h": text(
    "6Gbps 的 SG3S 选项。Seeed 记录了其 6G overlay，但此 H 版本没有对应的 Bazaar SKU 或购买页面。",
    "6Gbps の SG3S です。Seeed は 6G overlay を記載していますが、この H バリアントには対応する Bazaar SKU や購入ページがありません。",
    "La opción SG3S de 6Gbps. Seeed documenta su overlay 6G, pero esta variante H no tiene SKU ni ficha de compra en Bazaar.",
    "A opção SG3S de 6Gbps. A Seeed documenta o overlay 6G, mas esta variante H não tem SKU nem página de compra no Bazaar.",
  ),
  "sg2-ar0233": text(
    "适合带 HDR 和 6Gbps GMSL2 链路的 1080p 车载风格采集；请订购所需的水平视场镜头版本。",
    "HDR と 6Gbps GMSL2 リンクによる 1080p の車載向け撮影です。必要な水平 FOV のレンズを注文してください。",
    "Captura 1080p de estilo automoción con HDR y enlace GMSL2 de 6Gbps; pide la variante de FOV horizontal deseada.",
    "Captura 1080p de estilo automotivo com HDR e enlace GMSL2 de 6Gbps; encomende a variante de FOV horizontal desejada.",
  ),
  "sg2-imx390": text(
    "适合带 6Gbps GMSL2 链路的 1080p HDR 场景采集；请选择所订镜头角度和匹配的 Seeed overlay。",
    "6Gbps GMSL2 リンクによる 1080p HDR のシーン撮影です。注文したレンズ角度と対応する Seeed overlay を選んでください。",
    "Captura de escena HDR 1080p con enlace GMSL2 de 6Gbps; selecciona el ángulo pedido y el overlay de Seeed correspondiente.",
    "Captura de cena HDR 1080p com enlace GMSL2 de 6Gbps; selecione o ângulo encomendado e o overlay correspondente da Seeed.",
  ),
  "sg8s-ar0820": text(
    "当检测细节重要时，适合 4K 多相机采集。请确认总链路带宽和确切的 6G 驱动模式。",
    "検査の細部が重要なときの 4K マルチカメラ撮影です。合計リンク帯域と正確な 6G ドライバーモードを確認してください。",
    "Captura multicámara 4K cuando importa el detalle de inspección. Confirma el ancho de banda agregado y el modo exacto del controlador 6G.",
    "Captura multicâmera 4K quando o detalhe da inspeção importa. Confirme a largura de banda agregada e o modo exato do driver 6G.",
  ),
  "gemini-335lg": text(
    "适合 AMR 通过锁定的 GMSL2 连接获取深度。请同时确认供电、线束、overlay 和 Orbbec SDK。",
    "ロックされた GMSL2 接続で AMR の深度を得る用途です。電源、ハーネス、overlay、Orbbec SDK をまとめて確認してください。",
    "Profundidad por una conexión GMSL2 fija para AMR. Confirma juntos la alimentación, el arnés, el overlay y el SDK de Orbbec.",
    "Profundidade por uma conexão GMSL2 fixa para AMR. Confirme juntos a alimentação, o chicote, o overlay e o SDK Orbbec.",
  ),
  "zed-x": text(
    "适合更远距离的立体导航。12 cm 基线比 ZED X Mini 更有利于较远目标。",
    "より長い距離のステレオナビゲーション向けです。12 cm のベースラインは ZED X Mini より遠い対象に有利です。",
    "Navegación estéreo de mayor alcance. La base de 12 cm favorece objetivos más lejanos que ZED X Mini.",
    "Navegação estéreo de maior alcance. A base de 12 cm favorece alvos mais distantes do que a ZED X Mini.",
  ),
  "zed-x-mini": text(
    "适合紧凑机器人上的近距离立体视觉。5 cm 基线支持比 ZED X 更短的最近距离。",
    "小型ロボットの近距離ステレオ向けです。5 cm のベースラインは ZED X より短い最小距離に対応します。",
    "Estéreo de corto alcance en robots compactos. La base de 5 cm admite una distancia mínima menor que ZED X.",
    "Estéreo de curto alcance em robôs compactos. A base de 5 cm admite uma distância mínima menor que a ZED X.",
  ),
  "zed-x-one-gs": text(
    "单相机 RGB 采集。经过标定的一对 One GS 可以组成自定义立体系统；单台不输出立体深度。",
    "単眼 RGB 撮影です。キャリブレーションした One GS を 2 台組み合わせるとカスタムステレオになります。1 台ではステレオ深度を出力しません。",
    "Captura RGB de una sola cámara. Un par calibrado de One GS puede formar un sistema estéreo propio; una unidad no genera profundidad estéreo.",
    "Captura RGB de uma única câmera. Um par calibrado de One GS pode formar um sistema estéreo próprio; uma unidade não gera profundidade estéreo.",
  ),
};

export function bestForText(camera, lang) {
  if (!camera || !lang || lang === "en") return camera?.bestFor;
  return bestForCopy[camera.id]?.[lang] ?? camera.bestFor;
}

export const wikiCopy = {};
const wiki = (url, title, note) => {
  wikiCopy[url] = { title, note };
};
wiki("/how_to_use_camera_imx219/", text("IMX219 上手与 ISP 调校", "IMX219 のセットアップと ISP 調整", "Puesta en marcha de IMX219 y ajuste de ISP", "Introdução ao IMX219 e ajuste de ISP"), text("Jetson-IO 与图像色彩校正；另有针对 Pi Camera V2 的单独警告。", "Jetson-IO と画像の色補正。Pi Camera V2 向けの別の警告を含みます。", "Jetson-IO y corrección de color; incluye un aviso aparte para Pi Camera V2.", "Jetson-IO e correção de cor da imagem; inclui um aviso separado para a Pi Camera V2."));
wiki("/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board/", text("在 A603 载板上使用 IMX477", "A603 キャリアで IMX477 を使う", "IMX477 en la portadora A603", "IMX477 na portadora A603"), text("针对 JetPack 5.1.2、6.0 和 6.2 的板卡专用 BSP 说明。", "JetPack 5.1.2、6.0、6.2 向けのボード専用 BSP 手順です。", "Instrucciones de BSP específicas de la placa para JetPack 5.1.2, 6.0 y 6.2.", "Instruções de BSP específicas da placa para JetPack 5.1.2, 6.0 e 6.2."));
wiki("/J401_carrierboard_Hardware_Interfaces_Usage/#csi-cameras", text("J401 上的 CSI 设置", "J401 の CSI セットアップ", "Configuración CSI en J401", "Configuração CSI na J401"), text("排线连接、Jetson-IO 和采集测试。", "リボン接続、Jetson-IO、取り込みテスト。", "Conexión de cinta, Jetson-IO y prueba de captura.", "Conexão da fita, Jetson-IO e teste de captura."));
wiki("/recomputer_j401b_interfaces_usage/#csi-cameras", text("J401B 上的 CSI 设置", "J401B の CSI セットアップ", "Configuración CSI en J401B", "Configuração CSI na J401B"), text("J401B 相机接口和采集说明。", "J401B のカメラコネクタと取り込み手順。", "Conector de cámara de J401B e instrucciones de captura.", "Conector de câmera da J401B e instruções de captura."));
wiki("/reComputer_Industrial_J20_Hardware_Interfaces_Usage/#csi-cameras", text("reComputer Industrial J20 上的 CSI 设置", "reComputer Industrial J20 の CSI セットアップ", "Configuración CSI en reComputer Industrial J20", "Configuração CSI no reComputer Industrial J20"), text("Industrial J20 的接线和驱动配置。", "Industrial J20 の配線とドライバー設定。", "Cableado y configuración del controlador de Industrial J20.", "Fiação e configuração do driver do Industrial J20."));
wiki("/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#csi-cameras", text("reComputer Industrial J30/J40 上的 CSI 设置", "reComputer Industrial J30/J40 の CSI セットアップ", "Configuración CSI en reComputer Industrial J30/J40", "Configuração CSI no reComputer Industrial J30/J40"), text("Industrial Orin 载板的接线和驱动配置。", "Industrial Orin キャリアの配線とドライバー設定。", "Cableado y configuración del controlador de la portadora Industrial Orin.", "Fiação e configuração do driver da portadora Industrial Orin."));
wiki("/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/", text("为 Classic / Super 制作自定义 BSP 相机 overlay", "Classic / Super 向けのカスタム BSP カメラ overlay", "Overlays de cámara BSP personalizados para Classic / Super", "Overlays de câmera BSP personalizados para Classic / Super"), text("进阶集成：编译并选择载板专用的 IMX219 overlay。", "上級者向けの統合です。キャリア専用の IMX219 overlay をビルドして選択します。", "Integración avanzada: compila y selecciona el overlay IMX219 específico de la portadora.", "Integração avançada: compile e selecione o overlay IMX219 específico da portadora."));
wiki("/orbbec_gemini2/", text("Gemini 2 上手", "Gemini 2 入門", "Primeros pasos con Gemini 2", "Introdução à Gemini 2"), text("相机规格、SDK 安装和视频流预览。", "カメラ仕様、SDK のインストール、ストリームプレビュー。", "Especificaciones de la cámara, instalación del SDK y vista previa del flujo.", "Especificações da câmera, instalação do SDK e prévia do fluxo."));
wiki("/orbbec_gemini336/", text("Gemini 336 上手", "Gemini 336 入門", "Primeros pasos con Gemini 336", "Introdução à Gemini 336"), text("相机规格和 Orbbec SDK 设置。", "カメラ仕様と Orbbec SDK のセットアップ。", "Especificaciones de la cámara y configuración del SDK de Orbbec.", "Especificações da câmera e configuração do SDK Orbbec."));
wiki("/orbbec_gemini_335lg/#gmsl2-connection", text("在 reComputer Robotics J4012 上使用 Gemini 335LG", "reComputer Robotics J4012 で Gemini 335LG を使う", "Gemini 335LG en reComputer Robotics J4012", "Gemini 335LG no reComputer Robotics J4012"), text("GMSL 接线、JetPack 6.2 overlay 和 Orbbec SDK。", "GMSL 配線、JetPack 6.2 overlay、Orbbec SDK。", "Cableado GMSL, overlay de JetPack 6.2 y SDK de Orbbec.", "Fiação GMSL, overlay do JetPack 6.2 e SDK Orbbec."));
wiki("/orbbec_depth_camera_on_ros/", text("在 ROS 中使用 Orbbec 深度和点云", "ROS で Orbbec の深度と点群を使う", "Profundidad y nubes de puntos Orbbec en ROS", "Profundidade e nuvens de pontos Orbbec no ROS"), text("在 reComputer J30/J40 上用 RViz 演示 Gemini 2。", "reComputer J30/J40 で RViz を使った Gemini 2 の例です。", "Ejemplo de Gemini 2 en reComputer J30/J40 con RViz.", "Exemplo da Gemini 2 no reComputer J30/J40 com RViz."));
wiki("/sensing_gmsl_cameras/#getting-started", text("Sensing GMSL 相机设置", "Sensing GMSL カメラのセットアップ", "Configuración de cámaras GMSL Sensing", "Configuração das câmeras GMSL Sensing"), text("3G F 版本和 6G H 版本使用不同的 overlay。", "3G の F バリアントと 6G の H バリアントで overlay が分かれています。", "Overlays separados para la variante F de 3G y la variante H de 6G.", "Overlays separados para a variante F de 3G e a variante H de 6G."));
wiki("/recomputer_jetson_robotics_j401_getting_started/#extension-port", text("Robotics J401 上的 GMSL 设置", "Robotics J401 の GMSL セットアップ", "Configuración GMSL en Robotics J401", "Configuração GMSL na Robotics J401"), text("SG 系列和 Gemini 335LG 的连接与 overlay。", "SG シリーズと Gemini 335LG の接続と overlay。", "Conexiones y overlays de la serie SG y Gemini 335LG.", "Conexões e overlays da série SG e da Gemini 335LG."));
wiki("/ai_robotics_recomputer_j501_robotics_getting_started/#extension-port", text("Robotics J501 上的 GMSL 设置", "Robotics J501 の GMSL セットアップ", "Configuración GMSL en Robotics J501", "Configuração GMSL na Robotics J501"), text("SG 系列和 Gemini 335LG 的载板配置。", "SG シリーズと Gemini 335LG のキャリア設定。", "Configuración de la portadora para la serie SG y Gemini 335LG.", "Configuração da portadora para a série SG e a Gemini 335LG."));
wiki("/recomputer_jetson_robotics_j601_interfaces_usage/#gmsl", text("Robotics J601 上的 GMSL 设置", "Robotics J601 の GMSL セットアップ", "Configuración GMSL en Robotics J601", "Configuração GMSL na Robotics J601"), text("SG 系列和 Gemini 335LG 的相机说明。", "SG シリーズと Gemini 335LG のカメラ手順。", "Instrucciones de cámara para la serie SG y Gemini 335LG.", "Instruções de câmera para a série SG e a Gemini 335LG."));
wiki("/recomputer_j501_mini_getting_started/#extension-port---gmsl", text("Robotics J501 Mini 上的 SG 系列设置", "Robotics J501 Mini の SG シリーズ設定", "Configuración de la serie SG en Robotics J501 Mini", "Configuração da série SG na Robotics J501 Mini"), text("Mini 载板扩展口和 SG 系列 overlay。", "Mini キャリアの拡張ポートと SG シリーズの overlay。", "Puerto de expansión de la portadora Mini y overlays de la serie SG.", "Porta de expansão da portadora Mini e overlays da série SG."));
wiki("/j501_carrier_board_interfaces_usage/#gmsl-camera", text("reServer Industrial J501 上的 SG3S-F", "reServer Industrial J501 の SG3S-F", "SG3S-F en reServer Industrial J501", "SG3S-F no reServer Industrial J501"), text("GMSL 扩展板接线和采集配置。", "GMSL 拡張ボードの配線と取り込み設定。", "Cableado de la placa de expansión GMSL y configuración de captura.", "Fiação da placa de expansão GMSL e configuração de captura."));
wiki("/zed_x_gmsl_cameras_on_recomputer_robotics/#device-specific-setup", text("在 reComputer Robotics 上设置 ZED X 系列", "reComputer Robotics で ZED X シリーズを設定", "Configuración de la serie ZED X en reComputer Robotics", "Configuração da série ZED X no reComputer Robotics"), text("系列级指南；完整步骤使用 J50 Mini。单台 One GS 不会产生立体深度。", "シリーズ向けのガイドです。完全な手順は J50 Mini を使用します。One GS 1 台ではステレオ深度は得られません。", "Guía a nivel de serie; el recorrido completo usa J50 Mini. Una sola One GS no produce profundidad estéreo.", "Guia em nível de série; o passo a passo completo usa o J50 Mini. Uma única One GS não produz profundidade estéreo."));
wiki("/rebot_physical_ai_course_chapter_3/", text("reBot 课程：相机与硬件选择", "reBot コース: カメラとハードウェアの選定", "Curso reBot: selección de cámara y hardware", "Curso reBot: seleção de câmera e hardware"), text("Physical AI 课程的设备清单，不是相机驱动教程。", "Physical AI コースの機器リストであり、カメラドライバーのチュートリアルではありません。", "Lista de equipo del curso de Physical AI, no un tutorial del controlador de la cámara.", "Lista de equipamentos do curso de Physical AI, não um tutorial de driver de câmera."));
wiki("/csi_camera_on_ros/", text("用 ROS 使用多路 CSI 相机", "ROS で複数の CSI カメラを使う", "Varias cámaras CSI con ROS", "Várias câmeras CSI com ROS"), text("reComputer J30/J40、JetPack 5.x 和 ROS Noetic。", "reComputer J30/J40、JetPack 5.x、ROS Noetic。", "reComputer J30/J40, JetPack 5.x y ROS Noetic.", "reComputer J30/J40, JetPack 5.x e ROS Noetic."));
wiki("/DashCamNet-with-Jetson-Xavier-NX-Multicamera/", text("用 DashCamNet 做多相机目标检测", "DashCamNet によるマルチカメラ物体検出", "Detección multicámara con DashCamNet", "Detecção multicâmera com DashCamNet"), text("使用所列 CSI 相机的 Jetson Xavier NX 示例。", "記載された CSI カメラを使う Jetson Xavier NX の例です。", "Ejemplo de Jetson Xavier NX con las cámaras CSI indicadas.", "Exemplo de Jetson Xavier NX com as câmeras CSI listadas."));
wiki("/deploy_live_vlm_webui_on_jetson/", text("在 reComputer Jetson 上部署 Live VLM WebUI", "reComputer Jetson に Live VLM WebUI を展開", "Live VLM WebUI en reComputer Jetson", "Live VLM WebUI no reComputer Jetson"), text("在 Super J4012 上对 USB 相机做实时理解。", "Super J4012 での USB カメラのリアルタイム解釈です。", "Interpretación en vivo de una cámara USB en Super J4012.", "Interpretação ao vivo de uma câmera USB no Super J4012."));
wiki("/develop_recomputer_jetson_using_clawdbot/", text("用 Clawdbot 进行相机开发", "Clawdbot でカメラを開発", "Desarrollo de cámara con Clawdbot", "Desenvolvimento de câmera com Clawdbot"), text("使用 X10 USB 相机的 Super J4012 示例。", "X10 USB カメラを使う Super J4012 の例です。", "Ejemplo de Super J4012 con la cámara USB X10.", "Exemplo do Super J4012 com a câmera USB X10."));
wiki("/deploy_joyai_vl_interaction_on_jetson_thor/", text("在 Jetson Thor 上做 JoyAI-VL 视频交互", "Jetson Thor で JoyAI-VL の映像対話", "Interacción de vídeo JoyAI-VL en Jetson Thor", "Interação de vídeo JoyAI-VL no Jetson Thor"), text("视觉语言演示的 USB 相机输入。", "視覚言語デモの USB カメラ入力です。", "Entrada de cámara USB para la demo de visión-lenguaje.", "Entrada de câmera USB para a demonstração de visão e linguagem."));
wiki("/yolov11_with_depth_camera/", text("YOLOv11 检测与距离测量", "YOLOv11 の検出と距離計測", "Detección YOLOv11 y medición de distancia", "Detecção YOLOv11 e medição de distância"), text("Gemini 2 与 reComputer J4012。", "Gemini 2 と reComputer J4012。", "Gemini 2 con reComputer J4012.", "Gemini 2 com reComputer J4012."));
wiki("/orb_slam3_orbbec_gemini2/", text("用 Gemini 2 运行 ORB-SLAM3", "Gemini 2 で ORB-SLAM3", "ORB-SLAM3 con Gemini 2", "ORB-SLAM3 com Gemini 2"), text("在 Jetson 上做 RGB-D 跟踪、标定和建图。", "Jetson での RGB-D 追跡、キャリブレーション、マッピング。", "Seguimiento RGB-D, calibración y mapeo en Jetson.", "Rastreamento RGB-D, calibração e mapeamento no Jetson."));
wiki("/pycuvslam_recomputer_robotics/", text("在 reComputer 上使用 PyCuVSLAM", "reComputer で PyCuVSLAM", "PyCuVSLAM con reComputer", "PyCuVSLAM com reComputer"), text("Gemini 2 RGB-D 视觉里程计示例。", "Gemini 2 の RGB-D ビジュアルオドメトリの例です。", "Ejemplo de odometría visual RGB-D con Gemini 2.", "Exemplo de odometria visual RGB-D com a Gemini 2."));
wiki("/deploy_nvblox_jetson_agx_orin/", text("在 Jetson AGX Orin 上用 NVBlox 做三维建图", "Jetson AGX Orin で NVBlox の 3D マッピング", "Mapeo 3D NVBlox en Jetson AGX Orin", "Mapeamento 3D NVBlox no Jetson AGX Orin"), text("Orbbec ROS 2 流程；包含 Gemini 2 的启动配置。", "Orbbec ROS 2 の手順。Gemini 2 の起動設定を含みます。", "Flujo Orbbec ROS 2; incluye la configuración de lanzamiento de Gemini 2.", "Fluxo Orbbec ROS 2; inclui a configuração de inicialização da Gemini 2."));
wiki("/object_tracking_with_reComputer_jetson_and_pX4/", text("用 Jetson 和 PX4 做目标跟踪", "Jetson と PX4 で物体追跡", "Seguimiento de objetos con Jetson y PX4", "Rastreamento de objetos com Jetson e PX4"), text("Gemini 2、reComputer mini、ROS 2 和 YOLO 跟踪。", "Gemini 2、reComputer mini、ROS 2、YOLO 追跡。", "Gemini 2, reComputer mini, ROS 2 y seguimiento YOLO.", "Gemini 2, reComputer mini, ROS 2 e rastreamento YOLO."));
wiki("/rebot_arm_b601_dm_graspnet_visual_grasping/", text("用 reBot-DM 做 GraspNet 视觉抓取", "reBot-DM で GraspNet の視覚把持", "Agarre visual GraspNet con reBot-DM", "Agarre visual GraspNet com reBot-DM"), text("在 Jetson 上做 Gemini 2 标定和 6 自由度抓取生成。", "Jetson での Gemini 2 のキャリブレーションと 6 自由度把持の生成。", "Calibración de Gemini 2 y generación de agarre de 6 grados de libertad en Jetson.", "Calibração da Gemini 2 e geração de agarre de 6 graus de liberdade no Jetson."));
wiki("/voice_control_rebot_arm/", text("在 Jetson Thor 上语音控制 reBot", "Jetson Thor で reBot を音声制御", "reBot controlado por voz en Jetson Thor", "reBot controlado por voz no Jetson Thor"), text("机械臂演示使用 Gemini 2 RGB-D 输入。", "ロボットアームのデモは Gemini 2 の RGB-D 入力を使います。", "Entrada RGB-D de Gemini 2 para la demo del brazo.", "Entrada RGB-D da Gemini 2 para a demonstração do braço."));
wiki("/rebot_arm_b601_dm_grasping_demo/", text("reBot B601-DM 视觉抓取", "reBot B601-DM の視覚把持", "Agarre visual de reBot B601-DM", "Agarre visual do reBot B601-DM"), text("相机 SDK 设置、标定和基于 YOLO 的抓取。", "カメラ SDK の設定、キャリブレーション、YOLO による把持。", "Configuración del SDK de la cámara, calibración y agarre basado en YOLO.", "Configuração do SDK da câmera, calibração e agarre baseado em YOLO."));
wiki("/rebot_arm_b601_rs_grasping_demo/", text("reBot B601-RS 视觉抓取", "reBot B601-RS の視覚把持", "Agarre visual de reBot B601-RS", "Agarre visual do reBot B601-RS"), text("相机 SDK 设置和 RS 机械臂抓取流程。", "カメラ SDK の設定と RS アームの把持手順。", "Configuración del SDK de la cámara y el flujo de agarre del brazo RS.", "Configuração do SDK da câmera e o fluxo de agarre do braço RS."));
wiki("/wrc_demo_tutorial/", text("reBot B601-RS 与 Agent Claw", "reBot B601-RS と Agent Claw", "reBot B601-RS con Agent Claw", "reBot B601-RS com Agent Claw"), text("为智能体控制的操作设置 RGB-D 相机。", "エージェント制御の操作向け RGB-D カメラ設定。", "Configuración de cámara RGB-D para manipulación controlada por un agente.", "Configuração de câmera RGB-D para manipulação controlada por agente."));
wiki("/rebot_arm_b601_dm_lerobot/#add-cameras", text("reBot B601-DM 与 LeRobot", "reBot B601-DM と LeRobot", "reBot B601-DM con LeRobot", "reBot B601-DM com LeRobot"), text("用于数据集录制的 RealSense 和 Orbbec 相机设置。", "データセット記録向けの RealSense と Orbbec のカメラ設定。", "Configuración de cámaras RealSense y Orbbec para grabar conjuntos de datos.", "Configuração de câmeras RealSense e Orbbec para gravar conjuntos de dados."));
wiki("/rebot_arm_b601_rs_lerobot/#add-cameras", text("reBot B601-RS 与 LeRobot", "reBot B601-RS と LeRobot", "reBot B601-RS con LeRobot", "reBot B601-RS com LeRobot"), text("用于数据集录制的 RealSense 和 Orbbec 相机设置。", "データセット記録向けの RealSense と Orbbec のカメラ設定。", "Configuración de cámaras RealSense y Orbbec para grabar conjuntos de datos.", "Configuração de câmeras RealSense e Orbbec para gravar conjuntos de dados."));
wiki("/lerobot_so100m_new/#add-cameras", text("SO-Arm LeRobot 教程", "SO-Arm の LeRobot チュートリアル", "Tutorial LeRobot de SO-Arm", "Tutorial LeRobot do SO-Arm"), text("相机配置、视频流检查和数据集录制。", "カメラ設定、ストリーム確認、データセット記録。", "Configuración de la cámara, comprobación del flujo y grabación del conjunto de datos.", "Configuração da câmera, verificação do fluxo e gravação do conjunto de dados."));
wiki("/lerobot_so100m/", text("用 LeRobot 使用 SO10xArm（较早流程）", "LeRobot で SO10xArm（以前の手順）", "SO10xArm con LeRobot (flujo anterior)", "SO10xArm com LeRobot (fluxo anterior)"), text("包含 Gemini 2 相机配置章节。", "Gemini 2 のカメラ設定の節を含みます。", "Incluye una sección de configuración de la cámara Gemini 2.", "Inclui uma seção de configuração da câmera Gemini 2."));
wiki("/lerobot_starai_arm/", text("StarAI Arm 与 LeRobot", "StarAI Arm と LeRobot", "StarAI Arm con LeRobot", "StarAI Arm com LeRobot"), text("用 Gemini 2 采集图像，用于模仿学习数据集。", "模倣学習データセット向けの Gemini 2 画像取り込み。", "Captura de imágenes con Gemini 2 para conjuntos de datos de aprendizaje por imitación.", "Captura de imagens com a Gemini 2 para conjuntos de dados de aprendizado por imitação."));
wiki("/control_robotic_arm_via_gr00t/", text("用 Isaac GR00T N1.5 控制机械臂", "Isaac GR00T N1.5 でロボットアームを制御", "Control del brazo con Isaac GR00T N1.5", "Controle do braço com Isaac GR00T N1.5"), text("演示装置使用 StarAI Arm 和 Gemini 2。", "デモ構成は StarAI Arm と Gemini 2 を使います。", "La configuración demostrada usa StarAI Arm y Gemini 2.", "A configuração demonstrada usa StarAI Arm e Gemini 2."));
wiki("/realsense_3d_seg/", text("RealSense 三维分割", "RealSense の 3D セグメンテーション", "Segmentación 3D con RealSense", "Segmentação 3D com RealSense"), text("D405 / D435i 设置、点云和近距离参数。", "D405 / D435i の設定、点群、近距離パラメーター。", "Configuración de D405 / D435i, nubes de puntos y parámetros de corto alcance.", "Configuração de D405 / D435i, nuvens de pontos e parâmetros de curto alcance."));
wiki("/ai_roboticsyolov26_dual_camera_system/", text("用 YOLOv26 处理双路 GMSL 相机", "YOLOv26 でデュアル GMSL カメラ", "Dos cámaras GMSL con YOLOv26", "Duas câmeras GMSL com YOLOv26"), text("在 Jetson 上使用两台 SG3S-F 和 TensorRT。", "Jetson で SG3S-F を 2 台と TensorRT を使います。", "Usa dos cámaras SG3S-F y TensorRT en Jetson.", "Usa duas câmeras SG3S-F e TensorRT no Jetson."));
wiki("/jetson_fisheye_surround_view_demo/", text("四相机鱼眼环视", "4 カメラの魚眼サラウンドビュー", "Vista envolvente de ojo de pez con cuatro cámaras", "Visão surround olho de peixe com quatro câmeras"), text("在 Jetson AGX Thor 上使用四台 SG3S-F。", "Jetson AGX Thor で SG3S-F を 4 台使います。", "Cuatro cámaras SG3S-F en Jetson AGX Thor.", "Quatro câmeras SG3S-F no Jetson AGX Thor."));
wiki("/deploy_visual_perception_engine_recomputer/", text("在 Jetson 上做多任务视觉推理", "Jetson でマルチタスク視覚推論", "Inferencia visual multitarea en Jetson", "Inferência visual multitarefa no Jetson"), text("硬件清单使用 SG3S-F GMSL2 相机。", "ハードウェア一覧は SG3S-F GMSL2 カメラを使います。", "La lista de hardware usa la cámara GMSL2 SG3S-F.", "A lista de hardware usa a câmera GMSL2 SG3S-F."));
wiki("/multiple_cameras_with_jetson/", text("多路 GMSL 检测与三维重建", "マルチ GMSL の検出と 3D 再構成", "Detección multi-GMSL y reconstrucción 3D", "Detecção multi-GMSL e reconstrução 3D"), text("reServer Industrial J501 和所链接的 SG3S-F 相机。", "reServer Industrial J501 と、リンクされた SG3S-F カメラ。", "reServer Industrial J501 y la cámara SG3S-F enlazada.", "reServer Industrial J501 e a câmera SG3S-F vinculada."));

export function wikiField(resource, field, lang) {
  if (!resource) return "";
  if (!lang || lang === "en") return resource[field];
  return wikiCopy[resource.url]?.[field]?.[lang] ?? resource[field];
}

export const evidenceCopy = {
  "manipulation|/rebot_arm_b601_dm_grasping_demo/": text(
    "reBot 抓取教程中的 RGB-D 目标定位和手眼标定。",
    "reBot の把持チュートリアルにおける RGB-D の対象位置推定とハンドアイキャリブレーション。",
    "Localización de objetos RGB-D y calibración mano-ojo en el tutorial de agarre de reBot.",
    "Localização de objetos RGB-D e calibração mão-olho no tutorial de agarre do reBot.",
  ),
  "manipulation|https://www.orbbec.com/news/orbbec-showcases-3d-vision-solutions-for-logistics-and-industrial-automation-at-modex-2026/": text(
    "所引用的码垛机器人演示使用了 Gemini 336。",
    "引用されたパレタイジングロボットのデモで Gemini 336 が使われています。",
    "Gemini 336 se usa en la demostración citada de un robot paletizador.",
    "A Gemini 336 é usada na demonstração citada de um robô paletizador.",
  ),
  "manipulation|https://www.orbbec.com/news/axiomtek-and-orbbec-partner-to-deliver-ready-to-use-robotics-development-solutions-for-amr-and-robotic-arm-applications/": text(
    "厂商描述了面向机械臂应用的 Gemini 335Lg 集成。",
    "メーカーはロボットアーム用途向けの Gemini 335Lg 統合を説明しています。",
    "El fabricante describe una integración de Gemini 335Lg para aplicaciones de brazo robótico.",
    "O fabricante descreve uma integração da Gemini 335Lg para aplicações de braço robótico.",
  ),
  "manipulation|https://www.stereolabs.com/products/zed-x": text(
    "ZED X Mini 面向近距离操作和抓取。",
    "ZED X Mini は近距離の操作とピッキング向けです。",
    "ZED X Mini está pensada para manipulación y picking de corto alcance.",
    "A ZED X Mini destina-se a manipulação e picking de curto alcance.",
  ),
  "manipulation|/jetson_fisheye_surround_view_demo/": text(
    "四相机 YOLO 目标定位，用于辅助抓取；需要标定后的演示流程，不是原生深度流。",
    "把持支援のための 4 カメラ YOLO 位置推定です。キャリブレーション済みのデモ手順が必要で、ネイティブな深度ストリームではありません。",
    "Localización YOLO con cuatro cámaras para ayudar al agarre; requiere el proceso calibrado de la demo, no un flujo de profundidad nativo.",
    "Localização YOLO com quatro câmeras para auxiliar o agarre; exige o pipeline calibrado da demonstração, não um fluxo de profundidade nativo.",
  ),
  "recognition|/yolov11_with_depth_camera/": text(
    "用 RGB 图像做 YOLO 目标检测；此示例不是表面缺陷检测测试。",
    "RGB 画像による YOLO 物体検出です。この例は表面欠陥検査のテストではありません。",
    "Detección de objetos YOLO con imágenes RGB; este ejemplo no es una prueba de inspección de defectos superficiales.",
    "Detecção de objetos YOLO com imagens RGB; este exemplo não é um teste de inspeção de defeitos de superfície.",
  ),
  "recognition|/jetson_fisheye_surround_view_demo/": text(
    "环视演示中，用四台标定后的鱼眼相机做目标检测。",
    "サラウンドビューのデモで、キャリブレーション済みの魚眼カメラ 4 台から物体検出を行います。",
    "Detección de objetos desde cuatro cámaras de ojo de pez calibradas en la demo de vista envolvente.",
    "Detecção de objetos a partir de quatro câmeras olho de peixe calibradas na demonstração de visão surround.",
  ),
  "measurement|/yolov11_with_depth_camera/": text(
    "教程流程中，用深度测量已检测目标的距离。",
    "チュートリアルの手順で、検出した対象の距離を深度から測ります。",
    "Medición de distancia basada en profundidad para los objetos detectados en el tutorial.",
    "Medição de distância baseada em profundidade para os objetos detectados no tutorial.",
  ),
  "measurement|https://www.realsenseai.com/product-family/d405-series/": text(
    "在配置的工作范围内做近距离检测、扫描和尺寸检查。",
    "設定した動作範囲内での近距離検査、スキャン、寸法確認です。",
    "Inspección de corto alcance, escaneo y comprobaciones dimensionales dentro del rango de trabajo configurado.",
    "Inspeção de curto alcance, digitalização e verificações dimensionais dentro da faixa de trabalho configurada.",
  ),
  "driving|/orb_slam3_orbbec_gemini2/": text(
    "在 Jetson 上用 ORB-SLAM3 做 RGB-D 跟踪和建图；不是道路驾驶验证。",
    "Jetson 上の ORB-SLAM3 による RGB-D 追跡とマッピングです。公道走行の検証ではありません。",
    "Seguimiento y mapeo RGB-D con ORB-SLAM3 en Jetson; no es una validación de conducción en carretera.",
    "Rastreamento e mapeamento RGB-D com ORB-SLAM3 no Jetson; não é uma validação de direção em via.",
  ),
  "driving|https://store.orbbec.com/products/gemini-336": text(
    "厂商将 AMR 和配送机器人列为目标应用。",
    "メーカーは AMR と配送ロボットを対象用途として示しています。",
    "El fabricante identifica AMR y robots de reparto como aplicaciones objetivo.",
    "O fabricante identifica AMR e robôs de entrega como aplicações alvo.",
  ),
  "driving|https://www.orbbec.com/news/orbbec-partners-with-advantech-to-bring-out-of-the-box-ai-vision-solutions-to-amr-developers/": text(
    "所引用的基于 Jetson 的 AMR 集成使用了 Gemini 335Lg。",
    "引用された Jetson ベースの AMR 統合で Gemini 335Lg が使われています。",
    "Gemini 335Lg se usa en la integración AMR basada en Jetson citada.",
    "A Gemini 335Lg é usada na integração AMR baseada em Jetson citada.",
  ),
  "driving|https://www.realsenseai.com/products/depth-camera-d435i/": text(
    "深度以及与时间对齐的 IMU 数据，用于视觉跟踪和机器人导航。",
    "視覚追跡とロボットナビゲーション向けの、深度と時刻整合した IMU データです。",
    "Profundidad y datos de IMU alineados en el tiempo para seguimiento visual y navegación robótica.",
    "Profundidade e dados de IMU alinhados no tempo para rastreamento visual e navegação robótica.",
  ),
  "driving|https://docs.stereolabs.com/docs/development/zed-sdk/modules/spatial-mapping": text(
    "两款型号都支持 ZED SDK 空间建图，用于环境和障碍感知。",
    "両モデルは環境と障害物の検知向けに ZED SDK の空間マッピングに対応します。",
    "Ambos modelos admiten el mapeo espacial del ZED SDK para percibir el entorno y los obstáculos.",
    "Os dois modelos suportam o mapeamento espacial do ZED SDK para perceber o ambiente e os obstáculos.",
  ),
  "driving|/jetson_fisheye_surround_view_demo/": text(
    "四台标定后的鱼眼相机提供俯视画面和占据提示，用于底盘运动。",
    "キャリブレーション済みの魚眼カメラ 4 台が、車体運動向けの俯瞰映像と占有の手がかりを提供します。",
    "Cuatro cámaras de ojo de pez calibradas ofrecen una vista de pájaro y pistas de ocupación para el movimiento del chasis.",
    "Quatro câmeras olho de peixe calibradas fornecem uma vista de cima e pistas de ocupação para o movimento do chassi.",
  ),
};

export function evidenceText(item, lang) {
  if (!item || !lang || lang === "en") return item?.reason;
  return evidenceCopy[`${item.application}|${item.url}`]?.[lang] ?? item.reason;
}

export { localizeWikiHref };

export function showImage(stream, lang) {
  if (!lang || lang === "en") return formatImage(stream);
  if (!stream) return cameraT(lang)("notSpecified");
  return `${stream.width} × ${stream.height}${stream.perEye ? cameraT(lang)("perEye") : ""}`;
}

export function showFov(view, lang) {
  if (!lang || lang === "en") return formatFov(view);
  const t = cameraT(lang);
  if (!view) return t("notSpecified");
  if (view.axis === "lens") return t("dependsOnLens");
  if (view.axis === "diagonal") return t("fovDiagonal", { degrees: view.degrees });
  if (view.axis === "hv") {
    const base = `${view.horizontal}° H × ${view.vertical}° V`;
    return view.uncertainty ? `${base} ±${view.uncertainty}°` : base;
  }
  return view.degrees ? t("fovAxisUnspecified", { degrees: view.degrees }) : t("notSpecified");
}

export function showIdealRange(range, lang) {
  const value = formatIdealRange(range);
  if (!lang || lang === "en" || value !== "Not specified") return value;
  return cameraT(lang)("notSpecified");
}

export function showDistance(distance, lang) {
  if (!distance) return "";
  if (!lang || lang === "en") return formatDistance(distance);
  const t = cameraT(lang);
  if (distance.minM === null) return t("distanceFar", { n: distance.maxM });
  if (distance.maxM === null) return t("distanceNear", { n: distance.minM });
  const span = distance.minM === distance.maxM ? distance.minM : `${distance.minM}–${distance.maxM}`;
  return t("distanceSpan", { span });
}

export function showDistanceExplanation(camera, distance, compact = false, lang = "en") {
  if (!lang || lang === "en") return distanceExplanation(camera, distance, compact);
  const status = distanceMatch(camera, distance);
  if (status === "inactive") return "";
  const t = cameraT(lang);
  if (status === "unknown") return t("rangeUnknown");
  if (compact && status === "match") {
    const target = distance.minM === null || distance.maxM === null || distance.minM === distance.maxM
      ? `${distance.minM ?? distance.maxM} m`
      : `${distance.minM}–${distance.maxM} m`;
    return t("rangeCoversTarget", { target });
  }
  const requirement = showDistance(distance, lang);
  return status === "match" ? t("rangeCovers", { requirement }) : t("rangeOutside", { requirement });
}

export function showWorkingRange(range, lang) {
  if (!lang || lang === "en") return formatWorkingRange(range);
  const t = cameraT(lang);
  if (!Number.isFinite(range?.workingMinM)) return t("notSpecified");
  if (Number.isFinite(range.workingMaxM)) {
    return `${range.workingMinM}–${range.workingMaxM} m${range.openMax ? "+" : ""}`;
  }
  const note = range.minimumNote ? ` (${fieldText(lang, range.minimumNote)})` : "";
  return t("workingMinimum", { n: range.workingMinM, note });
}

export function showFrameRate(stream, lang) {
  if (!lang || lang === "en") return formatFrameRate(stream);
  const t = cameraT(lang);
  if (!Number.isFinite(stream?.fps)) return t("fpsUnspecified");
  return t("fpsAt", { fps: stream.fps, image: showImage(stream, lang) });
}

export function showKeyFact(camera, lang) {
  if (!lang || lang === "en") return keyFact(camera);
  const t = cameraT(lang);
  if (camera.output === "depth") return t("factIdeal", { range: showIdealRange(camera.specs.range, lang) });
  if (camera.irNightVision) return t("factNight");
  if (camera.features.includes("stereo")) return t("factStereo");
  if (camera.features.includes("lens")) return t("factLens", { lens: fieldText(lang, camera.specs.lens) });
  if (camera.id === "zed-x-one-gs") return t("factMono");
  if (camera.specs.linkGbps) return t("factLink", { n: camera.specs.linkGbps });
  return camera.coverage === "ultra" ? t("factFisheye") : t("factFixed");
}

export function showCompareReason(camera, selected, lang) {
  const reason = compareDisabledReason(camera, selected);
  if (!reason || !lang || lang === "en") return reason;
  const t = cameraT(lang);
  if (reason.startsWith("Clear the selection")) {
    return t("compareClearOutput", { output: t(`output.${camera.output}`) });
  }
  return t("compareRemoveOne");
}

const INSIGHT_NOTES = {
  "Capture mode not fully specified": "noteCapture",
  "Different capture modes": "noteModes",
  "Angle or axis not specified for every camera": "noteAngle",
  "Different FOV axes or image streams": "noteFov",
  "Only minimum distance is ranked; open-ended (+) maxima are not compared.": "noteOpenMax",
};
const INSIGHT_BADGES = {
  "More image pixels": "badgeImage",
  "Denser depth map": "badgeDepth",
  "Higher frame rate": "badgeFps",
  "Wider view": "badgeWider",
  "Closer minimum": "badgeCloser",
  "Longer ideal range": "badgeLonger",
};

export function presentInsights(selected, lang) {
  const insights = comparisonInsights(selected);
  if (!lang || lang === "en") return insights;
  const t = cameraT(lang);
  const notes = {};
  for (const [key, note] of Object.entries(insights.notes)) {
    if (!note) continue;
    const tied = /Tied closest minimum: ([\d.]+) m\./.exec(note);
    if (tied && note.startsWith("Tied closest minimum")) notes[key] = t("noteTied", { n: tied[1] });
    else if (tied) {
      const prefix = note.slice(0, note.indexOf("Tied closest minimum")).trim();
      notes[key] = `${INSIGHT_NOTES[prefix] ? t(INSIGHT_NOTES[prefix]) : prefix} ${t("noteTied", { n: tied[1] })}`;
    } else notes[key] = INSIGHT_NOTES[note] ? t(INSIGHT_NOTES[note]) : note;
  }
  const badges = {};
  for (const [id, fields] of Object.entries(insights.badges)) {
    badges[id] = {};
    for (const [key, labels] of Object.entries(fields)) {
      badges[id][key] = labels.map((label) => (INSIGHT_BADGES[label] ? t(INSIGHT_BADGES[label]) : label));
    }
  }
  return { badges, notes };
}

export function presentDistanceResult(draft, lang) {
  const result = parseDistanceDraft(draft);
  if (!result.error || !lang || lang === "en") return result;
  const t = cameraT(lang);
  return {
    ...result,
    error: result.error.startsWith("Nearest") ? t("distanceOrder") : t("distancePositive"),
  };
}
