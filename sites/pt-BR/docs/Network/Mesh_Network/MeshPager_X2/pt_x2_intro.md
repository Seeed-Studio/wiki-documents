---
description: Explore a linha SenseCAP MeshPager X2 Series de comunicadores Meshtastic autônomos com LR2021 LoRa, GNSS de banda dupla, tela de 2,0 polegadas, proteção IP66 e até 7 dias de duração de bateria.
title: Introdução à SenseCAP MeshPager X2 Series
keywords:
  - MeshPager X2 Series
  - Meshtastic
  - ESP32-S3
  - LR2021
slug: /meshpager_x2_intro
sidebar_position: 0
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-10-09'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/pt-br/meshpager_x2_intro/
---


A SenseCAP MeshPager X2 Series oferece comunicadores portáteis [Meshtastic®](https://meshtastic.org/) autônomos para mensagens fora da rede e compartilhamento de localização. Alimentado pelo ESP32-S3 e pelo módulo Wio-LR2021 baseado em **Semtech LR2021**, ele combina **LoRa de 863–928 MHz, Bluetooth LE e Wi-Fi** com GNSS de banda dupla, uma **tela IPS de 2,0 polegadas**, controles físicos e uma **bateria de 3400 mAh**. Com até **7 dias de funcionamento** e até **10 km de comunicação em linha de visada** testados a 915 MHz, você pode escrever mensagens, ler conversas e rastrear localizações diretamente no X2 sem um smartphone.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-angle.png" alt="Vista do produto MeshPager X2 mostrando a antena externa, tela, botões laranja e direcional" width={1248} height={800} style={{width: 800, maxWidth: '100%', height: 'auto'}} />
  <figcaption>MeshPager X2. <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-front.png" target="_blank" rel="noopener noreferrer">Vista frontal.</a></figcaption>
</figure>

## Recursos

- **Comunicação autônoma e fácil de transportar:** Digite texto, veja mensagens e rastreie localizações diretamente na tela de 2,0 polegadas usando os controles físicos. O corpo compacto inclui um clipe de cinto metálico e um laço para cordão para prender o X2 a uma mochila, cinto ou roupa, usá-lo em um cordão ou carregá-lo no bolso.

- **LoRa de próxima geração e longo alcance:** O Semtech LR2021 suporta **863–928 MHz**, com sensibilidade de recepção de até **−141 dBm** e comunicação de **até 10 km em condições de linha de visada, testado a 915 MHz**. A antena externa flexível tipo chicote de 70 mm oferece suporte à comunicação de longo alcance para equipes em ambientes remotos.

- **GNSS de banda dupla e consciência de elevação:** O AG3335MV/B fornece **posicionamento de banda dupla L1 + L5** para ambientes externos desafiadores, incluindo cobertura de árvores e cânions. Um barômetro integrado fornece medições de pressão atmosférica para rastreamento de elevação em tempo real, complementando as informações de localização GNSS na trilha.

- **Até uma semana de duração de bateria com USB-C:** A **bateria de 3400 mAh** oferece **até 7 dias de funcionamento contínuo** para viagens ao ar livre de vários dias. O USB-C oferece suporte a carregamento, atualizações de firmware e depuração.

- **Proteção externa IP66:** O **invólucro com classificação IP66** protege contra poeira e chuva forte para uso externo em condições exigentes.

- **Sensores integrados, armazenamento expansível e hardware de áudio:** Um barômetro, magnetômetro e giroscópio fornecem dados de pressão atmosférica, rumo e movimento. O **slot para cartão microSD** oferece suporte a mapas offline e registro de dados com firmware compatível. O microfone e o alto-falante integrados fornecem hardware para **futuras atualizações de mensagens de voz**.

O alcance real de comunicação e o tempo de funcionamento da bateria variam conforme as configurações do dispositivo, uso, terreno e condições de operação.

## Especificação

<table aria-label="MeshPager X2 specification" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>Item</th>
      <th scope="col" style={{textAlign: 'center'}}>Parâmetro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Processador</th>
      <td>Espressif ESP32-S3R8, dual-core, até 240 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>LoRa</th>
      <td>Wio-LR2021 (Semtech LR2021)</td>
    </tr>
    <tr>
      <td>Faixa de frequência: 863–928 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>GNSS</th>
      <td>AG3335MV/B, posicionamento de banda dupla L1 + L5</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Memória</th>
      <td>32 MB Flash / 8 MB PSRAM</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={5} style={{textAlign: 'left', verticalAlign: 'middle'}}>Antena</th>
      <td>Antena LoRa externa, conector macho RP-SMA</td>
    </tr>
    <tr>
      <td>Faixa de frequência: 863–928 MHz</td>
    </tr>
    <tr>
      <td>Dimensões: Ø10,5 × 70 mm</td>
    </tr>
    <tr>
      <td>Ganho de pico: 0,32 dBi</td>
    </tr>
    <tr>
      <td>Eficiência máxima: 48,7%</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Conectividade sem fio</th>
      <td>Wi-Fi: 2,4 GHz</td>
    </tr>
    <tr>
      <td>Bluetooth 5.0</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Interface</th>
      <td>USB Type-C</td>
    </tr>
    <tr>
      <td>Slot para cartão MicroSD (SDIO/SDMMC de 1 bit)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Entrada de energia</th>
      <td>USB Type-C: 5 V CC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Tela IPS</th>
      <td>Tamanho: 2,0 polegadas</td>
    </tr>
    <tr>
      <td>Resolução: 240 × 320 pixels</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Botão</th>
      <td>Power × 1<br />Botões direcionais × 4<br />Confirmar × 1<br />Retornar × 1</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Áudio</th>
      <td>Microfone: microfone analógico com ADC ES7243E<br />Saída: codec ES8311 e amplificador de alto-falante NS4150B</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Distância de comunicação</th>
      <td>Até 10 km (linha de visada, testado a 915 MHz)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Grau de proteção IP</th>
      <td>IP66</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Dimensão</th>
      <td>110,6 × 64,3 × 26,85 mm</td>
    </tr>
  </tbody>
</table>

## Bateria

<table aria-label="MeshPager X2 battery" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>Item</th>
      <th scope="col" style={{textAlign: 'center'}}>Parâmetro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Capacidade da bateria</th>
      <td>3400 mAh</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Porta de carregamento</th>
      <td>USB Type-C (carregamento, gravação de firmware e transferência de dados)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Entrada de energia do dispositivo</th>
      <td>5 V CC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Temperatura de operação (descarga)</th>
      <td>-20°C a 60°C</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Temperatura de carregamento</th>
      <td>5°C a 45°C</td>
    </tr>
  </tbody>
</table>

<details>
<summary>Condições de temperatura da bateria</summary>

A célula da bateria especifica correntes diferentes nestas faixas de temperatura:

- **Descarga:** 0,2C de -20°C a 15°C; 0,5C de 15°C a 60°C.
- **Carga:** 0,2C de 5°C a 15°C; 0,5C de 15°C a 45°C.

Evite carregamento ou descarga prolongados nos limites de temperatura.

</details>

<details>
<summary style={{fontSize: '1.5rem', fontWeight: 600}}>Visão geral do hardware</summary>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" target="_blank" rel="noopener noreferrer">
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" alt="Diagrama em blocos de hardware do MeshPager X2 V1.0 mostrando alimentação, ESP32-S3, LoRa, GNSS, sensores, tela, armazenamento e conexões de áudio, com GPIO41 alimentando ES8311 DSDIN e ES7243E SDOUT alimentando GPIO42" width={4680} height={3960} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  </a>
  <figcaption>Diagrama em blocos de hardware do MeshPager X2. Clique para ampliar.</figcaption>
</figure>

| Componente | Função |
| --- | --- |
| Tela frontal | Mensagens, informações do nó, status do GNSS e mapas |
| Teclas direcionais | Navegação de menu, seleção no teclado na tela e movimentação do mapa |
| Confirmar / Retornar | Selecionar um item ou voltar para a visualização anterior |
| Tecla de energia | Controle de energia e desligar/acordar a tela |
| Antena LoRa flexível | Conexão de rádio em malha sub-GHz |
| Porta USB-C | Carregamento e conexão a um computador |
| Slot para cartão microSD | Armazenamento para blocos de mapas offline |
| Microfone e alto-falante | Entrada e saída de áudio |
| Barômetro | Medições de pressão atmosférica para rastreamento de elevação |
| Clipe de cinto metálico e laço para cordão | Prenda o X2 a um cinto, mochila ou cordão |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="Close-up do slot para cartão microSD do MeshPager X2 com sua tampa externa removida" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Slot para cartão microSD. Consulte <a href="/pt-br/x2_get_started_for_meshtastic/#microsd-e-offline-maps">microSD e Offline Maps</a> para preparação do cartão.</figcaption>
</figure>

Para configuração e operações com botões, consulte [Comece a usar a MeshPager X2 Series](/pt-br/x2_get_started_for_meshtastic/).

### Lista de pinos

<details>
<summary>Atribuições de pinos do ESP32-S3</summary>

Essas atribuições seguem o esquema MeshPager X2 V1.0. Os números GPIO identificam sinais do ESP32-S3, não números de pinos do encapsulamento.

| Função | Sinal | GPIO do ESP32-S3 |
| --- | --- | --- |
| Tecla Return / BOOT | `ESP_BOOT/Return` | GPIO0 |
| Tensão da bateria | `BAT_ADC` | GPIO1 |
| Interrupção do expansor | `EXP_I2C_INT1` | GPIO2 |
| Clock SPI do LoRa | `LR_SPI_SCK` | GPIO3 |
| Dados de saída SPI do LoRa | `LR_SPI_MOSI` | GPIO4 |
| Dados de entrada SPI do LoRa | `LR_SPI_MISO` | GPIO5 |
| Seleção de chip do LoRa | `LR_NSS` | GPIO6 |
| Interrupção do LoRa | `LR_DIO8` | GPIO7 |
| Busy do LoRa | `LR_BUSY` | GPIO8 |
| Tecla de energia | `PWR_BUTTON` | GPIO9 |
| Seleção de chip do TFT | `TFT_CS` | GPIO10 |
| Dados SPI do TFT | `TFT_SDA` | GPIO11 |
| Clock SPI do TFT | `TFT_SCK` | GPIO12 |
| Dados/comando do TFT | `TFT_A0` | GPIO13 |
| Comando do microSD | `SD_CMD` | GPIO14 |
| Clock do microSD | `SD_CLK` | GPIO15 |
| Dados do microSD | `SD_DAT0` | GPIO16 |
| I2C do expansor / RTC | SDA / SCL | GPIO17 / GPIO18 |
| USB nativo | D− / D+ | GPIO19 / GPIO20 |
| Pulso por segundo do GNSS | `AG_PPS0` | GPIO21 |
| Clock mestre de áudio | `CODEC_I2S0_MCLK` | GPIO38 |
| Clock de bits de áudio | `CODEC_I2S0_SCLK` | GPIO39 |
| Clock de palavra de áudio | `CODEC_I2S0_LRCK` | GPIO40 |
| Dados de reprodução de áudio | `CODEC_I2S0_DSDIN` | GPIO41 |
| Dados de captura de áudio | `CODEC_I2S0_SDOUT` | GPIO42 |
| UART do GNSS | MCU TX / MCU RX | GPIO43 / GPIO44 |
| Saída do RTC | `RTC_OUT` | GPIO45 |
| Retroiluminação do TFT | `TFT_PWM` | GPIO46 |
| I2C de sensor / áudio | SDA / SCL | GPIO47 / GPIO48 |

</details>

<details>
<summary>Notas sobre o expansor de E/S e dispositivos I2C</summary>

**Expansor de E/S**

O TCA6424A está no endereço I2C `0x22`. Nomes de portas como `P14` identificam pinos do expansor, não GPIOs do ESP32-S3.

| Porta do TCA6424A | Sinal / função no esquemático |
| --- | --- |
| P00 / P01 / P02 / P03 | Cima / Baixo / Esquerda / Direita |
| P04 | Confirmar |
| P05 | Ponto de teste TP47 |
| P06 | `CHARGER_STAT`, status do carregador |
| P07 | `EXP_SD_DET`, detecção de microSD |
| P10 / P11 | `AG_RTC_INT` / `AG_SLEEP_INT`, interrupções do GNSS |
| P12 | `IMU_INT1`, interrupção do sensor de movimento |
| P13 | Ponto de teste TP41 |
| P14 | `VCC_SEN_EN`, habilitação da alimentação de sensores e áudio |
| P15 | `VCC_SD_EN`, habilitação da alimentação do microSD |
| P16 | `VCC_TFT_EN`, habilitação da alimentação do TFT e da retroiluminação |
| P17 | `AG_VRTC_EN`, habilitação da alimentação de backup do GNSS |
| P20 | `AG_PWR_EN`, habilitação da alimentação principal do GNSS |
| P21 | `VBAT_ADC_EN`, habilitação da medição da bateria |
| P22 | `AUDIO_PA_EN`, habilitação do amplificador de alto-falante |
| P23 | `USB_IN`, detecção de entrada USB |
| P24 | `PWR_HOLD`, trava da alimentação principal |
| P25 / P26 / P27 | Reset do TFT / LoRa / GNSS |

**Dispositivos I2C**

| Barramento | Dispositivo | Endereço mostrado no esquemático |
| --- | --- | --- |
| GPIO17 SDA / GPIO18 SCL | Expansor de E/S TCA6424A | `0x22` |
| GPIO47 SDA / GPIO48 SCL | Sensor de movimento LSM6DSO | `0x6A` |
| GPIO47 SDA / GPIO48 SCL | Magnetômetro BMM350 | `0x15` |
| GPIO47 SDA / GPIO48 SCL | Barômetro SPA06-003 | `0x77` |
| GPIO47 SDA / GPIO48 SCL | Codec ES8311 | `0x18` |
| GPIO47 SDA / GPIO48 SCL | ADC ES7243E | `0x14` |

No esquemático V1.0, o pino `ADSEL` do BMM350 é puxado para alto através de R147 (10 kΩ), selecionando `0x15`. O ES7243E usa `0x14`, portanto os dois dispositivos têm endereços distintos no barramento I2C compartilhado.

</details>

<details>
<summary>Notas de integração de hardware</summary>

- **Antena:** As especificações são para o M02-0401060R0A e usam a configuração de teste de referência do fornecedor. Selecione a região LoRa do dispositivo de acordo com as regulamentações locais.
- **Bateria:** Use a bateria X2 especificada, classificada para carregamento a 4,4 V, com sua conexão de detecção de temperatura. Não substitua por uma célula classificada para tensão máxima de carga de 4,2 V.
- **Flash:** O X2 possui 32 MB de flash externa. O esquemático V1.0 especifica PY25Q256HB-SUH-IR. Use o layout de partição fornecido com o pacote de firmware correspondente.
- **Botões e detecção de energia:** Return conecta ao `GPIO0` do ESP32-S3. O `P06` do TCA6424A fornece o status do carregador e o `P23` fornece a detecção de entrada USB; `P05` e `P13` conectam aos pontos de teste TP47 e TP41.
- **Rádio:** O LoRa usa a conexão `Sub-G_RF` do módulo. Sua porta `2.4G_RF` não é conectada; Wi-Fi e Bluetooth usam o caminho de antena do ESP32-S3.

</details>

</details>

## Aplicação

- **Comunicação de equipe off-grid:** Troque mensagens de texto e compartilhe localizações com outros nós Meshtastic quando o serviço celular ou Wi-Fi não estiver disponível.
- **Trilhas e camping:** Veja a posição GNSS e mapas offline pré-carregados diretamente no X2. Use os botões físicos para escrever e ler mensagens sem um smartphone.

Para configuração e operação, consulte [Get Started with MeshPager X2 Series](/pt-br/x2_get_started_for_meshtastic/).

## Documento

- [Planilha de consumo de energia do MeshPager X2 (.xlsx)](https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager%20X2%20power%20consumption.xlsx)

## Suporte técnico e discussão sobre o produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Junte-se à comunidade Meshtastic da Seeed Studio no Facebook"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Fórum técnico da Seeed Studio"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contatar o suporte da Seeed Studio"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Comunidade Seeed Studio no Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Discussão da Wiki da Seeed Studio"></a>
</div>
