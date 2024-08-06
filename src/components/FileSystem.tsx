"use client";

import { NodeTree } from "@/utils/nodeTree";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import {
  FaAngleRight,
  FaFile,
  FaFileImage,
  FaFileVideo,
  FaFolder,
  FaFolderOpen,
} from "react-icons/fa6";

const fileIconMap: { [key: string]: JSX.Element } = {
  ".txt": <FaFileAlt className="ml-[22px] size-6 text-gray-400" />,
  ".jpg": <FaFileImage className="ml-[22px] size-6 text-gray-400" />,
  ".jpeg": <FaFileImage className="ml-[22px] size-6 text-gray-400" />,
  ".png": <FaFileImage className="ml-[22px] size-6 text-gray-400" />,
  ".mp4": <FaFileVideo className="ml-[22px] size-6 text-gray-400" />,
  // Add more mappings as needed
};

const defaultIcon = <FaFile className="ml-[22px] size-6 text-gray-400" />;

export function FilesystemItem({ node }: { node: NodeTree }) {
  let [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!node.nodes) return alert(node.name);
    setIsOpen(!isOpen);
  };

  const getFileIcon = (name: string) => {
    const extension = Object.keys(fileIconMap).find((ext) =>
      name.toLowerCase().endsWith(ext)
    );
    return extension ? fileIconMap[extension] : defaultIcon;
  };
  return (
    <li key={node.name}>
      <button
        onClick={handleToggle}
        className="flex items-center gap-1.5 py-1 w-full text-left "
      >
        {node.nodes && node.nodes.length >= 0 && (
          <FaAngleRight
            className={`size-4 text-gray-500 transform transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        )}

        {node.nodes ? (
          <>
            {isOpen ? (
              <FaFolderOpen className={`size-6 text-sky-500`} />
            ) : (
              <FaFolder className={`size-6 text-sky-500`} />
            )}
          </>
        ) : (
          getFileIcon(node.name)
        )}
        {node.name}
      </button>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.length === 0 ? (
            <span className="pl-7 text-red-400">Empty</span>
          ) : (
            node.nodes?.map((node) => (
              <FilesystemItem node={node} key={node.name} />
            ))
          )}
        </ul>
      )}
    </li>
  );
}
