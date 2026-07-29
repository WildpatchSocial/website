import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/",
          filePath: "content/home.json",
          fields: [
            { name: "title", type: "string", required: true }
          ]
        }
      ],
    })
  ]
});
