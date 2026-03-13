---
description: Xadow - GPS
title: Xadow - GPS
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_GPS
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_GPS/
---
![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Xadow_gps.jpg)

Xadow GPS é um módulo receptor GNSS OEM, incluindo o Fastrax IT530M e uma pequena antena patch cerâmica quadrada de 12 mm. O módulo de baixo consumo de energia gera uma série de dados no formato padrão NMEA que fornecem posição, informações de satélite e tempo, etc. Este módulo pode ser facilmente conectado diretamente à placa principal Xadow para exibir e registrar as informações acima mencionadas. Ele possui capacidade de aquisição e rastreamento de sinais fracos, tornando-o uma ótima escolha para projetos de navegação.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-GPS-p-1600.html)

## Especificações
---
- Tensão de trabalho: 5,0 VCC
- Canais: 99/33 (busca/rastreamento)
- Sensibilidade de navegação: -165 dBm
- Sensibilidade de rastreamento: -148 dBm
- Tempo até a primeira correção (aquisição fria): 23 s
- Tempo até a primeira correção (aquisição morna): 23 s
- Tempo até a primeira correção (aquisição quente): 1 s
- Taxa de atualização: 1 Hz (configurável até 10 Hz)
- Protocolo de dados: NMEA-0183 rev. 3.01
- Modo de comunicação: UART
- Taxa de baud padrão: 115200 b/s
- Temperatura de operação: -40°C ~+85°C
- Dimensões: 25,43 mm x 20,35 mm

## Demonstração
---
Há um exemplo mostrando como ler dados do GPS usando software serial e enviá-los de volta pela porta serial.

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/IMG_4200.JPG)

:::note
Ao conectar o Xadow GPS à placa principal Xadow, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
}

void loop()
{
    for(;;)
    {
        // copy from virtual serial line to uart and vice versa
   /*
    */
        if (Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if (Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- Abra o monitor serial, você poderá ver:

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_serial_monitor.jpg)

Há todas as informações sobre o protocolo de comunicação NMEA 0183. Na verdade, só precisamos extrair os dados de localização, o restante pode ser ignorado. Os dados $GPRMC são úteis para nós. Agora vamos analisar o significado detalhado:

$GPRMC,091308.000,A,2235.1683,N,11356.3607,E,0.37,259.79,050813,,,A*6E

- 091308.000－－significa Hora Média de Greenwich (o horário padrão mundial) 09:13:8 da manhã. O horário padrão em Pequim é oito horas à frente da Hora Média de Greenwich, então o horário em Pequim é 17:13.
- A－－significa que os dados são válidos; se a letra for V, significa que os dados $GPRMC são inválidos.
- 2235.1683,N－－latitude 22,351683 graus.
- 11356.3607,E－－longitude leste 113,563607 graus.
- 0.37 -- significa taxa de movimento.
- 259.79－－significa direção do movimento. o norte é 0 graus, leste é 90 graus, sul é 180 graus, oeste é 270 graus.
- 050813－－significa 5 de agosto de 2013.

**Também podemos observar esses dados usando o u-center.**
- Baixe o [u-center](https://www.u-blox.com/en/product/u-center-windows) e instale-o em seu computador.
- Clique em Receiver - > Port e selecione a porta COM que a placa principal Xadow está usando. Se você estiver com o monitor serial da IDE do Arduino aberto, feche-o.
- Clique em Receiver -> Baudrate e certifique-se de que 9600 está selecionado.
- Clique em View -> Text Console e você deverá obter uma janela que irá transmitir dados NMEA como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_u-_center.jpg)

- A parte direita na figura acima é Posição dos Satélites, Posição no Mundo, Bússola, Relógio. Você pode clicar em View -> Docking Windows e selecionar as janelas que deseja ver.


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Xadow GPS](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip)
- [Esquemático do Xadow GPS em PDF](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_in_Schematic.pdf)
- [Folha de Dados do Fastrax IT530M](https://files.seeedstudio.com/wiki/Xadow_GPS/res/IT530M_DataSheet.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
