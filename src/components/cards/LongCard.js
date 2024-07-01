import IconButton from '../small/IconButton';
let data = [
  {
    id: 4194,
    title: 'Star Wars: The Clone Wars',
    rating: 8.5,
    overview:
      'Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.',
    poster: 'https://image.tmdb.org/t/p/w500/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/jjECb6dSFUKXDtryuQk4rkFY7oP.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 42009,
    title: 'Black Mirror',
    rating: 8.285,
    overview:
      "Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.",
    poster: 'https://image.tmdb.org/t/p/w500/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/38aCLy0BdFbOAIEfuDladoITHN0.jpg',
    genre: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 66732,
    title: 'Stranger Things',
    rating: 8.611,
    overview:
      'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    poster: 'https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    genre: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 63174,
    title: 'Lucifer',
    rating: 8.47,
    overview:
      "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
    poster: 'https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/aDBRtunw49UF4XmqfyNuD9nlYIu.jpg',
    genre: [
      {
        id: 80,
        name: 'Crime',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 38472,
    title: "Marvel's Jessica Jones",
    rating: 7.501,
    overview:
      'After a tragic ending to her short-lived super hero stint, Jessica Jones is rebuilding her personal life and career as a detective who gets pulled into cases involving people with extraordinary abilities in New York City.',
    poster: 'https://image.tmdb.org/t/p/w500/lwPFyjxAZY6NqHxywgY00Y4MFBx.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/fjEOQhzZk2Or7VYUBeMx5ZIwU95.jpg',
    genre: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 71912,
    title: 'The Witcher',
    rating: 8.076,
    overview:
      'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
    poster: 'https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 228958,
    title: "Joko Anwar's Nightmares and Daydreams",
    rating: 6.675,
    overview:
      'Tales of supernatural sci-fi phenomena unfold in this collection of seven mind-bending, interconnected stories imagined by writer-director Joko Anwar.',
    poster: 'https://image.tmdb.org/t/p/w500/zmTXlzj9SPNK9d7NSDFioBDNiYL.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/aiCSg8b7qYFe6lfBsxfljDJ5xGx.jpg',
    genre: [
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 103768,
    title: 'Sweet Tooth',
    rating: 7.856,
    overview:
      "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
    poster: 'https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/xpba0Dxz3sxV3QgYLR8UIe1LAAX.jpg',
    genre: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 75758,
    title: 'Lost in Space',
    rating: 7.551,
    overview:
      "After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they're surrounded by hidden dangers.",
    poster: 'https://image.tmdb.org/t/p/w500/y8NJnTXzb4rio9uvVYFVrXEMofU.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/iRJt2SPLNGIfl9sQnDjWHArpwQF.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 35,
        name: 'Comedy',
      },
      {
        id: 18,
        name: 'Drama',
      },
    ],
  },
  {
    id: 79696,
    title: 'Manifest',
    rating: 7.697,
    overview:
      'After landing from a turbulent but routine flight, the crew and passengers of Montego Air Flight 828 discover five years have passed in what seemed like a few hours. As their new realities become clear, a deeper mystery unfolds and some of the returned passengers soon realize they may be meant for something greater than they ever thought possible.',
    poster: 'https://image.tmdb.org/t/p/w500/eTemCphrglLKrXOsNRhYezHA7H9.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/iZu83GB1IM7VXL2X90m7iLHYUHU.jpg',
    genre: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 39659,
    title: 'TIGER & BUNNY',
    rating: 6.8,
    overview:
      'In an alternate New York City protected by a band of superheroes called NEXT, veteran Wild Tiger is forced to team up with rookie Barnaby Brooks Jr.',
    poster: 'https://image.tmdb.org/t/p/w500/7wMu4oweCllUTdFFjAhIRTh1L6p.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/buSADMJdGIngbPFk9ddoP6RQYnI.jpg',
    genre: [
      {
        id: 10759,
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
  {
    id: 63210,
    title: 'Shadowhunters',
    rating: 7.558,
    overview:
      "When Clary Fray's mother has disappeared, Clary joins a band of Shadowhunters; demon killing hunters, and gets caught up in a plan to save the world.",
    poster: 'https://image.tmdb.org/t/p/w500/66YHvvVduC21xcMXPpBBF0ywyVZ.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/o0PtXGp2XyoRu0S1uPYzDpMnkOM.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 108545,
    title: '3 Body Problem',
    rating: 7.521,
    overview:
      'Across continents and decades, five brilliant friends make earth-shattering discoveries as the laws of science unravel and an existential threat emerges.',
    poster: 'https://image.tmdb.org/t/p/w500/ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/ciizJ9Okzt9tBBGK7Q3T14LFT2j.jpg',
    genre: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 70523,
    title: 'Dark',
    rating: 8.422,
    overview:
      'A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.',
    poster: 'https://image.tmdb.org/t/p/w500/7CFCzWIZZcnxHke3yAQiGPWXHwF.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/75HgaphatW0PDI3XIHQWZUpbhn6.jpg',
    genre: [
      {
        id: 80,
        name: 'Crime',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
    ],
  },
  {
    id: 68421,
    title: 'Altered Carbon',
    rating: 7.682,
    overview:
      'After 250 years on ice, a prisoner returns to life in a new body with one chance to win his freedom: by solving a mind-bending murder.',
    poster: 'https://image.tmdb.org/t/p/w500/95IsiH4p5937YXQHaOS2W2dWYOG.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/zLXh4zDGxH7yAwNkWR1LAocKlZb.jpg',
    genre: [
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 2328,
    title: 'Power Rangers',
    rating: 7.033,
    overview:
      'A team of teenagers with attitude are recruited to save Angel Grove from the evil witch, Rita Repulsa, and later, Lord Zedd, Emperor of all he sees, and their horde of monsters.',
    poster: 'https://image.tmdb.org/t/p/w500/qx3SJlAp2RK656TusqKx1qEqVMW.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/i01wnWz0Z3rMATqbkAVLHEaGbNP.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 10762,
        name: 'Kids',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 75006,
    title: 'The Umbrella Academy',
    rating: 8.571,
    overview:
      "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.",
    poster: 'https://image.tmdb.org/t/p/w500/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/7sqFEDDmK1hG5m92upolcfQxy7R.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 82452,
    title: 'Avatar: The Last Airbender',
    rating: 8.012,
    overview:
      'A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.',
    poster: 'https://image.tmdb.org/t/p/w500/lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/imlTCObfzISogbvcwB1dokoXAIc.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 86831,
    title: 'Love, Death & Robots',
    rating: 8.263,
    overview:
      'Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David Fincher.',
    poster: 'https://image.tmdb.org/t/p/w500/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/78NtUwwo3lhH7QGh4vG3U1qK1mc.jpg',
    genre: [
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
      },
    ],
  },
  {
    id: 237512,
    title: 'Jurassic World: Chaos Theory',
    rating: 8.429,
    overview:
      'The Camp Cretaceous gang comes together to unravel a mystery when they discover a global conspiracy that brings danger to dinosaurs — and to themselves.',
    poster: 'https://image.tmdb.org/t/p/w500/c2Od0cY2IeayDj5osUxZSAD1QK.jpg',
    banner:
      'https://image.tmdb.org/t/p/original/7y31JWag4vsWtXZvcjmLUDJ6NSp.jpg',
    genre: [
      {
        id: 10759,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 10751,
        name: 'Family',
      },
    ],
  },
];

export default function LongCard() {
  return (
    <div className='flex pl-6 mt-[-10%] flex-col space-y-4'>
      <h2 className='text-xl text-white font-bold'>{'Only On Netflix'}</h2>
      <div className='flex pl-6 scrollbar-hidden gap-1 overflow-x-auto no-scrollbar overflow-hidden py-9'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative group w-[250px] h-[400px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:transform hover:scale-125 hover:z-10`}
          >
            <div className='relative'>
              <img
                className='w-full h-full rounded-md'
                src={item.poster}
                alt=''
              />
              <div className='absolute bottom-0 w-full bg-transparent p-2 text-white rounded-md hidden group-hover:flex flex-col'>
                <div className='flex justify-between p-1'>
                  <div className='flex gap-2'>
                    <IconButton icon='►' />
                    <IconButton icon='+' />
                  </div>
                  <IconButton icon='▾' />
                </div>

                <p className='text-sm'>{item.title}</p>

                <p className='text-sm text-green-500'>{item.rating}</p>

                <p className='text-sm'>
                  {item.genre.map((item, index) => (
                    <span key={index}>{item.name}・</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
