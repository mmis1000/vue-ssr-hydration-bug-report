declare const React: string;
declare module '*.json';
declare module '*.png';
declare module '*.jpg';

declare namespace NodeJS {
  // eslint-disable-next-line
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
  }
  // eslint-disable-next-line
  interface Process {
    env: ProcessEnv;
  }
}
