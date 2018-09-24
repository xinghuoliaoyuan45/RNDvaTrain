'use strict';
const fs = require('fs');
var yaml = require('js-yaml');
var operation = require('./operation');



function loadYamlFile(filePath) {
  try {
    let doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    let newActions = doc.actions.map(value=>{
      return switchCharacter(value)
    })
    doc.actions= newActions
    console.log('成功读取>>>>>>>' + JSON.stringify(doc));
    return doc;
  } catch (e) {
    console.log('报错>>>>>>>>>>' + e);
    return e;
  }
}

function run() {
    if (process.argv[1]) {
      const yamlFile = process.argv[2];
      const settings = loadYamlFile('./yaml/'+yamlFile);
      operation(settings);
    } else {
      console.log('\nPlease provide an file'.underline.red);
      process.exit(1);
    }
}

function switchCharacter(value) {
  let s = value.functionName
  if(!s){
      console.log('你的yaml文件的actions->functionName没写')
  }
  let newS = s.replace(/([A-Z])/g,"_$1").toUpperCase()
  return {
    ...value,
    functionName:s,
    constantName:newS
  }
}
run();
