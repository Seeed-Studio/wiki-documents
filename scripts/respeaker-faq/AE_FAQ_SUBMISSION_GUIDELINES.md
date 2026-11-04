# AE 新增 reSpeaker FAQ（Q&A）提交与发布规范

## 1. 适用范围

本规范用于 AE 向 Seeed Studio Wiki 提交新的 reSpeaker FAQ，或更新已有 FAQ。

当前自动发布管线支持以下产品：

| `productKey` | 英文文档 | `wikiSlug` |
| --- | --- | --- |
| `xvf3800_usb_4_mic` | `xvf3800_usb_4_mic_faq.md` | `/respeaker_xvf3800_faq` |
| `flex_xvf3800` | `flex_xvf3800_faq.md` | `/respeaker_flex_faq` |
| `respeaker_lite` | `respeaker_lite_faq.md` | `/respeaker_lite_faq` |
| `xvf3000` | `xvf3000_faq.md` | `/respeaker_xvf3000_faq` |
| `respeaker_2_mics_pi_hat` | `respeaker_2_mics_pi_hat_faq.md` | `/respeaker_2_mics_pi_hat_faq` |
| `respeaker_clip` | `respeaker_clip_faq.md` | `/respeaker_clip_faq` |

不在上述列表中的产品不属于普通 FAQ 新增。必须先由维护负责人确认，并扩展产品映射、页面、搜索插件和英文 sidebar。

## 2. 职责边界

### 2.1 AE 负责

- 提供真实客户问题及适用产品。
- 核实硬件版本、固件模式、固件版本和主机环境。
- 提供可追溯的官方依据。
- 编写明确、可执行、可验证的英文答案。
- 完成 manifest 条目及必要的测试更新。
- 提交 PR 并附上完整验收结果。

### 2.2 Wiki 维护方负责

- 审核内容是否适合公开发布。
- 处理证据冲突及产品能力确认。
- 运行和维护多语言翻译流程。
- 维护所有非英文 sidebar。

### 2.3 Agent 与自动脚本负责

- 根据 manifest 更新英文 FAQ 页面中的自动管理区块。
- 构建当前语言的 FAQ 搜索索引。
- 校验 slug、锚点、链接、敏感信息及生成结果。

## 3. FAQ 准入条件

新 FAQ 必须同时满足：

1. 问题来自真实客户场景、常见技术问题或可复用的产品支持需求。
2. 已明确产品型号、硬件版本及适用模式。
3. 答案有至少一项可信依据，优先级如下：
   1. 已审核的正式 FAQ；
   2. 当前 Seeed Wiki；
   3. Seeed 或 reSpeaker 官方 GitHub 代码、固件、Release 或 Commit；
   4. 产品团队确认的公开结论。
4. 答案包含明确结论，不使用“应该可以”“理论上”等表达掩盖证据不足。
5. 操作类答案具有可验证的成功判据。
6. 不包含客户隐私、工单号、飞书 record ID、访问凭证、内部地址或未公开资料。

以下情况不得直接发布：

- 官方资料之间存在冲突且尚未确认。
- 无法确认产品型号、固件模式或适用版本，且这些信息会改变结论。
- 只有个人经验，没有可复现过程或公开依据。
- 内容与已有 FAQ 重复。
- 结论涉及未发布功能、路线图、商务承诺或未经确认的产品能力。

被阻塞的内容不得以 `"publicationDecision": "BLOCK"` 写入正式 manifest；当前管线会拒绝包含 `BLOCK` 的 manifest。应保留在上游审核记录中，确认后再提交。

## 4. 去重与问题拆分

提交前必须搜索现有 manifest 和 FAQ 页面：

```bash
rg -ni "问题关键词|错误信息|产品功能" \
  scripts/respeaker-faq/manifests/approved_faq_manifest.json \
  sites/en/docs/FAQ/respeaker
```

处理原则：

- 问题意图及解决方案相同：更新已有 FAQ，不新建。
- 同一客户目标下的连续追问：合并成一个 FAQ。
- 产品、接口或技术目标明显不同：拆成独立 FAQ。
- 同一问题仅因措辞不同：不得重复新增。
- 更新已有条目时，不得修改其 `publicFaqId`、`wikiSlug` 或 `wikiAnchor`。

## 5. 内容编写规范

### 5.1 问题标题

`questionEn` 必须：

- 使用自然、完整的英文疑问句。
- 包含产品名或足以明确产品范围的简称。
- 描述用户实际遇到的问题。
- 避免 `Issue`、`Problem`、`FAQ` 等无信息标题。

推荐：

```text
Why is my XVF3800 not detected over USB on Raspberry Pi 5 or Linux?
```

禁止：

```text
XVF3800 issue
USB problem
How to fix it?
```

### 5.2 直接答案

`directAnswerEn` 第一段必须直接回答问题：

- 支持：使用 `Yes` 或直接说明实现方式。
- 不支持：使用 `No` 或 `The current firmware does not support...`。
- 有条件支持：先写清适用条件。

随后再解释操作条件、版本限制和避坑事项。

### 5.3 适用范围

`appliesTo` 必须说明：

- 完整产品名；
- 必要的硬件版本；
- USB、I²S 等固件模式；
- 必要时注明主机系统或软件版本。

### 5.4 操作步骤

`steps` 中每一步必须是可执行动作。命令、文件名、参数、接口和路径必须来自已核实的资料。

不得：

- 用“按照官方教程操作”代替实际路径。
- 提供无法验证的命令。
- 混淆 USB UAC、I²S 音频数据和 I²C 控制。
- 把主机端行为描述成设备固件能力。

### 5.5 成功判据

操作型 FAQ 必须填写 `successCriteria`，例如：

- 设备出现在 `lsusb` 中；
- ALSA 可以列出录音设备；
- 固件版本与目标镜像一致；
- 测试录音可以正常启动；
- API 返回预期状态。

### 5.6 官方参考资料

`officialReferences` 建议保留 1～3 个最相关链接：

- 必须使用 HTTPS。
- 必须链接到具体 Wiki 页面、GitHub 文件、目录、Release 或 Commit。
- 不得只链接网站首页或 GitHub 仓库首页。
- 社区资料只能作为补充，不能单独支撑关键产品结论。

## 6. Manifest 字段规范

唯一数据源：

```text
scripts/respeaker-faq/manifests/approved_faq_manifest.json
```

### 6.1 必填字段

| 字段 | 规则 |
| --- | --- |
| `publicFaqId` | 全局唯一且稳定，使用小写字母、数字和下划线 |
| `productKey` | 必须来自受支持产品表 |
| `productVariants` | 适用的完整产品名称列表 |
| `primaryDomain` | 一个主要分类 |
| `publicationDecision` | 正式 manifest 中只能为 `PUBLISH` |
| `lastVerifiedAt` | 使用 `YYYY-MM-DD` |
| `wikiSlug` | 必须使用对应产品的既有 slug |
| `wikiAnchor` | 小写字母、数字和连字符，全局稳定 |
| `questionEn` | 英文问题 |
| `directAnswerEn` | 英文直接答案 |
| `appliesTo` | 产品、版本和环境边界 |
| `officialReferences` | 经核验的公开参考资料 |
| `skus` | SKU 字符串数组；没有明确 SKU 时使用空数组 |
| `keywords` | 用于搜索的产品名、错误信息、命令和同义词 |

### 6.2 条件必填字段

| 字段 | 适用条件 |
| --- | --- |
| `secondaryDomains` | 同时涉及其他分类时填写 |
| `prerequisites` | 操作前有硬件、软件、固件或工具要求时填写 |
| `steps` | 需要执行操作才能解决时填写 |
| `successCriteria` | 操作型 FAQ 必填 |
| `notes` | 存在限制、风险、版本差异或常见误区时填写 |
| `qualityScore` | 由审核流程产生，不得由 AE 猜测 |

### 6.3 分类枚举

`primaryDomain` 和 `secondaryDomains` 只能使用：

```text
documentation_usage
connectivity
firmware_software
audio
algorithm_tuning
hardware
product_business
```

## 7. Manifest 条目模板

以下占位内容必须全部替换后才能提交：

```json
{
  "publicFaqId": "product_short_problem_description",
  "productKey": "respeaker_lite",
  "productVariants": [
    "reSpeaker Lite"
  ],
  "primaryDomain": "firmware_software",
  "secondaryDomains": [
    "connectivity"
  ],
  "publicationDecision": "PUBLISH",
  "lastVerifiedAt": "2026-09-09",
  "qualityScore": 0,
  "wikiSlug": "/respeaker_lite_faq",
  "wikiAnchor": "stable-question-anchor",
  "questionEn": "How do I ... with reSpeaker Lite?",
  "directAnswerEn": "Yes. Use ... under the following conditions.",
  "appliesTo": "reSpeaker Lite running ... firmware on ...",
  "prerequisites": [
    "Required hardware, firmware or software"
  ],
  "steps": [
    "Perform the first verifiable action.",
    "Perform the second action.",
    "Verify the resulting device state."
  ],
  "successCriteria": [
    "The expected device, command or application result is visible."
  ],
  "notes": [
    "State relevant limitations or version differences."
  ],
  "officialReferences": [
    {
      "title": "Exact official document title",
      "url": "https://wiki.seeedstudio.com/exact_page/"
    }
  ],
  "skus": [],
  "keywords": [
    "product name",
    "error text",
    "command",
    "feature"
  ]
}
```

`qualityScore: 0` 仅为模板占位。提交前必须由审核方填写真实结果，或按维护流程确认是否允许省略。

## 8. 文件编辑边界

### 8.1 必须编辑

```text
scripts/respeaker-faq/manifests/approved_faq_manifest.json
```

### 8.2 由脚本更新

```text
sites/en/docs/FAQ/respeaker/*_faq.md
```

生成页面中以下标记之间属于脚本管理区：

```markdown
<!-- RESPEAKER_FAQ_AUTO_START -->
...
<!-- RESPEAKER_FAQ_AUTO_END -->
```

AE 不得直接修改该区块，否则下次运行 pipeline 时可能被覆盖或产生冲突。

### 8.3 可人工维护

自动标记之外的内容可以按 Wiki 流程维护，包括：

- frontmatter；
- 页面介绍；
- `Before you begin`；
- 技术支持区块。

实质更新 FAQ 后，目标英文页面的 frontmatter 必须同步更新：

```yaml
last_update:
  date: 09/09/2026
  author: <本次更新作者>
```

日期必须使用 `MM/DD/YYYY`。

### 8.4 禁止修改

普通 FAQ 新增不得修改：

- `src/data/respeaker_faq_index.json`：该文件已删除，不得恢复。
- 非英文 `sidebars.js`。
- 非英文 FAQ 翻译文件。
- `FaqExplorer` 或索引插件架构。
- 已有文档的 slug。
- 已有 FAQ 的稳定 ID 和锚点。

新增 FAQ 到已有产品页时，不需要修改任何 sidebar。

## 9. 本地生成流程

### 9.1 校验 manifest

```bash
node scripts/respeaker-faq/pipeline.mjs --validate
```

必须退出码为 0，且不得出现：

- 重复 `publicFaqId`；
- 重复 `wikiSlug#wikiAnchor`；
- 未知产品或分类；
- `BLOCK` 条目；
- 非 HTTPS 官方链接；
- 缺少必填字段。

### 9.2 执行 dry-run

```bash
node scripts/respeaker-faq/pipeline.mjs
```

正常新增 FAQ 时，目标产品页应显示 `update-needed`。

如果出现 `conflict`：

- 立即停止；
- 不得强制覆盖；
- 检查页面自动区块是否被人工修改；
- 与页面维护者确认并解决差异。

### 9.3 应用生成结果

```bash
node scripts/respeaker-faq/pipeline.mjs --apply
```

应用后再次运行：

```bash
node scripts/respeaker-faq/pipeline.mjs
```

预期结果：

```text
conflicts: 0
drift (needs apply): 0
Dry-run: output is up to date.
```

### 9.4 更新 frontmatter

在实际发生内容变化的英文产品页中更新：

```yaml
last_update:
  date: MM/DD/YYYY
  author: <作者名>
```

不得移动或删除自动管理标记。

## 10. 测试规范

### 10.1 快速校验

```bash
node scripts/respeaker-faq/pipeline.mjs --validate
node scripts/respeaker-faq/pipeline.mjs
node scripts/respeaker-faq/validate-public.mjs
node --test scripts/respeaker-faq/tests/
yarn typecheck
```

### 10.2 完整发布验收

最终 PR 提交前必须运行：

```bash
bash scripts/respeaker-faq/verify-respeaker-faq.sh
```

正式验收不得设置：

```text
SKIP_TYPECHECK=1
SKIP_BUILD=1
SKIP_BROWSER=1
```

如果本地确实缺少浏览器工具，可以将浏览器项标记为未执行，但必须确保：

- 英文构建通过；
- FAQ 页面路由存在；
- FAQ Center 的 SSR 结果包含静态链接；
- 未执行原因写入 PR。

QA 报告默认生成于：

```text
build/respeaker-faq-qa/report.md
```

构建产物和本地 QA 报告默认不提交，只将结果摘要粘贴到 PR。

### 10.3 新增数量断言

当前测试中存在以 29 条 FAQ 和各产品数量为基线的显式断言。新增 FAQ 时必须检查并合理更新：

```text
scripts/respeaker-faq/tests/renderer.test.mjs
scripts/respeaker-faq/tests/search.test.js
scripts/respeaker-faq/verify-respeaker-faq.sh
```

只能更新受本次新增影响的期望数量。不得删除断言或改成无约束判断以绕过测试。

## 11. 搜索与多语言规则

- 搜索数据由 `plugins/respeaker-faq-index` 在站点构建时从当前语言 FAQ 文档生成。
- 不提交静态 JSON 搜索索引。
- 英文 FAQ 发布后，由既有翻译流程翻译 `.md` 和 `.mdx`。
- 自定义锚点必须保持不变：

```markdown
### Localized question {#stable-question-anchor}
```

- 以下占位符不得翻译或修改：

```text
%count%
%total%
%date%
%skus%
```

- AE 只处理英文页面和必要的英文 sidebar。
- `sites/zh-CN/sidebars.js`、`sites/ja/sidebars.js`、`sites/es/sidebars.js`、`sites/pt-BR/sidebars.js` 由多语言维护方负责。
- 除非负责人明确要求，AE 和 Agent 均不得修改非英文 sidebar。

## 12. Git 与 PR 规范

提交前检查变更范围：

```bash
git status --short
git diff --check
git diff -- \
  scripts/respeaker-faq \
  sites/en/docs/FAQ/respeaker \
  sites/en/sidebars.js
```

只暂存本次相关文件，不使用 `git add -A`：

```bash
git add \
  scripts/respeaker-faq/manifests/approved_faq_manifest.json \
  scripts/respeaker-faq/tests/renderer.test.mjs \
  scripts/respeaker-faq/tests/search.test.js \
  sites/en/docs/FAQ/respeaker/<product_faq_file>
```

推荐 Commit：

```text
docs(respeaker-faq): add <short topic> FAQ
```

更新已有答案时：

```text
docs(respeaker-faq): update <short topic> guidance
```

### 12.1 PR 描述模板

```markdown
## FAQ summary

- Product:
- Question:
- Applies to:
- New FAQ or existing FAQ update:
- Evidence reviewed:
- Main conclusion:

## Generated files

- Manifest:
- English FAQ page:
- Test expectations updated:

## Validation

- [ ] `node scripts/respeaker-faq/pipeline.mjs --validate`
- [ ] `node scripts/respeaker-faq/pipeline.mjs`：0 conflict，0 drift
- [ ] `node scripts/respeaker-faq/validate-public.mjs`
- [ ] `node --test scripts/respeaker-faq/tests/`
- [ ] `yarn typecheck`
- [ ] `bash scripts/respeaker-faq/verify-respeaker-faq.sh`
- [ ] English build passed
- [ ] No non-English sidebar changed

## Risks or unresolved items

- None / <具体说明>
```

## 13. 发布验收标准

- [ ] FAQ 不与现有内容重复。
- [ ] 产品、硬件版本、固件模式和主机环境明确。
- [ ] 问题标题是自然、完整的英文疑问句。
- [ ] 第一段直接回答客户问题。
- [ ] 操作步骤可以复现。
- [ ] 操作型 FAQ 包含成功判据。
- [ ] 至少有一个有效的官方公开依据。
- [ ] `publicFaqId`、slug 和 anchor 唯一且稳定。
- [ ] 正式 manifest 中只有 `PUBLISH`，没有 `BLOCK`。
- [ ] 自动生成区块未被手工编辑。
- [ ] frontmatter 的日期和作者已更新。
- [ ] 搜索插件能够索引新增 FAQ。
- [ ] 未恢复静态 JSON 索引。
- [ ] 未修改任何非英文 sidebar。
- [ ] dry-run 显示 0 conflict、0 drift。
- [ ] public validator、单元测试、类型检查及英文构建通过。
- [ ] PR 中附有真实测试结果及未执行项目说明。
