import { getTsProgram, expandTypesPlugin } from 'cem-plugin-expanded-types';

export default {
  globs: ['src/components/**/*.tsx'],
  stencil: true,
  // dev: true,
  // watch: true,
  overrideModuleCreation: ({ts, globs}) => {
    const program = getTsProgram(ts, globs, 'tsconfig.json');
    return program
      .getSourceFiles()
      .filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
  },
  plugins: [expandTypesPlugin()],
};
