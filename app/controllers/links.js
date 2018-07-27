import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  linkItems: A([
    {
      title: 'Site de Patrick Bénézi',
      url: 'http://www.aikido-benezi.com',
      image: '/assets/link_benezi.jpg'
    },
    {
      title: 'Site de la FFAAA',
      url: 'http://www.aikido.com.fr',
      image: '/assets/link_ffaaa.png'
    },
    {
      title: 'Site de Maître Christian Tissier',
      url: 'http://www.christiantissier.com',
      image: '/assets/link_tissier.jpg'
    },
    {
      title: 'Site de Maître Yamaguchi',
      url: 'http://www.yamaguchi-aikido.com/html/menu.html',
      image: '/assets/link_yamaguchi.jpg'
    },
    {
      title: 'Site du TOS KARATE-DO',
      url: 'http://www.toskarate.com',
      image: '/assets/link_toskarate.jpg'
    }
  ]),

  docs: A([
    {
      title: 'Tryptique de présentation de l\'Aiki3 (pdf)',
      url: '/assets/triptyque 2010-2011.pdf'
    },
    {
      title: 'Le planning des stages 2017-2018 de Patrick Bénézi (pdf)',
      url: 'http://www.aikido-benezi.com/graphics/stage2017-2018/planning%202017-2018-3.pdf'
    }
  ])
});
