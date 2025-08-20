export type NodeTree = {
  name: string;
  nodes?: NodeTree[];
};

export const nodes: NodeTree[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Movies",
        nodes: [
          {
            name: "Action",
            nodes: [
              {
                name: "2000s",
                nodes: [
                  { name: "XMen.mp4" },
                  { name: "The-Dark-Knight.mp4" },
                  { name: "Harry Potter 1.mp4" },
                ],
              },
              {
                name: "2010s",
                nodes: [{ name: "IronMan.mp4" }, { name: "Inception.mp4" }],
              },
            ],
          },
          {
            name: "Comedy",
            nodes: [],
          },
        ],
      },
      {
        name: "Music",
        nodes: [
          { name: "Rock", nodes: [] },
          { name: "Classical", nodes: [] },
        ],
      },
      { name: "Pictures", nodes: [] },
      {
        name: "Documents",
        nodes: [],
      },
      {
        name: "Projects",
        nodes: [
          {
            name: "gql-try",
            nodes: [
              {
                name: "public",
                nodes: [
                  { name: "file.svg" },
                  { name: "globe.svg" },
                  { name: "next.svg" },
                  { name: "vercel.svg" },
                  { name: "window.svg" },
                ],
              },
              {
                name: "src",
                nodes: [
                  {
                    name: "app",
                    nodes: [
                      {
                        name: "(app)",
                        nodes: [{ name: "layout.tsx" }, { name: "page.tsx" }],
                      },
                      {
                        name: "(auth)",
                        nodes: [
                          {
                            name: "auth",
                            nodes: [{ name: "page.tsx" }],
                          },
                          { name: "layout.tsx" },
                        ],
                      },
                      { name: "favicon.ico" },
                      { name: "globals.css" },
                      { name: "layout.tsx" },
                    ],
                  },
                  {
                    name: "components",
                    nodes: [
                      { name: "core", nodes: [] },
                      {
                        name: "ui",
                        nodes: [
                          { name: "button.tsx" },
                          { name: "card.tsx" },
                          {
                            name: "code-block",
                            nodes: [
                              { name: "index.tsx" },
                              { name: "server.tsx" },
                            ],
                          },
                          { name: "code-editor.tsx" },
                          { name: "form.tsx" },
                          { name: "input.tsx" },
                          { name: "label.tsx" },
                          { name: "passwordfield.tsx" },
                          { name: "select.tsx" },
                          { name: "sonner.tsx" },
                          { name: "spinner.tsx" },
                          { name: "tabs.tsx" },
                          { name: "theme-animations.ts" },
                          { name: "theme-toggle-button.tsx" },
                        ],
                      },
                    ],
                  },
                  {
                    name: "db",
                    nodes: [
                      {
                        name: "auth",
                        nodes: [{ name: "authSlice.ts" }],
                      },
                      { name: "hooks.redux.ts" },
                      { name: "storage.ts" },
                      { name: "store.ts" },
                    ],
                  },
                  {
                    name: "gql",
                    nodes: [
                      { name: "fragment-masking.ts" },
                      { name: "gql.ts" },
                      { name: "graphql.ts" },
                      { name: "index.ts" },
                    ],
                  },
                  {
                    name: "lib",
                    nodes: [
                      { name: "ApolloWrapper.tsx" },
                      { name: "providers.tsx" },
                      { name: "route-guard.ts" },
                      { name: "theme-provider.tsx" },
                      { name: "type.ts" },
                      { name: "utils.ts" },
                    ],
                  },
                  {
                    name: "service",
                    nodes: [
                      {
                        name: "action",
                        nodes: [{ name: "userAction.ts" }],
                      },
                      {
                        name: "queries",
                        nodes: [{ name: "user.graphql" }],
                      },
                    ],
                  },
                ],
              },
              { name: "bun.lock" },
              { name: "codegen.ts" },
              { name: "components.json" },
              { name: "graphql.schema.json" },
              { name: "next.config.ts" },
              { name: "next-env.d.ts" },
              { name: "package.json" },
              { name: "postcss.config.mjs" },
              { name: "README.md" },
              { name: "tsconfig.json" },
            ],
          },
        ],
      },
      { name: "passwords.tsx" },
      { name: "input.sh" },
    ],
  },
];
