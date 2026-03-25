---
description: Grove Base Shield para Photon
title: Grove Base Shield para Photon
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Shield_for_Photon
sku: 103020031
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Base_Shield_for_Photon/
---
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_product_view_1200_s.jpg)

<!-- **Grove Base Shield for Photon** is an expansion shield board which incorporate [Grove](/pt-br/Grove_System) port on which you can build more powerful and intelligent applications with much richer and cost-effective Grove functional modules. It gets three digital ports, two analog ports, two I<sup>2</sup>C ports and one UART port. It a kind of plug-and-play board which will accelerate your prototyping process dramatically. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Particle-Photon-Base-Shield-p-2598.html?cPath=98_106_57)

##  Recursos
---
*   Interface Grove

*   Conecte a módulos Grove em grande quantidade e de baixo custo

*   Portas I<sup>2</sup>C, UART integradas

##  Ideias de aplicação
---
*   Aplicações IoT compactas, como roteador inteligente.

##  Especificação
---
<table>
<tr>
<td>Portas Grove</td>
<td>3 portas digitais<br/>2 portas analógicas<br/>2 portas I<sup>2</sup>C<br/>1 porta UART.</td>
</tr>
<tr>
<td>Dimensões</td>
<td>53 × 53 mm</td>
</tr>
<tr>
<td>Peso</td>
<td>18g</td>
</tr>
</table>

##  Visão geral do hardware
---
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_component_diagram_annotated_1200_s.jpg)

###  **Lista de peças**

<table>
<tr>
<th>Nome das peças</th>
<th>Quantidade</th>
</tr>
<tr>
<td>Grove Base Shield para Photon</td>
<td>1PC</td>
</tr>
</table>

##  Primeiros passos
---
**Nota:** Neste caso mostramos um ambiente geral de desenvolvimento.

<!-- ###  Material required

*   [Particle Photon](https://www.seeedstudio.com/depot/Particle-Photon-p-2527.html) × 1

*   USB cable (type A to micro type-B) × 1
*   A PC or Mac

*   Grove Base Shield for Photon × 1

*   [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38) × 1 -->

###  Zumbindo

1. Consulte [aqui](https://docs.particle.io/guide/getting-started/connect/core/) para conectar a um dispositivo (PC ou Mac).

:::note
1. Recomendamos que você escolha **node.js v4.2.3 LTS**, especialmente para usuários do Windows 10.
2. Pode ser necessário mais uma etapa depois de executar o comando **particle setup**, que é conectar seu dispositivo (PC ou Mac) a um AP wi-fi cujo nome contenha **Photon**, especialmente no Windows 10.
:::

2. Use o [Web IDE](https://build.particle.io/) para o seu projeto. Faça login com sua conta e escolha seu dispositivo (clique no penúltimo ícone na coluna da esquerda).

:::note
Recomendamos que você escolha o [Web IDE](https://build.particle.io/) para compilar ou fazer flash do seu código para o Photon, o que é muito mais rápido do que usar o Particle Dev, se sua conectividade com a internet não for tão boa.
:::

3. Conecte-os como a seguir:

![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_demo_conneciton_1200_S.jpg)

4. Agora você pode copiar o código a seguir para o Web IDE e fazer o flash para o Photon clicando em um ícone parecido com um raio (o primeiro ícone na coluna da esquerda).

:::note
Copie o código apenas para a aba chamada _**filename.ino**_.
:::

```
/*
   Buzzing
   Use digital pin D4
   This example code is in the public domain.
   by xiaohe
  */
int led1 = D4; //set D4 as output

void setup() {
    pinMode(led1, OUTPUT);
}

void loop() {
    // enable buzzing
    digitalWrite(led1, HIGH);

    // We'll leave it on for 1 second...
    delay(1000);

    // Then we'll turn it off...
    digitalWrite(led1, LOW);

    // Wait 1 second...
    delay(1000);

    // And it will repeat!
}
```

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
*   [Arquivos esquemáticos](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip)

<!-- *   [Grove_System](/pt-br/Grove_System) -->

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>