---
title: DSO Quad:构建固件
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Quad-Building_Firmware/
slug: /cn/DSO_Quad-Building_Firmware
last_update:
  date: 02/03/2022
  author: gunengyu
---

## 从源码构建 DSO Quad 固件

本页面目前仅提供关于 Debian 上 GCC 的信息。如果您知道如何设置其他环境，请添加相关信息。

### 使用 GCC 和 Debian

<pre>
apt-get install --no-install-recommends  build-essential autoconf flex bison texinfo libncurses5-dev libgmp3-dev libmpfr-dev libmpc-dev libftdi-dev
cd
git clone [git://github.com/esden/summon-arm-toolchain.git](git://github.com/esden/summon-arm-toolchain.git)
cd summon-arm-toolchain
$EDITOR summon-arm-toolchain
</pre>

...并确保以下设置生效：
```
 TARGET=arm-none-eabi
 USE_LINARO=1
 LIBSTM32_EN=1
 DEFAULT_TO_CORTEX_M3=1
```

然后运行：
```
 ./summon-arm-toolchain
```

工具链将安装到 <tt>~/sat/</tt>。接下来：
```
cd
 git clone [https://github.com/tmbinc/dsoquad](https://github.com/tmbinc/dsoquad)
 cd dsoquad/src/app
 PATH=$PATH:~/sat/bin make
```

然后您应该可以在该目录中找到准备上传的 <tt>.hex</tt> 文件。

#### 磁盘空间使用情况
```
$ du -sh  summon-arm-toolchain/  sat/  dsoquad/
 117M    summon-arm-toolchain/
 229M    sat/
 1.9M    dsoquad/
```

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>