---
description: Xadow - BLE Slave
title: Xadow - BLE Slave
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_BLE_Slave
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_BLE_Slave/
---

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Xadow_ble_01.jpg)

Este é um módulo Bluetooth 4.0 (módulo escravo Bluetooth 4.0). Em comparação com as versões 2.0 e 3.0 do Bluetooth, ele é mais avançado devido ao menor consumo de energia. Você pode conectar facilmente seu próprio projeto ao dispositivo primário Bluetooth 4.0 usando este módulo. Por exemplo, ele pode transferir os dados detectados sobre as informações do seu corpo para o telefone para exibição ou análise e, então, ajudar você a gerenciar melhor sua condição física.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-Slave-p-1546.html)

## Especificação
---
- Módulo Bluetooth 4.0
- PIN:0000
- Baudrate padrão:38400
- Dimensões: 25.43mm x 20.35mm

## Demonstração
---
Esta demonstração vai mostrar como conectar um dispositivo Bluetooth ao Xadow BLE Slave e se comunicar. Você pode usá-lo para se comunicar com um telefone (com Bluetooth 4.0). Agora vamos fazer um teste:
- Conecte o Xadow BLE Slave à Xadow Main Board e conecte a Main Board ao PC com um cabo USB. No modo normal, o LED azul piscará uma vez por vez. Se o LED azul estiver apagado, clique no botão "reset" na Xadow Main Board.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/XadowBLE.jpg)

:::note
    Ao conectar o XadowBLE Slave à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto não preenchido de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
- Faça o upload do código de teste para sua Xadow Main Board.

```
int error=0;
int n;
void setup()
{
    Serial.begin(38400);
    delay(100);
    PORTB|=0x04;
    TESTIO();
    if(error==0)
    {
        DDRB|=0x81;
        for(n=0;n<40;n++)
        {
            PORTB&=~0x81;
            delay(50);
            PORTB|=0x81;
        }
    }

    Serial1.begin(38400);
}
void loop()
{
    boot();
}
void TESTIO(void)
{
    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
void boot(void)
{
    for(;;)
    {
        if(Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if(Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- Selecione uma ferramenta serial para enviar e receber dados. Aqui usamos o [Sscom32E](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Sscom32E.zip). O BaudRate deve ser 38400.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_serial_tool.jpg)

- Prepare o seu telefone e instale o [APP “BlueSPP”](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip) e inicie o BlueSPP. Lembre-se de que seu dispositivo deve ser Bluetooth 4.0.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_Bluetooth.jpg)

- Clique em "search" para encontrar os dispositivos. Encontre o dispositivo Xadow BLE Slave e pressione para começar a conectar o dispositivo Bluetooth.
-
:::tip
    Você deve parear o telefone com o módulo BLE primeiro no gerenciador de dispositivos do telefone se o 'BlueSPP' não conseguir encontrar o módulo BLE.
:::
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Search_device.jpg)

- Após a conexão, a tela no Dispositivo será a seguinte. Você pode digitar textos e os dados serão enviados. Eles serão exibidos na ferramenta serial do seu PC. Claro, você também pode enviar dados para o telefone pela ferramenta serial do seu PC.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Send_and_Receive_Data.jpg)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/BLE_Slave_send_data.jpg)

## Recursos
---
- [Xadow BLE Slave](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Xadow_BLE_Slave.zip)
- [APP “BlueSPP”](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
