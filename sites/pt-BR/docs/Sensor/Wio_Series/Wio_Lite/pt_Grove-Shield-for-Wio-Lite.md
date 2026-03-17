---
title: Grove-Shield-for-Wio-Lite
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Shield-for-Wio-Lite/
slug: /Grove-Shield-for-Wio-Lite
sku: 103020252
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Shield-for-Wio-Lite/
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-wiki.jpg)

O Grove Shield para Wio Lite é feito para a Série Wio Lite da Seeed Studio. Agora o Wio Lite W600 está disponível, nós lançaremos mais placas Wio em breve. Além disso, este Grove Shield pode funcionar com as placas Adafruit Feather. Ele traz mais de 200 módulos Grove para a comunidade Wio Lite e Feather. 


Este Shield pode expor os pinos do processador do Wio Lite (por exemplo, é o SAM D21 para o Wio Lite W600) na forma de cabeçalhos e conectores Grove. Há 4 conectores Grove digitais e 4 conectores Grove analógicos, uma porta Grove UART e uma porta Grove I2C. 



<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Especificações

| Parâmetro             | Valor/Faixa    |
|-----------------------|----------------|
| Tensão de operação    | 3.3 / 5V       |
| Temperatura de operação | -25℃ a +85℃ |
| Portas analógicas     | 4              |
| Portas digitais       | 4              |
| Portas UART           | 1              |
| Portas I2C            | 1              |
| Tamanho               | 60mm x52mm     |



## Placas compatíveis

O Base Shield foi testado e é totalmente compatível com as seguintes placas:

- [Wio Lite - W600](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
- [Wio Lite - MG126](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- Placa Feather Adafruit baseada em SAMD21 


E esta placa também é compatível em forma com as outras placas Adafruit Feather. Por favor, confira a numeração dos pinos quando você usar este shield com essas placas Adafruit Feather.



## Visão geral de hardware



![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0.jpg)



- **Portas analógicas**: incluem 4 portas analógicas, 5 pinos analógicos

>Porta A0 incluindo os pinos A0 e A1 

>Porta A1 incluindo os pinos A1 e A2 

>Porta A2 incluindo os pinos A2 e A3 

>Porta A3 incluindo os pinos A3 e A4

- **Portas digitais**: incluem 4 portas digitais, 5 pinos digitais

>Porta D5 incluindo os pinos D5 e D6 

>Porta D6 incluindo os pinos D6 e D9 

>Porta D9 incluindo os pinos D9 e D10 

>Porta D10 incluindo os pinos D10 e D11

:::caution
        Como portas adjacentes contêm o mesmo pino, por exemplo, tanto a porta A0 quanto a porta A1 têm pinos A1, tenha cuidado para não ter conflitos de pinos ao usar portas adjacentes ao mesmo tempo. Por exemplo, se o módulo X usar o pino A1 da porta A0, então você não deve usar o pino A1 da porta A1 para outro módulo. 
:::

- **Porta UART**: 1 porta UART.

- **Portas I2C**: 1 porta I2C.

- **Chave de alimentação**: Se você usar USB tipo C para alimentar sua placa Wio Lite, selecione o modo 5V e, se você usar a bateria lipo, selecione o modo 3.3V. 


### Pinagem

Para a pinagem, consulte a serigrafia na parte de trás deste shield.

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/wiki-pinout.jpg)


## Visualizador online do esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

- **[ZIP]** [Arquivo de esquemático do Grove Shield para Wio Lite](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip)



## Suporte técnico e discussão de produto
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>