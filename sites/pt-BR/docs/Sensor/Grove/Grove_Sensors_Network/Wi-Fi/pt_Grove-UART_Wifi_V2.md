---
title: Grove - UART Wifi V2
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-UART_Wifi_V2/
slug: /Grove-UART_Wifi_V2
sku: 113020011
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-UART_Wifi_V2/
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/Main.JPG)

Grove - UART WiFi é um módulo transceptor serial com o onipresente SoC IoT ESP8285. Com a pilha de protocolo TCP/IP integrada, este módulo permite que seu microcontrolador interaja com redes WiFi com apenas algumas linhas de código. Cada módulo ESP8285 vem pré-programado com um firmware de conjunto de comandos AT, o que significa que você pode enviar comandos de texto simples para controlar o dispositivo. O SoC possui mecanismos integrados de WEP, WPA/WPA2, TKIP, AES e WAPI, pode atuar como um ponto de acesso com DHCP, pode se juntar a redes WiFi existentes e possui endereços MAC e IP configuráveis.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-UART-WiFi-V2-%28ESP8285%29-p-3054.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Parâmetro     | V1.0     |V2.0     |
| :------------- | :------------- |:------------- |
| Data de lançamento do produto       | 24 de junho de 2016       |26 de março de 2018|
|Chip WiFi|ESP8266| ESP8285|
|Tipo de antena| Externa |On-board|
|LEDs| 3 LEDs - Alimentação/WiFi/Comando AT|2 LEDs - Alimentação/WiFi|
|Botão|1 botão: Pressione rapidamente para **Reset** Pressione e segure para entrar no **modo de boot UART** |2 botões para essas duas funções|

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Version_tracker.jpg)

:::note
        Você pode perguntar qual é a diferença entre ESP8266 e ESP8285. O ESP8285 é uma versão atualizada do ESP8266, que adiciona uma memória flash embutida de 1 MB. Exceto por isso, eles são quase iguais.
:::

## Recursos

- Conector Grove de 4 pinos (RX,TX,VCC,GND)
- Protocolo 802.11 b/g/n (2.4GHz)
- WiFi Direct (P2P), soft-AP
- Suporta três modos: AP, STA e modo de coexistência AP+STA
- Pilha de protocolo TCP/IP integrada
- LwIP (lightweight IP)
- CPU integrada de 32 bits de baixo consumo que pode ser reprogramada como um processador de aplicação
- Sensor de temperatura integrado
- Interface UART serial
- Gerenciamento de QoS com múltiplas filas
- Acorda e transmite pacotes em &lt; 2ms
- Blindagem metálica
- Antena cerâmica on-board
- Chave de reset

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

- Tensão de entrada: 3V / 5V
- Taxa de baud: 115200
- Baseado no SoC ESP8285 ESP-06
- Firmware AT: esp_iot_sdk_v1.1.0
  - Registrar o LED vermelho de WiFi ao LED de estado de WiFi do ESP8285.
- Conjunto de comandos AT
- SDIO 1.1/2.0, SPI, UART
- Cinco estados de energia: OFF, DEEP_SLEEP, SLEEP, WAKEUP e ON.
- Consumo de energia em espera de &lt; 1,0mW (DTIM=3)
- Comutador TR integrado, balun, LNA, amplificador de potência e rede de casamento
- PLLs, reguladores, DCXO e unidades de gerenciamento de energia integrados
- Potência de saída de +19,5dBm no modo 802.11b
- Corrente de fuga em desligamento de &lt;10uA
- Aceleradores de hardware para CCMP (CBC-MAC, modo contador), TKIP (MIC, RC4), WAPI (SMS4), WEP (RC4), CRC
- Driver WPA/WPA2 PSK e WPS
- Agregação A-MPDU & A-MSDU e intervalo de guarda de 0,4ms
- Dimensões: 25,43mm x 20,35mm

**Tecnologia de ultra baixo consumo**

O ESP8285 foi projetado para alcançar um consumo de energia muito baixo com tecnologia de gerenciamento de energia patenteada que reduz funções não essenciais e regula os padrões de sono. Existem cinco estados de energia:

- OFF
- DEEP_SLEEP - o relógio em tempo real funciona, mas todas as outras partes do chip estão desligadas
- SLEEP - consome menos de 12uA com apenas o relógio em tempo real e o watchdog em execução. O chip acordará por MAC, host, RTC ou interrupção externa.
- WAKEUP - o sistema está mudando de um estado de sono para ligado. O oscilador de cristal e o PLL são habilitados.
- ON - consome menos de 1,0mW (DTIM = 3) ou 0,5mW (DTIM = 10).

O relógio em tempo real pode ser programado para acordar o ESP8285 dentro de um período de tempo específico.

Quanto maior o período DTIM, mais tempo o dispositivo pode permanecer em modo de espera e, portanto, mais energia o dispositivo pode potencialmente economizar.

Para atender aos requisitos de energia de aplicações móveis e eletrônicos vestíveis, para reduzir o consumo total de energia, a potência de saída do PA pode ser personalizada no firmware.

## Ideias de aplicação

- Automação residencial
- Redes de sensores
- Redes em malha (mesh)
- Eletrônicos vestíveis
- Babá eletrônica
- Câmera de rede
- Controle industrial sem fio
- Beacons WiFi
- Tomada inteligente
- Aplicações com reconhecimento de localização

## Primeiros passos

Depois desta seção, você pode fazer o Grove - UART WiFi funcionar com apenas alguns passos.

### Brincar com Arduino

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que você veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

#### Materiais necessários

| Seeeduino Lite | Grove-OLED |Grove-UART Wifi|
|--------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_Display_0.96/images/grove%20oled%200.96_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove---OLED-Display-0.96%22-p-781.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank">Adquira agora</a>|

:::note
    **Nota 1:** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **Nota 2:** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Passo 1.** Conecte o Grove-UART Wifi à porta **SERIAL** do Seeeduino Lite.

- **Passo 2.** Conecte o Grove-OLED à porta **I2C** do Seeeduino Lite.

- **Passo 3.** Conecte o Seeeduino Lite ao PC através de um cabo Micro-USB.

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/Arduino_connect.jpg)

#### Software

- **Passo 1.** Baixe a [biblioteca 128X64 OLED](https://github.com/Seeed-Studio/OLED_Display_128X64/archive/master.zip) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Abra a IDE do Arduino e copie o código a seguir para um novo sketch.

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

- **Passo 4.** Envie o demo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

Então você verá o OLED mostrar os pontos de acesso WiFi ao seu redor.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_result.jpg)

## Atualização de firmware

Nossa placa de módulo vem com um firmware gravado com as configurações de fábrica; você pode gravar outro firmware se quiser. Clique [aqui](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-Uart_Wifi_Firmware-code.zip) para baixar o código-fonte do firmware de configuração de fábrica.

### Materiais necessários

- Um conversor USB para serial é necessário para atualizar o firmware; você pode escolher o [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5-p-1752.html) se não souber onde conseguir um.
- É necessário um [cabo conversor Grove-Jump](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-%285-PCs-per-PAck%29-p-1020.html), que também oferecemos para venda.
- É necessário um cabo micro USB (tipo A para tipo C).

### Hardware

**Passo 1.** Conecte uma extremidade do cabo conversor Grove-Jump ao soquete Grove no Grove - Uart Wifi e conecte a outra extremidade ao UartSBee V5, como mostrado a seguir.

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/V2/UART_V2.jpg)

**Passo 2.** Em seguida, conecte os cabos como na figura a seguir:

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_connect2.jpg)

### Software

**Passo 1.** Baixe a ferramenta de gravação e o firmware

- [FLASH DOWNLOAD TOOLS](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/FLASH_DOWNLOAD_TOOLS_v1.2_150512.zip)
- [Arquivos binários do firmware](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove-uart-wifi-firmware-bin.zip)

**Passo 2.** Mantenha o botão pressionado até o LED vermelho acender, o que significa que está pronto para gravar o firmware.

**Passo 3.** Inicie os arquivos executáveis na pasta FLASH DOWNLOAD TOOLS (clique duas vezes) para fazer as configurações conforme os passos a seguir:

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools1.jpg)

**1.** Escolha os arquivos desejados a partir do arquivo bin de firmware baixado.

**2.** Selecione a caixa de seleção **SpiAutoSet**.

**3.** Escolha a porta COM e a TAXA DE TRANSMISSÃO (BAUDRATE).

**4.** Clique no botão **START**

- A barra de progresso será exibida durante o processo de gravação do firmware.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools2.1.jpg)

- Por fim, a gravação do firmware é concluída.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/Grove_uart_wifi_firmware_tools3.jpg)

## Comandos AT

### Início rápido dos comandos AT

#### Hardware

Os **Materiais necessários** e a **Conexão de hardware** são os mesmos de [Atualização de firmware](https://wiki.seeedstudio.com/pt-br/Grove-UART_Wifi/#Atualização-de-firmware)

Vamos para a parte de software  

#### Software

Você pode usar qualquer ferramenta serial que quiser; aqui usamos o Arduino. E certifique-se de que conectou o **conversor USB para serial** ao seu PC.

**Passo 1.** Abra a IDE do Arduino, clique em **Tools** e escolha a **Port** correspondente.

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/1.png)

<div>
  **Passo 2.** Em seguida, clique no botão <embed src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/COM.png" /> no canto superior direito para abrir o **Serial Monitor** do Arduino.
</div>

**Passo 3.** Configure o Serial Monitor como na figura a seguir. Em particular: <font color="17a1a5"><b>2-</b></font> selecione **Both NL & CR**, <font color="17a1a5"><b>3-</b></font> defina a **baud rate** para 115200

![](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/img/result.png)

**Passo 4.** Digite o comando AT de que você precisa na <font color="17a1a5"><b>1-</b></font> **linha de comando** e depois clique no botão <font color="17a1a5"><b>4-</b></font> **Send**. Você verá as informações de retorno como na figura acima.

### Comandos AT básicos

| Command | Description |
|-------------|---------------|
|AT |Testar inicialização AT|
|AT+RST| Reiniciar módulo|
|AT+GMR| Ver informações da versão|
|AT+GSLP| Entrar no modo de sono profundo|
|ATE| Habilitar/Desabilitar eco dos comandos AT|
|AT+RESTORE| Restaurar configurações de fábrica|
|AT+UART| Configuração de UART (Obsoleto)|
|AT+UART_CUR| Configuração atual de UART (Não será salva na Flash)|
|AT+UART_DEF| Configuração padrão de UART (Salva na Flash)|
|AT+SLEEP |Modo de sono|
|AT+RFPOWER| Ajustar potência de TX de RF|
|AT+RFVDD| Ajustar potência de TX de RF de acordo com VDD33|

### Comandos AT de WiFi

|Command |Description|
|--------------|-------------|
|AT+CWMODE |Modo WIFI (Obsoleto)|
|AT+CWMODE_CUR |Modo WIFI atual (Não será salvo na Flash)|
|AT+CWMODE_DEF| Modo WIFI padrão (Salvo na Flash)|
|AT+CWJAP| Conectar a um AP (Obsoleto)|
|AT+CWJAP_CUR| Conexão atual a um AP (Não será salva na Flash)|
|AT+CWJAP_DEF| Conexão padrão a um AP (Salva na Flash)|
|AT+CWLAP| Listar APs disponíveis|
|AT+CWQAP| Desconectar do AP|
|AT+CWSAP| Configurar softAP (Obsoleto)|
|AT+CWSAP_CUR| Configurar softAP atual (Não será salvo na Flash)|
|AT+CWSAP_DEF| Configurar softAP padrão (Salvo na Flash)|
|AT+CWLIF| Listar estações conectadas ao softAP|
|AT+CWDHCP| Habilitar/Desabilitar DHCP (Obsoleto)|
|AT+CWDHCP_CUR| Habilitar/Desabilitar DHCP atual (Não será salvo na Flash)|
|AT+CWDHCP_DEF| Habilitar/Desabilitar DHCP padrão (Salvo na Flash)|
|AT+CWAUTOCONN| Conectar ao AP automaticamente ao ligar|
|AT+CIPSTAMAC| Definir endereço MAC da estação (Obsoleto)|
|AT+CIPSTAMAC_CUR| Definir endereço MAC da estação (Não será salvo na Flash)|
|AT+CIPSTAMAC_DEF| Definir endereço MAC da estação (Salvo na Flash)|
|AT+CIPAPMAC| Definir endereço MAC do softAP (Obsoleto)|
|AT+CIPAPMAC_CUR| Definir endereço MAC atual do softAP (Não será salvo na Flash)|
|AT+CIPAPMAC_DEF| Definir endereço MAC padrão do softAP (Salvo na Flash)|
|AT+CIPSTA| Definir endereço IP da estação (Obsoleto)|
|AT+CIPSTA_CUR| Definir endereço IP atual da estação (Não será salvo na Flash)|
|AT+CIPSTA_DEF| Definir endereço IP padrão da estação (Salvo na Flash)|
|AT+CIPAP| Definir endereço IP do softAP (Obsoleto)|
|AT+CIPAP_CUR| Definir endereço IP atual do softAP (Não será salvo na Flash)|
|AT+CIPAP_DEF| Definir endereço IP padrão do softAP (Salvo na Flash)|
|AT+CWSTARTSMART| Iniciar SmartConfig|
|AT+CWSTOPSMART| Parar SmartConfig|

### Comandos AT de TCP/IP

|Command |Description|
|-------------|--------------|
|AT+CIPSTATUS| Obter status da conexão|
|AT+CIPSTART| Estabelecer conexão TCP ou registrar porta UDP|
|AT+CIPSEND| Enviar dados|
|AT+CIPSENDEX| Enviar dados; se  ou "\0" for encontrado, os dados serão enviados|
|AT+CIPSENDBUF| Gravar dados no buffer de envio TCP|
|AT+CIPBUFRESET| Redefinir contagem de ID de segmento|
|AT+CIPBUFSTATUS| Verificar o status do buffer de envio TCP|
|AT+CIPCHECKSEQ| Verificar se um segmento específico foi enviado ou não|
|AT+CIPCLOSE| Fechar conexão TCP/UDP|
|AT+CIFSR| Obter endereço IP local|
|AT+CIPMUX| Definir modo de múltiplas conexões|
|AT+CIPSERVER| Configurar como servidor|
|AT+CIPMODE| Definir modo de transmissão|
|AT+SAVETRANSLINK| Salvar link de transmissão transparente na Flash|
|AT+CIPSTO| Definir tempo limite quando o ESP8266 atuar como servidor TCP|
|AT+CIUPDATE| Atualizar firmware pela rede|
|AT+PING| Enviar ping para um endereço IP ou hostname|

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Uart_Wifi_V2_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Esquemático em PDF](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Grove%20-%20Uart%20Wifi%20v2%20sch.pdf)

- **[Zip]** [Esquemático em Eagle](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/Uart_Wifi_V2_Eagle_file.zip)
- **[Datasheet]** [Espressif Systems ESP8285](https://files.seeedstudio.com/wiki/Grove-Uart_Wifi/res/ESP8285_datasheet.pdf)
- **[PDF]** [Conjunto de instruções AT do Espressif Systems ESP8266 - v0.24](http://bbs.espressif.com/download/file.php?id=450)
- **[MoreReading]** [http://www.esp8266.com](http://www.esp8266.com)
- **[MoreReading]** [ESP-06](http://www.esp8266.com/wiki/doku.php?id=esp8266-module-family#esp-06)
- **[MoreReading]** [ESP8266 no Hackaday](http://hackaday.com/tag/esp8266/)
- **[MoreReading]** [https://nurdspace.nl/ESP8266](https://nurdspace.nl/ESP8266)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
