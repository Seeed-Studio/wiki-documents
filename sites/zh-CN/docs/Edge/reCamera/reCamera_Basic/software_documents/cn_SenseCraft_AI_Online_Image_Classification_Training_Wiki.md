---
description: 本wiki演示了如何训练分类模型以识别您想要识别的内容.
title: 在SenseCraft AI中快速训练图像分类模型
keywords:
  - reCamera
  - Classification model
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /train_classification_model_online
last_update:
  date: 07/19/2026
  author: yylin
no_comments: false
createdAt: '2026-07-19'
updatedAt: '2026-07-20'
url: https://wiki.seeedstudio.com/cn/train_classification_model_online/
---

# 使用 SenseCraft AI 在线快速训练图像分类模型

SenseCraft AI 提供了一套基于浏览器的图像分类模型训练工具。无需搭建本地深度学习环境，也不需要编写训练代码，只需准备不同类别的图像样本，即可在线完成数据采集、模型训练、效果预览与设备部署。

在线训练入口：[SenseCraft AI Online Training](https://sensecraft.seeed.cc/ai/training?trainTab=2)

## 功能概览

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/5d1e487134e459661c3d38260fa264c1.png" /></div>

通过 SenseCraft AI 在线训练工具，你可以：

- 使用电脑摄像头实时采集训练图像；
- 为识别目标创建多个分类类别；
- 导入已有数据集，或导出当前数据集进行备份；
- 在云端快速训练图像分类模型；
- 将训练完成的模型用于 reCamera；
- 在线预览模型的分类结果；
- 在历史模型中查看和管理已训练模型。

整个流程可以概括为：

1. 创建分类类别；
2. 为每个类别采集图像样本；
3. 选择目标设备并开始训练；
4. 使用摄像头预览分类效果；
5. 将模型部署到 reCamera。

## 图像分类适合做什么

图像分类模型用于判断一张图像整体属于哪个类别。例如：

| 应用场景 | 示例类别 |
| --- | --- |
| 天气识别 | 晴天、阴天、雨天、雾天 |
| 物品分类 | 瓶子、杯子、盒子 |
| 产品质检 | 合格、划痕、破损 |
| 场景识别 | 室内、室外、仓库、办公室 |
| 手势识别 | OK、点赞、停止 |
| 设备状态识别 | 正常、告警、离线 |

> 图像分类会为整张图像输出一个类别。如果需要在同一画面中定位一个或多个目标，并获得目标位置，应使用“图像目标检测”功能。

## 使用前准备

开始训练前，请准备：

- 一个可登录 SenseCraft AI 的账号；
- Chrome、Edge 等现代浏览器；
- 可正常使用的电脑摄像头，或已经整理好的分类图像；
- 至少两个需要区分的类别；
- 如需部署，准备一台已接入 SenseCraft AI 的 reCamera。

使用浏览器摄像头采集样本时，需要允许网页访问摄像头。

## 第一步：进入在线训练页面

1. 打开 [SenseCraft AI 在线训练页面](https://sensecraft.seeed.cc/ai/training?trainTab=2)。
2. 登录 SenseCraft AI 账号。
3. 在顶部导航中进入“模型”页面，然后选择“训练”。
4. 在训练类型中选择“图像分类”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/5d1e487134e459661c3d38260fa264c1-1.png" /></div>

页面主要分为三个区域：

- **分类数据采集**：创建类别并添加训练样本；
- **模型训练**：选择设备并启动训练；
- **部署与预览**：训练完成后测试或部署模型。

## 第二步：创建分类类别

系统默认提供 `Class 1` 和 `Class 2`。建议先将它们修改为容易理解的类别名称，我们这里才有用`have person` 和 `no person`演示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image.png" /></div>

1. 点击类别名称旁的编辑图标；
2. 输入类别名称，例如 `have person`、`no person`；
3. 如需更多类别，点击“添加类别 +”；
4. 如需管理或删除某个类别，使用类别右侧的更多菜单。

类别命名建议：

- 名称应简短、明确，并且彼此不重复；
- 建议使用实际业务中的名称；
- 同一项目内尽量统一使用中文或英文；
- 不要把外观非常接近、含义又不明确的样本随意拆成多个类别。

## 第三步：采集训练样本

### 通过摄像头采集

1. 在左侧选中需要添加样本的类别；
2. 在右侧输入源下拉菜单中选择 `Webcam`；
3. 将目标放入摄像头画面；
4. 按住绿色的“按住即可录制”按钮；
5. 从不同角度、位置、距离和光照条件下重复采集；
6. 切换到下一个类别并重复上述操作。

采集时不要始终保持完全相同的背景和构图，否则模型可能错误地学习背景特征，而不是目标本身。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/093e0b5c7bdc1308aa1ba2e0c19f28bf-2.png" /></div>

### 导入已有数据集

如果已经准备好训练数据，可以点击“导入数据集”并按页面提示上传。

可以选择只导入一个类别，也就是在这个类别旁边的三个点中点击后选择导入即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/3f56178d7b36c313e3d1502a0c237e1a.png" /></div>

也导入一整个模型使用的数据集，但是要求压缩为zip文件之前，是已经把各个类别的数据统一按照需要的class_name命名文件夹，一起压缩为一个zip文件，然后导入，系统会自动分配。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/1de66a13a5b8ba14d612e61667076a43.png" /></div>

整理数据时，建议做到：

- 每张图像只表达一个明确类别；
- 删除模糊、严重遮挡和类别错误的图像；
- 各类别的样本数量尽量接近；
- 数据中应包含真实部署环境可能出现的变化；
- 训练样本不要全部来自同一段连续视频的相邻帧。

### 导出或清空数据集

- 点击“导出数据集”，可以备份当前已采集的数据；
- 点击“清空”，可以移除当前训练任务中的样本并重新开始。

清空操作可能无法撤销，建议先导出数据集进行备份。

## 如何采集更高质量的数据

模型效果在很大程度上取决于训练数据。建议每个类别采集多样化样本，而不是只追求数量。

### 保持类别数量相对均衡

如果某一类别有大量样本，而其他类别只有少量样本，模型可能更倾向于输出样本最多的类别。

### 覆盖真实使用环境

样本应尽量覆盖：

- 不同光照：白天、夜晚、逆光、弱光；
- 不同角度：正面、侧面、俯视、仰视；
- 不同距离：近距离、中距离、远距离；
- 不同位置：画面中央、边缘和角落；
- 不同背景：简单背景和复杂背景；
- 不同状态：轻微遮挡、姿态变化和外观差异。

### 增加负样本或背景类别

如果实际画面中经常出现“不属于任何目标类别”的情况，可以根据业务需要增加 `Background`、`Other` 或“无目标”类别，降低模型在无目标画面中强行输出某个目标类别的概率。

### 避免数据泄漏

用于测试的图像应与训练图像有所不同。不要只用训练时已经出现过的画面判断模型是否有效。

## 第四步：训练模型

完成样本采集后，进入“第二步：模型训练”。

1. 检查每个类别是否都有足够且有效的样本；
2. 在设备下拉菜单中选择 `reCamera`；
3. 如有需要，可展开“高级设置”查看当前页面提供的训练选项；
4. 点击“开始训练”；
5. 等待训练完成，不要在训练过程中关闭页面或清空数据。

训练时间会受到类别数量、样本数量、训练配置和服务状态等因素影响。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-1.png" /></div>

> 首次使用时，建议先采用默认训练配置完成一个基线模型。确认数据和流程正确后，再根据实际效果调整高级设置。

## 第五步：预览和验证模型

训练完成后，可以在“第三步：部署与预览”区域选择刚刚生成的模型。模型也会出现在页面下方的“历史模型”中。

测试时建议：

1. 使用未参与训练的新图像或实时摄像头画面；
2. 分别测试每一个类别；
3. 改变目标角度、距离、位置和环境光照；
4. 观察预测类别及置信度是否稳定；
5. 测试无目标画面和容易混淆的场景；
6. 记录误判和漏判样本，用于下一轮训练。

如果模型在训练样本上表现很好，但换一个背景或角度就无法正确识别，通常说明数据多样性不足，而不是简单地需要更多相似样本。

## 第六步：部署到 reCamera

训练完成并通过预览验证后，可以在部署区域选择对应模型，并按照页面引导部署到 reCamera。

有两种方式可以选择部署到recamera设备中，按照自己的需求选择即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-2.png" /></div>

部署前请确认：

- reCamera 已正常联网并处于在线状态；
- 设备已经绑定到当前 SenseCraft AI 账号；
- 选择的是本次训练生成的正确模型；
- 设备当前任务允许更新或切换模型。

部署完成后，浏览器会跳转到对应的设备界面，可以实时查看模型的运行状态。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-4.png" /></div>

这里选择的是通过usb线连接的reCamera设备的部署方式，会自动跳转到设备的默认ip地址`192.168.42.1`中，预览模型的检测结果

## 使用历史模型

页面下方的“历史模型”用于查看之前完成的训练任务。需要使用旧模型时，可以展开历史模型列表并选择对应记录进行预览或部署。

为了便于管理多次训练结果，建议在项目记录中保存：

- 训练日期；
- 类别列表；
- 各类别样本数量；
- 数据集版本；
- 主要训练设置；
- 测试结果；
- 对应的部署设备。

## 常见问题

### 浏览器没有显示摄像头画面

- 检查浏览器是否已获得摄像头权限；
- 确认摄像头没有被其他应用独占；
- 在输入源下拉菜单中重新选择摄像头；
- 刷新页面后重新授权；
- 尝试使用最新版本的 Chrome 或 Edge。

### 模型总是预测同一个类别

常见原因包括类别样本不均衡、某个类别数据过多、其他类别特征不明显，或者训练图像中存在固定背景。建议补充弱势类别样本，并确保各类别的采集条件具有可比性。

### 训练准确率高，但实际效果不好

这通常意味着训练数据过于单一，或者测试图像与训练图像太相似。应补充真实部署环境中的不同角度、距离、背景和光照条件，并使用全新的图像进行测试。

### 两个类别容易混淆

检查类别定义是否清晰，并重点补充能够体现两类差异的样本。同时删除标签错误、目标不明确或同时包含多个类别特征的图像。

### 无目标时仍然输出某个类别

分类模型通常会从已有类别中选择最可能的一类。可以增加“背景”或“其他”类别，并结合置信度阈值在应用端过滤不可靠结果。

### 找不到刚训练的模型

- 确认训练任务已经完成；
- 展开“历史模型”查看；
- 确认当前登录的是创建该模型的账号；
- 刷新页面后再次检查。

### 无法部署到 reCamera

- 确认设备在线并已绑定到当前账号；
- 检查设备网络连接；
- 确认选择了与目标设备兼容的模型；
- 避免在设备执行其他更新任务时重复部署。
- 确保recamera设备的运行环境正常，也就是web配置界面可以正常使用。

## 推荐的迭代流程

一个可靠的分类模型通常需要多轮迭代：

1. 使用少量但均衡的数据训练第一个模型；
2. 使用新场景测试并记录错误结果；
3. 将具有代表性的误判场景补充到正确类别；
4. 清理错误标签和重复度过高的样本；
5. 重新训练并进行相同条件下的对比测试；
6. 效果满足要求后部署到 reCamera；
7. 在真实环境中持续收集困难样本并更新模型。

## 最佳实践检查表

训练前：

- [ ] 类别定义明确且不存在明显重叠；
- [ ] 每个类别都有训练样本；
- [ ] 各类别样本数量大致均衡；
- [ ] 样本覆盖不同角度、距离、背景和光照；
- [ ] 已删除模糊图像和错误标签；
- [ ] 已根据业务需要准备背景或其他类别；
- [ ] 重要数据集已经导出备份。

部署前：

- [ ] 已使用未参与训练的新画面进行测试；
- [ ] 已测试全部类别和无目标场景；
- [ ] 已检查容易混淆的类别；
- [ ] reCamera 已联网并绑定到当前账号；
- [ ] 已确认模型和目标设备正确；
- [ ] 已计划在真实安装环境中进行二次验证。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
