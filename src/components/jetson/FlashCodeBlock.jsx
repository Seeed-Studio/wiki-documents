/**
 * FlashCodeBlock.tsx
 * ------------------
 * This file contains reusable React components that display flashing-related
 * shell commands for Jetson devices, such as verifying SHA256, extracting tarballs,
 * and executing the flash script.
 *
 * The components rely on Zustand state (via `useJetsonStore`) to retrieve
 * the selected filename and foldername values dynamically.
 *
 * Components:
 *  - VerifySHA256: Displays a SHA256 checksum verification command
 *  - ExtractFile: Displays the tar extraction command
 *  - FlashCMD: Displays a sequence of flashing commands
 *
 * Dependencies:
 *  - Zustand (useJetsonStore)
 *  - @theme/CodeBlock (Docusaurus code block component)
 */
import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { useJetsonStore } from '@site/src/stores/useJetsonStore';
import { getL4TData } from '@site/src/components/jetson/DownloadLink';

// 多语言内容配置（en / zh / ja / es）
const content = {
  en: {
    // VerifySHA256
    verifySha256Intro: "To verify the SHA256 hash of the downloaded file, run in terminal:",
    verifySha256Note:
      "If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.",
    forExample: "For example:",

    // Requirements
    ubuntuHost: "Ubuntu Host Computer",
    usbMicroB: "USB Micro-B data transmission cable",
    usbTypeC: "USB Type-C data transmission cable",

    // Recovery mode
    recoveryModeNote:
      "Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.",
    recoveryModeNoteNext:
      "Before we can move on to the next step, we need to make sure that the board is in force recovery mode.",
    recoveryModeClickStep: 'Click the "step-by-step" to see how to enter recovery mode.',
    stepByStep: "Step-by-Step",

    // Recovery steps content
    recoveryIntro:
      "Before flashing, ensure your Jetson device is properly connected via USB and powered on. The USB connection is necessary for the host PC to detect the device and communicate via recovery mode.",
    recoveryVideoTitle: "Enter Force Recovery Mode (reComputer Mini)",

    // Common steps
    step1: "Step 1.",
    step2: "Step 2.",
    step3: "Step 3.",
    step4: "Step 4.",
    step5: "Step 5.",

    // Recovery steps
    connectUsbDevice:
      "Connect a USB Micro-B cable between USB2.0 DEVICE port and the Ubuntu host PC.",
    insertRecovery:
      "Use a pin and insert into the RECOVERY hole to press recovery button and hold it.",
    connectPower: "Connect the power supply.",
    releaseRecovery: "Release the RECOVERY hole.",

    // Switch steps
    switchReset: "Switch the switch to the RESET mode.",
    powerUpCarrier: "Power up the carrier board by connecting the power cable.",
    connectUsbc:
      "Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.",
    runLsusb:
      "On the Linux host PC, open a Terminal window and enter the command lsusb. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.",

    // Jumper steps
    useJumper: "Use a jumper wire to connect the FC REC pin and the GND pin.",
    powerRecomputer:
      "Power up the reComputer by connecting the included cable from the power adapter.",

    // Industrial/ReServer specific steps
    connectUsbTypeC:
      "Connect a USB Type-C cable between USB2.0 DEVICE port and your PC.",
    connectUsbTypeCDevice:
      "Connect a USB Type-C cable between DEVICE port and your PC.",
    insertRecoveryHole:
      "Use a pin and insert into the RECOVERY hole to press recovery button and while holding this.",
    insertRecHole:
      "Use a pin and insert into the REC hole to press recovery button and while holding this.",
    connect2PinPower:
      "Connect the included 2-Pin Terminal block power connector to the power connector on the board and connect the included power adapter with a power cord to turn on the board.",
    releaseRecoveryHole: "Release the RECOVERY hole.",
    releaseRecHole: "Release the REC hole.",

    // J501 specific
    connectUsbFirst:
      "Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.",
    powerUpFirst: "Power up the carrier board by connecting the power cable.",
    releaseForceCovery: "Release the force recovery button.",

    // Device detection
    deviceNotDetected: "If the device is not detected, try the following:",
    reconnectUsb: "Reconnect the USB cable.",
    differentPort: "Use a different USB port (preferably USB 2.0).",
    ensureRecovery: "Ensure the device is in recovery mode (press and hold Recovery + Reset).",
    ensureRecoverySimple: "Ensure the device is in recovery mode.",

    afterRecoveryMode:
      "After the device enters recovery mode, open a Terminal and run on the Linux host PC:",
    recoveryModeIds:
      "If the output includes one of the following IDs, the board is in force recovery mode:",

    // Orin variants
    orinNx16gb: "For Orin NX 16GB:",
    orinNx8gb: "For Orin NX 8GB:",
    orinNano8gb: "For Orin Nano 8GB:",
    orinNano4gb: "For Orin Nano 4GB:",
    xavierNx: "For Xavier NX:",
    agxOrin32gb: "For AGX Orin 32GB:",
    agxOrin64gb: "For AGX Orin 64GB:",

    imageExample: "The below image is for Orin Nano 8GB:",
    imageExampleAgx: "The below image is for AGX Orin 32GB:",

    // ExtractAndFlash
    step1Extract: "Step 1:",
    extractImageFile: "Extract the downloaded image file on the Ubuntu host PC:",
    step2Flash: "Step 2:",
    executeFlashCommand:
      "Execute the following command to flash JetPack system to the NVMe SSD:",
    flashSuccess: "You will see the following output if the flashing process is successful:",
    flashDuration: "The flash command may run for 2–10 minutes.",
    step3Connect: "Step 3:",
    connectDisplay:
      "Connect the Jetson to a display using the HDMI connector on the board and finish the initial configuration setup:",
    systemConfiguration: "Please complete the System Configuration according to your needs.",
    step4Optional: "Step 4 (Optional):",
    installJetpack: "Install Nvidia Jetpack SDK",
    installJetpackInstructions:
      "Please open the terminal on the Jetson device and execute the following commands:",

    // Host Environment
    hostRecommendation: "Host Recommendation",
    hostRecommendationText:
      "We recommend that you use physical Ubuntu host devices instead of virtual machines.",
    hostRecommendationTable: "Please refer to the table below to prepare the host machine.",
    jetpackVersion: "JetPack Version",
    ubuntuVersion: "Ubuntu Version (Host Computer)",

    // Button headers
    buttonHeader: "Button Header",
    description: "Description",

    // Path placeholder
    pathToImage: "<path-to-image>",

    // Product names
    or: "or",

    // Switch/Reset images alt text
    switchToReset: "Switch to RESET",
    recoveryModeStep: "Recovery Mode Step",
    gifAboutReset: "gif about RESET",
    buttonAboutReset: "button about RESET",
    pinLayout: "Pin layout",
    lsusbResult: "lsusb result",
    jetsonFirstBoot: "Jetson first boot configuration"
  },

  // 中文（简体）
  zh: {
    // VerifySHA256
    verifySha256Intro: "要校验已下载文件的 SHA256 散列值，请在终端执行：",
    verifySha256Note:
      "如果计算结果与文档给出的 SHA256 值一致，则说明你下载的固件完整且未被篡改。",
    forExample: "例如：",

    // Requirements
    ubuntuHost: "Ubuntu 主机电脑",
    usbMicroB: "USB Micro-B 数据线",
    usbTypeC: "USB Type-C 数据线",

    // Recovery mode
    recoveryModeNote: "在继续安装步骤前，请确认主板已进入强制恢复（Force Recovery）模式。",
    recoveryModeNoteNext: "在进入下一步前，请确认主板已进入强制恢复（Force Recovery）模式。",
    recoveryModeClickStep: "点击“分步说明”查看进入恢复模式的方法。",
    stepByStep: "分步说明",

    // Recovery steps content
    recoveryIntro:
      "开始刷写前，请确保 Jetson 设备已通过 USB 正确连接并上电。USB 连接用于让主机识别设备并在恢复模式下通信。",
    recoveryVideoTitle: "进入强制恢复模式（reComputer Mini）",

    // Common steps
    step1: "步骤 1.",
    step2: "步骤 2.",
    step3: "步骤 3.",
    step4: "步骤 4.",
    step5: "步骤 5.",

    // Recovery steps
    connectUsbDevice: "使用 USB Micro-B 线将 USB2.0 DEVICE 口与 Ubuntu 主机相连。",
    insertRecovery: "用细针按住 RECOVERY 孔内的恢复按钮并保持。",
    connectPower: "接通电源。",
    releaseRecovery: "松开 RECOVERY 按钮。",

    // Switch steps
    switchReset: "将拨码开关切至 RESET 档位。",
    powerUpCarrier: "连接电源线，为载板上电。",
    connectUsbc: "用 USB Type-C 数据线将载板与 Ubuntu 主机连接。",
    runLsusb:
      "在 Linux 主机上打开终端，执行 lsusb。若输出中包含与你所用 Jetson SoM 对应的下列任一条目，则表示已进入强制恢复模式。",

    // Jumper steps
    useJumper: "用跳线短接 FC REC 与 GND 引脚。",
    powerRecomputer: "将电源适配器连接至设备，为 reComputer 上电。",

    // Industrial/ReServer specific steps
    connectUsbTypeC: "用 USB Type-C 线将 USB2.0 DEVICE 口与电脑连接。",
    connectUsbTypeCDevice: "用 USB Type-C 线将 DEVICE 口与电脑连接。",
    insertRecoveryHole: "用细针按住 RECOVERY 孔内的恢复按钮并保持。",
    insertRecHole: "用细针按住 REC 孔内的恢复按钮并保持。",
    connect2PinPower:
      "将随附的两针端子电源连接器接到板上电源口，并连接电源适配器与电源线以开机。",
    releaseRecoveryHole: "松开 RECOVERY 按钮。",
    releaseRecHole: "松开 REC 按钮。",

    // J501 specific
    connectUsbFirst: "先用 USB Type-C 数据线将载板连接到 Ubuntu 主机。",
    powerUpFirst: "再连接电源线，为载板上电。",
    releaseForceCovery: "松开强制恢复按钮。",

    // Device detection
    deviceNotDetected: "若未检测到设备，请尝试：",
    reconnectUsb: "重新插拔 USB 数据线。",
    differentPort: "更换 USB 接口（优先使用 USB 2.0 口）。",
    ensureRecovery: "确认设备处于恢复模式（按住 Recovery + Reset）。",
    ensureRecoverySimple: "确认设备处于恢复模式。",

    afterRecoveryMode: "设备进入恢复模式后，在 Linux 主机上打开终端并执行：",
    recoveryModeIds: "若输出包含以下任一 ID，表示设备已进入强制恢复模式：",

    // Orin variants
    orinNx16gb: "适用于 Orin NX 16GB：",
    orinNx8gb: "适用于 Orin NX 8GB：",
    orinNano8gb: "适用于 Orin Nano 8GB：",
    orinNano4gb: "适用于 Orin Nano 4GB：",
    xavierNx: "适用于 Xavier NX：",
    agxOrin32gb: "适用于 AGX Orin 32GB：",
    agxOrin64gb: "适用于 AGX Orin 64GB：",

    imageExample: "下图示例为 Orin Nano 8GB：",
    imageExampleAgx: "下图示例为 AGX Orin 32GB：",

    // ExtractAndFlash
    step1Extract: "步骤 1：",
    extractImageFile: "在 Ubuntu 主机上解压已下载的镜像文件：",
    step2Flash: "步骤 2：",
    executeFlashCommand: "执行以下命令，将 JetPack 系统刷写到 NVMe SSD：",
    flashSuccess: "若刷写成功，你将看到类似如下的输出：",
    flashDuration: "刷写过程可能持续 2–10 分钟。",
    step3Connect: "步骤 3：",
    connectDisplay: "通过板载 HDMI 将 Jetson 连接到显示器，并完成初始设置：",
    systemConfiguration: "请根据需要完成系统初始化配置。",
    step4Optional: "步骤 4（可选）：",
    installJetpack: "安装 NVIDIA JetPack SDK",
    installJetpackInstructions: "请在 Jetson 设备上打开终端并执行：",

    // Host Environment
    hostRecommendation: "主机环境建议",
    hostRecommendationText: "推荐使用实体 Ubuntu 主机，避免使用虚拟机进行刷写。",
    hostRecommendationTable: "请参考下表准备主机环境：",
    jetpackVersion: "JetPack 版本",
    ubuntuVersion: "Ubuntu 版本（主机）",

    // Button headers
    buttonHeader: "按键/引脚",
    description: "说明",

    // Path placeholder
    pathToImage: "<镜像所在路径>",

    // Product names
    or: "或",

    // Switch/Reset images alt text
    switchToReset: "切换至 RESET",
    recoveryModeStep: "恢复模式步骤",
    gifAboutReset: "RESET 动画示意",
    buttonAboutReset: "RESET 按钮示意",
    pinLayout: "引脚布局",
    lsusbResult: "lsusb 结果",
    jetsonFirstBoot: "Jetson 首次启动配置"
  },

  // 日本語
  ja: {
    verifySha256Intro:
      "ダウンロードしたファイルの SHA256 ハッシュを検証するには、ターミナルで次を実行します：",
    verifySha256Note:
      "計算結果がドキュメントに記載の SHA256 と一致すれば、ダウンロードしたファームウェアが完全で改ざんされていないことを確認できます。",
    forExample: "例：",

    ubuntuHost: "Ubuntu ホストコンピュータ",
    usbMicroB: "USB Micro-B データケーブル",
    usbTypeC: "USB Type-C データケーブル",

    recoveryModeNote:
      "インストール手順を続ける前に、ボードが強制リカバリ（Force Recovery）モードになっていることを確認してください。",
    recoveryModeNoteNext:
      "次の手順へ進む前に、ボードが強制リカバリモードであることを確認してください。",
    recoveryModeClickStep: "「手順を表示」をクリックして、リカバリモードへの入り方を確認します。",
    stepByStep: "手順を表示",

    recoveryIntro:
      "フラッシュ前に、Jetson が USB で正しく接続され通電していることを確認してください。USB 接続は、ホスト PC がリカバリモードでデバイスを認識・通信するために必要です。",
    recoveryVideoTitle: "強制リカバリモードへ入る（reComputer Mini）",

    step1: "手順 1.",
    step2: "手順 2.",
    step3: "手順 3.",
    step4: "手順 4.",
    step5: "手順 5.",

    connectUsbDevice:
      "USB2.0 DEVICE ポートと Ubuntu ホスト PC を USB Micro-B ケーブルで接続します。",
    insertRecovery: "ピンを用いて RECOVERY ホールのボタンを押し続けます。",
    connectPower: "電源を接続します。",
    releaseRecovery: "RECOVERY ボタンを離します。",

    switchReset: "スイッチを RESET 位置に切り替えます。",
    powerUpCarrier: "電源ケーブルを接続してキャリアボードの電源を入れます。",
    connectUsbc:
      "USB Type-C データケーブルでボードを Ubuntu ホスト PC に接続します。",
    runLsusb:
      "Linux ホストでターミナルを開き lsusb を実行します。使用中の Jetson SoM に対応する以下のいずれかの出力が表示されれば、強制リカバリモードです。",

    useJumper: "ジャンパ線で FC REC ピンと GND ピンを接続します。",
    powerRecomputer: "付属の電源アダプタで reComputer の電源を入れます。",

    connectUsbTypeC:
      "USB2.0 DEVICE ポートと PC を USB Type-C ケーブルで接続します。",
    connectUsbTypeCDevice: "DEVICE ポートと PC を USB Type-C ケーブルで接続します。",
    insertRecoveryHole: "ピンで RECOVERY ホールのボタンを押し続けます。",
    insertRecHole: "ピンで REC ホールのボタンを押し続けます。",
    connect2PinPower:
      "付属の 2 ピン端子ブロックをボードの電源端子に接続し、電源アダプタと電源コードを接続して起動します。",
    releaseRecoveryHole: "RECOVERY ボタンを離します。",
    releaseRecHole: "REC ボタンを離します。",

    connectUsbFirst:
      "まず USB Type-C ケーブルでボードを Ubuntu ホスト PC に接続します。",
    powerUpFirst: "次に電源ケーブルを接続してキャリアボードを起動します。",
    releaseForceCovery: "強制リカバリボタンを離します。",

    deviceNotDetected: "デバイスが認識されない場合は次を試してください：",
    reconnectUsb: "USB ケーブルを挿し直します。",
    differentPort: "別の USB ポート（可能なら USB 2.0）を使用します。",
    ensureRecovery: "デバイスがリカバリモード（Recovery + Reset を長押し）であることを確認。",
    ensureRecoverySimple: "デバイスがリカバリモードであることを確認。",

    afterRecoveryMode:
      "デバイスがリカバリモードに入ったら、Linux ホストでターミナルを開き次を実行：",
    recoveryModeIds:
      "以下のいずれかの ID が表示されれば、強制リカバリモードです：",

    orinNx16gb: "Orin NX 16GB の場合：",
    orinNx8gb: "Orin NX 8GB の場合：",
    orinNano8gb: "Orin Nano 8GB の場合：",
    orinNano4gb: "Orin Nano 4GB の場合：",
    xavierNx: "Xavier NX の場合：",
    agxOrin32gb: "AGX Orin 32GB の場合：",
    agxOrin64gb: "AGX Orin 64GB の場合：",

    imageExample: "以下は Orin Nano 8GB の例：",
    imageExampleAgx: "以下は AGX Orin 32GB の例：",

    step1Extract: "手順 1：",
    extractImageFile: "Ubuntu ホストでダウンロードしたイメージを展開します：",
    step2Flash: "手順 2：",
    executeFlashCommand:
      "次のコマンドで JetPack を NVMe SSD にフラッシュします：",
    flashSuccess: "フラッシュが成功すると、次のような出力が表示されます：",
    flashDuration: "フラッシュ処理は 2〜10 分かかる場合があります。",
    step3Connect: "手順 3：",
    connectDisplay:
      "ボード上の HDMI 端子で Jetson をディスプレイに接続し、初期設定を完了します：",
    systemConfiguration: "必要に応じてシステム初期設定を完了してください。",
    step4Optional: "手順 4（任意）：",
    installJetpack: "NVIDIA JetPack SDK をインストール",
    installJetpackInstructions:
      "Jetson デバイス上でターミナルを開き、次のコマンドを実行します：",

    hostRecommendation: "ホスト環境の推奨",
    hostRecommendationText:
      "仮想マシンではなく物理 Ubuntu ホストの使用を推奨します。",
    hostRecommendationTable: "以下の表を参考にホスト環境を準備してください。",
    jetpackVersion: "JetPack バージョン",
    ubuntuVersion: "Ubuntu バージョン（ホスト）",

    buttonHeader: "ボタン/ピン",
    description: "説明",

    pathToImage: "<イメージのパス>",
    or: "または",

    switchToReset: "RESET に切り替え",
    recoveryModeStep: "リカバリモード手順",
    gifAboutReset: "RESET の動作例（gif）",
    buttonAboutReset: "RESET ボタンの位置",
    pinLayout: "ピン配置",
    lsusbResult: "lsusb の結果",
    jetsonFirstBoot: "Jetson 初回起動の設定"
  },

  // Español
  es: {
    verifySha256Intro:
      "Para verificar el hash SHA256 del archivo descargado, ejecute en la terminal:",
    verifySha256Note:
      "Si el resultado coincide con el SHA256 indicado en la documentación, se confirma que el firmware descargado está completo e intacto.",
    forExample: "Por ejemplo:",

    ubuntuHost: "Equipo anfitrión con Ubuntu",
    usbMicroB: "Cable de datos USB Micro-B",
    usbTypeC: "Cable de datos USB Type-C",

    recoveryModeNote:
      "Antes de continuar con la instalación, asegúrese de que la placa esté en modo de recuperación forzada (Force Recovery).",
    recoveryModeNoteNext:
      "Antes de pasar al siguiente paso, asegúrese de que la placa esté en modo de recuperación forzada.",
    recoveryModeClickStep:
      'Haga clic en "Paso a paso" para ver cómo entrar en modo de recuperación.',
    stepByStep: "Paso a paso",

    recoveryIntro:
      "Antes de flashear, confirme que su Jetson esté correctamente conectado por USB y encendido. La conexión USB es necesaria para que el PC anfitrión detecte el dispositivo y se comunique en modo de recuperación.",
    recoveryVideoTitle: "Entrar en modo de recuperación forzada (reComputer Mini)",

    step1: "Paso 1.",
    step2: "Paso 2.",
    step3: "Paso 3.",
    step4: "Paso 4.",
    step5: "Paso 5.",

    connectUsbDevice:
      "Conecte un cable USB Micro-B entre el puerto USB2.0 DEVICE y el PC anfitrión con Ubuntu.",
    insertRecovery:
      "Con un pin, presione y mantenga el botón dentro del orificio RECOVERY.",
    connectPower: "Conecte la alimentación.",
    releaseRecovery: "Suelte el botón RECOVERY.",

    switchReset: "Cambie el interruptor a la posición RESET.",
    powerUpCarrier: "Encienda la carrier board conectando el cable de alimentación.",
    connectUsbc:
      "Conecte la placa al PC con Ubuntu mediante un cable de datos USB Type-C.",
    runLsusb:
      "En el PC con Linux, abra una terminal y ejecute lsusb. Si aparece una de las salidas siguientes según su SoM de Jetson, la placa está en modo de recuperación forzada.",

    useJumper: "Puentee los pines FC REC y GND con un jumper.",
    powerRecomputer:
      "Encienda el reComputer conectando el cable incluido al adaptador de corriente.",

    connectUsbTypeC:
      "Conecte un cable USB Type-C entre el puerto USB2.0 DEVICE y su PC.",
    connectUsbTypeCDevice:
      "Conecte un cable USB Type-C entre el puerto DEVICE y su PC.",
    insertRecoveryHole:
      "Con un pin, presione y mantenga el botón dentro del orificio RECOVERY.",
    insertRecHole:
      "Con un pin, presione y mantenga el botón dentro del orificio REC.",
    connect2PinPower:
      "Conecte el conector de alimentación de 2 pines incluido al conector de la placa y conecte el adaptador de corriente para encenderla.",
    releaseRecoveryHole: "Suelte el botón RECOVERY.",
    releaseRecHole: "Suelte el botón REC.",

    connectUsbFirst:
      "Primero conecte la placa al PC con Ubuntu con un cable de datos USB Type-C.",
    powerUpFirst: "Después, conecte la alimentación para encender la carrier board.",
    releaseForceCovery: "Suelte el botón de recuperación forzada.",

    deviceNotDetected: "Si el dispositivo no es detectado, pruebe:",
    reconnectUsb: "Reconectar el cable USB.",
    differentPort: "Usar otro puerto USB (preferiblemente USB 2.0).",
    ensureRecovery:
      "Asegurarse de que el dispositivo esté en modo de recuperación (mantener Recovery + Reset).",
    ensureRecoverySimple: "Asegurarse de que el dispositivo esté en modo de recuperación.",

    afterRecoveryMode:
      "Tras entrar en modo de recuperación, abra una terminal en el PC con Linux y ejecute:",
    recoveryModeIds:
      "Si la salida incluye alguno de los siguientes ID, la placa está en modo de recuperación forzada:",

    orinNx16gb: "Para Orin NX 16GB:",
    orinNx8gb: "Para Orin NX 8GB:",
    orinNano8gb: "Para Orin Nano 8GB:",
    orinNano4gb: "Para Orin Nano 4GB:",
    xavierNx: "Para Xavier NX:",
    agxOrin32gb: "Para AGX Orin 32GB:",
    agxOrin64gb: "Para AGX Orin 64GB:",

    imageExample: "La imagen siguiente corresponde a Orin Nano 8GB:",
    imageExampleAgx: "La imagen siguiente corresponde a AGX Orin 32GB:",

    step1Extract: "Paso 1:",
    extractImageFile: "En el PC con Ubuntu, extraiga la imagen descargada:",
    step2Flash: "Paso 2:",
    executeFlashCommand:
      "Ejecute el siguiente comando para flashear JetPack en el NVMe SSD:",
    flashSuccess:
      "Si el proceso de flasheo finaliza correctamente, verá una salida similar a la siguiente:",
    flashDuration: "El comando de flasheo puede tardar entre 2 y 10 minutos.",
    step3Connect: "Paso 3:",
    connectDisplay:
      "Conecte el Jetson a un monitor mediante el conector HDMI de la placa y complete la configuración inicial:",
    systemConfiguration:
      "Complete la configuración inicial del sistema según sus necesidades.",
    step4Optional: "Paso 4 (opcional):",
    installJetpack: "Instalar NVIDIA JetPack SDK",
    installJetpackInstructions:
      "Abra la terminal en el dispositivo Jetson y ejecute los siguientes comandos:",

    hostRecommendation: "Recomendación para el host",
    hostRecommendationText:
      "Recomendamos usar un host físico con Ubuntu en lugar de máquinas virtuales.",
    hostRecommendationTable:
      "Consulte la siguiente tabla para preparar el equipo anfitrión.",
    jetpackVersion: "Versión de JetPack",
    ubuntuVersion: "Versión de Ubuntu (Host)",

    buttonHeader: "Botón/Pin",
    description: "Descripción",

    pathToImage: "<ruta-a-la-imagen>",
    or: "o",

    switchToReset: "Cambiar a RESET",
    recoveryModeStep: "Pasos de modo de recuperación",
    gifAboutReset: "gif sobre RESET",
    buttonAboutReset: "botón RESET",
    pinLayout: "Distribución de pines",
    lsusbResult: "resultado de lsusb",
    jetsonFirstBoot: "Configuración inicial de Jetson"
  }
};

/**
 * VerifySHA256
 * ------------
 */
export const VerifySHA256 = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const l4t = useJetsonStore(state => state.l4t);
  const obj = getL4TData(product, l4t);
  const filename = obj?.filename || 'mfi_xxxx.tar.gz';
  const texts = content[lang] || content.en;
  return (
    <>
      <p>{texts.verifySha256Intro}</p>
      <CodeBlock language="bash">
        {`sha256sum mfi_xxxx.tar.gz 
# ${texts.forExample}
# sha256sum ${filename}`}
      </CodeBlock>
      <p>{texts.verifySha256Note}</p>
    </>
  );
};

export const PrepareRequirementsMini = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012mini', 'j4011mini', 'j3010mini', 'j3011mini'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>reComputer Mini J4012 / J4011 / J3010 {texts.or} J3011</li>
        <li>{texts.usbMicroB}</li>
      </ul>

      <HostEnvironmentNote lang={lang} />
    </div>
  );
};

export const RecoveryMini = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012mini', 'j4011mini', 'j3010mini', 'j3011mini'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>reComputer Mini J4012 / J4011 / J3010 {texts.or} J3011</li>
        <li>{texts.usbMicroB}</li>
      </ul>

      <HostEnvironmentNote lang={lang} />

      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNote}
      </div>

      <details style={{ marginBottom: '1em' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
          }}
        >
          {texts.stepByStep}
        </summary>
        <div style={{ textAlign: 'left', margin: '1em 0' }}>
          <p>{texts.recoveryIntro}</p>

          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/HEIXFkizP5Y"
              title={texts.recoveryVideoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={600}
              src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png"
              alt={texts.recoveryModeStep}
            />
          </div>
        </div>
        <ul>
          <li>
            <strong>{texts.step1}</strong> {texts.connectUsbDevice}
          </li>
          <li>
            <strong>{texts.step2}</strong> {texts.insertRecovery}
          </li>
          <li>
            <strong>{texts.step3}</strong> {texts.connectPower}
          </li>
          <li>
            <strong>{texts.step4}</strong> {texts.releaseRecovery}
          </li>
        </ul>
      </details>

      <p>
        {texts.deviceNotDetected}
        <ul>
          <li>{texts.reconnectUsb}</li>
          <li>{texts.differentPort}</li>
          <li>{texts.ensureRecovery}</li>
        </ul>
      </p>

      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>
          {texts.orinNx16gb} <code>0955:7323</code> NVidia Corp
        </li>
        <li>
          {texts.orinNx8gb} <code>0955:7423</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano8gb} <code>0955:7523</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano4gb} <code>0955:7623</code> NVidia Corp
        </li>
      </ul>

      <div style={{ textAlign: 'left', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"
          alt={texts.lsusbResult}
        />
      </div>
    </div>
  );
};

export const PrepareRequirementsRobotics = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012robotics', 'j4011robotics', 'j3011robotics', 'j3010robotics'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>reComputer Robotics J4012 / J4011 / J3010 {texts.or} J3011</li>
        <li>{texts.usbTypeC}</li>
      </ul>

      <HostEnvironmentNote1 lang={lang} />
    </div>
  );
};

export const RecoveryRobotics = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012robotics', 'j4011robotics', 'j3011robotics', 'j3010robotics'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNoteNext}
        <br />
        {texts.recoveryModeClickStep}
      </div>

      <details style={{ marginBottom: '1em' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
          }}
        >
          {texts.stepByStep}
        </summary>

        <ul>
          <li>
            <strong>{texts.step1}</strong> {texts.switchReset}
          </li>
        </ul>

        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width={600}
            src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg"
            alt={texts.switchToReset}
          />
        </div>

        <ul>
          <li>
            <strong>{texts.step2}</strong> {texts.powerUpCarrier}
          </li>
          <li>
            <strong>{texts.step3}</strong> {texts.connectUsbc}
          </li>
          <li>
            <strong>{texts.step4}</strong> {texts.runLsusb}
          </li>
        </ul>
      </details>
      <p>
        {texts.deviceNotDetected}
        <ul>
          <li>{texts.reconnectUsb}</li>
          <li>{texts.differentPort}</li>
          <li>{texts.ensureRecovery}</li>
        </ul>
      </p>
      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>
          {texts.orinNx16gb} <code>0955:7323</code> NVidia Corp
        </li>
        <li>
          {texts.orinNx8gb} <code>0955:7423</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano8gb} <code>0955:7523</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano4gb} <code>0955:7623</code> NVidia Corp
        </li>
      </ul>

      <p>{texts.imageExample}</p>
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
          alt={texts.lsusbResult}
        />
      </div>
    </div>
  );
};

export const PrepareRequirementsSuper = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012s', 'j4011s', 'j3011s', 'j3010s'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>reComputer Super J4012 / J4011 / J3010 {texts.or} J3011</li>
        <li>{texts.usbTypeC}</li>
      </ul>

      <HostEnvironmentNote1 lang={lang} />
    </div>
  );
};

export const RecoverySuper = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012s', 'j4011s', 'j3011s', 'j3010s'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNoteNext}
        <br />
        {texts.recoveryModeClickStep}
      </div>

      <details style={{ marginBottom: '1em' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
          }}
        >
          {texts.stepByStep}
        </summary>

        <ul>
          <li>
            <strong>{texts.step1}</strong> {texts.switchReset}
          </li>
        </ul>

        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width={600}
            src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"
            alt={texts.switchToReset}
          />
        </div>

        <ul>
          <li>
            <strong>{texts.step2}</strong> {texts.powerUpCarrier}
          </li>
          <li>
            <strong>{texts.step3}</strong> {texts.connectUsbc}
          </li>
          <li>
            <strong>{texts.step4}</strong> {texts.runLsusb}
          </li>
        </ul>
      </details>
      <p>
        {texts.deviceNotDetected}
        <ul>
          <li>{texts.reconnectUsb}</li>
          <li>{texts.differentPort}</li>
          <li>{texts.ensureRecovery}</li>
        </ul>
      </p>
      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>
          {texts.orinNx16gb} <code>0955:7323</code> NVidia Corp
        </li>
        <li>
          {texts.orinNx8gb} <code>0955:7423</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano8gb} <code>0955:7523</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano4gb} <code>0955:7623</code> NVidia Corp
        </li>
      </ul>

      <p>{texts.imageExample}</p>
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
          alt={texts.lsusbResult}
        />
      </div>
    </div>
  );
};

export const PrepareRequirementsClassic = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012classic', 'j4011classic', 'j3011classic', 'j3010classic'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>reComputer J4012 / J4011 / J3010 {texts.or} J3011</li>
        <li>{texts.usbTypeC}</li>
      </ul>

      <HostEnvironmentNote lang={lang} />
    </div>
  );
};

export const RecoveryClassic = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012classic', 'j4011classic', 'j3011classic', 'j3010classic'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNoteNext}
        <br />
        {texts.recoveryModeClickStep}
      </div>

      <details style={{ marginBottom: '1em' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
          }}
        >
          {texts.stepByStep}
        </summary>
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width={700}
            src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif"
            alt={texts.gifAboutReset}
          />
        </div>

        <ul>
          <li>
            <strong>{texts.step1}</strong> {texts.useJumper}
          </li>
        </ul>

        {/* 📌 插入表格部分 */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1em 0' }}>
          <table border={1} cellPadding={8}>
            <thead>
              <tr>
                <th></th>
                <th>{texts.buttonHeader}</th>
                <th>{texts.description}</th>
                <th>{texts.buttonHeader}</th>
                <th>{texts.description}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6} style={{ textAlign: 'center' }}>
                  <img
                    width="200"
                    src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"
                    alt={texts.pinLayout}
                  />
                </td>
                <td>1</td>
                <td>PWR BTN</td>
                <td>7</td>
                <td>AUTO ON</td>
              </tr>
              <tr>
                <td>2</td>
                <td>GND</td>
                <td>8</td>
                <td>DIS</td>
              </tr>
              <tr>
                <td>3</td>
                <td>FC REC</td>
                <td>9</td>
                <td>UART TXD</td>
              </tr>
              <tr>
                <td>4</td>
                <td>GND</td>
                <td>10</td>
                <td>UART RXD</td>
              </tr>
              <tr>
                <td>5</td>
                <td>SYS RET</td>
                <td>11</td>
                <td>LED +</td>
              </tr>
              <tr>
                <td>6</td>
                <td>GND</td>
                <td>12</td>
                <td>LED -</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul>
          <li>
            <strong>{texts.step2}</strong> {texts.powerRecomputer}
          </li>
          <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img
              width={700}
              src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"
              alt={texts.buttonAboutReset}
            />
          </div>
          <li>
            <strong>{texts.step3}</strong> {texts.connectUsbc}
          </li>
          <li>
            <strong>{texts.step4}</strong> {texts.runLsusb}
          </li>
        </ul>
      </details>
      <p>
        {texts.deviceNotDetected}
        <ul>
          <li>{texts.reconnectUsb}</li>
          <li>{texts.differentPort}</li>
          <li>{texts.ensureRecovery}</li>
        </ul>
      </p>
      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>
          {texts.orinNx16gb} <code>0955:7323</code> NVidia Corp
        </li>
        <li>
          {texts.orinNx8gb} <code>0955:7423</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano8gb} <code>0955:7523</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano4gb} <code>0955:7623</code> NVidia Corp
        </li>
      </ul>

      <p>{texts.imageExample}</p>
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
          alt={texts.lsusbResult}
        />
      </div>
    </div>
  );
};

export const PrepareRequirementsIndustrial = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = [
    'j4012industrial',
    'j4011industrial',
    'j3011industrial',
    'j3010industrial',
    'j2012industrial',
    'j2011industrial'
  ];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>
          reComputer Industrial J4012 / J4011 / J3011 / J3010 / J2012 {texts.or} J2011
        </li>
        <li>{texts.usbTypeC}</li>
      </ul>

      <HostEnvironmentNote lang={lang} />
    </div>
  );
};

export const RecoveryIndustrial = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = [
    'j4012industrial',
    'j4011industrial',
    'j3011industrial',
    'j3010industrial',
    'j2012industrial',
    'j2011industrial'
  ];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNoteNext}
        <br />
        {texts.recoveryModeClickStep}
      </div>

      <details style={{ marginBottom: '1em' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
          }}
        >
          {texts.stepByStep}
        </summary>
        <ul>
          <li>
            <strong>{texts.step1}</strong> {texts.connectUsbTypeC}
          </li>
        </ul>

        <ul>
          <li>
            <strong>{texts.step2}</strong> {texts.insertRecoveryHole}
          </li>
          <li>
            <strong>{texts.step3}</strong> {texts.connect2PinPower}
          </li>
          <li>
            <strong>{texts.step4}</strong> {texts.releaseRecoveryHole}
          </li>
          <li>
            <strong>{texts.step5}</strong> {texts.runLsusb}
          </li>
        </ul>
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width={600}
            src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"
            alt={texts.switchToReset}
          />
        </div>
      </details>
      <p>
        {texts.deviceNotDetected}
        <ul>
          <li>{texts.reconnectUsb}</li>
          <li>{texts.differentPort}</li>
          <li>{texts.ensureRecoverySimple}</li>
        </ul>
      </p>
      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>
          {texts.orinNx16gb} <code>0955:7323</code> NVidia Corp
        </li>
        <li>
          {texts.orinNx8gb} <code>0955:7423</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano8gb} <code>0955:7523</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano4gb} <code>0955:7623</code> NVidia Corp
        </li>
        <li>
          {texts.xavierNx} <code>0955:7e19</code> NVidia Corp
        </li>
      </ul>

      <p>{texts.imageExample}</p>
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
          alt={texts.lsusbResult}
        />
      </div>
    </div>
  );
};

export const PrepareRequirementsReserver = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>reServer Industrial J4012 / J4011 / J3011 {texts.or} J3010</li>
        <li>{texts.usbTypeC}</li>
      </ul>

      <HostEnvironmentNote lang={lang} />
    </div>
  );
};

export const RecoveryReserver = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNoteNext}
        <br />
        {texts.recoveryModeClickStep}
      </div>

      <details style={{ marginBottom: '1em' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
          }}
        >
          {texts.stepByStep}
        </summary>
        <ul>
          <li>
            <strong>{texts.step1}</strong> {texts.connectUsbTypeCDevice}
          </li>
        </ul>

        <ul>
          <li>
            <strong>{texts.step2}</strong> {texts.insertRecHole}
          </li>
          <li>
            <strong>{texts.step3}</strong> {texts.connect2PinPower}
          </li>
          <li>
            <strong>{texts.step4}</strong> {texts.releaseRecHole}
          </li>
          <li>
            <strong>{texts.step5}</strong> {texts.runLsusb}
          </li>
        </ul>
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width={600}
            src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"
            alt={texts.switchToReset}
          />
        </div>
      </details>
      <p>
        {texts.deviceNotDetected}
        <ul>
          <li>{texts.reconnectUsb}</li>
          <li>{texts.differentPort}</li>
          <li>{texts.ensureRecoverySimple}</li>
        </ul>
      </p>
      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>
          {texts.orinNx16gb} <code>0955:7323</code> NVidia Corp
        </li>
        <li>
          {texts.orinNx8gb} <code>0955:7423</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano8gb} <code>0955:7523</code> NVidia Corp
        </li>
        <li>
          {texts.orinNano4gb} <code>0955:7623</code> NVidia Corp
        </li>
        <li>
          {texts.xavierNx} <code>0955:7e19</code> NVidia Corp
        </li>
      </ul>

      <p>{texts.imageExample}</p>
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"
          alt={texts.lsusbResult}
        />
      </div>
    </div>
  );
};

export const PrepareRequirementsJ501 = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j501-carrier AGX-Orin 64g', 'j501-carrier AGX-Orin 32g'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>{texts.ubuntuHost}</li>
        <li>{lang === 'zh' ? 'reServer Industrial J501载板' : 'reServer Industrial J501 Carrier Board'}</li>
        <li>{lang === 'zh' ? 'NVIDIA® Jetson AGX Orin™ 模块 32GB/64GB' : 'NVIDIA® Jetson AGX Orin™ Module 32GB/64GB'}</li>
        <li>{lang === 'zh' ? 'AGX Orin主动风扇' : 'AGX Orin Active Fan'}</li>
        <li>{lang === 'zh' ? 'NVMe M.2 2280内部SSD' : 'NVMe M.2 2280 Internal SSD'}</li>
        <li>{texts.usbTypeC}</li>
      </ul>

      <HostEnvironmentNote lang={lang} />
    </div>
  );
};

export const RecoveryJ501 = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const texts = content[lang] || content.en;

  const allowed = ['j501-carrier AGX-Orin 64g', 'j501-carrier AGX-Orin 32g'];
  if (!allowed.includes(product)) {
    return null;
  }

  return (
    <div>
      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.recoveryModeNoteNext}
        <br />
        {texts.recoveryModeClickStep}
      </div>

      <details style={{ marginBottom: '1em' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: 'var(--ifm-background-surface-color)',
            padding: '0.6em 1em',
            border: '1px solid #c3dafe',
            borderRadius: '6px',
            fontSize: '1.05em'
          }}
        >
          {texts.stepByStep}
        </summary>
        <div style={{ textAlign: 'center' }}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/CGMGZGqZPKM"
            title={lang === 'zh' ? 'J501进入强制恢复模式' : 'J501 Enter Force Recovery Mode'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
          <img
            width={600}
            src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg"
            alt={texts.switchToReset}
          />
        </div>
        <ul>
          <li>
            <strong>{texts.step1}</strong> {texts.connectUsbFirst}
          </li>
        </ul>
        <ul>
          <li>
            <strong>{texts.step2}</strong> {texts.powerUpFirst}
          </li>
          <li>
            <strong>{texts.step3}</strong> {texts.releaseForceCovery}
          </li>
          <li>
            <strong>{texts.step4}</strong> {texts.releaseRecHole}
          </li>
          <li>
            <strong>{texts.step5}</strong> {texts.runLsusb}
          </li>
        </ul>
      </details>
      <p>
        {texts.deviceNotDetected}
        <ul>
          <li>{texts.reconnectUsb}</li>
          <li>{texts.differentPort}</li>
          <li>{texts.ensureRecoverySimple}</li>
        </ul>
      </p>
      <p>{texts.afterRecoveryMode}</p>
      <CodeBlock language="bash">lsusb</CodeBlock>

      <p>{texts.recoveryModeIds}</p>
      <ul>
        <li>
          {texts.agxOrin32gb} <code>0955:7223</code> NVidia Corp
        </li>
        <li>
          {texts.agxOrin64gb} <code>0955:7023</code> NVidia Corp
        </li>
      </ul>

      <p>{texts.imageExampleAgx}</p>
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width={800}
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"
          alt={texts.lsusbResult}
        />
      </div>
    </div>
  );
};

/**
 * ExtractFile
 * -----------
 */
export const ExtractFile = ({ lang = 'en' }) => {
  const foldername = useJetsonStore(state => state.foldername);
  return <CodeBlock language="bash">sudo tar xvpf {foldername}</CodeBlock>;
};

/**
 * FlashCMD
 * --------
 */
export const FlashCMD = ({ lang = 'en' }) => {
  const foldername = useJetsonStore(state => state.foldername);
  return (
    <>
      <CodeBlock language="bash">cd {foldername}</CodeBlock>
      <CodeBlock language="bash">
        sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network
        usb0 --showlogs
      </CodeBlock>
    </>
  );
};

export const ExtractAndFlash = ({ lang = 'en' }) => {
  const product = useJetsonStore(state => state.product);
  const l4t = useJetsonStore(state => state.l4t);
  const obj = getL4TData(product, l4t);
  const filename = obj?.filename || 'mfi_xxxx.tar.gz';
  const foldername = obj?.foldername || 'mfi_xxxx';
  const texts = content[lang] || content.en;

  return (
    <div>
      <p>
        <strong>{texts.step1Extract}</strong> {texts.extractImageFile}
      </p>

      <CodeBlock language="bash">
        {`cd ${texts.pathToImage}
sudo tar xpf  mfi_xxxx.tar.gz
# ${texts.forExample}
# sudo tar xpf ${filename}`}
      </CodeBlock>

      <p>
        <strong>{texts.step2Flash}</strong> {texts.executeFlashCommand}
      </p>

      <CodeBlock language="bash">
        {`cd mfi_xxxx
# ${texts.forExample}
# cd ${foldername}
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs`}
      </CodeBlock>

      <p>{texts.flashSuccess}</p>

      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width="800"
          src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"
          alt={texts.flashSuccess}
        />
      </div>

      <div className="alert alert--note" role="alert" style={{ marginBottom: '1em' }}>
        {texts.flashDuration}
      </div>

      <p>
        <strong>{texts.step3Connect}</strong> {texts.connectDisplay}
      </p>

      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <img
          width="800"
          src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"
          alt={texts.jetsonFirstBoot}
        />
      </div>

      <div className="alert alert--info" role="alert" style={{ marginBottom: '1em' }}>
        {texts.systemConfiguration}
      </div>

      <p>
        <strong>{texts.step4Optional}</strong> {texts.installJetpack}
      </p>

      <p>{texts.installJetpackInstructions}</p>

      <CodeBlock language="bash">{`sudo apt update
sudo apt install nvidia-jetpack`}</CodeBlock>
    </div>
  );
};

const HostEnvironmentNote = ({ lang = 'en' }) => {
  const texts = content[lang] || content.en;
  return (
    <>
      <div className="alert alert--info" role="alert">
        <strong>{texts.hostRecommendation}</strong>
        <br />
        {texts.hostRecommendationText}
        <br />
        {texts.hostRecommendationTable}
      </div>
      <p></p>
      <div style={{ overflowX: 'auto', marginBottom: '1em' }}>
        <table style={{ textAlign: 'center', width: '45%', borderCollapse: 'collapse' }} border={1}>
          <thead>
            <tr>
              <th rowSpan={2}>{texts.jetpackVersion}</th>
              <th colSpan={3}>{texts.ubuntuVersion}</th>
            </tr>
            <tr>
              <th>18.04</th>
              <th>20.04</th>
              <th>22.04</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JetPack 5.x</td>
              <td>✅</td>
              <td>✅</td>
              <td></td>
            </tr>
            <tr>
              <td>JetPack 6.x</td>
              <td></td>
              <td>✅</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const HostEnvironmentNote1 = ({ lang = 'en' }) => {
  const texts = content[lang] || content.en;
  return (
    <>
      <div className="alert alert--info" role="alert">
        <strong>{texts.hostRecommendation}</strong>
        <br />
        {texts.hostRecommendationText}
        <br />
        {texts.hostRecommendationTable}
      </div>
      <p></p>
      <div style={{ overflowX: 'auto', marginBottom: '1em' }}>
        <table style={{ textAlign: 'center', width: '45%', borderCollapse: 'collapse' }} border={1}>
          <thead>
            <tr>
              <th rowSpan={2}>{texts.jetpackVersion}</th>
              <th colSpan={3}>{texts.ubuntuVersion}</th>
            </tr>
            <tr>
              <th>18.04</th>
              <th>20.04</th>
              <th>22.04</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JetPack 6.x</td>
              <td></td>
              <td>✅</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
