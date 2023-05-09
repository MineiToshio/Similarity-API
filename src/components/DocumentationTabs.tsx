import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        {/* <SimpleBar></SimpleBar> */}
        <Code animated language="javascript" code={nodejs} show />
      </TabsContent>
      <TabsContent value="python">
        {/* Set language as javascript as python is not in the default bundle */}
        <Code animated language="javascript" code={python} show />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
