export default {
  template: ` <a v-for="icon in icons" :key="icon.id" :href="icon.target_url" target="_blank">
                <i :class="icon.code"></i>
              </a>
    `,

  data() {
    return {
      icons: [
        {
          id: 1,
          code: 'fab fa-facebook fa-2x',
          target_url: 'https://www.facebook.com/karllouise08',
        },
        {
          id: 2,
          code: 'fab fa-twitter fa-2x',
          target_url: 'https://twitter.com/karl_rito',
        },
        {
          id: 3,
          code: 'fab fa-linkedin fa-2x',
          target_url: 'https://www.linkedin.com/in/karllouise08',
        },
        {
          id: 4,
          code: 'fab fa-github fa-2x',
          target_url: 'https://github.com/Karllouise-code',
        },
        {
          id: 5,
          code: 'fab fa-instagram fa-2x',
          target_url: 'https://www.instagram.com/kalowies_',
        },
        {
          id: 6,
          code: 'fas fa-cloud fa-2x',
          target_url: 'https://trailblazer.me/id/karllouise08',
        },
        {
          id: 7,
          code: 'fas fa-pen-nib fa-2x',
          target_url: 'https://karllouiserito.hashnode.dev/',
        },
        {
          id: 8,
          code: 'fab fa-goodreads fa-2x',
          target_url: 'https://www.goodreads.com/user/show/128431182-karl-louise-rito',
        },
        {
          id: 9,
          code: 'fab fa-dev fa-2x',
          target_url: 'https://dev.to/kalowies_',
        },
      ],
    };
  },
};
