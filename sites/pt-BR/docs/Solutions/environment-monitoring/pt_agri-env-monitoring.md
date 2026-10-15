---
description: Construindo um site de monitoramento de solo e ar com LoRaWAN que integra com o Home Assistant — quais dispositivos você precisa, como implantar cada um dos três caminhos de ingestão, quais interfaces MQTT estão disponíveis
title: 'Monitoramento Ambiental Agrícola com LoRaWAN: Hardware, Implantação e Interfaces'
keywords:
  - monitoramento ambiental agrícola
  - umidade do solo LoRaWAN
  - monitoramento de CE do solo
  - sistema de monitoramento de estufa
  - SenseCAP S210x
  - ChirpStack
  - The Things Stack
  - Home Assistant
  - descoberta MQTT
  - gateway LoRaWAN
  - SenseCAP M2
  - reComputer R12 Series
image: https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg
slug: /solutions/agri-env-monitoring
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/agri-env-monitoring/
generated_from: sensecraft-solutions@agri_env_monitor
---

:::caution[Aviso de uso]
Este é um painel de operações, não um sistema de medição certificado: o valor exibido é o valor bruto relatado pelo nó, com uma unidade anexada.
:::

## O que esta solução faz

A umidade e a CE do solo em uma estufa determinam quando irrigar e quando adubar; a chuva e a temperatura do solo em um campo aberto determinam o mesmo para uma cultura diferente. Os nós LoRaWAN SenseCAP medem esses valores e os reportam pelo ar. Os uplinks se tornam entidades do Home Assistant com a unidade correta, classe de dispositivo e classe de estado: elas aparecem em um painel, acumulam histórico e disparam uma notificação quando um valor cruza um limite.

É destinada a estufas, talhões em campo aberto, locais sem internet utilizável e implantações SenseCAP existentes que desejam um painel local sem mover nada.

- Seleção e implantação: [página de reference design](https://www.seeed.cc/solutions/reference-designs/agri_env_monitor)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Os nós SenseCAP funcionam imediatamente</h3>
                <p>Os nós S210x reportam no ciclo configurado no nó, sem nada para enviar para eles. As entidades são criadas por descoberta MQTT com unidades e classes definidas; nenhum YAML para escrever.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Sondas de terceiros se conectam da mesma forma</h3>
                <p>Sondas RS485 ou analógicas existentes entram pelo data logger S2100 e usam o mesmo mapeamento de medições. O mapeamento, arquivos compose, painel e automações são fornecidos no pacote público da solução; adicionar uma grandeza é uma linha em um arquivo de configuração.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Pode funcionar totalmente sem internet</h3>
                <p>O ChirpStack roda no gateway M2, a ponte e o Home Assistant em um host local. Nenhuma conta em nuvem, nenhuma conexão de saída.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Altere o network server, mantenha o painel</h3>
                <p>Os nomes das entidades são idênticos na nuvem SenseCAP, em um The Things Stack auto-hospedado e em um ChirpStack local, então trocar de caminho deixa painéis, automações e exportações intactos.</p>
            </div>
        </li>
    </ul>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg" alt="Painel do Home Assistant mostrando entidades de umidade do solo, ambiente e sensor de CE"/>
</div>

## De que hardware você precisa

Quatro coisas no local: os nós LoRaWAN, um gateway que os ouça, um network server e um host Linux com Docker.

**① Os nós** — sensores SenseCAP S210x medem diretamente; um data logger S2100 traz sondas RS485 ou analógicas de terceiros existentes para a mesma rede LoRaWAN. Nada é implantado em nenhum dos dois — eles medem e reportam periodicamente em um ciclo configurado no nó.

**② O gateway e o network server** — os três caminhos diferem apenas aqui, e a escolha decide se o local precisa de internet.

| | Dispositivo | Função | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/f/i/first_page_all-31.jpg" alt="SenseCAP S2101" width="110" /> | [SenseCAP S210x](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)<br/>Nós sensores de solo e ar | Medem e reportam | Sempre. Escolha a variante pela grandeza de que você precisa e a banda pela sua região |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992872-application-10.png" alt="SenseCAP S2100" width="110" /> | [SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)<br/>Data logger LoRaWAN | Sonda de terceiros para LoRaWAN | Você já tem sondas RS485 ou analógicas |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/_/__front-05.png" alt="S-Soil MTEC-02B" width="110" /> | [S-Soil MTEC-02B](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02B-p-4860.html)<br/>Sonda RS485 de umidade, temperatura e CE do solo | Liga-se ao S2100 por RS485 (Modbus-RTU); o S2100 envia o uplink LoRaWAN | Você precisa de umidade, temperatura e CE do solo pelo caminho do S2100 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 gateway" width="110" /> | [SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>Gateway LoRaWAN indoor | Encaminha para a nuvem SenseCAP ou roda o próprio ChirpStack | Você quer um site totalmente local: mude para o network server embutido na interface web do M2 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/0/100021896main_4.jpg" alt="reComputer R1225" width="110" /> | [reComputer R12 Series](https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-EU868-p-6720.html)<br/>Gateway LoRaWAN e controlador industrial | É o gateway e hospeda o The Things Stack na mesma máquina | Você está auto-hospedando o The Things Stack e não tem gateway |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110110_preview-16.png" alt="reRouter CM4" width="110" /> | [reRouter CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)<br/>Host reRouter CM4 | Roda o network server ou roda o painel | Você precisa de um host e ainda não tem uma máquina Linux com Docker |

**③ O host do painel** — qualquer máquina Linux com Docker. Ela roda o Home Assistant, o broker MQTT e `agri-env-bridge`, e não precisa de acesso à internet de entrada.

**Peça nós, gateway e concentrador para a mesma banda** (EU868 / US915 / AS923, etc.). A banda é fixada na fábrica e não pode ser alterada por software. Para os dois caminhos auto-hospedados você também precisa do DevEUI, JoinEUI e AppKey de cada nó para registrá-lo no network server.

### Limites de seleção negativa

- **Transmissão de alta largura de banda**: LoRaWAN é projetado para telemetria periódica (intervalos de 5–60 min); para monitoramento contínuo de vídeo ou controle em sub-segundos, use 4G ou Ethernet industrial cabeada.
- **Invólucros metálicos e silos**: Silos metálicos espessos ou obstruções pesadas subterrâneas causam forte atenuação de RF; use antenas externas ou sensores cabeados RS-485.

## Como um site é implantado

### 1. Monte os nós

:::tip[Defina a profundidade da sonda a partir da zona radicular e depois deixe a sonda no lugar]
Sondas de solo leem a camada em que estão. Leituras a 10 cm e a 40 cm são entidades separadas (`soil_moisture_10cm` … `soil_moisture_40cm`). Decida a profundidade a partir da zona radicular da cultura antes de cavar o primeiro buraco; mover uma sonda depois torna o histórico já registrado nessa entidade incomparável.
:::

A cobertura de rádio precisa ser medida no local; nenhum valor de alcance é fornecido aqui. Antes de fixar as posições dos sensores, confirme no local que o gateway recebe os uplinks de cada nó.

### 2. Instale o software — de 3 a 6 etapas dependendo do caminho

As etapas por dispositivo e os pacotes de aplicação estão na página de reference design; escolha uma configuração para o seu site e faça o download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/agri_env_monitor" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

Esboço:

1. **Implantar o Home Assistant e o broker** no host Linux (todos os três caminhos, um único deployment com Docker compose).
2. **Subir o network server** — nada a fazer no caminho em nuvem; no caminho com ChirpStack, mude o M2 para o network server local integrado na interface web, ou suba uma stack ChirpStack com compose em um host Linux; no caminho com The Things Stack, suba a stack com seu Postgres e Redis no gateway reComputer R12 Series.
3. **Instalar o decodificador** (somente caminhos self‑hosted) — o payload formatter no The Things Stack, ou o codec do device-profile no ChirpStack. Sem isso, nenhuma entidade aparece.
4. **Fazer o join dos nós** (somente caminhos self‑hosted) — registrar cada DevEUI, JoinEUI e AppKey no network server.
5. **Implantar a bridge** com a origem configurada para o caminho e as credenciais do broker preenchidas.
6. **Importar o dashboard e as automações** e confirmar que as entidades carregam valores.

Tempo estimado **45 minutos**, dificuldade **intermediária**. O caminho com The Things Stack leva mais tempo: o concentrador precisa ser instalado fisicamente e a stack sobe seu próprio banco de dados e cache.

**A verificação é a mesma nos três caminhos**: o dashboard Lovelace importado na última etapa mostra as entidades com valores.

## Interfaces disponíveis

Tudo sai por um único broker MQTT na porta **1883**, em execução no host do dashboard. Três tópicos retidos carregam toda a interface.

- **Home Assistant** — zero configuração. A bridge publica discovery configs, então as entidades aparecem sozinhas com a unidade, device class e state class corretas; nenhum YAML é escrito manualmente.
- **Um sistema de irrigação ou de gestão agrícola** — assine `agri_env/sensecap_<deveui>/<entity_key>/state` para o valor e `agri_env/sensecap_<deveui>/availability` para saber se o nó ainda está ativo. Ambos são retidos, então um assinante que se conecta mais tarde ainda obtém imediatamente o estado atual.
- **Seu próprio serviço** — o discovery config em `homeassistant/…` carrega todos os metadados da entidade (unidade, device class, state class, identificadores do dispositivo), o que é suficiente para construir um esquema.

### Tópicos e payloads

| Tópico / porta | Payload | Retido |
|---|---|---|
| `homeassistant/sensor/sensecap_<deveui>/<entity_key>/config` (1883) | Discovery config, um por entidade: `name`, `unique_id`, `object_id`, `state_topic`, `availability_topic`, `unit_of_measurement`, `state_class`, `device.identifiers` | Sim |
| `agri_env/sensecap_<deveui>/<entity_key>/state` (1883) | O valor de uma medição, por exemplo `33.8` | Sim |
| `agri_env/sensecap_<deveui>/availability` (1883) | `online` ou `offline` | Sim |

**Nomeação de entidades**: o entity id é `sensor.sensecap_<deveui>_<entity_key>`, com o DevEUI completo em minúsculas; uma forma abreviada entra em colisão entre nós cujos endereços compartilham um sufixo. Mudar a regra depois significa limpar as mensagens retidas do broker e o registro de entidades do Home Assistant ao mesmo tempo, caso contrário os tópicos antigos voltam após um restart.

**Mantenha o broker em uma LAN confiável; não o exponha à internet.** Suas credenciais estão em arquivos `.env` no host e, no caminho com ChirpStack, o broker do lado do LNS roda sem autenticação na rede do compose.

## Desempenho e dados medidos

### Tempo de execução e parâmetros principais

Um serviço, `agri-env-bridge`, fica atrás dos três caminhos e roda no host do dashboard ao lado do Home Assistant e do broker MQTT.

| Caminho | O que a bridge lê |
|---|---|
| SenseCAP cloud | A SenseCAP OpenAPI mais o stream MQTT em nuvem; preenche o histórico mês a mês no primeiro start |
| The Things Stack | A integração MQTT da stack, depois que o payload formatter decodificou o uplink |
| ChirpStack | A integração MQTT do ChirpStack, depois que o codec do device-profile decodificou o uplink |

- **Mapeamento de medições**: `assets/config/measurements.yaml`. Ele cobre temperatura e umidade do solo em quatro profundidades, tensão do solo, fluxo de calor e conteúdo volumétrico de água; temperatura do ar, umidade, CO2, pressão barométrica, PM2.5 e PM10, ruído; pH, oxigênio dissolvido, turbidez, TDS, salinidade e temperatura da água; velocidade e direção do vento, radiação solar, duração da insolação, PAR e quantum de luz; vazão, fluxo total, nível de líquido e vazamento de água. Adicionar uma grandeza é uma nova linha, sem mudança de código; os valores nunca são escalonados, apenas recebem uma unidade.
- **Limite de offline**: por padrão, dois ciclos de reporte do S210x mais uma margem. Ao expirar, as entidades do nó ficam indisponíveis no Home Assistant, mantendo o último valor.
- **Desduplicação**: leituras são indexadas por `(DevEUI, measurementId, timestamp)`, então um backfill em nuvem e o stream ao vivo nunca contam duas vezes a mesma leitura; quando uma entidade tem dois valores, o mais recente prevalece.
- **Verificação funcional**: uplinks gravados reproduzidos no broker nos três formatos de origem criaram 15 entidades.
- **Reprodução**: testes de replay estão localizados no repositório em `tests/replay_bench.py`; execute `python3 tests/replay_bench.py --fixtures tests/data/` para verificar três tipos de uplink e o registro automático de 15 entidades.

### Degradação conhecida

- **O broker é um ponto único de falha**: enquanto ele estiver fora do ar, nenhum dos três caminhos será atualizado. Tópicos de estado são retidos, então o Home Assistant recupera o último valor após um restart.

## Proveniência de dados e assets

- **A tabela de `measurementId` para grandeza física** em `assets/config/measurements.yaml` foi extraída das fontes do decodificador SenseCAP em [Seeed-Solution/SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder), commit `d0a2342` — `third_party/SenseCAP-Decoder/S210X/Helium/SenseCAP_S210X_Helium_Decoder.js` para a série S210X e `third_party/SenseCAP-Decoder/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js` para o T1000. Cada entrada no YAML traz o arquivo de origem e a linha de onde veio.
- **A licença desse repositório é não confirmada**: ele não tem arquivo LICENSE nem seção de licenciamento em seu README; a única declaração de licença nele é um cabeçalho de arquivo contribuído por terceiros dizendo `Unlicensed for internal use`. **O pacote da solução não redistribui o decodificador.** Ele usa apenas a correspondência `id -> quantity`; o guia de deployment para os dois caminhos self‑hosted aponta para o repositório upstream. Confirme o licenciamento com a Seeed antes de distribuir o próprio decodificador.
- **As colunas `device_class`, `unit_of_measurement` e `state_class`** não vêm do decodificador — essa informação não existe lá. Elas foram derivadas da documentação de sensores do Home Assistant.
- **Diagramas de arquitetura** na página de design de referência são desenhados a partir de um Architecture IR; as artes de produto vêm do catálogo revisado de adesivos de produto da Seeed.
