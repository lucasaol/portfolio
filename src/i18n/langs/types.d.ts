export type Messages = {
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
    ctaTitle: string;
    ctaSubtitle: string;
    sendMessage: string;
    location: string;
    contactInfoLabel: string;
    socialMediaLabel: string;
    sendMessageTitle: string;
    form: {
      name: {
        label: string;
        placeholder: string;
      },
      email: {
        label: string;
        placeholder: string;
      },
      subject: {
        label: string;
        placeholder: string;
      },
      message: {
        label: string;
        placeholder: string;
      }
    },
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
  };
  Resume: {
    title: string;
    download: string;
    contactLabel: string;
    socialLabel: string;
    languagesLabel: string;
    careerLabel: string;
    careerSummary: string,
    careerGoals: string,
    experiencesLabel: string;
    educationLabel: string;
  };
};
