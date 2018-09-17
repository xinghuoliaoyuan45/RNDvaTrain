#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const doT = require('dot');
const minimist = require('minimist');
const camelCase = require('camelcase');
const capitalize = require('capitalize');
const reserved = require('reserved-words');

const templatesDir = path.join(__dirname, 'templates');
const config = getConfigFromArgs(process.argv.slice(2));

if (!validateConfig(config)) {
  displayHelp();
  return;
}

formatConfig(config);
/**
 * 循环输出文件
 */
for (let temp of config.templates) {
  loadTemplate(config, temp.name)
  .then(template => {
    let source = interpolateTemplate(config, template);
    let fileName = config.id + '.' + temp.name.split('.')[1];
    let path = temp.path;
    return saveSource(path, fileName, source);
  })
  .then(outputFileName => {
    console.log('Created file: ' + outputFileName);
  })
  .catch(error => {
    console.log(error);
  });
}

function getConfigFromArgs(argv) {

  let parsedArgs = minimist(argv, {
    boolean: 'presentation',
    alias: {h: 'help', presentation: 'p'}
  });

  return {
    name: parsedArgs._[0]
  }
}

function validateConfig(config) {
  if (!config.name) {
    console.log('No component name provided!');
    return false;
  }
  if (reserved.check(config.name, 'es2015')) {
    console.log('You have entered a reserved ES6 keyword as a component name!');
    return false;
  }

  return true;
}

function formatConfig(config) {
  config.name = capitalize(camelCase(config.name)); //大驼峰
  config.id = camelCase(config.name);  //小驼峰
  config.templates = [
    {name: 'dva.js', path: 'output/models/'},
    {name: 'container.js', path: 'output/container/'},

  ];
}

function loadTemplate(config, templatename) {
  return new Promise((resolve, reject) => {
    const templateFileName = getTemplateFileName(templatename);
    fs.readFile(path.join(templatesDir, templateFileName), 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
}

function getTemplateFileName(templatename) {
  return templatename;
}

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
    return false;
  }

  mkdirp(path, fileName);

  return new Promise((resolve, reject) => {
    fs.writeFile(path + fileName, source, function (err) {
      if (err) {
        reject(err);
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

function displayHelp() {
  console.log('dva [name]');
}
