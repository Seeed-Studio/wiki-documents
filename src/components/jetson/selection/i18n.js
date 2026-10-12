import {
  createT,
  translatePhrase,
} from "./locale.js";
import {
  filterTags,
  hasInterface,
  interfaces,
  portSummary,
} from "./model.js";

const row = (en, zh, ja, es, pt) => ({ en, zh, ja, es, pt });

const TABLE = {
  productFilters: row(
    "Product filters",
    "产品筛选",
    "製品フィルター",
    "Filtros de productos",
    "Filtros de produtos",
  ),
  productType: row("Product type", "产品类型", "製品タイプ", "Tipo de producto", "Tipo de produto"),
  application: row("Application", "应用场景", "用途", "Aplicación", "Aplicação"),
  allApplications: row(
    "All applications",
    "全部应用场景",
    "すべての用途",
    "Todas las aplicaciones",
    "Todas as aplicações",
  ),
  applicationHelp: row(
    "Filters by documented product positioning. Other products may support the same task with suitable integration.",
    "按文档中的产品定位筛选。其他产品经过适当集成后，也可能完成相同任务。",
    "ドキュメント上の製品ポジションで絞り込みます。適切な統合を行えば、他の製品でも同じ用途に使える場合があります。",
    "Filtra según el posicionamiento documentado del producto. Otros productos pueden realizar la misma tarea con la integración adecuada.",
    "Filtra pelo posicionamento documentado do produto. Outros produtos podem executar a mesma tarefa com a integração adequada.",
  ),
  moduleSystem: row("Jetson module", "Jetson 模组", "Jetson モジュール", "Módulo Jetson", "Módulo Jetson"),
  moduleCarrier: row(
    "Supported modules",
    "支持的模组",
    "対応モジュール",
    "Módulos compatibles",
    "Módulos compatíveis",
  ),
  anyModule: row("Any module", "任意模组", "すべてのモジュール", "Cualquier módulo", "Qualquer módulo"),
  minMemory: row("Minimum memory", "最低内存", "最小メモリ", "Memoria mínima", "Memória mínima"),
  anyMemory: row("Any memory", "任意内存", "すべてのメモリ", "Cualquier memoria", "Qualquer memória"),
  gbOrMore: row("{n}GB or more", "{n}GB 或更大", "{n}GB 以上", "{n}GB o más", "{n}GB ou mais"),
  minCompute: row(
    "Minimum AI compute (TOPS)",
    "最低 AI 算力 (TOPS)",
    "最小 AI 演算性能 (TOPS)",
    "Cómputo de IA mínimo (TOPS)",
    "Computação de IA mínima (TOPS)",
  ),
  anyCompute: row("Any compute", "任意算力", "すべての演算性能", "Cualquier cómputo", "Qualquer computação"),
  topsOrMore: row(
    "{n} TOPS or more",
    "{n} TOPS 或更高",
    "{n} TOPS 以上",
    "{n} TOPS o más",
    "{n} TOPS ou mais",
  ),
  computeHelp: row(
    "Filters by published TOPS for the listed configuration. Figures may use different compute and power modes; they are not measured system performance.",
    "按所列配置公布的 TOPS 筛选。数值可能对应不同的算力与功耗模式，并不代表实测系统性能。",
    "掲載構成の公称 TOPS で絞り込みます。数値は演算モードや電力モードが異なる場合があり、測定したシステム性能ではありません。",
    "Filtra por los TOPS publicados de la configuración indicada. Las cifras pueden usar distintos modos de cómputo y potencia; no son el rendimiento medido del sistema.",
    "Filtra pelos TOPS publicados da configuração listada. Os valores podem usar modos de computação e potência diferentes; não são o desempenho medido do sistema.",
  ),
  requiredInterfaces: row(
    "Required interfaces",
    "必备接口",
    "必要なインターフェース",
    "Interfaces necesarias",
    "Interfaces necessárias",
  ),
  anyInterfaces: row("Any interfaces", "任意接口", "すべてのインターフェース", "Cualquier interfaz", "Qualquer interface"),
  interfaceHelp: row(
    "Select every interface you need. Wireless options mean module expansion, not an installed radio.",
    "选择你需要的全部接口。无线选项表示可扩展模组，不代表已经安装无线模块。",
    "必要なインターフェースをすべて選択します。無線の項目はモジュール拡張を意味し、無線モジュール搭載済みではありません。",
    "Selecciona todas las interfaces que necesites. Las opciones inalámbricas indican expansión de módulo, no una radio instalada.",
    "Selecione todas as interfaces de que você precisa. As opções sem fio indicam expansão de módulo, não um rádio instalado.",
  ),
  minUsbA: row(
    "Minimum USB-A ports",
    "最少 USB-A 接口数",
    "最小 USB-A ポート数",
    "Puertos USB-A mínimos",
    "Portas USB-A mínimas",
  ),
  orMore: row("{n} or more", "{n} 个或更多", "{n} 個以上", "{n} o más", "{n} ou mais"),
  usbAAtLeast: row("USB-A ≥ {n}", "USB-A ≥ {n}", "USB-A ≥ {n}", "USB-A ≥ {n}", "USB-A ≥ {n}"),
  jetpack: row("Support JetPack", "支持的 JetPack", "対応 JetPack", "JetPack compatible", "JetPack compatível"),
  anyVersion: row("Any version", "任意版本", "すべてのバージョン", "Cualquier versión", "Qualquer versão"),
  jetpackOption: row("JetPack {version}", "JetPack {version}", "JetPack {version}", "JetPack {version}", "JetPack {version}"),
  jetpackHelp: row(
    "Documented supported versions, not the factory-installed version. See Details for the corresponding guides.",
    "这里是文档记载的支持版本，不是出厂预装版本。对应指南见详情。",
    "ドキュメントに記載された対応バージョンであり、工場出荷時のバージョンではありません。対応ガイドは詳細を参照してください。",
    "Versiones compatibles documentadas, no la versión instalada de fábrica. Consulta Detalles para las guías correspondientes.",
    "Versões compatíveis documentadas, não a versão instalada de fábrica. Veja Detalhes para os guias correspondentes.",
  ),
  findModel: row("Find a model", "查找型号", "モデルを検索", "Buscar un modelo", "Localizar um modelo"),
  findPlaceholder: row(
    "Model, SKU or interface",
    "型号、SKU 或接口",
    "モデル、SKU、インターフェース",
    "Modelo, SKU o interfaz",
    "Modelo, SKU ou interface",
  ),
  storage: row("Storage & expansion", "存储与扩展", "ストレージと拡張", "Almacenamiento y expansión", "Armazenamento e expansão"),
  anyExpansion: row("Any expansion", "任意扩展", "すべての拡張", "Cualquier expansión", "Qualquer expansão"),
  storageHelp: row(
    "A slot is an expansion option, not an installed SSD or wireless modem.",
    "插槽表示可扩展，不代表已经安装 SSD 或无线模块。",
    "スロットは拡張用であり、SSD や無線モデムが搭載済みという意味ではありません。",
    "Una ranura es una opción de expansión, no un SSD o módem inalámbrico instalado.",
    "Um slot é uma opção de expansão, não um SSD ou modem sem fio instalado.",
  ),
  protection: row("Protection rating", "防护等级", "保護等級", "Grado de protección", "Grau de proteção"),
  anyRating: row("Any rating", "任意等级", "すべての等級", "Cualquier grado", "Qualquer grau"),
  protectionHelp: row(
    "Matches the documented rating exactly. Products without a documented rating are excluded when a rating is required.",
    "必须与文档记载的防护等级完全一致。要求防护等级时，未记载等级的产品会被排除。",
    "記載された保護等級と完全一致するものだけが対象です。等級を指定すると、等級の記載がない製品は除外されます。",
    "Coincide exactamente con el grado documentado. Si se exige un grado, se excluyen los productos sin grado documentado.",
    "Corresponde exatamente ao grau documentado. Se um grau for exigido, os produtos sem grau documentado são excluídos.",
  ),
  voltageLabel: row("DC input voltage (V)", "直流输入电压 (V)", "DC 入力電圧 (V)", "Tensión de entrada CC (V)", "Tensão de entrada CC (V)"),
  voltageAria: row("DC input voltage", "直流输入电压", "DC 入力電圧", "Tensión de entrada CC", "Tensão de entrada CC"),
  anyVoltage: row("Any voltage", "任意电压", "すべての電圧", "Cualquier tensión", "Qualquer tensão"),
  temperatureLabel: row(
    "Operating temperature (°C)",
    "工作温度 (°C)",
    "動作温度 (°C)",
    "Temperatura de funcionamiento (°C)",
    "Temperatura de operação (°C)",
  ),
  temperatureAria: row(
    "Operating temperature",
    "工作温度",
    "動作温度",
    "Temperatura de funcionamiento",
    "Temperatura de operação",
  ),
  anyTemperature: row("Any temperature", "任意温度", "すべての温度", "Cualquier temperatura", "Qualquer temperatura"),
  advancedNote: row(
    "Temperature coverage is checked within one documented operating mode. Read the airflow, cooling and power-mode conditions in Details.",
    "温度是否覆盖，会在同一个已记载的工作模式内判断。风量、散热和功耗模式请查看详情。",
    "温度範囲は、記載された単一の動作モードの中で確認します。風量、冷却、電力モードの条件は詳細を読んでください。",
    "La cobertura de temperatura se comprueba dentro de un modo de funcionamiento documentado. Lee en Detalles las condiciones de flujo de aire, refrigeración y modo de potencia.",
    "A cobertura de temperatura é verificada dentro de um modo de operação documentado. Leia em Detalhes as condições de fluxo de ar, refrigeração e modo de potência.",
  ),
  seriesOne: row("{n} series ", "{n} 个系列 ", "{n} シリーズ ", "{n} serie ", "{n} série "),
  seriesOther: row("{n} series ", "{n} 个系列 ", "{n} シリーズ ", "{n} series ", "{n} séries "),
  configOne: row("{n} configuration", "{n} 个配置", "{n} 構成", "{n} configuración", "{n} configuração"),
  configOther: row("{n} configurations", "{n} 个配置", "{n} 構成", "{n} configuraciones", "{n} configurações"),
  clearFilters: row("Clear filters", "清除筛选", "フィルターをクリア", "Borrar filtros", "Limpar filtros"),
  selectedFilters: row("Selected filters", "已选筛选", "選択中のフィルター", "Filtros seleccionados", "Filtros selecionados"),
  removeFilter: row(
    "Remove {label} filter",
    "移除筛选条件 {label}",
    "{label} のフィルターを解除",
    "Quitar el filtro {label}",
    "Remover o filtro {label}",
  ),
  compareHint: row(
    "Select two configurations of the same product type to compare their specifications.",
    "选择同一产品类型的两个配置，即可比较规格。",
    "同じ製品タイプの構成を 2 つ選ぶと、仕様を比較できます。",
    "Selecciona dos configuraciones del mismo tipo de producto para comparar sus especificaciones.",
    "Selecione duas configurações do mesmo tipo de produto para comparar as especificações.",
  ),
  outsideFilters: row(
    "Outside current filters",
    "不在当前筛选范围内",
    "現在のフィルター条件外",
    "Fuera de los filtros actuales",
    "Fora dos filtros atuais",
  ),
  badgeSystem: row("System", "整机", "システム", "Sistema", "Sistema"),
  badgeCarrier: row("Carrier board", "载板", "キャリアボード", "Placa portadora", "Placa portadora"),
  configurationFor: row(
    "Configuration for {name}",
    "{name} 的配置",
    "{name} の構成",
    "Configuración de {name}",
    "Configuração de {name}",
  ),
  configuration: row("Configuration", "配置", "構成", "Configuración", "Configuração"),
  specModule: row("Module", "模组", "モジュール", "Módulo", "Módulo"),
  dcInput: row("DC input", "直流输入", "DC 入力", "Entrada CC", "Entrada CC"),
  supportedModules: row("Supported modules", "支持的模组", "対応モジュール", "Módulos compatibles", "Módulos compatíveis"),
  compatibleHost: row("Compatible host", "兼容主机", "対応ホスト", "Host compatible", "Host compatível"),
  addedInterfaces: row("Added interfaces", "新增接口", "追加インターフェース", "Interfaces añadidas", "Interfaces adicionadas"),
  keyInterfaces: row("Key interfaces", "主要接口", "主なインターフェース", "Interfaces principales", "Interfaces principais"),
  details: row("Details", "详情", "詳細", "Detalles", "Detalhes"),
  compare: row("Compare", "比较", "比較", "Comparar", "Comparar"),
  compareNamed: row("Compare {name}", "比较 {name}", "{name} を比較", "Comparar {name}", "Comparar {name}"),
  emptyTitle: row(
    "No configurations match these requirements.",
    "没有符合这些条件的配置。",
    "この条件に一致する構成はありません。",
    "Ninguna configuración coincide con estos requisitos.",
    "Nenhuma configuração corresponde a estes requisitos.",
  ),
  emptyBody: row(
    "Remove a selected condition above or clear the filters to browse this product type.",
    "去掉上方的某个条件，或清除筛选，即可浏览此产品类型。",
    "上の条件を外すか、フィルターをクリアすると、この製品タイプを閲覧できます。",
    "Quita una condición seleccionada arriba o borra los filtros para ver este tipo de producto.",
    "Remova uma condição selecionada acima ou limpe os filtros para ver este tipo de produto.",
  ),
  trayLabel: row("Comparison selection", "比较选择", "比較の選択", "Selección para comparar", "Seleção para comparação"),
  selectedCount: row("{n}/2 selected", "已选 {n}/2", "{n}/2 件を選択", "{n}/2 seleccionados", "{n}/2 selecionados"),
  removeNamed: row(
    "Remove {name} from comparison",
    "从比较中移除 {name}",
    "比較から {name} を外す",
    "Quitar {name} de la comparación",
    "Remover {name} da comparação",
  ),
  clearSelection: row("Clear selection", "清空选择", "選択をクリア", "Borrar selección", "Limpar seleção"),
  compareCount: row("Compare ({n})", "比较 ({n})", "比較 ({n})", "Comparar ({n})", "Comparar ({n})"),
  notSelected: row("Not selected", "未选择", "未選択", "No seleccionado", "Não selecionado"),
  done: row("Done", "完成", "完了", "Listo", "Concluir"),
  imageUnavailable: row(
    "Product image unavailable",
    "产品图片不可用",
    "製品画像を表示できません",
    "Imagen del producto no disponible",
    "Imagem do produto indisponível",
  ),
  closeDialog: row("Close dialog", "关闭对话框", "ダイアログを閉じる", "Cerrar diálogo", "Fechar diálogo"),
  getOneNow: row("Get One Now", "立即购买", "今すぐ購入", "Consíguelo ahora", "Compre agora"),
  addComparison: row("Add to comparison", "加入比较", "比較に追加", "Añadir a la comparación", "Adicionar à comparação"),
  removeComparison: row(
    "Remove from comparison",
    "从比较中移除",
    "比較から外す",
    "Quitar de la comparación",
    "Remover da comparação",
  ),
  feedbackSameType: row(
    "Compare products of the same type. Close Details and remove the current selection first.",
    "只能比较相同类型的产品。请先关闭详情，并移除当前选择。",
    "同じタイプの製品だけを比較できます。詳細を閉じ、現在の選択を外してください。",
    "Compara productos del mismo tipo. Cierra Detalles y quita primero la selección actual.",
    "Compare produtos do mesmo tipo. Feche Detalhes e remova primeiro a seleção atual.",
  ),
  feedbackFull: row(
    "Two configurations are already selected. Close Details and remove one from the comparison bar.",
    "已经选择了两个配置。请关闭详情，并在比较栏中移除一个。",
    "すでに 2 つの構成が選択されています。詳細を閉じ、比較バーから 1 つ外してください。",
    "Ya hay dos configuraciones seleccionadas. Cierra Detalles y quita una de la barra de comparación.",
    "Duas configurações já estão selecionadas. Feche Detalhes e remova uma da barra de comparação.",
  ),
  moduleSpecifications: row(
    "Module specifications",
    "模组规格",
    "モジュール仕様",
    "Especificaciones del módulo",
    "Especificações do módulo",
  ),
  referencesTitle: row(
    "Specifications & references",
    "规格与参考资料",
    "仕様と参考資料",
    "Especificaciones y referencias",
    "Especificações e referências",
  ),
  specCaption: row("{group} for {name}", "{name} 的{group}", "{name} の{group}", "{group} de {name}", "{group} de {name}"),
  compatibleBoards: row(
    "Compatible expansion boards",
    "兼容扩展板",
    "対応拡張ボード",
    "Placas de expansión compatibles",
    "Placas de expansão compatíveis",
  ),
  includedConfig: row(
    "Included in this configuration",
    "此配置已包含",
    "この構成に含まれます",
    "Incluida en esta configuración",
    "Incluída nesta configuração",
  ),
  optionalBoard: row(
    "Optional — purchased separately",
    "可选 — 需单独购买",
    "オプション — 別売",
    "Opcional — se compra por separado",
    "Opcional — comprada separadamente",
  ),
  addedInterfacesLine: row(
    "Added interfaces: {ports}",
    "新增接口：{ports}",
    "追加インターフェース: {ports}",
    "Interfaces añadidas: {ports}",
    "Interfaces adicionadas: {ports}",
  ),
  productPage: row("Product page", "产品页面", "製品ページ", "Página del producto", "Página do produto"),
  compareTitle: row(
    "Compare two configurations",
    "比较两个配置",
    "2 つの構成を比較",
    "Comparar dos configuraciones",
    "Comparar duas configurações",
  ),
  editSelection: row("Edit selection", "修改选择", "選択を編集", "Editar selección", "Editar seleção"),
  legend: row(
    "Green marks a documented advantage for that parameter, not a better overall product or measured performance. Different power modes are noted.",
    "绿色表示该参数在文档中更有优势，并不代表整机更好，也不是实测性能。功耗模式不同会另行注明。",
    "緑はその項目で文書上の優位があることを示し、製品全体の優劣や測定性能を意味しません。電力モードが異なる場合は注記します。",
    "El verde marca una ventaja documentada en ese parámetro, no un producto mejor en conjunto ni un rendimiento medido. Se indican los modos de potencia distintos.",
    "O verde marca uma vantagem documentada nesse parâmetro, não um produto melhor no conjunto nem um desempenho medido. Modos de potência diferentes são indicados.",
  ),
  differencesOnly: row(
    "Show differences only",
    "只显示差异",
    "差異のみ表示",
    "Mostrar solo diferencias",
    "Mostrar apenas diferenças",
  ),
  different: row("Different", "有差异", "差異あり", "Diferente", "Diferente"),
  filtersCleared: row("Filters cleared.", "已清除筛选。", "フィルターをクリアしました。", "Filtros borrados.", "Filtros limpos."),
  filtersClearedKept: row(
    "Filters cleared. Comparison selection kept.",
    "已清除筛选。比较选择仍保留。",
    "フィルターをクリアしました。比較の選択は保持されています。",
    "Filtros borrados. La selección de comparación se mantiene.",
    "Filtros limpos. A seleção de comparação foi mantida.",
  ),
  noticeSameType: row(
    "Compare products of the same type.",
    "请比较相同类型的产品。",
    "同じタイプの製品を比較してください。",
    "Compara productos del mismo tipo.",
    "Compare produtos do mesmo tipo.",
  ),
  noticeRemoved: row(
    "{name} removed from comparison.",
    "已从比较中移除 {name}。",
    "{name} を比較から外しました。",
    "{name} se quitó de la comparación.",
    "{name} foi removido da comparação.",
  ),
  noticeAdded: row(
    "{name} added to comparison.",
    "已将 {name} 加入比较。",
    "{name} を比較に追加しました。",
    "{name} se añadió a la comparación.",
    "{name} foi adicionado à comparação.",
  ),
  noticeFull: row(
    "Two configurations are already selected. Remove one before adding another.",
    "已经选择了两个配置。请先移除一个，再添加另一个。",
    "すでに 2 つの構成が選択されています。追加する前に 1 つ外してください。",
    "Ya hay dos configuraciones seleccionadas. Quita una antes de añadir otra.",
    "Duas configurações já estão selecionadas. Remova uma antes de adicionar outra.",
  ),
  tagApplication: row("Application: {name}", "应用场景：{name}", "用途: {name}", "Aplicación: {name}", "Aplicação: {name}"),
  tagMemory: row("Memory ≥ {n}GB", "内存 ≥ {n}GB", "メモリ ≥ {n}GB", "Memoria ≥ {n}GB", "Memória ≥ {n}GB"),
  tagCompute: row(
    "AI compute ≥ {n} TOPS",
    "AI 算力 ≥ {n} TOPS",
    "AI 演算性能 ≥ {n} TOPS",
    "Cómputo de IA ≥ {n} TOPS",
    "Computação de IA ≥ {n} TOPS",
  ),
  tagSearch: row("Search: {q}", "搜索：{q}", "検索: {q}", "Búsqueda: {q}", "Pesquisa: {q}"),
  tagVoltage: row("DC input: {n}V", "直流输入：{n}V", "DC 入力: {n}V", "Entrada CC: {n}V", "Entrada CC: {n}V"),
  tagTemperature: row(
    "Operating at {n}°C",
    "工作温度 {n}°C",
    "{n}°C で動作",
    "Funcionamiento a {n}°C",
    "Operação a {n}°C",
  ),
  firmwareLine: row(
    "JetPack {version} — {status}",
    "JetPack {version} — {status}",
    "JetPack {version} — {status}",
    "JetPack {version} — {status}",
    "JetPack {version} — {status}",
  ),
};

export const messages = Object.fromEntries(
  ["en", "zh", "ja", "es", "pt"].map((lang) => [
    lang,
    Object.fromEntries(Object.entries(TABLE).map(([key, value]) => [key, value[lang]])),
  ]),
);

export function jetsonT(lang) {
  return createT(messages, lang);
}

const phrase = (zh, ja, es, pt) => ({ zh, ja, es, pt });

export const phrases = {
  All: phrase("全部", "すべて", "Todos", "Todos"),
  Systems: phrase("整机", "システム", "Sistemas", "Sistemas"),
  "Carrier boards": phrase("载板", "キャリアボード", "Placas portadoras", "Placas portadoras"),
  "Learning & prototyping": phrase("学习与原型", "学習と試作", "Aprendizaje y prototipado", "Aprendizado e prototipagem"),
  "Develop and test Jetson projects": phrase(
    "开发和测试 Jetson 项目",
    "Jetson プロジェクトの開発と検証",
    "Desarrollar y probar proyectos Jetson",
    "Desenvolver e testar projetos Jetson",
  ),
  "Edge AI & video analytics": phrase("边缘 AI 与视频分析", "エッジ AI と映像分析", "IA en el borde y analítica de vídeo", "IA de borda e análise de vídeo"),
  "Process camera streams at the edge": phrase(
    "在边缘处理相机视频流",
    "エッジでカメラ映像を処理",
    "Procesar flujos de cámara en el borde",
    "Processar fluxos de câmera na borda",
  ),
  "Industrial control": phrase("工业控制", "産業制御", "Control industrial", "Controle industrial"),
  "Connect industrial equipment and control I/O": phrase(
    "连接工业设备并控制 I/O",
    "産業機器を接続して I/O を制御",
    "Conectar equipos industriales y controlar E/S",
    "Conectar equipamentos industriais e controlar E/S",
  ),
  "Robotics & AMR": phrase("机器人与 AMR", "ロボティクスと AMR", "Robótica y AMR", "Robótica e AMR"),
  "Integrate sensors and mobile robot control": phrase(
    "集成传感器与移动机器人控制",
    "センサーと移動ロボット制御を統合",
    "Integrar sensores y el control de robots móviles",
    "Integrar sensores e o controle de robôs móveis",
  ),
  "In-vehicle & outdoor": phrase("车载与户外", "車載と屋外", "Vehículo y exterior", "Veicular e externo"),
  "Deploy systems in vehicles and outdoor settings": phrase(
    "将系统部署到车辆和户外环境",
    "車両や屋外環境へシステムを展開",
    "Desplegar sistemas en vehículos y exteriores",
    "Implantar sistemas em veículos e ambientes externos",
  ),
  "Autonomous systems & advanced R&D": phrase(
    "自主系统与高级研发",
    "自律システムと高度な研究開発",
    "Sistemas autónomos e I+D avanzada",
    "Sistemas autônomos e P&D avançada",
  ),
  "Explore multi-sensor autonomous systems": phrase(
    "探索多传感器自主系统",
    "複数センサーの自律システムを検討",
    "Explorar sistemas autónomos multisensor",
    "Explorar sistemas autônomos com vários sensores",
  ),
  "Carrier boards only in this catalog": phrase(
    "本目录中仅有载板",
    "このカタログではキャリアボードのみ",
    "En este catálogo solo hay placas portadoras",
    "Neste catálogo há apenas placas portadoras",
  ),
  "1Gb Ethernet": phrase("1Gb 以太网", "1Gb イーサネット", "Ethernet 1Gb", "Ethernet 1Gb"),
  "10Gb Ethernet": phrase("10Gb 以太网", "10Gb イーサネット", "Ethernet 10Gb", "Ethernet 10Gb"),
  "PoE Ethernet": phrase("PoE 以太网", "PoE イーサネット", "Ethernet PoE", "Ethernet PoE"),
  "Wi-Fi module expansion": phrase("Wi-Fi 模组扩展", "Wi-Fi モジュール拡張", "Expansión de módulo Wi-Fi", "Expansão de módulo Wi-Fi"),
  "4G/LTE module expansion": phrase("4G/LTE 模组扩展", "4G/LTE モジュール拡張", "Expansión de módulo 4G/LTE", "Expansão de módulo 4G/LTE"),
  "5G module expansion": phrase("5G 模组扩展", "5G モジュール拡張", "Expansión de módulo 5G", "Expansão de módulo 5G"),
  "SD card": phrase("SD 卡", "SD カード", "Tarjeta SD", "Cartão SD"),
  "M.2 Key E slot": phrase("M.2 Key E 插槽", "M.2 Key E スロット", "Ranura M.2 Key E", "Slot M.2 Key E"),
  "M.2 Key B slot": phrase("M.2 Key B 插槽", "M.2 Key B スロット", "Ranura M.2 Key B", "Slot M.2 Key B"),
  "Module & memory": phrase("模组与内存", "モジュールとメモリ", "Módulo y memoria", "Módulo e memória"),
  Compatibility: phrase("兼容性", "互換性", "Compatibilidad", "Compatibilidade"),
  "Interfaces, network & storage": phrase(
    "接口、网络与存储",
    "インターフェース、ネットワーク、ストレージ",
    "Interfaces, red y almacenamiento",
    "Interfaces, rede e armazenamento",
  ),
  "Power & environment": phrase("供电与环境", "電源と環境", "Alimentación y entorno", "Alimentação e ambiente"),
  "Jetson module": phrase("Jetson 模组", "Jetson モジュール", "Módulo Jetson", "Módulo Jetson"),
  Memory: phrase("内存", "メモリ", "Memoria", "Memória"),
  "AI compute": phrase("AI 算力", "AI 演算性能", "Cómputo de IA", "Computação de IA"),
  "Module power modes": phrase("模组功耗模式", "モジュール電力モード", "Modos de potencia del módulo", "Modos de potência do módulo"),
  "Video capabilities": phrase("视频能力", "ビデオ機能", "Capacidades de vídeo", "Recursos de vídeo"),
  "Supported modules": phrase("支持的模组", "対応モジュール", "Módulos compatibles", "Módulos compatíveis"),
  "Module included": phrase("是否含模组", "モジュール同梱", "Módulo incluido", "Módulo incluído"),
  "Compatible host": phrase("兼容主机", "対応ホスト", "Host compatible", "Host compatível"),
  "USB-A host ports": phrase("USB-A 主机接口", "USB-A ホストポート", "Puertos host USB-A", "Portas host USB-A"),
  "USB-C / recovery & debug": phrase(
    "USB-C / 烧录与调试",
    "USB-C / リカバリとデバッグ",
    "USB-C / recuperación y depuración",
    "USB-C / recuperação e depuração",
  ),
  "Internal USB": phrase("内部 USB", "内部 USB", "USB interno", "USB interno"),
  "Storage supplied": phrase("随机存储", "付属ストレージ", "Almacenamiento incluido", "Armazenamento incluído"),
  "Mini-PCIe": phrase("Mini-PCIe", "Mini-PCIe", "Mini-PCIe", "Mini-PCIe"),
  "Installed wireless": phrase("已安装无线模块", "搭載済み無線", "Inalámbrico instalado", "Sem fio instalado"),
  "Other Ethernet": phrase("其他以太网", "その他のイーサネット", "Otro Ethernet", "Outra Ethernet"),
  "GMSL expansion": phrase("GMSL 扩展", "GMSL 拡張", "Expansión GMSL", "Expansão GMSL"),
  "Display output": phrase("显示输出", "ディスプレイ出力", "Salida de vídeo", "Saída de vídeo"),
  "DC input": phrase("直流输入", "DC 入力", "Entrada CC", "Entrada CC"),
  "Power connector": phrase("电源接口", "電源コネクタ", "Conector de alimentación", "Conector de alimentação"),
  Cooling: phrase("散热", "冷却", "Refrigeración", "Refrigeração"),
  "Operating temperature": phrase("工作温度", "動作温度", "Temperatura de funcionamiento", "Temperatura de operação"),
  "Protection rating": phrase("防护等级", "保護等級", "Grado de protección", "Grau de proteção"),
  Mounting: phrase("安装方式", "取り付け", "Montaje", "Montagem"),
  Dimensions: phrase("尺寸", "寸法", "Dimensiones", "Dimensões"),
  Weight: phrase("重量", "重量", "Peso", "Peso"),
  Warranty: phrase("保修", "保証", "Garantía", "Garantia"),
  Certifications: phrase("认证", "認証", "Certificaciones", "Certificações"),
  "Module lifecycle": phrase("模组供货周期", "モジュール供給期間", "Ciclo de vida del módulo", "Ciclo de vida do módulo"),
  "Configuration notes": phrase("配置说明", "構成に関する注記", "Notas de la configuración", "Notas da configuração"),
  "Supported JetPack versions": phrase(
    "支持的 JetPack 版本",
    "対応 JetPack バージョン",
    "Versiones de JetPack compatibles",
    "Versões compatíveis do JetPack",
  ),
  "Default JetPack": phrase("默认 JetPack", "既定の JetPack", "JetPack predeterminado", "JetPack padrão"),
  "Not documented": phrase("未记录", "記載なし", "No documentado", "Não documentado"),
  Available: phrase("可用", "利用可能", "Disponible", "Disponível"),
  "No; select a compatible Jetson module separately.": phrase(
    "否；请另行选择兼容的 Jetson 模组。",
    "いいえ。対応する Jetson モジュールを別途選択してください。",
    "No; selecciona por separado un módulo Jetson compatible.",
    "Não; selecione separadamente um módulo Jetson compatível.",
  ),
  "Not included; expansion board only.": phrase(
    "不包含；仅为扩展板。",
    "含まれません。拡張ボードのみです。",
    "No incluido; solo placa de expansión.",
    "Não incluído; apenas placa de expansão.",
  ),
  "Not applicable — carrier board supplied without a Jetson module": phrase(
    "不适用 — 载板不含 Jetson 模组",
    "該当なし — キャリアボードに Jetson モジュールは含まれません",
    "No aplicable — la placa portadora se suministra sin módulo Jetson",
    "Não aplicável — a placa portadora é fornecida sem módulo Jetson",
  ),
  "Connector available": phrase("接口可用", "コネクタあり", "Conector disponible", "Conector disponível"),
  "RTC connector available": phrase("RTC 接口可用", "RTC コネクタあり", "Conector RTC disponible", "Conector RTC disponível"),
  "Connector documented; host/device role not specified here": phrase(
    "文档记载有此接口；此处未说明主机/设备角色",
    "コネクタの記載はあります。ホスト/デバイスの役割はここには記載されていません",
    "Conector documentado; el rol de host/dispositivo no se especifica aquí",
    "Conector documentado; a função de host/dispositivo não é especificada aqui",
  ),
  "Isolated CAN; count depends on the installed module.": phrase(
    "隔离 CAN；数量取决于所安装的模组。",
    "絶縁 CAN。チャンネル数は搭載モジュールによって異なります。",
    "CAN aislado; la cantidad depende del módulo instalado.",
    "CAN isolado; a quantidade depende do módulo instalado.",
  ),
  "Port count depends on the installed module.": phrase(
    "接口数量取决于所安装的模组。",
    "ポート数は搭載モジュールによって異なります。",
    "El número de puertos depende del módulo instalado.",
    "A quantidade de portas depende do módulo instalado.",
  ),
  "2 CAN channels": phrase("2 路 CAN", "CAN 2 チャンネル", "2 canales CAN", "2 canais CAN"),
  "CAN: T4000 × 2 / T5000 × 4": phrase(
    "CAN：T4000 × 2 / T5000 × 4",
    "CAN: T4000 × 2 / T5000 × 4",
    "CAN: T4000 × 2 / T5000 × 4",
    "CAN: T4000 × 2 / T5000 × 4",
  ),
  "10Gb Ethernet: T4000 × 3 / T5000 × 4": phrase(
    "10Gb 以太网：T4000 × 3 / T5000 × 4",
    "10Gb イーサネット: T4000 × 3 / T5000 × 4",
    "Ethernet 10Gb: T4000 × 3 / T5000 × 4",
    "Ethernet 10Gb: T4000 × 3 / T5000 × 4",
  ),
  "More memory": phrase("内存更大", "メモリが多い", "Más memoria", "Mais memória"),
  "Higher published TOPS": phrase("公布 TOPS 更高", "公称 TOPS が高い", "TOPS publicados más altos", "TOPS publicados mais altos"),
  "More USB-A ports": phrase("USB-A 接口更多", "USB-A ポートが多い", "Más puertos USB-A", "Mais portas USB-A"),
  "More CAN channels": phrase("CAN 通道更多", "CAN チャンネルが多い", "Más canales CAN", "Mais canais CAN"),
  "More 1Gb Ethernet ports": phrase("1Gb 以太网口更多", "1Gb イーサネットポートが多い", "Más puertos Ethernet 1Gb", "Mais portas Ethernet 1Gb"),
  "More 10Gb Ethernet ports": phrase("10Gb 以太网口更多", "10Gb イーサネットポートが多い", "Más puertos Ethernet 10Gb", "Mais portas Ethernet 10Gb"),
  "More M.2 Key M slots": phrase("M.2 Key M 插槽更多", "M.2 Key M スロットが多い", "Más ranuras M.2 Key M", "Mais slots M.2 Key M"),
  "More M.2 Key E slots": phrase("M.2 Key E 插槽更多", "M.2 Key E スロットが多い", "Más ranuras M.2 Key E", "Mais slots M.2 Key E"),
  "More M.2 Key B slots": phrase("M.2 Key B 插槽更多", "M.2 Key B スロットが多い", "Más ranuras M.2 Key B", "Mais slots M.2 Key B"),
  "More SATA slots": phrase("SATA 插槽更多", "SATA スロットが多い", "Más ranuras SATA", "Mais slots SATA"),
  "Onboard Wi-Fi expansion": phrase("板载 Wi-Fi 扩展", "オンボード Wi-Fi 拡張", "Expansión Wi-Fi integrada", "Expansão Wi-Fi integrada"),
  "Onboard LTE expansion": phrase("板载 LTE 扩展", "オンボード LTE 拡張", "Expansión LTE integrada", "Expansão LTE integrada"),
  "Onboard 5G expansion": phrase("板载 5G 扩展", "オンボード 5G 拡張", "Expansión 5G integrada", "Expansão 5G integrada"),
  "Counts depend on T4000 / T5000": phrase(
    "数量取决于 T4000 / T5000",
    "数は T4000 / T5000 によって異なります",
    "Las cantidades dependen de T4000 / T5000",
    "As quantidades dependem de T4000 / T5000",
  ),
  "Different power modes": phrase("功耗模式不同", "電力モードが異なります", "Modos de potencia distintos", "Modos de potência diferentes"),
  "Different USB-A speeds": phrase("USB-A 速率不同", "USB-A の速度が異なります", "Velocidades USB-A distintas", "Velocidades USB-A diferentes"),
  "Module expansion only; not an installed radio": phrase(
    "仅为模组扩展；未安装无线模块",
    "モジュール拡張のみで、無線モジュールは搭載されていません",
    "Solo expansión de módulo; no hay una radio instalada",
    "Apenas expansão de módulo; não há um rádio instalado",
  ),
  Different: phrase("有差异", "差異あり", "Diferente", "Diferente"),
  "Hardware & setup guide": phrase("硬件与上手指南", "ハードウェアとセットアップ", "Guía de hardware y puesta en marcha", "Guia de hardware e introdução"),
  "JetPack flashing guide": phrase("JetPack 烧录指南", "JetPack 書き込みガイド", "Guía de flasheo de JetPack", "Guia de gravação do JetPack"),
  "Camera selection guide": phrase("相机选型指南", "カメラ選定ガイド", "Guía de selección de cámaras", "Guia de seleção de câmeras"),
  "Flash JetPack selector": phrase("JetPack 烧录选择器", "JetPack 書き込みセレクター", "Selector de flasheo de JetPack", "Seletor de gravação do JetPack"),
  "Original product specifications": phrase("原始产品规格", "元の製品仕様", "Especificaciones originales del producto", "Especificações originais do produto"),
  "Module specifications": phrase("模组规格", "モジュール仕様", "Especificaciones del módulo", "Especificações do módulo"),
  "Product datasheet": phrase("产品规格书", "製品データシート", "Ficha técnica del producto", "Folha de dados do produto"),
  "Hardware interface guide": phrase("硬件接口指南", "ハードウェアインターフェースガイド", "Guía de interfaces de hardware", "Guia de interfaces de hardware"),
  "Product specifications": phrase("产品规格", "製品仕様", "Especificaciones del producto", "Especificações do produto"),
  "NVIDIA module specifications": phrase("NVIDIA 模组规格", "NVIDIA モジュール仕様", "Especificaciones del módulo NVIDIA", "Especificações do módulo NVIDIA"),
  "Hardware specifications": phrase("硬件规格", "ハードウェア仕様", "Especificaciones de hardware", "Especificações de hardware"),
  "Product page": phrase("产品页面", "製品ページ", "Página del producto", "Página do produto"),
  Passive: phrase("被动散热", "パッシブ", "Pasiva", "Passiva"),
  Active: phrase("主动散热", "アクティブ", "Activa", "Ativa"),
  Desk: phrase("桌面", "卓上", "Escritorio", "Mesa"),
  "Desk, wall-mounting": phrase("桌面、壁挂", "卓上、壁面取り付け", "Escritorio, montaje en pared", "Mesa, montagem em parede"),
  "Desk, DIN rail, wall-mounting, VESA": phrase(
    "桌面、DIN 导轨、壁挂、VESA",
    "卓上、DIN レール、壁面取り付け、VESA",
    "Escritorio, riel DIN, montaje en pared, VESA",
    "Mesa, trilho DIN, montagem em parede, VESA",
  ),
  "Desk, DIN rail, VESA": phrase(
    "桌面、DIN 导轨、VESA",
    "卓上、DIN レール、VESA",
    "Escritorio, riel DIN, VESA",
    "Mesa, trilho DIN, VESA",
  ),
  "1 year": phrase("1 年", "1 年", "1 año", "1 ano"),
  "1 Year": phrase("1 年", "1 年", "1 año", "1 ano"),
  "2 Year": phrase("2 年", "2 年", "2 años", "2 anos"),
  "2 Years": phrase("2 年", "2 年", "2 años", "2 anos"),
  "January 2027": phrase("2027 年 1 月", "2027年1月", "enero de 2027", "janeiro de 2027"),
  "January 2028": phrase("2028 年 1 月", "2028年1月", "enero de 2028", "janeiro de 2028"),
  "January 2032": phrase("2032 年 1 月", "2032年1月", "enero de 2032", "janeiro de 2032"),
  "A203 V2; optional SSD and radio modules are not included. Consult its pin description for connector wiring.": phrase(
    "A203 V2；可选 SSD 和无线模块不包含在内。接线请查阅引脚说明。",
    "A203 V2。オプションの SSD と無線モジュールは含まれません。配線はピン説明を参照してください。",
    "A203 V2; el SSD y los módulos de radio opcionales no están incluidos. Consulta la descripción de pines para el cableado.",
    "A203 V2; o SSD e os módulos de rádio opcionais não estão incluídos. Consulte a descrição dos pinos para a fiação.",
  ),
  "Carrier board only. Ethernet and additional USB/CAN connections require the separate extension board. DisplayPort uses the USB-C host connector.": phrase(
    "仅为载板。以太网以及额外的 USB/CAN 需要单独的扩展板。DisplayPort 使用 USB-C 主机接口。",
    "キャリアボードのみです。イーサネットと追加の USB/CAN には別売の拡張ボードが必要です。DisplayPort は USB-C ホストコネクタを使用します。",
    "Solo placa portadora. Ethernet y las conexiones USB/CAN adicionales requieren la placa de expansión por separado. DisplayPort usa el conector host USB-C.",
    "Apenas placa portadora. Ethernet e as conexões USB/CAN adicionais exigem a placa de expansão separada. DisplayPort usa o conector host USB-C.",
  ),
  "GMSL requires a separate extension board. Counts include USB-C host/DisplayPort, not the debug connector.": phrase(
    "GMSL 需要单独的扩展板。计数包含 USB-C 主机/DisplayPort，不含调试接口。",
    "GMSL には別売の拡張ボードが必要です。数には USB-C ホスト/DisplayPort を含み、デバッグコネクタは含みません。",
    "GMSL requiere una placa de expansión aparte. Los recuentos incluyen el host USB-C/DisplayPort, no el conector de depuración.",
    "GMSL exige uma placa de expansão separada. As contagens incluem o host USB-C/DisplayPort, não o conector de depuração.",
  ),
  "GMSL requires the separate J501 GMSL extension board; Jetson module not included.": phrase(
    "GMSL 需要单独的 J501 GMSL 扩展板；不含 Jetson 模组。",
    "GMSL には別売の J501 GMSL 拡張ボードが必要です。Jetson モジュールは含まれません。",
    "GMSL requiere la placa de expansión GMSL J501 por separado; el módulo Jetson no está incluido.",
    "GMSL exige a placa de expansão GMSL J501 separada; o módulo Jetson não está incluído.",
  ),
  "Carrier-board and GMSL expansion bundle; Jetson module not included.": phrase(
    "载板与 GMSL 扩展套装；不含 Jetson 模组。",
    "キャリアボードと GMSL 拡張のセットです。Jetson モジュールは含まれません。",
    "Conjunto de placa portadora y expansión GMSL; el módulo Jetson no está incluido.",
    "Conjunto de placa portadora e expansão GMSL; o módulo Jetson não está incluído.",
  ),
  "Port counts shown for T4000; T5000 has four 10GbE ports and four CAN connections. GMSL requires the optional expansion board.": phrase(
    "所示接口数量对应 T4000；T5000 有四个 10GbE 口和四路 CAN。GMSL 需要可选扩展板。",
    "表示しているポート数は T4000 のものです。T5000 は 10GbE が 4 ポート、CAN が 4 系統です。GMSL にはオプションの拡張ボードが必要です。",
    "Los recuentos de puertos corresponden al T4000; el T5000 tiene cuatro puertos 10GbE y cuatro conexiones CAN. GMSL requiere la placa de expansión opcional.",
    "As contagens de portas mostradas são do T4000; o T5000 tem quatro portas 10GbE e quatro conexões CAN. GMSL exige a placa de expansão opcional.",
  ),
  "Installed Wi-Fi / cellular radio: not documented. Expansion modules are not included unless specified by the product configuration.": phrase(
    "已安装的 Wi-Fi / 蜂窝模块：未记录。除非产品配置另有说明，扩展模块不包含在内。",
    "搭載済みの Wi-Fi / セルラー無線: 記載なし。製品構成で指定されない限り、拡張モジュールは含まれません。",
    "Radio Wi-Fi / celular instalada: no documentada. Los módulos de expansión no están incluidos salvo que la configuración del producto lo indique.",
    "Rádio Wi-Fi / celular instalado: não documentado. Os módulos de expansão não estão incluídos, salvo indicação da configuração do produto.",
  ),
  "Pre-installed SMD Wi-Fi / Bluetooth. Cellular module not documented as included.": phrase(
    "预装 SMD Wi-Fi / Bluetooth。未记录包含蜂窝模块。",
    "SMD Wi-Fi / Bluetooth をプリインストール。セルラーモジュールの同梱は記載されていません。",
    "Wi-Fi / Bluetooth SMD preinstalado. No se documenta un módulo celular incluido.",
    "Wi-Fi / Bluetooth SMD pré-instalado. Não há registro de módulo celular incluído.",
  ),
  "Optional Wi-Fi/Bluetooth module; not included unless listed under Installed wireless": phrase(
    "可选 Wi-Fi/Bluetooth 模块；除非在“已安装无线模块”中列出，否则不包含",
    "オプションの Wi-Fi/Bluetooth モジュール。搭載済み無線に記載がない限り含まれません",
    "Módulo Wi-Fi/Bluetooth opcional; no incluido salvo que figure en Inalámbrico instalado",
    "Módulo Wi-Fi/Bluetooth opcional; não incluído, salvo se listado em Sem fio instalado",
  ),
  "Optional 4G/LTE module; compatible modem, SIM and antennas required": phrase(
    "可选 4G/LTE 模块；需要兼容的调制解调器、SIM 卡和天线",
    "オプションの 4G/LTE モジュール。対応モデム、SIM、アンテナが必要です",
    "Módulo 4G/LTE opcional; se requieren módem, SIM y antenas compatibles",
    "Módulo 4G/LTE opcional; são necessários modem, SIM e antenas compatíveis",
  ),
  "Optional 5G module; compatible modem, SIM and antennas required": phrase(
    "可选 5G 模块；需要兼容的调制解调器、SIM 卡和天线",
    "オプションの 5G モジュール。対応モデム、SIM、アンテナが必要です",
    "Módulo 5G opcional; se requieren módem, SIM y antenas compatibles",
    "Módulo 5G opcional; são necessários modem, SIM e antenas compatíveis",
  ),
  "Not documented; expansion capability does not mean a radio is supplied": phrase(
    "未记录；具备扩展能力并不表示随附无线模块",
    "記載なし。拡張できることは無線モジュールが付属することを意味しません",
    "No documentado; la capacidad de expansión no significa que se suministre una radio",
    "Não documentado; a capacidade de expansão não significa que um rádio seja fornecido",
  ),
  "Not documented; the LTE modem is an optional expansion": phrase(
    "未记录；LTE 调制解调器为可选扩展",
    "記載なし。LTE モデムはオプション拡張です",
    "No documentado; el módem LTE es una expansión opcional",
    "Não documentado; o modem LTE é uma expansão opcional",
  ),
  "Wi-Fi/Bluetooth combo module and antennas included (getting-started Features)": phrase(
    "包含 Wi-Fi/Bluetooth 组合模块和天线（上手指南的 Features）",
    "Wi-Fi/Bluetooth コンボモジュールとアンテナを同梱（入門ガイドの Features）",
    "Incluye módulo combinado Wi-Fi/Bluetooth y antenas (Features de la guía de inicio)",
    "Inclui módulo combinado Wi-Fi/Bluetooth e antenas (Features do guia de introdução)",
  ),
  "For JetPack 6.2 or 7.2 with Orin NX on the J401 carrier, do not enable MAXN SUPER: the flashing guide states that cooling is insufficient for that mode.": phrase(
    "在 J401 载板上以 JetPack 6.2 或 7.2 使用 Orin NX 时，不要启用 MAXN SUPER：烧录指南说明该模式的散热不足。",
    "J401 キャリアで Orin NX に JetPack 6.2 または 7.2 を使う場合、MAXN SUPER は有効にしないでください。書き込みガイドでは、そのモードに冷却が不足すると記載されています。",
    "Con Orin NX y JetPack 6.2 o 7.2 en la portadora J401, no actives MAXN SUPER: la guía de flasheo indica que la refrigeración es insuficiente para ese modo.",
    "Com Orin NX e JetPack 6.2 ou 7.2 na portadora J401, não ative MAXN SUPER: o guia de gravação informa que a refrigeração é insuficiente para esse modo.",
  ),
  "Supported via onboard mini-PCIe; LTE module, SIM and antennas sold separately": phrase(
    "可通过板载 mini-PCIe 支持；LTE 模块、SIM 卡和天线单独销售",
    "オンボード mini-PCIe で対応。LTE モジュール、SIM、アンテナは別売です",
    "Compatible mediante mini-PCIe integrado; el módulo LTE, la SIM y las antenas se venden por separado",
    "Compatível pelo mini-PCIe integrado; módulo LTE, SIM e antenas são vendidos separadamente",
  ),
  "No onboard LTE expansion connector documented; external USB networking is separate": phrase(
    "未记录板载 LTE 扩展接口；外置 USB 网络另计",
    "オンボードの LTE 拡張コネクタは記載されていません。外付け USB ネットワークは別です",
    "No hay un conector de expansión LTE integrado documentado; la red USB externa es independiente",
    "Não há conector de expansão LTE integrado documentado; a rede USB externa é separada",
  ),
  "1 × mini-PCIe for LTE module (optional)": phrase(
    "1 × mini-PCIe，用于可选 LTE 模块",
    "LTE モジュール用 mini-PCIe × 1（オプション）",
    "1 × mini-PCIe para módulo LTE (opcional)",
    "1 × mini-PCIe para módulo LTE (opcional)",
  ),
  "Not present in the documented onboard interface list": phrase(
    "已记载的板载接口清单中没有此项",
    "記載されたオンボードインターフェース一覧にはありません",
    "No aparece en la lista documentada de interfaces integradas",
    "Não consta na lista documentada de interfaces integradas",
  ),
  "Wi-Fi/Bluetooth module included in M.2 Key E (getting-started specification)": phrase(
    "M.2 Key E 中包含 Wi-Fi/Bluetooth 模块（上手指南规格）",
    "M.2 Key E に Wi-Fi/Bluetooth モジュールを同梱（入門ガイドの仕様）",
    "Módulo Wi-Fi/Bluetooth incluido en M.2 Key E (especificación de la guía de inicio)",
    "Módulo Wi-Fi/Bluetooth incluído no M.2 Key E (especificação do guia de introdução)",
  ),
  "M.2 Key E for an optional Wi-Fi/Bluetooth module": phrase(
    "M.2 Key E，用于可选 Wi-Fi/Bluetooth 模块",
    "オプションの Wi-Fi/Bluetooth モジュール用 M.2 Key E",
    "M.2 Key E para un módulo Wi-Fi/Bluetooth opcional",
    "M.2 Key E para um módulo Wi-Fi/Bluetooth opcional",
  ),
  "Jetson AGX Thor T4000 / T5000; module purchased separately": phrase(
    "Jetson AGX Thor T4000 / T5000；模组需单独购买",
    "Jetson AGX Thor T4000 / T5000。モジュールは別売です",
    "Jetson AGX Thor T4000 / T5000; el módulo se compra por separado",
    "Jetson AGX Thor T4000 / T5000; o módulo é comprado separadamente",
  ),
  "8 camera channels via an optional GMSL extension; not included on the bare carrier": phrase(
    "可通过可选 GMSL 扩展提供 8 路相机；裸载板不包含",
    "オプションの GMSL 拡張でカメラ 8 チャンネル。キャリアボード単体には含まれません",
    "8 canales de cámara mediante una extensión GMSL opcional; no incluida en la portadora sola",
    "8 canais de câmera por uma expansão GMSL opcional; não incluída na portadora avulsa",
  ),
  "1 × 2.5Gb Ethernet": phrase("1 × 2.5Gb 以太网", "2.5Gb イーサネット × 1", "1 × Ethernet 2.5Gb", "1 × Ethernet 2.5Gb"),
  "1 × mini-PCIe for optional cellular/LoRaWAN module": phrase(
    "1 × mini-PCIe，用于可选蜂窝/LoRaWAN 模块",
    "オプションのセルラー/LoRaWAN モジュール用 mini-PCIe × 1",
    "1 × mini-PCIe para módulo celular/LoRaWAN opcional",
    "1 × mini-PCIe para módulo celular/LoRaWAN opcional",
  ),
  "Datasheet software version (not a batch-specific shipping guarantee)": phrase(
    "规格书中的软件版本（并非按批次的出厂保证）",
    "データシート上のソフトウェアバージョン（ロットごとの出荷保証ではありません）",
    "Versión de software de la ficha técnica (no es una garantía de envío por lote)",
    "Versão de software da folha de dados (não é uma garantia de envio por lote)",
  ),
  "Current Wiki explicitly states pre-installed": phrase(
    "当前 Wiki 明确写明为预装",
    "現行 Wiki にプリインストールと明記",
    "La Wiki actual indica explícitamente que viene preinstalado",
    "A Wiki atual informa explicitamente que vem pré-instalado",
  ),
  "Explicit preinstallation statement": phrase(
    "有明确的预装说明",
    "プリインストールである旨の明記",
    "Indicación explícita de preinstalación",
    "Indicação explícita de pré-instalação",
  ),
};

export function tx(lang, text) {
  return translatePhrase(phrases, lang, text);
}

export function localizeOptions(options, lang) {
  if (!lang || lang === "en") return options;
  return options.map((option) => ({
    ...option,
    label: tx(lang, option.label),
    description: option.description ? tx(lang, option.description) : option.description,
  }));
}

export function presentFilterTags(filters, lang) {
  const tags = filterTags(filters);
  if (!lang || lang === "en") return tags;
  const t = jetsonT(lang);
  return tags.map((tag) => ({ ...tag, label: tagLabel(tag.label, t, lang) }));
}

function tagLabel(label, t, lang) {
  if (label.startsWith("Application: ")) {
    return t("tagApplication", { name: tx(lang, label.slice("Application: ".length)) });
  }
  if (label.startsWith("Memory ≥ ") && label.endsWith("GB")) {
    return t("tagMemory", { n: label.slice("Memory ≥ ".length, -2) });
  }
  if (label.startsWith("AI compute ≥ ") && label.endsWith(" TOPS")) {
    return t("tagCompute", { n: label.slice("AI compute ≥ ".length, -" TOPS".length) });
  }
  if (label.startsWith("USB-A ≥ ")) return t("usbAAtLeast", { n: label.slice("USB-A ≥ ".length) });
  if (label.startsWith("Search: ")) return t("tagSearch", { q: label.slice("Search: ".length) });
  if (label.startsWith("DC input: ") && label.endsWith("V")) {
    return t("tagVoltage", { n: label.slice("DC input: ".length, -1) });
  }
  if (label.startsWith("Operating at ") && label.endsWith("°C")) {
    return t("tagTemperature", { n: label.slice("Operating at ".length, -2) });
  }
  if (label.startsWith("JetPack ")) return label;
  return tx(lang, label);
}

export function presentNotice(message, lang) {
  if (!message || !lang || lang === "en") return message;
  const t = jetsonT(lang);
  if (message === "Compare products of the same type.") return t("noticeSameType");
  if (message === "Two configurations are already selected. Remove one before adding another.")
    return t("noticeFull");
  const removed = /^(.*) removed from comparison\.$/.exec(message);
  if (removed) return t("noticeRemoved", { name: removed[1] });
  const added = /^(.*) added to comparison\.$/.exec(message);
  if (added) return t("noticeAdded", { name: added[1] });
  return message;
}

export function presentPortSummary(product, lang) {
  if (!lang || lang === "en") return portSummary(product);
  const text = interfaces
    .filter((item) => hasInterface(product, item.value))
    .map((item) => {
      if (product.familyId === "board-j601" && item.value === "can")
        return tx(lang, "CAN: T4000 × 2 / T5000 × 4");
      if (product.familyId === "board-j601" && item.value === "ethernet10")
        return tx(lang, "10Gb Ethernet: T4000 × 3 / T5000 × 4");
      if (item.value === "can" && product.canSpec?.startsWith("2 CAN channels"))
        return tx(lang, "2 CAN channels");
      const count = product.ports[item.field];
      return `${count === true ? "" : `${count} × `}${tx(lang, item.label)}`;
    })
    .join(" · ");
  return text || tx(lang, "Not documented");
}
