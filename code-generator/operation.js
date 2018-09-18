const path = require('path');
const doT = require('dot');
const fs = require('fs');


const templatesDir = path.join(__dirname, 'templates');
const templateFileName = 'dvaModel.js'

/**
 * 生成文件模板
 * @param config
 * @param templateSource
 * @returns {*}
 */

function interpolateTemplate(config, templateSource) {
  doT.templateSettings.strip = false;
  let template = doT.template(templateSource);
  return template(config);
}

/**
 * 写入文件
 * @param path
 * @param fileName
 * @param source
 * @returns {*}
 */
function saveSource(path, fileName, source) {
  if (fs.existsSync(path + fileName)) {
    console.log('文件已存在！')
    return false;
  }
  mkdirp(path)
  return new Promise((resolve, reject) => {
    fs.writeFile(path + fileName, source, function (err) {
      if (err) {
        reject('写入文件报错>>>>>>'+err);
      } else {
        resolve(path + fileName);
      }
    })
  });
}

function mkdirp(filepath, fileName) {
  var dirname = path.dirname(filepath);
  if (!fs.existsSync(dirname)) {
    mkdirp(dirname);
  }
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath);
  }
}

function loadTemplate() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(templatesDir, templateFileName), 'utf8', function (err, data) {
      if (err) {
        reject("读取模板失败"+err);
      } else {
        resolve(data);
      }
    });
  })
}

/*
{
  filename:"testModel"
	"namespace": "test",
	"actions": [{
		"name": "保存登陆表单",
		"type": "single",
		"method_base": "saveLoginForm",
		"constant_name": "SAVE_LOGIN_FORM"
	}, {
		"name": "获取登录数据",
		"type": "api",
		"method_base": "getMessage",
		"constant_name": "GET_MESSAGE"
	}]
}
 */
function operation(settings){
    loadTemplate()
      .then(template => {
        let source = interpolateTemplate(settings, template);
        let path = settings.fileName;
        return saveSource(templatesDir,path, source);
      })
      .then(outputFileName => {
        console.log('Created file: ' + outputFileName);
      })
      .catch(error => {
        console.log(error);
      });
}

module.exports = operation;
