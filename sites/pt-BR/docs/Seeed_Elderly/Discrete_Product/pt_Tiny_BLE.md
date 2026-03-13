---
description: Tiny BLE
title: Tiny BLE
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Tiny_BLE
sku: 102080005
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Tiny_BLE/
---

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/BLE_Smurfs_Photo.png)

A Tiny BLE é uma placa de desenvolvimento Bluetooth Low Energy projetada com baixo consumo de energia e tamanho reduzido em mente. Ela é integrada com um recurso de medição de corrente para fornecer dados de consumo de energia em tempo real, o que é essencial para que desenvolvedores otimizem o software para projetar dispositivos com longa duração de bateria. Ela é compatível com o IDE baseado em nuvem ARM mbed, com um prático SDK em C/C++ e um grande número de bibliotecas open source, o que torna a prototipagem e o desenvolvimento extremamente fáceis.

|![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_interface.png) |![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_ble.png)
|---|---|

Com o seu design modular, podemos dividi-la em duas partes - parte de interface CMSIS DAP e parte BLE. A parte de interface CMSIS DAP é como um canivete suíço. Ela oferece programação drag-n-drop, depuração CMSIS DAP, porta serial virtual USB, medição de corrente e carregamento de bateria. A parte BLE é construída sobre o Nordic nRF51822 com rádio multiprotocolo Bluetooth Low Energy 2.4GHz e um núcleo ARM Cortex-M0 de 32 bits rodando a 16MHz. O MPU6050, um sensor de 6 DOF com acelerômetro 3D e giroscópio 3D, é integrado para fornecer função de detecção de movimento.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Tiny-BLE-BLE-%2B-6DOF-Mbed-Platform-p-2268.html)

## Recursos

---
- nRF51822: ARM Cortex-M0 + rádio 2.4GHz (BLE ou ANT+)

- MPU-6050: acelerômetro 3D + giroscópio 3D

- LPC11U35FHI33: CMSIS DAP

- Medição de corrente

- CN3065: porta de carregamento de bateria na parte USB

- Alimentação: USB/bateria (3,5–4,2V)
- Tensão de saída: 3,3V

- 4 I/Os, todas podem ser usadas como entrada analógica, entrada/saída digital, I2C, SPI ou UART

- Controle de saída VCC

## Especificação

---
<table>
<tr>
<th>Especificação</th>
<th>Valor</th>
</tr>
<tr>
<td width="200px">Microcontrolador</td>
<td width="400px">nRF51822QFAA; LPC11U35FHI33</td>
</tr>
<tr>
<td>Dimensão externa</td>
<td>43.3mm x 29.0mm x 4.3mm</td>
</tr>
<tr>
<td>Alimentação</td>
<td>USB/Bateria (Suporte de bateria JST-1.0)</td>
</tr>
</table>

## Primeiros passos

---
![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Get_started_with_mbed.png)

1. Clique [neste link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE) para **fazer login ou se cadastrar no mbed**

2. [Importe o programa mbed_blinky](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE) e altere o código do main.cpp como a seguir.

3. Clique no ícone **Compile** na barra de ferramentas superior para compilar o programa e, em seguida, baixe o arquivo hex compilado.

4. Arraste e solte o arquivo hex baixado no disco MBED

5. Um LED azul começará a piscar.

```
#include "mbed.h"

DigitalOut red(p22);           // RED LED
DigitalOut green(p21);         // GREEN LED
DigitalOut blue(p23);          // BLUE LED

int main()
{
    while (true) {
        blue = !blue;
        wait(0.1);
    }
}
```

O programa [Seeed_Tiny_BLE_Get_Started](http://developer.mbed.org/teams/Seeed/code/Seeed_Tiny_BLE_Get_Started/) inclui detecção de movimentos, botão e nível de bateria. É uma boa referência para começar.

### Depuração

Para habilitar a depuração SWD e obter mensagens de depuração por meio da serial virtual USB, instale [o driver do mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

### Monitoramento de energia

Alterar a taxa de baud da porta serial virtual USB para 4000000+ acionará a medição de corrente. Nós desenvolvemos uma ferramenta - Tiny BLE MONITOR para que você obtenha facilmente as informações de consumo de energia.

- [Tiny BLE MONITOR para Windows](http://tangram.qiniudn.com/ble_smurfs_monitor_v0.1.exe)

- [Tiny BLE MONITOR para Linux/Mac OS](https://github.com/Seeed-Studio/Tiny_BLE/tree/master/utils), requisito adicional: pyqtgraph

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_monitor_preview.png)

### Atualizar ou restaurar o firmware

A versão mais recente de firmware para a Arch BLE é a v0221 compilada em 06 de fevereiro de 2015. Para verificar a versão do firmware e a data de compilação, abra o MBED.HTM ou DETAILS.TXT do seu disco MBED em um editor de texto.

Registro de mudanças:

- 2015-02-07 correção de problema no Mac OS X 10.10

Firmware:

- [firmware de interface mais recente v221 2015-02-06](https://github.com/Seeed-Studio/Tiny_BLE/raw/master/seeed_tiny_ble_interface_latest.bin)

### Over-The-Air

Personalizamos um bootloader DFU para que você atualize sua aplicação via Over-The-Air (OTA). Ele está em [github.com/Seeed-Studio/nrf51_dfu_bootloader](https://github.com/Seeed-Studio/nrf51_dfu_bootloader). Veja também [mbed.org FOTA](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates)

## Visualizador online de esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recurso

---
- [Arquivo eagle Tiny BLE V1.0](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip)

- [Tiny BLE V1.0.pdf](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0_PDF.pdf)

- [Recursos no github](https://github.com/Seeed-Studio/Tiny_BLE)

- [peça frizting](https://github.com/Seeed-Studio/Tiny_BLE/blob/master/tiny_ble.fzpz)

- [Biblioteca MPU6050](http://developer.mbed.org/teams/Seeed/code/eMPL_MPU6050/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
