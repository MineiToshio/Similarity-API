"use client";

import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import { FC } from "react";
import SimpleBar from "simplebar-react";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code animated language="javascript" code={nodejs} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          {/* Set language as javascript as python is not in the default bundle */}
          <Code animated language="javascript" code={python} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
