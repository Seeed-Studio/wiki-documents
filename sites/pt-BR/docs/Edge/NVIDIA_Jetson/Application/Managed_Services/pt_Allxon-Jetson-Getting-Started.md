---
description: Gerenciamento remoto com Allxon em dispositivos NVIDIA Jetson
title: Primeiros Passos com Allxon
tags:
  - Gerenciamento Remoto
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Allxon-Jetson-Getting-Started
sku: 102110401, 102110406, 102110427, 114110047, 114110049, 114110048, 103110022, 102110637, 103110043, 102110643, 102110644, 102110645, 110991666, 110991725, 110061363, 110061401, 110061361, 110061404, B110061361, 110061381, 114993551, 102111001, 102110999, 114993592, 114993593, 110110145, 110110147, 102110769, 102110770, 114993553
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Allxon-Jetson-Getting-Started/
---

# Primeiros Passos com Allxon em Dispositivos NVIDIA® Jetson

<p style={{textAlign: 'center'}}><img src="https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png" alt="pir" width="1000" height="auto"/></p>

[Allxon](https://www.allxon.com) é uma solução essencial de gerenciamento de dispositivos de borda que simplifica e otimiza o gerenciamento de operações de negócios ao unir o ecossistema de IA/IoT: hardware (IHV), software (ISV) e provedores de serviços (SI/MSP). Como um conector de ecossistema, Allxon é a faísca que acende uma conectividade rápida e perfeita para manter todos os sistemas LIGADOS.

Você pode gerenciar com segurança versões do NVIDIA® JetPack 4.6 em diante com Cyber Security at the Edge protegendo todas as redes e hardwares. Allxon integra inteligência exclusiva de ameaças pelo Trend Micro IoT Security™ (TMIS) para garantir que você receba proteção em múltiplas camadas.

Allxon traz serviços de gerenciamento remoto de dispositivos in-band e out-of-band para todos os dispositivos de borda para ajudar empresas a economizar tempo e eliminar custos exponenciais de mão de obra. Simplesmente navegando em um único portal em nuvem fácil de usar, as empresas podem otimizar e simplificar seus serviços sem esforço.

## Hardware Suportado

- [Suporta todos os dispositivos NVIDIA Jetson](https://www.seeedstudio.com/tag/nvidia.html)

## Pré-requisitos

- Qualquer um dos dispositivos Jetson acima
- Última Jetson OS já instalada no dispositivo Jetson
- Monitor, teclado, mouse (opcional)

## Primeiros Passos

Começar a usar o Allxon leva apenas alguns minutos!

- Introdução à ligação de hardware
- Criar conta Allxon
- Instalar Allxon DMS Agent no dispositivo Jetson
- Obter código de pareamento do dispositivo
- Adicionar dispositivo Jetson ao portal Allxon DMS

### Introdução à ligação de hardware

Definição de pinos para a placa principal OOB Enabler e a cor correspondente
do cabo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/writting-1.png" alt="pir" width="500" height="auto"/></p>
Aqui, usaremos o diagrama de ligação de OBB e Jetson Orin Nano como exemplo. As informações a seguir fornecem exemplos de ligação para o NVIDIA® Jetson™ Orin Nano Dev Kit.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-2.png" alt="pir" width="700" height="auto"/></p>
Também fornecemos um diagrama esquemático da ligação.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-3.png" alt="pir" width="1000" height="auto"/></p>

### Criar conta Allxon

- **Passo 1.** Visite [esta página](https://dms.allxon.com/next/signup) para criar uma conta Allxon

- **Passo 2.** Insira seu endereço de e-mail e prossiga

- **Passo 3.** Verifique a conta a partir do e-mail de ativação que você receber e crie uma senha

### Instalar Allxon DMS Agent no dispositivo Jetson

Instalar o Allxon DMS Agent é um processo muito fácil. Você só precisa executar um comando!

- **Passo 1.** Acesse o dispositivo Jetson, abra o terminal e execute o seguinte

```sh
sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-1.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** O comando acima irá instalar o Allxon DMS Agent e os pacotes relacionados

- **Passo 2.** Ao final da instalação, será perguntado se você deseja instalar o **Trend Micro IoT Security™** como um serviço adicional de segurança de borda e concordar com o TMIS EULA. Você pode digitar **Y** para prosseguir com essa instalação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-2.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Trend Micro IoT Security™ será instalado como uma avaliação gratuita de 3 meses

Após a instalação, o Allxon DMS Agent será iniciado automaticamente.

**Nota:** Se você tiver conectado o dispositivo Jetson a um monitor, verá a janela do Allxon DMS Agent aparecer. Se ela não aparecer, pressione **Ctrl + Shift + B** para iniciar o agente.

### Obter código de pareamento do dispositivo

Primeiro precisamos obter um código de pareamento de dispositivo do nosso dispositivo Jetson. Você pode obter esse código pela GUI ou pela linha de comando

#### Usando GUI

- **Passo 1.** Abra o Allxon DMS Agent pressionando **Ctrl + Shift + B** no dispositivo Jetson

- **Passo 2.** Clique em **Get device pairing code** para obter o código

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/agent-2.png" alt="pir" width="700" height="auto"/></p>

#### Usando linha de comando

- **Passo 1.** Execute o seguinte para obter o código

```sh
dms-get-pairing-code
```

### Adicionar dispositivo Jetson ao portal Allxon DMS

- **Passo 1.** Faça login no [Allxon DMS Portal](https://dms.allxon.com/next/signin) com as credenciais usadas anteriormente

- **Passo 2.** Clique em **Devices** no painel de navegação à esquerda e clique em **+ Add Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-1.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Clique em **Next**, insira o código de pareamento do dispositivo obtido anteriormente e clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-2.png" alt="pir" width="450" height="auto"/></p>

- **Passo 4.** Você verá a seguinte janela se o pareamento for bem-sucedido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-3.png" alt="pir" width="450" height="auto"/></p>

**Nota:** Se você tiver um código de promoção, pode clicar em **Next** e resgatá-lo. Caso contrário, você pode pressionar **Skip** para finalizar a configuração.

### Portal Allxon DMS

Depois que o dispositivo Jetson estiver pareado com o portal Allxon DMS, você verá o dispositivo conectado na página **Devices**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-4.png" alt="pir" width="1000" height="auto"/></p>

Se você clicar no dispositivo, verá mais informações sobre ele. Agora você pode monitorar e gerenciar seu dispositivo remotamente com o portal Allxon DMS!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-5.png" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[Página Web]** [Allxon Resource Center](https://www.allxon.com/knowledge)

- **[Página Web]** [NVIDIA Learn](https://developer.nvidia.com/embedded/learn)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
