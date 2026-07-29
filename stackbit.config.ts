import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      // Tell Netlify to look at your top-level project directory
      contentDirs: ["."], 
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",              // Maps directly to your homepage (yourwebsite.com/)
          filePath: "index.html",    // Points directly to your index.html file
          fields: [
            { name: "title", type: "string", required: true }
          ]
        }
      ],
    })
  ]
});
