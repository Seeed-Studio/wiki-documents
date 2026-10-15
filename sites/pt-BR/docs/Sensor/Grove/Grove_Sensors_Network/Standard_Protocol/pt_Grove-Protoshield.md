---
title: Grove - Protoshield
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Protoshield.md/
slug: /Grove-Protoshield
sku: 101020035
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Protoshield/
---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proto1.jpg)

Este Grove permite que você adicione seus próprios circuitos ou componentes aos seus protótipos do sistema Grove. Ele oferece acesso a todas as quatro linhas do cabo conector Grove – S0, S1, VCC e GND. Há também um espaço reservado para um botão normalmente aberto. O espaçamento padrão de 2,54 mm facilita a instalação de CIs em formato DIP normal e outros componentes na placa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Protoshield-p-772.html)

## Recursos

---

* Interface Grove padronizada
* Estilo breadboard
* Espaçamentos padrão
* Serigrafia com rótulos
* Espaço reservado para botão normalmente aberto

## Interface

---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Grove-Protoshield_Interface_1.jpg)

VCC e GND da interface Grove são encaminhados como dois barramentos, como mostrado acima. Você pode encontrar as ilhas de solda de Sig0 e Sig1 entre os dois barramentos de alimentação.

## Uso

---
VCC e GND da interface Grove são encaminhados como dois barramentos, como mostrado acima. Você pode encontrar as ilhas de solda de Sig0 e Sig1 entre os dois barramentos de alimentação. Elas são marcadas por linhas brancas.
A área quadrada à direita é para um botão temporário ubíquo; você pode facilmente encaixar um como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield1.jpg)

Além disso, o protoshield é enviado com dois headers macho de 20 pinos. Você pode quebrá-los em pedaços menores e soldá-los no protoshield quando precisar de extensão em outra breadboard ou protoboard. Eles funcionam bem com jumpers normais de breadboard.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield2.jpg)

**Demo: Acender o LED**

1. Insira o pino mais longo do LED na interface VCC e o pino mais curto na interface Sig0.

2. Solde o LED no Protoshield.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proshield3.jpg)

3. Conecte o módulo ao Digital 8 do Grove - Basic Shield usando o cabo Grove de 4 pinos.

4. Conecte o Grove - Basic Shield ao Arduino e conecte o Arduino ao PC usando um cabo USB.

5. Copie e cole o código abaixo em um novo sketch do Arduino. Clique [aqui](https://wiki.seeedstudio.com/pt-br/Upload_Code) se você não souber como fazer o upload.

```
Demo code:
int led = 8;

// the setup routine runs once when you press reset:
void setup() {
    // initialize the digital pin as an output.
    pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
    digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
    delay(1000);               // wait for a second
    digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
    delay(1000);               // wait for a second
}
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
* [Arquivo Eagle do Grove_-_Protoshield](https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
