import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'frmseven',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    url:'http://192.168.1.223:3000'
  }
};

export default config;
