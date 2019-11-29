import React, { Component } from "react";

import blogposts from "../posts/index";

export default class SiteMap extends Component {
  static async getInitialProps({ req, res }) {
    if (res) {
      const path = require("path");
      const fs = require("fs");

      const SITE_ROOT = process.env.SITE_ROOT || "https://blog.fengqijun.me";

      let xml = "";
      xml += '<?xml version="1.0" encoding="UTF-8"?>';
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

      blogposts.forEach(post => {
        xml += "<url>";
        xml += `<loc>${SITE_ROOT + post.path}</loc>`;
        xml += `<lastmod>${post.publishedAt}</lastmod>`;
        xml += `<changefreq>always</changefreq>`;
        xml += `<priority>0.5</priority>`;
        xml += "</url>";
      });

      xml += "</urlset>";
      res.setHeader("Content-Type", "text/xml");
      res.write(xml);
      res.end();
    }
  }
}
