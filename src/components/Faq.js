import React from 'react';

let data = [
  {
    question: 'What is Netflix?',
    answer:
      'Netflix is a streaming service that offers a wide variety of TV shows, movies, and documentaries for its subscribers to watch.',
  },
  {
    question: 'How much does Netflix cost?',
    answer:
      'Netflix costs $14.99 per month for its basic plan, which includes access to a vast library of content.',
  },
  {
    question: 'Where can I watch?',
    answer:
      'You can watch Netflix on a variety of devices, including smart TVs, smartphones, tablets, smartwatches, and streaming devices.',
  },
  {
    question: 'How do I cancel?',
    answer:
      'To cancel your Netflix subscription, you can log in to your account and go to the subscription management page.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix offers a wide variety of content, including TV shows, movies, documentaries, and original content produced exclusively for the platform.',
  },
  {
    question: 'Is Netflix good for kids?',
    answer:
      'While Netflix has a diverse library of content, parents can use the parental controls to restrict access to certain types of content.',
  },
];

function Faq() {
  let [showFaqAnswer, setShowFaqAnswer] = React.useState(null);

  let handleClick = (e) => {
    console.log(e.target.id);
    let ele = document.getElementById('email');
    ele.focus();
  };

  let handleFaqClick = (index) => {
    setShowFaqAnswer(showFaqAnswer === index ? null : index);
  };

  return (
    <div className='bg-black border-b-[6px] border-gray-900 text-white p-8 flex flex-col justify-center items-center'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
        Frequently Asked Questions
      </h2>
      <div className='flex flex-col py-3 px-4 w-full sm:w-3/4 lg:w-2/3 gap-3 my-3'>
        {data.map((item, index) => (
          <div key={index} className='flex flex-col gap-1'>
            <div
              onClick={() => handleFaqClick(index)}
              className='flex justify-between bg-[#353434] cursor-pointer hover:bg-slate-600 px-3 py-4 rounded-md'
            >
              <p className='text-lg'>{item.question}</p>
              <p className='text-2xl font-light'>
                {showFaqAnswer === index ? '✕' : '+'}
              </p>
            </div>
            {showFaqAnswer === index && (
              <div className='bg-[#353434] p-3 rounded-md text-lg'>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className='text-lg text-center'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className='pt-2 flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-3/4 lg:w-2/3'>
        <input
          id='email'
          className='p-3 bg-transparent border rounded-md w-full sm:w-2/3 lg:w-1/3 text-black'
          type='text'
          placeholder='Email Address'
        />
        <button
          onClick={handleClick}
          className='bg-red-600 hover:bg-red-900 p-3 text-white text-xl font-bold rounded-md w-full sm:w-1/3 lg:w-1/4'
        >
          Get Started &gt;
        </button>
      </div>
    </div>
  );
}

export default Faq;
