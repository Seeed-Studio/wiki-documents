---
title: Visão Geral
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview/
slug: /Wio-Terminal-Network-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview/
---
# Visão Geral

Este wiki apresenta como atualizar o firmware mais recente para o núcleo sem fio Realtek RTL8720 no Wio Terminal, bem como instalar todas as bibliotecas dependentes para que o Wio Terminal habilite a conectividade sem fio.

:::note
**Nós movemos o Software de Wi-Fi para a nova Estrutura eRPC, que é mais estável e pode funcionar com Bluetooth ao mesmo tempo**! Siga as instruções para atualizar para o firmware eRPC Wi-Fi e bibliotecas relacionadas!
:::

## Atualizar o Firmware do Núcleo Sem Fio

Primeiro, precisamos atualizar o firmware para o núcleo sem fio Realtek RTL8720 no Wio Terminal. **Isto é essencial e o firmware deve ser atualizado para a versão mais recente antes de prosseguir para os exemplos.**

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atenção</p>
    <p style={{color: '#000000', fontSize: 14}}>Atualize o Núcleo de Wi-Fi antes de usar!</p>
  </div>
</div>

### Etapa 1 - Apagar o Firmware de Fábrica Inicial

Quando você colocar as mãos no Wio Terminal pela primeira vez, será necessário apagar o firmware RTL8720 inicial e gravar o firmware mais recente. Preparamos uma ferramenta para isso chamada **ambd_flash_tool**, e quando você executa essa ferramenta, ela primeiro habilita uma conexão serial de SAMD51 para RTL8720 para que o firmware seja instalado no RTL8720. Isso é feito porque você não pode se comunicar diretamente com o RTL8720. Depois disso, esta ferramenta pode ser usada para apagar o firmware existente no RTL8720 e também gravar o firmware mais recente.

**NOTA**: Você só precisa apagar o firmware de fábrica na primeira vez. Depois disso, você pode gravar um novo firmware para substituir o firmware existente

#### Para Windows

- **ETAPA 1:** Abra o **Windows PowerShell** no seu PC e execute os comandos abaixo para baixar a ferramenta de gravação

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTA**: Aqui o comando **cd ~** leva você ao seu diretório pessoal e o comando **git clone** baixa o repositório do GitHub

- **ETAPA 2:** Navegue até o diretório **ambd_flash_tool**

```sh
cd ambd_flash_tool
```

- **ETAPA 3:** Conecte o Wio Terminal ao PC e ligue-o

- **ETAPA 4:** Execute o seguinte comando para apagar o firmware inicial

```sh
.\ambd_flash_tool.exe erase
```

**NOTA:** O processo inicial de apagamento pode levar um tempo. Tenha paciência e **não** feche a janela

> A porta serial conectada do Wio Terminal será detectada automaticamente!

**NOTA**: Se você quiser abrir a ajuda de uso, execute `.\ambd_flash_tool.exe`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png" alt="pir" width={700} height="auto" /></p>

#### Para Mac/ Linux

- **ETAPA 1:** Abra o **Terminal** no seu Mac/Linux e execute os comandos abaixo para baixar a ferramenta de gravação

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTA**: Aqui o comando **cd ~** leva você ao seu diretório pessoal e o comando **git clone** baixa o repositório do GitHub

- **ETAPA 2:** Navegue até o diretório **ambd_flash_tool**

```sh
cd ambd_flash_tool
```

- **ETAPA 3:** Conecte o Wio Terminal ao PC e ligue-o

- **ETAPA 4:** Execute o seguinte comando para apagar o firmware inicial

```sh
python3 ambd_flash_tool.py erase
```

**NOTA**: Certifique-se de ter o **Python 3 instalado no seu Mac/ Linux**, e o script fará o download automático de todas as bibliotecas dependentes

> Em alguns casos, você pode ter apenas o Python 3 no seu PC, então substitua `python3 ambd_flash_tool.py` por `python ambd_flash_tool.py`

**NOTA:** O processo inicial de apagamento pode levar um tempo. Tenha paciência e **não** feche a janela

> A porta serial conectada do Wio Terminal será detectada automaticamente!

**NOTA**: Se você quiser abrir a ajuda de uso, execute `python3 ambd_flash_tool.py`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png" alt="pir" width={750} height="auto" /></p>

### Etapa 2 - Gravar o Firmware Mais Recente

#### Para Windows

- Enquanto você estiver dentro do diretório **ambd_flash_tool**, execute o seguinte comando para gravar o **firmware mais recente** no RTL8720

```sh
.\ambd_flash_tool.exe flash
```

#### Para Mac/ Linux

- Enquanto você estiver dentro do diretório **ambd_flash_tool**, execute o seguinte comando para gravar o **firmware mais recente** no RTL8720

```sh
python3 ambd_flash_tool.py flash
```

### Gravar um Firmware Antigo (Extra - Pode Pular)

Se você quiser testar seu código com uma versão antiga de firmware, pode fazê-lo seguindo as etapas abaixo. No entanto, se quiser começar com o firmware mais recente, você pode ficar com a etapa acima **(Etapa 2)** e pular esta etapa

#### Para Windows

- **ETAPA 1:** Visite o repositório [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) no GitHub

- **ETAPA 2:** Escolha uma **versão de release** de sua preferência e clique em **xxx-seeed-ambd-firmware-rpc-vxxx.zip** para baixá-la como um **arquivo .zip**

- **ETAPA 3:** Navegue até o diretório **ambd_flash_tool** usando o **Windows PowerShell** como mencionado antes e execute o seguinte comando

```sh
.\ambd_flash_tool.exe flash -d [RTL8720-firmware-path]
```

**NOTA:** Substitua `[RTL8720-firmware-path]` pelo caminho onde você fez o download do RTL8720 acima. Esta pasta deve conter todos estes 3 arquivos: `km0_boot_all.bin`, `km0_km4_image2.bin` e `km4_boot_all.bin`

Se tudo correr bem, você deverá ver uma mensagem de sucesso. Agora você gravou o firmware RTL8720 no núcleo RTL8720!

#### Para Mac/ Linux

- **ETAPA 1:** Visite o repositório [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) no GitHub

- **ETAPA 2:** Escolha uma versão de release de sua preferência e clique em **xxx-seeed-ambd-firmware-rpc-vxxx.zip** para baixá-la como um **arquivo .zip**

- **ETAPA 3:** Navegue até o diretório **ambd_flash_tool** usando o **terminal** como mencionado antes e execute o seguinte comando

```sh
python3 ambd_flash_tool.py flash -d [RTL8720-firmware-path]
```

**NOTA:** Substitua `[RTL8720-firmware-path]` pelo caminho onde você fez o download do RTL8720 acima. Esta pasta deve conter todos estes 3 arquivos: `km0_boot_all.bin`, `km0_km4_image2.bin` e `km4_boot_all.bin`

Se tudo correr bem, você deverá ver uma mensagem de sucesso. Agora você gravou o firmware RTL8720 no núcleo RTL8720!

## Verificar a Versão do Firmware RTL8720 a partir da Arduino IDE

Após instalar o firmware acima, você pode verificar se o firmware está instalado corretamente, carregando o código a seguir no Wio Terminal via **Arduino IDE**

```cpp
#include "rpcWiFi.h"
#include <erpc/erpc_port.h>

void setup() {
    Serial.begin(115200);
    while(!Serial); // Wait to open Serial Monitor
    char* version = rpc_system_version();
    Serial.print("RTL8720 Firmware Version: ");
    Serial.println(version);
    erpc_free(version);
}

void loop() {
}
```

Quando você abrir o **Serial Monitor**, deverá ver a **versão do firmware** impressa

## Atualizar Seeed SAMD ArduinoCore

:::note
Atualize o **Seeed SAMD ArduinoCore para a versão mais recente (1.8.1)**!
:::

- **ETAPA 1:** Abra a **Arduino IDE** e clique em `Tools` -> `Board` -> `Boards Manager`, e procure por **Wio Terminal** na caixa de pesquisa

- **ETAPA 2:** Certifique-se de que a versão mais recente (1.8.1) esteja instalada. Caso contrário, clique no menu suspenso `Select version`, selecione a versão mais recente e clique em `Install`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> Você também pode encontrar o código-fonte do Seeed SAMD ArduinoCore [**aqui**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## Instalação de Bibliotecas

Existem algumas bibliotecas Arduino necessárias para a conectividade sem fio. Incluímos todas as bibliotecas relacionadas a wireless para o Wio Terminal no **Arduino Library Manager**. Então você simplesmente precisa abrir o Arduino Library Manager dentro da Arduino IDE, procurar as bibliotecas que precisa e instalá-las facilmente!

### Como Instalar uma Biblioteca a partir do Arduino Library Manager

- **ETAPA 1:** Abra a **Arduino IDE** e clique em `Sketch` -> `Include Library` -> `Manage Libraries...`

- **ETAPA 2:** Digite o **nome da biblioteca** de que precisamos e selecione a **versão mais recente** no menu suspenso (se disponível)

- **ETAPA 3:** Clique em **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Bibliotecas Necessárias para Wi-Fi

Precisamos das seguintes bibliotecas para começar com o Wi-Fi no Wio Terminal. Você pode procurar essas bibliotecas digitando o nome da biblioteca na caixa de pesquisa do Arduino Library Manager.

Para sua conveniência, reunimos todas as bibliotecas. Assim, para a documentação futura e para atualizar a documentação atual, você só precisa instalar rpcwifi e então ela instalará para você todas as bibliotecas dependentes de wifi.

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - procure por `"seeed rpcwifi"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - procure por `"seeed rpcunified"`

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - procure por `"seeed mbedtls"`

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - procure por `"seeed fs"`

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - procure por `"seeed sfud"`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/newliarary.png" alt="pir" width={700} height="auto" /></p>

## Lançamento

<table align="center">
  <tbody><tr>
      <td align="center">Data de Atualização</td>
      <td align="center">Autor</td>
      <td align="center">Detalhes</td>
    </tr>
    <tr>
      <td align="center">10.12</td>
      <td align="center">BILL and LAKSHANTHA</td>
      <td align="center">Reunir todas as bibliotecas necessárias</td>
    </tr>
  </tbody></table>

## Suporte Técnico & Discussão de Produtos

 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
