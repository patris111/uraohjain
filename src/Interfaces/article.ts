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
    subtitle_1: string;
    paragraph_1: string;
    subtitle_2: string;
    paragraph_2: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
