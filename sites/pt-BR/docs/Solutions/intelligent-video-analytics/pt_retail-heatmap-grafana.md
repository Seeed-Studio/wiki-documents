---
description: Construindo um mapa de calor local de fluxo de pessoas para lojas e espaços de exposição — quais dispositivos você precisa, como implantá-lo, quais interfaces ele expõe e taxas de quadros medidas em três dispositivos
title: 'Mapa de Calor de Fluxo de Pessoas em Varejo: Construção, Implantação e Resultados Medidos'
sidebar_label: 'Mapa de Calor de Fluxo de Pessoas em Varejo'
keywords:
  - mapa de calor de fluxo de pessoas
  - análise de fluxo de pessoas
  - tempo de permanência
  - contagem de entradas e saídas
  - IA no dispositivo
  - contagem de pessoas
  - mapa de calor
  - IA de borda
  - reCamera
  - reComputer
  - Hailo-8
  - RK3588
  - MQTT
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png
slug: /solutions/retail-heatmap-grafana
sidebar_position: 3
last_update:
  date: 09/17/2026
  author: seeed-solutions-hub
createdAt: '2026-09-17'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/pt-br/solutions/retail-heatmap-grafana/
generated_from: sensecraft-solutions@recamera_heatmap_grafana
---

:::caution[Aviso de uso]
O mapa de calor registra apenas **onde as pessoas estão**. Ele não identifica ninguém e não faz correspondência de rostos. A precisão da detecção não foi avaliada; consulte [Desempenho e dados medidos](#apêndice-dados-medidos).
:::

## O que esta solução faz

Uma câmera olha para o chão, localiza cada pessoa no quadro e continua rastreando-as, depois grava onde as pessoas param, quanto tempo ficam e quantas entram e saem em um banco de dados local, mostrado em um dashboard Grafana e em um mapa de calor. Feito para lojas de varejo, pilotos de redes de lojas, pavilhões de exposição e qualquer espaço interno onde decisões de layout dependam de por onde as pessoas caminham.

Locais que já têm câmeras IP as mantêm e adicionam um host de IA que faz a detecção. Locais sem câmeras usam uma reCamera, onde a detecção roda dentro da câmera. O vídeo é processado no local e o backend armazena apenas números. Em um stream RTSP ao vivo, reComputer série R2000 (Hailo-8) mediu 14,3 FPS (fonte de 15 FPS), e reComputer séries RK3588 / RK3576 mediram 13,2 / 13,3 FPS.

- Implementação open source (rota reCamera): [github.com/xr686/reCamera-with-Heatmap](https://github.com/xr686/reCamera-with-Heatmap)
- Implementação open source (rota câmera IP + Jetson): [github.com/bleaaach/yolo11-grafana-influxdb](https://github.com/bleaaach/yolo11-grafana-influxdb)
- Escolhendo uma configuração e implantando: [página de reference design](https://www.seeed.cc/solutions/reference-designs/recamera_heatmap_grafana)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Processado no local, backend armazena números</h3>
                <p>A detecção roda na câmera ou no host de IA. O que chega ao backend são posições em porcentagens, contagens e tempos de permanência. A visualização ao vivo passa pelo gateway de vídeo local e permanece na sua rede.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Use as câmeras que você já tem</h3>
                <p>Qualquer câmera IP com stream RTSP funciona, seja qual for a marca; nada na parede precisa ser substituído. Sem câmeras, uma reCamera com o app de analytics de varejo instalado começa a produzir dados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Cinco caminhos de hardware, um dashboard</h3>
                <p>reCamera 2002, reCamera Pro, Rockchip, Hailo-8 e Jetson publicam todos o mesmo formato de mensagem. Várias lojas podem misturar hardware e ainda assim reportar para um backend.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Sem necessidade de internet após a implantação</h3>
                <p>Broker, banco de dados e dashboard rodam todos no backend local. A internet é usada apenas durante a implantação para baixar imagens e modelos.</p>
            </div>
        </li>
    </ul>
</div>

### O que os dispositivos realmente geram

Resultados de cada detector chegam a um dashboard Grafana: o feed de câmera ao vivo à esquerda, e painéis agregando ocupação, estados de permanência e contagens de entrada/saída ao longo do tempo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png" alt="Dashboard Grafana: feed de câmera ao vivo mais painéis de fluxo de pessoas, permanência e entrada/saída agregados por hora, dia e semana"/>
</div>

Os mesmos dados de posição também desenham um mapa de calor. Áreas mais escuras são onde as pessoas ficaram mais tempo ou passaram com mais frequência. Por padrão ele sobrepõe a visão da câmera; após calibração pode sobrepor a planta do seu estabelecimento.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/heatmap-demo-c6a45c6f.png" alt="Mapa de calor espacial: posições rastreadas acumuladas em zonas de calor, sobrepostas à visão da câmera"/>
</div>

## De que hardware você precisa

Três coisas: uma câmera que veja o chão, algo que detecte pessoas e um backend que armazene os dados e os desenhe. O backend é compartilhado por todas as rotas.

**① Câmera** — se você já tem câmeras IP com stream RTSP, mantenha-as; qualquer marca funciona e nada na parede muda. Se você não tiver nenhuma, reCamera 2002 / reCamera Pro colocam a câmera e o processamento em uma unidade, executando detecção, rastreamento, estados de permanência e contagem de entrada/saída dentro da câmera.

**② Host de detecção** — necessário apenas nas rotas com câmera IP. Cada host executa a mesma lógica de rastreamento e permanência; a diferença é o acelerador.

**③ Backend do dashboard** — executa o broker MQTT, InfluxDB, Grafana e o gateway de vídeo. Pode ser um computador sempre ligado ou um reComputer R1100; nas rotas com câmera IP ele pode compartilhar o gabinete com o detector.

| | Dispositivo | O que faz | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-64GB-p-6252.html)<br/>câmera e processamento em um só, 1080P | Detecção + rastreamento + contagem | Perto da área contada, pequena cobertura, maneira mais rápida de colocar um stream em funcionamento |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>câmera e processamento em um só, 4K | Detecção + rastreamento + contagem | Mais distante, grande cobertura, onde pessoas distantes ainda precisam de pixels suficientes para serem enquadradas |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer série RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>o mesmo preset também suporta a série reComputer RK3576 | Host de detecção | Você já utiliza placas Rockchip; a decodificação de vídeo roda em hardware |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrial-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer série R2000 (R2035-12, Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | Host de detecção | Um box industrial sem ventoinha para um rack ou armário técnico |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>e série reComputer J50 | Host de detecção | Várias câmeras em um único host |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-113991334--recomputer-r1125-10-45font.jpg" alt="reComputer R1100" width="110" /> | [reComputer série R1100 (R1124-10)](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html) | Backend do dashboard | Nenhum computador sempre ligado no local para executar o dashboard |

Outros pré-requisitos: Docker na máquina backend, pelo menos 2 GB de disco livre, portas 1883, 3000, 8080 e 8086 livres, e câmeras e backend no mesmo segmento de rede para que a descoberta de câmeras ONVIF funcione.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/architecture-en-0432d229.png" alt="Composição de dispositivos do mapa de calor de fluxo de pessoas: câmeras IP enviam RTSP para um host de IA reComputer, o host e reCamera 2002 / Pro publicam MQTT para um backend reComputer R1100, e o dashboard Grafana abre via HTTP"/>
</div>

Layout dos dispositivos: câmeras IP entregam vídeo RTSP ao host de IA, enquanto uma reCamera executa a detecção dentro da câmera; detectores geram apenas porcentagens de posição e contagens, sem imagens; cada detector reporta para um backend (broker MQTT, InfluxDB, Grafana, gateway de vídeo go2rtc), então um dashboard cobre todas as câmeras. A visualização ao vivo é o navegador puxando da câmera através do gateway de vídeo local, não através do banco de dados backend.

### Limites de Seleção Negativa

- **Altura de montagem e campo de visão**: reCamera 2002 é adequada para tetos de 3–4 m; para alturas acima de 5 m ou grandes átrios, não escolha a 2002, escolha reCamera Pro com resolução 4K.
- **Rastreamento de identidade**: Esta solução gera apenas mapas de calor de densidade anônimos, não reconhecimento facial ou reidentificação de pessoas.

## Instalação no local

Duas partes: montar a câmera corretamente e depois instalar o software.

### 1. Montando a câmera

:::tip[Requisitos de posicionamento]
Instale a câmera em um ponto alto, olhando para baixo para a área a ser contada, a 3–5 m do alvo. As pessoas devem ocupar pelo menos cerca de 30 × 30 pixels no quadro, caso contrário não poderão ser enquadradas. Vistas ao nível dos olhos, ângulos com forte oclusão mútua e tomadas distantes em que as pessoas ficam muito pequenas causam detecções perdidas.
:::

### 2. Instalando o software — três a quatro etapas

As instruções por dispositivo estão na página do design de referência, onde você responde a algumas perguntas sobre o local e faz o download do pacote de aplicativo correspondente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/recamera_heatmap_grafana" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configure e baixe o pacote do app 🖱️</font></span></strong>
    </a>
</div><br />

1. **Colocar o backend em funcionamento** — inicie o broker, o InfluxDB, o Grafana e o gateway de vídeo na máquina sempre ligada. Esta etapa descobre câmeras ONVIF no mesmo segmento; para câmeras em outro segmento, insira as URLs RTSP no formulário de implantação.
2. **Fazer o detector publicar** — nas rotas com reCamera, instale o app de análise de varejo na câmera; nas rotas com câmera IP, faça o deploy do detector no host de IA. Ambos pedem três coisas: o endereço do broker MQTT (a máquina da etapa 1), um **nome de instalação** e um **ID de câmera**. Use um nome de instalação por loja e um ID por câmera; é assim que o dashboard diferencia os dispositivos.
3. **Calibrar a planta baixa (opcional)** — abra o heatmap na porta 8080, envie uma captura da câmera e a planta da loja e clique em quatro pontos correspondentes em cada uma. Escolha pontos de referência bem espaçados, como pilares, portas e cantos de parede. A calibração é salva no servidor, e várias câmeras podem compartilhar uma planta. Pule esta etapa se a visão da câmera for tudo de que você precisa.
4. **Abrir o dashboard** — Grafana na porta 3000, o heatmap ao vivo em 8080, o gateway de vídeo em 1984.

A documentação upstream indica **15 minutos** de ponta a ponta. A rota Jetson é a exceção: a primeira implantação gera um mecanismo TensorRT no dispositivo, o que leva de 2 a 5 minutos e é reutilizado depois.

## Quais interfaces ele expõe

Todo detector publica o mesmo formato de mensagem para o broker de backend. Três formas de entrada, dependendo do que você já executa:

- **O dashboard integrado é suficiente** — nada para integrar. Os painéis do Grafana já cobrem tendências de fluxo de pessoas por hora, dia e semana, além de permanência e contagens de entrada/saída, e os dados dos painéis podem ser exportados diretamente.
- **Um sistema de BI ou analytics existente** — assine o tópico de resultados MQTT para dados em tempo real ou faça consultas ao InfluxDB no backend para histórico.
- **Seu próprio sistema ou API** — assine como acima; o payload carrega contagens por zona mais a posição e o tempo de permanência de cada pessoa rastreada, o suficiente para você desenhar seus próprios painéis. Quadros ao vivo vêm do gateway de vídeo local na porta 1984.

### Referência completa de tópicos e payload

| Tópico / porta | Conteúdo | Retido |
|---|---|---|
| `<site>/retail-vision/results/<camera-id>` | Um JSON em lote por segundo: contagens por zona (ocupação, navegando, engajado, precisa de assistência, entradas, saídas, permanência média) mais o `track_id`, posição e tempo de permanência de cada pessoa rastreada | Não |
| `<site>/retail-vision/status` | `online` / `offline` | Sim |
| Broker MQTT 1883 | Resultados de cada detector | — |
| Grafana 3000 | Tendências de fluxo de pessoas por hora, dia e semana; contagens de permanência e de entrada/saída | — |
| Heatmap ao vivo 8080 | Sobreposição de calor na visão da câmera ou na sua planta; o ícone de engrenagem abre a calibração | — |
| Gateway de vídeo 1984 | Descoberta de câmeras e pré-visualização ao vivo | — |

`<site>` e `<camera-id>` são definidos no formulário de implantação e aceitam apenas letras, dígitos, hifens e sublinhados.

**Posições são publicadas como porcentagens do quadro.** Cada detector converte o centro da caixa rastreada em uma porcentagem antes de publicar, de modo que uma calibração de planta única funcione em qualquer resolução de câmera; substituir por uma câmera de resolução mais alta não exige recalibração.

**As mensagens são agrupadas uma vez por segundo.** Na reCamera isso é `--mqtt-interval-ms 1000`; sem isso o app publica por quadro (cerca de 10 mensagens por segundo por câmera). Nas rotas com host de IA é `publish_hz: 1.0` na configuração do detector. Com várias câmeras em um mesmo local, se o broker acompanha ou não depende desse parâmetro.

**A reCamera Pro não gera tempo médio de permanência**, portanto o painel Avg Dwell permanece vazio nessa rota. Outras métricas não são afetadas.

## Desempenho e dados medidos {#appendix-measured-data}

Todas as quatro rotas com host de IA executam a mesma lógica de rastreamento e permanência; o modelo de detecção e o runtime variam por acelerador.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/xr686/reCamera-with-Heatmap" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reCamera-with-Heatmap</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

O que segue são dados medidos de dispositivo para throughput e taxa de mensagens, a partir de fontes ao vivo de fluxo único nas rotas RK e Hailo.

### Quais dispositivos foram medidos

| Dispositivo | Acelerador | Modelo entregue | Status de verificação |
|---|---|---|---|
| reComputer RK3588 series | NPU RK3588 | YOLO11n rawhead FP16 | ✅ Fluxo ao vivo no hardware |
| reComputer RK3576 series | NPU RK3576 | YOLO11n rawhead FP16 | ✅ Fluxo ao vivo no hardware |
| reComputer R2000 series (R2135-12, Hailo-8) | Hailo-8 | YOLOv8n INT8 | ✅ Fluxo ao vivo no hardware |
| reCamera 2002 | NPU SG2002 | YOLO11n INT8 | Implantação verificada |

### Detalhes de desempenho {#performance-detail}

#### Taxa de quadros ponta a ponta em um fluxo ao vivo

A entrada é filmagem RTSP real. A medição cobre **todo o caminho desde o quadro da câmera até os resultados chegarem ao backend**: decodificação + detecção + rastreamento + lógica de permanência + publicação MQTT, um fluxo por host.

| Host de detecção | Modelo | Taxa de rastreamento | Taxa de mensagens MQTT | Fonte |
|---|---|---:|---:|---|
| reComputer R2000 series (R2135-12, Hailo-8) | YOLOv8n INT8 | **14,3 FPS** | 0,94 msg/s | Medido (440 quadros / 30,7 s) |
| reComputer RK3588 series | YOLO11n FP16 | **13,2 FPS** | 1,00 msg/s | Medido |
| reComputer RK3576 series | YOLO11n FP16 | **13,3 FPS** | 1,00 msg/s | Medido |

- **As duas placas RK**: a decodificação por hardware MPP estava ativa e a taxa de mensagens foi de 1,00 msg/s.
- **Os 14,3 FPS do Hailo são limitados pela taxa de quadros da fonte.** Sem limitação, o mesmo pipeline atingiu **234 FPS**, cerca de 15× a fonte de 15 FPS.
- **A diferença entre 0,94 e 1,00 msg/s vem de como foi feita a média**: ambas visam uma mensagem por segundo, e 0,94 é a média em uma janela de 30,7 s.
- **Reprodução**: benchmarks ponta a ponta e de inferência isolada estão localizados no repositório `benchmarks/run_heatmap_bench.sh`; execute `./run_heatmap_bench.sh --profile rk3588`.

#### Velocidade de inferência isolada

| Host de detecção | Modelo | Por inferência | Fonte |
|---|---|---:|---|
| reComputer J40 / J50 series | YOLO11n FP16 (TensorRT) | 9,7 ms | Número de inferência isolada fornecido upstream |
| reCamera 2002 | YOLO11n INT8 | cerca de 10 FPS | Taxa na câmera indicada nas notas do app upstream |

Essas duas linhas não se comparam diretamente com a tabela ponta a ponta acima: 9,7 ms excluem decodificação, rastreamento e publicação, e cerca de 10 FPS é a taxa de processamento na câmera, não a taxa em que os resultados chegam ao backend.

#### Multi-stream

Cada número acima veio de um host observando uma câmera. “Várias câmeras em um host” é a divisão de trabalho entre presets (a rota Jetson assume esse papel). Um backend pode aceitar qualquer número de detectores no nível de protocolo, separados por nome de instalação e ID de câmera; o limite está no lado do host de IA.

### Runtimes e parâmetros principais

| Host de detecção | Modelo de detecção | Precisão | Runtime | Como o modelo é entregue |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n (`yolo11n_detection_cv181x_int8.cvimodel`) | INT8 | NPU da câmera SG2002 | Enviado com `retail-vision_1.5.1_riscv64.deb`, verificado por sha256 |
| reCamera Pro | Empacotado com o app `retail-vision` do App Center | Definida pelo app | NPU da câmera | **Não incluído no pacote**; instale-o primeiro a partir do App Center do dispositivo |
| reComputer RK3576 / RK3588 series | `yolo11n_pose_rawhead_fp16.<board>.rknn` | FP16 | RKNN | Entregue por placa e verificado por sha256; o modelo da placa errada não será carregado |
| reComputer R2000 series (R2135-12, Hailo-8) | YOLOv8n (`yolov8n.hef`) | INT8 | HailoRT 4.21 + GStreamer | Obtido do diretório hailo8 do Hailo Model Zoo v2.15.0, fixado por sha256 |
| reComputer J40 / J50 series | YOLO11n (`yolo11n.engine`) | FP16 | TensorRT | O engine é **gerado no dispositivo** (`ultralytics` export, `half=True`, `imgsz=640`): 2–5 minutos na primeira vez, reutilizado depois |

- **Hailo está travado na HailoRT 4.21.** A implantação verifica as bibliotecas na placa e interrompe, imprimindo a versão instalada, se não corresponderem. Um Hailo-8 executa um aplicativo por vez; se outro app Hailo estiver usando o acelerador, o detector não será iniciado.
- **As placas RK precisam do driver NPU presente** (`/usr/lib/librknnrt.so`).
- **Na reCamera, o app de analytics assume o controle exclusivo da câmera**: ao instalá-lo, o autostart do Node-RED é desativado, e os dois não podem ser executados juntos.

Parâmetros que alteram o comportamento da implantação (valores enviados nas rotas RK e Jetson):

- `dwell_min_duration` (1,5 s) — uma pessoa só passa a contar como em permanência depois de se mover mais devagar que `dwell_speed_threshold` (10,0) por esse tempo, de modo que virar de costas em frente a uma prateleira não conta.
- `dwell_assistance_threshold` (20,0 s) — o tempo de permanência além disso entra no estado de necessidade de assistência.
- `avg_person_height_m` (1,7) — converte o limite de velocidade de pixels para distância real. Quando a altura média das pessoas na câmera difere substancialmente de 1,7 m, a detecção de permanência fica mais frouxa ou mais rígida em todo o conjunto.

### Degradação conhecida

- **Posicionamento.** A câmera deve ser montada em altura, de 3 a 5 m do alvo, com as pessoas ocupando pelo menos cerca de 30 × 30 pixels no quadro. Vistas ao nível dos olhos, tomadas distantes e forte oclusão impedem que as pessoas sejam enquadradas, e uma pessoa que não é detectada deixa o mapa de calor em branco sem que nenhum erro seja gerado.
- **A calibração da planta baixa é feita com quatro pontos clicados manualmente.** Pontos de referência muito próximos entre si ou colineares amplificam o erro de posição. Mover ou redirecionar a câmera invalida a calibração e ela precisa ser refeita — **uma calibração incorreta não gera erro**, ela apenas desenha o calor em outro lugar.
- **O Avg Dwell da reCamera Pro fica sempre vazio**, porque o app não gera esse campo.
- **No RK, a decodificação por hardware recai para decodificação por software quando não está ativa.** Uma taxa de quadros claramente baixa junto com uma CPU saturada é o sintoma; a rota Jetson não faz fallback (`fallback: none`).

## Fontes e licenças

- **Modelos de detecção** — a rota Hailo usa `yolov8n.hef` do [Hailo Model Zoo](https://github.com/hailo-ai/hailo_model_zoo) diretório hailo8 da v2.15.0, fixado por digest em vez de re-hospedado. A rota RK reutiliza `yolo11n_pose_rawhead_fp16.<board>.rknn` já publicado por fall_detection. A rota Jetson exporta `yolo11n.engine` no dispositivo com `ultralytics`.
- **Licenciamento de modelos** — os detectores usam modelos da família YOLO (YOLO11n, YOLOv8n). Os modelos Ultralytics YOLO são AGPL-3.0, a menos que licenciados comercialmente, portanto confirme as licenças dos modelos, ou substitua por um modelo com licença compatível, antes de enviar um produto.
- **Componentes de backend** — o broker MQTT, o InfluxDB, o Grafana e o gateway de vídeo go2rtc são implantados a partir de suas imagens oficiais. As credenciais padrão do Grafana são `admin` / `admin`; altere-as logo após a colocação em operação.
- **Imagens** — o dashboard do Grafana e as capturas de tela do mapa de calor vêm da biblioteca de ativos da solução upstream; o diagrama de arquitetura é desenhado internamente. Nenhuma pessoa identificável aparece nas imagens de demonstração.
