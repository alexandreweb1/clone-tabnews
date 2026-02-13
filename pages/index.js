import fs from "fs";
import path from "path";
import Head from "next/head";
import { useEffect } from "react";

export default function Home({ cssContent, bodyContent, scriptContent }) {
  useEffect(() => {
    if (scriptContent) {
      const script = document.createElement("script");
      script.textContent = scriptContent;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [scriptContent]);

  return (
    <>
      <Head>
        <title>F1 Hub • A Comunidade da Velocidade</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Teko:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: cssContent }} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "pages", "formulaview.html");
  const html = fs.readFileSync(filePath, "utf8");

  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
  const cssContent = styleMatch ? styleMatch[1] : "";

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const fullBodyContent = bodyMatch ? bodyMatch[1] : "";

  const scriptMatch = fullBodyContent.match(/<script>([\s\S]*?)<\/script>/i);
  const scriptContent = scriptMatch ? scriptMatch[1] : "";

  const bodyContent = fullBodyContent.replace(
    /<script[\s\S]*?<\/script>/gi,
    "",
  );

  return {
    props: { cssContent, bodyContent, scriptContent },
  };
}
