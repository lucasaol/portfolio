export type Messages = {
  HomePage: {
    title: string;
    description: string;
  };
  Metadata: {
    title: string;
    description: string;
  };
  Sidebar: {
    about: string;
    projects: string;
    resume: string;
    contact: string;
  };
  Footer: {
    rights: string;
  };
  NotFound: {
    title: string;
    description: string;
    backToHome: string;
    contactCta: string;
  };
  About: {
    title: string;
    role: string;
    bio: string;
    description: string;
    viewPortfolio: string;
    viewResume: string;
  };
  Overview: {
    title: string;
    subtitle: string;
  };
  Projects: {
    featured: {
      title: string;
      subtitle: string;
      viewAll: string;
    },
    title: string;
    intro: string;
    callToAction: string;
    ctaLink: string;
    ctaTitle: string;
    ctaDescription: string;
    viewMore: string;
    overview: string;
    stackUsed: string;
    all: string;
  };
  Contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    location: string;
  };
};
