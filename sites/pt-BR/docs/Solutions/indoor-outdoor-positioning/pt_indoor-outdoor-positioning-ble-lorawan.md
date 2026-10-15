---
description: Rastreando pessoas e ativos em ambientes internos e externos em um único mapa com beacons BLE, GNSS e LoRaWAN — quais dispositivos você precisa, como o local é configurado, como integrar o feed WebSocket e dados medidos no lado do servidor
title: 'Posicionamento Indoor e Outdoor com BLE + LoRaWAN: Construção, Implantação e Resultados Medidos'
keywords:
  - sistema de posicionamento indoor
  - posicionamento indoor e outdoor
  - posicionamento com beacon BLE
  - rastreamento de ativos com LoRaWAN
  - alarme de geofence
  - georreferenciamento de planta baixa
  - mapa base offline
  - PMTiles
  - SenseCAP T1000
  - SenseCAP BC03
  - gateway SenseCAP M2
  - ChirpStack
  - WebSocket
image: https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png
slug: /solutions/indoor-outdoor-positioning-ble-lorawan
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/indoor-outdoor-positioning-ble-lorawan/
generated_from: sensecraft-solutions@indoor_positioning_ble_lorawan
---

:::caution[Aviso de uso]
Este **não é um sistema com certificação de segurança**: uplinks LoRaWAN podem ser perdidos, GNSS não funciona em ambientes internos e o posicionamento BLE se degrada perto de metal, então uma posição pode chegar atrasada, errada ou faltar. Não use isto como a única proteção para a segurança das pessoas.
:::

## O que esta solução faz

Um local geralmente tem tanto um prédio quanto uma área externa, e a pergunta é a mesma em ambos: onde está aquela empilhadeira, aquele instrumento, aquela pessoa, agora. Beacons alimentados por bateria marcam posições em ambientes internos; o próprio GNSS do rastreador assume em ambientes externos; ambos retornam via LoRaWAN, e um painel web os desenha em um único mapa. Uma planta baixa pode ser georreferenciada sobre o mapa externo, de modo que um trajeto que começa em um prédio e continua no pátio permaneça em uma única tela.

- Implementação open source: [github.com/Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- Escolhendo uma configuração e implantando: [página de reference design](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Sem cabeamento no lado de sensoriamento</h3>
                <p>Os beacons são alimentados por bateria e colados na parede; um rastreador reporta por meses com uma única carga. O que precisa de alimentação da rede elétrica e de um ponto de rede é o gateway e o host.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Ambientes interno e externo em um único mapa, alternado automaticamente</h3>
                <p>Quando um rastreador entra ou sai de um prédio, uma máquina de estados no lado do servidor alterna a camada; nada para alternar manualmente, e um rastreador parado perto de uma janela não fica mudando de um lado para o outro.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source, dados permanecem no seu host</h3>
                <p>O código-fonte da aplicação está no GitHub e roda como uma imagem Docker no seu próprio host. A única coisa que chega à internet é o mapa base, que pode ser substituído por um arquivo PMTiles offline.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Capacidade de servidor medida</h3>
                <p>200 tags simultâneas com P95 fim a fim de 828 ms com 0% de perda; 500 tags com P95 de 2,35 s. Testado com uplinks reproduzidos, sem rastreador ou gateway conectado.</p>
            </div>
        </li>
    </ul>
</div>

### Saída em tempo real

A camada indoor desenha os rastreadores na planta baixa registrada:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png" alt="Camada indoor do dashboard: rastreadores na planta baixa registrada, lista de tags à esquerda"/>
</div>

A camada outdoor é a mesma página no mesmo WebSocket, com tiles de mapa como base:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-outdoor-8b31ec6e.png" alt="Camada outdoor do dashboard: os mesmos rastreadores em tiles de mapa"/>
</div>

Um rastreador se movendo entre as duas:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/web-example-fdbff3c1.gif" alt="O dashboard alternando camadas sozinho enquanto um rastreador se move entre ambientes interno e externo"/>
</div>

O cliente no telefone mostra os mesmos dados:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/miniprogram-example-34c773a6.gif" alt="Os mesmos dados de posição no cliente mini-program"/>
</div>


O dashboard é uma única página em `/web/map` com uma troca de camada explícita entre **Indoor** e **Outdoor**; `/web/map?layer=outdoor` é um link direto adequado para um display de parede e assina o mesmo WebSocket. Um rastreador é desenhado em exatamente uma das duas visualizações por vez. Qual delas é decidido pela máquina de estados, e a decisão é carregada na mensagem como `position.coordSystem` — `metric` para um `{x, y}` de planta baixa, `wgs84` para um `{lat, lon}`.

## De que hardware você precisa

Três tipos de dispositivo no local; o número de beacons e rastreadores escala com a implantação.

**① Beacons BLE** — a referência de posição indoor. Alimentados por bateria, montados na parede, sem fiação. Áreas cobertas apenas por GNSS (pátios, estradas, estacionamento) não precisam de nenhum.

**② O rastreador** — carregado pela pessoa ou preso ao ativo. Ele faz varredura BLE em ambientes internos e usa seu próprio GNSS em ambientes externos, e tem um botão de SOS.

**③ O gateway LoRaWAN** — coleta os uplinks e os encaminha para um servidor de rede. Peça o gateway e o rastreador para a mesma banda regional.

| | Dispositivo | Capacidade nominal | Quando escolhê-lo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-bc03-bluetooth-beacon.jpg" alt="SenseCAP BC03" width="110" /> | [SenseCAP BC03 Indoor Bluetooth Beacon](https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html)<br/>Referência de posição indoor, Bluetooth LE 5.0 | 2–3 m com 3+ por zona; nível de sala com 1 | Qualquer área indoor que precise ser resolvida melhor do que “dentro do prédio” |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114993073-sensecap-card-tracker-t1000-a.jpg" alt="SenseCAP T1000-A" width="110" /> | [SenseCAP LoRaWAN Card Tracker T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)<br/>Varredura BLE, GNSS, detecção de movimento, SOS | Um por pessoa ou ativo rastreado | O crachá ou tag de ativo; a mesma unidade cobre ambientes interno e externo |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 Gateway" width="110" /> | [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>SX1302, variantes de frequência regionais | Até 2 km em linha de visada; 100–200 rastreadores | Um ou dois por local; ignore se você já opera LoRaWAN |

Todas as cifras de capacidade na tabela são **nominais**, a partir dos datasheets dos dispositivos e da prática de implantação com este hardware. A precisão do beacon depende da instalação descrita abaixo.

Além dos dispositivos, você precisa de um host para a aplicação (qualquer máquina que rode Docker; as medições no lado do servidor usaram uma unidade reComputer J30 series como um host arm64 simples), um servidor de rede — **SenseCAP OpenStream** ou seu próprio **ChirpStack** — e, a menos que você construa o mapa base offline, acesso à internet no host para tiles raster do OpenStreetMap.

### Limites de Seleção Negativa

- **Rastreamento Contínuo Submétrico**: a precisão de beacon BLE é de 2–3 metros. Para navegação de AGV em alta velocidade ou máquinas automatizadas que exigem rastreamento contínuo submétrico, escolha UWB em vez de BLE.
- **Intertravamentos de Segurança em Tempo Real**: a comunicação LoRaWAN envolve latência e restrições de duty cycle com um limite de 15 minutos offline; não use para intertravamentos de segurança em escala de sub-segundo.

## Implantando no local

### 1. Instale o hardware

:::tip[Layout dos beacons determina a precisão indoor]
Instale beacons a **2,5–3 m** de altura com espaçamento de **5–10 m** (o espaçamento recomendado do BC03), e adicione beacons onde houver prateleiras metálicas. **Três ou mais beacons por zona** é o que a cifra nominal de 2–3 m assume; um único beacon por zona resolve ao nível de sala. Registre o **endereço MAC e a localização** de cada beacon — posições indoor são calculadas a partir do mapeamento beacon-para-zona, então atualize o mapeamento sempre que um beacon for movido, ou toda posição derivada dele será deslocada.
:::

Dimensione os gateways pela cobertura: o alcance nominal em linha de visada é de 2 km, então um ou dois cobrem um local típico; adicionar um segundo depende de paredes e distância, não da quantidade de tags. O gateway é fornecido em SKUs por banda (US915 / EU868 / AS923, etc.); confirme a **banda de frequência** do país antes de fazer o pedido e combine o rastreador com ela.

### 2. Instale o software: 7 etapas

As etapas por dispositivo e os pacotes de aplicação estão na página do reference design. Visão geral:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e baixe o pacote 🖱️</font></span></strong>
    </a>
</div><br />

1. **Implante os beacons BLE** — posicione, fixe e registre os endereços MAC.
2. **Configure o gateway LoRaWAN** — coloque-o online contra o SenseCAP OpenStream ou seu ChirpStack.
3. **Implante a aplicação de posicionamento** — um deployment em Docker, direcionado para a máquina em que você está ou para um host remoto via SSH.
4. **Configure e ative o rastreador** — faça-o ingressar na rede e defina o intervalo de uplink.
5. **Georreferencie a planta baixa** — envie a planta, depois defina origem, rotação e escala para que ela caia no lugar certo no mapa externo. Georreferenciamento e geofences ficam ambos na página de configuração:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/config-7ff6962d.png" alt="Configuration page: floor plan upload, origin and rotation, and the geofence list"/>
</div>

6. **Configure um alarme de geofence** — desenhe a cerca em WGS84 e associe uma regra de alarme.
7. **Abra o dashboard** — verifique se um rastreador aparece, se move e dispara os alarmes que você configurou.

Dificuldade **intermediária**, cerca de **60 minutos**. As etapas 5 e 6 são apenas de configuração de software e não exigem hardware extra.

:::caution[Default login]
A imagem está disponível para linux/arm64 e linux/amd64. O login padrão do dashboard é `admin` / `12345678`; altere-o em Configuration → Authentication após o primeiro login.
:::

## Interfaces disponíveis

Tudo o que a aplicação expõe é servido na porta **5173** do host em que você a implantou. Três formas de acesso, dependendo de quem está integrando.

- **Um display de parede ou uma segunda tela** — abra `/web/map?layer=outdoor` (ou `?layer=indoor`). É a mesma página e o mesmo WebSocket, então nada extra precisa ser configurado.
- **Um sistema existente de segurança, despacho ou presença** — assine o WebSocket e aja sobre dois tipos de mensagem: `tracker_sos` para o botão de emergência, e `tracker_checkin` / `tracker_position_detection` quando carregarem um bloco `geofence` com `transition: enter` ou `exit`. Esses são os eventos; o restante é telemetria.
- **Seu próprio serviço** — consuma o payload completo. Cada atualização carrega ou uma posição métrica em uma planta baixa ou uma posição WGS84, marcada por `coordSystem`, e os endpoints REST permitem criar cercas e ler ou escrever os parâmetros de georreferenciamento programaticamente.

### Interface completa e payload

| Interface | Endpoint | Payload |
|---|---|---|
| WebSocket | `ws://<host>:5173/ws` | `tracker_update` com `position` = `{x, y, coordSystem: "metric"}` ou `{lat, lon, accuracy, coordSystem: "wgs84"}`; `tracker_checkin` / `tracker_position_detection` carregam um bloco `geofence` extra em enter/exit; também `tracker_sos` e `tracker_offline` |
| REST | `GET/PUT /api/configuration/dashboard/maps/{mapName}/registration` | `{origin_lat, origin_lon, rotation_deg, scale}`. Rejeita `\|lat\|` > 85° e `scale` ≤ 0. Sessão de administrador necessária; uma sessão de convidado recebe **403** |
| REST | `POST /api/geofences`, `POST /api/events` | Geometria da cerca (polígono GeoJSON, ou um ponto mais `radius_m`) e a regra de alarme que a referencia |
| LoRaWAN uplink in | SenseCAP OpenStream, ou um tópico MQTT do ChirpStack | O mapeamento de campos está no guia de deployment |

Um alarme de geofence viaja na mesma mensagem que um check-in, em vez de em um canal próprio:

```json
{"type": "tracker_checkin", "data": {"2CF7F1C0530004AD": {
  "timestamp": 1788582647214, "map": "Plant A",
  "geofence": {"id": 1, "name": "Plant A", "transition": "enter"},
  "position": {"lat": 22.5362, "lon": 113.9432, "accuracy": null, "coordSystem": "wgs84"},
  "last_detected_beacons": []}}}
```

**Dois campos para tratar com cuidado**: faça o branch em `coordSystem`, não na presença de `lat`, porque o mesmo tipo de mensagem pode carregar qualquer uma das formas de coordenada. `accuracy` é **sempre `null`** neste hardware (nem o uplink do SenseCAP nem o do ChirpStack carregam uma medição de acurácia GNSS); trate-o como desconhecido.

## Desempenho e dados medidos {#appendix}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Solution_IndoorPositioning_H5</font></span></strong>
    </a>
</div><br />

Tudo abaixo foi medido no lado do servidor: uplinks sintéticos foram publicados em um broker MQTT local e os resultados capturados a partir do WebSocket do dashboard, sem rastreador T1000 e sem gateway no circuito. A aplicação rodou em uma unidade reComputer J30 series (como um host arm64 simples, GPU não utilizada), 2–4 minutos por nível.

### Capacidade e latência

| Métrica | Medido | Condições |
|---|---|---|
| Capacidade, estável | 200 tags simultâneas, P95 fim a fim 828 ms, 0% de perda de uplink | 1 uplink por tag a cada 30 s, 800 uplinks, 2 min |
| Capacidade, degradando | 500 tags, P95 2,35 s, 0% de perda | Mesmo, 2000 uplinks, 2 min; apenas o orçamento de latência de 2 s é excedido |
| Capacidade, em 1000 tags | P95 4,1 s, 0% de perda, processo ainda atendendo | Mesmo; ainda atendendo normalmente, a carga não foi forçada além disso |
| Taxa de atualização | 50 tags com intervalo de uplink de 2 s, P95 220 ms, 0% de perda em 4500 uplinks | 3 min; intervalos de 30 / 10 / 5 s também estáveis em P95 89 / 163 / 146 ms |
| Latência do alarme SOS | P50 24 ms, P95 29 ms, máx. 29 ms, n=20 | Tag única, sem carga concorrente; timestamp do uplink até o broadcast no WebSocket |
| Detecção de offline | 903 s e 950 s | 2 repetições; janela esperada [900 s, 960 s] a partir do limiar de 15 min e poll de 60 s |

Capacidade e taxa de atualização cobrem apenas o servidor; a rapidez com que um rastreador pode reportar depende do intervalo de uplink e do duty cycle do LoRaWAN.

Reproduza: `runs/2026-09-05-orin-nano/boundary.capacity.yaml`, `boundary.update_frequency.yaml`, `boundary.sos_latency.yaml`, `boundary.offline_latency.yaml` em `indoor_positioning_ble_lorawan` upstream (código da aplicação `feature/outdoor` @ `443bce6`)

### Geofence e georreferenciamento

| Métrica | Medido | Condições |
|---|---|---|
| Latência do alarme de geofence | P50 14 ms, máx. 14 ms, 2 alarmes | Ferramenta de replay e servidor no mesmo host via loopback, tag única, 17 uplinks |
| Histerese de geofence | 6 alternâncias de entra-e-sai na linha da cerca produziram **0 alarmes**; enter e exit dispararam cada um no terceiro ponto consecutivo | Mesmo |
| Erro de georreferenciamento | ≤ 0,21 m em qualquer lugar dentro de 2 km da origem, `\|lat\|` ≤ 60° | Pior caso de uma varredura de azimute, a cada 15°, raios 500 / 1000 / 2000 m, lat0 ∈ {0, 22.5, 45, 60}; **orçamento era 0,7 m**; apenas matemática de projeção, sem levantamento de campo |

Reproduza: `runs/2026-09-05-geofence-smoke/results.md`, `runs/2026-09-05-georef/results.md`

### Tempo de execução e parâmetros principais

O rastreador só reporta o que observou (os beacons configurados que viu, ou um fix GNSS); o servidor resolve isso em uma posição. Estes três parâmetros do lado do servidor definem o ritmo da alternância indoor/outdoor e dos alarmes:

- **Alternância indoor ↔ outdoor**: ir para outdoor exige 3 fixes GNSS em 20 s e nenhum beacon configurado visto por 15 s; voltar para indoor exige duas varreduras consecutivas, cada uma vendo 2 ou mais beacons configurados. Um rastreador ao lado de uma janela não fica alternando.
- **Transição de geofence**: `enter` / `exit` disparam apenas após 3 pontos consecutivos em 10 s. No modo geo o campo `time_range` de uma regra de alarme não tem efeito; essa confirmação substitui um intervalo de tempo definido na UI.
- **Detecção de offline**: nenhum uplink por 15 min, poll de 60 s, **hard-coded**.
- **Basemap offline**: um local sem internet constrói um arquivo PMTiles local com `go-pmtiles extract` (ele baixa apenas os tiles dentro do bounding box); gere o arquivo e carregue-o uma vez antes da entrega.

### Degradação conhecida

- **A precisão indoor segue o layout dos beacons.** A faixa de 2–3 m é nominal (wiki do BC03) e assume 3 ou mais beacons por zona a 2,5–3 m de altura e espaçamento de 5–10 m. Um beacon por zona dá nível de sala. Prateleiras metálicas degradam a trilateração; adicione beacons nesses locais.
- **A latência cresce com a quantidade de tags**: o P95 fim a fim é 2,35 s em 500 tags e 4,1 s em 1000.
- **O erro de georreferenciamento cresce com o raio e a latitude**: o alcance útil é de cerca de 2 km, e a API recusa `\|lat\|` acima de 85°.
- **`accuracy` e `alt` não carregam dados**: lógica que faz branch em accuracy sempre segue o caminho nulo neste hardware, e o mecanismo de geofence trata uma `accuracy` ausente como aprovada.

## Proveniência de dados e assets

- **Dados medidos** — todos os valores em Desempenho e dados medidos vêm de `description.md` de `indoor_positioning_ble_lorawan` no repositório upstream `sensecraft-solutions`, que cita arquivos de relatório por execução pelo caminho. Os dados são traços de replay sintéticos gerados para as execuções; nenhum dado de site de cliente está envolvido.
- **Device EUIs** mostrados nas capturas de tela e traços são os sintéticos usados pela ferramenta de replay.
- **Tiles de basemap** em qualquer captura de tela outdoor são © contribuidores do OpenStreetMap, licenciados sob a [ODbL](https://www.openstreetmap.org/copyright). Essa atribuição acompanha a página.
- **Plantas baixas** nas capturas de tela de georreferenciamento são imagens de teste sintéticas (uma planta de 1000×800 px em um mapa de demonstração de 50 m × 40 m), criadas para a execução de avaliação e excluídas depois.
- **Código-fonte da aplicação** está em [Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5); verifique os termos de licença no repositório antes de enviar um produto derivado.
- **Capturas de dashboard e GIFs de demonstração** — obtidos da própria UI da aplicação (`docs/ui/` e `assets/` em `solution-indoor-positioning`). O basemap da camada outdoor são tiles do OpenStreetMap, atribuídos sob ODbL; a proveniência está em `gallery/ATTRIBUTION.md` do pacote upstream.
