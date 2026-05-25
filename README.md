# 纸伞记 | 油纸伞非遗数字展馆

一个围绕“伞制作技艺（油纸伞制作技艺）”制作的非遗主题静态网站，适用于 Web 前端开发技术课程作业展示。

## 项目主题

网站以泸州分水油纸伞为内容线索，展示油纸伞的非遗档案、制作工序、作品视觉、传承故事与互动留言。整体采用“高级档案馆”设计语言：纸本肌理、窄栏编号、展签、影像墙、写实工序图，弱化普通卡片和模板化轮播。

## 页面栏目

- 档案封面：上油工序主视觉、项目编号与资料弹窗
- 档案索引：项目名称、项目编号、地域坐标、网页方法
- 材料笔记：竹、纸、线、油四种材料说明
- 工序标本：选竹、制骨、穿线、裱面、绘花、上油六张写实工序图
- 材料影像：非对称影像墙与图片放大模态框
- 传承笔记：策展说明、Bootstrap Accordion、知识问答 Offcanvas
- 访客簿：表单验证、留言动态渲染

## 技术实现

- HTML / CSS / JavaScript 三文件分离
- Bootstrap 5.3.3 框架与响应式栅格
- Bootstrap 组件：Navbar、Modal、Accordion、Offcanvas、Form、Table、响应式栅格
- JavaScript 交互：滚动进度条、滚动浮现、工序索引定位、当前工序高亮、图片放大、留言渲染、知识问答
- 图片本地化：所有图片存放于 `assets/images/`，页面优先加载 WebP

## 目录结构

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── hero-oilpaper-umbrella.png
│       ├── hero-oilpaper-umbrella.webp
│       ├── workshop-process.png
│       ├── workshop-process.webp
│       ├── canopy-detail.png
│       ├── canopy-detail.webp
│       ├── process-banner.png
│       ├── process-banner.webp
│       └── process/
│           ├── select-bamboo.png / .webp
│           ├── make-ribs.png / .webp
│           ├── thread-ribs.png / .webp
│           ├── paste-canopy.png / .webp
│           ├── paint-pattern.png / .webp
│           └── oil-finish.png / .webp
├── docs/
│   ├── ai-collaboration-log.md
│   └── image-prompts.md
└── README.md
```

## 团队分工

| 角色 | 成员 | 负责内容 |
|---|---|---|
| 组长 / 项目统筹 | 尹斌 | 进度管理、分工协调、最终交付 |
| 内容与 UI 设计 | 陈治霖 | 非遗资料整理、页面视觉与文案 |
| 前端开发 | 陈军豪 | HTML/CSS/Bootstrap/JS 实现 |
| 测试与文档 | 杨执平 | 响应式测试、README、材料整理 |

## AI 协同说明

本项目使用 AI 辅助进行需求拆解、视觉方向设计、图片生成、代码生成与调试。AI 生成内容均经过人工筛选、修改与整合。完整记录见：

- `docs/ai-collaboration-log.md`
- `docs/image-prompts.md`

## GitHub Pages 发布

1. 将本目录所有文件上传到 GitHub 仓库。
2. 进入仓库 `Settings` → `Pages`。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/root`。
5. 保存后等待 GitHub Pages 生成访问链接。

如果暂时不会发布 GitHub Pages，可先提交本项目压缩包；发布地址后续再补。

## 资料来源

- 四川省地方志工作办公室：《〖非遗〗伞制作技艺（油纸伞制作技艺）》  
  https://scdfz.org.cn/scyx/scfy/content_151831
- 国务院第二批国家级非物质文化遗产名录 PDF：伞制作技艺，项目编号 Ⅷ-140  
  https://ich.unesco.org/doc/src/19639.pdf?t=1365091835
- 中国政府网：《四川泸州：纸伞制作忙 “非遗”靓市场》  
  https://www.gov.cn/yaowen/tupian/202404/content_6947310.htm

## 素材说明

网页主要图片为 GPT Image 2 辅助生成后本地保存，未直接使用网络图片。图片 prompt 与文件路径见 `docs/image-prompts.md`。
