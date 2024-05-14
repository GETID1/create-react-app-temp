// 生成随机todo id
export const randomId = () => {
  return Math.random().toString(36).substring(2, 9);
};

// 格式化时间
export const formattedDate = (date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formatter.format(date);
};
