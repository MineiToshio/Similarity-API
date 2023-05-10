import "@/styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // offset navbar height
  return <section className="pt-20">{children}</section>;
};

export default RootLayout;
