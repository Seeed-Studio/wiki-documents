---
description: Shield Carregador Solar
title: Shield Carregador Solar
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Solar_Charger_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Solar_Charger_Shield/
---

<!-- ---
name:  Solar Charger Shield
category: Discontinued
bzurl:
oldwikiname: Solar_Charger_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Solar_Charger_Shield
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solar-charger-shield.jpg)

O carregador solar é um shield empilhável para plataformas compatíveis com Arduino, que permite alimentação adaptativa por bateria e atua como coletor de energia para carregamento em campo. Você pode usar várias baterias apenas para elevar a saída para 5V, ou colocar uma bateria de íon de lítio e um painel solar para formar uma unidade de sensor autônoma.

**Model:[INT107D3P](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)**

## Recursos  

### Carregamento

* Ajuste automático da corrente de carga de acordo com a capacidade da fonte

* Projetado para fontes de alimentação inconstantes, como painel solar

* Curva de carregamento otimizada para baterias de íon de lítio

* Indicador de status de carregamento

### Alimentação

* Ampla faixa de tensão de entrada de 0,9-4,2V

* Saída regulada de 5 VCC

* Saída máxima de 500mA

* Eficiência de conversão máxima de 87%

* Proteção contra sobrecorrente de 1A integrada

## Ideias de Aplicação  

* Aplicação1
* Aplicação2
* Aplicação3

## Cuidados  

Os avisos e operações incorretas podem causar situações perigosas.

## Especificação

### Especificação Principal

<table>
  <tbody>
    <tr>
      <td width="400px">Tamanho da placa</td>
      <td width="400px">5.3 x 6.9 x 0.16 cm</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Indicadores</td>
      <td>Carregando, completo</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Fonte de alimentação</td>
      <td>4.4VDV-6VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Conector de alimentação</td>
      <td>Mini USB / JST</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>RoHS</td>
      <td>SIM</td>
    </tr>
  </tbody>
</table>

### Carregando

<table>
  <tbody>
    <tr>
      <th>Especificação</th>
      <th>Mín</th>
      <th>Norm</th>
      <th>Máx</th>
      <th>Unidade</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>Tensão de entrada</td>
      <td width={100}>4.4</td>
      <td width={100}>5</td>
      <td width={100}>6</td>
      <td width={100}>VCC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Limiar de baixa potência</td>
      <td></td>
      <td>3.7</td>
      <td>3.9</td>
      <td>VCC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Tensão de carga</td>
      <td>4.158</td>
      <td>4.2</td>
      <td>4.242</td>
      <td>VCC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Limiar de pré-carga</td>
      <td>2.9</td>
      <td>3</td>
      <td>3.1</td>
      <td>VCC</td>
    </tr>
  </tbody>
</table>

### Fornecimento de Energia

<table>
  <tbody>
    <tr>
      <th>Especificação</th>
      <th>Mín</th>
      <th>Norm</th>
      <th>Máx</th>
      <th>Unidade</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>Tensão da bateria</td>
      <td width={100}>2.8</td>
      <td width={100}>3.7</td>
      <td width={100}>4.2</td>
      <td width={100}>VCC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Tensão de saída</td>
      <td>4.6</td>
      <td>4.8</td>
      <td>5.0</td>
      <td>VCC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Corrente de saída</td>
      <td>200</td>
      <td>4.2</td>
      <td>500</td>
      <td>mA</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Eficiência de elevação de nível</td>
      <td>70</td>
      <td>80</td>
      <td>87</td>
      <td>&nbsp;%</td>
    </tr>
  </tbody>
</table>

### Curva de carga

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Changing-curve.jpg)

## Definição de pinos e Classificação  

## Dimensões Mecânicas  

## Uso  

### Instalação de Hardware  

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware.jpg)

1.Configuração empilhada, coloque a bateria entre os cabeçalhos de pinos, observe a polaridade ao conectar os fios ao conector da bateria.

(Vermelho no +, preto no -).

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step1.jpg)

2.O painel solar ou outras fontes de energia devem ser conectados ao PWR1, conector do painel solar.

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step2.jpg)

**Fonte de energia: (saída de 4V a 6V)**

Célula solar de 5V

Saída regulada de motor

**Bateria recarregável (3,7V a 4,2V)**

Bateria de lítio

Bateria NiMh

**Bateria comum (de 2,8V a 4,2V)**

AAA

AA

### Programação  

Inclui trecho de código importante.
Código de demonstração como:

```
Demo code
{

}
```

### Exemplo  

Os projetos e exemplos de aplicação.

## Lista de Materiais (BOM) /lista de peças  

Todos os componentes usados para produzir o produto.

## FAQ  

Por favor, liste sua pergunta aqui:

## Suporte  

Se você tiver dúvidas ou outras ideias de design melhores, pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou ao **wish** para discutir.

## Rastreador de Versão  

<table>
  <tbody>
    <tr>
      <th>Revisão</th>
      <th>Descrições</th>
      <th>Data de Lançamento</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}>Solar Charger Shield v1.0</td>
      <td width={500}>Lançamento público inicial</td>
      <td width={200}>01 de maio de 2010</td>
    </tr>
  </tbody>
</table>

## Rastreador de Bugs  

O Rastreador de Bugs é o lugar onde você pode publicar quaisquer bugs que acha que possa ter encontrado durante o uso. Por favor, escreva o que você tem a dizer, suas respostas nos ajudarão a melhorar nossos produtos.

## Ideia Adicional  

A Ideia Adicional é o lugar para escrever suas ideias de projeto sobre este produto, ou outros usos que você tenha descoberto. Ou você pode escrevê-las na página de Projetos.

## Como comprar  

Aqui para comprar o Solar Charger Shield: [https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)

## Licenciamento  

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição-CompartilhaIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código-fonte para mais detalhes.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
