export default function (eleventyConfig) {
  // 管理画面と画像はそのままコピー（テンプレート処理はしない）
  eleventyConfig.ignores.add("src/admin/**");
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // 日付を「2026年9月25日」の形式で表示する
  eleventyConfig.addFilter("jpDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
  });

  // 改行を <br> に変える
  eleventyConfig.addFilter("br", (text) =>
    String(text || "")
      .split("\n")
      .join("<br>")
  );

  // 空行で区切って段落 <p> にする
  eleventyConfig.addFilter("paragraphs", (text) =>
    String(text || "")
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${p.split("\n").join("<br>")}</p>`)
      .join("\n")
  );

  // お知らせを新しい順に並べる
  eleventyConfig.addCollection("news", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
