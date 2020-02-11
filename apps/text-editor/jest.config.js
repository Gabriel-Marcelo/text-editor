module.exports = {
  name: 'text-editor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/text-editor',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
