---
description: Xadow - Motor Vibrador
title: Xadow - Motor Vibrador
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Vibrator_Motor
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Vibrator_Motor/
---
![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/Vibration_Motor_01.jpg)

Este pequeno motor vibrador pode vibrar como o seu telefone. Ao usá-lo, você só precisa alimentar o módulo e então enviar o comando "Vibration". Na verdade, o comando "Vibration" define os pinos de controle em nível alto, então ele funcionará. Eu gosto deste módulo porque ele pode criar um choque de curto prazo para me avisar se uma operação foi bem-sucedida, como sacudir meu braço para mudar as músicas do meu iPhone, o que parece terrível, mas não é como o buzzer.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html)


##  Especificações
---
*   tensão de operação: 3.3V

*   Velocidade nominal: 9000rpm

*   controlado por dois sinais digitais

*   Dimensões: 25.43mm x 20.35mm

##  Demonstração
---
Aqui está um código de demonstração mostrando como ligar o motor vibrador.

**Instalação de hardware: **

![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/XadowVibration.jpg)

Nota: ao conectar o Xadow Vibrator Motor à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa se conectar ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
Código de demonstração como este:
```
<pre>
void setup()
{
    DDRF |= 0x01;
    DDRB |= 0x04;
}

void loop()
{
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &= ~(0x01);
    PORTB |= 0x04;
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF |= 0x01;
    PORTB &= ~(0x04);
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &= ~(0x01);
    PORTB &= ~(0x04);
    delay(1000);
}</pre>
```


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
[Arquivo Eagle do Xadow Vibrator Motor](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
