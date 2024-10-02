export default function sitemap() {
  return [
    {
      url: "https://www.codetraingh.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.codetraingh.com/courses/software-engineering",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.codetraingh.com/hire-a-graduate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
