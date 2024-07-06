const LOCALSTORAGE_KEY = "ts-monkey-code";

export function saveFile(code: string) {
  localStorage.setItem(LOCALSTORAGE_KEY, btoa(code));
}

export function loadFile() {
  const fileData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (!fileData) return null;
  return atob(fileData);
}

export function deleteFile() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
