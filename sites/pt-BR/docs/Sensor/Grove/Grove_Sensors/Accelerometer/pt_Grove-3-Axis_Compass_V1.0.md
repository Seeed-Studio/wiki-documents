---
description: Grove - Bússola de 3 Eixos V1.0
title: Grove - Bússola de 3 Eixos V1.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Compass_V1.0
sku: 101020034
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Compass_V1.0/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg" alt="pir" width={600} height="auto" /></p>

Esta bússola digital de 3 eixos utiliza um módulo multichip de detecção de campo magnético de baixa intensidade HMC5883L, que fornece precisão de rumo de até 1° a 2°. O HMC5883L é composto por sensores magnetorresistivos de alta resolução da série HMC118X, bem como por um ASIC desenvolvido pela Honeywell contendo amplificação, drivers de desmagnetização automática, cancelamento de offset e ADC de 12 bits. Com o circuito periférico de gerenciamento de energia adicionado, este é um módulo de bússola fácil de usar e confiável para navegação magnética e magnetometria de baixo custo.

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)

Especificações
--------------

- Tensão de entrada: 3,3 V, 5 V
- Corrente em modo de suspensão: 2,5 uA
- Corrente em modo de medição: 640 uA
- Alta resolução
- Interface I2C fácil de controlar
- Compatível com plataforma de desenvolvimento de 3,3 V ou 5,0 V
- Taxa máxima de saída de 116 Hz
- Alta precisão de rumo

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas Suportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever a própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

Esta demonstração vai mostrar como ler dados brutos, como calibrar os dados com o seu ângulo de declinação magnética local e como obter o ângulo de rumo.

Antes de qualquer ação que você vá realizar, primeiro é preciso preparar um parâmetro que será usado na demonstração: a sua declinação magnética local.

Você pode encontrá-la em graus através da [página da declinação magnética](http://www.magnetic-declination.com/). Por exemplo, a minha é -2°37’, que corresponde a -2,617 grau.

Depois converta de graus para radianos, e assim você obtém o "declinationAngle". Por exemplo, no meu caso, declinationAngle = -2,617 \* π / 180 = -0,0456752665 rad. Três algarismos significativos são suficientes. Então eu o arredondaria para -0,0456 rad. E este é o parâmetro com o qual você vai substituir o valor de "declinationAngle" no código de demonstração.

Agora vamos começar a executar a sua bússola.

1. Conecte a bússola de 3 eixos à porta I2C do Grove - Base Shield.

2. Baixe o arquivo de biblioteca: [Digital Compass Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip). Descompacte-o na pasta libraries da IDE Arduino pelo caminho: ..\\arduino-1.0.1\\libraries.

3. Abra a demonstração pelo caminho: File ->Example ->Digital Compass ->HMC5883L_Example.

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg" alt="pir" width={600} height="auto" /></p>

4. Substitua o valor da variável "declinitionAngle" pelo valor que você já calculou.

5. Envie o código (upload).

6. Verifique o resultado da saída abrindo o monitor serial.

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg" alt="pir" width={600} height="auto" /></p>

### Brincar com Raspberry Pi (com GrovePi_Plus)

1. Você deve ter um Raspberry Pi e um GrovePi ou GrovePi+.

2. Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](/pt-br/GrovePi_Plus/).

3. Conexão

- Conecte o sensor ao soquete grovepi i2c-x(1~3) usando um cabo Grove.

4. Navegue até o diretório de demos:

       cd yourpath/GrovePi/Software/Python/

- Para ver o código

```
    nano grove_compass_lib.py       
    nano grove_compass_example.py    
```

```
    import grove_compass_lib
    c=grove_compass_lib.compass()
    while True:
            print "X:",c.x,"Y:",c.y,"X:",c.z,"Heading:",c.headingDegrees
            c.update()
            time.sleep(.1)
```

5. Execute a demonstração.

```
    sudo python grove_compass_example.py
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo Eagle da Grove-3-Axis Digital Compass](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip)
- [HMC5883.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/HMC5883.pdf "File:HMC5883.pdf")
- [Digital Compass Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Compass_V1.0 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
