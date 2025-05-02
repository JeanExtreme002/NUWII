import Head from "next/head";
import { NavBar } from "@/components";
import { config } from "@/lib";

export function Header() {
  const title = config.website.title + " | " + config.website.subtitle;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"></meta>
      </Head>

      <NavBar/>
    </>
  );
}