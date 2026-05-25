---
description: Uso de NFC para XIAO nRF52840 (Sense)
title: Uso de NFC para ambas as versões
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/31/2023
  author: Matthew
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-NFC-Usage/
---

# Uso de NFC no Seeed Studio XIAO nRF52840 (Sense)

<!-- :::note
The NFC function for Seeed Studio XIAO nRF52840 board is temportorily not functioning. The new wiki will be updated as soon as possible, once the new NFC library comes out.
::: -->

:::note
As versões Seeed nRF52 Boards 1.1.3 e Seeed nRF52 mbed-enabled Boards 2.9.2 foram testadas e aprovadas.
:::

Tanto o **Seeed Studio XIAO nRF52840** quanto o **Seeed Studio XIAO nRF52840 Sense** vêm equipados com um **módulo NFC (Near Field Communication)**. Este wiki ajudará você a começar a usar NFC nessas placas. Aqui vamos demonstrar um exemplo básico em que enviamos uma string de texto da placa para o telefone após aproximar o telefone da antena NFC.

## Trabalho preparatório

> A função NFC terá um bom desempenho quando usarmos a "Seeed nRF52 mbed-enabled Boards Library".

Para instalação das bibliotecas da placa, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a instalação. Se você já instalou, podemos seguir em frente e continuar com o projeto.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## Hardware necessário

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) ou [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x antena NFC
- 1 x cabo USB tipo C
- 1 x smartphone

## Software necessário

- [Aplicativo NFC TagInfo (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [Aplicativo NFC TagInfo (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## Conexão de hardware e visão geral

Solde a antena NFC ao Seeed Studio XIAO nRF52840 (Sense) da seguinte forma:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3(1).png" alt="pir" width={550} height="auto" /></p>

- **Natureza**: portas diferenciais acionadas por corrente de 13,56 MHz do nRF52840 (NFC1 = P0.09, NFC2 = P0.10); devem ser usadas em par.
- **Diferença**: apenas fase oposta; nenhuma função separada. A inversão é possível, mas inverte o UID.
- **Cuidado**: pinos expostos, sem ESD/TVS. Use uma pulseira antiestática antes de soldar, ambas as ilhas são obrigatórias, nunca use como GPIO.

## Enviar uma string de texto com NFC

- **Passo 1.** Abra a IDE Arduino e faça upload dos códigos a seguir

```cpp
#include <NFCT.h>

void setup() { 
  // set the NFC message as first parameter and the language code as second
  NFC.setTXTmessage("Hello World!", "en");
  // start the NFC module
  NFC.start();
}

void loop() {
}

```

Aqui simplesmente enviamos a string de texto "Hello World!"

- **Passo 2.** Abra o aplicativo móvel "NFC TagInfo" e clique em **Scan & Launch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **Passo 3.** Aproxime a antena NFC do telefone e você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>

## Sintonia da antena


  Todas as operações descritas abaixo são baseadas na lógica central deste documento.**[Nordic Official NFC Antenna Design](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**
 - A portadora NFC é fixa em 13,56 MHz; o chip fornece potência total somente quando vê uma **carga diferencial de 100 Ω em ressonância**.

- Sintonia = usar dois capacitores para obter **ressonância e transformação de impedância** simultaneamente, de modo que a bobina apresente **exatamente 100 Ω**.

**1.Três números que “nunca mudam”**

| Item | Valor fixo | Fonte |
|---|---|---|
| Frequência de operação f | 13,56 MHz | Padrão NFC global, codificado por hardware no nRF52840 |
| Carga que o chip deseja ver | 100 Ω (diferencial) | White paper da Nordic nWP_026 |

**2.Duas grandezas a serem medidas**

   **Indutância da bobina L** – meça com DMM / medidor LCR / VNA a 100 kHz, valor em µH.

   **Resistência de perdas da bobina R** – leia a resistência em série na mesma tela, em Ω (fio mais grosso e área maior → R menor).

**3  Pré-verificação: o tamanho da bobina está OK?**
Usando a fórmula de transformação de impedância:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="pir" width={250} height="auto" /></p>

Alvo: 90–120 Ω, quanto mais próximo de 100 Ω melhor.

| Resultado | Significado | Próxima etapa |
|---|---|---|
| < 60 Ω | Antena “muito pequena” | Adicionar espiras ou ampliar a área |
| 90 – 120 Ω | **APROVADO** | Vá para a Etapa 4 |
| > 150 Ω | Antena “muito grande” | Remover espiras ou reduzir a área |

> Só depois de passar por esse critério você deve calcular os capacitores; caso contrário, qualquer valor de capacitor é inútil.

**4  Calcular a capacitância de ressonância C**

Fórmula com 13,56 MHz fixos:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="pir" width={250} height="auto" /></p>


→ Fornece a **capacitância total**; para rede π divida igualmente:

**C1 = C2 = C / 2**  
Escolha o valor E12 mais próximo (39 pF, 47 pF, 56 pF, 68 pF …).

