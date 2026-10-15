---
description: Uso de NFC para XIAO nRF52840 (Sense) com a biblioteca XIAO_nRF52840_NFC.
title: Uso de NFC para ambas as versões
keywords:
  - xiao
  - nRF52840
  - NFC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
sku: 102010448, 102010469
last_update:
  date: 07/16/2026
  author: Morgan
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-NFC-Usage/
updatedAt: '2026-07-17'
---

# Uso de NFC no Seeed Studio XIAO nRF52840 (Sense)

Ambas as **séries Seeed Studio XIAO nRF52840** são equipadas com um **módulo NFC (Near Field Communication)** baseado no periférico NFCT (Near Field Communication Tag) integrado do nRF52840. Ele oferece suporte à funcionalidade de Tag NFC Tipo 2. Ao conectar uma antena NFC externa, o XIAO nRF52840 pode atuar como uma tag NFC e ser lido por smartphones e outros leitores NFC.

Este wiki orienta você por todo o fluxo de trabalho de uso de NFC — desde a instalação da biblioteca, conexão de hardware, sintonia da antena, até a verificação da configuração e criação da sua própria tag NFC.

:::note
Este tutorial é baseado na biblioteca **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)**. A versão **1.1.13** de Seeed nRF52 Boards foi testada e aprovada.
:::

## Trabalho preparatório

Para a instalação das bibliotecas da placa, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#configuração-de-software)** para concluir a instalação de Seeed nRF52 Boards. Se você já instalou, podemos prosseguir.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-selecting-board-NRF52840-for-nfc.png" /></div>

:::note
Certifique-se de selecionar a placa **Seeed XIAO nRF52840** no Boards Manager. A biblioteca antiga "Seeed nRF52 mbed-enabled Boards" **não é mais mantida** e não deve ser usada.
:::

## Hardware necessário

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840</th>
        <th>Seeed Studio XIAO nRF52840 Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
    <tr>
        <th>Seeed Studio XIAO nRF52840 Sense</th>
        <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::tip
A funcionalidade NFC básica funciona apenas com a antena soldada em NFC1/NFC2. Após testes da comunidade (agradecimentos especiais a **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** do fórum da Seeed), ambas as antenas a seguir funcionaram imediatamente após a soldagem, sem necessidade de sintonia adicional do circuito:

- **MOLEX 1462360051**
- **TAOGLAS FXR.07.A.DG**

Posteriormente, adicionamos dois capacitores de sintonia de **43 pF** de cada pad NFC (D14, D15) para GND para a TAOGLAS FXR.07.A.DG, a fim de aumentar ainda mais a distância de leitura. O valor de capacitor de ~40 pF foi calculado a partir da subseção **"6.14.10 NFCT antenna recommendations"** na folha de dados de especificação do produto do MCU nRF52840.

Se você tiver um comportamento instável (pop-ups incompletos, detecção intermitente), adicionar capacitores de casamento melhorará significativamente a confiabilidade. Consulte [Antenna Tuning](#sintonia-da-antena) para mais detalhes.

Para mais percepções de testes em cenários reais, confira a [discussão original no fórum](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696).
:::

## Software necessário

<div class="table-center">
  <table align="center">
    <tr>
        <th>Item</th>
        <th>Versão / Observações</th>
    </tr>
    <tr>
        <td>Arduino IDE</td>
        <td>1.8.x ou posterior</td>
    </tr>
    <tr>
        <td>Seeed nRF52 Boards</td>
        <td><strong>1.1.13</strong> (instalar via Arduino IDE Boards Manager)</td>
    </tr>
    <tr>
        <td><a href="https://github.com/limengdu/XIAO_nRF52840_NFC">XIAO_nRF52840_NFC</a> Library</td>
        <td>Baixe em <a href="https://github.com/limengdu/XIAO_nRF52840_NFC">GitHub</a>, instale via <strong>Sketch &gt; Include Library &gt; Add .ZIP Library</strong> (veja abaixo)</td>
    </tr>
    <tr>
        <td>App NFC Tools</td>
        <td><a href="https://play.google.com/store/apps/details?id=com.wakdev.wdnfc">Android</a> / <a href="https://apps.apple.com/us/app/nfc-tools/id1252962749">Apple</a></td>
    </tr>
  </table>
</div>

### Instalando a biblioteca XIAO_nRF52840_NFC

Esta biblioteca **não** está incluída no Arduino Library Manager — você precisa instalá-la manualmente a partir do GitHub.

- **Passo 1.** Acesse o repositório GitHub **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)**, clique no botão verde **Code** e selecione **Download ZIP**.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_nRF52840_NFC" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<!-- TODO: Screenshot of GitHub Download ZIP button -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-download-zip.png" style={{width:800, height:'auto'}}/></div>

- **Passo 2.** Abra o Arduino IDE, vá em **Sketch > Include Library > Add .ZIP Library...**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-installed.png" style={{width:800, height:'auto'}}/></div>

- **Passo 3.** Selecione o arquivo ZIP baixado (`XIAO_nRF52840_NFC-main.zip`). Você deverá ver **"Library added to your libraries"** na barra de status.

- **Passo 4.** Reinicie o Arduino IDE. Após reiniciar, você deverá ver os exemplos em **File > Examples > XIAO_nRF52840_NFC**.

<!-- TODO: Screenshot of examples menu showing XIAO_nRF52840_NFC -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-examples.png" style={{width:1000, height:'auto'}}/></div>

## Conexão de hardware

Os pinos NFC do XIAO nRF52840 estão localizados na parte de trás da placa, identificados como **P0.09** e **P0.10**:

```
D14 (P0.09) — NFC1 — Antenna end A
D15 (P0.10) — NFC2 — Antenna end B
```

Solde a antena NFC em P0.09 e P0.10 como mostrado abaixo:

Neste tutorial, estamos usando o **Seeed Studio XIAO nRF52840** com uma antena NFC recomendada pela Nordic para demonstração.

**Vista frontal:**

<!-- TODO: Photo of antenna soldered to XIAO (front) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-F.jpg" alt="Antenna soldered to XIAO front view" width={550} height="auto" /></p>

**Vista traseira:**

<!-- TODO: Photo of antenna soldered to XIAO (back) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-B.jpg" alt="Antenna soldered to XIAO back view" width={550} height="auto" /></p>

:::caution

- A antena NFC é um sinal diferencial e **não tem polaridade** — qualquer extremidade pode ir para D14 ou D15.
- Os dois pinos saem de fábrica no modo de antena NFC (UICR = `0xFFFFFFFF`) em **XIAO nRF52840** e **XIAO nRF52840 Sense**. Em **XIAO nRF52840 Plus** e **XIAO nRF52840 Sense Plus**, eles podem estar configurados como GPIO por padrão — verifique primeiro o UICR (consulte [Step 1](#step-1-check-uicr-pin-configuration)).
- Recomenda-se medir a resistência em corrente contínua entre os terminais da antena com um multímetro antes da soldagem (geralmente 1–3 Ω) para confirmar a continuidade e descartar curtos.

:::

### Sintonia da antena

O NFC depende de um circuito ressonante tanque LC. A bobina da antena fornece a indutância (L) e os capacitores de casamento fornecem a capacitância (C). Juntos, eles formam um circuito ressonante na frequência alvo:

```
f = 1 / (2π√(LC))
```

O alvo é **13,56 MHz**. Sem capacitores externos, apenas a capacitância parasita interna de ~4 pF do nRF52840 participa — o ponto de ressonância fica longe de 13,56 MHz. A função NFC ainda vai funcionar, mas a comunicação pode ser instável: pop-ups no celular podem mostrar "NFC tag detected" sem o conteúdo completo, e códigos de erro podem aparecer na saída serial. Adicionar capacitores de casamento leva o tanque LC à ressonância e melhora drasticamente a confiabilidade.

:::tip
Todas as operações abaixo são baseadas no documento **[Nordic Official NFC Antenna Design](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**. O chip entrega potência total apenas quando enxerga uma **carga diferencial de 100 Ω em ressonância**.
:::

#### Parâmetros Fixos

<div class="table-center">
  <table align="center">
    <tr>
        <th>Item</th>
        <th>Valor Fixo</th>
        <th>Fonte</th>
    </tr>
    <tr>
        <td>Frequência de operação f</td>
        <td>13,56 MHz</td>
        <td>Padrão NFC global, codificado em hardware no nRF52840</td>
    </tr>
    <tr>
        <td>Impedância de carga</td>
        <td>100 Ω (diferencial)</td>
        <td>White paper da Nordic nWP_026</td>
    </tr>
  </table>
</div>

#### Medições Necessárias

- **Indutância da bobina L** — meça com um multímetro, medidor LCR ou VNA a 100 kHz, valor em µH.
- **Resistência de perda da bobina R** — leia a resistência em série na mesma tela, em Ω.

#### Etapa 1: Pré-verificação de Impedância

Usando a fórmula de transformação de impedância:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="Impedance formula" width={250} height="auto" /></p>

Alvo: **90–120 Ω**, quanto mais próximo de 100 Ω melhor.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Resultado</th>
        <th>Significado</th>
        <th>Próxima Etapa</th>
    </tr>
    <tr>
        <td>&lt; 60 Ω</td>
        <td>Antena muito pequena</td>
        <td>Adicione espiras ou aumente a área da bobina</td>
    </tr>
    <tr>
        <td>90 – 120 Ω</td>
        <td><strong>APROVADO</strong></td>
        <td>Vá para a Etapa 2</td>
    </tr>
    <tr>
        <td>&gt; 150 Ω</td>
        <td>Antena muito grande</td>
        <td>Remova espiras ou reduza a área da bobina</td>
    </tr>
  </table>
</div>

> Só depois de passar por este filtro é que você calcula os capacitores; caso contrário, qualquer valor de capacitor é inútil.

#### Etapa 2: Calcular a Capacitância de Ressonância

Fórmula com 13,56 MHz fixos:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="Capacitance formula" width={250} height="auto" /></p>

Isso fornece a **capacitância total** necessária. Para uma rede π, divida igualmente:

**C1 = C2 = C / 2**

Escolha o valor E12 mais próximo (por exemplo, 39 pF, 47 pF, 56 pF, 68 pF …).

#### Antena Recomendada

Se você não tiver um medidor LCR e preferir um ponto de partida conhecido, uma antena de bobina NFC padrão de 13,56 MHz funciona bem com o XIAO nRF52840. Abaixo está a antena que usamos durante os testes:

<!-- Antenna photo: see Hardware Connection section (NRF52840NFC-final-output-successfully.jpg) -->

<div class="table-center">
  <table align="center">
    <tr>
        <th>Parâmetro</th>
        <th>Valor</th>
    </tr>
    <tr>
        <td>Tipo</td>
        <td>Bobina NFC de 13,56 MHz</td>
    </tr>
    <tr>
        <td>Resistência CC</td>
        <td>~2,3 Ω</td>
    </tr>
    <tr>
        <td>Conexão</td>
        <td>Solde diretamente em NFC1 / NFC2</td>
    </tr>
  </table>
</div>

:::note
A antena mostrada acima não é um produto da Seeed Studio. Você pode usar qualquer antena de bobina NFC de 13,56 MHz com especificações semelhantes. O ponto-chave é medir a indutância e calcular o valor do capacitor de casamento usando as fórmulas acima.
:::

## Configuração NFC & Exemplos

O fluxo de trabalho a seguir primeiro verifica a configuração de hardware NFC e depois orienta você na criação da sua própria tag NFC. Usamos a biblioteca **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)**, que encapsula o periférico NFCT do nRF52840 em uma API Arduino simples.

A biblioteca inclui seis sketches de exemplo:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Categoria</th>
        <th>Sketch de Exemplo</th>
        <th>Finalidade</th>
    </tr>
    <tr>
        <td rowspan="2"><strong>Verificação</strong></td>
        <td><code>xiao-nrf52840-nfc-probe</code></td>
        <td>Verificar configuração de pinos UICR + verificar link RF</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-restore-uicr</code></td>
        <td>Restaurar pinos NFC se eles tiverem sido alterados para GPIO</td>
    </tr>
    <tr>
        <td rowspan="1"><strong>Correção Plus</strong></td>
        <td><code>xiao-nrf52840-plus-bootloader-verify</code></td>
        <td>Verificar o bootloader nas variantes Plus antes de restaurar o UICR</td>
    </tr>
    <tr>
        <td rowspan="3"><strong>Demo</strong></td>
        <td><code>xiao-nrf52840-nfc-tag-readonly</code></td>
        <td>Tag Somente Leitura — o celular lê uma URL fixa</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-writable</code></td>
        <td>Tag Gravável — o celular pode gravar dados na tag</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-persistent</code></td>
        <td>Tag Persistente — os dados sobrevivem a ciclos de energia (armazenados em Flash)</td>
    </tr>
  </table>
</div>

### Etapa 1: Verificar Configuração de Pinos UICR

**Finalidade**: Confirmar que P0.09/P0.10 estão configurados como pinos de antena NFC.

Abra **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-probe** e faça o upload para sua placa. (As Etapas 1 e 2 usam o mesmo sketch — um único upload faz as duas.)

Abra o Serial Monitor em **115200 baud**. As primeiras linhas mostram o status atual do UICR:

<!-- TODO: Screenshot of Serial Monitor showing UICR check PASS -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result.png" style={{width:1000, height:'auto'}}/></div>

**Como interpretar a saída:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Valor UICR</th>
        <th>Significado</th>
        <th>Ação</th>
    </tr>
    <tr>
        <td><code>0xFFFFFFFF</code></td>
        <td>Modo de antena NFC ✅</td>
        <td>Prossiga para a Etapa 2</td>
    </tr>
    <tr>
        <td><code>0xFFFFFFFE</code></td>
        <td>Modo GPIO ❌</td>
        <td>Faça upload de <code>xiao-nrf52840-plus-bootloader-verify</code> primeiro (variantes Plus), depois faça upload de <code>xiao-nrf52840-nfc-restore-uicr</code>, envie <code>RESTORE_NFC</code> no Serial Monitor, confirme <code>Verify result: PASS</code> e então desligue e ligue a placa</td>
    </tr>
  </table>
</div>

:::note
**XIAO nRF52840** e **XIAO nRF52840 Sense** saem de fábrica com UICR = `0xFFFFFFFF` (modo NFC). Na maioria dos casos, esta etapa é aprovada e nenhuma ação é necessária. **XIAO nRF52840 Plus** e **XIAO nRF52840 Sense Plus** podem sair em modo GPIO — se a saída mostrar `0xFFFFFFFE`, siga a ação de restauração abaixo.
:::

### Etapa 2: Probe — Verificar o Link RF

**Finalidade**: Confirmar que quadros de comando NFC do celular conseguem alcançar a placa.

Após a verificação do UICR, o mesmo sketch entra automaticamente no **modo Probe**. Nesse modo, a tag **não** responde a nenhum quadro — ela apenas escuta. Isso isola a direção de recepção, facilitando a confirmação de que o link RF está ativo.

Coloque a área NFC do seu celular próxima à antena por alguns segundos e então verifique a saída do Serial Monitor:

<!-- TODO: Screenshot of Serial Monitor showing Probe results with phone -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result-with-phone.png" style={{width:800, height:'auto'}}/></div>

**Indicadores principais:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Contador</th>
        <th>Significado</th>
        <th>Critério de Aprovação</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Campo RF de 13,56 MHz do celular detectado</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FIELD_LOST</code></td>
        <td>Campo RF desapareceu</td>
        <td>Próximo de FIELD_DETECT</td>
    </tr>
    <tr>
        <td><code>READER_FRAMES</code></td>
        <td>Quadros de comando NFC recebidos do celular</td>
        <td><strong>&gt; 0</strong> (crítico)</td>
    </tr>
  </table>
</div>

> `READER_FRAMES > 0` significa que os quadros de comando do celular chegaram com sucesso à placa e o link RF bidirecional está estabelecido. O celular **não** deve mostrar um pop-up neste estágio (o modo Probe não responde).

**Códigos de erro comuns:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Código de Erro</th>
        <th>Nome</th>
        <th>Significado</th>
    </tr>
    <tr>
        <td><code>0x01</code></td>
        <td><code>FRAMEDELAYTIMEOUT</code></td>
        <td>Tempo limite de atraso de quadro — a tag não recebeu o próximo comando dentro do intervalo esperado</td>
    </tr>
    <tr>
        <td><code>0x02</code></td>
        <td><code>NFCANTENNAERROR</code></td>
        <td>NFCT não consegue acionar a antena — geralmente causado por desajuste de impedância ou ausência de antena</td>
    </tr>
    <tr>
        <td><code>0x80</code></td>
        <td>Erro de recepção de quadro RX</td>
        <td>Quadro recebido, mas a verificação de CRC/paridade falhou (pode aparecer na etapa Somente Leitura)</td>
    </tr>
  </table>
</div>

## Demo 1: Tag Somente Leitura

**Finalidade**: Uma tag NFC simples que transmite uma URL fixa. O celular a lê e exibe um pop-up — o caso de uso NFC mais comum.

Abra **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-readonly** e faça o upload. Coloque seu celular sobre a antena por 2–3 segundos.

<!-- TODO: Screenshot of Serial Monitor showing Readonly results -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-readonly-output.png" style={{width:1000, height:'auto'}}/></div>

O celular deve exibir um pop-up contendo o link `https://seeedstudio.com`.

<!-- TODO: Photo of antenna soldered to XIAO + phone showing NFC pop-up -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-final-output-successfully.png" alt="Antena soldada e pop-up de NFC do telefone" width={300} height="auto" /></p>

**Indicadores principais:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Contador</th>
        <th>Significado</th>
        <th>Critério de aprovação</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Campo RF de 13,56 MHz do telefone detectado</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>Telefone concluiu o fluxo de anticolisão + handshake SELECT</td>
        <td><strong>&gt; 0</strong> (indicador principal)</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>Telefone leu com sucesso as páginas de dados NDEF</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>Número de requisições FAST_READ recebidas</td>
        <td>0 ou pequeno (normal)</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>Telefone enviou um comando não suportado</td>
        <td>Alguns são normais</td>
    </tr>
  </table>
</div>

> `SELECTED > 0` é o limite principal: o fluxo de anticolisão foi aprovado e o telefone reconheceu a Tag Tipo 2. `READ > 0` significa que as páginas NDEF foram realmente lidas. A verificação final é o telefone exibir o pop-up com a URL completa.
:::note
A URL é codificada diretamente no sketch. Para alterá-la, abra o sketch e modifique a mensagem NDEF, depois envie novamente. Os dados da tag são armazenados em RAM e serão perdidos após um ciclo de energia.
:::

## Demo 2: Tag Gravável

**Objetivo**: Uma tag NFC que o telefone pode tanto ler quanto gravar. A tag começa com uma URI padrão (`https://seeedstudio.com`), e o telefone pode sobrescrevê-la com novo conteúdo NDEF usando o app **NFC Tools**.

Abra **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-writable** e envie o sketch.

**Passos de teste:**

- **Passo 1.** Abra o Serial Monitor em **115200 baud**. O log de boot mostra a identidade da tag (NFCID1), o dump inicial da memória e a URI padrão (`https://seeedstudio.com`).

<!-- TODO: Screenshot of Serial Monitor showing Writable boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log.png" style={{width:1000, height:'auto'}}/></div>

O log de boot também imprime a URI padrão que a tag irá transmitir:

<!-- TODO: Screenshot of Serial Monitor showing default URI in boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log-of-URI.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 2.** Leia primeiro a tag com o seu telefone. O telefone deve detectar `https://seeedstudio.com`.

- **Passo 3.** Abra o **NFC Tools** (ou qualquer app de gravação NFC) e grave o conteúdo desejado na tag. Neste exemplo, gravamos um texto simples: `hello!`. Depois de inserir o conteúdo, clique em **"Write / XX Bytes"** — a contagem de bytes depende do tamanho do seu conteúdo.

<!-- TODO: Screenshot of NFC Tools write screen -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **Passo 4.** Leia a tag novamente. O telefone agora deve exibir o conteúdo recém-gravado (`hello!`).

<!-- TODO: Screenshot of phone showing written content -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-final-output.png" style={{width:300, height:'auto'}}/></div>

Depois que o telefone sai do campo NFC, o Serial Monitor mostra os indicadores principais atualizados, refletindo a sessão completa de leitura após gravação:

<!-- TODO: Screenshot of Serial Monitor showing key indicators after reading written tag -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-result-with-phone.png" style={{width:1000, height:'auto'}}/></div>

**Indicadores principais:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Contador</th>
        <th>Significado</th>
        <th>Critério de aprovação</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Campo RF de 13,56 MHz do telefone detectado</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>Telefone concluiu o fluxo de anticolisão + handshake SELECT</td>
        <td><strong>&gt; 0</strong> (indicador principal)</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>Telefone leu com sucesso as páginas de dados NDEF</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>WRITE</code></td>
        <td>Telefone gravou dados com sucesso na tag</td>
        <td><strong>&gt; 0</strong> (indicador principal)</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>Número de requisições FAST_READ recebidas</td>
        <td>0 ou pequeno (normal)</td>
    </tr>
    <tr>
        <td><code>WRITE_REJECTED</code></td>
        <td>Tentativas de gravação rejeitadas (páginas protegidas)</td>
        <td>0 (nunca deve ocorrer com apps padrão)</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>Telefone enviou um comando não suportado</td>
        <td>Alguns são normais</td>
    </tr>
  </table>
</div>

> `WRITE > 0` é o limite principal para a Tag Gravável: o telefone gravou dados com sucesso na tag. `WRITE_REJECTED` deve sempre ser `0` — se ele aumentar, algo deu errado durante a sessão de gravação.

:::note
Os dados gravados são armazenados apenas em **RAM** e serão perdidos após um ciclo de energia, restaurando a URI padrão — o que facilita testes repetidos de gravação. Para dados que precisam sobreviver a ciclos de energia, use o demo **Persistent Tag** abaixo.
:::

## Demo 3: Tag Persistente

**Objetivo**: Uma tag NFC cujos dados sobrevivem a ciclos de energia. O conteúdo NDEF é armazenado na memória Flash interna do nRF52840 (LittleFS), portanto persiste mesmo depois que a placa é desligada e ligada novamente — ideal para implantações de longo prazo.

Abra **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-persistent** e envie o sketch.

**Passos de teste:**

- **Passo 1.** No primeiro boot, abra o Serial Monitor em **115200 baud**. O log de boot mostra a URI padrão e `Storage state: no stored content, using default URI`.

<!-- TODO: Screenshot of Serial Monitor showing Persistent first boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-first.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 2.** Leia a tag com o seu telefone. No primeiro boot, o telefone detecta `https://seeedstudio.com`.

- **Passo 3.** Abra o **NFC Tools** (ou qualquer app de gravação NFC) e grave um novo registro de texto ou URL na tag. Neste exemplo, gravamos um texto simples: `hi!`. Depois de inserir o conteúdo, clique em **"Write / XX Bytes"** — a contagem de bytes depende do tamanho do seu conteúdo.

<!-- TODO: Screenshot of NFC Tools writing "hi!" -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **Passo 4.** Depois que o telefone sai do campo NFC, o Serial Monitor imprime `Storage: tag content saved to flash`, confirmando que o conteúdo foi gravado na Flash interna.

<!-- TODO: Screenshot of Serial Monitor showing saved to flash -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-saved-to-flash.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 5.** **Desligue e ligue a placa** — desconecte o cabo USB e conecte novamente.

- **Passo 6.** Após o reboot, o Serial Monitor imprime `Storage state: previous content restored from flash`, confirmando que o conteúdo gravado sobreviveu ao ciclo de energia.

<!-- TODO: Screenshot of Serial Monitor showing restored from flash after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-restored.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 7.** Leia a tag novamente com o seu telefone. O telefone deve exibir o conteúdo gravado no Passo 3 — mesmo após o ciclo de energia.

<!-- TODO: Screenshot of phone showing "hi!" after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-phone-hi-after-reboot.png" style={{width:300, height:'auto'}}/></div>

<!-- TODO: Screenshot of phone showing restored content after reboot + serial indicators -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-result-after-reboot.png" style={{width:1000, height:'auto'}}/></div>

**Indicadores principais:**

Os indicadores principais são os mesmos da Tag Gravável — consulte a [tabela da Tag Gravável](#demo-2-tag-gravável) para a lista completa.

> `Storage state: previous content restored from flash` no log de boot é a confirmação principal para a Tag Persistente: os dados sobreviveram ao ciclo de energia. `Storage: tag content saved to flash` confirma que cada gravação foi salva na Flash.

:::note
No Passo 7, o telefone apenas **lê** o conteúdo restaurado — ele não grava nada. Portanto, `WRITE` permanecerá `0` nos contadores, o que é esperado. Você só verá `WRITE > 0` durante a sessão de gravação anterior (Passos 3–4).
:::

:::note

- O conteúdo armazenado fica no **filesystem da Flash interna** (`/nfc-tag-data.bin`), separado da área do sketch — ele sobrevive a novos envios de sketch.
- Para restaurar a URI padrão a qualquer momento, envie `RESET_TAG` no Serial Monitor.
- A gravação na Flash acontece uma vez por sessão de gravação, depois que o telefone sai do campo. Se você remover o telefone cedo demais, o conteúdo pode ficar incompleto — basta gravar novamente para corrigir.

:::

:::tip
**Resumo dos três demos:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Demo</th>
        <th>Armazenamento de dados</th>
        <th>Sobrevive a ciclo de energia</th>
        <th>Gravável por telefone</th>
    </tr>
    <tr>
        <td>Tag somente leitura</td>
        <td>RAM</td>
        <td>❌</td>
        <td>❌</td>
    </tr>
    <tr>
        <td>Tag gravável</td>
        <td>RAM</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Tag persistente</td>
        <td>Flash</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
  </table>
</div>
:::

## Recursos

- **[GitHub]** [XIAO_nRF52840_NFC Library](https://github.com/limengdu/XIAO_nRF52840_NFC) — A biblioteca NFC de código aberto usada neste tutorial

## Agradecimentos especiais

Agradecimentos especiais a **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** pelos extensos testes em condições reais das antenas NFC (MOLEX 1462360051 e TAOGLAS FXR.07.A.DG) no XIAO nRF52840, e a **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso/summary)** pela orientação no cálculo de capacitores e solução de problemas de compatibilidade com iPhone.

Se você encontrar problemas de NFC não abordados aqui, talvez encontre dicas úteis no tópico original do fórum:

- [XIAO nRF52840 NFC Antenna Insights](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
