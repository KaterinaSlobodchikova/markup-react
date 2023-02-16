onmessage = async ($event) => {
  if ($event && $event.data && $event.data.msg === "incClicks") {
    const newCounter = incClicks($event.data.countClicks);
    postMessage(newCounter);
  }
};

export function incClicks(countClicks: number) {
  const start = Date.now();
  while (Date.now() < start + 5000) {}
  return countClicks + 1;
}
