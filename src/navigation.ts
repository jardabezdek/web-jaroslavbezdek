import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:bezdekjarda@seznam.cz' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jaroslavbezdek/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.x.com/iamjaroslav/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jardabezdek' },
    { ariaLabel: 'StackOverflow', icon: 'tabler:brand-stackoverflow', href: 'https://stackoverflow.com/users/7122272/jaroslav-bezdek' },
  ],
};
