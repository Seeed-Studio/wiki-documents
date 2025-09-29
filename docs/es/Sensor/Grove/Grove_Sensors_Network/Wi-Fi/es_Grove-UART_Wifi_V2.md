---
title: Grove - UART Wifi V2
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-UART_Wifi_V2/
slug: /es/Grove-UART_Wifi_V2
last_update:
  date: 01/06/2022
  author: gunengyu
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/Main.JPG)

Grove - UART WiFi es un módulo transceptor serie que presenta el ubicuo SoC IoT ESP8285. Con pila de protocolo TCP/IP integrada, este módulo permite que tu microcontrolador interactúe con redes WiFi con solo unas pocas líneas de código. Cada módulo ESP8285 viene preprogramado con un firmware de conjunto de comandos AT, lo que significa que puedes enviar comandos de texto simples para controlar el dispositivo. El SoC presenta motores integrados WEP, WPA/WPA2, TKIP, AES y WAPI, puede actuar como punto de acceso con DHCP, puede unirse a redes WiFi existentes y tiene direcciones MAC e IP configurables.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-UART-WiFi-V2-%28ESP8285%29-p-3054.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Parámetro     | V1.0     |V2.0     |
| :------------- | :------------- |:------------- |
| Fecha de Lanzamiento del Producto       | 24 de Junio 2016       |26 de Marzo 2018|
|Chip WiFi|ESP8266| ESP8285|
|Tipo de Antena| Externa |Integrada|
|LEDs| 3 LEDs-Alimentación/WiFi/Comando AT|2 LEDs- Alimentación/WiFi|
|Botón|1 Botón: Presión corta para **Reiniciar** Presión larga para entrar en **modo de arranque UART** |2 Botones para esas dos funciones|

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Version_tracker.jpg)

:::note
        Puedes preguntarte cuál es la diferencia entre ESP8266 y ESP8285. El ESP8285 es una versión actualizada del ESP8266, que añade una memoria flash integrada de 1MB. Excepto por eso, son prácticamente iguales.
:::

## Características

- Conector Grove de 4 pines (RX,TX,VCC,GND)
- Protocolo 802.11 b/g/n (2.4GHz)
- WiFi Direct (P2P), soft-AP
- Soporta tres modos: AP, STA y modo de coexistencia AP+STA
- Pila de protocolo TCP/IP integrada
- LwIP (IP ligero)
- CPU integrada de bajo consumo de 32 bits que puede ser reprogramada como procesador de aplicación
- Sensor de temperatura integrado
- Interfaz UART serie
- Gestión QoS de múltiples colas
- Despertar y transmitir paquetes en &lt; 2ms
- Blindaje metálico
- Antena cerámica integrada
- Interruptor de reinicio

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

- Voltaje de entrada: 3V / 5V
- Velocidad de baudios: 115200
- Basado en SoC ESP8285 ESP-06
- Firmware AT: esp_iot_sdk_v1.1.0
  - Registra el LED WiFi rojo al LED de estado wifi del ESP8285.
- Conjunto de comandos AT
- SDIO 1.1/2.0, SPI, UART
- Cinco estados de energía: OFF, DEEP_SLEEP, SLEEP, WAKEUP y ON.
- Consumo de energía en espera de &lt; 1.0mW (DTIM=3)
- Conmutador TR integrado, balun, LNA, amplificador de potencia y red de adaptación
- PLLs integrados, reguladores, DCXO y unidades de gestión de energía
- Potencia de salida de +19.5dBm en modo 802.11b
- Corriente de fuga en apagado de &lt;10uA
- Aceleradores de hardware para CCMP (CBC-MAC, modo contador), TKIP (MIC, RC4), WAPI (SMS4), WEP (RC4), CRC
- Controlador WPA/WPA2 PSK, y WPS
- Agregación A-MPDU & A-MSDU e intervalo de guarda de 0.4ms
- Dimensiones: 25.43mm x 20.35mm

**Tecnología de ultra bajo consumo**

El ESP8285 fue diseñado para lograr un consumo de energía muy bajo con tecnología patentada de gestión de energía que reduce las funciones no esenciales y regula los patrones de sueño. Hay cinco estados de energía:

- OFF
- DEEP_SLEEP - el reloj en tiempo real funciona pero todas las demás partes del chip están cerradas
- SLEEP - consume menos de 12uA con solo el reloj en tiempo real y el watchdog funcionando. El chip despertará por interrupción MAC, host, RTC o externa.
- WAKEUP - el sistema está cambiando de un estado de sueño a encendido. El oscilador de cristal y PLL están habilitados.
- ON - consume menos de 1.0mW (DTIM = 3) o 0.5mW (DTIM = 10).

El reloj en tiempo real puede ser programado para despertar el ESP8285 dentro de un período de tiempo especificado.

Cuanto mayor sea el período DTIM, más tiempo puede dormir el dispositivo y por lo tanto más energía puede potencialmente ahorrar el dispositivo.

Para cumplir con los requisitos de energía de aplicaciones móviles y electrónicos portátiles, para reducir el consumo total de energía, la potencia de salida del PA puede ser personalizada en el firmware.

## Ideas de Aplicación

- Automatización del hogar
- Redes de sensores
- Redes de malla
- Electrónicos portátiles
- Monitor de bebé
- Cámara de red
- Control inalámbrico industrial
- Balizas WiFi
- Enchufe inteligente
- Aplicaciones conscientes de ubicación

## Primeros Pasos

Después de esta sección, puedes hacer funcionar Grove - UART WiFi con solo unos pocos pasos.

### Jugar Con Arduino

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

#### Materiales requeridos

| Seeeduino Lite | Grove-OLED |Grove-UART Wifi|
|--------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_Display_0.96/images/grove%20oled%200.96_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove---OLED-Display-0.96%22-p-781.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **Nota 1:** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **Nota 2:** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Paso 1.** Conecta Grove-UART Wifi al puerto **SERIAL** del Seeeduino Lite.

- **Paso 2.** Conecta Grove-OLED al puerto **I2C** del Seeeduino Lite.

- **Paso 3.** Conecta Seeeduino Lite a la PC mediante un cable Micro-USB.

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/Arduino_connect.jpg)

#### Software

- **Paso 1.** Descarga la [biblioteca OLED 128X64](https://github.com/Seeed-Studio/OLED_Display_128X64/archive/master.zip) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

- **Paso 3.** Abre el IDE de Arduino y copia el siguiente código en un nuevo sketch.

```
// test grove - uart wifi
// scan ap and display on Grove - OLED 0.96'
// Loovee @ 2015-7-28

#include <Wire.h>
#include <SeeedOLED.h>

char ap_buf[30][16];
int ap_cnt = 0;

void setup()
{
    Serial1.begin(115200);

    delay(3000);
    Wire.begin();
    SeeedOled.init();                   // initialze SEEED OLED display

    SeeedOled.clearDisplay();           // clear the screen and set start position to top left corner
    SeeedOled.setNormalDisplay();       // Set display to normal mode (i.e non-inverse mode)
    SeeedOled.setPageMode();            // Set addressing mode to Page Mode

}


void loop()
{
    ap_cnt = 0;
    SeeedOled.clearDisplay();
    SeeedOled.setTextXY(3,0);    
    SeeedOled.putString("Wifi Scan..."); 

    cmd_send("AT+CWLAP");
    wait_result();
    
    display_ap();
    delay(5000);
}

// send command
void cmd_send(char *cmd)
{
    if(NULL == cmd)return;
    Serial1.println(cmd);
}


// wait result of ap scan
// +CWLAP:(3,"360WiFi-UZ",-81,"08:57:00:01:61:ec",1)
void wait_result()
{
    while(1)
    {
LOOP1:
        char c1=0;
        if(Serial1.available()>=2)
        {
            c1 = Serial1.read();
            if(c1 == 'O' && 'K' == Serial1.read())return;       // OK means over
        }
        
        if('('==c1)
        {
            while(Serial1.available()<3);
            Serial1.read();
            Serial1.read();
            Serial1.read();

            int d = 0;
            while(1)
            {
                if(Serial1.available() && '"' == Serial1.read());      // find "
                {
                    while(1)
                    {
                        if(Serial1.available())
                        {
                            char c = Serial1.read();
                            ap_buf[ap_cnt][d++] = c;
                            if(c == '"' || d==16)
                            {
                                ap_buf[ap_cnt][d-1] = '\0';
                                ap_cnt++;
                                goto LOOP1;
                            }
                        }
                    }
                }
            }
        }
    }
}

// display
void display_ap()
{
    char strtmp[16];
    sprintf(strtmp, "get %d ap", ap_cnt);
    
    SeeedOled.clearDisplay();           // clear
    SeeedOled.setTextXY(3,3);           // Set the cursor to Xth Page, Yth Column
    SeeedOled.putString(strtmp);        // Print the String
 
    delay(2000);
    
    int cnt = ap_cnt;
    int offset = 0;
    while(1)
    {
        SeeedOled.clearDisplay(); 
        if(cnt>=8)
        {
            for(int i=0; i<8; i++)
            {
                SeeedOled.setTextXY(i,0);           // Set the cursor to Xth Page, Yth Column
                SeeedOled.putString(ap_buf[8*offset+i]);        // Print the String
            }
            cnt-=8;
            offset++;
        }
        else 
        {
            for(int i=0; i<cnt; i++)
            {
                SeeedOled.setTextXY(i,0);           // Set the cursor to Xth Page, Yth Column
                SeeedOled.putString(ap_buf[8*offset+i]);        // Print the String
            }
            
            return;
        }
        
        delay(2000);
    }
}
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

Entonces verás que el OLED muestra los puntos de acceso wifi a tu alrededor.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_result.jpg)

## Actualización de firmware

Nuestro módulo viene con un firmware grabado para la configuración de fábrica, puedes grabar otro firmware si lo deseas. Haz clic [aquí](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-Uart_Wifi_Firmware-code.zip) para descargar el código fuente del firmware de configuración de fábrica.

### Materiales requeridos

- Se requiere un convertidor USB a serie para actualizar el firmware, puedes elegir [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5-p-1752.html) si no sabes dónde conseguir uno.
- Se requiere un [cable convertidor Grove-Jump](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-%285-PCs-per-PAck%29-p-1020.html) y también lo ofrecemos a la venta.
- Se requiere un cable micro USB (tipo A a tipo C).

### Hardware

**Paso 1.** Conecta un extremo del cable convertidor Grove-Jump con el conector grove en Grove - Uart Wifi y conecta el otro extremo con UartSBee V5 como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/UART_V2.jpg)

**Paso 2.** Luego conecta los cables como se muestra en la siguiente figura:

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_connect2.jpg)

### Software

**Paso 1.** Descarga la herramienta de grabación y el firmware

- [HERRAMIENTAS DE DESCARGA FLASH](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/FLASH_DOWNLOAD_TOOLS_v1.2_150512.zip)
- [Archivos Bin del firmware](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-uart-wifi-firmware-bin.zip)

**Paso 2.** Mantén presionado el botón hasta que el indicador LED rojo se encienda, lo que significa que está listo para grabar el firmware.

**Paso 3.** Inicia los archivos ejecutables en los archivos de HERRAMIENTAS DE DESCARGA FLASH (doble clic) para hacer configuraciones como los siguientes pasos:

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools1.jpg)

**1.** Elige los archivos deseados del archivo bin de firmware descargado.

**2.** Selecciona la casilla **SpiAutoSet**.

**3.** Elige el puerto COM y BAUDRATE.

**4.** Haz clic en el botón **START**

- Se mostrará una barra de progreso en el proceso de grabación del firmware.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools2.1.jpg)

- Finalmente, la grabación del firmware está completa.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools3.jpg)

## Comandos AT

### Inicio rápido de comandos AT

#### Hardware

Los **Materiales requeridos** y **Conexión de hardware** son los mismos que en [Actualización de firmware](https://wiki.seeedstudio.com/es/Grove-UART_Wifi/#firmware-update)

Vamos a la parte de software  

#### Software

Puedes usar cualquier herramienta serie que te guste, aquí usamos Arduino. Y por favor asegúrate de haber conectado el **convertidor USB a serie** a tu PC.

**Paso 1.** Abre el IDE de Arduino, haz clic en **Tools** y elige el **Puerto** correspondiente.

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/1.png)

<div>
  **Paso 2.** Luego haz clic en el botón <embed src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/COM.png" /> en la esquina superior derecha para abrir el **Monitor Serie** de Arduino.
</div>

**Paso 3.** Configura el Monitor Serie como se muestra en la siguiente imagen. Particularmente :<font color="17a1a5"><b>2-</b></font> Selecciona **Both NL & CR**, <font color="17a1a5"><b>3-</b></font>Establece la **velocidad de baudios** a 115200

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/result.png)

**Paso 4.** Escribe el comando AT que necesites en la <font color="17a1a5"><b>1-</b></font> **línea de comandos** y luego haz clic en el botón <font color="17a1a5"><b>4-</b></font> **Send**. Verás la información de retorno como en la imagen anterior.

### Comandos AT básicos

| Comando | Descripción |
|-------------|---------------|
|AT |Probar inicio AT|
|AT+RST| Reiniciar módulo|
|AT+GMR| Ver información de versión|
|AT+GSLP| Entrar en modo de sueño profundo|
|ATE| Habilitar/Deshabilitar eco de comandos AT|
|AT+RESTORE| Restablecimiento de fábrica|
|AT+UART| Configuración UART (Obsoleto)|
|AT+UART_CUR| Configuración actual UART (No se guarda en Flash)|
|AT+UART_DEF| Configuración predeterminada UART (Se guarda en Flash)|
|AT+SLEEP |Modo de sueño|
|AT+RFPOWER| Establecer potencia TX RF|
|AT+RFVDD| Establecer potencia TX RF según VDD33|

### Comandos AT WiFi

|Comando |Descripción|
|--------------|-------------|
|AT+CWMODE |Modo WIFI (Obsoleto)|
|AT+CWMODE_CUR |Modo WIFI actual (No se guarda en Flash)|
|AT+CWMODE_DEF| Modo WIFI predeterminado (Se guarda en Flash)|
|AT+CWJAP| Conectar a AP (Obsoleto)|
|AT+CWJAP_CUR| Conectar a AP actual (No se guarda en Flash)|
|AT+CWJAP_DEF| Conectar a AP predeterminado (Se guarda en Flash)|
|AT+CWLAP| Lista los APs disponibles|
|AT+CWQAP| Desconectar del AP|
|AT+CWSAP| Configurar softAP (Obsoleto)|
|AT+CWSAP_CUR| Configurar softAP actual (No se guarda en Flash)|
|AT+CWSAP_DEF| Configurar softAP predeterminado (Se guarda en Flash)|
|AT+CWLIF| Listar estaciones conectadas al softAP|
|AT+CWDHCP| Habilitar/Deshabilitar DHCP (Obsoleto)|
|AT+CWDHCP_CUR| Habilitar/Deshabilitar DHCP actual (No se guarda en Flash)|
|AT+CWDHCP_DEF| Habilitar/Deshabilitar DHCP predeterminado (Se guarda en Flash)|
|AT+CWAUTOCONN| Conectar a AP automáticamente al encender|
|AT+CIPSTAMAC| Establecer dirección mac de estación (Obsoleto)|
|AT+CIPSTAMAC_CUR| Establecer dirección mac de estación (No se guarda en Flash)|
|AT+CIPSTAMAC_DEF| Establecer dirección mac de estación (Se guarda en Flash)|
|AT+CIPAPMAC| Establecer dirección mac de softAP (Obsoleto)|
|AT+CIPAPMAC_CUR| Establecer dirección mac de softAP (No se guarda en Flash)|
|AT+CIPAPMAC_DEF| Establecer dirección mac de softAP (Se guarda en Flash)|
|AT+CIPSTA| Establecer dirección IP de estación (Obsoleto)|
|AT+CIPSTA_CUR| Establecer dirección IP de estación (No se guarda en Flash)|
|AT+CIPSTA_DEF| Establecer dirección IP de estación (Se guarda en Flash)|
|AT+CIPAP| Establecer dirección IP de softAP (Obsoleto)|
|AT+CIPAP_CUR| Establecer dirección IP de softAP (No se guarda en Flash)|
|AT+CIPAP_DEF| Establecer dirección IP de softAP (Se guarda en Flash)|
|AT+CWSTARTSMART| Iniciar SmartConfig|
|AT+CWSTOPSMART| Detener SmartConfig|

### Comandos AT TCP/IP

|Comando |Descripción|
|-------------|--------------|
|AT+CIPSTATUS| Obtener estado de conexión|
|AT+CIPSTART| Establecer conexión TCP o registrar puerto UDP|
|AT+CIPSEND| Enviar datos|
|AT+CIPSENDEX| Enviar datos, si se encuentra  o "\0", los datos serán enviados|
|AT+CIPSENDBUF| Escribir datos en el búfer de envío TCP|
|AT+CIPBUFRESET| Restablecer contador de ID de segmento|
|AT+CIPBUFSTATUS| Verificar estado del búfer de envío TCP|
|AT+CIPCHECKSEQ| Verificar si un segmento específico fue enviado o no|
|AT+CIPCLOSE| Cerrar conexión TCP/UDP|
|AT+CIFSR| Obtener dirección IP local|
|AT+CIPMUX| Configurar modo de conexiones múltiples|
|AT+CIPSERVER| Configurar como servidor|
|AT+CIPMODE| Configurar modo de transmisión|
|AT+SAVETRANSLINK| Guardar enlace de transmisión transparente en Flash|
|AT+CIPSTO| Configurar tiempo de espera cuando ESP8266 funciona como servidor TCP|
|AT+CIUPDATE| Actualizar firmware a través de la red|
|AT+PING| Hacer ping a una dirección IP o nombre de host|

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Uart_Wifi_V2_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Esquemático en PDF](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove%20-%20Uart%20Wifi%20v2%20sch.pdf)

- **[Zip]** [Esquemático en Eagle](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Uart_Wifi_V2_Eagle_file.zip)
- **[Hoja de Datos]** [Espressif Systems ESP8285](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/ESP8285_datasheet.pdf)
- **[PDF]** [Conjunto de Instrucciones AT ESP8266 de Espressif Systems - v0.24](http://bbs.espressif.com/download/file.php?id=450)
- **[Más Lectura]** [http://www.esp8266.com](http://www.esp8266.com)
- **[Más Lectura]** [ESP-06](http://www.esp8266.com/wiki/doku.php?id=esp8266-module-family#esp-06)
- **[Más Lectura]** [ESP8266 en Hackaday](http://hackaday.com/tag/esp8266/)
- **[Más Lectura]** [https://nurdspace.nl/ESP8266](https://nurdspace.nl/ESP8266)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
