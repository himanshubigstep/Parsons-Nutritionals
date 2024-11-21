// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async headers() {
      return [
        {
          source: "/(.*)", // Apply headers to all routes
          headers: [
            {
              key: "Content-Security-Policy",
              value: "default-src 'self'; script-src 'self'; object-src 'none';", // Example CSP policy
            },
            {
              key: "Strict-Transport-Security",
              value: "max-age=31536000; includeSubDomains; preload", // HSTS policy
            },
          ],
        },
      ];
    },
  };
  