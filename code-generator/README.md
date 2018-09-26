# 代码生成步骤
1. cd code-generator
2. npm start app.yaml  
 
在code-generator yaml下面写规则 输出到output下


1.参照app.yaml写 注意yaml filename别忘记加 .js
2.functionName 需要写成小驼峰或大驼峰 
  因为页面上的dispatch的action和XXmodel里面的都会用小驼峰先转为下划线形式最后全部把字母变成大写
