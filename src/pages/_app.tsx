/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-03 11:21:23
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:21:57
 * @FilePath: src/pages/_app.tsx
 * @Description: 应用根组件，提供Redux状态管理
 */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/lib/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}