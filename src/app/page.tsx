import { FilesystemItem } from "@/components/FileSystem";
import { nodes } from "@/utils/nodeTree";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-20 font-medium">
      <div>
        <ul>
          {nodes.map((node) => (
            <FilesystemItem node={node} key={node.name} />
          ))}
        </ul>
      </div>
    </main>
  );
}
