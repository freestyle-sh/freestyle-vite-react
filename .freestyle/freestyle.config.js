// freestyle.config.ts
import { defineConfig } from "freestyle-sh";
var freestyle_config_default = defineConfig({
  dev: {
    proxy: "http://localhost:5173"
  },
  deploy: {
    web: {
      entryPoint: "serve.ts"
    }
  }
});
export {
  freestyle_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZnJlZXN0eWxlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnfSBmcm9tICdmcmVlc3R5bGUtc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBkZXY6IHtcbiAgICBwcm94eTogXCJodHRwOi8vbG9jYWxob3N0OjUxNzNcIlxuICB9LFxuICBkZXBsb3k6IHtcbiAgICB3ZWI6IHtcbiAgICAgICAgZW50cnlQb2ludDogXCJzZXJ2ZS50c1wiLFxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBbUI7QUFFNUIsSUFBTywyQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNELFlBQVk7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
