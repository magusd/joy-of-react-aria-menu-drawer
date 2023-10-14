import Header from './Header';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <>
      <Header />
      <main>
        <ImageGallery images={data} />
      </main>
    </>
  );
}

const data = [
  {
    src: 'https://sandpack-bundler.vercel.app/img/pink-balloons.jpg',
    alt: 'Several pink and yellow balloons with happy and sad faces',
    photographer: 'Madison Oren',
    originalSource: 'https://unsplash.com/photos/uGP_6CAD-14',
    aspectRatio: '640 / 427',
  },
  {
    src: 'https://sandpack-bundler.vercel.app/img/pink-tub.jpg',
    alt: 'A pink bathtub full of water',
    photographer: 'Curology',
    originalSource: 'https://unsplash.com/photos/UY1AaiAu67E',
    aspectRatio: '640 / 960',
  },
  {
    src: 'https://sandpack-bundler.vercel.app/img/pink-words.jpg',
    alt: 'Scrabble letters scattered on a pink table, with the sentence "Today is your day"',
    photographer: 'Sincerely Media',
    originalSource: 'https://unsplash.com/photos/7Kz6WfD0O84',
    aspectRatio: '640 / 427',
  },
  {
    src: 'https://sandpack-bundler.vercel.app/img/pink-cake-pop.jpg',
    alt: 'A pink cake pop on a blue plate',
    photographer: 'Mae Mu',
    originalSource: 'https://unsplash.com/photos/_C5zsV_p-YI',
    aspectRatio: '640 / 800',
  },
  {
    src: 'https://sandpack-bundler.vercel.app/img/pink-architecture.jpg',
    alt: 'An abstract geometric shape, pink box on blue backdrop',
    photographer: 'nic chi',
    originalSource: 'https://unsplash.com/photos/vRwGMHTtbJY',
    aspectRatio: '640 / 640',
  },
]

export default App;