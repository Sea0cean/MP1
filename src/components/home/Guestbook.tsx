"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/Button";

interface Message {
  name: string;
  content: string;
  timestamp: string;
}

export default function Guestbook() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("guestbookMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMessage = {
      name,
      content,
      timestamp: new Date().toLocaleString(),
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem("guestbookMessages", JSON.stringify(updatedMessages));

    setName("");
    setContent("");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">留言板</h2>
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="text"
          placeholder="您的姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="留言内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
        />
        <Button type="submit">提交留言</Button>
      </form>

      <div className="space-y-2">
        {messages.map((message, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{message.name}</span>
              <span>{message.timestamp}</span>
            </div>
            <p className="mt-1">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
