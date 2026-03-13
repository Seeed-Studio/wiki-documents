---
description: reTerminal-FAQ
title: Solução de Problemas de Improbidade da Tela de Toque
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /troubleshooting-touch-screen-inaccuracy
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/troubleshooting-touch-screen-inaccuracy/
---

 <!-- Q12: Troubleshooting Touch Screen Inaccuracy -->

Depois de configurar a tela para a orientação correta, a posição do toque ainda pode estar imprecisa, fazendo com que o cursor se mova em direções inesperadas quando você toca uma área específica do display. Para resolver esse problema, é essencial seguir as etapas abaixo.

- **Etapa 1** : Abra o terminal e acesse a pasta xorg.conf.d digitando

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **Etapa 2** : Você terá acesso ao arquivo "40-libinput.conf", que pode ser editado utilizando o comando.

```sh
sudo nano 40-libinput.conf
```

- **Etapa 3**: Encontre a seção InputClass de InputClass de **touchscreen**.

- **Etapa 4**: Adicione a frase a seguir. Você pode consultar a captura de tela

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **Etapa 5** : Salve com Ctrl+O e pressione Enter, depois Ctrl+X e em seguida reinicie

```sh
Sudo reboot 
```

Após reiniciar, você poderá notar que a posição do toque agora está precisa. Isso significa que, quando você tocar uma área específica do display, o cursor se moverá na direção pretendida.
