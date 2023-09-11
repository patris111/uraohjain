export default interface Article {
  id: number;
  attributes: {
    title: string;
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
            small: {
              url: string;
            };
            medium: {
              url: string;
            };
          };
        };
      };
    };
    introduction: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
