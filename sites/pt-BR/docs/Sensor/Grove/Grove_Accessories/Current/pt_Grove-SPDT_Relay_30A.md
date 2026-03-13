---
description: Grove - Relé SPDT(30A)
title: Grove - Relé SPDT(30A)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-SPDT_Relay_30A
sku: 103020012
last_update:
  date: 1/10/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-SPDT_Relay_30A/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay_01.jpg" /></div>

O Relé SPDT(30A) é um relé de alta qualidade de pólo simples e dupla posição (SPDT). O relé é composto por uma bobina, 1 terminal comum, 1 terminal normalmente fechado e 1 terminal normalmente aberto. Quando a bobina do relé está em repouso (não energizada), o terminal comum e o terminal normalmente fechado têm continuidade. Quando a bobina é energizada, o terminal comum e o terminal normalmente aberto têm continuidade. A bobina deste relé é classificada para até 5V e o contato é classificado para até 30A (@250VAC, 30VDC). Você pode usá‑lo para controlar dispositivos de alta corrente.

## Recurso

---

- Alta corrente de comutação
- Relé SPDT
- Relé normalmente fechado

:::tip
  Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificação

---
|Item| Min| Típico |Max |Unidade|
|---|---|---|---|---|
|Tensão de trabalho| 4.75| 5.0| 5.25 |VDC|
|Corrente |-|185|-| mA|
|Tensão de atração (máx.) |-|3.75|-| VDC|
|Tempo de operação (máx.)|-| 15|-| ms|
|Tempo de liberação (máx.)|-| 10|-| ms|
|Temperatura ambiente de operação| -25| - |70 |°C|

## Uso

---
**Com Arduino**

Por que queremos usar um relé e nós realmente precisamos disso? Sempre que você quiser ligar/desligar um dispositivo que consome mais corrente ou que funciona com alta tensão, você precisará usar um relé. Ou seja, o relé é “uma chave de alta tensão ou corrente controlada por baixa tensão”. A bobina de um relé SPDT que usamos com mais frequência consome pouquíssima corrente (o [Grove - Relay](https://wiki.seeedstudio.com/pt-br/Grove-Relay/) suporta 10A). Agora, com este relé de 30A, você pode controlar dispositivos de comutação de corrente muito mais alta, como faróis, luzes de estacionamento, buzinas etc.

A estrutura interna do relé SPDT:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/Relay_Struction.jpg" /></div>

Você pode ver que o terminal comum e o terminal normalmente fechado têm continuidade quando a bobina do relé está em repouso.

Mas, quando a bobina é energizada, o terminal comum e o terminal normalmente aberto terão continuidade.

A instalação de hardware pode ser consultada na imagem a seguir:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay.jpg" /></div>

A codificação para controlar este relé é a mesma do [Grove - Relay](https://wiki.seeedstudio.com/pt-br/Grove-Relay/)

Boa sorte para controlar seu ar‑condicionado ou máquina de lavar, com Arduino e o Grove - SPDT Relay(30A).

**Com Raspberry Pi**

1.Você deve ter um Raspberry Pi e um GrovePi ou GrovePi+.

2.Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](https://wiki.seeedstudio.com/pt-br/GrovePi_Plus#Introduzindo_o_GrovePi.2B).

3.Conexão

- Conecte o sensor ao soquete D4 do GrovePi usando um cabo Grove.

4.Navegue até o diretório de demonstrações:

```
   cd yourpath/GrovePi/Software/Python/
```

Para ver o código

```
   nano grove_spdt_relay.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove SPDT Relay to digital port D4
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # switch on for 5 seconds
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # switch off for 5 seconds
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5.Execute a demonstração.

```
   sudo python grove_spdt_relay.py
```

## Visualizador de Esquema Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recurso

---

- [Arquivo Eagle do Grove - SPDT Relay(30A)](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip)
- [Folha de dados SLA-05VDC-SL-C](https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/SLA-05VDC-SL-C_Datasheet.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

