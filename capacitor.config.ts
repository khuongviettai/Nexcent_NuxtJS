import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.khuongviettai.nuxt',
  appName: 'nuxt',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
