/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL_SERVER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
