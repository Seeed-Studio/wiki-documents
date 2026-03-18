---
description: GPRS Shield V3.0
title: GPRS Shield V3.0
keywords:
  - shield Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /GPRS_Shield_V3.0
sku: 113030009
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/GPRS_Shield_V3.0/
---
<!-- ---
name: GPRS Shield V3.0
category: Shield
bzurl: https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html
oldwikiname:  GPRS Shield V3.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V3
sku:  113030009
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/GPRS_Shield_V3.0_p1.jpg)

Esta é a versão 3.0 do GPRS Shield.
Conecte seu Arduino à rede de telefonia celular GSM/GPRS com o GPRS Shield! Agora você pode usar seu Arduino/Seeeduino ou outras placas principais para discar um número de telefone ou enviar uma mensagem de texto para o seu amigo por meio de simples comandos AT fáceis de usar.
O GPRS Shield possui um módulo GSM/GPRS de baixo consumo de energia de quatro bandas SIM900, bem como uma antena PCB compacta. Enquanto isso, melhorias nas interfaces e no circuito básico foram feitas para torná‑lo mais conciso e confiável.
E há duas opções para você comunicar o GPRS Shield com a placa principal — UART ou SoftwareSerial.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html)

## Versão

---
| Revisão | Descrições                                                | Lançamento   |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | Lançamento público inicial (beta)                        | 3 Mar 2011   |
| v1.2     | Adicionada porta de software para ligar/desligar o SIM90 | 2 Dez 2011   |
| v1.4     | Redesenho do circuito de fonte de alimentação, novo layout da PCB | 30 Ago 2012  |
| v2.0     | Suporte a quatro bandas e redesenho da antena PCB        | 3 Fev 2013   |
| v3.0     | Mudança do soquete Arduino para o padrão mais recente do Arduino Uno | 20 Mar 2015  |

**Qual é a diferença entre a V3.0 e as versões anteriores?**

- Mudar o soquete Arduino para o padrão mais recente do Arduino Uno. Exceto por isso, todos os recursos são os mesmos da versão anterior.

## Cuidados

---
- Certifique‑se de que o seu cartão SIM esteja ativado.
- O GPRS Shield não vem com proteção ESD. Tenha cuidado especial ao manuseá‑lo em clima seco.

## Visão geral de hardware

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/Gprs_shield_v3_layout1.png)

Consulte a documentação do [GPRS Shield V2.0](https://wiki.seeedstudio.com/pt-br/GPRS_Shield_V2.0/) para especificações e guia de aplicação.

## Perguntas frequentes

**P1: Como modificar o código para o Leonardo?**

R1: Aqui está o código.

```cpp
#include <SoftwareSerial.h>

unsigned char buffer[64]; // buffer array for data recieve over serial port
int count = 0;     // counter for buffer array

void setup()
{
    Serial1.begin(19200);               // the GPRS baud rate   
    Serial.begin(19200);             // the Serial port of Arduino baud rate.
}

void loop()
{
    if (Serial1.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while (Serial1.available())          // reading data into char array
        {
            buffer[count++] = Serial1.read();     // writing data into array
            if (count == 64)
                break;
        }

        for ( int j=0;j<count;j++)
        {
          Serial.write(buffer[j]);
        }
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
        Serial1.write(Serial.read());       // write it to the GPRS shield
}

void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i < count; i++)
    {
        buffer[i] = NULL;
    }                               // clear all index of array with command NULL
}
```

**P2: Como atualizar o firmware do SIM900?**

P2: Faça o download do firmware "SIM_900_AGPS_instructions" no módulo de recursos do wiki, se você tiver qualquer problema de software ou hardware. E esta versão mais recente pode suportar HTTPS, etc. Para mais informações, consulte a introdução incluída nele.

**P3: E quanto ao RTC do GPRS Shield?**

P3: A especificação do SIM900 diz que ele possui um backup de RTC, mas nós ainda não o utilizamos. Talvez você possa consultar o manual e fazer uma demonstração por conta própria ou nós o faremos no futuro.

**P4: Não consigo enviar nem receber SMS com este GPRS Shield.**

R4: Siga as instruções abaixo.

- Certifique‑se de que o cartão SIM está bem encaixado
- Verifique se o cartão funciona em um telefone.
- Tente fazer o upload do código de teste do nosso wiki e enviar comandos AT para ver se há algum retorno adequado.
- Tente mudar o "#define _SS_MAX_RX_BUFF 64 // RX buffer size" em "libraries\SoftwareSerial\SoftwareSeriall.h" para "#define_SS_MAX_RX_BUFF 128 // RX buffer size

**P5: Duas maneiras alternativas para ajudar a acordar o GPRS Shield**

R5: Aqui estão as 2 maneiras.

- Puxar o pino DTR para nível baixo: A porta serial ficará ativa depois que o DTR for mantido em nível baixo por 20 ms
- Expiração do alarme do RTC

**P6: Que tipo de cartões SIM funcionam com o GPRS Shield?**

R6: O SIM900 usado no GPRS Shield suporta bandas GSM de 850/900/1800/1900 MHz.

## Visualizador online de esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático e PCB do GPRS Shield v3.0 em formato Eagle](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip)
- **[PDF]** [Esquemático do GPRS Shield v3.0 em formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_v3.0%20sch.pdf)
- **[PDF]** [PCB do GPRS Shield v3.0 em formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS%20Shield%20v3.0%20PCB.pdf)
- **[Library]** [Biblioteca GPRS_Shield no gitHub - baseada em Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Library]** [Biblioteca GPRS_SIM900 no gitHub - Não Suli](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Document]** [Comandos AT v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/AT_Commands_v1.11.pdf)
- **[Document]** [Projeto de Hardware do SIM900](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900_HD_V1.05.pdf)
- **[Datasheet]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Datasheet]** [Datasheet do SIM900](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900datasheeet.zip)
- **[Datasheet]** [SIM_900_AGPS_instructions](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM_900_AGPS_instructions.zip)
- **[Tools]** [Firmware e ferramenta do SIM900 (firmware:1137B08SIM900M64_ST)](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B08SIM900M64_ST.zip)
- **[Tools]** [Firmware e ferramenta do SIM900 (firmware:1137B13SIM900M64_ST)](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B13SIM900M64_ST.zip)

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
