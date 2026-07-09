---
description: O design de referência do Wio-LR2021
title: Guia de Design de PCB do Wio-LR2021
keywords:
  - Wio-LR2021
  - LoRa
  - LR2021
  - Semtech
  - Sub-GHz
  - 2.4GHz
  - LoRaWAN
  - BLE 5.0
  - Transceptor
  - Wio
image: https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg
slug: /wio_lr2021_pcb_design_guide
sku: 100058045
sidebar_position: 2
last_update:
  date: 06/03/2026
  author: David Du
createdAt: '2026-06-03'
updatedAt: '2026-06-03'
url: https://wiki.seeedstudio.com/pt-br/wio_lr2021_pcb_design_guide/
---

## 1. Camadas

Para maximizar o espaço disponível para o layout de RF da PCB, recomendamos usar um empilhamento de PCB com quatro ou mais camadas, especialmente em aplicações com roteamento denso.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/4layer_2layer_PCB_stack.png" style={{width:900, height:'auto'}}/></div></td>

- Para PCBs de **4 camadas**, a camada de cobre imediatamente abaixo da área de RF deve ser designada como plano de terra. O plano de terra deve ser totalmente preenchido com cobre para garantir a continuidade do plano de referência.

- Para PCBs de **2 camadas**, garanta que o plano de terra sob toda a área de RF permaneça intacto sempre que possível, e minimize quaisquer cortes ou divisões no plano de terra sob a trilha e os componentes de RF para manter a integridade do caminho de retorno de corrente.

## 2. Projeto de uma linha de transmissão de RF de 50Ω

Garantir que a impedância característica da linha de transmissão de RF seja de 50Ω é a chave para o projeto de layout de RF. Aqui, usamos uma estrutura de **Guia de Onda Coplanar Aterrada (GCPW)** para o projeto da trilha de RF.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/microstrip_GCPW.png" style={{width:900, height:'auto'}}/></div></td>

<br />

Para obter uma impedância característica de 50Ω para uma linha de RF usando uma estrutura GCPW, os cinco parâmetros‑chave a seguir devem ser determinados:

|Symbol|Description|
|---|---|
|S|Spacing between the signal line and the adjacent ground line|
|W|Signal line width|
|T|Copper thickness of the conductor|
|H|Dielectric layer thickness (distance from the signal layer to the reference ground plane)|
|εr|Relative permittivity of the dielectric material|

:::note
1. A largura da linha de sinal **W** deve permanecer consistente em todo o caminho de RF e não pode mudar abruptamente.

2. **W** deve corresponder o mais próximo possível à largura do pad do componente
Se as condições permitirem, recomenda‑se projetar **W** para ser igual à largura do pad dos componentes de RF usados, a fim de minimizar descontinuidades de impedância (embora isso nem sempre seja viável).

3. Use software de cálculo gratuito para ajudar a determinar a impedância de 50Ω
Ferramentas gratuitas de cálculo de impedância (como [**AppCAD**](http://www.hp.woodshot.com), [**Saturn PCB Toolkit**](https://saturnpcb.com/saturn-pcb-toolkit/) ou a calculadora de impedância no [**KiCad**](https://www.kicad.org/)) podem ser usadas para otimizar os parâmetros acima, garantindo que a impedância característica das linhas de RF no projeto da PCB corresponda precisamente a 50Ω.
:::

Aqui, usaremos como exemplo um **substrato FR4 padrão de 0,1mm de espessura** com **revestimento de cobre de 1oz** para calcular o GCPW (guia de onda coplanar aterrado) para uma impedância de 50Ω：

|Parameter|Value(mm)|Remark|
|---|---|---|
|S|0.199|Signal line spacing|
|**W**|**0.190**|RF signal line width|
|T|0.035 (1oz)|Copper thickness|
|H|0.1|Dielectric thickness|

:::tip Why choose GCPW
1. **Redução de diafonia e EMI** – Em comparação com linhas microstrip convencionais ou guias de onda coplanares sem terra, o plano de terra em ambos os lados e abaixo da linha de sinal suprime efetivamente a diafonia entre trilhas adjacentes ou entre camadas, reduzindo assim a interferência eletromagnética (EMI). Isso torna o GCPW particularmente adequado para roteamento de RF em PCBs de alta densidade e multicamadas.

2. **Melhor confinamento do campo eletromagnético** – A estrutura, na qual planos de terra são colocados adjacentes à linha de sinal, confina significativamente o campo eletromagnético. Isso reduz a quantidade de energia de sinal de alta frequência irradiada para o espaço ao redor, ajudando a atender aos requisitos de compatibilidade eletromagnética (EMC).

3. **Melhor estabilidade e tolerância de impedância** – Em uma estrutura GCPW, os caminhos de retorno de sinal utilizam principalmente os planos de terra em ambos os lados, em vez de depender apenas do plano de terra de referência abaixo. Como resultado, o GCPW oferece maior tolerância a variações de fabricação na espessura da placa (H) e fornece uma impedância de 50Ω mais estável.
:::

## 3. Diretrizes de Roteamento de RF

### 1. Restrições geométricas

#### 1.1. Continuidade em camada única

**Camada superior em todo o percurso** – Desde os pads dos pinos de RF do módulo até o suporte da antena, rede de casamento ou ponto de alimentação da antena, a trilha de RF deve ser roteada inteiramente em uma única camada.

**Sem vias de troca de camada** – O uso de vias para trocar de camada é proibido. Vias introduzem descontinuidades indutivas (tipicamente 0,5–1,5nH), o que pode causar saltos significativos de impedância e piora do retorno de perda.

:::note
Se uma troca de camada for inevitável (não recomendado e apenas sob restrições extremas de espaço), o seguinte deve ser observado:

Coloque uma matriz coplanar de vias de GND (pelo menos quatro vias, distribuídas simetricamente ao redor da via de sinal) no ponto de transição de camada.
:::

#### 1.2. Largura constante da trilha

A **largura da trilha (W)** e os **espaços (S)** em ambos os lados devem permanecer constantes ao longo da seção de impedância característica de 50Ω, desde os pinos de RF do módulo até a porta da antena.

#### 1.3. Minimizar o comprimento da trilha

**Bandas Sub‑GHz (433/868/915 MHz):** Recomenda‑se que o comprimento total das trilhas de RF seja ≤ 20 mm. Ultrapassar esse comprimento resulta em um aumento significativo na perda da linha de transmissão e na radiação parasita.

**Banda de 2,4 GHz:** Recomendado ≤ `30 mm`. Se excedido, o orçamento de perda da rede de casamento deve ser reavaliado.

:::note
O comprimento total inclui a trilha desde a saída do pad do pino do módulo, passando pela rede de casamento até o pino central do conector da antena, excluindo o interior do conector da antena e o próprio corpo da antena.
:::

#### 1.4. Regras de curvatura

- Ângulos retos de 90° são proibidos.
- O raio da curva deve ser de pelo menos **três vezes** a largura da trilha (W), sendo ≥ 5W o ideal. Curvas arredondadas proporcionam a transição de impedância mais suave em faixas de frequência abaixo de ondas milimétricas.
- Em uma única trilha de RF, o número de curvas não deve ser superior a duas.

### 2. Aterramento, blindagem e costura com vias

#### 2.1. Espaçamento entre vias

Ao longo de ambos os lados da trilha de RF, vias de GND são usadas para curto‑circuitar o GND coplanar da camada superior ao plano de terra interno, formando uma parede de blindagem eletromagnética. O espaçamento entre vias (D) é determinado pelo comprimento de onda:   **D ≤ λ / 20**

|Operating Band|Center Frequency|λ/20 (Theoretical Value)|Recommended Spacing|
|---|---|---|---|
|EU868|868 MHz|17.3 mm|≤5 mm|
|US915|915 MHz|16.4 mm|≤5 mm|
|AS923|923 MHz|16.3 mm|≤5 mm|
|2.4GHz|2400 MHz|6.25 mm|≤3 mm|

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/via_spacing.png" width="300" alt="appearance" />
</div>

<br />

:::note
O espaçamento entre vias usado no projeto é significativamente menor que o valor teórico, a fim de suprimir harmônicos de ordem superior e vazamento de campo nas bordas.
:::

#### 2.2. Arranjo de vias

- Recomenda‑se **arranjo em duas fileiras defasadas** – Coloque uma fileira de vias de GND em cada lado da trilha de RF. As duas fileiras devem ser defasadas, e não diretamente opostas, para bloquear de forma mais eficaz o efeito de antena de fenda.

- As vias devem ser colocadas adjacentes à borda da trilha de RF, com uma distância de ≤ `0.3 mm` (ou seja, as vias devem ser posicionadas na borda da camada de cobre de GND).

- Diâmetro de via recomendado **(0.2–0.3mm)**, para evitar corte excessivo da camada de cobre de GND da camada superior que pode resultar de vias muito grandes.

#### 2.3. Costura nas bordas

Vias de costura de GND densas devem ser colocadas ao longo das bordas da PCB (especialmente aquelas que contêm regiões de RF) para evitar que as bordas da placa atuem como caminhos de radiação parasita.

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/staggered_arrangement.png" width="800" alt="appearance" />
</div>

<br />

### 3. Planos de referência e restrições de empilhamento

#### 3.1. Integridade do plano de GND subjacente

A camada imediatamente abaixo da trilha de RF (Camada 2 em uma placa de 4 camadas, ou a camada inferior em uma placa de 2 camadas) deve ser um plano de GND completo e sem cortes.

#### 3.2. Requisitos de terra coplanar

Cobre de GND coplanar deve ser mantido em ambos os lados da trilha de RF. As bordas de GND devem ser retas e contínuas, sem bordas irregulares ou lacunas.

A largura do GND coplanar (F) deve satisfazer: **F > W + G**, onde W é a largura da trilha e G é o espaço entre a trilha e o GND. Se F for muito pequeno, a distribuição de campo se deslocará para a camada inferior, causando uma mudança na constante dielétrica efetiva e um desvio da impedância de 50Ω.

#### 3.3. Isolamento entre camadas

Em uma placa de 4 camadas, ilhas de alimentação na Camada 3 (a camada de alimentação) não devem ser colocadas diretamente sob a trilha de RF e sobrepostas à Camada 2. Se a Camada 3 precisar passar sob a trilha de RF, garanta que ela cruze a trilha de RF perpendicularmente (para minimizar o comprimento de acoplamento) e mantenha isolamento de terra completo entre a Camada 2 e a Camada 3.

### 4. Componentes em derivação e redes de casamento

#### 4.1. Layout em linha

- Todos os componentes em derivação devem ser colocados diretamente em série com a trilha de RF. Isso significa que o lado longo do pad do componente se alinha com a direção da trilha de RF, e o corpo do componente “fica deitado” dentro do caminho de RF.

- Ramificações verticais que se estendem da trilha de RF para conectar a componentes em derivação são proibidas. Ramificações verticais atuam como derivadores em circuito aberto; em 868 MHz, mesmo uma derivação de 5 mm pode causar reflexões significativas.

#### 4.2. Vias de terra

- Os pads de terra dos componentes em derivação devem ser conectados à Camada 2 por pelo menos `três` vias de GND, colocadas o mais próximo possível do pad.

- As vias devem estar localizadas próximas à borda do pad e dispostas em padrão triangular ou linear para garantir o caminho de terra mais curto e simétrico possível.

- Não faça furos de vias diretamente no centro do pad do componente. Vias centrais obstruem o fluxo da pasta de solda durante o refluxo SMT, levando a soldas frias, e também aumentam a indutância parasita.

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/matching_network.png" width="300" alt="appearance" />
</div>

<br />

#### 4.3. Orientação e espaçamento dos componentes

- Múltiplos componentes shunt dentro da mesma rede de adaptação devem ser organizados sequencialmente ao longo da direção da trilha de RF para evitar o acoplamento mútuo causado pelo posicionamento lado a lado.

- O espaçamento recomendado entre componentes shunt adjacentes é ≥ 1,5× o comprimento do componente (aproximadamente ≥ `1.0 mm` para encapsulamentos 0402).

### 5. Isolamento e espaçamento

#### 5.1. Isolamento de sinais digitais/de alimentação

- Espaçamento paralelo – O espaçamento entre trilhas de RF e trilhas digitais ou de alimentação adjacentes deve ser de pelo menos `three` vezes a largura da trilha (ou ≥ 1 mm, o que for maior).

- Limite de comprimento paralelo – Se o espaçamento for menor que `3 mm`, o comprimento das trilhas paralelas deve ser ≤ `10 mm`. Se esse comprimento for excedido, uma faixa de isolamento de GND (ilha de cobre de GND com largura ≥ 1 mm e via stitching) deve ser adicionada.

- Cruzamentos verticais – Quando trilhas de RF cruzarem outras trilhas de sinal, priorize o cruzamento perpendicular. O GND da Camada 2 deve permanecer contínuo sob o ponto de cruzamento.

#### 5.2. Isolamento de fontes de interferência de alta frequência

As trilhas de RF e as áreas da antena devem ser mantidas afastadas de:
- Trilhas de clock de alta velocidade (USB, SPI CLK, SDIO)
- Indutores e nós de comutação (SW) de conversores DC‑DC buck
- Osciladores de cristal / TCXOs (mesmo que um TCXO esteja integrado em um módulo, outros osciladores de cristal na placa ainda devem ser mantidos à distância)

Folgas mínimas recomendadas:
- De indutores de DC‑DC: ≥ 20 mm
- De linhas diferenciais USB: ≥ 10 mm
- De osciladores de cristal de 32 MHz: ≥ 15 mm

## 4. Projeto de referência

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/Reference-Design-2.png" style={{width:900, height:'auto'}}/></div></td>

<br />

:::note
1. Posicione `C1 (10uF)` e `C2 (100nF)` o mais próximo possível do pino `VCC_IN`. Um posicionamento inadequado degradará o desempenho de RF e poderá causar emissões espúrias.

2. Instale resistores em série de `470Ω` em todas as **linhas SPI** (NSS, SCK, MOSI, MISO), posicionados o mais próximo possível do módulo para supressão de harmônicos de alta frequência. O módulo não suporta modo de quadro contínuo — NSS deve ser alternado entre comandos com tempo em nível HIGH mínimo de 125ns.
:::

### Interface de RF (SubG_RF / 2.4G_RF)
O módulo fornece dois pinos de saída de RF independentes, um para a faixa de **Sub‑GHz** e outro para a faixa de **2.4GHz**. O casamento de impedância interno de **50Ω** foi implementado para ambos os caminhos de RF. Recomendamos usar conectores padrão `IPEX1` ou `SMA` como interfaces de antena.


<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/IPEX1_connector.png" width="300" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/SMA_connector.png" width="300" alt="appearance" />
</div>

<br />


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
