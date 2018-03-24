import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  gallery: A([
    {
      title: 'Michel à droite, professeur de l\'Aiki3',
      url: 'gallery_aiki1.jpg',
      width: 479,
      height: 328
    }, {
      title: 'Kokyu Nage (projection)',
      url: 'gallery_aiki2.jpg',
      width: 400,
      height: 330
    }, {
      title: 'Shihoo Nage (projection)',
      url: 'gallery_aiki3.jpg',
      width: 400,
      height: 330
    }, {
      title: 'Hiji Kime Osae',
      url: 'gallery_aiki4.jpg',
      width: 400,
      height: 327
    }, {
      title: 'Nikyo',
      url: 'gallery_aiki5.jpg',
      width: 400,
      height: 330
    }
  ])
});
