/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-02 08:48:23
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:06:43
 * @FilePath: src/pages/login/index.tsx
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/store";
import { setUserId, clearUserId } from "@/lib/features/user/user-Slice";

const View: React.FC = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const handleLogin = () => {
    dispatch(setUserId("1"));
  };

  const handleLogout = () => {
    dispatch(clearUserId());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Redux 持久化示例
        </h1>
        <div className="space-y-6">
          <div className="transition-all duration-300">
            <p className="text-gray-700 font-medium mb-2">当前状态：</p>
            <pre className="bg-gray-50/50 backdrop-blur-sm p-4 rounded-lg font-mono text-sm border border-gray-200">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
          <div className="flex space-x-4 justify-center">
            <button
              onClick={handleLogin}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              登录
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-medium transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              登出
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;