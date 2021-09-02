## EBCLocal

解决frappe，erpnext的中国本地化问题，欢迎大家发现，提交问题。  
ERPNext本地化解决方案交流QQ群:694535174

新增13版分支： bench get-app --branch version-13 ebclocal https://gitee.com/petel_zhang/EBCLocal.git；

由于本项目名称大写的原因，在docker中安装会失败，建议fork本项目然后修改仓库名称和仓库路径后缀为全小写，即：ebclocal

#### 使用方法
1、进入 `bench` 工作台目录；  
2、获取对应版本APP ` bench get-app --branch version-12 https://gitee.com/petel_zhang/EBCLocal.git`  
3、安装APP ` bench --site site1.local install-app ebclocal`  

#### 已解决问题
1、因国内网络问题`emoji.json`表情文件无法远程加载，改成加载本地json文件；  
2、解决erpnext单据中大写金额翻译错误；
3、日期选择组件中文显示;  
4、日历组件中文显示;  
5、甘特图中文显示;  
6、单据列表模式，鼠标悬停中文显示;  
7、报表控件中文显示：升序，降序，重置，添加列，删除列;  
8、修改角色权限管理【文档类型】的控件类型，解决无法搜索的问题;  
9、单据分组显示汉化；  
10、报表，仪表盘图表汉化；  
11、修改链接类型，翻译显示；  
12、完善翻译文件；  
13、自定义标准打印格式时列表字段的翻译；  
14、用户界面模块和角色权限查看的翻译；  

#### License

MIT