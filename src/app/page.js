import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';
export default function Home() {
  let data = [
    {
      id: 1022789,
      title: 'Inside Out 2',
      imgsrc:
        'https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg',
      rating: 7.745,
      overview:
        "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      poster: 'https://image.tmdb.org/t/p/w500/oxxqiyWrnM0XPnBtVe9TgYWnPxT.jpg',
      banner:
        'https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg',
      genre: [
        {
          id: 12,
          name: 'Adventure',
        },
        {
          id: 16,
          name: 'Animation',
        },
        {
          id: 35,
          name: 'Comedy',
        },
      ],
    },
  ];
  return <HomePage data={data} />;
}
