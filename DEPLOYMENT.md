# GitHub部署指南

## Fork 这个仓库


## 启用GitHub Pages

要让项目在GitHub Pages上运行，请按以下步骤操作：

### 1. 访问仓库设置
1. 打开 https://github.com/ouyawen2016/ForLove
2. 点击仓库页面顶部的 "Settings" 标签

### 2. 配置GitHub Pages
1. 在左侧菜单中找到 "Pages" 选项
2. 在 "Source" 部分选择 "Deploy from a branch"
3. 选择 "main" 分支
4. 选择 "/ (root)" 文件夹
5. 点击 "Save" 保存设置

### 3. 访问你的网站
配置完成后，你的网站将在以下地址可用：
**https://yourname/ForLove/**

## 更新项目

当你对项目进行更改时，使用以下命令推送到GitHub：

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到GitHub
git push origin main
```

## 注意事项

1. **音频文件**：由于版权考虑，项目不包含音频文件，用户需自行添加
2. **浏览器兼容性**：建议使用Chrome、Firefox等现代浏览器
3. **移动端适配**：项目已适配移动设备

## 故障排除

如果GitHub Pages没有更新：
1. 检查仓库设置中的Pages配置
2. 确认代码已成功推送到main分支
3. 等待几分钟让GitHub Pages重新构建
4. 清除浏览器缓存后重新访问

## 项目链接

- **GitHub仓库**: https://github.com/ouyawen2016/ForLove
- **在线演示**: https://ouyawen2016.github.io/ForLove/
