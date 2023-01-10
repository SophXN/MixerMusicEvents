import Link from "next/link";
import Layout from "../components/Layout";
export default function AboutPage() {
  return (
    <Layout title="About DJ Events">
      <h1>About HIHIHIH</h1>
      <p>Musical Events Platform to find your local events!</p>
      <p>Version 1.1.0</p>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <Link href="/">Home</Link>
    </Layout>
  );
}
