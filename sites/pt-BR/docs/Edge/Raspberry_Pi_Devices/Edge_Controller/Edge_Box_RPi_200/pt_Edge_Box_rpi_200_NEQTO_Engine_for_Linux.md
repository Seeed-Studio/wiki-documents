---
description: Introdução ao NEQTO Engine para Linux no EdgeBox-RPI-200
title: Introdução ao NEQTO Engine para Linux no EdgeBox-RPI-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /NEQTO_Engine_for_Linux_EdgeBox-RPI-200
last_update:
  date: 04/25/2024
  author: Kazuhiro Ozuchi
createdAt: '2024-03-29'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/NEQTO_Engine_for_Linux_EdgeBox-RPI-200/
---

## Introdução

NEQTO é um pacote de software leve e seguro que permite às empresas instalar e configurar remotamente seus softwares em dispositivos de borda. NEQTO permite que as empresas forneçam serviços de software aprimorados aos usuários finais por meio de conectores de plataforma turnkey e gerenciamento integrado do ciclo de vida do software.

Dispositivos com NEQTO instalado podem ser gerenciados por meio de API ou do NEQTO Console pronto para uso, que inclui serviços opcionais para armazenamento de dados, alertas e monitoramento watchdog. As empresas podem habilitar AIoT com instalação quase instantânea em qualquer dispositivo Linux e integração perfeita de dados com qualquer servidor local ou em nuvem.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## Pré-requisitos

### Hardware suportado

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox-RPI-200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

- (Qualquer máquina Linux)

:::tip

- Arquiteturas suportadas: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)
- Espaço em disco necessário: ≥ 32 MB
- Espaço de RAM necessário: ≥ 4MB (nas configurações padrão)
- Interfaces de comunicação de rede: deve haver um adaptador de rede físico on-board.
- Monitor, teclado, mouse (opcional)

:::

## Primeiros Passos

### Conexão de Hardware

Consulte Getting Started Edge Box RPI-200 (https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/)

### Cadastre uma conta NEQTO

- Passo 1. Visite esta página (https://console.neqto.com/register) para se cadastrar para uma conta NEQTO
- Passo 2. Insira seu endereço de e-mail, crie uma senha e prossiga
- Passo 3. Verifique a conta a partir do e-mail de ativação que você receber

### Instalação do NEQTO Linux

1. Selecione `Manage API Keys for Linux-based Device` em

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

no NEQTO Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. Clique em `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

Em seguida, a API Key será exibida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

3. Baixe o `NEQTO Engine Linux Installer` usando curl ou wget.

    Desta vez, use o comando wget.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

Copie o `Download link` do `Installer of NEQTO Engine for Linux` e cole-o após "wget ".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be384ccae06004c6d972d.png" alt="pir" width={600} height="auto" /></p>

O instalador foi baixado com sucesso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be2f5ccae06004c6d9725.png" alt="pir" width={600} height="auto" /></p>

4. Altere as permissões de execução do instalador baixado (`neqto-daemon-install.latest.sh`) com o comando chmod antes de executar a instalação do NEQTO Engine para Linux.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be308ccae06004c6d9726.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

5. Copie a `API Key` de `API Keys for NEQTO Engine for Linux` no NEQTO Console e cole-a após `sudo ./neqto-daemon-install.latest.sh -k`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be313ccae06004c6d9727.png" alt="pir" width={600} height="auto" /></p>

6. Logo após a execução, serão exibidas notas importantes. Verifique-as e digite "agree" se concordar. Em seguida, o registro do dispositivo será executado e a instalação do software continuará.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be31dccae06004c6d9728.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Aguarde até que o status final `Installation completed successfully!` seja exibido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be329ccae06004c6d9729.png" alt="pir" width={600} height="auto" /></p>

Confirmação de que o dispositivo foi registrado no NEQTO Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc577ccae06004c6d9713.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. Clique em `ADD GROUP` em `GROUPS`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9ee5ccae06004c6d96bf.png" alt="pir" width={600} height="auto" /></p>

2. Digite `EdgeBox-RPI-200` em `Name` e clique em `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9f21ccae06004c6d96c1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9fa0ccae06004c6d96c2.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Selecione o `EdgeBox-RPI-200` que você criou e clique em `SCRIPTS`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc9b3ccae06004c6d9714.png" alt="pir" width={600} height="auto" /></p>

4. Clique em `ADD SCRIPT`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd119ccae06004c6d9715.png" alt="pir" width={600} height="auto" /></p>

5. Digite `Hello World` no campo `Name` e clique em `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd134ccae06004c6d9716.png" alt="pir" width={600} height="auto" /></p>

6. Copie e cole o [sample code](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) de `Getting Started` no editor de scripts do NEQTO Console e, em seguida, clique em `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd142ccae06004c6d9717.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Clique em `TEMPLATES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd156ccae06004c6d9718.png" alt="pir" width={600} height="auto" /></p>

E então clique em `ADD TEMPLATE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd166ccae06004c6d9719.png" alt="pir" width={600} height="auto" /></p>

8. Defina `DEVICE INFORMATION` da seguinte forma

    - Digite `EdgeBox-RPI-200 Template` para o campo `Name`

    - Selecione `Linux-based device` para o campo `Firmware Type`

    - Selecione a versão mais recente para o campo `Firmware Version`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd177ccae06004c6d971a.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. Em `OPTIONS`, selecione `Hello World` no campo `Script` e clique em `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd186ccae06004c6d971b.png" alt="pir" width={600} height="auto" /></p>

10. Clique em `NODES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd195ccae06004c6d971c.png" alt="pir" width={600} height="auto" /></p>

E depois clique em `ADD NODE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd19eccae06004c6d971d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. Defina `META DATA` como a seguir

    - Defina o campo `Name` como `EdgeBox-RPI-200`

    - Defina o campo `Template` como `EdgeBox-RPI-200 Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1adccae06004c6d971e.png" alt="pir" width={600} height="auto" /></p>

12. Selecione o dispositivo que você acabou de registrar em `DEVICE INFORMATION` e clique em `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1baccae06004c6d971f.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1c8ccae06004c6d9720.png" alt="pir" width={600} height="auto" /></p>

13. Digite `tail -F /tmp/neqto/log/neqto.log` no terminal do EdgeBox-RPI-200

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be347ccae06004c6d972b.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. Após executar `Reload Script` no NEQTO Console, você poderá ver `Hello World!!!` no terminal do EdgeBox-RPI-200

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1eaccae06004c6d9721.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660aad1accae06004c6d96fb.png" alt="pir" width={600} height="auto" /></p>

## O que mais / Solução de Problemas

- [NEQTO Support](https://support.neqto.com/hc/en-us)
- [Support Guidelines](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## Recursos

- [Centro de Recursos NEQTO](https://docs.neqto.com/docs/en/linux/software/requirements)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
