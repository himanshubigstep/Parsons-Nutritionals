import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(`
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://api.parsonsnutritionals.in/home</loc>
        <lastmod>2024-11-01</lastmod>
      </url>
      <url>
        <loc>https://api.parsonsnutritionals.in/contact</loc>
        <lastmod>2024-11-15</lastmod>
      </url>
    </urlset>
  `);
}
