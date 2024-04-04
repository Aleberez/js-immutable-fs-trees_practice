// @ts-check

import {
  mkfile, mkdir, isDirectory, isFile,
} from '@hexlet/immutable-fs-trees';

isFile(mkfile('config')); // true
isDirectory(mkdir('etc')); // true

const tree = mkdir(
  'nodejs-package',
  [
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir(
      'dist',
      [
        mkdir(
          '__tests__',
          [
            mkfile('half.tests.js', { type: 'text/javaskript' }),
          ],
        ),
      ],
    ),
    mkfile('babel.config.js', { type: 'text/javaskript' }),
    mkdir(
      'node_modules',
      [
        mkdir(
          '@babel',
          [
            mkdir(
              'cli',
              [
                mkfile('LICENSE'),
              ],
            ),
          ],
        ),
      ],
      {
        owner: 'root',
        hidden: false,
      },
    ),
  ],
  { hidden: true },
);

console.log(tree);
