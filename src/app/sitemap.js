import { parseStringPromise } from 'xml2js';

export async function getServerSideProps() {
  const res = await fetch('https://api.parsonsnutritionals.in/api/sitemap/index.xml');
  const xml = await res.text();
  
  // Parse the XML
  const parsed = await parseStringPromise(xml);
  
  // Extract URLs (assuming sitemap XML follows a standard structure)
  const urls = parsed.sitemapindex.sitemap.map((entry) => entry.loc[0]);

  return {
    props: {
      urls,
    },
  };
}

const Sitemap = ({ urls }) => {
  return (
    <div>
      <h1>Sitemap URLs</h1>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;