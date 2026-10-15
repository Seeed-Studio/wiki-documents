---
title: Grove - Wio-E5 TTN Demo
nointro: null
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Wio_E5_TTN_Demo
last_update:
  date: 08/28/2023
  author: Salman
createdAt: '2023-08-30'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_TTN_Demo/
---


## Primeiros Passos

[The Things Network](https://www.thethingsnetwork.org/) fornece uma rede LoRaWAN global e aberta com um conjunto de ferramentas abertas para construir sua próxima aplicação de IoT com baixo custo, oferecendo máxima segurança e pronta para escalar. Por meio de uma robusta criptografia de ponta a ponta, é construída uma rede de Internet das Coisas segura e colaborativa que se estende por muitos países ao redor do mundo, operando agora milhares de gateways que fornecem cobertura para milhões de pessoas. 

### Preparativos

Aqui está um demo mostrando como conectar [TTN (The Things Network)](https://www.thethingsnetwork.org/) e o módulo Seeeduino XIAO via módulo Grove - Wio-E5. Esses módulos são capazes de coletar parâmetros de temperatura e umidade do ambiente e enviá-los de volta para o TTN. Os LEDs piscando no Seeeduino XIAO indicam o status do sensor de temperatura e umidade ao se conectar à nuvem TTN.

:::caution
Certifique-se de que a faixa de frequência seja consistente entre os nós finais, o gateway e a configuração do TTN que você está usando, seguindo esta instrução.
O plano de frequência aplicado neste demo é para **EU868**.
:::

### Hardware Necessário

| Seeeduino XIAO | Grove - Wio-E5 | Placa de Expansão Seeeduino XIAO | Grove - Sensor de Temperatura e Umidade (DHT11) |
|--------------|--------------|--------------|--------------|
|  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|   <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/11302009_preview-34.png" alt="pir" width={600} height="auto" /></p>| <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>|  <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/r/grove-temperature-humidity-sensor-dht11-preview.png" alt="pir" width={600} height="auto" /></p> |[Adquira agora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

:::note
Se esta é a primeira vez que você usa o Seeeduino XIAO, consulte o [wiki do Seeeduino XIAO](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus/).
Se esta é a sua primeira vez usando Arduino, o [site do Arduino](https://www.arduino.cc/) é um ótimo recurso para você iniciar sua jornada com Arduino.
:::

### Conexão de Hardware

- **Passo 1.** Conecte o módulo Wio-E5 diretamente ao slot "UART".

- **Passo 2.** Coloque o DHT11 no soquete "A0/D0".

- **Passo 3.** Baixe o código; por favor, consulte a parte de software.

### Preparação de Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
Clique para saber mais detalhes sobre [como instalar uma Biblioteca Arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/)
:::

#### Baixar Biblioteca

- **Passo 1.** Instale a [biblioteca u8g2](https://github.com/olikraus/U8g2_Arduino)

- **Passo 2.** Instale a [biblioteca do sensor DHT](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

#### Código de Software

Baixe o exemplo; copie o código e cole-o na IDE do Arduino e depois faça o upload.

```cpp
# include <Arduino.h>
# include <U8x8lib.h>
# include "DHT.h"

# define DHTPIN 0 // what pin we're connected to

// Uncomment whatever type you're using!
# define DHTTYPE DHT11 // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    Serial1.printf(p_cmd, args);
    Serial.printf(p_cmd, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (p_ack == NULL)
    {
        return 0;
    }

    do
    {
        while (Serial1.available() > 0)
        {
            ch = Serial1.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }

        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }

    } while (millis() - startMillis < timeout_ms);
    return 0;
}

static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
char*p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
        u8x8.setCursor(2, 4);
        u8x8.print("led :");
        led = !!data;
        u8x8.print(led);
        if (led)
        {
            digitalWrite(LED_BUILTIN, LOW);
        }
        else
        {
            digitalWrite(LED_BUILTIN, HIGH);
        }
    }

    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        u8x8.setCursor(0, 6);
        u8x8.print("                ");
        u8x8.setCursor(2, 6);
        u8x8.print("rssi:");
        u8x8.print(rssi);
    }
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        u8x8.setCursor(0, 7);
        u8x8.print("                ");
        u8x8.setCursor(2, 7);
        u8x8.print("snr :");
        u8x8.print(snr);
    }
}

void setup(void)
{
    u8x8.begin();
    u8x8.setFlipMode(1);
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    Serial.begin(115200);
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);

    Serial1.begin(9600);
    Serial.print("E5 LORAWAN TEST\r\n");
    u8x8.setCursor(0, 0);

    if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
    {
        is_exist = true;
        at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3C\"\r\n");
        at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        delay(200);
        u8x8.setCursor(5, 0);
        u8x8.print("LoRaWAN");
        is_join = true;
    }
    else
    {
        is_exist = false;
        Serial.print("No E5 module found.\r\n");
        u8x8.setCursor(0, 1);
        u8x8.print("unfound E5 !");
    }

    dht.begin();

    u8x8.setCursor(0, 2);
    u8x8.setCursor(2, 2);
    u8x8.print("temp:");

    u8x8.setCursor(2, 3);
    u8x8.print("humi:");

    u8x8.setCursor(2, 4);
    u8x8.print("led :");
    u8x8.print(led);
}

void loop(void)
{
    float temp = 0;
    float humi = 0;

    temp = dht.readTemperature();
    humi = dht.readHumidity();

    Serial.print("Humidity: ");
    Serial.print(humi);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(temp);
    Serial.println(" *C");

    u8x8.setCursor(0, 2);
    u8x8.print("      ");
    u8x8.setCursor(2, 2);
    u8x8.print("temp:");
    u8x8.print(temp);
    u8x8.setCursor(2, 3);
    u8x8.print("humi:");
    u8x8.print(humi);

    if (is_exist)
    {
        int ret = 0;
        if (is_join)
        {

            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret)
            {
                is_join = false;
            }
            else
            {
                at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                Serial.print("JOIN failed!\r\n\r\n");
                delay(5000);
            }
        }
        else
        {
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
            ret = at_send_check_response("Done", 5000, cmd);
            if (ret)
            {
                recv_prase(recv_buf);
            }
            else
            {
                Serial.print("Send failed!\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
        delay(1000);
    }
}

```

### Configuração do Console TTN

- **Passo 1.** Visite o site [The Things Network](https://www.thethingsnetwork.org) e cadastre-se para uma nova conta

- **Passo 2.** Após fazer login, clique no seu perfil e selecione **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3.** Selecione um cluster para começar a adicionar dispositivos e gateways

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width="600" height="auto"/></p>

- **Passo 4.** Clique em **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 5.** Clique em **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width="400" height="auto"/></p>

- **Passo 6.** Preencha o **Application ID** e clique em **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width="500" height="auto"/></p>

**Nota:** Aqui **Application name** e **Description** não são campos obrigatórios. Se **Application name** for deixado em branco, ele usará o mesmo nome de **Application ID** por padrão

A seguir está o aplicativo recém-criado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 7**: Navegue até `Payload formatters > Uplink`, selecione **Formatter Type** como **Javascript** e preencha o **Formatter parameter** da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/1.png" alt="pir" width="550" height="auto"/></p>

```js
function Decoder(bytes, port) {

  var decoded = {};
  if (port === 8) {
    decoded.temp = bytes[0] <<8 | bytes[1];
    decoded.humi = bytes[2] <<8 | bytes[3];
  }

  return decoded;
}
```

- **Passo 8**: Faça o upload do código Arduino para o Seeeduino XIAO como explicado antes e abra o monitor serial para ver a seguinte saída

```
Humidity: 50%       Temperature: 25.00 *C
AT+JOIN
+JOIN: Start
+JOIN: NORMAL
+JOIN: Join failed
+JOIN: Done
AT+ID
+ID: DevAddr, 24:40:00:7C
+ID: DevEui, 2C:F7:F1:20:24:90:03:63
+ID: AppEui, 80:00:00:00:00:00:00:07
+JOIN: Join failed
```

Anote o **DevEui** e o **AppEUi** gerados acima

- **Passo 9**: Volte para a página **Overview** do aplicativo criado e clique em **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width="500" height="auto"/></p>

- **Passo 10.** Clique em **Manually**, para inserir as credenciais de registro manualmente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width="420" height="auto"/></p>

- **Passo 11.** Selecione o **Frequency plan** de acordo com a sua região. Certifique-se também de usar a mesma frequência do gateway ao qual você conectará este dispositivo. Selecione **MAC V1.0.2** como **LoRaWAN® version** e **PHY V1.0.2 REV B** como **Regional Parameters version**. Essas configurações estão de acordo com a pilha LoraWAN® do Wio-E5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width="450" height="auto"/></p>

- **Passo 12.** Copie e cole as informações obtidas anteriormente no **passo 8** nos campos **DevEUI** e **AppEUI**. O campo **End device ID** será preenchido automaticamente quando preenchermos **DevEUI**. Para o campo **AppKey**, use: 2B7E151628AED2A6ABF7158809CF4F3C.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width="450" height="auto"/></p>

Por fim, clique em **Register end device**

- **Passo 13.** Registre o seu Gateway LoRaWAN® no TTN Console. Por favor, consulte as instruções mostradas [aqui](https://wiki.seeedstudio.com/pt-br/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

Se você vir a seguinte saída no monitor serial depois que tudo estiver configurado, isso significa que o Seeeduino XIAO está conectado com sucesso ao TTN e enviando os dados do sensor de temperatura e umidade!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113020091/Screen%20Shot%202021-03-09%20at%203.20.00%20PM.png" alt="pir" width="500" height="auto"/></p>

- **Passo 14.** Volte para a página do aplicativo e navegue até **End devices**, selecione o dispositivo criado e clique em **Live data**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/2.png" alt="pir" width="1000" height="auto"/></p>

Aqui você verá os dados do sensor de temperatura e umidade exibidos em tempo real!

- **Passo 15.** Navegue até `Messaging > Downlink`, digite **01** em **Payload** e clique em **Schedule downlink** para **ligar** o **LED amarelo embutido** no Seeeduino XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/3.png" alt="pir" width="550" height="auto"/></p>

- **Passo 16.** Envie o **Payload** como **00** para **desligar** o **LED amarelo embutido**



## Recursos

Folha de dados:

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 folha de dados e especificações</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Especificação de Comandos AT do Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">Folha de Dados do STM32WLE5JC</a></p>

Certificações:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Certificação Wio-E5-HF CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Certificação Wio-E5-HF FCC -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Certificação Wio-E5-HF FCC -DTS</a></p>

SDK relevante:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Pacote STM32Cube MCU para a série STM32WL</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## Suporte Técnico & Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


