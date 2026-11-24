---
description: Compila y sube un sketch de Arduino Wi‑Fi al XIAO ESP32C6 y luego recorre paso a paso un umbral de señal en Visual Studio usando el USB JTAG integrado.
title: XIAO ESP32C6 con Visual Studio
keywords:
  - XIAO
  - ESP32C6
  - Visual Studio
  - Arduino
  - USB JTAG
slug: /xiao_esp32c6_with_visual_studio
last_update:
  date: 11/23/2026
---

Esta guía se basa en el [ejemplo de escaneo Wi‑Fi](https://wiki.seeedstudio.com/es/xiao_wifi_usage_esp32c6/#escanear-redes-wifi-cercanas) del XIAO ESP32C6. Subirás un sketch de Arduino que clasifica la señal muestreada de 2,4 GHz más fuerte, luego se detendrá en la comparación y verás cómo cambia el valor al recorrerla paso a paso. El USB JTAG integrado del XIAO funciona a través del mismo cable de datos USB que usas para subir el sketch. [Referencia del USB JTAG integrado de Espressif](https://docs.espressif.com/projects/esp-idf/en/stable/esp32c6/api-guides/jtag-debugging/configure-builtin-jtag.html)

## Lo que necesitas

- Un Seeed Studio XIAO ESP32C6 y un cable de datos USB‑C conectado directamente a tu ordenador con Windows.
- Microsoft Visual Studio 2022 o 2026 con la carga de trabajo **Desktop development with C++** y la [extensión Visual Micro](https://marketplace.visualstudio.com/items?itemName=VisualMicro.ArduinoIDEforVisualStudio). Visual Micro es una extensión de terceros con versión de prueba y licencias de pago.
- Un punto de acceso Wi‑Fi activo de 2,4 GHz dentro del alcance. El sketch escanea las redes cercanas sin unirse a ellas.

## Seleccionar la placa y el puerto

1. En la barra de herramientas de Visual Micro, selecciona el entorno de Arduino que quieras usar. La opción **Arduino 2** usa la configuración de tu Arduino IDE 2. Si **esp32 by Espressif Systems** ya está instalado en ese entorno, ve al paso 2. De lo contrario, usa **Micro Explorer → Board Manager** para instalar el paquete estable. Si Espressif no aparece en Board Manager, añade el índice del paquete desde las instrucciones de Seeed en **IDE Locations → Additional board manager JSON URLs**, guarda y elige **Check for Updates** en Board Manager. [Configuración de la placa de Seeed](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#add-board) · [Visual Micro Board Manager](https://www.visualmicro.com/page/User-Guide.aspx?doc=Board-Manager.html)
2. Elige **vMicro → New Arduino Project** y ponle el nombre `XiaoC6WifiSignal`. Selecciona `XIAO_ESP32C6` como placa y el puerto COM que aparece cuando conectas el XIAO.
3. Establece **USB CDC On Boot** en **Enabled** en **vMicro → Board Options**. Esto enruta la salida `Serial` del sketch al conector USB del XIAO.

## Subir el sketch de Wi‑Fi

Sustituye el contenido de `XiaoC6WifiSignal.ino` por el sketch siguiente. Escanea las redes, registra el RSSI muestreado más fuerte en dBm y lo compara con `-70 dBm`. Una lectura de `-70 dBm` o superior cuenta como fuerte.

```cpp
#include <WiFi.h>

volatile int32_t thresholdDbm = -70;
volatile int32_t strongestDbm = -127;
volatile bool strongSignal = false;

void setup() {
  Serial.begin(115200);
  WiFi.STA.begin(false);
}

void loop() {
  const int count = WiFi.scanNetworks();

  if (count > 0) {
    // WiFi.RSSI() takes an 8-bit scan-result index.
    const int sampleCount = min(count, 256);
    int32_t bestDbm = WiFi.RSSI(0);
    for (int index = 1; index < sampleCount; ++index) {
      const int32_t rssi = WiFi.RSSI(index);
      if (rssi > bestDbm) {
        bestDbm = rssi;
      }
    }

    strongestDbm = bestDbm;
    strongSignal = strongestDbm >= thresholdDbm;  // Set a breakpoint here.
    Serial.printf("%ld dBm (%s)\n", static_cast<long>(strongestDbm),
                  strongSignal ? "strong" : "weak");
  } else {
    Serial.println(count == 0 ? "No networks found" : "Wi-Fi scan failed");
  }

  WiFi.scanDelete();
  delay(4000);
}
```

Elige **vMicro → Build & Upload**. Abre el **Serial Monitor** de Visual Micro para el puerto COM de la placa, configúralo a **115200 baud** y haz clic en **Connect**. Después de un escaneo, espera una línea como `-68 dBm (strong)` o `-71 dBm (weak)`. Activa **Auto-Recon** si quieres que un monitor abierto se vuelva a conectar después de que el puerto sea liberado por una carga posterior.

## Recorrer paso a paso la comparación de la señal

1. Selecciona la configuración de compilación **Debug**. En la barra de herramientas de Visual Micro, establece el modo del depurador en **Hardware** y elige **ESP32C6-USB**. Mantén la placa configurada como `XIAO_ESP32C6`. Para que coincida con la prueba de la placa, selecciona **vMicro → Debugger → Disable Optimization → No Project + Libraries Optimization**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiao-esp32-c6-setup.png" alt="Barra de herramientas de Visual Micro que muestra XIAO_ESP32C6, el puerto COM, depuración por Hardware y ESP32C6-USB" style={{width:450, height:'auto'}}/></div>

2. Haz clic en el margen izquierdo de la línea `strongSignal = strongestDbm >= thresholdDbm;` para establecer un punto de interrupción. Pulsa **F5** para iniciar la depuración. El sketch se detiene en esa línea una vez que un escaneo encuentra una red.
3. En Visual Studio, abre **Debug → Windows → Watch → Watch 1**. Añade `strongestDbm`, `thresholdDbm` y `strongSignal`. En este punto, `strongSignal` aún mantiene su valor anterior.
4. Pulsa **F10** una vez para ejecutar la comparación. El depurador pasa a la línea `Serial.printf`. En la prueba de la placa que se muestra a continuación, `strongestDbm` era `-71`, `thresholdDbm` era `-70`, y la asignación cambió `strongSignal` de `true` a `false`. Tu resultado dependerá de las redes que tengas alrededor. La captura de pantalla muestra los valores en **Autos**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiao-esp32-c6-f10-result.png" alt="Después de F10, la ejecución está en la línea de impresión y Autos muestra strongestDbm en -71, thresholdDbm en -70 y strongSignal como false" style={{width:700, height:'auto'}}/></div>

5. Pulsa **F5** para reanudar. El Serial Monitor imprime la clasificación. Luego el sketch espera cuatro segundos y comienza otro escaneo. Para dejarlo escaneando sin pausas, borra el punto de interrupción y pulsa **F5** de nuevo.

Las capturas de pantalla muestran la prueba original en la placa. El sketch anterior usa la misma comparación y limita a 256 el número de resultados de escaneo que indexa. Esa revisión se compiló con Arduino-ESP32 3.3.13.

## Solución de problemas

- **El punto de interrupción nunca se alcanza.** La comparación solo se ejecuta cuando el escaneo encuentra al menos una red. Si el Serial Monitor indica `No networks found`, acerca el XIAO a un punto de acceso de 2,4 GHz. Si necesitas conectar el monitor manualmente mientras el sketch está en pausa, reanuda con **F5** antes de hacer clic en **Connect**.
- **Falta el puerto COM o la carga se agota por tiempo.** Comprueba que el cable transmite datos, vuelve a conectar la placa y selecciona el puerto COM actual. Si Windows sigue sin detectarla, sigue los [pasos de recuperación del bootloader de Seeed](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#bootloader-mode).
- **El USB JTAG se desconecta o el depurador se bloquea.** Desconecta y vuelve a conectar el XIAO y espera a que Windows lo reconozca. Si el depurador sigue esperando, detén la depuración e inicia una sesión nueva con **F5**. Para errores de OpenOCD o comprobaciones del perfil del depurador, consulta [Solución de problemas de USB JTAG en ESP32-C6](https://www.visualmicro.com/page/ESP32C6-USB-Debugging.aspx#usb-jtag-troubleshooting).

## Consulta también

- [XIAO ESP32C6 con PlatformIO](https://wiki.seeedstudio.com/es/xiao_esp32c6_with_platform_io/)
- [Uso de Wi‑Fi en XIAO ESP32C6](https://wiki.seeedstudio.com/es/xiao_wifi_usage_esp32c6/)
