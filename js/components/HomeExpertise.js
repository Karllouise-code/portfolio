export default {
  template: `<div class="row">
              <div class="col" v-for="a in expertise" :key="a.id">
                <a :href="a.href_url" target="_blank">
                  <div class="card">
                    <img :src="a.img_source" :alt="a.name" class="card-img" />
                    <div class="card-layer">
                      <h3>{{ a.name }}</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          `,
  data() {
    return {
      expertise: [
        {
          name: 'Laravel',
          img_source: 'img/logo/laravel.png',
          href_url: 'https://laravel.com',
        },
        {
          name: 'Vuejs',
          img_source: 'img/logo/vuejs-icon.svg',
          href_url: 'https://vuejs.org',
        },
        {
          name: 'GraphQL',
          img_source: 'img/logo/graphql.png',
          href_url: 'https://github.com/rebing/graphql-laravel',
        },
        {
          name: 'VS Code',
          img_source: 'img/logo/vscode.svg',
          href_url: 'https://code.visualstudio.com',
        },
        {
          name: 'Postman',
          img_source: 'img/logo/postman.svg',
          href_url: 'https://www.postman.com',
        },
        {
          name: 'MySQL',
          img_source: 'img/logo/mysql-icon.svg',
          href_url: 'https://www.mysql.com',
        },
        {
          name: 'NodeJS',
          img_source: 'img/logo/nodejs-icon.svg',
          href_url: 'https://nodejs.org',
        },
        {
          name: 'Git',
          img_source: 'img/logo/git-scm-icon.svg',
          href_url: 'https://git-scm.com',
        },
        {
          name: 'Bootstrap',
          img_source: 'img/logo/getbootstrap-icon.svg',
          href_url: 'https://getbootstrap.com',
        },
        {
          name: 'Sass',
          img_source: 'img/logo/sass-lang-icon.svg',
          href_url: 'https://sass-lang.com',
        },
        {
          name: 'jQuery',
          img_source: 'img/logo/jquery-icon.svg',
          href_url: 'https://jquery.com',
        },
        {
          name: 'JavaScript',
          img_source: 'img/logo/javascript-icon.svg',
          href_url: 'https://www.javascript.com',
        },
        {
          name: 'PHP',
          img_source: 'img/logo/php-icon.svg',
          href_url: 'https://www.php.net',
        },
        {
          name: 'HTML',
          img_source: 'img/logo/w3_html5-icon.svg',
          href_url: 'https://www.w3schools.com',
        },
        {
          name: 'CSS',
          img_source: 'img/logo/w3_css-icon.svg',
          href_url: 'https://www.w3schools.com',
        },
        {
          name: 'Canva',
          img_source: 'img/logo/canva-icon.svg',
          href_url: 'https://www.canva.com',
        },
      ],
    };
  },
};
