import * as React from "react";
import { cn } from "@/lib/utils";

// 1. 修改 Card 组件的 props 类型，添加图片相关的属性
interface CardProps extends React.ComponentProps<"div"> {
  imageUrl?: string; // 图片 URL，可选
  imageAlt?: string; // 图片的 alt 文本，可选
}

// 2. 修改 Card 组件的实现
function Card({ className, imageUrl, imageAlt, children, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        // 移除默认的 py-6 (垂直内边距) 和 gap-6 (子元素间距)
        // 保留 bg-card, text-card-foreground, rounded-xl, border, shadow-sm
        // 添加 overflow-hidden 确保图片在圆角卡片内不溢出
        "bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm overflow-hidden",
        className // 应用外部传递的 className，它会覆盖或合并前面的默认类
      )}
      {...props}
    >
      {/* 3. 在 Card 组件内部渲染图片，放在所有 children 之前 */}
      {/* 只有当 imageUrl 存在时才渲染图片 */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || ""} // 如果没有提供 imageAlt，使用空字符串
          // 使图片宽度充满父容器，并设置为块级元素以消除底部空白
          // 添加 mb-4 在图片下方创建一些间距，与下面的内容区域分隔
          className="w-full block mb-4"
        />
      )}

      {/* 渲染 Card 的子元素 (CardHeader, CardContent, CardFooter 等) */}
      {/* 注意：子元素之间的垂直间距现在需要通过给子元素添加 margin-bottom 来实现 */}
      {children}
    </div>
  );
}

// 以下是其他子组件，保持不变，但要注意它们的默认 padding (px-6)
// 这个 px-6 正好为 CardContent, CardHeader, CardFooter 提供了左右内边距，
// 使得文字内容不会贴边，符合图片中的样式。

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      // px-6 提供了左右内边距
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      // px-6 提供了左右内边距
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
