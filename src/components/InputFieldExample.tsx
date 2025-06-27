"use client";

import { useState } from "react";
import InputField from "./InputField";

export default function InputFieldExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
    amount: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    
    // 清除错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 简单的验证
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "姓名是必填项";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "邮箱是必填项";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "密码是必填项";
    } else if (formData.password.length < 6) {
      newErrors.password = "密码至少需要6个字符";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log("表单数据:", formData);
      alert("表单提交成功！");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">InputField 组件示例</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="姓名"
          placeholder="请输入您的姓名"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e)}
          required
          error={errors.name}
        />
        
        <InputField
          label="邮箱"
          type="email"
          placeholder="请输入您的邮箱"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e)}
          required
          error={errors.email}
        />
        
        <InputField
          label="密码"
          type="password"
          placeholder="请输入您的密码"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e)}
          required
          error={errors.password}
        />
        
        <InputField
          label="金额"
          type="number"
          placeholder="请输入金额"
          value={formData.amount}
          onChange={(e) => handleInputChange("amount", e)}
        />
        
        <InputField
          label="留言"
          placeholder="请输入您的留言"
          value={formData.message}
          large
          onChange={(e) => handleInputChange("message", e)}
        />
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          提交表单
        </button>
      </form>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">当前表单数据：</h3>
        <pre className="text-sm text-gray-700 whitespace-pre-wrap">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
} 