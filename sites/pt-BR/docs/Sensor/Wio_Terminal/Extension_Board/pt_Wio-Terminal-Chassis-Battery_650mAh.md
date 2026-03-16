---
description: Wio Terminal Chassis Battery(650mAh)
title: Wio Terminal Chassis Battery(650mAh)
keywords:
  - Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Chassis-Battery_650mAh
sku: 103990463, 103990564
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Chassis-Battery_650mAh/
---

![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

O Wio Terminal Battery Chassis é uma placa de extensão indispensável para a Dev Board [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html), pois fornece uma fonte de alimentação externa para o Wio Terminal, aumentando sua portabilidade e compacidade. Ele possui **uma bateria recarregável de polímero de lítio de 650mAH, LED de status de carga/descarga da bateria, 4 portas Grove analógicas/digitais, 1 porta Grove I2C e 1 porta Grove UART, além do gabinete em ABS para estética e proteção.** Há também o mesmo GPIO compatível com o conector de 40 pinos do Raspberry Pi na parte de trás do Wio Terminal Battery Chassis para mais expansões!

A nova versão do Wio Terminal Battery Chassis adicionou o **[BQ27441-G1A](http://www.ti.com/product/BQ27441-G1) da Texas Instruments** – medidor de carga auto‑calibrável baseado em I2C para baterias de polímero de lítio (LiPo), que pode ser usado para medir a tensão da sua bateria para estimar sua porcentagem de carga e capacidade restante!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong></a>
</div>

## **Recurso**

- Bateria de polímero de lítio recarregável de 650mAh embutida
- LED de status de carga/descarga da bateria
- Botão Liga/Desliga da bateria
- Medidor de carga BQ27441-G1A embutido para baterias LiPo
- Carregamento USB Tipo C
- Proteção contra sobrecorrente
- Modo/proteção Hiccup
- 4 x portas Grove analógicas/digitais
- 1 x porta Grove I2C
- 1 x porta Grove UART
- Ímãs ficam ocultos dentro do gabinete para que possa ser fixado no quadro branco!

## **Especificação**

<!-- <style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-pu0z{background-color:#9b9b9b;border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style> -->

<table className="tg">
  <thead>
    <tr><th className="tg-pu0z">Item</th><th className="tg-pu0z">Detalhe</th></tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-fymr">Fonte de alimentação</td>
      <td className="tg-0pky">4.75V - 5.25V</td>
    </tr>
    <tr>
      <td className="tg-1wig">Bateria embutida</td>
      <td className="tg-0lax">650mAh</td>
    </tr>
    <tr>
      <td className="tg-1wig">Corrente de carga</td>
      <td className="tg-0lax">Máx.: 660mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Modo da placa de bateria</td>
      <td className="tg-0lax">LED verde: aceso significa que a placa está carregando.<br /><br />LED vermelho: aceso significa que o OTG (descarga da bateria) está habilitado.<br /><br />LED amarelo: aceso significa que a interface macho está fornecendo/recebendo saída/entrada de 5V.</td>
    </tr>
    <tr>
      <td className="tg-1wig">Saída GPIO</td>
      <td className="tg-0lax">Tensão máx.: 5.15V <br /><br />Corrente máx.: 380mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Corrente de carga de flutuação</td>
      <td className="tg-0lax">30mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Interface Grove</td>
      <td className="tg-0lax">Grove analógico/digital *4, Grove I2C* 1, Grove UART * 1</td>
    </tr>
  </tbody>
</table>

## **Visão geral do hardware**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png"/></div>

## **Precauções**

- Se a bateria for removida enquanto a placa estiver no modo de carregamento, a placa entrará em modo de falha e a luz verde piscará na frequência de 1Hz.

- Quando a placa de bateria não estiver em uso, pressione o botão para entrar no modo de espera e todos os LEDs serão desligados.

## **Detecção do status da bateria LiPo**

1. Visite o repositório [SparkFun_BQ27441_Arduino_Library](https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `SparkFun_BQ27441_Arduino_Library` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### **Código de exemplo**

Você pode usar o código a seguir para ler o status do seu battery chassis.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif"/></div>

```cpp
#include <SparkFunBQ27441.h>
#include"TFT_eSPI.h"

TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
#define FF17 &FreeSans9pt7b

const unsigned int BATTERY_CAPACITY = 650; // Set Wio Terminal Battery's Capacity 

void setupBQ27441(void)
{
  // Use lipo.begin() to initialize the BQ27441-G1A and confirm that it's
  // connected and communicating.
  if (!lipo.begin()) // begin() will return true if communication is successful
  {
  // If communication fails, print an error message and loop forever.
    Serial.println("Error: Unable to communicate with BQ27441.");
    Serial.println("  Check wiring and try again.");
    Serial.println("  (Battery must be plugged into Battery Babysitter!)");
    tft.setTextColor(TFT_RED);
    tft.setCursor((320 - tft.textWidth("Battery Not Initialised!"))/2, 120);
    tft.print("Battery Not Initialised!");
    while (1) ;
  }
  Serial.println("Connected to BQ27441!");

  // Uset lipo.setCapacity(BATTERY_CAPACITY) to set the design capacity
  // of your battery.
  lipo.setCapacity(BATTERY_CAPACITY);
}

void printBatteryStats()
{
  // Read battery stats from the BQ27441-G1A
  unsigned int soc = lipo.soc();  // Read state-of-charge (%)
  unsigned int volts = lipo.voltage(); // Read battery voltage (mV)
  int current = lipo.current(AVG); // Read average current (mA)
  unsigned int fullCapacity = lipo.capacity(FULL); // Read full capacity (mAh)
  unsigned int capacity = lipo.capacity(REMAIN); // Read remaining capacity (mAh)
  int power = lipo.power(); // Read average power draw (mW)
  int health = lipo.soh(); // Read state-of-health (%)

  // Now print out those values:
  String toPrint = String(soc) + "% | ";
  toPrint += String(volts) + " mV | ";
  toPrint += String(current) + " mA | ";
  toPrint += String(capacity) + " / ";
  toPrint += String(fullCapacity) + " mAh | ";
  toPrint += String(power) + " mW | ";
  toPrint += String(health) + "%";

  Serial.println(toPrint);

  // LCD Graphics
  tft.setTextColor(TFT_BLUE);
  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);
  tft.setTextColor(TFT_MAGENTA);
  tft.drawString("State of Chage:", 20, 30);
  tft.drawString("Battery Voltage:", 20, 55);
  tft.drawString("Average Current:", 20, 80);
  tft.drawString("Remain Capacity:", 20, 105);
  tft.drawString("Full Capacity:", 20, 130);
  tft.drawString("Average Power:", 20, 155);
  tft.drawString("State of Health:", 20, 180);

  // Data
  spr.createSprite(80, 170);
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(FF17);
  spr.setTextColor(TFT_WHITE);
  spr.drawString(String(soc)+" % ", 0, 0);
  spr.drawString(String(volts)+" mV ", 0, 25);
  spr.drawString(String(current)+" mA ", 0, 50);
  spr.drawString(String(capacity)+" mAh ", 0, 75);
  spr.drawString(String(fullCapacity)+" mAh ", 0, 100);
  spr.drawString(String(power)+" mW ", 0, 125);
  spr.drawString(String(health)+" % ", 0, 150);
  spr.pushSprite(170, 30);
  spr.deleteSprite();
}

void setup()
{
  Serial.begin(115200);
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
  tft.setFreeFont(FF17); 
  setupBQ27441();
  tft.setTextColor(TFT_GREEN);
  tft.setCursor((320 - tft.textWidth("Battery Initialised!"))/2, 120);
  tft.print("Battery Initialised!");
  delay(1000);
  tft.fillScreen(TFT_BLACK);
}

void loop() 
{
  printBatteryStats();
  delay(1000);
}
```

## **Visualizador de esquemático online**

<div className="altium-ecad-viewer" data-project-src="https://http://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH_NEW.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## **Recursos**

- **[ZIP]** [Arquivo de design dos esquemáticos do Wio Terminal Battery Chassis](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/WioTerminal_battry_650mAh.rar)

## **Suporte técnico**


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
