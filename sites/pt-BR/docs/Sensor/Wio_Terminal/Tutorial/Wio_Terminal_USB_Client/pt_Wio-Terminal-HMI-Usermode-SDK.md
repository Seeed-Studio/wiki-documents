---
description: Crie um display HMI para Windows/MacOS usando o Wio Terminal
title: Crie um display HMI para Windows/MacOS usando o Wio Terminal
keywords:
  - Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-HMI-Usermode-SDK
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-HMI-Usermode-SDK/
---

# Crie um display HMI para Windows/MacOS usando o Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"/></div>

Neste wiki, vamos apresentar como usar o [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como display HMI usando o **SDK em modo usuário para rodar em Windows/Linux/Mac OS.** Isso amplia as possibilidades de uso do Wio Terminal em aplicações industriais!

Se você quiser usar o Wio Terminal com Raspberry Pi como display HMI, consulte este [wiki](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-HMI/).

## Hardware necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Firmware do Wio Terminal

Primeiro, você precisará enviar um programa Arduino para o seu Wio Terminal pelo PC.

- Baixe a biblioteca [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) aqui.

Existem dois **exemplos**, `NullFunctional` e `USBDisplayAndMouseControl`:

1. Se você quiser **maior taxa de atualização de tela no Wio Terminal**, envie o **`NullFunctional`** para o Wio Terminal.
2. Se você quiser que o **Wio Terminal também atue como um mouse USB**, envie o **`USBDisplayAndMouseControl`** para o Wio Terminal.

:::note
Por favor, **leia as notas com atenção**, para o SDK em modo usuário, `USBDISP().begin(true);` torna-se `USBDISP().begin(true, true);`.
:::

### Método `uf2`

Para conveniência, também fornecemos métodos `uf2` para enviar o firmware do Wio Terminal. Basta baixar os arquivos `uf2` abaixo.

- Baixe os arquivos `uf2` do [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2).

- Baixe os arquivos `uf2` do [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2).

Entre no modo bootloader deslizando o interruptor de energia duas vezes rapidamente. Para mais referências, consulte também [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#faq).

Um drive externo chamado `Arduino` deve aparecer no seu PC. Arraste os arquivos uf2 baixados para o drive `Arduino`.

## Firmware do dispositivo host

Desta vez nosso dispositivo host passa a ser o PC, vamos ver como você pode usar o Wio Terminal como display HMI com o SDK em modo usuário!

### MacOS/Linux OS - SDK em C++

- Baixe o repositório de firmware:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git
```

- Navegue até o caminho do SDK em modo usuário:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src
```

Abra o `rpusbdisp.cc` e **defina os macros de acordo com o firmware do seu Wio Terminal (Nullfunctional ou USBDisplayAndMouseControl)**. Descomente aquele que você estiver usando:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"/></div>

- Navegue de volta para o caminho do SDK em modo usuário:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk
```

- Faça o build do driver:

```sh
make
```

:::note
Pode ser necessário instalar alguma biblioteca de dependência como `lisusb`. No MacOS você pode usar o [`brew`](https://brew.sh/) e no Linux pode usar `apt-get` para instalar.
:::

- Navegue até o diretório de build:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/
```

- Execute o demo:

```sh
sudo ./rpusbdispdemo --demo 1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"/></div>

Você deverá ver que o Wio Terminal começa a exibir, com os gráficos sendo desenhados. O código-fonte disso está em: `seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc`.

#### Múltiplas telas

Este SDK em C++ também oferece suporte a múltiplas telas (múltiplos Wio Terminals). Para usar 2 telas, simplesmente execute o demo 2:

```sh
sudo ./rpusbdispdemo --demo 2
```

**Nota:** Aqui são fornecidos 4 demos usando até 4 telas; você pode verificar o código-fonte como referência para suas aplicações.

### Windows - SDK em Python

No Windows, você pode executar o SDK em modo usuário em Python! Primeiro, certifique-se de que instalou o Python e instale a biblioteca de dependência:

:::note
**Python é multiplataforma e você pode executar este demo em todas as plataformas, incluindo Windows/Linux/MacOS**
:::

```sh
pip3 install pyusb
```

- Vá até o caminho do python-demo:

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- Abra o `simple-test.py`, defina os macros corretos de acordo com o firmware dentro do seu Wio Terminal e salve.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"/></div>

- Execute o demo em Python:

```sh
python3 simple-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"/></div>

#### Múltiplas telas

Este SDK em Python também oferece suporte a múltiplas telas (múltiplos Wio Terminals); você pode consultar o `USBDisplay.py` como referência.

Este exemplo usa 4 Wio Terminals como displays, com um formato semelhante ao seguinte:

```py
devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))
dev1 = devices[0] # device 0
dev2 = devices[1] # device 1
dev3 = devices[2] # device 2
dev4 = devices[3] # device 3
```

## Demo simples

Este exemplo simplesmente transfere uma imagem do PC para o Wio Terminal usando Python.

- Vá até o caminho do demo:

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- Baixe o `image.jpg` e salve-o no mesmo local que o `image-test.py`.

**Nota:** Por favor, **escolha os macros que correspondem ao firmware do seu Wio Terminal**, caso contrário ocorrerá um erro.

- Execute o demo:

```sh
python3 image-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"/></div>

## Recursos

- [Documento de protocolos de interface rpusbdisp](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf)

## Suporte técnico e discussão de produtos


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
