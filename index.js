module.exports = {
  VERSION: '1.0.0',
  properties: {},
  allProperties: [],
  defaultBuildPath: 'build/',

  transform: require('./lib/common/transforms'),
  transformGroup: require('./lib/common/transformGroups'),
  format: require('./lib/common/formats'),
  template: require('./lib/common/templates'),
  action: require('./lib/common/actions'),

  registerTransform: require('./lib/register/transform'),
  registerTransformGroup: require('./lib/register/transformGroup'),
  registerFormat: require('./lib/register/format'),
  registerTemplate: require('./lib/register/template'),
  registerAction: require('./lib/register/action'),

  buildPlatform: require('./lib/buildPlatform'),
  buildAllPlatforms: require('./lib/buildAllPlatforms'),

  extend: require('./lib/extend')
};