---
description: Guia de configuração do Reachy Mini Wireless, incluindo instruções de montagem, primeira inicialização, configuração de Wi‑Fi, atualização do sistema e acesso SSH.
title: Guia de Configuração do Reachy Mini Wireless
slug: /reachymini_platforms_reachy_mini_get_started
keywords:
  - wireless
  - setup
  - assembly
  - wi-fi
  - first boot
  - configuration
  - ssh
  - update
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_get_started/
---

# Reachy Mini (Wireless) - Guia de Configuração

O **Reachy Mini (Wireless)** é a versão autônoma alimentada por um Raspberry Pi Compute Module 4 (CM4). Ele funciona de forma independente usando sua bateria interna e conexão Wi‑Fi.

## 1. 🔧 Montagem

O Reachy Mini vem em forma de kit. Montá‑lo é o primeiro passo da sua jornada!

* **Tempo necessário:** de 2 a 3 horas.
* **Ferramentas:** tudo está incluído na caixa.
* **Instruções:** recomendamos fortemente seguir o vídeo de montagem junto com o manual.

:::tip Dica Pro
Recomendamos fortemente manter o **Guia Online** ou o **vídeo de montagem** abertos junto com o livreto em papel (veja abaixo). A versão online inclui pequenos trechos de vídeo para cada etapa, o que torna a montagem muito mais fácil de entender.
:::

| **📖 Guia Digital Interativo** | **📺 Vídeo Completo de Montagem** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/digital_assembly_guide_preview_mini.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>[**Abrir Guia Passo a Passo**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>*(Inclui pequenos loops de vídeo)* | [![Watch on YouTube](https://img.youtube.com/vi/WeKKdnuXca4/maxresdefault.jpg)](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>[**Assistir no YouTube**](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>*(Vídeo com seções para cada etapa)* |


## 2. 🛜 Primeira Inicialização e Configuração do Wi‑Fi

Depois de montado, você precisa conectar o robô à sua rede Wi‑Fi.

1.  **Ligar:** Ligue o seu Reachy Mini.
2. **Baixar Reachy Mini Control:** Se ainda não o fez, baixe e instale o app **Reachy Mini Control** a partir do [site oficial](https://hf.co/reachy-mini/#/download).
3. **Executar o app:** Abra o **Reachy Mini Control** e clique no link inferior **"First time connecting..."**.
![First time connecting](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-1.png)
4. **Seguir as instruções:** O app irá guiá‑lo pelo processo de conexão. Ele pedirá que você se conecte ao ponto de acesso Wi‑Fi do robô e, em seguida, configure o seu Wi‑Fi.
![Configuring your WiFi](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-2.png)

## 3. 🔄 Atualizar o Sistema

Antes de ir mais longe, é altamente recomendado atualizar o seu robô para a versão mais recente.

1. Conecte‑se ao seu robô usando o **Reachy Mini Control**.
2. Depois de conectado, clique na aba de configurações **"⚙️"**.
![Settings Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-settings.png)
3. Vá até a seção **System Updates**.
![System Update Section](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-update.png)
4.  **Instalar:** Se uma nova versão estiver disponível, siga as instruções na tela para instalá‑la.


## 4. 🕹️ Próximo Passo: Usar o Robô

Agora que o seu robô está online e atualizado, você pode começar a controlá‑lo!

👉 **[Vá para o Guia de Uso](/pt-br/reachymini_platforms_reachy_mini_usage)** para aprender como:
* Usar o **Reachy Mini Control**.
* Instalar e executar **Apps** (como Conversa ou Jogos).
* Programar o seu Reachy com **Python**.

## 5. 💻 Avançado: Conectar‑se diretamente ao Raspberry Pi interno via SSH

Se você precisar se conectar ao Raspberry Pi interno do Reachy Mini via SSH, as credenciais são:

```
username: pollen
password: root
```

Depois de conectado via SSH, você pode verificar a integridade do seu Raspberry Pi e da configuração do robô com:

```bash
reachyminios_check
```

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas e FAQ](/pt-br/reachymini_troubleshooting)**

## Modo Avançado

Se você precisar reinstalar o Raspberry Pi do zero ou criar uma imagem personalizada, siga os guias avançados.

**[Regravar a ISO](/pt-br/reachymini_platforms_reachy_mini_reflash_the_rpi_iso)**

**[Instalar o Daemon a partir de um Branch Específico](/pt-br/reachymini_platforms_reachy_mini_install_daemon_from_branch)**

**[Fluxo de Trabalho de Desenvolvimento](/pt-br/reachymini_platforms_reachy_mini_development_workflow)** - Melhores práticas para desenvolver e testar código no Reachy Mini Wireless