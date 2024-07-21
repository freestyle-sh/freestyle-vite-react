import { defineConfig} from 'freestyle-sh';

export default defineConfig({
  dev: {
    proxy: "http://localhost:5173"
  },
  deploy: {
    web: {
        entryPoint: "serve.ts",
    }
  }
});
